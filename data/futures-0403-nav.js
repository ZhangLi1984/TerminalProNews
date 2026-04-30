// truncated=================================
// 期货市场导航配置 - 2026-04-03
// ==========================================

const FUTURES_NAV_CONFIG_0403 = [
  {
    title: '市场概览',
    links: [
      { id: 'f_sec1', label: '市场总览' },
      { id: 'f_sec2', label: '原油板块' },
      { id: 'f_sec3', label: '贵金属板块' },
      { id: 'f_sec4', label: '有色/化工板块' },
      { id: 'f_sec5', label: '农产品板块' }
    ]
  },
  {
    title: '策略分析',
    links: [
      { id: 'f_sec6', label: '做多机会' },
      { id: 'f_sec7', label: '做空机会' },
      { id: 'f_sec8', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0403() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0403.forEach((category) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('futures', '${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
