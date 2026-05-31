// ==========================================
// 个股研报模块 - 导航配置 (2026-05-31)
// ==========================================

const STOCK_NAV_CONFIG_0531 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '全局概览与评级体系' },
    ]
  },
  {
    title: 'S 级核心标的',
    links: [
      { id: 's_sec2', label: '巨化股份 (600160)' },
    ]
  },
  {
    title: 'A 级重点标的',
    links: [
      { id: 's_sec3', label: '半导体/芯片链' },
      { id: 's_sec4', label: 'AI 算力/光器件' },
      { id: 's_sec5', label: '新能源/海工' },
      { id: 's_sec6', label: '医药/创新药' },
      { id: 's_sec7', label: '工业AI/化工/面板' },
      { id: 's_sec8', label: '消费电子出海' },
    ]
  },
  {
    title: '全量评级汇总',
    links: [
      { id: 's_sec9', label: '93 篇评级总表' },
    ]
  },
];

function renderStockNav_0531() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0531.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-purple-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
