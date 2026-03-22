// ==========================================
// Broker Nav Config: 2026-03-22
// ==========================================

const BROKER_NAV_CONFIG_0322 = [
  {
    title: '核心共识',
    links: [
      { id: 'sec1', label: '市场共识判断' },
      { id: 'sec2', label: '仓位建议' },
      { id: 'sec3', label: '三大积极信号' }
    ]
  },
  {
    title: '热门行业',
    links: [
      { id: 'sec4', label: '行业推荐 TOP15' },
      { id: 'sec5', label: 'AI/算力' },
      { id: 'sec6', label: '半导体' },
      { id: 'sec7', label: '白酒' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'sec8', label: '券商金股汇总' },
      { id: 'sec9', label: '多重推荐 TOP15' }
    ]
  },
  {
    title: '券商精要',
    links: [
      { id: 'sec10', label: '东兴证券' },
      { id: 'sec11', label: '英大证券' },
      { id: 'sec12', label: '中银证券' },
      { id: 'sec13', label: '开源证券' },
      { id: 'sec14', label: '国信证券' },
      { id: 'sec15', label: '中信证券' },
      { id: 'sec16', label: '东吴证券' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'sec17', label: '总体策略' },
      { id: 'sec18', label: '三大主线' },
      { id: 'sec19', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0322() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-cyan-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#broker-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
