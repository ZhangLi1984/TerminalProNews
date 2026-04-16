// ==========================================
// 个股研报导航模块 - 2026-04-16
// ==========================================

const STOCK_NAV_CONFIG_0416 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '今日概览' }] },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '宁德时代 (300750)' },
      { id: 's_sec3', label: '新锐股份 (688257)' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec4', label: '金山办公/申通快递' },
      { id: 's_sec5', label: '海光信息/众鑫股份' },
      { id: 's_sec6', label: '新天然气/神火股份' },
      { id: 's_sec7', label: '龙源电力/川恒股份' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec8', label: '完整评级汇总表' },
      { id: 's_sec9', label: '评级分布与行业热力' }
    ]
  },
  {
    title: '风险提示',
    links: [{ id: 's_sec10', label: '投资风险' }] }
];

function renderStockNav_0416() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0416.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
