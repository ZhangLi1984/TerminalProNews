// ==========================================
// 个股研报导航配置 - 2026-03-31
// ==========================================

const STOCK_NAV_CONFIG_0331 = [
  {
    title: '核心标的',
    links: [
      { id: 's_sec1', label: 'S 级标的深度' },
      { id: 's_sec2', label: 'A 级标的深度' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec3', label: '完整评级表' },
      { id: 's_sec4', label: '评级分布' }
    ]
  },
  {
    title: '重点覆盖',
    links: [
      { id: 's_sec5', label: '科技/制造' },
      { id: 's_sec6', label: '消费/医药' }
    ]
  }
];

function renderStockNav_0331() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
