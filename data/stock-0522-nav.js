// ==========================================
// 个股研报导航配置 - 2026-05-22
// ==========================================

const STOCK_NAV_CONFIG_0522 = [
  { title: '核心推荐', links: [
    { id: 's_sec1', label: '核心摘要' },
    { id: 's_sec2', label: 'S级标的·生益科技' },
  ]},
  { title: 'A级标的', links: [
    { id: 's_sec3', label: 'A级重点标的(1-7)' },
    { id: 's_sec4', label: 'A级重点标的(8-14)' },
    { id: 's_sec5', label: 'A级重点标的(15-19)' },
  ]},
  { title: '完整评级', links: [
    { id: 's_sec6', label: '评级汇总表' },
    { id: 's_sec7', label: '评级统计分布' },
  ]},
];

function renderStockNav_0522() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
