// truncated报导航配置 - 2026-03-13
const BROKER_NAV_CONFIG_0313 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '热门赛道 TOP5' },
      { id: 'b_sec3', label: '金股 TOP10' }
    ]
  },
  {
    title: '策略观点',
    links: [
      { id: 'b_sec4', label: '宏观策略汇总' },
      { id: 'b_sec5', label: '热门行业推荐' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec6', label: '券商金股组合' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec7', label: 'AI 算力/光通信' },
      { id: 'b_sec8', label: '化工/农化' },
      { id: 'b_sec9', label: '电力/公用事业' },
      { id: 'b_sec10', label: '医药生物' },
      { id: 'b_sec11', label: '智能驾驶' },
      { id: 'b_sec12', label: '煤炭/油气' }
    ]
  },
  {
    title: '风险与关注',
    links: [
      { id: 'b_sec13', label: '风险提示与分歧' },
      { id: 'b_sec14', label: '今日重点关注' }
    ]
  }
];

function renderBrokerNav_0313() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0313.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-between"
            data-section="${link.id}"
            onclick="scrollToSection('broker', '${link.id}')"
          >
            <span>${link.label}</span>
            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}