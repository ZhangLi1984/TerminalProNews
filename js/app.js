// ==========================================
// 主应用逻辑（数据驱动 · 无需为新日期改动本文件）
// ==========================================
// 数据契约（两种，同时支持）：
//   v2（推荐，新报告用）：data/{mod}-{MMDD}-content.js 内调用
//        registerReport('decision', '0720', { title, subtitle, markdown: `...` })
//      —— 正文写 Markdown 原文，侧边目录由标题自动生成，无需 nav 文件。
//   v1（历史文件，只读兼容）：全局函数 render{Cap}Content_{MMDD}() / render{Cap}Nav_{MMDD}()
// ==========================================

const TABS = ['decision', 'industry', 'macro', 'broker', 'stock', 'jisilu', 'futures'];
const TAB_LABELS = {
  decision: '决策内参', industry: '行业汇总', macro: '宏观',
  broker: '券商', stock: '个股', jisilu: '集思录', futures: '期货'
};
const APP_VERSION = '3';

const AppState = {
  currentTab: 'decision',
  // 当前日期唯一真值 = dates.js 的 AVAILABLE_DATES[0]
  currentDate: (typeof AVAILABLE_DATES !== 'undefined' && AVAILABLE_DATES[0]) ? AVAILABLE_DATES[0].date : '',
  loadedDates: new Set(),
  loadingDates: new Set(),
  available: {},          // { tab: true } 当前日期哪些模块有数据
  searchTerm: ''
};

// ==================== v2 数据契约 ====================
const ReportStore = Object.create(null);

function registerReport(mod, suffix, payload) {
  ReportStore[mod + '-' + suffix] = payload || {};
}
window.registerReport = registerReport;

function dateSuffix(date) {
  return String(date).slice(5).replace('-', '');   // 2026-07-20 -> 0720
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initTabs();
  initDateDropdown();
  initGlobalListeners();
  initSearch();
  initScrollUi();
  startClock();

  const latest = (typeof AVAILABLE_DATES !== 'undefined' && AVAILABLE_DATES[0])
    ? AVAILABLE_DATES[0].date : AppState.currentDate;

  if (!latest) {
    document.getElementById('decision-content').innerHTML = emptyState('缺少 data/dates.js，无法确定当前日期');
    return;
  }

  // 支持 #tab=stock&date=2026-07-19 深链
  const hash = parseHash();
  AppState.currentDate = hash.date && dateExists(hash.date) ? hash.date : latest;
  if (hash.tab && TABS.indexOf(hash.tab) !== -1) AppState.currentTab = hash.tab;

  setDateDisplay(AppState.currentDate);
  switchTab(AppState.currentTab, true);
  loadAndRender(AppState.currentDate);
});

function parseHash() {
  const h = (location.hash || '').replace(/^#/, '');
  const out = {};
  h.split('&').forEach(function (kv) {
    const p = kv.split('=');
    if (p.length === 2) out[p[0]] = p[1];
  });
  return out;
}

function dateExists(d) {
  return typeof AVAILABLE_DATES !== 'undefined' && AVAILABLE_DATES.some(function (x) { return x.date === d; });
}

function setDateDisplay(date) {
  const el = document.getElementById('current-date-display');
  if (el) el.textContent = date;
  const meta = (typeof AVAILABLE_DATES !== 'undefined')
    ? AVAILABLE_DATES.find(function (x) { return x.date === date; }) : null;
  const badge = document.getElementById('date-badge');
  if (badge) {
    const isLatest = meta && meta.tag === 'latest';
    badge.textContent = isLatest ? '最新' : '历史';
    badge.className = 'date-badge ' + (isLatest ? 'is-latest' : 'is-history');
  }
}

// ==================== 主题 ====================
function initTheme() {
  const saved = localStorage.getItem('zy-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', function () {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('zy-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.setAttribute('aria-label', theme === 'dark' ? '切换到浅色' : '切换到深色');
}

// ==================== Tab ====================
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { switchTab(btn.dataset.tab); });
  });
}

