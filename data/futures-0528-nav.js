// ==========================================
// 期货市场模块 - 导航配置 (2026-05-28)
// ==========================================

const FUTURES_NAV_CONFIG_0528 = [
  {
    title: '行情概览',
    links: [
      { id: 'f_sec1', label: '市场总览与品种监测' },
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec2', label: '能源化工（原油/煤炭）' },
      { id: 'f_sec3', label: '贵金属与有色' },
      { id: 'f_sec4', label: '农产品' },
    ]
  },
  {
    title: '策略与风险',
    links: [
      { id: 'f_sec5', label: '做多/做空机会' },
      { id: 'f_sec6', label: '风险提示' },
    ]
  },
];

function renderFuturesNav_0528() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
