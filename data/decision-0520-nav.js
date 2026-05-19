// ==========================================
// 投资决策内参 - 导航配置 - 2026-05-20
// ==========================================

const DECISION_NAV_CONFIG_0520 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事' },
      { id: 'sec2', label: '操作方向' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '美伊僵局与能源定价' },
      { id: 'sec4', label: '美联储范式切换' },
      { id: 'sec5', label: '国产存储双雄IPO' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '电力/算电协同' },
      { id: 'sec8', label: '机器人/具身智能' },
      { id: 'sec9', label: '商业航天/军工' },
      { id: 'sec10', label: '券商/金融改革' },
      { id: 'sec11', label: '消费/其他' }
    ]
  },
  {
    title: '二阶推演',
    links: [
      { id: 'sec12', label: '传导链A：地缘冲突' },
      { id: 'sec13', label: '传导链B：AI算力' },
      { id: 'sec14', label: '传导链C：存储涨价' }
    ]
  },
  {
    title: '资金面',
    links: [
      { id: 'sec15', label: '热门赛道追踪' },
      { id: 'sec16', label: '龙虎榜与ETF' }
    ]
  },
  {
    title: '风控',
    links: [
      { id: 'sec17', label: '明日关注' },
      { id: 'sec18', label: '风险提示与避雷' }
    ]
  }
];

function renderDecisionNav_0520() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0520.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 text-slate-700 hover:bg-slate-100"
            data-section="${link.id}" onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent transition-colors"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
