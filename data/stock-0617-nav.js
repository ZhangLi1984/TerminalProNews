const STOCK_NAV_CONFIG_0617 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '概览' }
    ]
  },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '云南锗业' },
      { id: 's_sec3', label: '思源电气' },
      { id: 's_sec4', label: '南华期货' },
      { id: 's_sec5', label: '联动科技' },
      { id: 's_sec6', label: '茂莱光学' },
      { id: 's_sec7', label: '迈普医学' },
      { id: 's_sec8', label: '万通发展' },
      { id: 's_sec9', label: '海博思创' },
      { id: 's_sec10', label: '威腾电气' },
      { id: 's_sec11', label: '火炬电子' },
      { id: 's_sec12', label: '德科立' }
    ]
  },
  {
    title: 'A级标的精选',
    links: [
      { id: 's_sec13', label: '重点A级' },
      { id: 's_sec14', label: '其他A级' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec15', label: '完整表格' }
    ]
  }
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
