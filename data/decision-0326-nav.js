// ==========================================
// 投资决策内参导航配置 - 2026 年 3 月 26 日
// ==========================================

const DECISION_NAV_CONFIG_0326 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '执行摘要' },
      { id: 'sec2', label: '核心指标' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'sec3', label: '经济增长' },
      { id: 'sec4', label: '通胀与流动性' },
      { id: 'sec5', label: '机构观点' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'sec6', label: '大类资产配置' },
      { id: 'sec7', label: '行业轮动' },
      { id: 'sec8', label: '主题投资' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec9', label: '外部风险' },
      { id: 'sec10', label: '内部风险' }
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
    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('decision', '${link.id}')"
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group hover:bg-slate-100"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</nav></div>`;
  });

  container.innerHTML = html;
}
