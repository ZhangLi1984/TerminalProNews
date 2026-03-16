// ==========================================
// 券商晨报导航模块 - 2026 年 3 月 16 日
// ==========================================

const BROKER_NAV_CONFIG_0316 = [
  {
    title: '晨报摘要',
    links: [
      { id: 'b_sec1', label: '核心观点' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '券商策略汇总' }
    ]
  },
  {
    title: '行业配置',
    links: [
      { id: 'b_sec6', label: '行业推荐榜' },
      { id: 'b_sec7', label: '重点行业观点' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec8', label: '多券商推荐个股' },
      { id: 'b_sec9', label: '其他重点个股' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec10', label: '投资策略' },
      { id: 'b_sec11', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0316() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('broker', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
