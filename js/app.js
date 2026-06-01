// ==========================================
// 智研金融 Terminal Pro - 应用入口
// ==========================================

/**
 * 应用状态管理
 */
const AppState = {
  activeTab: 'decision',
  activeSection: 'sec1',
  currentDate: '2026-06-02',
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


  if (date === '2026-05-24') {
    console.log('[renderAllContent] 渲染 5 月 24 日内容');
    if (typeof renderDecisionNav_0524 === 'function') renderDecisionNav_0524();
    const decisionContentEl0524 = document.getElementById('decision-content');
    if (decisionContentEl0524 && typeof renderDecisionContent_0524 === 'function') decisionContentEl0524.innerHTML = renderDecisionContent_0524();
    if (typeof renderIndustryNav_0524 === 'function') renderIndustryNav_0524();
    const industryContentEl0524 = document.getElementById('industry-content');
    if (industryContentEl0524 && typeof renderIndustryContent_0524 === 'function') industryContentEl0524.innerHTML = renderIndustryContent_0524();
    if (typeof renderMacroNav_0524 === 'function') renderMacroNav_0524();
    const macroContentEl0524 = document.getElementById('macro-content');
    if (macroContentEl0524 && typeof renderMacroContent_0524 === 'function') macroContentEl0524.innerHTML = renderMacroContent_0524();
    if (typeof renderBrokerNav_0524 === 'function') renderBrokerNav_0524();
    const brokerContentEl0524 = document.getElementById('broker-content');
    if (brokerContentEl0524 && typeof renderBrokerContent_0524 === 'function') brokerContentEl0524.innerHTML = renderBrokerContent_0524();
    if (typeof renderStockNav_0524 === 'function') renderStockNav_0524();
    const stockContentEl0524 = document.getElementById('stock-content');
    if (stockContentEl0524 && typeof renderStockContent_0524 === 'function') stockContentEl0524.innerHTML = renderStockContent_0524();
    if (typeof renderJisiluNav_0524 === 'function') renderJisiluNav_0524();
    const jisiluContentEl0524 = document.getElementById('jisilu-content');
    if (jisiluContentEl0524 && typeof renderJisiluContent_0524 === 'function') jisiluContentEl0524.innerHTML = renderJisiluContent_0524();
    if (typeof renderFuturesNav_0524 === 'function') renderFuturesNav_0524();
    const futuresContentEl0524 = document.getElementById('futures-content');
    if (futuresContentEl0524 && typeof renderFuturesContent_0524 === 'function') futuresContentEl0524.innerHTML = renderFuturesContent_0524();
  } else



  if (date === '2026-05-22') {
    console.log('[renderAllContent] 渲染 5 月 22 日内容');
    if (typeof renderDecisionNav_0522 === 'function') renderDecisionNav_0522();
    const decisionContentEl0522 = document.getElementById('decision-content');
    if (decisionContentEl0522 && typeof renderDecisionContent_0522 === 'function') decisionContentEl0522.innerHTML = renderDecisionContent_0522();
    if (typeof renderIndustryNav_0522 === 'function') renderIndustryNav_0522();
    const industryContentEl0522 = document.getElementById('industry-content');
    if (industryContentEl0522 && typeof renderIndustryContent_0522 === 'function') industryContentEl0522.innerHTML = renderIndustryContent_0522();
    if (typeof renderMacroNav_0522 === 'function') renderMacroNav_0522();
    const macroContentEl0522 = document.getElementById('macro-content');
    if (macroContentEl0522 && typeof renderMacroContent_0522 === 'function') macroContentEl0522.innerHTML = renderMacroContent_0522();
    if (typeof renderBrokerNav_0522 === 'function') renderBrokerNav_0522();
    const brokerContentEl0522 = document.getElementById('broker-content');
    if (brokerContentEl0522 && typeof renderBrokerContent_0522 === 'function') brokerContentEl0522.innerHTML = renderBrokerContent_0522();
    if (typeof renderStockNav_0522 === 'function') renderStockNav_0522();
    const stockContentEl0522 = document.getElementById('stock-content');
    if (stockContentEl0522 && typeof renderStockContent_0522 === 'function') stockContentEl0522.innerHTML = renderStockContent_0522();
    if (typeof renderJisiluNav_0522 === 'function') renderJisiluNav_0522();
    const jisiluContentEl0522 = document.getElementById('jisilu-content');
    if (jisiluContentEl0522 && typeof renderJisiluContent_0522 === 'function') jisiluContentEl0522.innerHTML = renderJisiluContent_0522();
    if (typeof renderFuturesNav_0522 === 'function') renderFuturesNav_0522();
    const futuresContentEl0522 = document.getElementById('futures-content');
    if (futuresContentEl0522 && typeof renderFuturesContent_0522 === 'function') futuresContentEl0522.innerHTML = renderFuturesContent_0522();
  } else

  if (date === '2026-05-21') {
    console.log('[renderAllContent] 渲染 5 月 21 日内容');
    if (typeof renderDecisionNav_0521 === 'function') renderDecisionNav_0521();
    const decisionContentEl0521 = document.getElementById('decision-content');
    if (decisionContentEl0521 && typeof renderDecisionContent_0521 === 'function') decisionContentEl0521.innerHTML = renderDecisionContent_0521();
    if (typeof renderIndustryNav_0521 === 'function') renderIndustryNav_0521();
    const industryContentEl0521 = document.getElementById('industry-content');
    if (industryContentEl0521 && typeof renderIndustryContent_0521 === 'function') industryContentEl0521.innerHTML = renderIndustryContent_0521();
    if (typeof renderMacroNav_0521 === 'function') renderMacroNav_0521();
    const macroContentEl0521 = document.getElementById('macro-content');
    if (macroContentEl0521 && typeof renderMacroContent_0521 === 'function') macroContentEl0521.innerHTML = renderMacroContent_0521();
    if (typeof renderBrokerNav_0521 === 'function') renderBrokerNav_0521();
    const brokerContentEl0521 = document.getElementById('broker-content');
    if (brokerContentEl0521 && typeof renderBrokerContent_0521 === 'function') brokerContentEl0521.innerHTML = renderBrokerContent_0521();
    if (typeof renderJisiluNav_0521 === 'function') renderJisiluNav_0521();
    const jisiluContentEl0521 = document.getElementById('jisilu-content');
    if (jisiluContentEl0521 && typeof renderJisiluContent_0521 === 'function') jisiluContentEl0521.innerHTML = renderJisiluContent_0521();
    if (typeof renderStockNav_0521 === 'function') renderStockNav_0521();
    const stockContentEl0521 = document.getElementById('stock-content');
    if (stockContentEl0521 && typeof renderStockContent_0521 === 'function') stockContentEl0521.innerHTML = renderStockContent_0521();
    if (typeof renderFuturesNav_0521 === 'function') renderFuturesNav_0521();
    const futuresContentEl0521 = document.getElementById('futures-content');
    if (futuresContentEl0521 && typeof renderFuturesContent_0521 === 'function') futuresContentEl0521.innerHTML = renderFuturesContent_0521();
  } else


  if (date === '2026-05-20') {
    console.log('[renderAllContent] 渲染 5 月 20 日内容');
    if (typeof renderDecisionNav_0520 === 'function') renderDecisionNav_0520();
    const decisionContentEl0520 = document.getElementById('decision-content');
    if (decisionContentEl0520 && typeof renderDecisionContent_0520 === 'function') decisionContentEl0520.innerHTML = renderDecisionContent_0520();
    if (typeof renderIndustryNav_0520 === 'function') renderIndustryNav_0520();
    const industryContentEl0520 = document.getElementById('industry-content');
    if (industryContentEl0520 && typeof renderIndustryContent_0520 === 'function') industryContentEl0520.innerHTML = renderIndustryContent_0520();
    if (typeof renderMacroNav_0520 === 'function') renderMacroNav_0520();
    const macroContentEl0520 = document.getElementById('macro-content');
    if (macroContentEl0520 && typeof renderMacroContent_0520 === 'function') macroContentEl0520.innerHTML = renderMacroContent_0520();
    if (typeof renderBrokerNav_0520 === 'function') renderBrokerNav_0520();
    const brokerContentEl0520 = document.getElementById('broker-content');
    if (brokerContentEl0520 && typeof renderBrokerContent_0520 === 'function') brokerContentEl0520.innerHTML = renderBrokerContent_0520();
    if (typeof renderJisiluNav_0520 === 'function') renderJisiluNav_0520();
    const jisiluContentEl0520 = document.getElementById('jisilu-content');
    if (jisiluContentEl0520 && typeof renderJisiluContent_0520 === 'function') jisiluContentEl0520.innerHTML = renderJisiluContent_0520();
    if (typeof renderStockNav_0520 === 'function') renderStockNav_0520();
    const stockContentEl0520 = document.getElementById('stock-content');
    if (stockContentEl0520 && typeof renderStockContent_0520 === 'function') stockContentEl0520.innerHTML = renderStockContent_0520();
    if (typeof renderFuturesNav_0520 === 'function') renderFuturesNav_0520();
    const futuresContentEl0520 = document.getElementById('futures-content');
    if (futuresContentEl0520 && typeof renderFuturesContent_0520 === 'function') futuresContentEl0520.innerHTML = renderFuturesContent_0520();
  } else


  if (date === '2026-05-19') {
    console.log('[renderAllContent] 渲染 5 月 19 日内容');
    if (typeof renderDecisionNav_0519 === 'function') renderDecisionNav_0519();
    const decisionContentEl0519 = document.getElementById('decision-content');
    if (decisionContentEl0519 && typeof renderDecisionContent_0519 === 'function') decisionContentEl0519.innerHTML = renderDecisionContent_0519();
    if (typeof renderIndustryNav_0519 === 'function') renderIndustryNav_0519();
    const industryContentEl0519 = document.getElementById('industry-content');
    if (industryContentEl0519 && typeof renderIndustryContent_0519 === 'function') industryContentEl0519.innerHTML = renderIndustryContent_0519();
    if (typeof renderMacroNav_0519 === 'function') renderMacroNav_0519();
    const macroContentEl0519 = document.getElementById('macro-content');
    if (macroContentEl0519 && typeof renderMacroContent_0519 === 'function') macroContentEl0519.innerHTML = renderMacroContent_0519();
    if (typeof renderBrokerNav_0519 === 'function') renderBrokerNav_0519();
    const brokerContentEl0519 = document.getElementById('broker-content');
    if (brokerContentEl0519 && typeof renderBrokerContent_0519 === 'function') brokerContentEl0519.innerHTML = renderBrokerContent_0519();
    if (typeof renderJisiluNav_0519 === 'function') renderJisiluNav_0519();
    const jisiluContentEl0519 = document.getElementById('jisilu-content');
    if (jisiluContentEl0519 && typeof renderJisiluContent_0519 === 'function') jisiluContentEl0519.innerHTML = renderJisiluContent_0519();
    if (typeof renderStockNav_0519 === 'function') renderStockNav_0519();
    const stockContentEl0519 = document.getElementById('stock-content');
    if (stockContentEl0519 && typeof renderStockContent_0519 === 'function') stockContentEl0519.innerHTML = renderStockContent_0519();
    if (typeof renderFuturesNav_0519 === 'function') renderFuturesNav_0519();
    const futuresContentEl0519 = document.getElementById('futures-content');
    if (futuresContentEl0519 && typeof renderFuturesContent_0519 === 'function') futuresContentEl0519.innerHTML = renderFuturesContent_0519();
  } else

  if (date === '2026-05-18') {
    console.log('[renderAllContent] 渲染 5 月 18 日内容');
    if (typeof renderDecisionNav_0518 === 'function') renderDecisionNav_0518();
    const decisionContentEl0518 = document.getElementById('decision-content');
    if (decisionContentEl0518 && typeof renderDecisionContent_0518 === 'function') decisionContentEl0518.innerHTML = renderDecisionContent_0518();
    if (typeof renderIndustryNav_0518 === 'function') renderIndustryNav_0518();
    const industryContentEl0518 = document.getElementById('industry-content');
    if (industryContentEl0518 && typeof renderIndustryContent_0518 === 'function') industryContentEl0518.innerHTML = renderIndustryContent_0518();
    if (typeof renderMacroNav_0518 === 'function') renderMacroNav_0518();
    const macroContentEl0518 = document.getElementById('macro-content');
    if (macroContentEl0518 && typeof renderMacroContent_0518 === 'function') macroContentEl0518.innerHTML = renderMacroContent_0518();
    if (typeof renderBrokerNav_0518 === 'function') renderBrokerNav_0518();
    const brokerContentEl0518 = document.getElementById('broker-content');
    if (brokerContentEl0518 && typeof renderBrokerContent_0518 === 'function') brokerContentEl0518.innerHTML = renderBrokerContent_0518();
    if (typeof renderJisiluNav_0518 === 'function') renderJisiluNav_0518();
    const jisiluContentEl0518 = document.getElementById('jisilu-content');
    if (jisiluContentEl0518 && typeof renderJisiluContent_0518 === 'function') jisiluContentEl0518.innerHTML = renderJisiluContent_0518();
    if (typeof renderStockNav_0518 === 'function') renderStockNav_0518();
    const stockContentEl0518 = document.getElementById('stock-content');
    if (stockContentEl0518 && typeof renderStockContent_0518 === 'function') stockContentEl0518.innerHTML = renderStockContent_0518();
    if (typeof renderFuturesNav_0518 === 'function') renderFuturesNav_0518();
    const futuresContentEl0518 = document.getElementById('futures-content');
    if (futuresContentEl0518 && typeof renderFuturesContent_0518 === 'function') futuresContentEl0518.innerHTML = renderFuturesContent_0518();
  } else

  if (date === '2026-05-15') {
    console.log('[renderAllContent] 渲染 5 月 15 日内容');
    if (typeof renderDecisionNav_0515 === 'function') renderDecisionNav_0515();
    const decisionContentEl0515 = document.getElementById('decision-content');
    if (decisionContentEl0515 && typeof renderDecisionContent_0515 === 'function') decisionContentEl0515.innerHTML = renderDecisionContent_0515();
    if (typeof renderIndustryNav_0515 === 'function') renderIndustryNav_0515();
    const industryContentEl0515 = document.getElementById('industry-content');
    if (industryContentEl0515 && typeof renderIndustryContent_0515 === 'function') industryContentEl0515.innerHTML = renderIndustryContent_0515();
    if (typeof renderMacroNav_0515 === 'function') renderMacroNav_0515();
    const macroContentEl0515 = document.getElementById('macro-content');
    if (macroContentEl0515 && typeof renderMacroContent_0515 === 'function') macroContentEl0515.innerHTML = renderMacroContent_0515();
    if (typeof renderBrokerNav_0515 === 'function') renderBrokerNav_0515();
    const brokerContentEl0515 = document.getElementById('broker-content');
    if (brokerContentEl0515 && typeof renderBrokerContent_0515 === 'function') brokerContentEl0515.innerHTML = renderBrokerContent_0515();
    if (typeof renderJisiluNav_0515 === 'function') renderJisiluNav_0515();
    const jisiluContentEl0515 = document.getElementById('jisilu-content');
    if (jisiluContentEl0515 && typeof renderJisiluContent_0515 === 'function') jisiluContentEl0515.innerHTML = renderJisiluContent_0515();
    if (typeof renderStockNav_0515 === 'function') renderStockNav_0515();
    const stockContentEl0515 = document.getElementById('stock-content');
    if (stockContentEl0515 && typeof renderStockContent_0515 === 'function') stockContentEl0515.innerHTML = renderStockContent_0515();
    if (typeof renderFuturesNav_0515 === 'function') renderFuturesNav_0515();
    const futuresContentEl0515 = document.getElementById('futures-content');
    if (futuresContentEl0515 && typeof renderFuturesContent_0515 === 'function') futuresContentEl0515.innerHTML = renderFuturesContent_0515();
  } else

  if (date === '2026-05-14') {
    console.log('[renderAllContent] 渲染 5 月 14 日内容');
    if (typeof renderDecisionNav_0514 === 'function') renderDecisionNav_0514();
    const decisionContentEl0514 = document.getElementById('decision-content');
    if (decisionContentEl0514 && typeof renderDecisionContent_0514 === 'function') decisionContentEl0514.innerHTML = renderDecisionContent_0514();
    if (typeof renderIndustryNav_0514 === 'function') renderIndustryNav_0514();
    const industryContentEl0514 = document.getElementById('industry-content');
    if (industryContentEl0514 && typeof renderIndustryContent_0514 === 'function') industryContentEl0514.innerHTML = renderIndustryContent_0514();
    if (typeof renderMacroNav_0514 === 'function') renderMacroNav_0514();
    const macroContentEl0514 = document.getElementById('macro-content');
    if (macroContentEl0514 && typeof renderMacroContent_0514 === 'function') macroContentEl0514.innerHTML = renderMacroContent_0514();
    if (typeof renderBrokerNav_0514 === 'function') renderBrokerNav_0514();
    const brokerContentEl0514 = document.getElementById('broker-content');
    if (brokerContentEl0514 && typeof renderBrokerContent_0514 === 'function') brokerContentEl0514.innerHTML = renderBrokerContent_0514();
    if (typeof renderJisiluNav_0514 === 'function') renderJisiluNav_0514();
    const jisiluContentEl0514 = document.getElementById('jisilu-content');
    if (jisiluContentEl0514 && typeof renderJisiluContent_0514 === 'function') jisiluContentEl0514.innerHTML = renderJisiluContent_0514();
    if (typeof renderStockNav_0514 === 'function') renderStockNav_0514();
    const stockContentEl0514 = document.getElementById('stock-content');
    if (stockContentEl0514 && typeof renderStockContent_0514 === 'function') stockContentEl0514.innerHTML = renderStockContent_0514();
    if (typeof renderFuturesNav_0514 === 'function') renderFuturesNav_0514();
    const futuresContentEl0514 = document.getElementById('futures-content');
    if (futuresContentEl0514 && typeof renderFuturesContent_0514 === 'function') futuresContentEl0514.innerHTML = renderFuturesContent_0514();
  } else


  if (date === '2026-05-13') {
    console.log('[renderAllContent] 渲染 5 月 13 日内容');
    if (typeof renderDecisionNav_0513 === 'function') renderDecisionNav_0513();
    const decisionContentEl0513 = document.getElementById('decision-content');
    if (decisionContentEl0513 && typeof renderDecisionContent_0513 === 'function') decisionContentEl0513.innerHTML = renderDecisionContent_0513();
    if (typeof renderIndustryNav_0513 === 'function') renderIndustryNav_0513();
    const industryContentEl0513 = document.getElementById('industry-content');
    if (industryContentEl0513 && typeof renderIndustryContent_0513 === 'function') industryContentEl0513.innerHTML = renderIndustryContent_0513();
    if (typeof renderMacroNav_0513 === 'function') renderMacroNav_0513();
    const macroContentEl0513 = document.getElementById('macro-content');
    if (macroContentEl0513 && typeof renderMacroContent_0513 === 'function') macroContentEl0513.innerHTML = renderMacroContent_0513();
    if (typeof renderBrokerNav_0513 === 'function') renderBrokerNav_0513();
    const brokerContentEl0513 = document.getElementById('broker-content');
    if (brokerContentEl0513 && typeof renderBrokerContent_0513 === 'function') brokerContentEl0513.innerHTML = renderBrokerContent_0513();
    if (typeof renderJisiluNav_0513 === 'function') renderJisiluNav_0513();
    const jisiluContentEl0513 = document.getElementById('jisilu-content');
    if (jisiluContentEl0513 && typeof renderJisiluContent_0513 === 'function') jisiluContentEl0513.innerHTML = renderJisiluContent_0513();
    if (typeof renderStockNav_0513 === 'function') renderStockNav_0513();
    const stockContentEl0513 = document.getElementById('stock-content');
    if (stockContentEl0513 && typeof renderStockContent_0513 === 'function') stockContentEl0513.innerHTML = renderStockContent_0513();
    if (typeof renderFuturesNav_0513 === 'function') renderFuturesNav_0513();
    const futuresContentEl0513 = document.getElementById('futures-content');
    if (futuresContentEl0513 && typeof renderFuturesContent_0513 === 'function') futuresContentEl0513.innerHTML = renderFuturesContent_0513();
  } else

  if (date === '2026-05-12') {
    console.log('[renderAllContent] 渲染 5 月 12 日内容');
    if (typeof renderDecisionNav_0512 === 'function') renderDecisionNav_0512();
    const decisionContentEl0512 = document.getElementById('decision-content');
    if (decisionContentEl0512 && typeof renderDecisionContent_0512 === 'function') decisionContentEl0512.innerHTML = renderDecisionContent_0512();
    if (typeof renderIndustryNav_0512 === 'function') renderIndustryNav_0512();
    const industryContentEl0512 = document.getElementById('industry-content');
    if (industryContentEl0512 && typeof renderIndustryContent_0512 === 'function') industryContentEl0512.innerHTML = renderIndustryContent_0512();
    if (typeof renderMacroNav_0512 === 'function') renderMacroNav_0512();
    const macroContentEl0512 = document.getElementById('macro-content');
    if (macroContentEl0512 && typeof renderMacroContent_0512 === 'function') macroContentEl0512.innerHTML = renderMacroContent_0512();
    if (typeof renderBrokerNav_0512 === 'function') renderBrokerNav_0512();
    const brokerContentEl0512 = document.getElementById('broker-content');
    if (brokerContentEl0512 && typeof renderBrokerContent_0512 === 'function') brokerContentEl0512.innerHTML = renderBrokerContent_0512();
    if (typeof renderStockNav_0512 === 'function') renderStockNav_0512();
    const stockContentEl0512 = document.getElementById('stock-content');
    if (stockContentEl0512 && typeof renderStockContent_0512 === 'function') stockContentEl0512.innerHTML = renderStockContent_0512();
    if (typeof renderJisiluNav_0512 === 'function') renderJisiluNav_0512();
    const jisiluContentEl0512 = document.getElementById('jisilu-content');
    if (jisiluContentEl0512 && typeof renderJisiluContent_0512 === 'function') jisiluContentEl0512.innerHTML = renderJisiluContent_0512();
    if (typeof renderFuturesNav_0512 === 'function') renderFuturesNav_0512();
    const futuresContentEl0512 = document.getElementById('futures-content');
    if (futuresContentEl0512 && typeof renderFuturesContent_0512 === 'function') futuresContentEl0512.innerHTML = renderFuturesContent_0512();
  } else if (date === '2026-05-11') {
    console.log('[renderAllContent] 渲染 5 月 11 日内容');
    if (typeof renderDecisionNav_0511 === 'function') renderDecisionNav_0511();
    const decisionContentEl0511 = document.getElementById('decision-content');
    if (decisionContentEl0511 && typeof renderDecisionContent_0511 === 'function') decisionContentEl0511.innerHTML = renderDecisionContent_0511();

    if (typeof renderMacroNav_0511 === 'function') renderMacroNav_0511();
    const macroContentEl0511 = document.getElementById('macro-content');
    if (macroContentEl0511 && typeof renderMacroContent_0511 === 'function') macroContentEl0511.innerHTML = renderMacroContent_0511();

    if (typeof renderBrokerNav_0511 === 'function') renderBrokerNav_0511();
    const brokerContentEl0511 = document.getElementById('broker-content');
    if (brokerContentEl0511 && typeof renderBrokerContent_0511 === 'function') brokerContentEl0511.innerHTML = renderBrokerContent_0511();

    if (typeof renderJisiluNav_0511 === 'function') renderJisiluNav_0511();
    const jisiluContentEl0511 = document.getElementById('jisilu-content');
    if (jisiluContentEl0511 && typeof renderJisiluContent_0511 === 'function') jisiluContentEl0511.innerHTML = renderJisiluContent_0511();

    if (typeof renderIndustryNav_0511 === 'function') renderIndustryNav_0511();
    const industryContentEl0511 = document.getElementById('industry-content');
    if (industryContentEl0511 && typeof renderIndustryContent_0511 === 'function') industryContentEl0511.innerHTML = renderIndustryContent_0511();

    if (typeof renderStockNav_0511 === 'function') renderStockNav_0511();
    const stockContentEl0511 = document.getElementById('stock-content');
    if (stockContentEl0511 && typeof renderStockContent_0511 === 'function') stockContentEl0511.innerHTML = renderStockContent_0511();

    if (typeof renderFuturesNav_0511 === 'function') renderFuturesNav_0511();
    const futuresContentEl0511 = document.getElementById('futures-content');
    if (futuresContentEl0511 && typeof renderFuturesContent_0511 === 'function') futuresContentEl0511.innerHTML = renderFuturesContent_0511();
  } else

  if (date === '2026-05-09') {
    console.log('[renderAllContent] 渲染 5 月 9 日内容');
    if (typeof renderDecisionNav_0509 === 'function') renderDecisionNav_0509();
    const decisionContentEl0509 = document.getElementById('decision-content');
    if (decisionContentEl0509 && typeof renderDecisionContent_0509 === 'function') decisionContentEl0509.innerHTML = renderDecisionContent_0509();

    if (typeof renderIndustryNav_0509 === 'function') renderIndustryNav_0509();
    const industryContentEl0509 = document.getElementById('industry-content');
    if (industryContentEl0509 && typeof renderIndustryContent_0509 === 'function') industryContentEl0509.innerHTML = renderIndustryContent_0509();

    if (typeof renderMacroNav_0509 === 'function') renderMacroNav_0509();
    const macroContentEl0509 = document.getElementById('macro-content');
    if (macroContentEl0509 && typeof renderMacroContent_0509 === 'function') macroContentEl0509.innerHTML = renderMacroContent_0509();

    if (typeof renderBrokerNav_0509 === 'function') renderBrokerNav_0509();
    const brokerContentEl0509b = document.getElementById('broker-content');
    if (brokerContentEl0509b && typeof renderBrokerContent_0509 === 'function') brokerContentEl0509b.innerHTML = renderBrokerContent_0509();

    if (typeof renderStockNav_0509 === 'function') renderStockNav_0509();
    const stockContentEl0509 = document.getElementById('stock-content');
    if (stockContentEl0509 && typeof renderStockContent_0509 === 'function') stockContentEl0509.innerHTML = renderStockContent_0509();

    if (typeof renderJisiluNav_0509 === 'function') renderJisiluNav_0509();
    const jisiluContentEl0509 = document.getElementById('jisilu-content');
    if (jisiluContentEl0509 && typeof renderJisiluContent_0509 === 'function') jisiluContentEl0509.innerHTML = renderJisiluContent_0509();

    if (typeof renderFuturesNav_0509 === 'function') renderFuturesNav_0509();
    const futuresContentEl0509 = document.getElementById('futures-content');
    if (futuresContentEl0509 && typeof renderFuturesContent_0509 === 'function') futuresContentEl0509.innerHTML = renderFuturesContent_0509();
  } else

  if (date === '2026-05-08') {
    console.log('[renderAllContent] 渲染 5 月 8 日内容');
    if (typeof renderDecisionNav_0508 === 'function') renderDecisionNav_0508();
    const decisionContentEl0508 = document.getElementById('decision-content');
    if (decisionContentEl0508 && typeof renderDecisionContent_0508 === 'function') decisionContentEl0508.innerHTML = renderDecisionContent_0508();

    if (typeof renderIndustryNav_0508 === 'function') renderIndustryNav_0508();
    const industryContentEl0508 = document.getElementById('industry-content');
    if (industryContentEl0508 && typeof renderIndustryContent_0508 === 'function') industryContentEl0508.innerHTML = renderIndustryContent_0508();

    if (typeof renderMacroNav_0508 === 'function') renderMacroNav_0508();
    const macroContentEl0508 = document.getElementById('macro-content');
    if (macroContentEl0508 && typeof renderMacroContent_0508 === 'function') macroContentEl0508.innerHTML = renderMacroContent_0508();

    if (typeof renderBrokerNav_0508 === 'function') renderBrokerNav_0508();
    const brokerContentEl0508 = document.getElementById('broker-content');
    if (brokerContentEl0508 && typeof renderBrokerContent_0508 === 'function') brokerContentEl0508.innerHTML = renderBrokerContent_0508();

    if (typeof renderStockNav_0508 === 'function') renderStockNav_0508();
    const stockContentEl0508 = document.getElementById('stock-content');
    if (stockContentEl0508 && typeof renderStockContent_0508 === 'function') stockContentEl0508.innerHTML = renderStockContent_0508();

    if (typeof renderJisiluNav_0508 === 'function') renderJisiluNav_0508();
    const jisiluContentEl0508 = document.getElementById('jisilu-content');
    if (jisiluContentEl0508 && typeof renderJisiluContent_0508 === 'function') jisiluContentEl0508.innerHTML = renderJisiluContent_0508();

    if (typeof renderFuturesNav_0508 === 'function') renderFuturesNav_0508();
    const futuresContentEl0508 = document.getElementById('futures-content');
    if (futuresContentEl0508 && typeof renderFuturesContent_0508 === 'function') futuresContentEl0508.innerHTML = renderFuturesContent_0508();
  } else
  if (date === '2026-05-07') {
    console.log('[renderAllContent] 渲染 5 月 7 日内容');
    if (typeof renderDecisionNav_0507 === 'function') renderDecisionNav_0507();
    const decisionContentEl0507 = document.getElementById('decision-content');
    if (decisionContentEl0507 && typeof renderDecisionContent_0507 === 'function') decisionContentEl0507.innerHTML = renderDecisionContent_0507();

    if (typeof renderMacroNav_0507 === 'function') renderMacroNav_0507();
    const macroContentEl0507 = document.getElementById('macro-content');
    if (macroContentEl0507 && typeof renderMacroContent_0507 === 'function') macroContentEl0507.innerHTML = renderMacroContent_0507();

    if (typeof renderBrokerNav_0507 === 'function') renderBrokerNav_0507();
    const brokerContentEl0507 = document.getElementById('broker-content');
    if (brokerContentEl0507 && typeof renderBrokerContent_0507 === 'function') brokerContentEl0507.innerHTML = renderBrokerContent_0507();

    if (typeof renderStockNav_0507 === 'function') renderStockNav_0507();
    const stockContentEl0507 = document.getElementById('stock-content');
    if (stockContentEl0507 && typeof renderStockContent_0507 === 'function') stockContentEl0507.innerHTML = renderStockContent_0507();

    if (typeof renderJisiluNav_0507 === 'function') renderJisiluNav_0507();
    const jisiluContentEl0507 = document.getElementById('jisilu-content');
    if (jisiluContentEl0507 && typeof renderJisiluContent_0507 === 'function') jisiluContentEl0507.innerHTML = renderJisiluContent_0507();

    if (typeof renderIndustryNav_0507 === 'function') renderIndustryNav_0507();
    const industryContentEl0507 = document.getElementById('industry-content');
    if (industryContentEl0507 && typeof renderIndustryContent_0507 === 'function') industryContentEl0507.innerHTML = renderIndustryContent_0507();

    if (typeof renderFuturesNav_0507 === 'function') renderFuturesNav_0507();
    const futuresContentEl0507 = document.getElementById('futures-content');
    if (futuresContentEl0507 && typeof renderFuturesContent_0507 === 'function') futuresContentEl0507.innerHTML = renderFuturesContent_0507();
  } else
  if (date === '2026-05-06') {
    console.log('[renderAllContent] 渲染 5 月 6 日内容');
    if (typeof renderDecisionNav_0506 === 'function') renderDecisionNav_0506();
    const decisionContentEl0506 = document.getElementById('decision-content');
    if (decisionContentEl0506 && typeof renderDecisionContent_0506 === 'function') decisionContentEl0506.innerHTML = renderDecisionContent_0506();

    if (typeof renderMacroNav_0506 === 'function') renderMacroNav_0506();
    const macroContentEl0506 = document.getElementById('macro-content');
    if (macroContentEl0506 && typeof renderMacroContent_0506 === 'function') macroContentEl0506.innerHTML = renderMacroContent_0506();

    if (typeof renderJisiluNav_0506 === 'function') renderJisiluNav_0506();
    const jisiluContentEl0506 = document.getElementById('jisilu-content');
    if (jisiluContentEl0506 && typeof renderJisiluContent_0506 === 'function') jisiluContentEl0506.innerHTML = renderJisiluContent_0506();

    if (typeof renderIndustryNav_0506 === 'function') renderIndustryNav_0506();
    const industryContentEl0506 = document.getElementById('industry-content');
    if (industryContentEl0506 && typeof renderIndustryContent_0506 === 'function') industryContentEl0506.innerHTML = renderIndustryContent_0506();

    if (typeof renderBrokerNav_0506 === 'function') renderBrokerNav_0506();
    const brokerContentEl0506 = document.getElementById('broker-content');
    if (brokerContentEl0506 && typeof renderBrokerContent_0506 === 'function') brokerContentEl0506.innerHTML = renderBrokerContent_0506();

    if (typeof renderStockNav_0506 === 'function') renderStockNav_0506();
    const stockContentEl0506 = document.getElementById('stock-content');
    if (stockContentEl0506 && typeof renderStockContent_0506 === 'function') stockContentEl0506.innerHTML = renderStockContent_0506();

    if (typeof renderFuturesNav_0506 === 'function') renderFuturesNav_0506();
    const futuresContentEl0506 = document.getElementById('futures-content');
    if (futuresContentEl0506 && typeof renderFuturesContent_0506 === 'function') futuresContentEl0506.innerHTML = renderFuturesContent_0506();
  } else if (date === '2026-04-30') {
    console.log('[renderAllContent] 渲染 4 月 30 日内容');
    if (typeof renderDecisionNav_0430 === 'function') renderDecisionNav_0430();
    const decisionContentEl0430 = document.getElementById('decision-content');
    if (decisionContentEl0430 && typeof renderDecisionContent_0430 === 'function') decisionContentEl0430.innerHTML = renderDecisionContent_0430();

    if (typeof renderMacroNav_0430 === 'function') renderMacroNav_0430();
    const macroContentEl0430 = document.getElementById('macro-content');
    if (macroContentEl0430 && typeof renderMacroContent_0430 === 'function') macroContentEl0430.innerHTML = renderMacroContent_0430();

    if (typeof renderStockNav_0430 === 'function') renderStockNav_0430();
    const stockContentEl0430 = document.getElementById('stock-content');
    if (stockContentEl0430 && typeof renderStockContent_0430 === 'function') stockContentEl0430.innerHTML = renderStockContent_0430();

    if (typeof renderJisiluNav_0430 === 'function') renderJisiluNav_0430();
    const jisiluContentEl0430 = document.getElementById('jisilu-content');
    if (jisiluContentEl0430 && typeof renderJisiluContent_0430 === 'function') jisiluContentEl0430.innerHTML = renderJisiluContent_0430();

    if (typeof renderIndustryNav_0430 === 'function') renderIndustryNav_0430();
    const industryContentEl0430 = document.getElementById('industry-content');
    if (industryContentEl0430 && typeof renderIndustryContent_0430 === 'function') industryContentEl0430.innerHTML = renderIndustryContent_0430();

    if (typeof renderBrokerNav_0430 === 'function') renderBrokerNav_0430();
    const brokerContentEl0430 = document.getElementById('broker-content');
    if (brokerContentEl0430 && typeof renderBrokerContent_0430 === 'function') brokerContentEl0430.innerHTML = renderBrokerContent_0430();

    if (typeof renderFuturesNav_0430 === 'function') renderFuturesNav_0430();
    const futuresContentEl0430 = document.getElementById('futures-content');
    if (futuresContentEl0430 && typeof renderFuturesContent_0430 === 'function') futuresContentEl0430.innerHTML = renderFuturesContent_0430();
  } else if (date === '2026-04-28') {
    console.log('[renderAllContent] 渲染 4 月 28 日内容');
    if (typeof renderDecisionNav_0428 === 'function') renderDecisionNav_0428();
    const decisionContentEl0428 = document.getElementById('decision-content');
    if (decisionContentEl0428 && typeof renderDecisionContent_0428 === 'function') decisionContentEl0428.innerHTML = renderDecisionContent_0428();

    if (typeof renderIndustryNav_0428 === 'function') renderIndustryNav_0428();
    const industryContentEl0428 = document.getElementById('industry-content');
    if (industryContentEl0428 && typeof renderIndustryContent_0428 === 'function') industryContentEl0428.innerHTML = renderIndustryContent_0428();

    if (typeof renderMacroNav_0428 === 'function') renderMacroNav_0428();
    const macroContentEl0428 = document.getElementById('macro-content');
    if (macroContentEl0428 && typeof renderMacroContent_0428 === 'function') macroContentEl0428.innerHTML = renderMacroContent_0428();

    if (typeof renderBrokerNav_0428 === 'function') renderBrokerNav_0428();
    const brokerContentEl0428 = document.getElementById('broker-content');
    if (brokerContentEl0428 && typeof renderBrokerContent_0428 === 'function') brokerContentEl0428.innerHTML = renderBrokerContent_0428();

    if (typeof renderStockNav_0428 === 'function') renderStockNav_0428();
    const stockContentEl0428 = document.getElementById('stock-content');
    if (stockContentEl0428 && typeof renderStockContent_0428 === 'function') stockContentEl0428.innerHTML = renderStockContent_0428();

    if (typeof renderJisiluNav_0428 === 'function') renderJisiluNav_0428();
    const jisiluContentEl0428 = document.getElementById('jisilu-content');
    if (jisiluContentEl0428 && typeof renderJisiluContent_0428 === 'function') jisiluContentEl0428.innerHTML = renderJisiluContent_0428();
  } else if (date === '2026-04-24') {
    console.log('[renderAllContent] 渲染 4 月 24 日内容');
    if (typeof renderDecisionNav_0424 === 'function') renderDecisionNav_0424();
    const decisionContentEl0424 = document.getElementById('decision-content');
    if (decisionContentEl0424 && typeof renderDecisionContent_0424 === 'function') decisionContentEl0424.innerHTML = renderDecisionContent_0424();

    if (typeof renderIndustryNav_0424 === 'function') renderIndustryNav_0424();
    const industryContentEl0424 = document.getElementById('industry-content');
    if (industryContentEl0424 && typeof renderIndustryContent_0424 === 'function') industryContentEl0424.innerHTML = renderIndustryContent_0424();

    if (typeof renderMacroNav_0424 === 'function') renderMacroNav_0424();
    const macroContentEl0424 = document.getElementById('macro-content');
    if (macroContentEl0424 && typeof renderMacroContent_0424 === 'function') macroContentEl0424.innerHTML = renderMacroContent_0424();

    if (typeof renderBrokerNav_0424 === 'function') renderBrokerNav_0424();
    const brokerContentEl0424 = document.getElementById('broker-content');
    if (brokerContentEl0424 && typeof renderBrokerContent_0424 === 'function') brokerContentEl0424.innerHTML = renderBrokerContent_0424();

    if (typeof renderStockNav_0424 === 'function') renderStockNav_0424();
    const stockContentEl0424 = document.getElementById('stock-content');
    if (stockContentEl0424 && typeof renderStockContent_0424 === 'function') stockContentEl0424.innerHTML = renderStockContent_0424();

    if (typeof renderJisiluNav_0424 === 'function') renderJisiluNav_0424();
    const jisiluContentEl0424 = document.getElementById('jisilu-content');
    if (jisiluContentEl0424 && typeof renderJisiluContent_0424 === 'function') jisiluContentEl0424.innerHTML = renderJisiluContent_0424();

    if (typeof renderFuturesNav_0424 === 'function') renderFuturesNav_0424();
    const futuresContentEl0424 = document.getElementById('futures-content');
    if (futuresContentEl0424 && typeof renderFuturesContent_0424 === 'function') futuresContentEl0424.innerHTML = renderFuturesContent_0424();
  } else

  if (date === '2026-04-23') {
    console.log('[renderAllContent] 渲染 4 月 23 日内容');
    if (typeof renderDecisionNav_0423 === 'function') renderDecisionNav_0423();
    const decisionContentEl0423 = document.getElementById('decision-content');
    if (decisionContentEl0423 && typeof renderDecisionContent_0423 === 'function') decisionContentEl0423.innerHTML = renderDecisionContent_0423();

    if (typeof renderMacroNav_0423 === 'function') renderMacroNav_0423();
    const macroContentEl0423 = document.getElementById('macro-content');
    if (macroContentEl0423 && typeof renderMacroContent_0423 === 'function') macroContentEl0423.innerHTML = renderMacroContent_0423();

    if (typeof renderBrokerNav_0423 === 'function') renderBrokerNav_0423();
    const brokerContentEl0423 = document.getElementById('broker-content');
    if (brokerContentEl0423 && typeof renderBrokerContent_0423 === 'function') brokerContentEl0423.innerHTML = renderBrokerContent_0423();

    if (typeof renderStockNav_0423 === 'function') renderStockNav_0423();
    const stockContentEl0423 = document.getElementById('stock-content');
    if (stockContentEl0423 && typeof renderStockContent_0423 === 'function') stockContentEl0423.innerHTML = renderStockContent_0423();

    if (typeof renderJisiluNav_0423 === 'function') renderJisiluNav_0423();
    const jisiluContentEl0423 = document.getElementById('jisilu-content');
    if (jisiluContentEl0423 && typeof renderJisiluContent_0423 === 'function') jisiluContentEl0423.innerHTML = renderJisiluContent_0423();

    if (typeof renderIndustryNav_0423 === 'function') renderIndustryNav_0423();
    const industryContentEl0423 = document.getElementById('industry-content');
    if (industryContentEl0423 && typeof renderIndustryContent_0423 === 'function') industryContentEl0423.innerHTML = renderIndustryContent_0423();

    if (typeof renderFuturesNav_0423 === 'function') renderFuturesNav_0423();
    const futuresContentEl0423 = document.getElementById('futures-content');
    if (futuresContentEl0423 && typeof renderFuturesContent_0423 === 'function') futuresContentEl0423.innerHTML = renderFuturesContent_0423();
  } else
  if (date === '2026-04-22') {
    console.log('[renderAllContent] 渲染 4 月 22 日内容');
    if (typeof renderDecisionNav_0422 === 'function') renderDecisionNav_0422();
    const decisionContentEl0422 = document.getElementById('decision-content');
    if (decisionContentEl0422 && typeof renderDecisionContent_0422 === 'function') decisionContentEl0422.innerHTML = renderDecisionContent_0422();

    if (typeof renderMacroNav_0422 === 'function') renderMacroNav_0422();
    const macroContentEl0422 = document.getElementById('macro-content');
    if (macroContentEl0422 && typeof renderMacroContent_0422 === 'function') macroContentEl0422.innerHTML = renderMacroContent_0422();

    if (typeof renderStockNav_0422 === 'function') renderStockNav_0422();
    const stockContentEl0422 = document.getElementById('stock-content');
    if (stockContentEl0422 && typeof renderStockContent_0422 === 'function') stockContentEl0422.innerHTML = renderStockContent_0422();

    if (typeof renderJisiluNav_0422 === 'function') renderJisiluNav_0422();
    const jisiluContentEl0422 = document.getElementById('jisilu-content');
    if (jisiluContentEl0422 && typeof renderJisiluContent_0422 === 'function') jisiluContentEl0422.innerHTML = renderJisiluContent_0422();
  } else
  if (date === '2026-04-21') {
    console.log('[renderAllContent] 渲染 4 月 21 日内容');
    if (typeof renderDecisionNav_0421 === 'function') renderDecisionNav_0421();
    const decisionContentEl0421 = document.getElementById('decision-content');
    if (decisionContentEl0421 && typeof renderDecisionContent_0421 === 'function') decisionContentEl0421.innerHTML = renderDecisionContent_0421();

    if (typeof renderMacroNav_0421 === 'function') renderMacroNav_0421();
    const macroContentEl0421 = document.getElementById('macro-content');
    if (macroContentEl0421 && typeof renderMacroContent_0421 === 'function') macroContentEl0421.innerHTML = renderMacroContent_0421();

    if (typeof renderBrokerNav_0421 === 'function') renderBrokerNav_0421();
    const brokerContentEl0421 = document.getElementById('broker-content');
    if (brokerContentEl0421 && typeof renderBrokerContent_0421 === 'function') brokerContentEl0421.innerHTML = renderBrokerContent_0421();

    if (typeof renderStockNav_0421 === 'function') renderStockNav_0421();
    const stockContentEl0421 = document.getElementById('stock-content');
    if (stockContentEl0421 && typeof renderStockContent_0421 === 'function') stockContentEl0421.innerHTML = renderStockContent_0421();

    if (typeof renderJisiluNav_0421 === 'function') renderJisiluNav_0421();

    if (typeof renderIndustryNav_0421 === 'function') renderIndustryNav_0421();
    const industryContentEl0421 = document.getElementById('industry-content');
    if (industryContentEl0421 && typeof renderIndustryContent_0421 === 'function') industryContentEl0421.innerHTML = renderIndustryContent_0421();
    const jisiluContentEl0421 = document.getElementById('jisilu-content');
    if (jisiluContentEl0421 && typeof renderJisiluContent_0421 === 'function') jisiluContentEl0421.innerHTML = renderJisiluContent_0421();

    if (typeof renderFuturesNav_0421 === 'function') renderFuturesNav_0421();
    const futuresContentEl0421 = document.getElementById('futures-content');
    if (futuresContentEl0421 && typeof renderFuturesContent_0421 === 'function') futuresContentEl0421.innerHTML = renderFuturesContent_0421();
  } else
  if (date === '2026-04-20') {
    console.log('[renderAllContent] 渲染 4 月 20 日内容');
    if (typeof renderDecisionNav_0420 === 'function') renderDecisionNav_0420();
    const decisionContentEl0420 = document.getElementById('decision-content');
    if (decisionContentEl0420 && typeof renderDecisionContent_0420 === 'function') decisionContentEl0420.innerHTML = renderDecisionContent_0420();

    if (typeof renderIndustryNav_0420 === 'function') renderIndustryNav_0420();
    const industryContentEl0420 = document.getElementById('industry-content');
    if (industryContentEl0420 && typeof renderIndustryContent_0420 === 'function') industryContentEl0420.innerHTML = renderIndustryContent_0420();

    if (typeof renderMacroNav_0420 === 'function') renderMacroNav_0420();
    const macroContentEl0420 = document.getElementById('macro-content');
    if (macroContentEl0420 && typeof renderMacroContent_0420 === 'function') macroContentEl0420.innerHTML = renderMacroContent_0420();

    if (typeof renderBrokerNav_0420 === 'function') renderBrokerNav_0420();
    const brokerContentEl0420 = document.getElementById('broker-content');
    if (brokerContentEl0420 && typeof renderBrokerContent_0420 === 'function') brokerContentEl0420.innerHTML = renderBrokerContent_0420();

    if (typeof renderStockNav_0420 === 'function') renderStockNav_0420();
    const stockContentEl0420 = document.getElementById('stock-content');
    if (stockContentEl0420 && typeof renderStockContent_0420 === 'function') stockContentEl0420.innerHTML = renderStockContent_0420();

    if (typeof renderJisiluNav_0420 === 'function') renderJisiluNav_0420();
    const jisiluContentEl0420 = document.getElementById('jisilu-content');
    if (jisiluContentEl0420 && typeof renderJisiluContent_0420 === 'function') jisiluContentEl0420.innerHTML = renderJisiluContent_0420();

    if (typeof renderFuturesNav_0420 === 'function') renderFuturesNav_0420();
    const futuresContentEl0420 = document.getElementById('futures-content');
    if (futuresContentEl0420 && typeof renderFuturesContent_0420 === 'function') futuresContentEl0420.innerHTML = renderFuturesContent_0420();
  } else
  if (date === '2026-04-19') {
    console.log('[renderAllContent] 渲染 4 月 19 日内容');
    if (typeof renderDecisionNav_0419 === 'function') renderDecisionNav_0419();
    const decisionContentEl0419 = document.getElementById('decision-content');
    if (decisionContentEl0419 && typeof renderDecisionContent_0419 === 'function') decisionContentEl0419.innerHTML = renderDecisionContent_0419();

    if (typeof renderMacroNav_0419 === 'function') renderMacroNav_0419();
    const macroContentEl0419 = document.getElementById('macro-content');
    if (macroContentEl0419 && typeof renderMacroContent_0419 === 'function') macroContentEl0419.innerHTML = renderMacroContent_0419();

    if (typeof renderBrokerNav_0419 === 'function') renderBrokerNav_0419();
    const brokerContentEl0419 = document.getElementById('broker-content');
    if (brokerContentEl0419 && typeof renderBrokerContent_0419 === 'function') brokerContentEl0419.innerHTML = renderBrokerContent_0419();

    if (typeof renderStockNav_0419 === 'function') renderStockNav_0419();
    const stockContentEl0419 = document.getElementById('stock-content');
    if (stockContentEl0419 && typeof renderStockContent_0419 === 'function') stockContentEl0419.innerHTML = renderStockContent_0419();

    if (typeof renderJisiluNav_0419 === 'function') renderJisiluNav_0419();
    const jisiluContentEl0419 = document.getElementById('jisilu-content');
    if (jisiluContentEl0419 && typeof renderJisiluContent_0419 === 'function') jisiluContentEl0419.innerHTML = renderJisiluContent_0419();

    if (typeof renderIndustryNav_0419 === 'function') renderIndustryNav_0419();
    const industryContentEl0419 = document.getElementById('industry-content');
    if (industryContentEl0419 && typeof renderIndustryContent_0419 === 'function') industryContentEl0419.innerHTML = renderIndustryContent_0419();

    if (typeof renderFuturesNav_0419 === 'function') renderFuturesNav_0419();
    const futuresContentEl0419 = document.getElementById('futures-content');
    if (futuresContentEl0419 && typeof renderFuturesContent_0419 === 'function') futuresContentEl0419.innerHTML = renderFuturesContent_0419();
  } else
  if (date === '2026-04-17') {
    console.log('[renderAllContent] 渲染 4 月 17 日内容');
    if (typeof renderDecisionNav_0417 === 'function') renderDecisionNav_0417();
    const decisionContentEl0417 = document.getElementById('decision-content');
    if (decisionContentEl0417 && typeof renderDecisionContent_0417 === 'function') decisionContentEl0417.innerHTML = renderDecisionContent_0417();

    if (typeof renderMacroNav_0417 === 'function') renderMacroNav_0417();
    const macroContentEl0417 = document.getElementById('macro-content');
    if (macroContentEl0417 && typeof renderMacroContent_0417 === 'function') macroContentEl0417.innerHTML = renderMacroContent_0417();

    if (typeof renderIndustryNav_0417 === 'function') renderIndustryNav_0417();
    const industryContentEl0417 = document.getElementById('industry-content');
    if (industryContentEl0417 && typeof renderIndustryContent_0417 === 'function') industryContentEl0417.innerHTML = renderIndustryContent_0417();

    if (typeof renderBrokerNav_0417 === 'function') renderBrokerNav_0417();
    const brokerContentEl0417 = document.getElementById('broker-content');
    if (brokerContentEl0417 && typeof renderBrokerContent_0417 === 'function') brokerContentEl0417.innerHTML = renderBrokerContent_0417();

    if (typeof renderStockNav_0417 === 'function') renderStockNav_0417();
    const stockContentEl0417 = document.getElementById('stock-content');
    if (stockContentEl0417 && typeof renderStockContent_0417 === 'function') stockContentEl0417.innerHTML = renderStockContent_0417();

    if (typeof renderJisiluNav_0417 === 'function') renderJisiluNav_0417();
    const jisiluContentEl0417 = document.getElementById('jisilu-content');
    if (jisiluContentEl0417 && typeof renderJisiluContent_0417 === 'function') jisiluContentEl0417.innerHTML = renderJisiluContent_0417();

    if (typeof renderFuturesNav_0417 === 'function') renderFuturesNav_0417();
    const futuresContentEl0417 = document.getElementById('futures-content');
    if (futuresContentEl0417 && typeof renderFuturesContent_0417 === 'function') futuresContentEl0417.innerHTML = renderFuturesContent_0417();
  } else
  if (date === '2026-04-16') {
    // 渲染 4 月 16 日内容
    console.log('[renderAllContent] 渲染 4 月 16 日内容');
    if (typeof renderDecisionNav_0416 === 'function') renderDecisionNav_0416();

    const decisionContentEl0416 = document.getElementById('decision-content');
    if (decisionContentEl0416 && typeof renderDecisionContent_0416 === 'function') decisionContentEl0416.innerHTML = renderDecisionContent_0416();

    if (typeof renderIndustryNav_0416 === 'function') renderIndustryNav_0416();
    const industryContentEl0416 = document.getElementById('industry-content');
    if (industryContentEl0416 && typeof renderIndustryContent_0416 === 'function') industryContentEl0416.innerHTML = renderIndustryContent_0416();

    if (typeof renderMacroNav_0416 === 'function') renderMacroNav_0416();
    if (typeof renderBrokerNav_0416 === 'function') renderBrokerNav_0416();
    const brokerContentEl0416 = document.getElementById('broker-content');
    if (brokerContentEl0416 && typeof renderBrokerContent_0416 === 'function') brokerContentEl0416.innerHTML = renderBrokerContent_0416();

    const macroContentEl0416 = document.getElementById('macro-content');
    if (macroContentEl0416 && typeof renderMacroContent_0416 === 'function') macroContentEl0416.innerHTML = renderMacroContent_0416();

    if (typeof renderStockNav_0416 === 'function') renderStockNav_0416();
    const stockContentEl0416 = document.getElementById('stock-content');
    if (stockContentEl0416 && typeof renderStockContent_0416 === 'function') stockContentEl0416.innerHTML = renderStockContent_0416();

    if (typeof renderJisiluNav_0416 === 'function') renderJisiluNav_0416();
    const jisiluContentEl0416 = document.getElementById('jisilu-content');
    if (jisiluContentEl0416 && typeof renderJisiluContent_0416 === 'function') jisiluContentEl0416.innerHTML = renderJisiluContent_0416();

    if (typeof renderFuturesNav_0416 === 'function') renderFuturesNav_0416();
    const futuresContentEl0416 = document.getElementById('futures-content');
    if (futuresContentEl0416 && typeof renderFuturesContent_0416 === 'function') futuresContentEl0416.innerHTML = renderFuturesContent_0416();
  } else

  if (date === '2026-04-15') {
    // 渲染 4 月 15 日内容
    console.log('[renderAllContent] 渲染 4 月 15 日内容');
    if (typeof renderDecisionNav_0415 === 'function') renderDecisionNav_0415();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0415 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0415();

    if (typeof renderIndustryNav_0415 === 'function') renderIndustryNav_0415();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0415 === 'function') industryContentEl.innerHTML = renderIndustryContent_0415();

    if (typeof renderMacroNav_0415 === 'function') renderMacroNav_0415();
    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0415 === 'function') macroContentEl.innerHTML = renderMacroContent_0415();

    if (typeof renderBrokerNav_0415 === 'function') renderBrokerNav_0415();
    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0415 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0415();

    if (typeof renderStockNav_0415 === 'function') renderStockNav_0415();
    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0415 === 'function') stockContentEl.innerHTML = renderStockContent_0415();

    if (typeof renderJisiluNav_0415 === 'function') renderJisiluNav_0415();
    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0415 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0415();
  } else

  if (date === '2026-04-13') {
    // 渲染 4 月 13 日内容
    console.log('[renderAllContent] 渲染 4 月 13 日内容');
    if (typeof renderDecisionNav_0413 === 'function') renderDecisionNav_0413();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0413 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0413();

    if (typeof renderIndustryNav_0413 === 'function') renderIndustryNav_0413();
    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0413 === 'function') industryContentEl.innerHTML = renderIndustryContent_0413();

    if (typeof renderMacroNav_0413 === 'function') renderMacroNav_0413();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0413 === 'function') macroContentEl.innerHTML = renderMacroContent_0413();

    if (typeof renderBrokerNav_0413 === 'function') renderBrokerNav_0413();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0413 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0413();

    if (typeof renderStockNav_0413 === 'function') renderStockNav_0413();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0413 === 'function') stockContentEl.innerHTML = renderStockContent_0413();

    if (typeof renderJisiluNav_0413 === 'function') renderJisiluNav_0413();
    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0413 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0413();

    if (typeof renderFuturesNav_0413 === 'function') renderFuturesNav_0413();
    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0413 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0413();
  } else

  if (date === '2026-04-10') {
    // 渲染 4 月 10 日内容
    console.log('[renderAllContent] 渲染 4 月 10 日内容');
    if (typeof renderDecisionNav_0410 === 'function') renderDecisionNav_0410();
    if (typeof renderIndustryNav_0410 === 'function') renderIndustryNav_0410();
    if (typeof renderMacroNav_0410 === 'function') renderMacroNav_0410();
    if (typeof renderBrokerNav_0410 === 'function') renderBrokerNav_0410();
    if (typeof renderStockNav_0410 === 'function') renderStockNav_0410();
    if (typeof renderJisiluNav_0410 === 'function') renderJisiluNav_0410();
    if (typeof renderFuturesNav_0410 === 'function') renderFuturesNav_0410();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0410 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0410();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0410 === 'function') industryContentEl.innerHTML = renderIndustryContent_0410();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0410 === 'function') macroContentEl.innerHTML = renderMacroContent_0410();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0410 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0410();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0410 === 'function') stockContentEl.innerHTML = renderStockContent_0410();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0410 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0410();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0410 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0410();
  } else

  if (date === '2026-04-09') {
    // 渲染 4 月 9 日内容
    console.log('[renderAllContent] 渲染 4 月 9 日内容');
    if (typeof renderDecisionNav_0409 === 'function') renderDecisionNav_0409();
    if (typeof renderIndustryNav_0409 === 'function') renderIndustryNav_0409();
    if (typeof renderMacroNav_0409 === 'function') renderMacroNav_0409();
    if (typeof renderBrokerNav_0409 === 'function') renderBrokerNav_0409();
    if (typeof renderStockNav_0409 === 'function') renderStockNav_0409();
    if (typeof renderJisiluNav_0409 === 'function') renderJisiluNav_0409();
    if (typeof renderFuturesNav_0409 === 'function') renderFuturesNav_0409();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0409 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0409();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0409 === 'function') industryContentEl.innerHTML = renderIndustryContent_0409();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0409 === 'function') macroContentEl.innerHTML = renderMacroContent_0409();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0409 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0409();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0409 === 'function') stockContentEl.innerHTML = renderStockContent_0409();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0409 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0409();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0409 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0409();
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

  if (date === '2026-04-03') {
    // 渲染 4 月 3 日内容
    console.log('[renderAllContent] 渲染 4 月 3 日内容');
    if (typeof renderDecisionNav_0403 === 'function') renderDecisionNav_0403();
    if (typeof renderIndustryNav_0403 === 'function') renderIndustryNav_0403();
    if (typeof renderMacroNav_0403 === 'function') renderMacroNav_0403();
    if (typeof renderBrokerNav_0403 === 'function') renderBrokerNav_0403();
    if (typeof renderStockNav_0403 === 'function') renderStockNav_0403();
    if (typeof renderJisiluNav_0403 === 'function') renderJisiluNav_0403();
    if (typeof renderFuturesNav_0403 === 'function') renderFuturesNav_0403();

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0403 === 'function') decisionContentEl.innerHTML = renderDecisionContent_0403();

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0403 === 'function') industryContentEl.innerHTML = renderIndustryContent_0403();

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0403 === 'function') macroContentEl.innerHTML = renderMacroContent_0403();

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0403 === 'function') brokerContentEl.innerHTML = renderBrokerContent_0403();

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0403 === 'function') stockContentEl.innerHTML = renderStockContent_0403();

    const jisiluContentEl = document.getElementById('jisilu-content');
    if (jisiluContentEl && typeof renderJisiluContent_0403 === 'function') jisiluContentEl.innerHTML = renderJisiluContent_0403();

    const futuresContentEl = document.getElementById('futures-content');
    if (futuresContentEl && typeof renderFuturesContent_0403 === 'function') futuresContentEl.innerHTML = renderFuturesContent_0403();
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
