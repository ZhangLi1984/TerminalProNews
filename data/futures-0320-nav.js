// ==========================================
// 期货市场导航配置 - 2026 年 3 月 20 日
// ==========================================

const FUTURES_NAV_CONFIG_0320 = [
  {
    title: '期货市场',
    links: [
      { id: 'sec1', label: '市场热点' },
      { id: 'sec2', label: '品种分析' },
      { id: 'sec3', label: '交易机会' }
    ]
  }
];

function renderFuturesNav_0320() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0320.map(category => `
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${category.title}</h3>
      <nav class="space-y-1">
        ${category.links.map(link => `
          <button
            onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent group-hover:bg-red-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
