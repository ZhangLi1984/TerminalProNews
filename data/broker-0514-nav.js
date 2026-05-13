// 券商晨报导航模块 - 2026-05-14
const BROKER_NAV_CONFIG_0514 = [
  {
    title: '市场研判',
    links: [
      { id: 'b_sec1', label: '大盘走势判断' },
      { id: 'b_sec2', label: '关键宏观数据' }
    ]
  },
  {
    title: '行业共识',
    links: [
      { id: 'b_sec3', label: '行业共识推荐 TOP 10' }
    ]
  },
  {
    title: '金股推荐',
    links: [
      { id: 'b_sec4', label: '多券商共识个股' },
      { id: 'b_sec5', label: '重点金股组合' }
    ]
  },
  {
    title: '券商观点',
    links: [
      { id: 'b_sec6', label: '11家券商核心观点' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'b_sec7', label: '五大投资方向' },
      { id: 'b_sec8', label: '风险提示与分歧' },
      { id: 'b_sec9', label: '仓位建议' }
    ]
  }
];

function renderBrokerNav_0514() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0514.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
