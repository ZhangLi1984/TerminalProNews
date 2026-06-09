const FUTURES_NAV_CONFIG_0609 = [
  { title: '价格行情', links: [
    { id: 'f_sec1', label: '各板块价格表' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '能源化工' },
    { id: 'f_sec3', label: '有色金属' },
    { id: 'f_sec4', label: '黑色系' },
    { id: 'f_sec5', label: '农产品' },
  ]},
  { title: '新闻与策略', links: [
    { id: 'f_sec6', label: '新闻热点' },
    { id: 'f_sec7', label: '交易机会' },
    { id: 'f_sec8', label: '风险提示' },
  ]},
];

function renderFuturesNav_0609() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0609.map(group => `
    <div class="mb-6">
      <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
