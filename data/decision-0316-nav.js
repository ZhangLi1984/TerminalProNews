// truncated=================================
// 投资决策内参导航模块 - 2026 年 3 月 16 日
// ==========================================

const DECISION_NAV_CONFIG_0316 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '美伊冲突升级' },
      { id: 'sec4', label: '315 晚会曝光' },
      { id: 'sec5', label: '十五五规划发布' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/电力设备' },
      { id: 'sec8', label: '政策宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI 与机器人' },
      { id: 'sec10', label: '半导体' },
      { id: 'sec11', label: '新能源' },
      { id: 'sec12', label: '低空经济/商业航天' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec13', label: '重要数据/事件' },
      { id: 'sec14', label: '财报披露' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec15', label: '逻辑证伪与传闻预警' },
      { id: 'sec16', label: '315 涉事风险清单' }
    ]
  }
];

function renderDecisionNav_0316() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('decision', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
