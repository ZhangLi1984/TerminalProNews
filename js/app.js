// ==========================================
// 主应用逻辑
// ==========================================

const AppState = {
  currentTab: 'decision',
  currentDate: '2026-06-23',
  dateDropdownOpen: false,
  activeSection: null
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  const currentDate = getCurrentDate();
  if (currentDate) {
    AppState.currentDate = currentDate;
  }

  // 确保日期选择器按钮显示正确的日期
  const dateDisplay = document.getElementById('current-date-display');
  if (dateDisplay) {
    dateDisplay.textContent = AppState.currentDate;
  }

  initTabs();
  initDateDropdown();
  renderAllContent();
  startClock();
});

function getCurrentDate() {
  return AppState.currentDate;
}

// Tab 切换
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function switchTab(tabName) {
  AppState.currentTab = tabName;

  // 更新按钮样式
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('bg-red-600', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('bg-red-600', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    }
  });

  // 隐藏所有文档
  document.querySelectorAll('[id$="-doc"]').forEach(doc => {
    doc.classList.add('hidden');
  });

  // 显示选中的文档
  const targetDoc = document.getElementById(tabName + '-doc');
  if (targetDoc) {
    targetDoc.classList.remove('hidden');
  }
}

// 日期下拉菜单
function initDateDropdown() {
  const dateList = document.getElementById('date-list');
  if (dateList && typeof AVAILABLE_DATES !== 'undefined') {
    renderDateList(dateList);
  }
}

function renderDateList(container) {
  if (!container || !AVAILABLE_DATES) return;

  container.innerHTML = AVAILABLE_DATES.map(item => `
    <div class="date-item px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${item.date === AppState.currentDate ? 'bg-red-50 hover:bg-red-100' : ''}"
         onclick="selectDate('${item.date}')">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium text-slate-700">${item.label}</span>
        ${item.tag === 'latest' ? '<span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">最新</span>' : ''}
      </div>
    </div>
  `).join('');
}

function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
    AppState.dateDropdownOpen = !AppState.dateDropdownOpen;
  }
}

function selectDate(date) {
  AppState.currentDate = date;

  // 更新日期显示
  const dateDisplay = document.getElementById('current-date-display');
  if (dateDisplay) {
    dateDisplay.textContent = date;
  }

  // 关闭下拉菜单
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
    AppState.dateDropdownOpen = false;
  }

  // 重新渲染日期列表（高亮选中项）
  const dateList = document.getElementById('date-list');
  if (dateList) {
    renderDateList(dateList);
  }

  // 重新渲染所有内容
  renderAllContent();
}

