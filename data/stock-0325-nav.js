// ==========================================
// 个股研报 - 导航配置 (2026-03-25)
// ==========================================

const STOCK_NAV_CONFIG_0325 = [
  {
    title: '核心发现',
    links: [
      { id: 's_sec1', label: '评级分布概览' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec2', label: 'A 级标的名单（22 家）' },
      { id: 's_sec3', label: '重点 A 级行业分布' },
      { id: 's_sec4', label: 'A 级投资逻辑提炼' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 's_sec5', label: 'C 级标的风险提示' }
    ]
  },
  {
    title: '全量清单',
    links: [
      { id: 's_sec6', label: '全量研报清单（100 篇）' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 's_sec7', label: '重点关注方向' }
    ]
  }
];

function renderStockNav_0325() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';

  STOCK_NAV_CONFIG_0325.forEach(group => {
    html += `
      <div class="mb-6">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <ul class="space-y-1">
          ${group.links.map(link => `
            <li>
              <button
                onclick="scrollToSection('stock', '${link.id}')"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center"
                data-section="${link.id}"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                ${link.label}
              </button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}