// ==========================================
// 期货市场模块 - 导航配置 (2026-05-31)
// ==========================================

const FUTURES_NAV_CONFIG_0531 = [
  {
    title: '市场行情',
    links: [
      { id: 'f_sec1', label: '价格行情总览' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec2', label: '能源化工板块' },
      { id: 'f_sec3', label: '金属板块' },
      { id: 'f_sec4', label: '农产品板块' },
      { id: 'f_sec5', label: '金融期货' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec6', label: '做多机会' },
      { id: 'f_sec7', label: '做空机会' },
      { id: 'f_sec8', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0531() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0531.map(group => `
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
