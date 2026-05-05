// Broker Nav Module for 2026-05-06
const BROKER_NAV_CONFIG_0506 = [
  {
    title: '市场共识',
    links: [
      { id: 'b_sec1', label: '整体情绪与核心共识' },
      { id: 'b_sec2', label: '主要分歧点' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec3', label: '行业推荐热度TOP 10' },
      { id: 'b_sec4', label: '个股交叉推荐池' }
    ]
  },
  {
    title: '券商观点',
    links: [
      { id: 'b_sec5', label: '各券商核心观点速览' }
    ]
  },
  {
    title: '操作建议',
    links: [
      { id: 'b_sec6', label: '买方操作策略' },
      { id: 'b_sec7', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0506() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0506.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('broker','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
