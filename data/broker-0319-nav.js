// ==========================================
// 券商晨报导航模块 - 2026 年 3 月 19 日
// ==========================================

const BROKER_NAV_CONFIG_0319 = [
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
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '券商宏观判断' },
      { id: 'b_sec6', label: '政策要点' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec7', label: '行业热度榜' },
      { id: 'b_sec8', label: 'AI/算力/电子' },
      { id: 'b_sec9', label: '银行/非银金融' },
      { id: 'b_sec10', label: '机械/工程机械' },
      { id: 'b_sec11', label: '房地产' },
      { id: 'b_sec12', label: '医药生物' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec13', label: '多券商推荐个股' },
      { id: 'b_sec14', label: '各券商金股汇总' }
    ]
  },
  {
    title: '投资主线',
    links: [
      { id: 'b_sec15', label: '五大投资主线' }
    ]
  }
];

function renderBrokerNav_0319() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0319.map(section => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">${section.title}</h4>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-red-500 mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
