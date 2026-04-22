// ==========================================
// 券商晨报导航模块 - 2026-04-23
// ==========================================

const BROKER_NAV_CONFIG_0423 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '大盘走势回顾' },
      { id: 'b_sec2', label: '市场情绪总评' }
    ]
  },
  {
    title: '行业共识',
    links: [
      { id: 'b_sec3', label: '行业推荐统计' },
      { id: 'b_sec4', label: '电子/半导体' },
      { id: 'b_sec5', label: '电力/公用事业' },
      { id: 'b_sec6', label: '煤炭' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec7', label: '多券商共识金股' },
      { id: 'b_sec8', label: '4月金股组合' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec9', label: '仓位与行业配置' },
      { id: 'b_sec10', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0423() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0423.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200 truncate flex items-center">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
