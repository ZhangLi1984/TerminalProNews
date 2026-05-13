// 投资决策内参导航模块 - 2026-05-14
const DECISION_NAV_CONFIG_0514 = [
  {
    title: '核心摘要',
    links: [
      { id: 'd_sec1', label: '市场总览与核心判断' },
      { id: 'd_sec2', label: '三大关键推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'd_sec3', label: '特朗普访华+黄仁勋随行' },
      { id: 'd_sec4', label: '美国通胀爆表+沃什就任' },
      { id: 'd_sec5', label: '三星罢工+存储芯片短缺' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'd_sec6', label: 'AI/算力/半导体' },
      { id: 'd_sec7', label: '新能源/电力/算电协同' },
      { id: 'd_sec8', label: '大宗商品/能源' },
      { id: 'd_sec9', label: '宏观/政策' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'd_sec10', label: 'AI算力硬件' },
      { id: 'd_sec11', label: '算电协同' },
      { id: 'd_sec12', label: '存储芯片' },
      { id: 'd_sec13', label: '商业航天/人形机器人/AI制药' }
    ]
  },
  {
    title: '二阶思维',
    links: [
      { id: 'd_sec14', label: '五条跨赛道传导链' }
    ]
  },
  {
    title: '策略与风控',
    links: [
      { id: 'd_sec15', label: '明日关注清单' },
      { id: 'd_sec16', label: '风险提示与证伪区' },
      { id: 'd_sec17', label: '传闻预警与避雷' }
    ]
  }
];

function renderDecisionNav_0514() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0514.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
