// ==========================================
// 个股研报 - 导航配置 2026-05-26
// ==========================================
const STOCK_NAV_CONFIG_0526 = [
  { title: '核心推荐', links: [
    { id: 's_sec1', label: '核心摘要' },
    { id: 's_sec2', label: 'S级标的' },
    { id: 's_sec3', label: 'A级标的' },
  ]},
  { title: '完整清单', links: [
    { id: 's_sec4', label: '评级汇总表' },
    { id: 's_sec5', label: '评级说明' },
  ]}
];

function renderStockNav_0526() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0526.map(group => `
    <div class="mb-4">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}')" data-section="${link.id}" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center">
            <div class="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
