const DECISION_NAV_CONFIG_0603 = [
  { title: '全局叙事', links: [{ id: 'd_sec1', label: '核心摘要与主线' }] },
  { title: '重大事件推演', links: [{ id: 'd_sec2', label: '光通信超级周期' }, { id: 'd_sec3', label: '美伊冲突升级' }, { id: 'd_sec4', label: '三巨头IPO潮' }] },
  { title: '行业催化', links: [{ id: 'd_sec5', label: '科技/AI/半导体' }, { id: 'd_sec6', label: '新能源/电力' }, { id: 'd_sec7', label: '政策/宏观' }] },
  { title: '热点赛道', links: [{ id: 'd_sec8', label: '五大赛道追踪' }] },
  { title: '二阶传导', links: [{ id: 'd_sec9', label: '五大传导链' }] },
  { title: '风险提示', links: [{ id: 'd_sec10', label: '证伪区与避雷针' }] }
];

function renderDecisionNav_0603() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0603.map(cat => `
    <div class="mb-5">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${cat.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${cat.links.map(l => `<button class="nav-btn text-sm px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all" data-section="${l.id}" onclick="updateActiveNav('${l.id}')">${l.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
  updateActiveNav('d_sec1');
}
