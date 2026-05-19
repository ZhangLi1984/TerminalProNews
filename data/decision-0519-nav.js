// 投资决策内参导航配置 - 2026-05-19（午后更新版）
const DECISION_NAV_CONFIG_0519 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '仓位与操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '算力网定调与Token经济' },
      { id: 'sec4', label: '商业航天/太空概念' },
      { id: 'sec5', label: '中东地缘与能源价格' },
      { id: 'sec6', label: '券商合并与资本市场' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: 'AI赋能制造业' },
      { id: 'sec8', label: '存储芯片周期' },
      { id: 'sec9', label: '医药/医保改革' },
      { id: 'sec10', label: '中俄合作/外交' },
      { id: 'sec11', label: '硬科技IPO' }
    ]
  },
  {
    title: 'CIO深度洞察',
    links: [
      { id: 'sec12', label: '五大核心配置方向' },
      { id: 'sec13', label: '暗线与二阶博弈' }
    ]
  },
  {
    title: '交易计划',
    links: [
      { id: 'sec14', label: '右侧vs左侧策略' },
      { id: 'sec15', label: '一周关注清单' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec16', label: '尾部风险与对冲' }
    ]
  }
];

function renderDecisionNav_0519() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0519.map((group, gi) => `
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
