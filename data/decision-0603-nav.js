const DECISION_NAV_CONFIG_0603 = [
  { title: '核心导航', links: [
    { id: 'sec1', label: '核心摘要' },
    { id: 'sec2', label: '重大事件推演' },
    { id: 'sec3', label: '重要新闻催化' },
    { id: 'sec4', label: '热点赛道追踪' }
  ]},
  { title: '深度分析', links: [
    { id: 'sec5', label: '跨赛道传导' },
    { id: 'sec6', label: '明日关注' },
    { id: 'sec7', label: '风险提示' }
  ]}
];

function renderDecisionNav_0603() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0603.map(group => `
    <div>
      <h5 class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 px-1">${group.title}</h5>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg px-3 py-2 flex items-center transition-all" data-section="${link.id}" onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
