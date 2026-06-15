const FUTURES_NAV_CONFIG_0615 = [
  { title: '期货市场', links: [{ id: 'sec1', label: '行情概览' }, { id: 'sec2', label: '品种分析' }] }
];
function renderFuturesNav_0615() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0615.map(cat => `
    <div class="mb-4">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</h3>
      <ul class="space-y-0.5">
        ${cat.links.map(link => `<li><a href="#${link.id}" class="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
