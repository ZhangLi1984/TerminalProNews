// ==========================================
// 期货市场导航模块 - 2026-03-17
// ==========================================

const FUTURES_NAV_CONFIG_0317 = [
  {
    title: '行情概览',
    links: [
      { id: 'sec1', label: '能源化工' },
      { id: 'sec2', label: '有色金属' },
      { id: 'sec3', label: '农产品' },
      { id: 'sec4', label: '黑色系' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'sec5', label: '原油/燃油' },
      { id: 'sec6', label: '黄金/白银' },
      { id: 'sec7', label: '碳酸锂' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'sec8', label: '做多机会' },
      { id: 'sec9', label: '做空机会' },
      { id: 'sec10', label: '套利策略' }
    ]
  },
  {
    title: '新闻热点',
    links: [
      { id: 'sec11', label: '地缘政治' },
      { id: 'sec12', label: '库存数据' }
    ]
  }
];

function renderFuturesNav_0317() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-orange-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
