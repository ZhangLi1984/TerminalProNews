// ==========================================
// 日期配置与数据管理
// ==========================================

// 可用日期列表（按时间倒序，最新的在前）
const AVAILABLE_DATES = [
  { date: '2026-03-16', label: '2026 年 3 月 16 日', tag: 'latest', tagLabel: '最新' },
  { date: '2026-03-13', label: '2026 年 3 月 13 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-12', label: '2026 年 3 月 12 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-11', label: '2026 年 3 月 11 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-10', label: '2026 年 3 月 10 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-09', label: '2026 年 3 月 9 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-08', label: '2026 年 3 月 8 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-07', label: '2026 年 3 月 7 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-06', label: '2026 年 3 月 6 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-05', label: '2026 年 3 月 5 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-04', label: '2026 年 3 月 4 日', tag: 'history', tagLabel: '历史' }
];

// 当前选中日期（2026-03-16 最新）
let currentDate = '2026-03-16';

// 当前搜索关键词
let dateSearchKeyword = '';

/**
 * 切换日期下拉菜单显示/隐藏
 */
function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  const isHidden = dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden');

  // 打开时聚焦搜索框
  if (isHidden) {
    setTimeout(() => {
      const searchInput = document.getElementById('date-search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
  }
}

/**
 * 模糊匹配日期
 * @param {string} keyword - 搜索关键词
 * @param {object} item - 日期项
 * @returns {boolean} 是否匹配
 */
function matchDate(keyword, item) {
  if (!keyword) return true;

  const kw = keyword.toLowerCase().trim();

  // 支持多种搜索格式：
  // 1. 完整日期：2026-03-16, 20260316
  // 2. 月日：0316, 3 月 16, 3 月 16 日，03-16
  // 3. 日：16, 16 日
  // 4. 月份：3 月，03

  const patterns = [
    item.date,                    // 2026-03-16
    item.date.replace(/-/g, ''),  // 20260316
    item.date.slice(5),           // 03-16
    item.date.slice(5).replace('-', ''), // 0316
    item.label,                   // 2026 年 3 月 16 日
    item.label.replace(/[ 年月]/g, ''),  // 2026316 日
    // 灵活匹配
    item.date.slice(8),           // 16
    item.date.slice(5, 7),        // 03
    item.label.replace(/.*(\d+)月.*/, '$1'), // 提取月份
    item.label.replace(/.*(\d+) 日/, '$1'),   // 提取日期
  ];

  return patterns.some(p => p.toLowerCase().includes(kw));
}

/**
 * 过滤日期列表
 * @param {string} keyword - 搜索关键词
 */
function filterDateList(keyword) {
  dateSearchKeyword = keyword;

  const dateList = document.getElementById('date-list');
  const noResults = document.getElementById('date-no-results');
  const clearBtn = document.getElementById('date-search-clear');

  if (!dateList) return;

  // 显示/隐藏清除按钮
  if (clearBtn) {
    if (keyword && keyword.trim()) {
      clearBtn.classList.remove('hidden');
      clearBtn.classList.add('flex');
    } else {
      clearBtn.classList.add('hidden');
      clearBtn.classList.remove('flex');
    }
  }

  // 过滤匹配的日期
  const matchedDates = AVAILABLE_DATES.filter(item => matchDate(keyword, item));

  if (matchedDates.length === 0) {
    dateList.classList.add('hidden');
    noResults.classList.remove('hidden');
  } else {
    dateList.classList.remove('hidden');
    noResults.classList.add('hidden');

    dateList.innerHTML = matchedDates.map(item => `
      <div class="date-item ${item.date === currentDate ? 'active' : ''}"
           onclick="selectDate('${item.date}')">
        <span class="date-label">${highlightMatch(item.label, keyword)}</span>
        <span class="date-tag ${item.tag}">${item.tagLabel}</span>
      </div>
    `).join('');
  }
}

/**
 * 高亮匹配文字
 * @param {string} text - 原文
 * @param {string} keyword - 关键词
 * @returns {string} 高亮后的 HTML
 */
function highlightMatch(text, keyword) {
  if (!keyword || !keyword.trim()) return text;

  const kw = keyword.trim();
  const regex = new RegExp(`(${escapeRegex(kw)})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 text-inherit rounded px-0.5">$1</mark>');
}

/**
 * 转义正则特殊字符
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 清除搜索
 */
function clearDateSearch() {
  const searchInput = document.getElementById('date-search-input');
  const clearBtn = document.getElementById('date-search-clear');

  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }

  if (clearBtn) {
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('flex');
  }

  dateSearchKeyword = '';
  renderDateList();
}

/**
 * 渲染日期列表
 */
function renderDateList() {
  const dateList = document.getElementById('date-list');
  const noResults = document.getElementById('date-no-results');

  if (!dateList) return;

  // 如果有搜索关键词，使用过滤函数
  if (dateSearchKeyword) {
    filterDateList(dateSearchKeyword);
    return;
  }

  // 显示全部日期
  noResults.classList.add('hidden');
  dateList.classList.remove('hidden');

  dateList.innerHTML = AVAILABLE_DATES.map(item => `
    <div class="date-item ${item.date === currentDate ? 'active' : ''}"
         onclick="selectDate('${item.date}')">
      <span class="date-label">${item.label}</span>
      <span class="date-tag ${item.tag}">${item.tagLabel}</span>
    </div>
  `).join('');
}

/**
 * 选择日期
 */
function selectDate(date) {
  // 同步更新两个变量
  currentDate = date;

  // 调用 app.js 中的 switchDate 函数（它会更新 AppState.currentDate 并重新渲染）
  if (typeof switchDate === 'function') {
    switchDate(date);
  } else {
    //  fallback: 如果 switchDate 还未加载，直接更新显示并渲染
    document.getElementById('current-date-display').textContent = date;
    renderDateList();
    document.getElementById('date-dropdown').classList.add('hidden');
    renderAllContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 清除搜索状态
  clearDateSearch();
}

/**
 * 点击外部关闭下拉菜单
 */
function setupDateDropdownListener() {
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('date-dropdown');
    const btn = document.getElementById('date-selector-btn');

    // 检查是否点击了下拉菜单内部或按钮
    if (dropdown && !dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.add('hidden');
      // 关闭时清除搜索
      clearDateSearch();
    }
  });

  // 键盘事件：ESC 关闭下拉菜单
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const dropdown = document.getElementById('date-dropdown');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
        clearDateSearch();
      }
    }
  });
}

/**
 * 渲染所有日期内容（投资决策内参 + 行业汇总）
 */
function renderAllContent() {
  // 渲染投资决策内参导航
  if (currentDate === '2026-03-16') {
    if (typeof renderDecisionNav_0316 === 'function') {
      renderDecisionNav_0316();
    }
    if (typeof renderIndustryNav_0316 === 'function') {
      renderIndustryNav_0316();
    }
    if (typeof renderMacroNav_0316 === 'function') {
      renderMacroNav_0316();
    }
    if (typeof renderBrokerNav_0316 === 'function') {
      renderBrokerNav_0316();
    }
    if (typeof renderStockNav_0316 === 'function') {
      renderStockNav_0316();
    }
    if (typeof renderJisiluNav_0316 === 'function') {
      renderJisiluNav_0316();
    }
    if (typeof renderFuturesNav_0316 === 'function') {
      renderFuturesNav_0316();
    }
    if (typeof renderDecisionContent_0316 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0316();
      }
    }
    if (typeof renderIndustryContent_0316 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0316();
      }
    }
    if (typeof renderMacroContent_0316 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0316();
      }
    }
    if (typeof renderBrokerContent_0316 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0316();
      }
    }
    if (typeof renderStockContent_0316 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0316();
      }
    }
    if (typeof renderJisiluContent_0316 === 'function') {
      const jisiluContainer = document.getElementById('jisilu-content');
      if (jisiluContainer) {
        jisiluContainer.innerHTML = renderJisiluContent_0316();
      }
    }
    if (typeof renderFuturesContent_0316 === 'function') {
      const futuresContainer = document.getElementById('futures-content');
      if (futuresContainer) {
        futuresContainer.innerHTML = renderFuturesContent_0316();
      }
    }
  } else if (currentDate === '2026-03-13') {
    if (typeof renderDecisionNav_0313 === 'function') {
      renderDecisionNav_0313();
    }
    if (typeof renderIndustryNav_0313 === 'function') {
      renderIndustryNav_0313();
    }
    if (typeof renderMacroNav_0313 === 'function') {
      renderMacroNav_0313();
    }
    if (typeof renderBrokerNav_0313 === 'function') {
      renderBrokerNav_0313();
    }
    if (typeof renderStockNav_0313 === 'function') {
      renderStockNav_0313();
    }
    if (typeof renderJisiluNav_0313 === 'function') {
      renderJisiluNav_0313();
    }
    if (typeof renderFuturesNav_0313 === 'function') {
      renderFuturesNav_0313();
    }
    if (typeof renderDecisionContent_0313 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0313();
      }
    }
    if (typeof renderIndustryContent_0313 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0313();
      }
    }
    if (typeof renderMacroContent_0313 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0313();
      }
    }
    if (typeof renderBrokerContent_0313 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0313();
      }
    }
    if (typeof renderStockContent_0313 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0313();
      }
    }
    if (typeof renderJisiluContent_0313 === 'function') {
      const jisiluContainer = document.getElementById('jisilu-content');
      if (jisiluContainer) {
        jisiluContainer.innerHTML = renderJisiluContent_0313();
      }
    }
    if (typeof renderFuturesContent_0313 === 'function') {
      const futuresContainer = document.getElementById('futures-content');
      if (futuresContainer) {
        futuresContainer.innerHTML = renderFuturesContent_0313();
      }
    }
  } else if (currentDate === '2026-03-12') {
    if (typeof renderDecisionNav_0312 === 'function') {
      renderDecisionNav_0312();
    }
    if (typeof renderIndustryNav_0312 === 'function') {
      renderIndustryNav_0312();
    }
    if (typeof renderMacroNav_0312 === 'function') {
      renderMacroNav_0312();
    }
    if (typeof renderBrokerNav_0312 === 'function') {
      renderBrokerNav_0312();
    }
    if (typeof renderStockNav_0312 === 'function') {
      renderStockNav_0312();
    }
    if (typeof renderJisiluNav_0312 === 'function') {
      renderJisiluNav_0312();
    }
    if (typeof renderFuturesNav_0312 === 'function') {
      renderFuturesNav_0312();
    }
    if (typeof renderDecisionContent_0312 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0312();
      }
    }
    if (typeof renderIndustryContent_0312 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0312();
      }
    }
    if (typeof renderMacroContent_0312 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0312();
      }
    }
    if (typeof renderBrokerContent_0312 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0312();
      }
    }
    if (typeof renderStockContent_0312 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0312();
      }
    }
    if (typeof renderJisiluContent_0312 === 'function') {
      const jisiluContainer = document.getElementById('jisilu-content');
      if (jisiluContainer) {
        jisiluContainer.innerHTML = renderJisiluContent_0312();
      }
    }
    if (typeof renderFuturesContent_0312 === 'function') {
      const futuresContainer = document.getElementById('futures-content');
      if (futuresContainer) {
        futuresContainer.innerHTML = renderFuturesContent_0312();
      }
    }
  } else if (currentDate === '2026-03-11') {
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
    if (typeof renderDecisionContent_0311 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0311();
      }
    }
    if (typeof renderIndustryContent_0311 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0311();
      }
    }
    if (typeof renderMacroContent_0311 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0311();
      }
    }
    if (typeof renderBrokerContent_0311 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0311();
      }
    }
    if (typeof renderStockContent_0311 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0311();
      }
    }
  } else if (currentDate === '2026-03-10') {
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
    if (typeof renderDecisionContent_0310 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0310();
      }
    }
    if (typeof renderIndustryContent_0310 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0310();
      }
    }
    if (typeof renderMacroContent_0310 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0310();
      }
    }
    if (typeof renderBrokerContent_0310 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0310();
      }
    }
    if (typeof renderStockContent_0310 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0310();
      }
    }
  } else if (currentDate === '2026-03-09') {
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
    if (typeof renderDecisionContent_0309 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0309();
      }
    }
    if (typeof renderIndustryContent_0309 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0309();
      }
    }
    if (typeof renderMacroContent_0309 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0309();
      }
    }
    if (typeof renderBrokerContent_0309 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0309();
      }
    }
    if (typeof renderStockContent_0309 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0309();
      }
    }
  } else if (currentDate === '2026-03-08') {
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
    if (typeof renderDecisionContent_0308 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0308();
      }
    }
    if (typeof renderIndustryContent_0308 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0308();
      }
    }
    if (typeof renderMacroContent_0308 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0308();
      }
    }
    if (typeof renderBrokerContent_0308 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0308();
      }
    }
    if (typeof renderStockContent_0308 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0308();
      }
    }
  } else if (currentDate === '2026-03-07') {
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
    if (typeof renderDecisionContent_0307 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0307();
      }
    }
    if (typeof renderIndustryContent_0307 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0307();
      }
    }
    if (typeof renderMacroContent_0307 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0307();
      }
    }
    if (typeof renderBrokerContent_0307 === 'function') {
      const brokerContainer = document.getElementById('broker-content');
      if (brokerContainer) {
        brokerContainer.innerHTML = renderBrokerContent_0307();
      }
    }
    if (typeof renderStockContent_0307 === 'function') {
      const stockContainer = document.getElementById('stock-content');
      if (stockContainer) {
        stockContainer.innerHTML = renderStockContent_0307();
      }
    }
  } else if (currentDate === '2026-03-06') {
    if (typeof renderDecisionNav_0306 === 'function') {
      renderDecisionNav_0306();
    }
    if (typeof renderIndustryNav_0306 === 'function') {
      renderIndustryNav_0306();
    }
    if (typeof renderMacroNav_0306 === 'function') {
      renderMacroNav_0306();
    }
    if (typeof renderDecisionContent_0306 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0306();
      }
    }
    if (typeof renderIndustryContent_0306 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0306();
      }
    }
    if (typeof renderMacroContent_0306 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0306();
      }
    }
  } else if (currentDate === '2026-03-05') {
    if (typeof renderDecisionNav_0305 === 'function') {
      renderDecisionNav_0305();
    }
    if (typeof renderIndustryNav_0305 === 'function') {
      renderIndustryNav_0305();
    }
    if (typeof renderMacroNav_0305 === 'function') {
      renderMacroNav_0305();
    }
    if (typeof renderDecisionContent_0305 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0305();
      }
    }
    if (typeof renderIndustryContent_0305 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0305();
      }
    }
    if (typeof renderMacroContent_0305 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0305();
      }
    }
  } else {
    if (typeof renderDecisionNav_0304 === 'function') {
      renderDecisionNav_0304();
    }
    if (typeof renderIndustryNav_0304 === 'function') {
      renderIndustryNav_0304();
    }
    if (typeof renderMacroNav_0304 === 'function') {
      renderMacroNav_0304();
    }
    if (typeof renderDecisionContent_0304 === 'function') {
      const decisionContainer = document.getElementById('decision-content');
      if (decisionContainer) {
        decisionContainer.innerHTML = renderDecisionContent_0304();
      }
    }
    if (typeof renderIndustryContent_0304 === 'function') {
      const industryContainer = document.getElementById('industry-content');
      if (industryContainer) {
        industryContainer.innerHTML = renderIndustryContent_0304();
      }
    }
    if (typeof renderMacroContent_0304 === 'function') {
      const macroContainer = document.getElementById('macro-content');
      if (macroContainer) {
        macroContainer.innerHTML = renderMacroContent_0304();
      }
    }
  }

  // 重新初始化滚动监听
  setTimeout(() => {
    if (typeof initScrollSpy === 'function') {
      initScrollSpy();
    }
  }, 100);
}
