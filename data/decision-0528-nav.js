// ==========================================
// 投资决策模块 - 导航配置 (2026-05-28)
// ==========================================

const DECISION_NAV_CONFIG_0528 = [
  {
    title: '市场总览',
    links: [
      { id: 'd_sec1', label: 'A股市场核心数据' },
      { id: 'd_sec2', label: '全球市场动态' },
      { id: 'd_sec3', label: 'IPO与新股动态' },
    ]
  },
  {
    title: '政策与地缘',
    links: [
      { id: 'd_sec4', label: '政策要闻' },
      { id: 'd_sec5', label: '美伊局势与油价' },
      { id: 'd_sec6', label: '监管与制度改革' },
    ]
  },
  {
    title: '行业信号',
    links: [
      { id: 'd_sec7', label: '科技/AI/半导体' },
      { id: 'd_sec8', label: '消费/医药/银行' },
      { id: 'd_sec9', label: '资金面与市场情绪' },
    ]
  },
];

function renderDecisionNav_0528() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
