// ==========================================
// 个股研报模块 - 导航配置 (2026-06-01)
// ==========================================

const STOCK_NAV_CONFIG_0601 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '全局概览与评级体系' }
    ]
  },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '中际旭创 (300308)' },
      { id: 's_sec3', label: '天赐材料 (002709)' },
      { id: 's_sec4', label: '生益科技 (600183)' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec5', label: '新易盛/拓荆科技/天孚通信' },
      { id: 's_sec6', label: '大金重工/完美世界/湖南黄金' },
      { id: 's_sec7', label: '阳光电源/绿联科技' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec8', label: '全量95篇评级汇总表' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 's_sec9', label: '投资组合配置建议' }
    ]
  }
];

function renderStockNav_0601() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0601.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
