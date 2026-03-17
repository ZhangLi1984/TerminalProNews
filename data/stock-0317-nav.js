// ==========================================
// 个股研报导航模块 - 2026-03-17
// ==========================================

const STOCK_NAV_CONFIG_0317 = [
  {
    title: '重点标的',
    links: [
      { id: 'sec1', label: 'S 级标的' },
      { id: 'sec2', label: 'A 级标的' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec3', label: '机构评级表' },
      { id: 'sec4', label: '资金流向' }
    ]
  },
  {
    title: '推荐组合',
    links: [
      { id: 'sec5', label: '月度金股' },
      { id: 'sec6', label: '核心组合' }
    ]
  }
];

function renderStockNav_0317() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-purple-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
