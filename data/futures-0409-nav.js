// ==========================================
// 期货市场导航模块 - 2026 年 4 月 9 日
// ==========================================

const FUTURES_NAV_CONFIG_0409 = [
  {
    title: '市场概况',
    links: [
      { id: 'f_sec1', label: '行情速览' },
      { id: 'f_sec2', label: '板块涨跌' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工' },
      { id: 'f_sec4', label: '金属板块' },
      { id: 'f_sec5', label: '农产品' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec6', label: '交易机会' },
      { id: 'f_sec7', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0409() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0409.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-orange-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900 truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
