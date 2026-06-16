const FUTURES_NAV_CONFIG_0617 = [
  { title: '行情总览', links: [{ id: 'f_sec1', label: '板块涨跌' }] },
  { title: '重点品种', links: [
    { id: 'f_sec2', label: '原油及能源化工' },
    { id: 'f_sec3', label: '贵金属' },
    { id: 'f_sec4', label: '基本金属' },
    { id: 'f_sec5', label: '农产品' }
  ]},
  { title: '交易机会', links: [
    { id: 'f_sec6', label: '做多机会' },
    { id: 'f_sec7', label: '做空机会' }
  ]},
  { title: '风险提示', links: [{ id: 'f_sec8', label: '六大风险' }] }
];
function renderFuturesNav_0617() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
