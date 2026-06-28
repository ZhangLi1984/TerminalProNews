// ==========================================
// Futures Nav Config: 2026-06-28
// ==========================================

const FUTURES_NAV_CONFIG_0628 = [
  {
    title: '市场行情概览',
    links: [
      { id: 'sec1', label: '主要品种价格与涨跌幅' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'sec2', label: '能源化工板块' },
      { id: 'sec3', label: '金属板块' },
      { id: 'sec4', label: '农产品板块' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'sec5', label: '做多/做空机会' },
      { id: 'sec6', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0628() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
