// ==========================================
// 投资决策内参导航配置 - 2026 年 3 月 9 日
// ==========================================

const DECISION_NAV_CONFIG_0309 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '中东战事升级' },
      { id: 'sec5', label: '国内通胀数据' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '机器人/人工智能' },
      { id: 'sec8', label: '新能源/绿色经济' },
      { id: 'sec9', label: '政策/宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec10', label: 'AI/算力赛道' },
      { id: 'sec11', label: '机器人赛道' },
      { id: 'sec12', label: '半导体赛道' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec13', label: '跨赛道传导' },
      { id: 'sec14', label: '明日关注' },
      { id: 'sec15', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0309() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0309.map(group => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${group.title}</div>
      ${group.links.map(link => `
        <button class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors" data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
          <span>${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
