// ==========================================
// 个股研报模块导航 - 2026-04-13
// ==========================================

const STOCK_NAV_CONFIG_0413 = [
  {
    title: '核心标的',
    links: [
      { id: 's_sec1', label: '核心摘要' },
      { id: 's_sec2', label: 'S 级标的深度剖析' },
      { id: 's_sec3', label: 'A 级标的重点叙述' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec4', label: '完整评级汇总表' },
      { id: 's_sec5', label: '评级分布统计' }
    ]
  },
  {
    title: '资金研判',
    links: [
      { id: 's_sec6', label: '行业资金流向研判' }
    ]
  }
];

function renderStockNav_0413() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0413.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h4>
      <ul class="space-y-1">
        ${group.links.map(link => `
          <li>
            <button onclick="scrollToSection('stock', '${link.id}')"
              class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
              data-section="${link.id}">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors group-hover:bg-red-500"></div>
              ${link.label}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
