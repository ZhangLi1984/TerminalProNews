// ==========================================
// 券商晨报模块 - 导航配置 2026-03-24
// ==========================================

const BROKER_NAV_CONFIG_0324 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '热门赛道 TOP10' },
      { id: 'b_sec3', label: '金股 TOP15' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec4', label: '国内经济数据' },
      { id: 'b_sec5', label: '海外市场动态' }
    ]
  },
  {
    title: '行业深度',
    links: [
      { id: 'b_sec6', label: 'AI/算力' },
      { id: 'b_sec7', label: '半导体' },
      { id: 'b_sec8', label: '电子' },
      { id: 'b_sec9', label: '通信' },
      { id: 'b_sec10', label: '银行' },
      { id: 'b_sec11', label: '非银金融' },
      { id: 'b_sec12', label: '有色' },
      { id: 'b_sec13', label: '石油石化' }
    ]
  },
  {
    title: '投资组合',
    links: [
      { id: 'b_sec14', label: '券商金股组合' },
      { id: 'b_sec15', label: '投资策略建议' }
    ]
  }
];

function renderBrokerNav_0324() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  const html = BROKER_NAV_CONFIG_0324.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}
