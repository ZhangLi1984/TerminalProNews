const BROKER_NAV_CONFIG_0621 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '金股TOP10' }
    ]
  },
  {
    title: '宏观策略汇总',
    links: [
      { id: 'b_sec3', label: '券商观点' }
    ]
  },
  {
    title: '热门行业',
    links: [
      { id: 'b_sec4', label: '推荐榜TOP10' }
    ]
  },
  {
    title: '行业深度观点',
    links: [
      { id: 'b_sec5', label: 'AI/算力/半导体' },
      { id: 'b_sec6', label: '电子/光通信' },
      { id: 'b_sec7', label: '储能/新能源' },
      { id: 'b_sec8', label: '有色/煤炭' },
      { id: 'b_sec9', label: '医药生物' },
      { id: 'b_sec10', label: '交运/其他' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec11', label: 'S级重点' },
      { id: 'b_sec12', label: 'A级关注' },
      { id: 'b_sec13', label: '各家金股' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec14', label: '分歧与风险' }
    ]
  }
];

function renderBrokerNav_0621() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0621.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
