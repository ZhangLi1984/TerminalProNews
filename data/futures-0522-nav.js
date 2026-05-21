// ==========================================
// 期货市场导航配置 - 2026-05-22
// ==========================================

const FUTURES_NAV_CONFIG_0522 = [
  {
    title: '行情概览',
    links: [
      { id: 'f_sec1', label: '核心观点' },
      { id: 'f_sec2', label: '能源化工板块' },
      { id: 'f_sec3', label: '贵金属板块' },
      { id: 'f_sec4', label: '黑色系板块' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec5', label: '原油/燃料油' },
      { id: 'f_sec6', label: '黄金/白银' },
      { id: 'f_sec7', label: '铁矿石/螺纹钢' },
      { id: 'f_sec8', label: '化工品' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec9', label: '做多机会' },
      { id: 'f_sec10', label: '做空机会' },
      { id: 'f_sec11', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0522() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