function switchTab(tabName, skipScroll) {
  AppState.currentTab = tabName;

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.dataset.tab === tabName);
  });
  TABS.forEach(function (t) {
    const doc = document.getElementById(t + '-doc');
    const nav = document.getElementById(t + '-nav-content');
    if (doc) doc.classList.toggle('hidden', t !== tabName);
    if (nav) nav.classList.toggle('hidden', t !== tabName);
  });

  syncHash();
  closeDrawer();
  if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  updateScrollSpy();
  updateProgress();
}

function syncHash() {
  const next = '#tab=' + AppState.currentTab + '&date=' + AppState.currentDate;
  if (location.hash !== next) history.replaceState(null, '', next);
}

// ==================== 日期选择 ====================
function initDateDropdown() { renderDateDropdownList(); }

function renderDateDropdownList(filter) {
  const listEl = document.getElementById('date-list');
  const noResultsEl = document.getElementById('date-no-results');
  const clearBtn = document.getElementById('date-search-clear');
  if (!listEl || typeof AVAILABLE_DATES === 'undefined') return;

  const f = (filter || '').trim().toLowerCase();
  const filtered = f
    ? AVAILABLE_DATES.filter(function (it) {
        return it.date.toLowerCase().indexOf(f) !== -1 || (it.label || '').toLowerCase().indexOf(f) !== -1;
      })
    : AVAILABLE_DATES;

  if (clearBtn) clearBtn.classList.toggle('hidden', !f);
  if (!filtered.length) {
    listEl.innerHTML = '';
    if (noResultsEl) noResultsEl.classList.remove('hidden');
    return;
  }
  if (noResultsEl) noResultsEl.classList.add('hidden');

  // 按月分组，方便翻找历史
  let html = '';
  let currentMonth = '';
  filtered.forEach(function (item) {
    const month = item.date.slice(0, 7);
    if (month !== currentMonth) {
      currentMonth = month;
      html += '<div class="date-month">' + month.replace('-', ' 年 ') + ' 月</div>';
    }
    const active = item.date === AppState.currentDate ? ' is-active' : '';
    const tag = item.tag === 'latest'
      ? '<span class="date-tag latest">最新</span>'
      : '<span class="date-tag history">历史</span>';
    html += '<button class="date-item' + active + '" onclick="selectDate(\'' + item.date + '\')">' +
      '<span class="date-label">' + item.label + '</span>' + tag + '</button>';
  });
  listEl.innerHTML = html;
}

function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  if (!dropdown) return;
  const willOpen = dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden');
  if (willOpen) {
    const input = document.getElementById('date-search-input');
    if (input) { input.value = ''; input.focus(); }
    renderDateDropdownList();
  }
}

function filterDateList(value) { renderDateDropdownList(value); }

function clearDateSearch() {
  const input = document.getElementById('date-search-input');
  if (input) { input.value = ''; renderDateDropdownList(); input.focus(); }
}

function selectDate(date) {
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  if (date === AppState.currentDate && AppState.loadedDates.has(dateSuffix(date))) return;

  AppState.currentDate = date;
  setDateDisplay(date);
  renderDateDropdownList();
  syncHash();
  loadAndRender(date);
}

// 上/下一个日期（键盘 [ ]）
function stepDate(delta) {
  if (typeof AVAILABLE_DATES === 'undefined') return;
  const idx = AVAILABLE_DATES.findIndex(function (x) { return x.date === AppState.currentDate; });
  const next = AVAILABLE_DATES[idx + delta];
  if (next) selectDate(next.date);
}

