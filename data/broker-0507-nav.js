// Broker Nav Module for 2026-05-07
const BROKER_NAV_CONFIG_0507 = [
  {
    title: '市场共识',
    links: [
      { id: 'b_sec1', label: '宏观判断与市场情绪' },
      { id: 'b_sec2', label: '经济数据核心信号' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec3', label: '行业推荐频次统计' },
      { id: 'b_sec4', label: '金股组合汇总' }
    ]
  },
  {
    title: '风险与博弈',
    links: [
      { id: 'b_sec5', label: '风险提示共识' },
      { id: 'b_sec6', label: '二阶博弈与配置建议' }
    ]
  }
];

function renderBrokerNav_0507() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0507.map(group => `
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
