const FUTURES_NAV_CONFIG_0624 = [
  { title: '期货日报', links: [{ id: 'sec1', label: '价格行情总览' }] },
  { title: '品种分析', links: [{ id: 'sec2', label: '重点品种趋势判断' }] },
  { title: '交易策略', links: [{ id: 'sec3', label: '做多/做空机会' }] }
];

function renderFuturesNav_0624() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0624.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
