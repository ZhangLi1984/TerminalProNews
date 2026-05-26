// ==========================================
// 个股研报 - 导航配置 2026-05-27
// ==========================================
const STOCK_NAV_CONFIG_0527 = [
  {
    title: '核心推荐',
    links: [
      { id: 's_sec1', label: '核心摘要' },
      { id: 's_sec2', label: 'S级标的(3只)' },
      { id: 's_sec3', label: 'A级标的(7只)' },
    ]
  },
  {
    title: '完整清单',
    links: [
      { id: 's_sec4', label: '评级汇总表' },
      { id: 's_sec5', label: '评级说明与统计' },
    ]
  }
];

function renderStockNav_0527() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0527.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
