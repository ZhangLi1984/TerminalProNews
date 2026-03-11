// ==========================================
// 智研金融 Terminal Pro - 主应用入口
// ==========================================

/**
 * 应用状态管理
 */
const AppState = {
  activeTab: 'decision',
  activeSection: 'sec1',
  currentDate: '2026-03-11',
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
  const macroBtn = document.getElementById('tab-macro');
  const brokerBtn = document.getElementById('tab-broker');
  const stockBtn = document.getElementById('tab-stock');
  const decisionDoc = document.getElementById('decision-doc');
  const industryDoc = document.getElementById('industry-doc');
  const macroDoc = document.getElementById('macro-doc');
  const brokerDoc = document.getElementById('broker-doc');
  const stockDoc = document.getElementById('stock-doc');

  // 重置所有按钮样式
  [decisionBtn, industryBtn, macroBtn, brokerBtn, stockBtn].forEach(btn => {
    if (btn) {
      btn.classList.remove('bg-white', 'text-red-700', 'text-blue-700', 'text-emerald-700', 'text-amber-700', 'text-purple-700', 'shadow-sm', 'border', 'border-slate-200');
      btn.classList.add('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    }
  });

  // 隐藏所有文档
  decisionDoc.classList.add('hidden');
  industryDoc.classList.add('hidden');
  macroDoc.classList.add('hidden');
  brokerDoc.classList.add('hidden');
  stockDoc.classList.add('hidden');

  if (tab === 'decision') {
    decisionBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    decisionBtn.classList.add('bg-white', 'text-red-700', 'shadow-sm', 'border', 'border-slate-200');
    decisionDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('sec1'), 100);
  } else if (tab === 'industry') {
    industryBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    industryBtn.classList.add('bg-white', 'text-blue-700', 'shadow-sm', 'border', 'border-slate-200');
    industryDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('i_sec1'), 100);
  } else if (tab === 'macro') {
    macroBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    macroBtn.classList.add('bg-white', 'text-emerald-700', 'shadow-sm', 'border', 'border-slate-200');
    macroDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('m_sec1'), 100);
  } else if (tab === 'broker') {
    brokerBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    brokerBtn.classList.add('bg-white', 'text-amber-700', 'shadow-sm', 'border', 'border-slate-200');
    brokerDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('b_sec1'), 100);
  } else if (tab === 'stock') {
    stockBtn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-200/60');
    stockBtn.classList.add('bg-white', 'text-purple-700', 'shadow-sm', 'border', 'border-slate-200');
    stockDoc.classList.remove('hidden');
    setTimeout(() => updateActiveNav('s_sec1'), 100);
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

  if (date === '2026-03-11') {
    // 渲染 3 月 11 日内容
    console.log('[renderAllContent] 渲染 3 月 11 日内容');
    if (typeof renderDecisionNav_0311 === 'function') {
      renderDecisionNav_0311();
    }
    if (typeof renderIndustryNav_0311 === 'function') {
      renderIndustryNav_0311();
    }
    if (typeof renderMacroNav_0311 === 'function') {
      renderMacroNav_0311();
    }
    if (typeof renderBrokerNav_0311 === 'function') {
      renderBrokerNav_0311();
    }
    if (typeof renderStockNav_0311 === 'function') {
      renderStockNav_0311();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0311 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0311();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0311 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0311();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0311 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0311();
    }

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0311 === 'function') {
      brokerContentEl.innerHTML = renderBrokerContent_0311();
    }

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0311 === 'function') {
      stockContentEl.innerHTML = renderStockContent_0311();
    }
  } else if (date === '2026-03-10') {
    // 渲染 3 月 10 日内容
    console.log('[renderAllContent] 渲染 3 月 10 日内容');
    if (typeof renderDecisionNav_0310 === 'function') {
      renderDecisionNav_0310();
    }
    if (typeof renderIndustryNav_0310 === 'function') {
      renderIndustryNav_0310();
    }
    if (typeof renderMacroNav_0310 === 'function') {
      renderMacroNav_0310();
    }
    if (typeof renderBrokerNav_0310 === 'function') {
      renderBrokerNav_0310();
    }
    if (typeof renderStockNav_0310 === 'function') {
      renderStockNav_0310();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0310 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0310();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0310 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0310();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0310 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0310();
    }

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0310 === 'function') {
      brokerContentEl.innerHTML = renderBrokerContent_0310();
    }

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0310 === 'function') {
      stockContentEl.innerHTML = renderStockContent_0310();
    }
  } else if (date === '2026-03-09') {
    // 渲染 3 月 9 日内容
    console.log('[renderAllContent] 渲染 3 月 9 日内容');
    if (typeof renderDecisionNav_0309 === 'function') {
      renderDecisionNav_0309();
    }
    if (typeof renderIndustryNav_0309 === 'function') {
      renderIndustryNav_0309();
    }
    if (typeof renderMacroNav_0309 === 'function') {
      renderMacroNav_0309();
    }
    if (typeof renderBrokerNav_0309 === 'function') {
      renderBrokerNav_0309();
    }
    if (typeof renderStockNav_0309 === 'function') {
      renderStockNav_0309();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0309 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0309();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0309 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0309();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0309 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0309();
    }

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0309 === 'function') {
      brokerContentEl.innerHTML = renderBrokerContent_0309();
    }

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0309 === 'function') {
      stockContentEl.innerHTML = renderStockContent_0309();
    }
  } else if (date === '2026-03-08') {
    // 渲染 3 月 8 日内容
    console.log('[renderAllContent] 渲染 3 月 8 日内容');
    if (typeof renderDecisionNav_0308 === 'function') {
      renderDecisionNav_0308();
    }
    if (typeof renderIndustryNav_0308 === 'function') {
      renderIndustryNav_0308();
    }
    if (typeof renderMacroNav_0308 === 'function') {
      renderMacroNav_0308();
    }
    if (typeof renderBrokerNav_0308 === 'function') {
      renderBrokerNav_0308();
    }
    if (typeof renderStockNav_0308 === 'function') {
      renderStockNav_0308();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0308 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0308();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0308 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0308();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0308 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0308();
    }

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0308 === 'function') {
      brokerContentEl.innerHTML = renderBrokerContent_0308();
    }

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0308 === 'function') {
      stockContentEl.innerHTML = renderStockContent_0308();
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
    if (typeof renderMacroNav_0307 === 'function') {
      renderMacroNav_0307();
    }
    if (typeof renderBrokerNav_0307 === 'function') {
      renderBrokerNav_0307();
    }
    if (typeof renderStockNav_0307 === 'function') {
      renderStockNav_0307();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0307 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0307();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0307 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0307();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0307 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0307();
    }

    const brokerContentEl = document.getElementById('broker-content');
    if (brokerContentEl && typeof renderBrokerContent_0307 === 'function') {
      brokerContentEl.innerHTML = renderBrokerContent_0307();
    }

    const stockContentEl = document.getElementById('stock-content');
    if (stockContentEl && typeof renderStockContent_0307 === 'function') {
      stockContentEl.innerHTML = renderStockContent_0307();
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
    if (typeof renderMacroNav_0306 === 'function') {
      renderMacroNav_0306();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0306 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0306();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0306 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0306();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0306 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0306();
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
    if (typeof renderMacroNav_0305 === 'function') {
      renderMacroNav_0305();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0305 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0305();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0305 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0305();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0305 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0305();
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
    if (typeof renderMacroNav_0304 === 'function') {
      renderMacroNav_0304();
    }

    const decisionContentEl = document.getElementById('decision-content');
    if (decisionContentEl && typeof renderDecisionContent_0304 === 'function') {
      decisionContentEl.innerHTML = renderDecisionContent_0304();
    }

    const industryContentEl = document.getElementById('industry-content');
    if (industryContentEl && typeof renderIndustryContent_0304 === 'function') {
      industryContentEl.innerHTML = renderIndustryContent_0304();
    }

    const macroContentEl = document.getElementById('macro-content');
    if (macroContentEl && typeof renderMacroContent_0304 === 'function') {
      macroContentEl.innerHTML = renderMacroContent_0304();
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
