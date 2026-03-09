const BROKER_NAV_CONFIG_0309 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道 TOP5' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '策略汇总',
    links: [
      { id: 'b_sec5', label: '宏观策略汇总' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec6', label: '热门行业推荐榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec7', label: '多家推荐个股' },
      { id: 'b_sec8', label: '各券商金股组合' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec9', label: 'AI/算力/云计算' },
      { id: 'b_sec10', label: '半导体/集成电路' },
      { id: 'b_sec11', label: '人形机器人' },
      { id: 'b_sec12', label: '石油石化/能源' },
      { id: 'b_sec13', label: '低空经济/商业航天' },
      { id: 'b_sec14', label: '光纤/光通信' },
      { id: 'b_sec15', label: '锂电/储能' },
      { id: 'b_sec16', label: '医药生物/CXO' },
      { id: 'b_sec17', label: '食品饮料/消费' }
    ]
  },
  {
    title: '风险与要闻',
    links: [
      { id: 'b_sec18', label: '风险提示与分歧' },
      { id: 'b_sec19', label: '重点财经要闻' }
    ]
  }
];

function renderBrokerNav_0309() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0309.map(section => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${section.title}</h3>
      ${section.links.map(link => `
        <a href="#${link.id}"
           class="nav-btn flex items-center w-full px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
           data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5"></div>
          ${link.label}
        </a>
      `).join('')}
    </div>
  `).join('');
}
