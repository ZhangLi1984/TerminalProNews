const DECISION_NAV_CONFIG_0617 = [
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
      { id: 'sec3', label: '美伊协议' },
      { id: 'sec4', label: '金融开放新政' },
      { id: 'sec5', label: '微软取消甲骨文协议' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '金融/宏观政策' },
      { id: 'sec8', label: '新能源/汽车' },
      { id: 'sec9', label: '医药/消费' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec10', label: '逻辑证伪' },
      { id: 'sec11', label: '传闻预警' }
    ]
  }
];

function renderDecisionNav_0617() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
