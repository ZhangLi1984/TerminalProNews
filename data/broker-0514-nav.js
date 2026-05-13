// ==========================================
// 券商晨报导航模块 - 2026-05-14
// ==========================================

const BROKER_NAV_CONFIG_0514 = [
  { title: '市场观点', links: [
    { id: 'b_sec1', label: '大盘走势判断' }
  ]},
  { title: '共识推荐', links: [
    { id: 'b_sec2', label: '行业共识推荐TOP10' },
    { id: 'b_sec3', label: '金股/个股共识' }
  ]},
  { title: '券商观点', links: [
    { id: 'b_sec4', label: '11家券商核心观点' }
  ]},
  { title: '买方策略', links: [
    { id: 'b_sec5', label: '投资方向与风险提示' },
    { id: 'b_sec6', label: '仓位建议' }
  ]}
];

function renderBrokerNav_0514() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0514.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
