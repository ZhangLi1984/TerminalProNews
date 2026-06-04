// ==========================================
// 券商晨报导航 - 2026年6月4日
// ==========================================
const BROKER_NAV_CONFIG_0604 = [
  { title: '市场总览', links: [
    { id: 'b_sec1', label: '宏观大势判断' },
    { id: 'b_sec2', label: '市场情绪与资金面' },
  ]},
  { title: '行业共识', links: [
    { id: 'b_sec3', label: '行业共识推荐' },
    { id: 'b_sec4', label: '金股/个股共识' },
  ]},
  { title: '券商要点', links: [
    { id: 'b_sec5', label: '各券商晨报要点' },
  ]},
  { title: '风险提示', links: [
    { id: 'b_sec6', label: '共同风险提示' },
    { id: 'b_sec7', label: '关键事件跟踪' },
  ]},
  { title: '买方策略', links: [
    { id: 'b_sec8', label: '综合投资建议' },
  ]},
];

function renderBrokerNav_0604() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0604.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
