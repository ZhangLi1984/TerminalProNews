// ==========================================
// 投资决策内参 - 导航配置 (2026-03-25)
// ==========================================

const DECISION_NAV_CONFIG_0325 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '3分钟速读' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec2', label: '算电协同工程' },
      { id: 'sec3', label: '锂电产业链' },
      { id: 'sec4', label: '核聚变电力合作' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec5', label: '宏观政策' },
      { id: 'sec6', label: '资本市场' },
      { id: 'sec7', label: '企业动态' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec8', label: 'AI/算力' },
      { id: 'sec9', label: '人形机器人' },
      { id: 'sec10', label: '半导体' },
      { id: 'sec11', label: '新能源' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec12', label: '跨赛道传导分析' },
      { id: 'sec13', label: '明日关注' },
      { id: 'sec14', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0325() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0325.forEach(category => {
    html += `
      <div class="nav-category">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${category.title}</h3>
        <ul class="space-y-1">
          ${category.links.map((link, index) => `
            <li>
              <button
                onclick="scrollToSection('decision', '${link.id}')"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${index === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}"
                data-section="${link.id}"
              >
                <div class="flex items-center justify-between">
                  <span>${link.label}</span>
                  <div class="w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-transparent'}"></div>
                </div>
              </button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}