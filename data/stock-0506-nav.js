// Stock Nav Module for 2026-05-06
const STOCK_NAV_CONFIG_0506 = [
  {
    title: '评级汇总',
    links: [
      { id: 's_sec1', label: '评级总览与统计' },
      { id: 's_sec2', label: '买入评级标的（55+）' },
      { id: 's_sec3', label: '增持评级标的' }
    ]
  },
  {
    title: '核心赛道',
    links: [
      { id: 's_sec4', label: 'AI算力/半导体' },
      { id: 's_sec5', label: '储能/新能源' },
      { id: 's_sec6', label: '煤炭/能源资源' },
      { id: 's_sec7', label: '食品饮料/消费' }
    ]
  },
  {
    title: '重点标的',
    links: [
      { id: 's_sec8', label: '券商金股推荐' },
      { id: 's_sec9', label: '多券商交叉推荐' }
    ]
  }
];

function renderStockNav_0506() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0506.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('stock','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
