// ==========================================
// Jisilu Nav Config: 2026-06-28
// ==========================================

const JISILU_NAV_CONFIG_0628 = [
  {
    title: '热门讨论',
    links: [
      { id: 'sec1', label: '新版转债详细页公测' },
      { id: 'sec2', label: '大跌心态与投资策略' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'sec3', label: '融资融券智能交易服务' }
    ]
  }
];

function renderJisiluNav_0628() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
