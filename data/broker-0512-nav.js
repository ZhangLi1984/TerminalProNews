// 券商晨报导航模块 - 2026-05-12
const BROKER_NAV_CONFIG_0512 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '核心指数表现' },
      { id: 'b_sec2', label: '宏观共识判断' },
      { id: 'b_sec3', label: '关键宏观数据' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec4', label: 'AI算力/半导体（最高共识）' },
      { id: 'b_sec5', label: '新能源/储能' },
      { id: 'b_sec6', label: '商业航天/医药生物' },
      { id: 'b_sec7', label: '行业推荐TOP10' }
    ]
  },
  {
    title: '个股金股',
    links: [
      { id: 'b_sec8', label: '高频推荐TOP15' },
      { id: 'b_sec9', label: '各券商金股组合' }
    ]
  },
  {
    title: '券商观点',
    links: [
      { id: 'b_sec10', label: '11家券商核心观点' },
      { id: 'b_sec11', label: '买方策略建议' },
      { id: 'b_sec12', label: '本周重点关注' }
    ]
  }
];

function renderBrokerNav_0512() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0512.map(group => `
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
