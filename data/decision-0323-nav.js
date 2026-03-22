// ==========================================
// Decision Nav Config: 2026-03-23
// 投资决策内参 - 导航配置
// ==========================================

const DECISION_NAV_CONFIG_0323 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件详解',
    links: [
      { id: 'sec4', label: '中东局势缓和' },
      { id: 'sec5', label: '华为昇腾 + 宇树 IPO' },
      { id: 'sec6', label: '央行货币政策' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: 'AI/算力/半导体' },
      { id: 'sec8', label: '新能源/储能' },
      { id: 'sec9', label: '机器人' },
      { id: 'sec10', label: '政策/宏观' }
    ]
  },
  {
    title: '二阶思维',
    links: [
      { id: 'sec11', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'sec12', label: '风险提示' },
      { id: 'sec13', label: '明日关注' },
      { id: 'sec14', label: '行业配置' }
    ]
  }
];

function renderDecisionNav_0323() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0323.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#${link.id}" onclick="scrollToSection('decision', '${link.id}')" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
