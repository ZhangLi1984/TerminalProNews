// 投资决策内参导航模块 - 2026-05-13
const DECISION_NAV_CONFIG_0513 = [
  {
    title: '核心要点',
    links: [
      { id: 'd_sec1', label: '市场总览与核心判断' },
      { id: 'd_sec2', label: '宏观定调与周期定位' },
      { id: 'd_sec3', label: '核心矛盾：科技投资 vs 消费滞后' }
    ]
  },
  {
    title: '重点方向',
    links: [
      { id: 'd_sec4', label: 'AI算力：CPU重估链' },
      { id: 'd_sec5', label: '锂电储能：涨价主升浪' },
      { id: 'd_sec6', label: '风电海风：周期反转' },
      { id: 'd_sec7', label: '券商龙头：量价齐升' }
    ]
  },
  {
    title: '逆向机会',
    links: [
      { id: 'd_sec8', label: '化工供给冲击：蛋氨酸' },
      { id: 'd_sec9', label: '白酒出清：黎明前黑暗' },
      { id: 'd_sec10', label: '工程机械：三重共振' },
      { id: 'd_sec11', label: '生猪养殖：深度亏损期' }
    ]
  },
  {
    title: '策略与风控',
    links: [
      { id: 'd_sec12', label: '攻守兼备仓位配置' },
      { id: 'd_sec13', label: '动态调仓触发条件' },
      { id: 'd_sec14', label: '核心风险矩阵' },
      { id: 'd_sec15', label: '大宗商品监测表' }
    ]
  }
];

function renderDecisionNav_0513() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0513.map(group => `
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
