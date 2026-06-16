const STOCK_NAV_CONFIG_0617 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '评级分布' }] },
  { title: 'A级标的', links: [
    { id: 'sec2', label: '特宝生物' },
    { id: 'sec3', label: '西山科技' },
    { id: 'sec4', label: '依米康' },
    { id: 'sec5', label: '日联科技' },
    { id: 'sec6', label: '思源电气' }
  ]},
  { title: '评级汇总', links: [{ id: 'sec7', label: '完整列表' }] }
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
