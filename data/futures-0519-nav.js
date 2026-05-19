// 期货市场分析导航配置 - 2026-05-19
const FUTURES_NAV_CONFIG_0519 = [
  { title: '市场概览', links: [
    { id: 'f_sec1', label: '商品市场总览' },
    { id: 'f_sec2', label: '品种趋势判断' }
  ]},
  { title: '板块分析', links: [
    { id: 'f_sec3', label: '能源化工' },
    { id: 'f_sec4', label: '贵金属' },
    { id: 'f_sec5', label: '有色金属' },
    { id: 'f_sec6', label: '黑色金属' },
    { id: 'f_sec7', label: '农产品' }
  ]},
  { title: '策略与风险', links: [
    { id: 'f_sec8', label: '交易机会' },
    { id: 'f_sec9', label: '风险提示' }
  ]}
];

function renderFuturesNav_0519() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0519.map(group => `
    <div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </a>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
