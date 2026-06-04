// ==========================================
// 期货市场分析导航 - 2026年6月4日
// ==========================================
const FUTURES_NAV_CONFIG_0604 = [
  { title: '价格行情', links: [
    { id: 'f_sec1', label: '各板块价格监测表' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '能源化工板块' },
    { id: 'f_sec3', label: '金属板块' },
    { id: 'f_sec4', label: '农产品板块' },
  ]},
  { title: '交易机会', links: [
    { id: 'f_sec5', label: '做多/做空机会' },
    { id: 'f_sec6', label: '风险提示' },
  ]},
];

function renderFuturesNav_0604() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0604.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