// ==================== 加载数据 ====================
function loadAndRender(date) {
  const suffix = dateSuffix(date);

  if (AppState.loadedDates.has(suffix)) { renderAllContent(); return; }
  if (AppState.loadingDates.has(suffix)) return;
  AppState.loadingDates.add(suffix);

  TABS.forEach(function (tab) {
    const el = document.getElementById(tab + '-content');
    if (el) el.innerHTML = '<div class="state-box"><div class="loading-spinner"></div><p>正在加载 ' + date + ' 数据…</p></div>';
  });

  // 每个模块尝试加载 content（v2 / v1）与 nav（仅 v1 需要）
  const files = [];
  TABS.forEach(function (mod) {
    files.push(mod + '-' + suffix + '-content.js');
    files.push(mod + '-' + suffix + '-nav.js');
  });

  let pending = files.length;
  files.forEach(function (file) {
    const script = document.createElement('script');
    script.src = './data/' + file + '?v=' + APP_VERSION;
    script.async = false;
    script.onload = script.onerror = function () {
      if (--pending === 0) finishLoading(suffix);
    };
    document.body.appendChild(script);
  });
}

function finishLoading(suffix) {
  AppState.loadingDates.delete(suffix);
  AppState.loadedDates.add(suffix);
  renderAllContent();
}

// ==================== 渲染 ====================
function getReportHtml(tab, suffix) {
  const entry = ReportStore[tab + '-' + suffix];
  if (entry) {
    if (entry.markdown) {
      const res = MD.render(entry.markdown);
      return { html: res.html, toc: MD.buildToc(res.toc), meta: entry };
    }
    if (entry.html) return { html: entry.html, toc: '', meta: entry };
  }
  // v1 兼容
  const cap = tab.charAt(0).toUpperCase() + tab.slice(1);
  const fn = window['render' + cap + 'Content_' + suffix];
  if (typeof fn === 'function') {
    try { return cleanLegacy(fn()); }
    catch (e) { console.warn('legacy content error', tab, e); }
  }
  return null;
}

// 历史 JS 里残留的 Markdown 记号（首行 "# 标题"、孤立的 </ul>、*斜体*）在这里兜底清理
function cleanLegacy(html) {
  let title = null;
  html = html.replace(/<p[^>]*>\s*#{1,3}\s*([^<]+?)<\/p>/, function (m, t) {
    if (title) return m;
    title = t.trim();
    return '';
  });
  html = html
    .replace(/<p[^>]*>\s*<\/ul>\s*<\/p>/g, '')
    .replace(/<p[^>]*>\s*<\/ol>\s*<\/p>/g, '')
    .replace(/<p([^>]*)>\s*<\/ul>/g, '<p$1>')
    .replace(/(^|>)\s*\*([^*<>]{2,80})\*\s*(<|$)/g, '$1<em>$2</em>$3');
  return { html: html, toc: null, meta: title ? { title: title } : null, legacy: true };
}

function renderAllContent() {
  const suffix = dateSuffix(AppState.currentDate);
  AppState.available = {};

  TABS.forEach(function (tab) {
    const contentEl = document.getElementById(tab + '-content');
    const navEl = document.getElementById(tab + '-nav-content');
    const res = getReportHtml(tab, suffix);

    if (!res) {
      if (contentEl) contentEl.innerHTML = emptyState((TAB_LABELS[tab] || tab) + '·该日期暂无数据');
      if (navEl) navEl.innerHTML = '<div class="toc-empty">暂无目录</div>';
      return;
    }

    AppState.available[tab] = true;

    // 文档头（v2 才有元信息）
    let header = '';
    if (res.meta && (res.meta.title || res.meta.subtitle)) {
      header = '<div class="doc-header">' +
        (res.meta.title ? '<h1 class="doc-title">' + MD.escapeHtml(res.meta.title) + '</h1>' : '') +
        '<div class="doc-meta">' +
        '<span class="doc-chip">' + AppState.currentDate + '</span>' +
        (res.meta.source ? '<span class="doc-chip">' + MD.escapeHtml(res.meta.source) + '</span>' : '') +
        (res.meta.subtitle ? '<span class="doc-sub">' + MD.escapeHtml(res.meta.subtitle) + '</span>' : '') +
        '</div></div>';
    }

    if (contentEl) {
      contentEl.className = 'doc-body' + (res.legacy ? ' legacy-content prose' : ' md-content');
      contentEl.innerHTML = header + res.html;
      contentEl.classList.remove('fade-in');
      void contentEl.offsetWidth;
      contentEl.classList.add('fade-in');
    }

    // 侧边目录
    if (navEl) {
      if (res.toc) {
        navEl.innerHTML = res.toc || '<div class="toc-empty">本篇无小节标题</div>';
      } else {
        const cap = tab.charAt(0).toUpperCase() + tab.slice(1);
        const navFn = window['render' + cap + 'Nav_' + suffix];
        if (typeof navFn === 'function') {
          try { navFn(); } catch (e) { navEl.innerHTML = '<div class="toc-empty">目录渲染失败</div>'; }
        } else {
          navEl.innerHTML = buildTocFromDom(contentEl) || '<div class="toc-empty">暂无目录</div>';
        }
      }
    }
  });

  updateTabBadges();
  bindTocLinks();
  applySearchHighlight();
  updateScrollSpy();
  updateProgress();
}

