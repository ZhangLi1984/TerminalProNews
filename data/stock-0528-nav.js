// ==========================================
// 个股研报模块 - 导航配置 (2026-05-28)
// ==========================================

const STOCK_NAV_CONFIG_0528 = [
  {
    title: 'S级与A级标的',
    links: [
      { id: 's_sec1', label: 'S级·核心推荐标的' },
      { id: 's_sec2', label: 'A级·重点推荐标的' },
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec3', label: '全部评级汇总表' },
      { id: 's_sec4', label: '行业分布统计' },
    ]
  },
];

function renderStockNav_0528() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
