// 投资决策内参导航模块 - 2026-05-12
const DECISION_NAV_CONFIG_0512 = [
  {
    title: '核心要点',
    links: [
      { id: 'd_sec1', label: '市场总览与核心判断' },
      { id: 'd_sec2', label: '地缘通胀 vs 科技通缩' },
      { id: 'd_sec3', label: '资产配置排序' }
    ]
  },
  {
    title: '重点方向',
    links: [
      { id: 'd_sec4', label: 'AI算力全产业链' },
      { id: 'd_sec5', label: '锂电储能涨价周期' },
      { id: 'd_sec6', label: '券商牛市放大器' },
      { id: 'd_sec7', label: '医药CXO内外需共振' }
    ]
  },
  {
    title: '逆向机会',
    links: [
      { id: 'd_sec8', label: '光伏底部戴维斯双击' },
      { id: 'd_sec9', label: '生猪养殖左侧布局' },
      { id: 'd_sec10', label: '期货公司隐形赢家' }
    ]
  },
  {
    title: '风险控制',
    links: [
      { id: 'd_sec11', label: '核心风险矩阵' },
      { id: 'd_sec12', label: '证伪指标监控' }
    ]
  }
];

function renderDecisionNav_0512() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0512.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
