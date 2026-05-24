// ==========================================
// 投资决策内参 - 导航配置 2026-05-24
// ==========================================
const DECISION_NAV_CONFIG_0524 = [
  {
    title: '市场要闻',
    links: [
      { id: 'd_sec1', label: '核心要闻与政策解读' },
      { id: 'd_sec2', label: '美伊谈判重大转折' }
    ]
  },
  {
    title: '资金与盘面',
    links: [
      { id: 'd_sec3', label: '主力资金与板块流向' },
      { id: 'd_sec4', label: '市场情绪与交易信号' }
    ]
  },
  {
    title: '今日操作',
    links: [
      { id: 'd_sec5', label: '核心配置方向' },
      { id: 'd_sec6', label: '风险提示与关注事项' }
    ]
  }
];

function renderDecisionNav_0524() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0524.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
