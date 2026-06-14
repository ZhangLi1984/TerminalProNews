const DECISION_NAV_CONFIG_0614 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '八大核心信号' }] },
  { title: '重大新闻详解', links: [
    { id: 'sec2', label: 'SpaceX 上市' },
    { id: 'sec3', label: '美伊协议' },
    { id: 'sec4', label: 'AI 监管封禁' },
    { id: 'sec5', label: 'AI 硬件链景气' },
    { id: 'sec6', label: '储能与锂价' },
    { id: 'sec7', label: '宏观信贷' },
    { id: 'sec8', label: '全球央行分化' },
    { id: 'sec9', label: '金融监管' }
  ]},
  { title: '热点赛道追踪', links: [{ id: 'sec10', label: '八大热门赛道' }] },
  { title: '跨赛道传导分析', links: [{ id: 'sec11', label: '七条传导链' }] },
  { title: '明日关注与风险', links: [{ id: 'sec12', label: '五大变量+八项风险' }] }
];

function renderDecisionNav_0614() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0614.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); window.scrollTo({ top: document.getElementById('${link.id}')?.offsetTop - 80, behavior: 'smooth' })"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-3 transition-colors bg-transparent group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
