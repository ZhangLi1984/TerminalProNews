// 投资决策内参导航配置 - 2026-05-18
const DECISION_NAV_CONFIG_0518 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与推演' },
      { id: 'sec2', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '半导体涨价潮' },
      { id: 'sec4', label: '能源供应链剧变' },
      { id: 'sec5', label: 'AI算力Token化' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '机器人/具身智能' },
      { id: 'sec8', label: '新能源' },
      { id: 'sec9', label: '政策与宏观' },
      { id: 'sec10', label: '资本市场动态' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec11', label: '二阶思维链条' }
    ]
  },
  {
    title: '交易计划',
    links: [
      { id: 'sec12', label: '关键日程' },
      { id: 'sec13', label: '交易策略' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec14', label: '逻辑证伪' },
      { id: 'sec15', label: '传闻预警' },
      { id: 'sec16', label: '仓位风控' }
    ]
  }
];

function renderDecisionNav_0518() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0518.map((group, gi) => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
            <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors bg-transparent group-hover:bg-slate-400"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
