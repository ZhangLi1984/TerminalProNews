// ==========================================
// 智研金融 Terminal Pro - 应用入口
// ==========================================

/**
 * 应用状态管理
 */
const AppState = {
  activeTab: 'decision',
  activeSection: 'sec1',
  currentDate: '2026-06-09',
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
    btn.classList.add('text-slate-700', 'hover:bg-slate-100');

    const dot = btn.querySelector('div');
    if (dot) {
      dot.classList.remove('bg-red-500');
      dot.classList.add('bg-transparent');
    }
  });

  // 高亮当前导航按钮
  const activeBtn = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-700', 'hover:bg-slate-100');
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
  const macroBtn = document.getElementById('tab-macro');
  const brokerBtn = document.getElementById('tab-broker');
  const stockBtn = document.getElementById('tab-stock');
  const jisiluBtn = document.getElementById('tab-jisilu');
  const futuresBtn = document.getElementById('tab-futures');
  const decisionDoc = document.getElementById('decision-doc');
  const industryDoc = document.getElementById('industry-doc');
  const macroDoc = document.getElementById('macro-doc');
  const brokerDoc = document.getElementById('broker-doc');
  const stockDoc = document.getElementById('stock-doc');
  const jisiluDoc = document.getElementById('jisilu-doc');
  const futuresDoc = document.getElementById('futures-doc');

  // 重置所有按钮样式 - 新设计风格
  [decisionBtn, industryBtn, macroBtn, brokerBtn, stockBtn, jisiluBtn, futuresBtn].forEach(btn => {
    if (btn) {
      // 移除激活状态样式
      btn.classList.remove('bg-red-600', 'text-white', 'shadow-sm', 'hover:bg-red-700');
      btn.classList.remove('bg-slate-200', 'text-slate-900');
      // 添加默认样式
      btn.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    }
  });

  // 隐藏所有文档
  decisionDoc.classList.add('hidden');
  industryDoc.classList.add('hidden');
  macroDoc.classList.add('hidden');
  brokerDoc.classList.add('hidden');
  stockDoc.classList.add('hidden');
  if (jisiluDoc) jisiluDoc.classList.add('hidden');
  if (futuresDoc) futuresDoc.classList.add('hidden');

  if (tab === 'decision') {
    decisionBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    decisionBtn.classList.add('bg-red-600', 'text-white', 'shadow-sm', 'hover:bg-red-700');
    decisionDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('sec1'), 100);
  } else if (tab === 'industry') {
    industryBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    industryBtn.classList.add('bg-slate-200', 'text-slate-900');
    industryDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('i_sec1'), 100);
  } else if (tab === 'macro') {
    macroBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    macroBtn.classList.add('bg-slate-200', 'text-slate-900');
    macroDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('m_sec1'), 100);
  } else if (tab === 'broker') {
    brokerBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    brokerBtn.classList.add('bg-slate-200', 'text-slate-900');
    brokerDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('b_sec1'), 100);
  } else if (tab === 'stock') {
    stockBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    stockBtn.classList.add('bg-slate-200', 'text-slate-900');
    stockDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('s_sec1'), 100);
  } else if (tab === 'jisilu') {
    if (jisiluBtn) {
      jisiluBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
      jisiluBtn.classList.add('bg-slate-200', 'text-slate-900');
    }
    if (jisiluDoc) jisiluDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('j_sec1'), 100);
  } else if (tab === 'futures') {
    if (futuresBtn) {
      futuresBtn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
      futuresBtn.classList.add('bg-slate-200', 'text-slate-900');
    }
    if (futuresDoc) futuresDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('f_sec1'), 100);
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





  if (date === '2026-06-09') {
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
  } else

  if (date === '2026-06-07') {
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
    if (typeof renderStockNav_0607 === 'function') renderStockNav_0607();
    const stockContentEl0607 = document.getElementById('stock-content');
    if (stockContentEl0607 && typeof renderStockContent_0607 === 'function') stockContentEl0607.innerHTML = renderStockContent_0607();
    if (typeof renderJisiluNav_0607 === 'function') renderJisiluNav_0607();
    const jisiluContentEl0607 = document.getElementById('jisilu-content');
    if (jisiluContentEl0607 && typeof renderJisiluContent_0607 === 'function') jisiluContentEl0607.innerHTML = renderJisiluContent_0607();
  } else


  if (date === '2026-06-04') {
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
  } else

  if (date === '2026-06-03') {
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
  } else

  if (date === '2026-06-02') {
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
  } else

  if (date === '2026-06-01') {
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
  } else

  if (date === '2026-05-31') {
    console.log('[renderAllContent] 渲染 5 月 31 日内容');
    if (typeof renderDecisionNav_0531 === 'function') renderDecisionNav_0531();
    const decisionContentEl0531 = document.getElementById('decision-content');
    if (decisionContentEl0531 && typeof renderDecisionContent_0531 === 'function') decisionContentEl0531.innerHTML = renderDecisionContent_0531();
    if (typeof renderMacroNav_0531 === 'function') renderMacroNav_0531();
    const macroContentEl0531 = document.getElementById('macro-content');
    if (macroContentEl0531 && typeof renderMacroContent_0531 === 'function') macroContentEl0531.innerHTML = renderMacroContent_0531();
    if (typeof renderStockNav_0531 === 'function') renderStockNav_0531();
    const stockContentEl0531 = document.getElementById('stock-content');
    if (stockContentEl0531 && typeof renderStockContent_0531 === 'function') stockContentEl0531.innerHTML = renderStockContent_0531();
    if (typeof renderJisiluNav_0531 === 'function') renderJisiluNav_0531();
    const jisiluContentEl0531 = document.getElementById('jisilu-content');
    if (jisiluContentEl0531 && typeof renderJisiluContent_0531 === 'function') jisiluContentEl0531.innerHTML = renderJisiluContent_0531();
    if (typeof renderIndustryNav_0531 === 'function') renderIndustryNav_0531();
    const industryContentEl0531 = document.getElementById('industry-content');
    if (industryContentEl0531 && typeof renderIndustryContent_0531 === 'function') industryContentEl0531.innerHTML = renderIndustryContent_0531();
    if (typeof renderBrokerNav_0531 === 'function') renderBrokerNav_0531();
    const brokerContentEl0531 = document.getElementById('broker-content');
    if (brokerContentEl0531 && typeof renderBrokerContent_0531 === 'function') brokerContentEl0531.innerHTML = renderBrokerContent_0531();
    if (typeof renderFuturesNav_0531 === 'function') renderFuturesNav_0531();
    const futuresContentEl0531 = document.getElementById('futures-content');
    if (futuresContentEl0531 && typeof renderFuturesContent_0531 === 'function') futuresContentEl0531.innerHTML = renderFuturesContent_0531();
  } else

  if (date === '2026-05-28') {
    console.log('[renderAllContent] 渲染 5 月 28 日内容');
    if (typeof renderDecisionNav_0528 === 'function') renderDecisionNav_0528();
    const decisionContentEl0528 = document.getElementById('decision-content');
    if (decisionContentEl0528 && typeof renderDecisionContent_0528 === 'function') decisionContentEl0528.innerHTML = renderDecisionContent_0528();
    if (typeof renderIndustryNav_0528 === 'function') renderIndustryNav_0528();
    const industryContentEl0528 = document.getElementById('industry-content');
    if (industryContentEl0528 && typeof renderIndustryContent_0528 === 'function') industryContentEl0528.innerHTML = renderIndustryContent_0528();
    if (typeof renderMacroNav_0528 === 'function') renderMacroNav_0528();
    const macroContentEl0528 = document.getElementById('macro-content');
    if (macroContentEl0528 && typeof renderMacroContent_0528 === 'function') macroContentEl0528.innerHTML = renderMacroContent_0528();
    if (typeof renderBrokerNav_0528 === 'function') renderBrokerNav_0528();
    const brokerContentEl0528 = document.getElementById('broker-content');
    if (brokerContentEl0528 && typeof renderBrokerContent_0528 === 'function') brokerContentEl0528.innerHTML = renderBrokerContent_0528();
    if (typeof renderStockNav_0528 === 'function') renderStockNav_0528();
    const stockContentEl0528 = document.getElementById('stock-content');
    if (stockContentEl0528 && typeof renderStockContent_0528 === 'function') stockContentEl0528.innerHTML = renderStockContent_0528();
    if (typeof renderJisiluNav_0528 === 'function') renderJisiluNav_0528();
    const jisiluContentEl0528 = document.getElementById('jisilu-content');
    if (jisiluContentEl0528 && typeof renderJisiluContent_0528 === 'function') jisiluContentEl0528.innerHTML = renderJisiluContent_0528();
    if (typeof renderFuturesNav_0528 === 'function') renderFuturesNav_0528();
    const futuresContentEl0528 = document.getElementById('futures-content');
    if (futuresContentEl0528 && typeof renderFuturesContent_0528 === 'function') futuresContentEl0528.innerHTML = renderFuturesContent_0528();
  } else
  if (date === '2026-05-27') {
    console.log('[renderAllContent] 渲染 5 月 27 日内容');
    if (typeof renderDecisionNav_0527 === 'function') renderDecisionNav_0527();
    const decisionContentEl0527 = document.getElementById('decision-content');
    if (decisionContentEl0527 && typeof renderDecisionContent_0527 === 'function') decisionContentEl0527.innerHTML = renderDecisionContent_0527();
    if (typeof renderIndustryNav_0527 === 'function') renderIndustryNav_0527();
    const industryContentEl0527 = document.getElementById('industry-content');
    if (industryContentEl0527 && typeof renderIndustryContent_0527 === 'function') industryContentEl0527.innerHTML = renderIndustryContent_0527();
    if (typeof renderMacroNav_0527 === 'function') renderMacroNav_0527();
    const macroContentEl0527 = document.getElementById('macro-content');
    if (macroContentEl0527 && typeof renderMacroContent_0527 === 'function') macroContentEl0527.innerHTML = renderMacroContent_0527();
    if (typeof renderBrokerNav_0527 === 'function') renderBrokerNav_0527();
    const brokerContentEl0527 = document.getElementById('broker-content');
    if (brokerContentEl0527 && typeof renderBrokerContent_0527 === 'function') brokerContentEl0527.innerHTML = renderBrokerContent_0527();
    if (typeof renderStockNav_0527 === 'function') renderStockNav_0527();
    const stockContentEl0527 = document.getElementById('stock-content');
    if (stockContentEl0527 && typeof renderStockContent_0527 === 'function') stockContentEl0527.innerHTML = renderStockContent_0527();
    if (typeof renderJisiluNav_0527 === 'function') renderJisiluNav_0527();
    const jisiluContentEl0527 = document.getElementById('jisilu-content');
    if (jisiluContentEl0527 && typeof renderJisiluContent_0527 === 'function') jisiluContentEl0527.innerHTML = renderJisiluContent_0527();
    if (typeof renderFuturesNav_0527 === 'function') renderFuturesNav_0527();
    const futuresContentEl0527 = document.getElementById('futures-content');
    if (futuresContentEl0527 && typeof renderFuturesContent_0527 === 'function') futuresContentEl0527.innerHTML = renderFuturesContent_0527();
  } else


  if (date === '2026-05-26') {
    console.log('[renderAllContent] 渲染 5 月 26 日内容');
    if (typeof renderDecisionNav_0526 === 'function') renderDecisionNav_0526();
    const decisionContentEl0526 = document.getElementById('decision-content');
    if (decisionContentEl0526 && typeof renderDecisionContent_0526 === 'function') decisionContentEl0526.innerHTML = renderDecisionContent_0526();
    if (typeof renderIndustryNav_0526 === 'function') renderIndustryNav_0526();
    const industryContentEl0526 = document.getElementById('industry-content');
    if (industryContentEl0526 && typeof renderIndustryContent_0526 === 'function') industryContentEl0526.innerHTML = renderIndustryContent_0526();
    if (typeof renderMacroNav_0526 === 'function') renderMacroNav_0526();
    const macroContentEl0526 = document.getElementById('macro-content');
    if (macroContentEl0526 && typeof renderMacroContent_0526 === 'function') macroContentEl0526.innerHTML = renderMacroContent_0526();
    if (typeof renderBrokerNav_0526 === 'function') renderBrokerNav_0526();
    const brokerContentEl0526 = document.getElementById('broker-content');
    if (brokerContentEl0526 && typeof renderBrokerContent_0526 === 'function') brokerContentEl0526.innerHTML = renderBrokerContent_0526();
    if (typeof renderStockNav_0526 === 'function') renderStockNav_0526();
    const stockContentEl0526 = document.getElementById('stock-content');
    if (stockContentEl0526 && typeof renderStockContent_0526 === 'function') stockContentEl0526.innerHTML = renderStockContent_0526();
    if (typeof renderJisiluNav_0526 === 'function') renderJisiluNav_0526();
    const jisiluContentEl0526 = document.getElementById('jisilu-content');
    if (jisiluContentEl0526 && typeof renderJisiluContent_0526 === 'function') jisiluContentEl0526.innerHTML = renderJisiluContent_0526();
    if (typeof renderFuturesNav_0526 === 'function') renderFuturesNav_0526();
    const futuresContentEl0526 = document.getElementById('futures-content');
    if (futuresContentEl0526 && typeof renderFuturesContent_0526 === 'function') futuresContentEl0526.innerHTML = renderFuturesContent_0526();
  } else
