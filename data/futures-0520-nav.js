// ==========================================
// 期货市场分析 - 导航配置 - 2026-05-20
// ==========================================

const FUTURES_NAV_CONFIG_0520 = [
  { title: '行情总览', links: [
    { id: 'f_sec1', label: '主要品种价格表' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '能源化工板块' },
    { id: 'f_sec3', label: '金属板块' },
    { id: 'f_sec4', label: '农产品板块' },
    { id: 'f_sec5', label: '贵金属板块' },
  ]},
  { title: '策略建议', links: [
    { id: 'f_sec6', label: '交易机会' },
    { id: 'f_sec7', label: '风险提示' },
  ]},
];

function renderFuturesNav_0520() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  let html = '';
  FUTURES_NAV_CONFIG_0520.forEach(group => {
    html += `<div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
        class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
        <span class="truncate">${link.label}</span>
      </a>`;
    });
    html += `</nav></div>`;
  });
  container.innerHTML = html;
}
