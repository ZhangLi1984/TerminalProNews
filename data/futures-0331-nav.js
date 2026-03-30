// ==========================================
// 期货市场导航配置 - 2026-03-31
// ==========================================

const FUTURES_NAV_CONFIG_0331 = [
  {
    title: '行情概览',
    links: [
      { id: 'f_sec1', label: '各板块涨跌幅' },
      { id: 'f_sec2', label: '主力合约资金流向' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工' },
      { id: 'f_sec4', label: '有色金属' },
      { id: 'f_sec5', label: '农产品' },
      { id: 'f_sec6', label: '黑色系' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec7', label: '做多机会' },
      { id: 'f_sec8', label: '做空机会' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'f_sec9', label: '风险警示' }
    ]
  }
];

function renderFuturesNav_0331() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
