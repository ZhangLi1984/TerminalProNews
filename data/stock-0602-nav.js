// ==========================================
// 个股研报 - 导航配置 (2026-06-02)
// ==========================================

const STOCK_NAV_CONFIG_0602 = [
  {
    title: '核心标的',
    links: [
      { id: 's_sec1', label: 'S级·天孚通信' },
      { id: 's_sec2', label: 'S级·比亚迪' },
      { id: 's_sec3', label: 'S级·绿联科技' },
      { id: 's_sec4', label: 'S级·中控技术' }
    ]
  },
  {
    title: '重点标的',
    links: [
      { id: 'a_sec1', label: 'A级·天娱数科' },
      { id: 'a_sec2', label: 'A级·南大光电' },
      { id: 'a_sec3', label: 'A级·大金重工' },
      { id: 'a_sec4', label: 'A级·联影医疗' },
      { id: 'a_sec5', label: 'A级·泽璟制药' },
      { id: 'a_sec6', label: 'A级·仕佳光子' },
      { id: 'a_sec7', label: 'A级·锐捷网络' },
      { id: 'a_sec8', label: 'A级·巨化股份' },
      { id: 'a_sec9', label: 'A级·长江电力' },
      { id: 'a_sec10', label: 'A级·阳光电源' },
      { id: 'a_sec11', label: 'A级·拓荆科技' }
    ]
  },
  {
    title: '汇总数据',
    links: [
      { id: 's_sec_summary', label: '评级汇总表' },
      { id: 's_sec_system', label: '评级体系说明' }
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
