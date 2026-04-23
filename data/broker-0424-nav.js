// ==========================================
// 券商晨报导航配置 - 2026 年 4 月 24 日
// ==========================================

const BROKER_NAV_CONFIG_0424 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场核心观点' },
      { id: 'b_sec2', label: '行业推荐共识榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec3', label: '公募 Q1 重仓股' },
      { id: 'b_sec4', label: '券商金股推荐' }
    ]
  },
  {
    title: '券商精要',
    links: [
      { id: 'b_sec5', label: '华源证券' },
      { id: 'b_sec6', label: '开源证券' },
      { id: 'b_sec7', label: '中银证券' },
      { id: 'b_sec8', label: '东兴证券' }
    ]
  },
  {
    title: '券商精要（续）',
    links: [
      { id: 'b_sec9', label: '国信证券' },
      { id: 'b_sec10', label: '山西证券' },
      { id: 'b_sec11', label: '东海证券' },
      { id: 'b_sec12', label: '其他券商' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec13', label: '六大风险提示' }
    ]
  }
];

function renderBrokerNav_0424() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0424.map(section => `
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
