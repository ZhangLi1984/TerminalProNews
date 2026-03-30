// ==========================================
// 投资决策内参导航配置 - 2026-03-31
// ==========================================

const DECISION_NAV_CONFIG_0331 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '中东冲突→原油破百' },
      { id: 'sec4', label: '铝产业链供应冲击' },
      { id: 'sec5', label: '茅台提价' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/半导体' },
      { id: 'sec7', label: '商业航天' },
      { id: 'sec8', label: '创新药' },
      { id: 'sec9', label: '新能源' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec10', label: '赛道景气度追踪' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec11', label: '逻辑证伪与传闻预警' },
      { id: 'sec12', label: '地缘政治尾部风险' }
    ]
  },
  {
    title: '策略总结',
    links: [
      { id: 'sec13', label: '仓位配置建议' },
      { id: 'sec14', label: '明日关注' }
    ]
  }
];

function renderDecisionNav_0331() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