// 历史 HTML 内容没有 nav 时，从 DOM 里的 h2/h3 反推目录
function buildTocFromDom(root) {
  if (!root) return '';
  const items = [];
  root.querySelectorAll('h2, h3').forEach(function (h, idx) {
    if (!h.id) h.id = 'auto-sec-' + idx;
    items.push({ id: h.id, label: h.textContent.trim(), level: h.tagName === 'H2' ? 2 : 3 });
  });
  return MD.buildToc(items);
}

function emptyState(text) {
  return '<div class="state-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
    '<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/>' +
    '<line x1="8" y1="14" x2="13" y2="14"/></svg><p>' + MD.escapeHtml(text) + '</p></div>';
}

function updateTabBadges() {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.classList.toggle('is-empty', !AppState.available[btn.dataset.tab]);
  });
}

// ==================== 目录跳转 + 滚动高亮 ====================
function bindTocLinks() {
  document.querySelectorAll('.nav-sidebar a[href^="#"], .md-anchor').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
      closeDrawer();
    });
  });
}

let spyTicking = false;
function initScrollUi() {
  window.addEventListener('scroll', function () {
    if (spyTicking) return;
    spyTicking = true;
    requestAnimationFrame(function () {
      updateScrollSpy();
      updateProgress();
      spyTicking = false;
    });
  }, { passive: true });

  const top = document.getElementById('back-to-top');
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  const menuBtn = document.getElementById('menu-toggle');
  if (menuBtn) menuBtn.addEventListener('click', toggleDrawer);
  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
}

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  const doc = document.getElementById(AppState.currentTab + '-doc');
  if (!bar || !doc) return;
  const total = doc.offsetHeight - window.innerHeight + doc.offsetTop;
  const pct = total > 0 ? Math.min(100, Math.max(0, (window.pageYOffset - doc.offsetTop) / total * 100)) : 0;
  bar.style.width = pct + '%';

  const top = document.getElementById('back-to-top');
  if (top) top.classList.toggle('show', window.pageYOffset > 600);
}

function updateScrollSpy() {
  const nav = document.getElementById(AppState.currentTab + '-nav-content');
  const doc = document.getElementById(AppState.currentTab + '-doc');
  if (!nav || !doc || doc.classList.contains('hidden')) return;

  const heads = doc.querySelectorAll('h2[id], h3[id]');
  let activeId = null;
  for (let i = 0; i < heads.length; i++) {
    if (heads[i].getBoundingClientRect().top <= 120) activeId = heads[i].id;
    else break;
  }
  nav.querySelectorAll('a[data-target], a[href^="#"]').forEach(function (a) {
    const id = a.dataset.target || a.getAttribute('href').slice(1);
    const on = id === activeId;
    a.classList.toggle('is-current', on);
    if (on) {
      const box = nav.closest('.nav-card');
      if (box && (a.offsetTop < box.scrollTop || a.offsetTop > box.scrollTop + box.clientHeight - 40)) {
        box.scrollTop = a.offsetTop - box.clientHeight / 2;
      }
    }
  });
}

