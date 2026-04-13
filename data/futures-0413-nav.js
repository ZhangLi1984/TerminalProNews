// ==========================================
// 期货市场分析模块导航 - 2026-04-13
// ==========================================

const FUTURES_NAV_CONFIG_0413 = [
  {
    title: '今日概览',
    links: [
      { id: 'f_sec1', label: '核心观点摘要' }
    ]
  }
];

function renderFuturesNav_0413() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0413.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
