// ==========================================
// 投资决策内参导航模块 - 2026 年 3 月 8 日
// ==========================================

const DECISION_NAV_CONFIG_0308 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '中东战事升级' },
      { id: 'sec5', label: '两会政策定调' },
      { id: 'sec6', label: '美国滞胀交易' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '新能源/汽车' },
      { id: 'sec9', label: '政策宏观' },
      { id: 'sec10', label: '资源/周期' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec11', label: 'AI/机器人' },
      { id: 'sec12', label: '新能源' },
      { id: 'sec13', label: '半导体' },
      { id: 'sec14', label: '商业航天' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec15', label: '跨赛道传导' },
      { id: 'sec16', label: '明日关注' },
      { id: 'sec17', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0308() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0308.map(section => `
    <div>
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-2">${section.title}</div>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors text-left" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
