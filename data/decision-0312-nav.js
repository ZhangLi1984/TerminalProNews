// truncated=================================
// 投资决策内参导航 - 2026-03-12
// ==========================================

const DECISION_NAV_CONFIG_0312 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '美伊冲突升级' },
      { id: 'sec4', label: 'AI 智能体合规风暴' },
      { id: 'sec5', label: '卫星通信投资浪潮' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/电力' },
      { id: 'sec8', label: '化工/材料' },
      { id: 'sec9', label: '政策/宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec10', label: 'AI/机器人' },
      { id: 'sec11', label: '半导体/存储' },
      { id: 'sec12', label: '新能源/储能' },
      { id: 'sec13', label: '卫星通信/商业航天' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec14', label: '宏观数据/事件' },
      { id: 'sec15', label: '风险提示与证伪区' }
    ]
  }
];

function renderDecisionNav_0312() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('decision', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
