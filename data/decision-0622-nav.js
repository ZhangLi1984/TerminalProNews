const DECISION_NAV_CONFIG_0622 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: '重大事件深度推理',
    links: [
      { id: 'sec3', label: '美伊协议进展与地缘风险' },
      { id: 'sec4', label: '稳外资新政与金融开放' },
      { id: 'sec5', label: 'AI算力产业链持续景气' }
    ]
  },
  {
    title: '重要新闻与资金博弈',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '高端装备制造' },
      { id: 'sec8', label: '宏观/政策' },
      { id: 'sec9', label: '医药生物' }
    ]
  },
  {
    title: '风险提示与证伪区',
    links: [
      { id: 'sec10', label: '逻辑证伪与传闻预警' },
      { id: 'sec11', label: '操作纪律' }
    ]
  }
];

function renderDecisionNav_0622() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0622.map(category => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3>
      <div class="space-y-1">
        ${category.links.map(link => `
          <a href="#${link.id}" class="nav-link block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" onclick="scrollToSection('${link.id}')">${link.label}</a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
