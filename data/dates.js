// ==========================================
// 日期配置与数据管理
// ==========================================

// 可用日期列表（按时间倒序，最新的在前）
const AVAILABLE_DATES = [
  { date: '2026-03-06', label: '2026 年 3 月 6 日', tag: 'latest', tagLabel: '最新' },
  { date: '2026-03-05', label: '2026 年 3 月 5 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-04', label: '2026 年 3 月 4 日', tag: 'history', tagLabel: '历史' }
];

// 当前选中日期
let currentDate = '2026-03-06';

/**
 * 切换日期下拉菜单显示/隐藏
 */
function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  dropdown.classList.toggle('hidden');
}

/**
 * 渲染日期列表
 */
function renderDateList() {
  const dateList = document.getElementById('date-list');
  if (!dateList) return;

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
}

/**
 * 点击外部关闭下拉菜单
 */
function setupDateDropdownListener() {
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('date-dropdown');
    const btn = document.getElementById('date-selector-btn');
    if (dropdown && !dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

/**
 * 渲染所有日期内容（投资决策内参 + 行业汇总）
 */
function renderAllContent() {
  // 渲染投资决策内参导航
  if (currentDate === '2026-03-06') {
    if (typeof renderDecisionNav_0306 === 'function') {
      renderDecisionNav_0306();
    }
    if (typeof renderIndustryNav_0306 === 'function') {
      renderIndustryNav_0306();
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
  } else if (currentDate === '2026-03-05') {
    if (typeof renderDecisionNav_0305 === 'function') {
      renderDecisionNav_0305();
    }
    if (typeof renderIndustryNav_0305 === 'function') {
      renderIndustryNav_0305();
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
  } else {
    if (typeof renderDecisionNav_0304 === 'function') {
      renderDecisionNav_0304();
    }
    if (typeof renderIndustryNav_0304 === 'function') {
      renderIndustryNav_0304();
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
  }

  // 重新初始化滚动监听
  setTimeout(() => {
    if (typeof initScrollSpy === 'function') {
      initScrollSpy();
    }
  }, 100);
}
