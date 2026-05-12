// 期货市场导航模块 - 2026-05-13
const FUTURES_NAV_CONFIG_0513 = [
  {
    title: '市场概览',
    links: [
      { id: 'f_sec1', label: '今日期货市场总览' }
    ]
  },
  {
    title: '板块与品种',
    links: [
      { id: 'f_sec2', label: '农产品板块' },
      { id: 'f_sec3', label: '能源化工板块' },
      { id: 'f_sec4', label: '金属板块' }
    ]
  },
  {
    title: '策略与风险',
    links: [
      { id: 'f_sec5', label: '套利策略参考' },
      { id: 'f_sec6', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0513() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0513.map(group => `
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
