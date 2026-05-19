// ==========================================
// 个股研报 - 导航配置 - 2026-05-20
// ==========================================

const STOCK_NAV_CONFIG_0520 = [
  { title: '重点标的', links: [
    { id: 's_sec1', label: 'S级标的推荐' },
    { id: 's_sec2', label: 'A级标的推荐' },
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec3', label: '评级汇总表' },
  ]},
  { title: '金股组合', links: [
    { id: 's_sec4', label: '东兴证券金股' },
    { id: 's_sec5', label: '中银国际金股' },
    { id: 's_sec6', label: '华源证券推荐' },
  ]},
  { title: '策略建议', links: [
    { id: 's_sec7', label: '操作建议与风控' },
  ]},
];

function renderStockNav_0520() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  let html = '';
  STOCK_NAV_CONFIG_0520.forEach(group => {
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
