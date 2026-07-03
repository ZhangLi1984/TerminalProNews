// ==========================================
// 主应用逻辑
// ==========================================

const AppState = {
  currentTab: 'decision',
  currentDate: '2026-07-02',
  loadedDates: new Set(),      // 已完整加载的日期后缀
  loadingDates: new Set()      // 正在加载中的日期后缀
};

const TABS = ['decision', 'industry', 'macro', 'broker', 'stock', 'jisilu', 'futures'];
const TAB_LABELS = { decision: '决策内参', industry: '行业汇总', macro: '宏观', broker: '券商', stock: '个股', jisilu: '集思录', futures: '期货' };

// 缓存破坏版本号 - 每次更新代码时递增
const APP_VERSION = '2';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  initDateDropdown();
  setupDateDropdownListener();
  // 首次加载：0702 数据已通过 HTML script 标签加载，直接标记
  AppState.loadedDates.add('0702');
  renderAllContent();
  startClock();
});

// ==================== Tab 切换 ====================
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function switchTab(tabName) {
  AppState.currentTab = tabName;

  // 更新按钮样式
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.className = 'tab-btn active px-4 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white shadow-sm';
    } else {
      btn.className = 'tab-btn px-4 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors';
    }
  });

  // 切换文档面板
  TABS.forEach(t => {
    const doc = document.getElementById(t + '-doc');
    const nav = document.getElementById(t + '-nav-content');
    if (doc) doc.classList.toggle('hidden', t !== tabName);
    if (nav) nav.classList.toggle('hidden', t !== tabName);
  });

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 日期选择器 ====================
function initDateDropdown() {
  renderDateDropdownList();
}

function renderDateDropdownList(filter) {
  const listEl = document.getElementById('date-list');
  const noResultsEl = document.getElementById('date-no-results');
  const clearBtn = document.getElementById('date-search-clear');
  if (!listEl || typeof AVAILABLE_DATES === 'undefined') return;

  const f = (filter || '').trim().toLowerCase();
  const filtered = f
    ? AVAILABLE_DATES.filter(item => item.date.toLowerCase().includes(f) || item.label.toLowerCase().includes(f))
    : AVAILABLE_DATES;

  if (filtered.length === 0) {
    listEl.innerHTML = '';
    if (noResultsEl) noResultsEl.classList.remove('hidden');
    return;
  }
  if (noResultsEl) noResultsEl.classList.add('hidden');
  if (clearBtn) clearBtn.classList.toggle('hidden', !f);

  listEl.innerHTML = filtered.map(item => {
    const isActive = item.date === AppState.currentDate;
    const bg = isActive ? 'bg-red-50 border-l-2 border-l-red-500' : 'hover:bg-slate-50 border-l-2 border-l-transparent';
    const tag = item.tag === 'latest'
      ? '<span class="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-bold">最新</span>'
      : '<span class="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">历史</span>';
    return '<div class="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all ' + bg + '" onclick="selectDate(\'' + item.date + '\')">' +
      '<span class="text-sm font-medium text-slate-700">' + item.label + '</span>' + tag + '</div>';
  }).join('');
}

function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  if (!dropdown) return;
  const isOpen = !dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden');
  if (!isOpen) {
    const input = document.getElementById('date-search-input');
    if (input) { input.value = ''; input.focus(); }
    renderDateDropdownList();
  }
}

function filterDateList(value) {
  renderDateDropdownList(value);
}

function clearDateSearch() {
  const input = document.getElementById('date-search-input');
  if (input) { input.value = ''; renderDateDropdownList(); input.focus(); }
}

function setupDateDropdownListener() {
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('date-dropdown');
    const btn = document.getElementById('date-selector-btn');
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target) && btn && !btn.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function selectDate(date) {
  if (date === AppState.currentDate && AppState.loadedDates.has(date.replace('2026-', '').replace('-', ''))) {
    // 同一日期且已加载，只关闭下拉
    const dropdown = document.getElementById('date-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    return;
  }

  AppState.currentDate = date;

  // 更新日期显示
  const dateDisplay = document.getElementById('current-date-display');
  if (dateDisplay) dateDisplay.textContent = date;

  // 关闭下拉
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) dropdown.classList.add('hidden');

  // 重新渲染日期列表高亮
  renderDateDropdownList();

  // 动态加载数据 + 渲染内容
  loadAndRender(date);
}

