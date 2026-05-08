// ==========================================
// 券商晨报导航配置 - 2026-05-09
// ==========================================

const BROKER_NAV_CONFIG_0509 = [
  { title: '宏观共识', links: [
    { id: 'b_sec1', label: '大盘走势共识' },
    { id: 'b_sec2', label: '核心宏观信号' }
  ]},
  { title: '行业排行', links: [
    { id: 'b_sec3', label: 'Top 10 行业推荐' }
  ]},
  { title: '金股榜单', links: [
    { id: 'b_sec4', label: '金股共识' },
    { id: 'b_sec5', label: '各券商金股组合' }
  ]},
  { title: '券商观点', links: [
    { id: 'b_sec6', label: '十大券商核心观点' }
  ]},
  { title: '买方策略', links: [
    { id: 'b_sec7', label: '综合共识与仓位建议' },
    { id: 'b_sec8', label: '事件日历' }
  ]}
];

function renderBrokerNav_0509() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
