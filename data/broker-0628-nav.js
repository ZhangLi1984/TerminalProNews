// ==========================================
// Broker Nav Config: 2026-06-28
// ==========================================

const BROKER_NAV_CONFIG_0628 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '市场共识与仓位建议' },
      { id: 'sec2', label: '热门赛道 TOP5' },
      { id: 'sec3', label: '金股 TOP10' }
    ]
  },
  {
    title: '详细观点',
    links: [
      { id: 'sec4', label: '宏观策略汇总' },
      { id: 'sec5', label: 'AI/半导体/算力' },
      { id: 'sec6', label: '电动车/锂电储能' },
      { id: 'sec7', label: '非银金融/券商' },
      { id: 'sec8', label: '风险提示与分歧点' }
    ]
  }
];

function renderBrokerNav_0628() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
