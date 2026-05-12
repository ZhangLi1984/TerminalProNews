// 个股研报导航模块 - 2026-05-13
const STOCK_NAV_CONFIG_0513 = [
  {
    title: 'S级标的（核心仓位）',
    links: [
      { id: 's_sec1', label: '亚钾国际 000893' },
      { id: 's_sec2', label: '百济神州 688235' },
      { id: 's_sec3', label: '美的集团 000333' },
      { id: 's_sec4', label: '宁德时代 300750' },
      { id: 's_sec5', label: '东鹏饮料 605499' }
    ]
  },
  {
    title: 'A级标的（主要仓位）',
    links: [
      { id: 's_sec6', label: '中际旭创 300308' },
      { id: 's_sec7', label: '澜起科技 688008' },
      { id: 's_sec8', label: '泸州老窖 000568' },
      { id: 's_sec9', label: '国轩高科 002074' },
      { id: 's_sec10', label: '中国重汽 000951' },
      { id: 's_sec11', label: '昆仑万维 300418' },
      { id: 's_sec12', label: '兆易创新 603986' },
      { id: 's_sec13', label: '上海电气 601727' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec14', label: '完整评级汇总表' },
      { id: 's_sec15', label: '评级统计概览' }
    ]
  }
];

function renderStockNav_0513() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0513.map(group => `
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
