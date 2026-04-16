const BROKER_NAV_CONFIG_0416 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '3分钟速读' },
      { id: 'b_sec2', label: '市场共识' },
      { id: 'b_sec3', label: '热门赛道TOP5' },
      { id: 'b_sec4', label: '金股TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '10家券商策略汇总' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec6', label: '推荐次数统计' },
      { id: 'b_sec7', label: 'AI算力/半导体' },
      { id: 'b_sec8', label: '人形机器人' },
      { id: 'b_sec9', label: '创新药/ADC' },
      { id: 'b_sec10', label: '商业航天/军工' },
      { id: 'b_sec11', label: '电力设备/新能源' },
      { id: 'b_sec12', label: '银行/非银金融' },
      { id: 'b_sec13', label: '食品饮料/白酒' },
      { id: 'b_sec14', label: '农林牧渔' },
      { id: 'b_sec15', label: '传媒/AI应用' },
      { id: 'b_sec16', label: '化工/基础材料' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec17', label: '中银证券4月金股' },
      { id: 'b_sec18', label: '东兴证券4月金股' }
    ]
  },
  {
    title: '风险与事件',
    links: [
      { id: 'b_sec19', label: '主要分歧点' },
      { id: 'b_sec20', label: '共同风险提示' },
      { id: 'b_sec21', label: '本周重点事件' }
    ]
  }
];

function renderBrokerNav_0416() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0416.map((group, gi) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
            onclick="scrollToSection('broker', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
