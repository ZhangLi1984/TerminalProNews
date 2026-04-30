// truncated=================================
// 券商晨报导航模块 - 2026-03-17
// ==========================================

const BROKER_NAV_CONFIG_0317 = [
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
      { id: 'b_sec5', label: '券商策略汇总' }
    ]
  },
  {
    title: '行业排名',
    links: [
      { id: 'b_sec6', label: '行业推荐榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec7', label: '多家推荐个股' },
      { id: 'b_sec8', label: '中银证券金股' },
      { id: 'b_sec9', label: '东兴证券金股' }
    ]
  },
  {
    title: '详细观点',
    links: [
      { id: 'b_sec10', label: 'AI/算力' },
      { id: 'b_sec11', label: '半导体' },
      { id: 'b_sec12', label: '通信设备' },
      { id: 'b_sec13', label: '新能源' },
      { id: 'b_sec14', label: '煤炭/高股息' },
      { id: 'b_sec15', label: '消费/医药' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'b_sec16', label: '配置建议' },
      { id: 'b_sec17', label: '重点关注' },
      { id: 'b_sec18', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0317() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
