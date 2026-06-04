// ==========================================
// 投资决策导航配置 - 2026年6月4日
// ==========================================
const DECISION_NAV_CONFIG_0604 = [
  { title: '核心主线', links: [
    { id: 'sec1', label: '核心摘要与全局叙事' },
  ]},
  { title: '重大事件推演', links: [
    { id: 'sec2', label: '美伊谈判推进' },
    { id: 'sec3', label: '央行流动性操作' },
  ]},
  { title: '行业催化', links: [
    { id: 'sec4', label: 'AI与半导体' },
    { id: 'sec5', label: '中东地缘与能源' },
    { id: 'sec6', label: '黄金与加密分化' },
  ]},
  { title: '政策与资金', links: [
    { id: 'sec7', label: '产业政策与宏观' },
    { id: 'sec8', label: '资金流向与操作' },
  ]},
];

function renderDecisionNav_0604() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0604.map(group => `
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
