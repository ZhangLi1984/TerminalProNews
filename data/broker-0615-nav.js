// ==========================================
// 券商晨报导航配置 - 2026 年 6 月 15 日
// ==========================================

const BROKER_NAV_CONFIG_0615 = [
  {
    title: '券商晨报',
    links: [
      { id: 'sec1', label: '核心摘要' },
      { id: 'sec2', label: '宏观策略汇总' },
      { id: 'sec3', label: '热门行业推荐榜' },
      { id: 'sec4', label: '券商金股组合' },
      { id: 'sec5', label: '风险提示与分歧点' }
    ]
  }
];

function renderBrokerNav_0615() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0615.map(category => `
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${category.title}</h3>
      <nav class="space-y-1">
        ${category.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent group-hover:bg-red-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
