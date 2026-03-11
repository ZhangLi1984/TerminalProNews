// ==========================================
// 券商晨报导航配置 - 2026 年 3 月 11 日
// ==========================================

const BROKER_NAV_CONFIG_0311 = [
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
      { id: 'b_sec6', label: '热门行业推荐榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec7', label: '多家推荐个股' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec8', label: 'AI/算力/光通信' },
      { id: 'b_sec9', label: '石油石化/煤炭' },
      { id: 'b_sec10', label: '半导体/电子' },
      { id: 'b_sec11', label: '银行' },
      { id: 'b_sec12', label: '交通运输/航运' },
      { id: 'b_sec13', label: '医药生物/CXO' },
      { id: 'b_sec14', label: '电力设备/电网' }
    ]
  },
  {
    title: '风险与附录',
    links: [
      { id: 'b_sec15', label: '风险提示与分歧' },
      { id: 'b_sec16', label: '3 月金股汇总' }
    ]
  }
];

function renderBrokerNav_0311() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0311.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
