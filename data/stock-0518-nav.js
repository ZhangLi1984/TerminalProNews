const STOCK_NAV_CONFIG_0518 = [
  { title: 'A级标的精选', links: [
    { id: 'sec1', label: '中金岭南 (000060)' },
    { id: 'sec2', label: '万辰集团 (300972)' },
    { id: 'sec3', label: '山金国际 (000975)' },
    { id: 'sec4', label: '洛阳钼业 (603993)' },
    { id: 'sec5', label: '呈和科技 (688625)' },
    { id: 'sec6', label: '兴福电子 (688545)' },
    { id: 'sec7', label: '中策橡胶 (603049)' },
    { id: 'sec8', label: '晶晨股份 (688099)' },
  ]},
  { title: 'B级标的', links: [
    { id: 'sec9', label: 'B级标的概述（13只）' },
  ]},
  { title: '评级汇总', links: [
    { id: 'sec10', label: '完整评级汇总表（100只）' },
    { id: 'sec11', label: '评级体系说明' },
  ]},
];

function renderStockNav_0518() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  let html = '';
  STOCK_NAV_CONFIG_0518.forEach(group => {
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
