// ==========================================
// 个股研报导航配置 - 2026-04-03
// ==========================================

const STOCK_NAV_CONFIG_0403 = [
  {
    title: '研报概览',
    links: [
      { id: 's_sec1', label: '今日研报概览' },
      { id: 's_sec2', label: '行业分布统计' }
    ]
  },
  {
    title: '关注标的',
    links: [
      { id: 's_sec3', label: 'S 级/A 级标的摘要' },
      { id: 's_sec4', label: '重点个股点评' }
    ]
  },
  {
    title: '评级分布',
    links: [
      { id: 's_sec5', label: '机构评级汇总' },
      { id: 's_sec6', label: '方法论说明' }
    ]
  }
];

function renderStockNav_0403() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0403.forEach((category) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('stock', '${link.id}'); updateActiveNav('${link.id}');"
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
