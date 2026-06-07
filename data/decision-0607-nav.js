// ==========================================
// 投资决策导航 - 2026-06-07
// ==========================================

const DECISION_NAV_CONFIG_0607 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大新闻',
    links: [
      { id: 'sec4', label: '美股AI科技链回调' },
      { id: 'sec5', label: 'SpaceX世纪IPO' },
      { id: 'sec6', label: '吴清发声+私募监管' }
    ]
  },
  {
    title: '新闻分类',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '新能源/储能' },
      { id: 'sec9', label: '政策/宏观' },
      { id: 'sec10', label: '地缘/大宗商品' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec11', label: 'AI/算力' },
      { id: 'sec12', label: '机器人' },
      { id: 'sec13', label: '商业航天' },
      { id: 'sec14', label: '玻璃基板' },
      { id: 'sec15', label: '创新药' }
    ]
  },
  {
    title: '二阶传导',
    links: [
      { id: 'sec16', label: '算力->电力重构' },
      { id: 'sec17', label: '中东->通胀' },
      { id: 'sec18', label: 'SpaceX->商业航天' },
      { id: 'sec19', label: '程序化交易监管' },
      { id: 'sec20', label: '存储芯片涨价' }
    ]
  },
  {
    title: '事件日历与风险',
    links: [
      { id: 'sec21', label: '明日关键事件' },
      { id: 'sec22', label: '逻辑证伪区' },
      { id: 'sec23', label: '尾部风险' }
    ]
  }
];

function renderDecisionNav_0607() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0607.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-500"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
