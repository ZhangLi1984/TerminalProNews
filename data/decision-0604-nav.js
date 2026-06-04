const DECISION_NAV_CONFIG_0604 = [
  { title: '全局叙事', links: [{ id: 'd_sec1', label: '核心摘要与主线' }] },
  { title: '重大事件', links: [{ id: 'd_sec2', label: 'SpaceX上市' }, { id: 'd_sec3', label: 'MLCC超级周期' }, { id: 'd_sec4', label: '美伊谈判进展' }, { id: 'd_sec5', label: '黄金新高与油价回落' }] },
  { title: '行业催化', links: [{ id: 'd_sec6', label: '科技/AI/半导体' }, { id: 'd_sec7', label: '储能/电力/新能源' }, { id: 'd_sec8', label: '政策/宏观' }] },
  { title: '资金博弈', links: [{ id: 'd_sec9', label: '资金流向与市场特征' }] },
  { title: '仓位策略', links: [{ id: 'd_sec10', label: '攻守配置方案' }] }
];

function renderDecisionNav_0604() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0604.map(cat => `
    <div class="mb-5">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${cat.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${cat.links.map(l => `<button class="nav-btn text-sm px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all" data-section="${l.id}" onclick="updateActiveNav('${l.id}')">${l.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
  updateActiveNav('d_sec1');
}
