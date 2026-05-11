// 期货市场导航模块 - 2026-05-12
const FUTURES_NAV_CONFIG_0512 = [
  {
    title: '市场行情',
    links: [
      { id: 'f_sec1', label: '各板块价格行情' },
      { id: 'f_sec2', label: '能源化工板块' },
      { id: 'f_sec3', label: '有色金属板块' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec4', label: '农产品板块' },
      { id: 'f_sec5', label: '黑色金属板块' },
      { id: 'f_sec6', label: '股指期货' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec7', label: '做多/做空机会' },
      { id: 'f_sec8', label: '风险提示与监控' }
    ]
  }
];

function renderFuturesNav_0512() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0512.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
