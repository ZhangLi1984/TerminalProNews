const DECISION_NAV_CONFIG_0614 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '八大核心信号' }] },
  { title: '重大新闻详解', links: [
    { id: 'sec2', label: 'SpaceX 上市' },
    { id: 'sec3', label: '美伊协议' },
    { id: 'sec4', label: 'AI 监管' },
    { id: 'sec5', label: 'AI 硬件链' },
    { id: 'sec6', label: '储能与锂价' },
    { id: 'sec7', label: '宏观信贷' },
    { id: 'sec8', label: '全球央行' },
    { id: 'sec9', label: '金融监管' }
  ]},
  { title: '新闻分类', links: [{ id: 'sec10', label: '重要新闻分类' }] },
  { title: '热点赛道', links: [{ id: 'sec11', label: '八大热点赛道' }] },
  { title: '跨赛道传导', links: [{ id: 'sec12', label: '七条传导链' }] },
  { title: '明日关注', links: [{ id: 'sec13', label: '五大关注点' }] },
  { title: '风险提示', links: [{ id: 'sec14', label: '八大风险' }] }
];

function renderDecisionNav_0614() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0614.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); window.scrollTo({ top: document.getElementById('${link.id}')?.offsetTop - 80, behavior: 'smooth' })"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 text-slate-700 hover:bg-slate-100">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
