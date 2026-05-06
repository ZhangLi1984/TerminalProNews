// ==========================================
// 期货市场分析导航配置 - 2026-05-07
// ==========================================

const FUTURES_NAV_CONFIG_0507 = [
  { title: '行情总览', links: [
    { id: 'f_sec1', label: '各板块品种价格与涨跌幅' },
    { id: 'f_sec2', label: '核心品种趋势判断' }
  ]},
  { title: '板块分析', links: [
    { id: 'f_sec3', label: '能源化工板块' },
    { id: 'f_sec4', label: '有色金属板块' },
    { id: 'f_sec5', label: '黑色金属板块' },
    { id: 'f_sec6', label: '农产品板块' }
  ]},
  { title: '策略与机会', links: [
    { id: 'f_sec7', label: '做多/做空机会' },
    { id: 'f_sec8', label: '风险与对冲建议' }
  ]}
];

function renderFuturesNav_0507() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0507.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
