const FUTURES_NAV_CONFIG_0623 = [
  { title: '市场行情', links: [{ id: 'f_sec1', label: '价格行情总览' }] },
  { title: '品种分析', links: [{ id: 'f_sec2', label: '能源化工' }, { id: 'f_sec3', label: '有色金属' }, { id: 'f_sec4', label: '农产品' }, { id: 'f_sec5', label: '黑色系' }] },
  { title: '新闻热点', links: [{ id: 'f_sec6', label: '重要新闻解读' }] },
  { title: '策略建议', links: [{ id: 'f_sec7', label: '交易机会' }, { id: 'f_sec8', label: '风险提示' }] }
];

function renderFuturesNav_0623() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0623.forEach((category) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
