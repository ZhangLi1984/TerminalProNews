// 个股研报导航模块 - 2026-05-12
const STOCK_NAV_CONFIG_0512 = [
  {
    title: 'S级标的（核心仓位）',
    links: [
      { id: 's_sec1', label: '亚钾国际 000893' },
      { id: 's_sec2', label: '欧科亿 688308' },
      { id: 's_sec3', label: '东方铁塔 002545' },
      { id: 's_sec4', label: '固德威 688390' }
    ]
  },
  {
    title: 'A级标的（主要仓位）',
    links: [
      { id: 's_sec5', label: '国轩高科 002074' },
      { id: 's_sec6', label: '康冠科技 001308' },
      { id: 's_sec7', label: '中化国际 600500' },
      { id: 's_sec8', label: '视源股份 002841' },
      { id: 's_sec9', label: '澜起科技 688008' },
      { id: 's_sec10', label: '中国重汽 000951' },
      { id: 's_sec11', label: '中国长城 000066' },
      { id: 's_sec12', label: '可孚医疗 301087' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec13', label: '完整评级汇总表' },
      { id: 's_sec14', label: '评级统计概览' }
    ]
  }
];

function renderStockNav_0512() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0512.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
