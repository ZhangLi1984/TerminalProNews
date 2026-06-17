const STOCK_NAV_CONFIG_0617 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '评级分布' }] },
  { title: 'S级标的', links: [
    { id: 'sec2', label: '云南锗业' },
    { id: 'sec3', label: '思源电气' },
    { id: 'sec4', label: '南华期货' },
    { id: 'sec5', label: '联动科技' },
    { id: 'sec6', label: '茂莱光学' },
    { id: 'sec7', label: '迈普医学' },
    { id: 'sec8', label: '万通发展' },
    { id: 'sec9', label: '海博思创' },
    { id: 'sec10', label: '威腾电气' },
    { id: 'sec11', label: '火炬电子' },
    { id: 'sec12', label: '德科立' }
  ]},
  { title: 'A级标的精选', links: [
    { id: 'sec13', label: '华锡有色' },
    { id: 'sec14', label: '鼎龙股份' },
    { id: 'sec15', label: '中微公司' },
    { id: 'sec16', label: '亿纬锂能' },
    { id: 'sec17', label: '长川科技' },
    { id: 'sec18', label: '芯原股份' },
    { id: 'sec19', label: '其他精选' }
  ]},
  { title: '评级汇总', links: [{ id: 'sec20', label: '完整列表' }] }
];
function renderStockNav_0617() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
