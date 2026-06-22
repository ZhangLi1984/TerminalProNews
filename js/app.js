// ==========================================
// 主应用逻辑
// ==========================================

const AppState = {
  currentTab: 'decision',
  currentDate: '2026-06-22',
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

// 渲染所有内容
function renderAllContent() {
  const date = AppState.currentDate;

  if (date === '2026-06-22') {
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
  } else if (date === '2026-06-15') {
    console.log('[renderAllContent] 渲染 6 月 15 日内容');
    if (typeof renderDecisionNav_0615 === 'function') renderDecisionNav_0615();
    const decisionContentEl0615 = document.getElementById('decision-content');
    if (decisionContentEl0615 && typeof renderDecisionContent_0615 === 'function') decisionContentEl0615.innerHTML = renderDecisionContent_0615();
    if (typeof renderIndustryNav_0615 === 'function') renderIndustryNav_0615();
    const industryContentEl0615 = document.getElementById('industry-content');
    if (industryContentEl0615 && typeof renderIndustryContent_0615 === 'function') industryContentEl0615.innerHTML = renderIndustryContent_0615();
    if (typeof renderMacroNav_0615 === 'function') renderMacroNav_0615();
    const macroContentEl0615 = document.getElementById('macro-content');
    if (macroContentEl0615 && typeof renderMacroContent_0615 === 'function') macroContentEl0615.innerHTML = renderMacroContent_0615();
    if (typeof renderBrokerNav_0615 === 'function') renderBrokerNav_0615();
    const brokerContentEl0615 = document.getElementById('broker-content');
    if (brokerContentEl0615 && typeof renderBrokerContent_0615 === 'function') brokerContentEl0615.innerHTML = renderBrokerContent_0615();
    if (typeof renderStockNav_0615 === 'function') renderStockNav_0615();
    const stockContentEl0615 = document.getElementById('stock-content');
    if (stockContentEl0615 && typeof renderStockContent_0615 === 'function') stockContentEl0615.innerHTML = renderStockContent_0615();
    if (typeof renderJisiluNav_0615 === 'function') renderJisiluNav_0615();
    const jisiluContentEl0615 = document.getElementById('jisilu-content');
    if (jisiluContentEl0615 && typeof renderJisiluContent_0615 === 'function') jisiluContentEl0615.innerHTML = renderJisiluContent_0615();
    if (typeof renderFuturesNav_0615 === 'function') renderFuturesNav_0615();
    const futuresContentEl0615 = document.getElementById('futures-content');
    if (futuresContentEl0615 && typeof renderFuturesContent_0615 === 'function') futuresContentEl0615.innerHTML = renderFuturesContent_0615();
  } else if (date === '2026-06-14') {
    console.log('[renderAllContent] 渲染 6 月 14 日内容');
    if (typeof renderDecisionNav_0614 === 'function') renderDecisionNav_0614();
    const decisionContentEl0614 = document.getElementById('decision-content');
    if (decisionContentEl0614 && typeof renderDecisionContent_0614 === 'function') decisionContentEl0614.innerHTML = renderDecisionContent_0614();
    if (typeof renderIndustryNav_0614 === 'function') renderIndustryNav_0614();
    const industryContentEl0614 = document.getElementById('industry-content');
    if (industryContentEl0614 && typeof renderIndustryContent_0614 === 'function') industryContentEl0614.innerHTML = renderIndustryContent_0614();
    if (typeof renderMacroNav_0614 === 'function') renderMacroNav_0614();
    const macroContentEl0614 = document.getElementById('macro-content');
    if (macroContentEl0614 && typeof renderMacroContent_0614 === 'function') macroContentEl0614.innerHTML = renderMacroContent_0614();
    if (typeof renderBrokerNav_0614 === 'function') renderBrokerNav_0614();
    const brokerContentEl0614 = document.getElementById('broker-content');
    if (brokerContentEl0614 && typeof renderBrokerContent_0614 === 'function') brokerContentEl0614.innerHTML = renderBrokerContent_0614();
    if (typeof renderStockNav_0614 === 'function') renderStockNav_0614();
    const stockContentEl0614 = document.getElementById('stock-content');
    if (stockContentEl0614 && typeof renderStockContent_0614 === 'function') stockContentEl0614.innerHTML = renderStockContent_0614();
    if (typeof renderJisiluNav_0614 === 'function') renderJisiluNav_0614();
    const jisiluContentEl0614 = document.getElementById('jisilu-content');
    if (jisiluContentEl0614 && typeof renderJisiluContent_0614 === 'function') jisiluContentEl0614.innerHTML = renderJisiluContent_0614();
    if (typeof renderFuturesNav_0614 === 'function') renderFuturesNav_0614();
    const futuresContentEl0614 = document.getElementById('futures-content');
    if (futuresContentEl0614 && typeof renderFuturesContent_0614 === 'function') futuresContentEl0614.innerHTML = renderFuturesContent_0614();
  } else if (date === '2026-06-12') {
    console.log('[renderAllContent] 渲染 6 月 12 日内容');
    if (typeof renderStockNav_0612 === 'function') renderStockNav_0612();
    const stockContentEl0612 = document.getElementById('stock-content');
    if (stockContentEl0612 && typeof renderStockContent_0612 === 'function') stockContentEl0612.innerHTML = renderStockContent_0612();
    if (typeof renderJisiluNav_0612 === 'function') renderJisiluNav_0612();
    const jisiluContentEl0612 = document.getElementById('jisilu-content');
    if (jisiluContentEl0612 && typeof renderJisiluContent_0612 === 'function') jisiluContentEl0612.innerHTML = renderJisiluContent_0612();
  } else if (date === '2026-06-11') {
    console.log('[renderAllContent] 渲染 6 月 11 日内容');
    if (typeof renderMacroNav_0611 === 'function') renderMacroNav_0611();
    const macroContentEl0611 = document.getElementById('macro-content');
    if (macroContentEl0611 && typeof renderMacroContent_0611 === 'function') macroContentEl0611.innerHTML = renderMacroContent_0611();
    if (typeof renderBrokerNav_0611 === 'function') renderBrokerNav_0611();
    const brokerContentEl0611 = document.getElementById('broker-content');
    if (brokerContentEl0611 && typeof renderBrokerContent_0611 === 'function') brokerContentEl0611.innerHTML = renderBrokerContent_0611();
  } else if (date === '2026-06-10') {
    console.log('[renderAllContent] 渲染 6 月 10 日内容');
    if (typeof renderDecisionNav_0610 === 'function') renderDecisionNav_0610();
    const decisionContentEl0610 = document.getElementById('decision-content');
    if (decisionContentEl0610 && typeof renderDecisionContent_0610 === 'function') decisionContentEl0610.innerHTML = renderDecisionContent_0610();
    if (typeof renderIndustryNav_0610 === 'function') renderIndustryNav_0610();
    const industryContentEl0610 = document.getElementById('industry-content');
    if (industryContentEl0610 && typeof renderIndustryContent_0610 === 'function') industryContentEl0610.innerHTML = renderIndustryContent_0610();
    if (typeof renderMacroNav_0610 === 'function') renderMacroNav_0610();
    const macroContentEl0610 = document.getElementById('macro-content');
    if (macroContentEl0610 && typeof renderMacroContent_0610 === 'function') macroContentEl0610.innerHTML = renderMacroContent_0610();
    if (typeof renderBrokerNav_0610 === 'function') renderBrokerNav_0610();
    const brokerContentEl0610 = document.getElementById('broker-content');
    if (brokerContentEl0610 && typeof renderBrokerContent_0610 === 'function') brokerContentEl0610.innerHTML = renderBrokerContent_0610();
    if (typeof renderStockNav_0610 === 'function') renderStockNav_0610();
    const stockContentEl0610 = document.getElementById('stock-content');
    if (stockContentEl0610 && typeof renderStockContent_0610 === 'function') stockContentEl0610.innerHTML = renderStockContent_0610();
    if (typeof renderJisiluNav_0610 === 'function') renderJisiluNav_0610();
    const jisiluContentEl0610 = document.getElementById('jisilu-content');
    if (jisiluContentEl0610 && typeof renderJisiluContent_0610 === 'function') jisiluContentEl0610.innerHTML = renderJisiluContent_0610();
    if (typeof renderFuturesNav_0610 === 'function') renderFuturesNav_0610();
    const futuresContentEl0610 = document.getElementById('futures-content');
    if (futuresContentEl0610 && typeof renderFuturesContent_0610 === 'function') futuresContentEl0610.innerHTML = renderFuturesContent_0610();
  } else if (date === '2026-06-09') {
    console.log('[renderAllContent] 渲染 6 月 9 日内容');
    if (typeof renderDecisionNav_0609 === 'function') renderDecisionNav_0609();
    const decisionContentEl0609 = document.getElementById('decision-content');
    if (decisionContentEl0609 && typeof renderDecisionContent_0609 === 'function') decisionContentEl0609.innerHTML = renderDecisionContent_0609();
    if (typeof renderIndustryNav_0609 === 'function') renderIndustryNav_0609();
    const industryContentEl0609 = document.getElementById('industry-content');
    if (industryContentEl0609 && typeof renderIndustryContent_0609 === 'function') industryContentEl0609.innerHTML = renderIndustryContent_0609();
    if (typeof renderMacroNav_0609 === 'function') renderMacroNav_0609();
    const macroContentEl0609 = document.getElementById('macro-content');
    if (macroContentEl0609 && typeof renderMacroContent_0609 === 'function') macroContentEl0609.innerHTML = renderMacroContent_0609();
    if (typeof renderBrokerNav_0609 === 'function') renderBrokerNav_0609();
    const brokerContentEl0609 = document.getElementById('broker-content');
    if (brokerContentEl0609 && typeof renderBrokerContent_0609 === 'function') brokerContentEl0609.innerHTML = renderBrokerContent_0609();
    if (typeof renderStockNav_0609 === 'function') renderStockNav_0609();
    const stockContentEl0609 = document.getElementById('stock-content');
    if (stockContentEl0609 && typeof renderStockContent_0609 === 'function') stockContentEl0609.innerHTML = renderStockContent_0609();
    if (typeof renderJisiluNav_0609 === 'function') renderJisiluNav_0609();
    const jisiluContentEl0609 = document.getElementById('jisilu-content');
    if (jisiluContentEl0609 && typeof renderJisiluContent_0609 === 'function') jisiluContentEl0609.innerHTML = renderJisiluContent_0609();
    if (typeof renderFuturesNav_0609 === 'function') renderFuturesNav_0609();
    const futuresContentEl0609 = document.getElementById('futures-content');
    if (futuresContentEl0609 && typeof renderFuturesContent_0609 === 'function') futuresContentEl0609.innerHTML = renderFuturesContent_0609();
  } else if (date === '2026-06-07') {
    console.log('[renderAllContent] 渲染 6 月 7 日内容');
    if (typeof renderDecisionNav_0607 === 'function') renderDecisionNav_0607();
    const decisionContentEl0607 = document.getElementById('decision-content');
    if (decisionContentEl0607 && typeof renderDecisionContent_0607 === 'function') decisionContentEl0607.innerHTML = renderDecisionContent_0607();
    if (typeof renderIndustryNav_0607 === 'function') renderIndustryNav_0607();
    const industryContentEl0607 = document.getElementById('industry-content');
    if (industryContentEl0607 && typeof renderIndustryContent_0607 === 'function') industryContentEl0607.innerHTML = renderIndustryContent_0607();
    if (typeof renderMacroNav_0607 === 'function') renderMacroNav_0607();
    const macroContentEl0607 = document.getElementById('macro-content');
    if (macroContentEl0607 && typeof renderMacroContent_0607 === 'function') macroContentEl0607.innerHTML = renderMacroContent_0607();
    if (typeof renderBrokerNav_0607 === 'function') renderBrokerNav_0607();
    const brokerContentEl0607 = document.getElementById('broker-content');
    if (brokerContentEl0607 && typeof renderBrokerContent_0607 === 'function') brokerContentEl0607.innerHTML = renderBrokerContent_0607();
    if (typeof renderStockNav_0607 === 'function') renderStockNav_0607();
    const stockContentEl0607 = document.getElementById('stock-content');
    if (stockContentEl0607 && typeof renderStockContent_0607 === 'function') stockContentEl0607.innerHTML = renderStockContent_0607();
    if (typeof renderJisiluNav_0607 === 'function') renderJisiluNav_0607();
    const jisiluContentEl0607 = document.getElementById('jisilu-content');
    if (jisiluContentEl0607 && typeof renderJisiluContent_0607 === 'function') jisiluContentEl0607.innerHTML = renderJisiluContent_0607();
    if (typeof renderFuturesNav_0607 === 'function') renderFuturesNav_0607();
    const futuresContentEl0607 = document.getElementById('futures-content');
    if (futuresContentEl0607 && typeof renderFuturesContent_0607 === 'function') futuresContentEl0607.innerHTML = renderFuturesContent_0607();
  } else if (date === '2026-06-04') {
    console.log('[renderAllContent] 渲染 6 月 4 日内容');
    if (typeof renderDecisionNav_0604 === 'function') renderDecisionNav_0604();
    const decisionContentEl0604 = document.getElementById('decision-content');
    if (decisionContentEl0604 && typeof renderDecisionContent_0604 === 'function') decisionContentEl0604.innerHTML = renderDecisionContent_0604();
    if (typeof renderIndustryNav_0604 === 'function') renderIndustryNav_0604();
    const industryContentEl0604 = document.getElementById('industry-content');
    if (industryContentEl0604 && typeof renderIndustryContent_0604 === 'function') industryContentEl0604.innerHTML = renderIndustryContent_0604();
    if (typeof renderMacroNav_0604 === 'function') renderMacroNav_0604();
    const macroContentEl0604 = document.getElementById('macro-content');
    if (macroContentEl0604 && typeof renderMacroContent_0604 === 'function') macroContentEl0604.innerHTML = renderMacroContent_0604();
    if (typeof renderBrokerNav_0604 === 'function') renderBrokerNav_0604();
    const brokerContentEl0604 = document.getElementById('broker-content');
    if (brokerContentEl0604 && typeof renderBrokerContent_0604 === 'function') brokerContentEl0604.innerHTML = renderBrokerContent_0604();
    if (typeof renderStockNav_0604 === 'function') renderStockNav_0604();
    const stockContentEl0604 = document.getElementById('stock-content');
    if (stockContentEl0604 && typeof renderStockContent_0604 === 'function') stockContentEl0604.innerHTML = renderStockContent_0604();
    if (typeof renderJisiluNav_0604 === 'function') renderJisiluNav_0604();
    const jisiluContentEl0604 = document.getElementById('jisilu-content');
    if (jisiluContentEl0604 && typeof renderJisiluContent_0604 === 'function') jisiluContentEl0604.innerHTML = renderJisiluContent_0604();
    if (typeof renderFuturesNav_0604 === 'function') renderFuturesNav_0604();
    const futuresContentEl0604 = document.getElementById('futures-content');
    if (futuresContentEl0604 && typeof renderFuturesContent_0604 === 'function') futuresContentEl0604.innerHTML = renderFuturesContent_0604();
  } else if (date === '2026-06-03') {
    console.log('[renderAllContent] 渲染 6 月 3 日内容');
    if (typeof renderDecisionNav_0603 === 'function') renderDecisionNav_0603();
    const decisionContentEl0603 = document.getElementById('decision-content');
    if (decisionContentEl0603 && typeof renderDecisionContent_0603 === 'function') decisionContentEl0603.innerHTML = renderDecisionContent_0603();
    if (typeof renderIndustryNav_0603 === 'function') renderIndustryNav_0603();
    const industryContentEl0603 = document.getElementById('industry-content');
    if (industryContentEl0603 && typeof renderIndustryContent_0603 === 'function') industryContentEl0603.innerHTML = renderIndustryContent_0603();
    if (typeof renderMacroNav_0603 === 'function') renderMacroNav_0603();
    const macroContentEl0603 = document.getElementById('macro-content');
    if (macroContentEl0603 && typeof renderMacroContent_0603 === 'function') macroContentEl0603.innerHTML = renderMacroContent_0603();
    if (typeof renderBrokerNav_0603 === 'function') renderBrokerNav_0603();
    const brokerContentEl0603 = document.getElementById('broker-content');
    if (brokerContentEl0603 && typeof renderBrokerContent_0603 === 'function') brokerContentEl0603.innerHTML = renderBrokerContent_0603();
    if (typeof renderStockNav_0603 === 'function') renderStockNav_0603();
    const stockContentEl0603 = document.getElementById('stock-content');
    if (stockContentEl0603 && typeof renderStockContent_0603 === 'function') stockContentEl0603.innerHTML = renderStockContent_0603();
    if (typeof renderJisiluNav_0603 === 'function') renderJisiluNav_0603();
    const jisiluContentEl0603 = document.getElementById('jisilu-content');
    if (jisiluContentEl0603 && typeof renderJisiluContent_0603 === 'function') jisiluContentEl0603.innerHTML = renderJisiluContent_0603();
    if (typeof renderFuturesNav_0603 === 'function') renderFuturesNav_0603();
    const futuresContentEl0603 = document.getElementById('futures-content');
    if (futuresContentEl0603 && typeof renderFuturesContent_0603 === 'function') futuresContentEl0603.innerHTML = renderFuturesContent_0603();
  } else if (date === '2026-06-02') {
    console.log('[renderAllContent] 渲染 6 月 2 日内容');
    if (typeof renderDecisionNav_0602 === 'function') renderDecisionNav_0602();
    const decisionContentEl0602 = document.getElementById('decision-content');
    if (decisionContentEl0602 && typeof renderDecisionContent_0602 === 'function') decisionContentEl0602.innerHTML = renderDecisionContent_0602();
    if (typeof renderIndustryNav_0602 === 'function') renderIndustryNav_0602();
    const industryContentEl0602 = document.getElementById('industry-content');
    if (industryContentEl0602 && typeof renderIndustryContent_0602 === 'function') industryContentEl0602.innerHTML = renderIndustryContent_0602();
    if (typeof renderMacroNav_0602 === 'function') renderMacroNav_0602();
    const macroContentEl0602 = document.getElementById('macro-content');
    if (macroContentEl0602 && typeof renderMacroContent_0602 === 'function') macroContentEl0602.innerHTML = renderMacroContent_0602();
    if (typeof renderBrokerNav_0602 === 'function') renderBrokerNav_0602();
    const brokerContentEl0602 = document.getElementById('broker-content');
    if (brokerContentEl0602 && typeof renderBrokerContent_0602 === 'function') brokerContentEl0602.innerHTML = renderBrokerContent_0602();
    if (typeof renderStockNav_0602 === 'function') renderStockNav_0602();
    const stockContentEl0602 = document.getElementById('stock-content');
    if (stockContentEl0602 && typeof renderStockContent_0602 === 'function') stockContentEl0602.innerHTML = renderStockContent_0602();
    if (typeof renderJisiluNav_0602 === 'function') renderJisiluNav_0602();
    const jisiluContentEl0602 = document.getElementById('jisilu-content');
    if (jisiluContentEl0602 && typeof renderJisiluContent_0602 === 'function') jisiluContentEl0602.innerHTML = renderJisiluContent_0602();
    if (typeof renderFuturesNav_0602 === 'function') renderFuturesNav_0602();
    const futuresContentEl0602 = document.getElementById('futures-content');
    if (futuresContentEl0602 && typeof renderFuturesContent_0602 === 'function') futuresContentEl0602.innerHTML = renderFuturesContent_0602();
  } else if (date === '2026-06-01') {
    console.log('[renderAllContent] 渲染 6 月 1 日内容');
    if (typeof renderDecisionNav_0601 === 'function') renderDecisionNav_0601();
    const decisionContentEl0601 = document.getElementById('decision-content');
    if (decisionContentEl0601 && typeof renderDecisionContent_0601 === 'function') decisionContentEl0601.innerHTML = renderDecisionContent_0601();
    if (typeof renderIndustryNav_0601 === 'function') renderIndustryNav_0601();
    const industryContentEl0601 = document.getElementById('industry-content');
    if (industryContentEl0601 && typeof renderIndustryContent_0601 === 'function') industryContentEl0601.innerHTML = renderIndustryContent_0601();
    if (typeof renderMacroNav_0601 === 'function') renderMacroNav_0601();
    const macroContentEl0601 = document.getElementById('macro-content');
    if (macroContentEl0601 && typeof renderMacroContent_0601 === 'function') macroContentEl0601.innerHTML = renderMacroContent_0601();
    if (typeof renderBrokerNav_0601 === 'function') renderBrokerNav_0601();
    const brokerContentEl0601 = document.getElementById('broker-content');
    if (brokerContentEl0601 && typeof renderBrokerContent_0601 === 'function') brokerContentEl0601.innerHTML = renderBrokerContent_0601();
    if (typeof renderStockNav_0601 === 'function') renderStockNav_0601();
    const stockContentEl0601 = document.getElementById('stock-content');
    if (stockContentEl0601 && typeof renderStockContent_0601 === 'function') stockContentEl0601.innerHTML = renderStockContent_0601();
    if (typeof renderJisiluNav_0601 === 'function') renderJisiluNav_0601();
    const jisiluContentEl0601 = document.getElementById('jisilu-content');
    if (jisiluContentEl0601 && typeof renderJisiluContent_0601 === 'function') jisiluContentEl0601.innerHTML = renderJisiluContent_0601();
    if (typeof renderFuturesNav_0601 === 'function') renderFuturesNav_0601();
    const futuresContentEl0601 = document.getElementById('futures-content');
    if (futuresContentEl0601 && typeof renderFuturesContent_0601 === 'function') futuresContentEl0601.innerHTML = renderFuturesContent_0601();
  }

  // 其他日期的默认处理
  else {
    console.log('[renderAllContent] 使用默认渲染');
  }
}

// 时钟功能
function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const clockEl = document.getElementById('clock-display');
  if (clockEl) {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('zh-CN', { hour12: false });
  }
}

