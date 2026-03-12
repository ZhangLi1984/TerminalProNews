// ==========================================
// 个股研报导航 - 2026-03-12
// ==========================================

const STOCK_NAV_CONFIG_0312 = [
  {
    title: '核心标的',
    links: [
      { id: 's_sec1', label: 'S 级标的' },
      { id: 's_sec2', label: 'A 级标的' }
    ]
  },
  {
    title: '重点覆盖',
    links: [
      { id: 's_sec3', label: 'B 级标的' },
      { id: 's_sec4', label: '评级汇总' }
    ]
  },
  {
    title: '投资组合',
    links: [
      { id: 's_sec5', label: '稳健组合' },
      { id: 's_sec6', label: '弹性组合' }
    ]
  }
];

function renderStockNav_0312() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('stock', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
