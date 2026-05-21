// ==========================================
// 投资决策内参 - 导航配置 (2026-05-22)
// ==========================================

const DECISION_NAV_CONFIG_0522 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与核心矛盾' },
      { id: 'sec2', label: '跨市场传导链' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec4', label: '美伊核谈判与石油供给链' },
      { id: 'sec5', label: '英伟达业绩与AI算力分水岭' },
      { id: 'sec6', label: 'A股放量暴跌定性分析' }
    ]
  },
  {
    title: '行业催化与资金博弈',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '人形机器人' },
      { id: 'sec9', label: '新能源/汽车' },
      { id: 'sec10', label: '政策/宏观' },
      { id: 'sec11', label: '医药/消费' },
      { id: 'sec12', label: '量子计算' }
    ]
  },
  {
    title: '二阶传导与重点关注',
    links: [
      { id: 'sec13', label: '五大跨市场传导链' },
      { id: 'sec14', label: '明日重点关注' }
    ]
  },
  {
    title: '风险与风控',
    links: [
      { id: 'sec15', label: '逻辑证伪与传闻预警' },
      { id: 'sec16', label: '核心风控建议' }
    ]
  }
];

function renderDecisionNav_0522() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