// 日期搜索过滤
function filterDateList(value) {
  const clearBtn = document.getElementById('date-search-clear');
  const dateItems = document.querySelectorAll('#date-list .date-item');

  if (value.trim()) {
    clearBtn.classList.remove('hidden');
    const normalizedValue = value.toLowerCase().trim();

    dateItems.forEach(item => {
      const label = item.querySelector('span').textContent.toLowerCase();
      if (label.includes(normalizedValue)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    // 检查是否有可见结果
    const visibleItems = document.querySelectorAll('#date-list .date-item[style=""], #date-list .date-item:not([style])');
    const noResults = document.getElementById('date-no-results');
    if (visibleItems.length === 0 && noResults) {
      noResults.classList.remove('hidden');
    } else if (noResults) {
      noResults.classList.add('hidden');
    }
  } else {
    clearBtn.classList.add('hidden');
    dateItems.forEach(item => item.style.display = '');
    const noResults = document.getElementById('date-no-results');
    if (noResults) {
      noResults.classList.add('hidden');
    }
  }
}

function clearDateSearch() {
  const input = document.getElementById('date-search-input');
  if (input) {
    input.value = '';
    filterDateList('');
    input.focus();
  }
}

// 点击外部关闭下拉菜单
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('date-dropdown');
  const btn = document.getElementById('date-selector-btn');
  if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
    AppState.dateDropdownOpen = false;
  }
});

// 阻止下拉菜单内部点击事件冒泡
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('date-dropdown');
  if (dropdown) {
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// 导航高亮
function updateActiveNav(sectionId) {
  AppState.activeSection = sectionId;

  // 移除所有导航项的高亮
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('bg-red-50', 'text-red-700', 'font-semibold');
    btn.querySelector('.rounded-full')?.classList.remove('bg-red-500');
    btn.querySelector('.rounded-full')?.classList.add('bg-transparent');
  });

  // 高亮当前导航项
  const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('bg-red-50', 'text-red-700', 'font-semibold');
    activeBtn.querySelector('.rounded-full')?.classList.remove('bg-transparent');
    activeBtn.querySelector('.rounded-full')?.classList.add('bg-red-500');
  }
}
