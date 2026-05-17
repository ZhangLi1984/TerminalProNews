const FUTURES_NAV_CONFIG_0518 = [
  { title: '行情概览', links: [
    { id: 'sec1', label: '大宗商品价格行情' },
  ]},
  { title: '品种分析', links: [
    { id: 'sec2', label: '能源化工' },
    { id: 'sec3', label: '有色金属' },
    { id: 'sec4', label: '黑色金属' },
    { id: 'sec5', label: '贵金属与农产品' },
  ]},
  { title: '交易策略', links: [
    { id: 'sec6', label: '做多/做空机会' },
    { id: 'sec7', label: '风险提示' },
  ]},
];

function renderFuturesNav_0518() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  let html = '';
  FUTURES_NAV_CONFIG_0518.forEach(group => {
    html += `<div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
        class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
        <span class="truncate">${link.label}</span>
      </a>`;
    });
    html += `</nav></div>`;
  });
  container.innerHTML = html;
}
