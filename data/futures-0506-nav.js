// Futures Nav Module for 2026-05-06
const FUTURES_NAV_CONFIG_0506 = [
  {
    title: '市场概览',
    links: [
      { id: 'f_sec1', label: '今日提示' }
    ]
  }
];

function renderFuturesNav_0506() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0506.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('futures','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
