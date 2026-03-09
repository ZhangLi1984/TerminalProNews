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
      { id: 'b_sec5', label: '宏观策略汇总' },
      { id: 'b_sec6', label: '宏观经济共识' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec7', label: '热门行业推荐榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec8', label: '中银证券 3 月金股' },
      { id: 'b_sec9', label: '开源证券重点推荐' },
      { id: 'b_sec10', label: '华源证券重点推荐' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec11', label: 'AI/算力/通信' },
      { id: 'b_sec12', label: '电子/半导体' },
      { id: 'b_sec13', label: '机器人/具身智能' },
      { id: 'b_sec14', label: '基础化工/有色金属' },
      { id: 'b_sec15', label: '房地产' }
    ]
  },
  {
    title: '风险与数据',
    links: [
      { id: 'b_sec16', label: '风险提示与分歧' },
      { id: 'b_sec17', label: '市场数据附录' }
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
