// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-26
// ==========================================
const BROKER_NAV_CONFIG_0526 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '核心事件与市场表现' },
      { id: 'b_sec2', label: '十大券商策略共识' }
    ]
  },
  {
    title: '行业与主题',
    links: [
      { id: 'b_sec3', label: '半导体/AI算力产业链' },
      { id: 'b_sec4', label: '商业航天/人形机器人' },
      { id: 'b_sec5', label: '能源/锂电/生猪' }
    ]
  },
  {
    title: '策略与配置',
    links: [
      { id: 'b_sec6', label: '买方策略建议' },
      { id: 'b_sec7', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0526() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
