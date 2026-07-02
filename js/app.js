// ==========================================
// 主应用逻辑
// ==========================================

const AppState = {
  currentTab: 'decision',
  currentDate: '2026-07-02',
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

  if (date === '2026-07-02') {
    console.log('[renderAllContent] 渲染 7 月 2 日内容');
    if (typeof renderDecisionNav_0702 === 'function') renderDecisionNav_0702();
    const decisionContentEl0702 = document.getElementById('decision-content');
    if (decisionContentEl0702 && typeof renderDecisionContent_0702 === 'function') decisionContentEl0702.innerHTML = renderDecisionContent_0702();
  } else if (date === '2026-07-01') {
    console.log('[renderAllContent] 渲染 7 月 1 日内容');
    if (typeof renderDecisionNav_0701 === 'function') renderDecisionNav_0701();
    const decisionContentEl0701 = document.getElementById('decision-content');
    if (decisionContentEl0701 && typeof renderDecisionContent_0701 === 'function') decisionContentEl0701.innerHTML = renderDecisionContent_0701();
    if (typeof renderIndustryNav_0701 === 'function') renderIndustryNav_0701();
    const industryContentEl0701 = document.getElementById('industry-content');
    if (industryContentEl0701 && typeof renderIndustryContent_0701 === 'function') industryContentEl0701.innerHTML = renderIndustryContent_0701();
    if (typeof renderMacroNav_0701 === 'function') renderMacroNav_0701();
    const macroContentEl0701 = document.getElementById('macro-content');
    if (macroContentEl0701 && typeof renderMacroContent_0701 === 'function') macroContentEl0701.innerHTML = renderMacroContent_0701();
    if (typeof renderBrokerNav_0701 === 'function') renderBrokerNav_0701();
    const brokerContentEl0701 = document.getElementById('broker-content');
    if (brokerContentEl0701 && typeof renderBrokerContent_0701 === 'function') brokerContentEl0701.innerHTML = renderBrokerContent_0701();
    if (typeof renderStockNav_0701 === 'function') renderStockNav_0701();
    const stockContentEl0701 = document.getElementById('stock-content');
    if (stockContentEl0701 && typeof renderStockContent_0701 === 'function') stockContentEl0701.innerHTML = renderStockContent_0701();
    if (typeof renderJisiluNav_0701 === 'function') renderJisiluNav_0701();
    const jisiluContentEl0701 = document.getElementById('jisilu-content');
    if (jisiluContentEl0701 && typeof renderJisiluContent_0701 === 'function') jisiluContentEl0701.innerHTML = renderJisiluContent_0701();
    if (typeof renderFuturesNav_0701 === 'function') renderFuturesNav_0701();
    const futuresContentEl0701 = document.getElementById('futures-content');
    if (futuresContentEl0701 && typeof renderFuturesContent_0701 === 'function') futuresContentEl0701.innerHTML = renderFuturesContent_0701();
  } else if (date === '2026-06-30') {
    console.log('[renderAllContent] 渲染 6 月 30 日内容');
    if (typeof renderDecisionNav_0630 === 'function') renderDecisionNav_0630();
    const decisionContentEl0630 = document.getElementById('decision-content');
    if (decisionContentEl0630 && typeof renderDecisionContent_0630 === 'function') decisionContentEl0630.innerHTML = renderDecisionContent_0630();
    if (typeof renderIndustryNav_0630 === 'function') renderIndustryNav_0630();
    const industryContentEl0630 = document.getElementById('industry-content');
    if (industryContentEl0630 && typeof renderIndustryContent_0630 === 'function') industryContentEl0630.innerHTML = renderIndustryContent_0630();
    if (typeof renderMacroNav_0630 === 'function') renderMacroNav_0630();
    const macroContentEl0630 = document.getElementById('macro-content');
    if (macroContentEl0630 && typeof renderMacroContent_0630 === 'function') macroContentEl0630.innerHTML = renderMacroContent_0630();
    if (typeof renderBrokerNav_0630 === 'function') renderBrokerNav_0630();
    const brokerContentEl0630 = document.getElementById('broker-content');
    if (brokerContentEl0630 && typeof renderBrokerContent_0630 === 'function') brokerContentEl0630.innerHTML = renderBrokerContent_0630();
    if (typeof renderStockNav_0630 === 'function') renderStockNav_0630();
    const stockContentEl0630 = document.getElementById('stock-content');
    if (stockContentEl0630 && typeof renderStockContent_0630 === 'function') stockContentEl0630.innerHTML = renderStockContent_0630();
    if (typeof renderJisiluNav_0630 === 'function') renderJisiluNav_0630();
    const jisiluContentEl0630 = document.getElementById('jisilu-content');
    if (jisiluContentEl0630 && typeof renderJisiluContent_0630 === 'function') jisiluContentEl0630.innerHTML = renderJisiluContent_0630();
    if (typeof renderFuturesNav_0630 === 'function') renderFuturesNav_0630();
    const futuresContentEl0630 = document.getElementById('futures-content');
    if (futuresContentEl0630 && typeof renderFuturesContent_0630 === 'function') futuresContentEl0630.innerHTML = renderFuturesContent_0630();
  } else if (date === '2026-06-29') {
    console.log('[renderAllContent] 渲染 6 月 29 日内容');
    if (typeof renderDecisionNav_0629 === 'function') renderDecisionNav_0629();
    const decisionContentEl0629 = document.getElementById('decision-content');
    if (decisionContentEl0629 && typeof renderDecisionContent_0629 === 'function') decisionContentEl0629.innerHTML = renderDecisionContent_0629();
    if (typeof renderIndustryNav_0629 === 'function') renderIndustryNav_0629();
    const industryContentEl0629 = document.getElementById('industry-content');
    if (industryContentEl0629 && typeof renderIndustryContent_0629 === 'function') industryContentEl0629.innerHTML = renderIndustryContent_0629();
    if (typeof renderMacroNav_0629 === 'function') renderMacroNav_0629();
    const macroContentEl0629 = document.getElementById('macro-content');
    if (macroContentEl0629 && typeof renderMacroContent_0629 === 'function') macroContentEl0629.innerHTML = renderMacroContent_0629();
    if (typeof renderBrokerNav_0629 === 'function') renderBrokerNav_0629();
    const brokerContentEl0629 = document.getElementById('broker-content');
    if (brokerContentEl0629 && typeof renderBrokerContent_0629 === 'function') brokerContentEl0629.innerHTML = renderBrokerContent_0629();
    if (typeof renderStockNav_0629 === 'function') renderStockNav_0629();
    const stockContentEl0629 = document.getElementById('stock-content');
    if (stockContentEl0629 && typeof renderStockContent_0629 === 'function') stockContentEl0629.innerHTML = renderStockContent_0629();
    if (typeof renderJisiluNav_0629 === 'function') renderJisiluNav_0629();
    const jisiluContentEl0629 = document.getElementById('jisilu-content');
    if (jisiluContentEl0629 && typeof renderJisiluContent_0629 === 'function') jisiluContentEl0629.innerHTML = renderJisiluContent_0629();
    if (typeof renderFuturesNav_0629 === 'function') renderFuturesNav_0629();
    const futuresContentEl0629 = document.getElementById('futures-content');
    if (futuresContentEl0629 && typeof renderFuturesContent_0629 === 'function') futuresContentEl0629.innerHTML = renderFuturesContent_0629();
  } else if (date === '2026-06-28') {
    console.log('[renderAllContent] 渲染 6 月 28 日内容');
    if (typeof renderDecisionNav_0628 === 'function') renderDecisionNav_0628();
    const decisionContentEl0628 = document.getElementById('decision-content');
    if (decisionContentEl0628 && typeof renderDecisionContent_0628 === 'function') decisionContentEl0628.innerHTML = renderDecisionContent_0628();
    if (typeof renderIndustryNav_0628 === 'function') renderIndustryNav_0628();
    const industryContentEl0628 = document.getElementById('industry-content');
    if (industryContentEl0628 && typeof renderIndustryContent_0628 === 'function') industryContentEl0628.innerHTML = renderIndustryContent_0628();
    if (typeof renderMacroNav_0628 === 'function') renderMacroNav_0628();
    const macroContentEl0628 = document.getElementById('macro-content');
    if (macroContentEl0628 && typeof renderMacroContent_0628 === 'function') macroContentEl0628.innerHTML = renderMacroContent_0628();
    if (typeof renderBrokerNav_0628 === 'function') renderBrokerNav_0628();
    const brokerContentEl0628 = document.getElementById('broker-content');
    if (brokerContentEl0628 && typeof renderBrokerContent_0628 === 'function') brokerContentEl0628.innerHTML = renderBrokerContent_0628();
    if (typeof renderStockNav_0628 === 'function') renderStockNav_0628();
    const stockContentEl0628 = document.getElementById('stock-content');
    if (stockContentEl0628 && typeof renderStockContent_0628 === 'function') stockContentEl0628.innerHTML = renderStockContent_0628();
    if (typeof renderJisiluNav_0628 === 'function') renderJisiluNav_0628();
    const jisiluContentEl0628 = document.getElementById('jisilu-content');
    if (jisiluContentEl0628 && typeof renderJisiluContent_0628 === 'function') jisiluContentEl0628.innerHTML = renderJisiluContent_0628();
    if (typeof renderFuturesNav_0628 === 'function') renderFuturesNav_0628();
    const futuresContentEl0628 = document.getElementById('futures-content');
    if (futuresContentEl0628 && typeof renderFuturesContent_0628 === 'function') futuresContentEl0628.innerHTML = renderFuturesContent_0628();
  } else if (date === '2026-06-25') {
    console.log('[renderAllContent] 渲染 6 月 25 日内容');
    if (typeof renderDecisionNav_0625 === 'function') renderDecisionNav_0625();
    const decisionContentEl0625 = document.getElementById('decision-content');
    if (decisionContentEl0625 && typeof renderDecisionContent_0625 === 'function') decisionContentEl0625.innerHTML = renderDecisionContent_0625();
    if (typeof renderIndustryNav_0625 === 'function') renderIndustryNav_0625();
    const industryContentEl0625 = document.getElementById('industry-content');
    if (industryContentEl0625 && typeof renderIndustryContent_0625 === 'function') industryContentEl0625.innerHTML = renderIndustryContent_0625();
    if (typeof renderMacroNav_0625 === 'function') renderMacroNav_0625();
    const macroContentEl0625 = document.getElementById('macro-content');
    if (macroContentEl0625 && typeof renderMacroContent_0625 === 'function') macroContentEl0625.innerHTML = renderMacroContent_0625();
    if (typeof renderBrokerNav_0625 === 'function') renderBrokerNav_0625();
    const brokerContentEl0625 = document.getElementById('broker-content');
    if (brokerContentEl0625 && typeof renderBrokerContent_0625 === 'function') brokerContentEl0625.innerHTML = renderBrokerContent_0625();
    if (typeof renderStockNav_0625 === 'function') renderStockNav_0625();
    const stockContentEl0625 = document.getElementById('stock-content');
    if (stockContentEl0625 && typeof renderStockContent_0625 === 'function') stockContentEl0625.innerHTML = renderStockContent_0625();
    if (typeof renderJisiluNav_0625 === 'function') renderJisiluNav_0625();
    const jisiluContentEl0625 = document.getElementById('jisilu-content');
    if (jisiluContentEl0625 && typeof renderJisiluContent_0625 === 'function') jisiluContentEl0625.innerHTML = renderJisiluContent_0625();
  } else if (date === '2026-06-24') {
    console.log('[renderAllContent] 渲染 6 月 24 日内容');
    if (typeof renderDecisionNav_0624 === 'function') renderDecisionNav_0624();
    const decisionContentEl0624 = document.getElementById('decision-content');
    if (decisionContentEl0624 && typeof renderDecisionContent_0624 === 'function') decisionContentEl0624.innerHTML = renderDecisionContent_0624();
    if (typeof renderIndustryNav_0624 === 'function') renderIndustryNav_0624();
    const industryContentEl0624 = document.getElementById('industry-content');
    if (industryContentEl0624 && typeof renderIndustryContent_0624 === 'function') industryContentEl0624.innerHTML = renderIndustryContent_0624();
    if (typeof renderMacroNav_0624 === 'function') renderMacroNav_0624();
    const macroContentEl0624 = document.getElementById('macro-content');
    if (macroContentEl0624 && typeof renderMacroContent_0624 === 'function') macroContentEl0624.innerHTML = renderMacroContent_0624();
    if (typeof renderBrokerNav_0624 === 'function') renderBrokerNav_0624();
    const brokerContentEl0624 = document.getElementById('broker-content');
    if (brokerContentEl0624 && typeof renderBrokerContent_0624 === 'function') brokerContentEl0624.innerHTML = renderBrokerContent_0624();
    if (typeof renderStockNav_0624 === 'function') renderStockNav_0624();
    const stockContentEl0624 = document.getElementById('stock-content');
    if (stockContentEl0624 && typeof renderStockContent_0624 === 'function') stockContentEl0624.innerHTML = renderStockContent_0624();
    if (typeof renderJisiluNav_0624 === 'function') renderJisiluNav_0624();
    const jisiluContentEl0624 = document.getElementById('jisilu-content');
    if (jisiluContentEl0624 && typeof renderJisiluContent_0624 === 'function') jisiluContentEl0624.innerHTML = renderJisiluContent_0624();
    if (typeof renderFuturesNav_0624 === 'function') renderFuturesNav_0624();
    const futuresContentEl0624 = document.getElementById('futures-content');
    if (futuresContentEl0624 && typeof renderFuturesContent_0624 === 'function') futuresContentEl0624.innerHTML = renderFuturesContent_0624();
  } else if (date === '2026-06-23') {
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
    if (typeof renderBrokerNav_0623 === 'function') renderBrokerNav_0623();
    const brokerContentEl0623 = document.getElementById('broker-content');
    if (brokerContentEl0623 && typeof renderBrokerContent_0623 === 'function') brokerContentEl0623.innerHTML = renderBrokerContent_0623();
    if (typeof renderStockNav_0623 === 'function') renderStockNav_0623();
    const stockContentEl0623 = document.getElementById('stock-content');
    if (stockContentEl0623 && typeof renderStockContent_0623 === 'function') stockContentEl0623.innerHTML = renderStockContent_0623();
    if (typeof renderJisiluNav_0623 === 'function') renderJisiluNav_0623();
    const jisiluContentEl0623 = document.getElementById('jisilu-content');
    if (jisiluContentEl0623 && typeof renderJisiluContent_0623 === 'function') jisiluContentEl0623.innerHTML = renderJisiluContent_0623();
    if (typeof renderFuturesNav_0623 === 'function') renderFuturesNav_0623();
    const futuresContentEl0623 = document.getElementById('futures-content');
    if (futuresContentEl0623 && typeof renderFuturesContent_0623 === 'function') futuresContentEl0623.innerHTML = renderFuturesContent_0623();
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
