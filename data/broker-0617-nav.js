const BROKER_NAV_CONFIG_0617 = [
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
      { id: 'b_sec5', label: 'AI/算力' },
      { id: 'b_sec6', label: '半导体' },
      { id: 'b_sec7', label: '医药生物' },
      { id: 'b_sec8', label: '新能源' },
      { id: 'b_sec9', label: '其他行业' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec10', label: '分歧与风险' }
    ]
  }
];

function renderBrokerNav_0617() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
