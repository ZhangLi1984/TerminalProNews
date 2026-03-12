// ==========================================
// 券商晨报导航 - 2026-03-12
// ==========================================

const BROKER_NAV_CONFIG_0312 = [
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
      { id: 'b_sec5', label: '券商策略汇总' },
      { id: 'b_sec6', label: '宏观共识判断' }
    ]
  },
  {
    title: '行业聚焦',
    links: [
      { id: 'b_sec7', label: '热门行业排行' },
      { id: 'b_sec8', label: 'AI/算力' },
      { id: 'b_sec9', label: '半导体' },
      { id: 'b_sec10', label: '医药生物' },
      { id: 'b_sec11', label: '电力设备/电网' },
      { id: 'b_sec12', label: '商业航天/军工' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec13', label: '券商金股汇总' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'b_sec14', label: '哑铃型配置' },
      { id: 'b_sec15', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0312() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('broker', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
