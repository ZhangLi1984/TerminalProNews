// ==========================================
// 期货市场导航模块 - 2026 年 3 月 16 日
// ==========================================

const FUTURES_NAV_CONFIG_0316 = [
  {
    title: '市场概览',
    links: [
      { id: 'f_sec1', label: '涨跌分布' },
      { id: 'f_sec2', label: '成交量异常' }
    ]
  },
  {
    title: '重点品种',
    links: [
      { id: 'f_sec3', label: '原油' },
      { id: 'f_sec4', label: '铁矿石' },
      { id: 'f_sec5', label: '碳酸锂' },
      { id: 'f_sec6', label: '贵金属' }
    ]
  },
  {
    title: '能源化工',
    links: [
      { id: 'f_sec7', label: 'PTA/乙二醇/PVC' },
      { id: 'f_sec8', label: '燃料油/沥青' }
    ]
  },
  {
    title: '农产品',
    links: [
      { id: 'f_sec9', label: '生猪' },
      { id: 'f_sec10', label: '豆粕/油脂' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec11', label: '做多机会' },
      { id: 'f_sec12', label: '做空机会' },
      { id: 'f_sec13', label: '套利策略' }
    ]
  }
];

function renderFuturesNav_0316() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('futures', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
