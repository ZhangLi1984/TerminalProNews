// ==========================================
// 券商晨报导航模块 - 2026 年 4 月 10 日
// ==========================================

const BROKER_NAV_CONFIG_0410 = [
  {
    title: '晨报摘要',
    links: [
      { id: 'b_sec1', label: '核心摘要' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道 TOP5' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '券商策略汇总' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec6', label: '行业推荐榜 TOP8' },
      { id: 'b_sec7', label: '半导体/AI算力' },
      { id: 'b_sec8', label: '光通信/CPO' },
      { id: 'b_sec9', label: '贵金属/有色' },
      { id: 'b_sec10', label: '创新药/医药' },
      { id: 'b_sec11', label: '高股息/安全类' },
      { id: 'b_sec12', label: '机器人/储能/消费' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec13', label: '东兴4月金股' },
      { id: 'b_sec14', label: '中银4月金股' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec15', label: '操作建议汇总' },
      { id: 'b_sec16', label: '风险提示与分歧' }
    ]
  }
];

function renderBrokerNav_0410() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0410.map((section) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('broker', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
