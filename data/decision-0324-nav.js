// ==========================================
// 投资决策导航配置 - 2026 年 3 月 24 日
// ==========================================

const DECISION_NAV_CONFIG_0324 = [
  {
    title: '核心导航',
    links: [
      { id: 'sec1', label: '核心摘要与全局叙事' },
      { id: 'sec2', label: '重大事件深度推演' },
      { id: 'sec3', label: '行业催化与资金博弈' }
    ]
  },
  {
    title: '赛道与策略',
    links: [
      { id: 'sec4', label: '热点赛道追踪' },
      { id: 'sec5', label: '跨赛道传导分析' },
      { id: 'sec6', label: '明日关注' },
      { id: 'sec7', label: '风险提示与证伪区' }
    ]
  }
];

function renderDecisionNav_0324() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0324.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('decision', '${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
