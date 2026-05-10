// ==========================================
// 投资决策内参 - 导航配置 (2026-05-11)
// ==========================================

const DECISION_NAV_CONFIG_0511 = [
  { title: '市场核心判断', links: [
    { id: 'd_sec1', label: '市场总览' },
    { id: 'd_sec2', label: '成交与资金面' },
    { id: 'd_sec3', label: '风格分化与预期差' },
  ]},
  { title: '核心赛道研判', links: [
    { id: 'd_sec4', label: 'AI算力与半导体' },
    { id: 'd_sec5', label: '新能源与储能' },
    { id: 'd_sec6', label: '周期涨价链' },
    { id: 'd_sec7', label: '白酒与消费底部' },
  ]},
  { title: '风险与策略', links: [
    { id: 'd_sec8', label: '地缘与外部风险' },
    { id: 'd_sec9', label: '配置建议' },
  ]},
];

function renderDecisionNav_0511() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0511.map((group, gi) => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision','${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors group-hover:bg-red-500"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
