// ==========================================
// 个股研报导航配置 - 2026 年 3 月 20 日
// ==========================================

const STOCK_NAV_CONFIG_0320 = [
  {
    title: '核心评级',
    links: [
      { id: 'sec1', label: 'S 级标的（2 只）' },
      { id: 'sec2', label: 'A 级标的（5 只）' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec3', label: '完整评级汇总表' },
      { id: 'sec4', label: '评级说明' }
    ]
  }
];

function renderStockNav_0320() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0320.map(category => `
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${category.title}</h3>
      <nav class="space-y-1">
        ${category.links.map(link => `
          <button
            onclick="scrollToSection('stock', '${link.id}')"
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
