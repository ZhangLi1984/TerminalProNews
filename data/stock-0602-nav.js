// ==========================================
// 个股研报 - 导航配置 (2026-06-02)
// ==========================================

const STOCK_NAV_CONFIG_0602 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '研报总览' }
    ]
  },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '天孚通信' },
      { id: 's_sec3', label: '比亚迪' },
      { id: 's_sec4', label: '绿联科技' },
      { id: 's_sec5', label: '中控技术' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec6', label: '天娱数科/南大光电' },
      { id: 's_sec7', label: '大金重工/联影医疗' },
      { id: 's_sec8', label: '泽璟制药/绿联科技' },
      { id: 's_sec9', label: '仕佳光子/锐捷网络' },
      { id: 's_sec10', label: '巨化股份/长江电力' },
      { id: 's_sec11', label: '阳光电源/拓荆科技' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec12', label: '完整评级汇总表' }
    ]
  },
  {
    title: '评级体系',
    links: [
      { id: 's_sec13', label: '评分标准说明' }
    ]
  }
];

function renderStockNav_0602() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0602.map(group => `
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
