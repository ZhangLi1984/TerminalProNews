// ==========================================
// 智研金融 Terminal Pro - 主应用入口
// ==========================================

/**
 * 应用状态管理
 */
const AppState = {
  activeTab: 'decision',
  activeSection: 'sec1',
  currentDate: '2026-03-08',
  clockInterval: null
};

// 同步日期变量到 dates.js（如果已加载）
if (typeof currentDate !== 'undefined') {
  AppState.currentDate = currentDate;
}

// 同步日期变量到 dates.js（如果后加载）
function syncCurrentDate() {
  if (typeof currentDate !== 'undefined') {
    currentDate = AppState.currentDate;
  }
}

/**
 * 更新活动导航项
 */
function updateActiveNav(sectionId) {
  AppState.activeSection = sectionId;

  // 清除所有导航按钮的高亮
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white', 'shadow-md');
    btn.classList.add('text-slate-700', 'hover:bg-slate-200');

    const dot = btn.querySelector('div');
    if (dot) {
      dot.classList.remove('bg-red-500');
      dot.classList.add('bg-transparent');
    }
  });

  // 高亮当前导航按钮
  const activeBtn = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-700', 'hover:bg-slate-200');
    activeBtn.classList.add('bg-slate-900', 'text-white', 'shadow-md');

    const dot = activeBtn.querySelector('div');
    if (dot) {
      dot.classList.remove('bg-transparent');
      dot.classList.add('bg-red-500');
    }
  }
}

/**
 * 切换 Tab
 */
function switchTab(tab) {
  if (AppState.activeTab === tab) return;

  AppState.activeTab = tab;

  // 更新 Tab 按钮样式
  const decisionBtn = document.getElementById('tab-decision');
  const industryBtn = document.getElementById('tab-industry');
  const decisionDoc = document.getElementById('decision-doc');
  const industryDoc = document.getElementById('industry-doc');

  if (tab === 'decision') {
    decisionBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    decisionBtn.classList.add('bg-white', 'text-red-700', 'shadow-sm', 'border', 'border-slate-200');
    industryBtn.classList.remove('bg-white', 'text-blue-700', 'shadow-sm', 'border', 'border-slate-200');
    industryBtn.classList.add('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    decisionDoc.classList.remove('hidden');
    industryDoc.classList.add('hidden');
    setTimeout(() => updateActiveNav('sec1'), 100);
  } else {
    industryBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    industryBtn.classList.add('bg-white', 'text-blue-700', 'shadow-sm', 'border', 'border-slate-200');
    decisionBtn.classList.remove('bg-white', 'text-red-700', 'shadow-sm', 'border', 'border-slate-200');
    decisionBtn.classList.add('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    industryDoc.classList.remove('hidden');
    decisionDoc.classList.add('hidden');
    setTimeout(() => updateActiveNav('i_sec1'), 100);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 切换日期
 */
function switchDate(date) {
  AppState.currentDate = date;
  syncCurrentDate();

  // 更新显示
  document.getElementById('current-date-display').textContent = date;

  // 重新渲染所有内容
  renderAllContent();

  // 关闭下拉菜单
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });

  console.log(`切换到日期：${date}`);
}

/**
 * 渲染所有内容（根据当前日期）
 */
function renderAllContent() {
  const date = AppState.currentDate;
  console.log(`[renderAllContent] 当前日期：${date}`);

  if (date === '2026-03-08') {
    // 渲染 3 月 8 日内容
    console.log('[renderAllContent] 渲染 3 月 8 日内容');
    if (typeof renderDecisionNav_0308 === 'function') {
      renderDecisionNav_0308();
    }
    if (typeof renderIndustryNav_0308 === 'function') {
      renderIndustryNav_0308();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0308 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0308();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0308 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0308();
    }
  } else if (date === '2026-03-07') {
    // 渲染 3 月 7 日内容
    console.log('[renderAllContent] 渲染 3 月 7 日内容');
    if (typeof renderDecisionNav_0307 === 'function') {
      renderDecisionNav_0307();
    }
    if (typeof renderIndustryNav_0307 === 'function') {
      renderIndustryNav_0307();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0307 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0307();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0307 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0307();
    }
  } else if (date === '2026-03-06') {
    // 渲染 3 月 6 日内容
    console.log('[renderAllContent] 渲染 3 月 6 日内容');
    if (typeof renderDecisionNav_0306 === 'function') {
      renderDecisionNav_0306();
    }
    if (typeof renderIndustryNav_0306 === 'function') {
      renderIndustryNav_0306();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0306 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0306();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0306 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0306();
    }
  } else if (date === '2026-03-05') {
    // 渲染 3 月 5 日内容
    console.log('[renderAllContent] 渲染 3 月 5 日内容');
    if (typeof renderDecisionNav_0305 === 'function') {
      renderDecisionNav_0305();
    }
    if (typeof renderIndustryNav_0305 === 'function') {
      renderIndustryNav_0305();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0305 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0305();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0305 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0305();
    }
  } else if (date === '2026-03-04') {
    // 渲染 3 月 4 日内容
    console.log('[renderAllContent] 渲染 3 月 4 日内容');
    if (typeof renderDecisionNav_0304 === 'function') {
      renderDecisionNav_0304();
    }
    if (typeof renderIndustryNav_0304 === 'function') {
      renderIndustryNav_0304();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0304 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0304();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0304 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0304();
    }
  }

  // 重新初始化滚动监听
  setTimeout(initScrollSpy, 300);
}

/**
 * 初始化 Tab 事件绑定
 */
function initTabs() {
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });
}

/**
 * 初始化时钟
 */
function initClock() {
  updateClock();
  AppState.clockInterval = setInterval(updateClock, 1000);
}

/**
 * 初始化滚动监听 (Scroll Spy)
 */
function initScrollSpy() {
  const options = {
    root: null,
    rootMargin: '-80px 0px -80px 0px',
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          updateActiveNav(id);
        }
      }
    });
  }, options);

  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
}

/**
 * 初始化日期选择器
 */
function initDateSelector() {
  // 渲染日期列表
  renderDateList();

  // 设置点击外部关闭
  setupDateDropdownListener();

  // 设置当前日期显示
  syncCurrentDate();
  document.getElementById('current-date-display').textContent = AppState.currentDate;
}

/**
 * 初始化应用
 */
function initApp() {
  console.log('智研金融 Terminal Pro 初始化中...');

  // 初始化日期选择器
  initDateSelector();

  // 渲染内容
  renderAllContent();

  // 初始化交互
  initTabs();
  initClock();

  // 延迟初始化滚动监听
  setTimeout(() => {
    initScrollSpy();
    console.log('智研金融 Terminal Pro 初始化完成');
  }, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