// 滚动到指定章节
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 时钟
function startClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 渲染所有内容
function renderAllContent() {
  const date = AppState.currentDate;

  if (date === '2026-06-23') {
    console.log('[renderAllContent] 渲染 6 月 23 日内容');
    if (typeof renderDecisionNav_0623 === 'function') renderDecisionNav_0623();
    const decisionContentEl0623 = document.getElementById('decision-content');
    if (decisionContentEl0623 && typeof renderDecisionContent_0623 === 'function') decisionContentEl0623.innerHTML = renderDecisionContent_0623();
    if (typeof renderIndustryNav_0623 === 'function') renderIndustryNav_0623();
    const industryContentEl0623 = document.getElementById('industry-content');
    if (industryContentEl0623 && typeof renderIndustryContent_0623 === 'function') industryContentEl0623.innerHTML = renderIndustryContent_0623();
    if (typeof renderMacroNav_0623 === 'function') renderMacroNav_0623();
    const macroContentEl0623 = document.getElementById('macro-content');
    if (macroContentEl0623 && typeof renderMacroContent_0623 === 'function') macroContentEl0623.innerHTML = renderMacroContent_0623();
  } else if (date === '2026-06-22') {
    console.log('[renderAllContent] 渲染 6 月 22 日内容');
    if (typeof renderDecisionNav_0622 === 'function') renderDecisionNav_0622();
    const decisionContentEl0622 = document.getElementById('decision-content');
    if (decisionContentEl0622 && typeof renderDecisionContent_0622 === 'function') decisionContentEl0622.innerHTML = renderDecisionContent_0622();
    if (typeof renderIndustryNav_0622 === 'function') renderIndustryNav_0622();
    const industryContentEl0622 = document.getElementById('industry-content');
    if (industryContentEl0622 && typeof renderIndustryContent_0622 === 'function') industryContentEl0622.innerHTML = renderIndustryContent_0622();
    if (typeof renderMacroNav_0622 === 'function') renderMacroNav_0622();
    const macroContentEl0622 = document.getElementById('macro-content');
    if (macroContentEl0622 && typeof renderMacroContent_0622 === 'function') macroContentEl0622.innerHTML = renderMacroContent_0622();
    if (typeof renderBrokerNav_0622 === 'function') renderBrokerNav_0622();
    const brokerContentEl0622 = document.getElementById('broker-content');
    if (brokerContentEl0622 && typeof renderBrokerContent_0622 === 'function') brokerContentEl0622.innerHTML = renderBrokerContent_0622();
    if (typeof renderStockNav_0622 === 'function') renderStockNav_0622();
    const stockContentEl0622 = document.getElementById('stock-content');
    if (stockContentEl0622 && typeof renderStockContent_0622 === 'function') stockContentEl0622.innerHTML = renderStockContent_0622();
    if (typeof renderJisiluNav_0622 === 'function') renderJisiluNav_0622();
    const jisiluContentEl0622 = document.getElementById('jisilu-content');
    if (jisiluContentEl0622 && typeof renderJisiluContent_0622 === 'function') jisiluContentEl0622.innerHTML = renderJisiluContent_0622();
    if (typeof renderFuturesNav_0622 === 'function') renderFuturesNav_0622();
    const futuresContentEl0622 = document.getElementById('futures-content');
    if (futuresContentEl0622 && typeof renderFuturesContent_0622 === 'function') futuresContentEl0622.innerHTML = renderFuturesContent_0622();
  } else if (date === '2026-06-21') {
    console.log('[renderAllContent] 渲染 6 月 21 日内容');
    if (typeof renderDecisionNav_0621 === 'function') renderDecisionNav_0621();
    const decisionContentEl0621 = document.getElementById('decision-content');
    if (decisionContentEl0621 && typeof renderDecisionContent_0621 === 'function') decisionContentEl0621.innerHTML = renderDecisionContent_0621();
    if (typeof renderIndustryNav_0621 === 'function') renderIndustryNav_0621();
    const industryContentEl0621 = document.getElementById('industry-content');
    if (industryContentEl0621 && typeof renderIndustryContent_0621 === 'function') industryContentEl0621.innerHTML = renderIndustryContent_0621();
    if (typeof renderMacroNav_0621 === 'function') renderMacroNav_0621();
    const macroContentEl0621 = document.getElementById('macro-content');
    if (macroContentEl0621 && typeof renderMacroContent_0621 === 'function') macroContentEl0621.innerHTML = renderMacroContent_0621();
    if (typeof renderBrokerNav_0621 === 'function') renderBrokerNav_0621();
    const brokerContentEl0621 = document.getElementById('broker-content');
    if (brokerContentEl0621 && typeof renderBrokerContent_0621 === 'function') brokerContentEl0621.innerHTML = renderBrokerContent_0621();
    if (typeof renderStockNav_0621 === 'function') renderStockNav_0621();
    const stockContentEl0621 = document.getElementById('stock-content');
    if (stockContentEl0621 && typeof renderStockContent_0621 === 'function') stockContentEl0621.innerHTML = renderStockContent_0621();
    if (typeof renderJisiluNav_0621 === 'function') renderJisiluNav_0621();
    const jisiluContentEl0621 = document.getElementById('jisilu-content');
    if (jisiluContentEl0621 && typeof renderJisiluContent_0621 === 'function') jisiluContentEl0621.innerHTML = renderJisiluContent_0621();
    if (typeof renderFuturesNav_0621 === 'function') renderFuturesNav_0621();
    const futuresContentEl0621 = document.getElementById('futures-content');
    if (futuresContentEl0621 && typeof renderFuturesContent_0621 === 'function') futuresContentEl0621.innerHTML = renderFuturesContent_0621();
  } else if (date === '2026-06-17') {
    console.log('[renderAllContent] 渲染 6 月 17 日内容');
    if (typeof renderDecisionNav_0617 === 'function') renderDecisionNav_0617();
    const decisionContentEl0617 = document.getElementById('decision-content');
    if (decisionContentEl0617 && typeof renderDecisionContent_0617 === 'function') decisionContentEl0617.innerHTML = renderDecisionContent_0617();
    if (typeof renderIndustryNav_0617 === 'function') renderIndustryNav_0617();
    const industryContentEl0617 = document.getElementById('industry-content');
    if (industryContentEl0617 && typeof renderIndustryContent_0617 === 'function') industryContentEl0617.innerHTML = renderIndustryContent_0617();
    if (typeof renderMacroNav_0617 === 'function') renderMacroNav_0617();
    const macroContentEl0617 = document.getElementById('macro-content');
    if (macroContentEl0617 && typeof renderMacroContent_0617 === 'function') macroContentEl0617.innerHTML = renderMacroContent_0617();
    if (typeof renderBrokerNav_0617 === 'function') renderBrokerNav_0617();
    const brokerContentEl0617 = document.getElementById('broker-content');
    if (brokerContentEl0617 && typeof renderBrokerContent_0617 === 'function') brokerContentEl0617.innerHTML = renderBrokerContent_0617();
    if (typeof renderStockNav_0617 === 'function') renderStockNav_0617();
    const stockContentEl0617 = document.getElementById('stock-content');
    if (stockContentEl0617 && typeof renderStockContent_0617 === 'function') stockContentEl0617.innerHTML = renderStockContent_0617();
    if (typeof renderJisiluNav_0617 === 'function') renderJisiluNav_0617();
    const jisiluContentEl0617 = document.getElementById('jisilu-content');
    if (jisiluContentEl0617 && typeof renderJisiluContent_0617 === 'function') jisiluContentEl0617.innerHTML = renderJisiluContent_0617();
    if (typeof renderFuturesNav_0617 === 'function') renderFuturesNav_0617();
    const futuresContentEl0617 = document.getElementById('futures-content');
    if (futuresContentEl0617 && typeof renderFuturesContent_0617 === 'function') futuresContentEl0617.innerHTML = renderFuturesContent_0617();
  } else if (date === '2026-06-16') {
    console.log('[renderAllContent] 渲染 6 月 16 日内容');
    if (typeof renderDecisionNav_0616 === 'function') renderDecisionNav_0616();
    const decisionContentEl0616 = document.getElementById('decision-content');
    if (decisionContentEl0616 && typeof renderDecisionContent_0616 === 'function') decisionContentEl0616.innerHTML = renderDecisionContent_0616();
    if (typeof renderIndustryNav_0616 === 'function') renderIndustryNav_0616();
    const industryContentEl0616 = document.getElementById('industry-content');
    if (industryContentEl0616 && typeof renderIndustryContent_0616 === 'function') industryContentEl0616.innerHTML = renderIndustryContent_0616();
    if (typeof renderMacroNav_0616 === 'function') renderMacroNav_0616();
    const macroContentEl0616 = document.getElementById('macro-content');
    if (macroContentEl0616 && typeof renderMacroContent_0616 === 'function') macroContentEl0616.innerHTML = renderMacroContent_0616();
    if (typeof renderBrokerNav_0616 === 'function') renderBrokerNav_0616();
    const brokerContentEl0616 = document.getElementById('broker-content');
    if (brokerContentEl0616 && typeof renderBrokerContent_0616 === 'function') brokerContentEl0616.innerHTML = renderBrokerContent_0616();
    if (typeof renderStockNav_0616 === 'function') renderStockNav_0616();
    const stockContentEl0616 = document.getElementById('stock-content');
    if (stockContentEl0616 && typeof renderStockContent_0616 === 'function') stockContentEl0616.innerHTML = renderStockContent_0616();
    if (typeof renderJisiluNav_0616 === 'function') renderJisiluNav_0616();
    const jisiluContentEl0616 = document.getElementById('jisilu-content');
    if (jisiluContentEl0616 && typeof renderJisiluContent_0616 === 'function') jisiluContentEl0616.innerHTML = renderJisiluContent_0616();
    if (typeof renderFuturesNav_0616 === 'function') renderFuturesNav_0616();
    const futuresContentEl0616 = document.getElementById('futures-content');
    if (futuresContentEl0616 && typeof renderFuturesContent_0616 === 'function') futuresContentEl0616.innerHTML = renderFuturesContent_0616();
  }
}
