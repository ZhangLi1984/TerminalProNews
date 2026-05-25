// ==========================================
// 期货市场 - 导航配置 2026-05-26
// ==========================================
const FUTURES_NAV_CONFIG_0526 = [
  {
    title: '行情总览',
    links: [
      { id: 'f_sec1', label: '板块行情监测表' },
      { id: 'f_sec2', label: '能源化工板块' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '黑色系（煤焦钢矿）' },
      { id: 'f_sec4', label: '有色金属' },
      { id: 'f_sec5', label: '农产品' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec6', label: '做多/做空机会' },
      { id: 'f_sec7', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0526() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