// ==================== 全文搜索（当前报告内高亮） ====================
function initSearch() {
  const input = document.getElementById('doc-search');
  if (!input) return;
  let timer = null;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      AppState.searchTerm = input.value.trim();
      applySearchHighlight();
    }, 180);
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; AppState.searchTerm = ''; applySearchHighlight(); input.blur(); }
    if (e.key === 'Enter') jumpToNextHit();
  });
}

let hitIndex = -1;
function applySearchHighlight() {
  const doc = document.getElementById(AppState.currentTab + '-doc');
  const countEl = document.getElementById('search-count');
  if (!doc) return;

  doc.querySelectorAll('mark.search-hit').forEach(function (m) {
    m.replaceWith(document.createTextNode(m.textContent));
  });
  doc.normalize();
  hitIndex = -1;

  const term = AppState.searchTerm;
  if (!term || term.length < 2) { if (countEl) countEl.textContent = ''; return; }

  const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p = node.parentElement;
      if (!p || /SCRIPT|STYLE|MARK/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.indexOf(term) !== -1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const targets = [];
  let n;
  while ((n = walker.nextNode())) targets.push(n);

  let count = 0;
  targets.forEach(function (node) {
    const parts = node.nodeValue.split(term);
    const frag = document.createDocumentFragment();
    parts.forEach(function (part, i) {
      if (i > 0) {
        const mk = document.createElement('mark');
        mk.className = 'search-hit';
        mk.textContent = term;
        frag.appendChild(mk);
        count++;
      }
      if (part) frag.appendChild(document.createTextNode(part));
    });
    node.parentNode.replaceChild(frag, node);
  });
  if (countEl) countEl.textContent = count ? count + ' 处' : '无结果';
}

function jumpToNextHit() {
  const doc = document.getElementById(AppState.currentTab + '-doc');
  if (!doc) return;
  const hits = doc.querySelectorAll('mark.search-hit');
  if (!hits.length) return;
  hits.forEach(function (h) { h.classList.remove('is-focus'); });
  hitIndex = (hitIndex + 1) % hits.length;
  const el = hits[hitIndex];
  el.classList.add('is-focus');
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 140, behavior: 'smooth' });
}

// ==================== 抽屉（移动端目录） ====================
function toggleDrawer() {
  document.body.classList.toggle('drawer-open');
}
function closeDrawer() {
  document.body.classList.remove('drawer-open');
}

// ==================== 全局监听 ====================
function initGlobalListeners() {
  document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('date-dropdown');
    const btn = document.getElementById('date-selector-btn');
    if (dropdown && !dropdown.classList.contains('hidden') &&
        !dropdown.contains(e.target) && btn && !btn.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', function (e) {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const s = document.getElementById('doc-search');
      if (s) s.focus();
      return;
    }
    if (e.key === '[') { stepDate(1); return; }   // 更早一天
    if (e.key === ']') { stepDate(-1); return; }  // 更晚一天
    const idx = TABS.indexOf(AppState.currentTab);
    if (e.key === 'ArrowLeft' && idx > 0) switchTab(TABS[idx - 1]);
    if (e.key === 'ArrowRight' && idx < TABS.length - 1) switchTab(TABS[idx + 1]);
    if (/^[1-7]$/.test(e.key)) switchTab(TABS[+e.key - 1]);
  });
}

// ==================== 时钟 ====================
function startClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  function update() {
    const now = new Date();
    clockEl.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(function (n) { return String(n).padStart(2, '0'); }).join(':');
  }
  update();
  setInterval(update, 1000);
}