// ==================== 动态加载历史数据 ====================
function loadAndRender(date) {
  const suffix = date.replace('2026-', '').replace('-', '');

  // 已加载完成，直接渲染
  if (AppState.loadedDates.has(suffix)) {
    renderAllContent();
    return;
  }

  // 正在加载中，避免重复
  if (AppState.loadingDates.has(suffix)) return;
  AppState.loadingDates.add(suffix);

  // 显示加载状态
  TABS.forEach(tab => {
    const contentEl = document.getElementById(tab + '-content');
    if (contentEl) {
      contentEl.innerHTML = '<div class="loading-state"><div class="loading-spinner"></div><p>正在加载 ' + date + ' 数据...</p></div>';
    }
  });

  let loaded = 0;
  let total = TABS.length * 2; // nav + content for each module
  let successCount = 0;

  TABS.forEach(mod => {
    [mod + '-' + suffix + '-nav.js', mod + '-' + suffix + '-content.js'].forEach(file => {
      const script = document.createElement('script');
      script.src = './data/' + file + '?v=' + APP_VERSION;
      script.onload = function() {
        loaded++;
        successCount++;
        if (loaded === total) finishLoading(suffix, successCount > 0);
      };
      script.onerror = function() {
        loaded++;
        if (loaded === total) finishLoading(suffix, successCount > 0);
      };
      document.body.appendChild(script);
    });
  });
}

function finishLoading(suffix, hasAnyData) {
  AppState.loadingDates.delete(suffix);

  if (hasAnyData) {
    AppState.loadedDates.add(suffix);
    renderAllContent();
  } else {
    // 该日期完全无数据
    TABS.forEach(tab => {
      const contentEl = document.getElementById(tab + '-content');
      if (contentEl) {
        contentEl.innerHTML = '<div class="no-data"><svg class="mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><p class="mt-3 text-sm font-medium">该日期暂无数据</p></div>';
      }
    });
  }
}

// ==================== 渲染所有内容 ====================
function renderAllContent() {
  const date = AppState.currentDate;
  const suffix = date.replace('2026-', '').replace('-', '');

  TABS.forEach(tab => {
    const capTab = tab.charAt(0).toUpperCase() + tab.slice(1);
    const navFn = 'render' + capTab + 'Nav_' + suffix;
    const contentFn = 'render' + capTab + 'Content_' + suffix;

    // 渲染侧边导航
    if (typeof window[navFn] === 'function') {
      try { window[navFn](); } catch(e) { console.warn('Nav error:', tab, e); }
    } else {
      // 无导航数据，清空
      const navEl = document.getElementById(tab + '-nav-content');
      if (navEl) navEl.innerHTML = '<div class="text-xs text-slate-400 px-4 py-2">暂无导航</div>';
    }

    // 渲染内容
    const contentEl = document.getElementById(tab + '-content');
    if (contentEl) {
      if (typeof window[contentFn] === 'function') {
        try {
          contentEl.innerHTML = window[contentFn]();
          // 添加淡入动画
          contentEl.style.opacity = '0';
          requestAnimationFrame(() => {
            contentEl.style.transition = 'opacity 0.3s ease';
            contentEl.style.opacity = '1';
          });
        } catch(e) {
          console.warn('Content error:', tab, e);
          contentEl.innerHTML = '<div class="no-data"><p class="text-sm">内容渲染出错</p></div>';
        }
      } else {
        contentEl.innerHTML = '<div class="no-data"><p class="text-sm">' + (TAB_LABELS[tab] || tab) + ' 暂无该日期数据</p></div>';
      }
    }
  });
}

// ==================== 时钟 ====================
function startClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  function update() {
    const now = new Date();
    clockEl.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => String(n).padStart(2, '0')).join(':');
  }
  update();
  setInterval(update, 1000);
}
