// ==========================================
// 投资决策内参 - 导航配置 2026-05-24
// ==========================================
const DECISION_NAV_CONFIG_0524 = [
  {
    title: '市场总判断',
    links: [
      { id: 'sec1', label: '宏观十字路口' },
      { id: 'sec2', label: '风险偏好与资金流向' }
    ]
  },
  {
    title: '核心进攻方向',
    links: [
      { id: 'sec3', label: '半导体/AI算力全产业链' },
      { id: 'sec4', label: '天然气发动机/发电' },
      { id: 'sec5', label: '高纯四氯化硅/光纤' }
    ]
  },
  {
    title: '核心防守方向',
    links: [
      { id: 'sec6', label: '生猪养殖（左侧布局）' },
      { id: 'sec7', label: '食品饮料/大消费' },
      { id: 'sec8', label: '银行（红利底仓）' }
    ]
  },
  {
    title: '暗线与博弈',
    links: [
      { id: 'sec9', label: '中东冲突->中国钢出口' },
      { id: 'sec10', label: 'Rubin架构->PCB/MLCC爆发' },
      { id: 'sec11', label: '太空光伏/CPI膜国产替代' }
    ]
  },
  {
    title: '仓位与风险',
    links: [
      { id: 'sec12', label: '建议仓位结构' },
      { id: 'sec13', label: '核心风险提示' },
      { id: 'sec14', label: 'CIO总结陈词' }
    ]
  }
];

function renderDecisionNav_0524() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0524.map((group, gi) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
