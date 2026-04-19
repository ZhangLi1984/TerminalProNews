// ==========================================
// 期货市场导航模块 - 2026-04-19
// ==========================================
const FUTURES_NAV_CONFIG_0419 = [
  { title: '行情概览', links: [
    { id: 'f_sec1', label: '主要品种价格表' }
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '能源化工板块' },
    { id: 'f_sec3', label: '有色金属板块' },
    { id: 'f_sec4', label: '贵金属板块' },
    { id: 'f_sec5', label: '农产品板块' }
  ]},
  { title: '策略建议', links: [
    { id: 'f_sec6', label: '做多/做空机会' },
    { id: 'f_sec7', label: '风险提示' }
  ]}
];

function renderFuturesNav_0419() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0419.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
