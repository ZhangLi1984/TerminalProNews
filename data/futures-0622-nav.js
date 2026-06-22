// ==========================================
// 期货市场导航配置 - 2026-06-22
// ==========================================

const FUTURES_NAV_CONFIG_0622 = [
  {
    title: '行情概览',
    links: [
      { id: 'f_sec1', label: '价格行情表' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec2', label: '能源化工' },
      { id: 'f_sec3', label: '黑色金属' },
      { id: 'f_sec4', label: '农产品' },
      { id: 'f_sec5', label: '贵金属/有色' }
    ]
  },
  {
    title: '新闻与策略',
    links: [
      { id: 'f_sec6', label: '重要新闻热点' },
      { id: 'f_sec7', label: '交易机会' },
      { id: 'f_sec8', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0622() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0622.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'futures')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 group-hover:bg-red-500 transition-colors"></span>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
