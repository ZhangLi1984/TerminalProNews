// ==========================================
// 投资决策内参 - 导航配置 2026-04-09
// ==========================================

const DECISION_NAV_CONFIG_0409 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与核心主线' },
      { id: 'sec2', label: '二阶思维传导链' },
      { id: 'sec3', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec4', label: '美伊停火深度分析' },
      { id: 'sec5', label: 'A股百点长阳研判' }
    ]
  },
  {
    title: '行业催化追踪',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/储能/电力' },
      { id: 'sec8', label: '医药/生物' },
      { id: 'sec9', label: '金融/政策' }
    ]
  },
  {
    title: '赛道与传导',
    links: [
      { id: 'sec10', label: '热点赛道评级表' },
      { id: 'sec11', label: '跨赛道二阶传导' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec12', label: '宏观数据/事件' },
      { id: 'sec13', label: '个股/板块' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec14', label: '逻辑证伪区' },
      { id: 'sec15', label: '传闻预警与个股风险' }
    ]
  }
];

function renderDecisionNav_0409() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0409.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
