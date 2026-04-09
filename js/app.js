// ==========================================
// 智研金融 Terminal Pro - 应用入口
// ==========================================

/**
 * 应用状态管理
 */
const AppState = {
  activeTab: 'decision',
  activeSection: 'sec1',
  currentDate: '2026-04-09',
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

  if (date === '2026-04-09') {
    // 渲染 4 月 9 日内容
    console.log('[renderAllContent] 渲染 4 月 9 日内容');
    if (typeof renderDecisionNav_0409 === 'function') renderDecisionNav_0409();
    if (typeof renderMacroNav_0409 === 'function') renderMacroNav_0409();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0409 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0409();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0409 === 'function') macroContentEl.innerHTML = renderMacroContent_0409();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0409 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0409();
    if (typeof renderBrokerNav_0409 === 'function') renderBrokerNav_0409();
  } else

  if (date === '2026-04-08') {
    // 渲染 4 月 8 日内容
    console.log('[renderAllContent] 渲染 4 月 8 日内容');
    if (typeof renderDecisionNav_0408 === 'function') renderDecisionNav_0408();
    if (typeof renderIndustryNav_0408 === 'function') renderIndustryNav_0408();
    if (typeof renderMacroNav_0408 === 'function') renderMacroNav_0408();
    if (typeof renderBrokerNav_0408 === 'function') renderBrokerNav_0408();
    if (typeof renderStockNav_0408 === 'function') renderStockNav_0408();
    if (typeof renderJisiluNav_0408 === 'function') renderJisiluNav_0408();
    if (typeof renderFuturesNav_0408 === 'function') renderFuturesNav_0408();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0408 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0408();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0408 === 'function') industryContentEl.innerHTML = renderIndustryContent_0408();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0408 === 'function') macroContentEl.innerHTML = renderMacroContent_0408();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0408 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0408();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0408 === 'function') stockContentEl.innerHTML = renderStockContent_0408();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0408 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0408();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0408 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0408();
  } else

    if (date === '2026-04-07') {
    // 渲染 4 月 7 日内容
    console.log('[renderAllContent] 渲染 4 月 7 日内容');
    if (typeof renderDecisionNav_0407 === 'function') renderDecisionNav_0407();
    if (typeof renderIndustryNav_0407 === 'function') renderIndustryNav_0407();
    if (typeof renderMacroNav_0407 === 'function') renderMacroNav_0407();
    if (typeof renderBrokerNav_0407 === 'function') renderBrokerNav_0407();
    if (typeof renderStockNav_0407 === 'function') renderStockNav_0407();
    if (typeof renderJisiluNav_0407 === 'function') renderJisiluNav_0407();
    if (typeof renderFuturesNav_0407 === 'function') renderFuturesNav_0407();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0407 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0407();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0407 === 'function') industryContentEl.innerHTML = renderIndustryContent_0407();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0407 === 'function') macroContentEl.innerHTML = renderMacroContent_0407();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0407 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0407();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0407 === 'function') stockContentEl.innerHTML = renderStockContent_0407();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0407 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0407();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0407 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0407();
  } else

  if (date === '2026-04-02') {
    // 渲染 4 月 2 日内容
    console.log('[renderAllContent] 渲染 4 月 2 日内容');
    if (typeof renderDecisionNav_0401 === 'function') renderDecisionNav_0401();
    if (typeof renderIndustryNav_0331 === 'function') renderIndustryNav_0331();
    if (typeof renderMacroNav_0331 === 'function') renderMacroNav_0331();
    if (typeof renderBrokerNav_0331 === 'function') renderBrokerNav_0331();
    if (typeof renderStockNav_0402 === 'function') renderStockNav_0402();
    if (typeof renderJisiluNav_0402 === 'function') renderJisiluNav_0402();
    if (typeof renderFuturesNav_0331 === 'function') renderFuturesNav_0331();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0401 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0401();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0331 === 'function') industryContentEl.innerHTML = renderIndustryContent_0331();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0331 === 'function') macroContentEl.innerHTML = renderMacroContent_0331();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0331 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0331();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0402 === 'function') stockContentEl.innerHTML = renderStockContent_0402();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0402 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0402();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0331 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0331();
  } else

  if (date === '2026-04-01') {
    // 渲染 4 月 1 日内容
    console.log('[renderAllContent] 渲染 4 月 1 日内容');
    if (typeof renderDecisionNav_0401 === 'function') renderDecisionNav_0401();
    if (typeof renderIndustryNav_0331 === 'function') renderIndustryNav_0331();
    if (typeof renderMacroNav_0331 === 'function') renderMacroNav_0331();
    if (typeof renderBrokerNav_0331 === 'function') renderBrokerNav_0331();
    if (typeof renderStockNav_0331 === 'function') renderStockNav_0331();
    if (typeof renderJisiluNav_0401 === 'function') renderJisiluNav_0401();
    if (typeof renderFuturesNav_0331 === 'function') renderFuturesNav_0331();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0401 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0401();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0331 === 'function') industryContentEl.innerHTML = renderIndustryContent_0331();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0331 === 'function') macroContentEl.innerHTML = renderMacroContent_0331();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0331 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0331();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0331 === 'function') stockContentEl.innerHTML = renderStockContent_0331();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0401 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0401();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0331 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0331();
  } else

  if (date === '2026-03-31') {
    // 渲染 3 月 31 日内容
    console.log('[renderAllContent] 渲染 3 月 31 日内容');
    if (typeof renderDecisionNav_0331 === 'function') renderDecisionNav_0331();
    if (typeof renderIndustryNav_0331 === 'function') renderIndustryNav_0331();
    if (typeof renderMacroNav_0331 === 'function') renderMacroNav_0331();
    if (typeof renderBrokerNav_0331 === 'function') renderBrokerNav_0331();
    if (typeof renderStockNav_0331 === 'function') renderStockNav_0331();
    if (typeof renderJisiluNav_0331 === 'function') renderJisiluNav_0331();
    if (typeof renderFuturesNav_0331 === 'function') renderFuturesNav_0331();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0331 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0331();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0331 === 'function') industryContentEl.innerHTML = renderIndustryContent_0331();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0331 === 'function') macroContentEl.innerHTML = renderMacroContent_0331();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0331 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0331();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0331 === 'function') stockContentEl.innerHTML = renderStockContent_0331();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0331 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0331();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0331 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0331();
  } else


  if (date === '2026-03-30') {
    // 渲染 3 月 30 日内容
    console.log('[renderAllContent] 渲染 3 月 30 日内容');
    if (typeof renderDecisionNav_0330 === 'function') renderDecisionNav_0330();
    if (typeof renderIndustryNav_0330 === 'function') renderIndustryNav_0330();
    if (typeof renderMacroNav_0330 === 'function') renderMacroNav_0330();
    if (typeof renderBrokerNav_0330 === 'function') renderBrokerNav_0330();
    if (typeof renderStockNav_0330 === 'function') renderStockNav_0330();
    if (typeof renderJisiluNav_0330 === 'function') renderJisiluNav_0330();
    if (typeof renderFuturesNav_0330 === 'function') renderFuturesNav_0330();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0330 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0330();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0330 === 'function') industryContentEl.innerHTML = renderIndustryContent_0330();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0330 === 'function') macroContentEl.innerHTML = renderMacroContent_0330();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0330 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0330();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0330 === 'function') stockContentEl.innerHTML = renderStockContent_0330();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0330 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0330();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0330 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0330();
  } else

  if (date === '2026-03-27') {
    // 渲染 3 月 27 日内容
    console.log('[renderAllContent] 渲染 3 月 27 日内容');
    if (typeof renderDecisionNav_0327 === 'function') renderDecisionNav_0327();
    if (typeof renderIndustryNav_0327 === 'function') renderIndustryNav_0327();
    if (typeof renderMacroNav_0327 === 'function') renderMacroNav_0327();
    if (typeof renderBrokerNav_0327 === 'function') renderBrokerNav_0327();
    if (typeof renderStockNav_0327 === 'function') renderStockNav_0327();
    if (typeof renderJisiluNav_0327 === 'function') renderJisiluNav_0327();
    if (typeof renderFuturesNav_0327 === 'function') renderFuturesNav_0327();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0327 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0327();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0327 === 'function') industryContentEl.innerHTML = renderIndustryContent_0327();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0327 === 'function') macroContentEl.innerHTML = renderMacroContent_0327();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0327 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0327();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0327 === 'function') stockContentEl.innerHTML = renderStockContent_0327();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0327 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0327();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0327 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0327();
  } else

  if (date === '2026-03-26') {
    // 渲染 3 月 26 日内容
    console.log('[renderAllContent] 渲染 3 月 26 日内容');
    if (typeof renderDecisionNav_0326 === 'function') renderDecisionNav_0326();
    if (typeof renderIndustryNav_0326 === 'function') renderIndustryNav_0326();
    if (typeof renderMacroNav_0326 === 'function') renderMacroNav_0326();
    if (typeof renderBrokerNav_0326 === 'function') renderBrokerNav_0326();
    if (typeof renderStockNav_0326 === 'function') renderStockNav_0326();
    if (typeof renderJisiluNav_0326 === 'function') renderJisiluNav_0326();
    if (typeof renderFuturesNav_0326 === 'function') renderFuturesNav_0326();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0326 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0326();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0326 === 'function') industryContentEl.innerHTML = renderIndustryContent_0326();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0326 === 'function') macroContentEl.innerHTML = renderMacroContent_0326();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0326 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0326();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0326 === 'function') stockContentEl.innerHTML = renderStockContent_0326();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0326 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0326();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0326 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0326();
  } else
  if (date === '2026-03-25') {
    // 渲染 3 月 25 日内容
    console.log('[renderAllContent] 渲染 3 月 25 日内容');
    if (typeof renderDecisionNav_0325 === 'function') renderDecisionNav_0325();
    if (typeof renderIndustryNav_0325 === 'function') renderIndustryNav_0325();
    if (typeof renderMacroNav_0325 === 'function') renderMacroNav_0325();
    if (typeof renderBrokerNav_0325 === 'function') renderBrokerNav_0325();
    if (typeof renderStockNav_0325 === 'function') renderStockNav_0325();
    if (typeof renderJisiluNav_0325 === 'function') renderJisiluNav_0325();
    if (typeof renderFuturesNav_0325 === 'function') renderFuturesNav_0325();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0325 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0325();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0325 === 'function') industryContentEl.innerHTML = renderIndustryContent_0325();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0325 === 'function') macroContentEl.innerHTML = renderMacroContent_0325();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0325 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0325();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0325 === 'function') stockContentEl.innerHTML = renderStockContent_0325();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0325 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0325();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0325 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0325();
  } else
  if (date === '2026-03-24') {
    // 渲染 3 月 24 日内容
    console.log('[renderAllContent] 渲染 3 月 24 日内容');
    if (typeof renderDecisionNav_0324 === 'function') renderDecisionNav_0324();
    if (typeof renderIndustryNav_0324 === 'function') renderIndustryNav_0324();
    if (typeof renderMacroNav_0324 === 'function') renderMacroNav_0324();
    if (typeof renderBrokerNav_0324 === 'function') renderBrokerNav_0324();
    if (typeof renderStockNav_0324 === 'function') renderStockNav_0324();
    if (typeof renderJisiluNav_0324 === 'function') renderJisiluNav_0324();
    if (typeof renderFuturesNav_0324 === 'function') renderFuturesNav_0324();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0324 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0324();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0324 === 'function') industryContentEl.innerHTML = renderIndustryContent_0324();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0324 === 'function') macroContentEl.innerHTML = renderMacroContent_0324();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0324 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0324();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0324 === 'function') stockContentEl.innerHTML = renderStockContent_0324();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0324 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0324();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0324 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0324();
  } else
  if (date === '2026-03-23') {
    // 渲染 3 月 23 日内容
    console.log('[renderAllContent] 渲染 3 月 23 日内容');
    if (typeof renderDecisionNav_0323 === 'function') renderDecisionNav_0323();
    if (typeof renderIndustryNav_0323 === 'function') renderIndustryNav_0323();
    if (typeof renderMacroNav_0323 === 'function') renderMacroNav_0323();
    if (typeof renderBrokerNav_0323 === 'function') renderBrokerNav_0323();
    if (typeof renderStockNav_0323 === 'function') renderStockNav_0323();
    if (typeof renderJisiluNav_0323 === 'function') renderJisiluNav_0323();
    if (typeof renderFuturesNav_0323 === 'function') renderFuturesNav_0323();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0323 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0323();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0323 === 'function') industryContentEl.innerHTML = renderIndustryContent_0323();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0323 === 'function') macroContentEl.innerHTML = renderMacroContent_0323();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0323 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0323();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0323 === 'function') stockContentEl.innerHTML = renderStockContent_0323();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0323 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0323();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0323 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0323();
  } else
  if (date === '2026-03-22') {
    // 渲染 3 月 22 日内容
    console.log('[renderAllContent] 渲染 3 月 22 日内容');
    if (typeof renderDecisionNav_0322 === 'function') renderDecisionNav_0322();
    if (typeof renderIndustryNav_0322 === 'function') renderIndustryNav_0322();
    if (typeof renderMacroNav_0322 === 'function') renderMacroNav_0322();
    if (typeof renderBrokerNav_0322 === 'function') renderBrokerNav_0322();
    if (typeof renderStockNav_0322 === 'function') renderStockNav_0322();
    if (typeof renderJisiluNav_0322 === 'function') renderJisiluNav_0322();
    if (typeof renderFuturesNav_0322 === 'function') renderFuturesNav_0322();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0322 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0322();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0322 === 'function') industryContentEl.innerHTML = renderIndustryContent_0322();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0322 === 'function') macroContentEl.innerHTML = renderMacroContent_0322();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0322 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0322();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0322 === 'function') stockContentEl.innerHTML = renderStockContent_0322();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0322 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0322();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0322 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0322();
  } else if (date === '2026-03-20') {
    // 渲染 3 月 20 日内容
    console.log('[renderAllContent] 渲染 3 月 20 日内容');
    if (typeof renderDecisionNav_0320 === 'function') renderDecisionNav_0320();
    if (typeof renderIndustryNav_0320 === 'function') renderIndustryNav_0320();
    if (typeof renderMacroNav_0320 === 'function') renderMacroNav_0320();
    if (typeof renderBrokerNav_0320 === 'function') renderBrokerNav_0320();
    if (typeof renderStockNav_0320 === 'function') renderStockNav_0320();
    if (typeof renderJisiluNav_0320 === 'function') renderJisiluNav_0320();
    if (typeof renderFuturesNav_0320 === 'function') renderFuturesNav_0320();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0320 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0320();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0320 === 'function') industryContentEl.innerHTML = renderIndustryContent_0320();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0320 === 'function') macroContentEl.innerHTML = renderMacroContent_0320();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0320 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0320();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0320 === 'function') stockContentEl.innerHTML = renderStockContent_0320();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0320 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0320();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0320 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0320();
  } else if (date === '2026-03-19') {
    // 渲染 3 月 19 日内容
    console.log('[renderAllContent] 渲染 3 月 19 日内容');
    if (typeof renderDecisionNav_0319 === 'function') renderDecisionNav_0319();
    if (typeof renderIndustryNav_0319 === 'function') renderIndustryNav_0319();
    if (typeof renderMacroNav_0319 === 'function') renderMacroNav_0319();
    if (typeof renderBrokerNav_0319 === 'function') renderBrokerNav_0319();
    if (typeof renderStockNav_0319 === 'function') renderStockNav_0319();
    if (typeof renderJisiluNav_0319 === 'function') renderJisiluNav_0319();
    if (typeof renderFuturesNav_0319 === 'function') renderFuturesNav_0319();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0319 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0319();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0319 === 'function') industryContentEl.innerHTML = renderIndustryContent_0319();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0319 === 'function') macroContentEl.innerHTML = renderMacroContent_0319();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0319 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0319();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0319 === 'function') stockContentEl.innerHTML = renderStockContent_0319();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0319 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0319();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0319 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0319();
  } else if (date === '2026-03-18') {
    // 渲染 3 月 18 日内容
    console.log('[renderAllContent] 渲染 3 月 18 日内容');
    if (typeof renderDecisionNav_0318 === 'function') renderDecisionNav_0318();
    if (typeof renderIndustryNav_0318 === 'function') renderIndustryNav_0318();
    if (typeof renderMacroNav_0318 === 'function') renderMacroNav_0318();
    if (typeof renderBrokerNav_0318 === 'function') renderBrokerNav_0318();
    if (typeof renderStockNav_0318 === 'function') renderStockNav_0318();
    if (typeof renderJisiluNav_0318 === 'function') renderJisiluNav_0318();
    if (typeof renderFuturesNav_0318 === 'function') renderFuturesNav_0318();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0318 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0318();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0318 === 'function') industryContentEl.innerHTML = renderIndustryContent_0318();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0318 === 'function') macroContentEl.innerHTML = renderMacroContent_0318();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0318 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0318();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0318 === 'function') stockContentEl.innerHTML = renderStockContent_0318();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0318 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0318();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0318 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0318();
  } else if (date === '2026-03-17') {
    // 渲染 3 月 17 日内容
    console.log('[renderAllContent] 渲染 3 月 17 日内容');
    if (typeof renderDecisionNav_0317 === 'function') renderDecisionNav_0317();
    if (typeof renderIndustryNav_0317 === 'function') renderIndustryNav_0317();
    if (typeof renderMacroNav_0317 === 'function') renderMacroNav_0317();
    if (typeof renderBrokerNav_0317 === 'function') renderBrokerNav_0317();
    if (typeof renderStockNav_0317 === 'function') renderStockNav_0317();
    if (typeof renderJisiluNav_0317 === 'function') renderJisiluNav_0317();
    if (typeof renderFuturesNav_0317 === 'function') renderFuturesNav_0317();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0317 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0317();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0317 === 'function') industryContentEl.innerHTML = renderIndustryContent_0317();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0317 === 'function') macroContentEl.innerHTML = renderMacroContent_0317();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0317 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0317();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0317 === 'function') stockContentEl.innerHTML = renderStockContent_0317();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0317 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0317();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0317 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0317();
  } else if (date === '2026-03-16') {
    // 渲染 3 月 16 日内容
    console.log('[renderAllContent] 渲染 3 月 16 日内容');
    if (typeof renderDecisionNav_0316 === 'function') renderDecisionNav_0316();
    if (typeof renderIndustryNav_0316 === 'function') renderIndustryNav_0316();
    if (typeof renderMacroNav_0316 === 'function') renderMacroNav_0316();
    if (typeof renderBrokerNav_0316 === 'function') renderBrokerNav_0316();
    if (typeof renderStockNav_0316 === 'function') renderStockNav_0316();
    if (typeof renderJisiluNav_0316 === 'function') renderJisiluNav_0316();
    if (typeof renderFuturesNav_0316 === 'function') renderFuturesNav_0316();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0316 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0316();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0316 === 'function') industryContentEl.innerHTML = renderIndustryContent_0316();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0316 === 'function') macroContentEl.innerHTML = renderMacroContent_0316();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0316 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0316();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0316 === 'function') stockContentEl.innerHTML = renderStockContent_0316();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0316 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0316();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0316 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0316();
  } else if (date === '2026-03-13') {
    // 渲染 3 月 13 日内容
    console.log('[renderAllContent] 渲染 3 月 13 日内容');
    if (typeof renderDecisionNav_0313 === 'function') renderDecisionNav_0313();
    if (typeof renderIndustryNav_0313 === 'function') renderIndustryNav_0313();
    if (typeof renderMacroNav_0313 === 'function') renderMacroNav_0313();
    if (typeof renderBrokerNav_0313 === 'function') renderBrokerNav_0313();
    if (typeof renderStockNav_0313 === 'function') renderStockNav_0313();
    if (typeof renderJisiluNav_0313 === 'function') renderJisiluNav_0313();
    if (typeof renderFuturesNav_0313 === 'function') renderFuturesNav_0313();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0313 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0313();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0313 === 'function') industryContentEl.innerHTML = renderIndustryContent_0313();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0313 === 'function') macroContentEl.innerHTML = renderMacroContent_0313();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0313 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0313();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0313 === 'function') stockContentEl.innerHTML = renderStockContent_0313();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0313 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0313();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0313 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0313();
  } else if (date === '2026-03-12') {
    // 渲染 3 月 12 日内容
    console.log('[renderAllContent] 渲染 3 月 12 日内容');
    if (typeof renderDecisionNav_0312 === 'function') renderDecisionNav_0312();
    if (typeof renderIndustryNav_0312 === 'function') renderIndustryNav_0312();
    if (typeof renderMacroNav_0312 === 'function') renderMacroNav_0312();
    if (typeof renderBrokerNav_0312 === 'function') renderBrokerNav_0312();
    if (typeof renderStockNav_0312 === 'function') renderStockNav_0312();
    if (typeof renderJisiluNav_0312 === 'function') renderJisiluNav_0312();
    if (typeof renderFuturesNav_0312 === 'function') renderFuturesNav_0312();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0312 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0312();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0312 === 'function') industryContentEl.innerHTML = renderIndustryContent_0312();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0312 === 'function') macroContentEl.innerHTML = renderMacroContent_0312();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0312 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0312();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0312 === 'function') stockContentEl.innerHTML = renderStockContent_0312();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0312 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0312();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0312 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0312();
  } else if (date === '2026-03-11') {
    // 渲染 3 月 11 日内容
    console.log('[renderAllContent] 渲染 3 月 11 日内容');
    if (typeof renderDecisionNav_0311 === 'function') renderDecisionNav_0311();
    if (typeof renderIndustryNav_0311 === 'function') renderIndustryNav_0311();
    if (typeof renderMacroNav_0311 === 'function') renderMacroNav_0311();
    if (typeof renderBrokerNav_0311 === 'function') renderBrokerNav_0311();
    if (typeof renderStockNav_0311 === 'function') renderStockNav_0311();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0311 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0311();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0311 === 'function') industryContentEl.innerHTML = renderIndustryContent_0311();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0311 === 'function') macroContentEl.innerHTML = renderMacroContent_0311();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0311 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0311();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0311 === 'function') stockContentEl.innerHTML = renderStockContent_0311();
  } else if (date === '2026-03-10') {
    // 渲染 3 月 10 日内容
    console.log('[renderAllContent] 渲染 3 月 10 日内容');
    if (typeof renderDecisionNav_0310 === 'function') renderDecisionNav_0310();
    if (typeof renderIndustryNav_0310 === 'function') renderIndustryNav_0310();
    if (typeof renderMacroNav_0310 === 'function') renderMacroNav_0310();
    if (typeof renderBrokerNav_0310 === 'function') renderBrokerNav_0310();
    if (typeof renderStockNav_0310 === 'function') renderStockNav_0310();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0310 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0310();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0310 === 'function') industryContentEl.innerHTML = renderIndustryContent_0310();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0310 === 'function') macroContentEl.innerHTML = renderMacroContent_0310();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0310 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0310();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0310 === 'function') stockContentEl.innerHTML = renderStockContent_0310();
  } else if (date === '2026-03-09') {
    // 渲染 3 月 9 日内容
    console.log('[renderAllContent] 渲染 3 月 9 日内容');
    if (typeof renderDecisionNav_0309 === 'function') renderDecisionNav_0309();
    if (typeof renderIndustryNav_0309 === 'function') renderIndustryNav_0309();
    if (typeof renderMacroNav_0309 === 'function') renderMacroNav_0309();
    if (typeof renderBrokerNav_0309 === 'function') renderBrokerNav_0309();
    if (typeof renderStockNav_0309 === 'function') renderStockNav_0309();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0309 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0309();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0309 === 'function') industryContentEl.innerHTML = renderIndustryContent_0309();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0309 === 'function') macroContentEl.innerHTML = renderMacroContent_0309();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0309 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0309();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0309 === 'function') stockContentEl.innerHTML = renderStockContent_0309();
  } else if (date === '2026-03-08') {
    if (typeof renderDecisionNav_0308 === 'function') renderDecisionNav_0308();
    if (typeof renderIndustryNav_0308 === 'function') renderIndustryNav_0308();
    if (typeof renderMacroNav_0308 === 'function') renderMacroNav_0308();
    if (typeof renderBrokerNav_0308 === 'function') renderBrokerNav_0308();
    if (typeof renderStockNav_0308 === 'function') renderStockNav_0308();
    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0308 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0308();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0308 === 'function') industryContentEl.innerHTML = renderIndustryContent_0308();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0308 === 'function') macroContentEl.innerHTML = renderMacroContent_0308();
    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0308 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0308();
    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0308 === 'function') stockContentEl.innerHTML = renderStockContent_0308();
  } else if (date === '2026-03-07') {
    if (typeof renderDecisionNav_0307 === 'function') renderDecisionNav_0307();
    if (typeof renderIndustryNav_0307 === 'function') renderIndustryNav_0307();
    if (typeof renderMacroNav_0307 === 'function') renderMacroNav_0307();
    if (typeof renderBrokerNav_0307 === 'function') renderBrokerNav_0307();
    if (typeof renderStockNav_0307 === 'function') renderStockNav_0307();
    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0307 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0307();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0307 === 'function') industryContentEl.innerHTML = renderIndustryContent_0307();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0307 === 'function') macroContentEl.innerHTML = renderMacroContent_0307();
    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0307 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0307();
    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0307 === 'function') stockContentEl.innerHTML = renderStockContent_0307();
  } else if (date === '2026-03-06') {
    if (typeof renderDecisionNav_0306 === 'function') renderDecisionNav_0306();
    if (typeof renderIndustryNav_0306 === 'function') renderIndustryNav_0306();
    if (typeof renderMacroNav_0306 === 'function') renderMacroNav_0306();
    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0306 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0306();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0306 === 'function') industryContentEl.innerHTML = renderIndustryContent_0306();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0306 === 'function') macroContentEl.innerHTML = renderMacroContent_0306();
  } else if (date === '2026-03-05') {
    if (typeof renderDecisionNav_0305 === 'function') renderDecisionNav_0305();
    if (typeof renderIndustryNav_0305 === 'function') renderIndustryNav_0305();
    if (typeof renderMacroNav_0305 === 'function') renderMacroNav_0305();
    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0305 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0305();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0305 === 'function') industryContentEl.innerHTML = renderIndustryContent_0305();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0305 === 'function') macroContentEl.innerHTML = renderMacroContent_0305();
  } else {
    if (typeof renderDecisionNav_0304 === 'function') renderDecisionNav_0304();
    if (typeof renderIndustryNav_0304 === 'function') renderIndustryNav_0304();
    if (typeof renderMacroNav_0304 === 'function') renderMacroNav_0304();
    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0304 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0304();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0304 === 'function') industryContentEl.innerHTML = renderIndustryContent_0304();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0304 === 'function') macroContentEl.innerHTML = renderMacroContent_0304();
  }

  // 重新初始化滚动监听
  setTimeout(() => {
    if (typeof initScrollSpy === 'function') {
      initScrollSpy();
    }
  }, 100);
}

/**
 * 初始化时钟
 */
function initClock() {
  const clockEl = document.getElementById('clock-display');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  AppState.clockInterval = setInterval(updateClock, 1000);
}

/**
 * 初始化 Tab 监听
 */
function initTabListeners() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });
}

/**
 * 滚动到指定章节
 */
function scrollToSection(docType, sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // 更新导航状态
    updateActiveNav(sectionId);
  }
}

/**
 * 初始化滚动监听（Spy）
 */
function initScrollSpy() {
  // 简化版本：暂不实现
}

/**
 * 应用初始化
 */
function initApp() {
  console.log('[App] 初始化开始');

  // 初始化时钟
  initClock();

  // 初始化 Tab 监听
  initTabListeners();

  // 初始化日期下拉
  if (typeof renderDateList === 'function') {
    renderDateList();
  }
  if (typeof setupDateDropdownListener === 'function') {
    setupDateDropdownListener();
  }

  // 渲染所有内容
  renderAllContent();

  console.log('[App] 初始化完成');
}

// DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}