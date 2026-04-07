// ==========================================
// 期货市场导航配置 - 2026 年 4 月 7 日
// ==========================================

const FUTURES_NAV_CONFIG_0407 = [
  {
    title: '价格行情',
    links: [
      { id: 'f_sec1', label: '能源化工' },
      { id: 'f_sec2', label: '贵金属' },
      { id: 'f_sec3', label: '有色金属' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec4', label: '原油' },
      { id: 'f_sec5', label: '黄金' },
      { id: 'f_sec6', label: '铜' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec7', label: '做多机会' },
      { id: 'f_sec8', label: '做空机会' },
      { id: 'f_sec9', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0407() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  const navHtml = FUTURES_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'f_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
