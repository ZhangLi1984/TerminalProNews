// 券商晨报导航模块 - 2026-05-13
const BROKER_NAV_CONFIG_0513 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '市场共识判断' },
      { id: 'b_sec2', label: '市场分歧点' },
      { id: 'b_sec3', label: '综合仓位建议' }
    ]
  },
  {
    title: '行业共识推荐',
    links: [
      { id: 'b_sec4', label: '推荐频次TOP10' },
      { id: 'b_sec5', label: 'AI算力/半导体（10家一致）' },
      { id: 'b_sec6', label: '资源品/能源安全（8家）' },
      { id: 'b_sec7', label: '券商/非银金融（7家）' }
    ]
  },
  {
    title: '金股汇总',
    links: [
      { id: 'b_sec8', label: '开源金股统计' },
      { id: 'b_sec9', label: '各券商金股组合' },
      { id: 'b_sec10', label: '重点个股交叉推荐' }
    ]
  },
  {
    title: '券商观点与策略',
    links: [
      { id: 'b_sec11', label: '10家券商核心观点' },
      { id: 'b_sec12', label: '买方配置策略' },
      { id: 'b_sec13', label: '短期交易机会' },
      { id: 'b_sec14', label: '风险提示与操作纪律' }
    ]
  }
];

function renderBrokerNav_0513() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0513.map(group => `
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
