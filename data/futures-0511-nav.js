// ==========================================
// 期货市场导航配置 - 2026-05-11
// ==========================================

const FUTURES_NAV_CONFIG_0511 = [
  { title: '市场行情', links: [
    { id: 'f_sec1', label: '能化板块' },
    { id: 'f_sec2', label: '有色/贵金属' },
    { id: 'f_sec3', label: '农产品' },
    { id: 'f_sec4', label: '黑色/建材' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec5', label: '原油/燃油' },
    { id: 'f_sec6', label: '铜/铝' },
    { id: 'f_sec7', label: '黄金/白银' },
    { id: 'f_sec8', label: '煤炭/铁矿石' },
    { id: 'f_sec9', label: '农产品链' },
  ]},
  { title: '交易策略', links: [
    { id: 'f_sec10', label: '做多机会' },
    { id: 'f_sec11', label: '做空/套利机会' },
    { id: 'f_sec12', label: '风险提示' },
  ]},
];

function renderFuturesNav_0511() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0511.map((group, gi) => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('futures','${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors group-hover:bg-red-500"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
