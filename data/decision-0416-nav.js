// ==========================================
// 投资决策内参导航模块 - 2026-04-16
// ==========================================

const DECISION_NAV_CONFIG_0416 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与核心主线' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec2', label: '美伊停火博弈' },
      { id: 'sec3', label: 'AI算力与存储共振' },
      { id: 'sec4', label: '券商业绩与宁德时代' }
    ]
  },
  {
    title: '重要新闻催化',
    links: [
      { id: 'sec5', label: '科技/AI/半导体' },
      { id: 'sec6', label: '新能源/锂电' },
      { id: 'sec7', label: '商业航天' },
      { id: 'sec8', label: '政策/宏观' },
      { id: 'sec9', label: '氢能/宠物/机器人' }
    ]
  },
  {
    title: '赛道跟踪',
    links: [
      { id: 'sec10', label: '热点赛道跟踪表' },
      { id: 'sec11', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '重点关注',
    links: [
      { id: 'sec12', label: '本周关键事件日历' }
    ]
  },
  {
    title: '风险与风控',
    links: [
      { id: 'sec13', label: '逻辑证伪与传闻预警' },
      { id: 'sec14', label: '仓位与风控建议' }
    ]
  }
];

function renderDecisionNav_0416() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0416.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
