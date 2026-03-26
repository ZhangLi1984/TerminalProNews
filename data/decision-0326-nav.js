// ==========================================
// 投资决策内参导航配置 - 2026 年 3 月 26 日
// ==========================================

const DECISION_NAV_CONFIG_0326 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事' },
      { id: 'sec2', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '美伊冲突' },
      { id: 'sec4', label: '电力涨停潮' },
      { id: 'sec5', label: '公募规模' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: 'AI/算力' },
      { id: 'sec7', label: '机器人' },
      { id: 'sec8', label: '医药消费' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec9', label: '二阶思维' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec10', label: '事件数据' },
      { id: 'sec11', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0326() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0326.forEach((section, idx) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${section.title}</h3>
      <nav class="space-y-1">`;
    section.links.forEach((link, linkIdx) => {
      const isActive = idx === 0 && linkIdx === 0;
      html += `<button onclick="scrollToSection('decision', '${link.id}')"
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group ${isActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
        data-section="${link.id}">
        <div class="${isActive ? 'bg-red-500' : 'bg-transparent'} w-1.5 h-1.5 rounded-full mr-2.5 transition-colors"></div>
        <span class="${isActive ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}">${link.label}</span>
      </button>`;
    });
    html += `</nav></div>`;
  });

  container.innerHTML = html;
}
