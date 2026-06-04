// ==========================================
// 个股研报导航 - 2026年6月4日
// ==========================================
const STOCK_NAV_CONFIG_0604 = [
  { title: '核心标的', links: [
    { id: 's_sec1', label: 'S 级标的（4 只）' },
    { id: 's_sec2', label: 'A 级标的（10 只）' },
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec3', label: '全量评级汇总表' },
  ]},
  { title: '行业分布', links: [
    { id: 's_sec4', label: '行业分布统计' },
  ]},
];

function renderStockNav_0604() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0604.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
