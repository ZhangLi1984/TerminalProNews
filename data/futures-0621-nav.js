const FUTURES_NAV_CONFIG_0621 = [
  { title: '价格行情', links: [{ id: 'sec1', label: '主要品种价格' }] },
  { title: '品种分析', links: [{ id: 'sec2', label: '能源化工' }, { id: 'sec3', label: '有色金属' }, { id: 'sec4', label: '农产品' }] },
  { title: '交易机会', links: [{ id: 'sec5', label: '做多/做空机会' }] },
  { title: '风险提示', links: [{ id: 'sec6', label: '风险因素' }] }
];

function renderFuturesNav_0621() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  let html = '';
  FUTURES_NAV_CONFIG_0621.forEach(cat => {
    html += `<div class="mb-4"><h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${cat.title}</h4><div class="space-y-1">`;
    cat.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}')" data-section="${link.id}" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></span><span>${link.label}</span></button>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}
