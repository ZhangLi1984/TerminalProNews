const BROKER_NAV_CONFIG_0604 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '宏观大势判断' },
      { id: 'b_sec2', label: '市场情绪与资金面' },
      { id: 'b_sec3', label: '仓位与策略建议' }
    ]
  },
  {
    title: '行业共识',
    links: [
      { id: 'b_sec4', label: '行业共识推荐' },
      { id: 'b_sec5', label: '金股/个股共识' },
      { id: 'b_sec6', label: '6月金股组合' }
    ]
  },
  {
    title: '券商要点',
    links: [
      { id: 'b_sec7', label: '各券商晨报要点' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec8', label: '共同风险提示' },
      { id: 'b_sec9', label: '关键事件跟踪' },
      { id: 'b_sec10', label: '买方策略建议' }
    ]
  }
];

function renderBrokerNav_0604() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0604.map((group, gi) => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
            onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 flex-shrink-0 bg-transparent"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
