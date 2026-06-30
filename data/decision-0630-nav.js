const DECISION_NAV_CONFIG_0630 = [
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
      { id: 'sec3', label: '寒武纪市值破万亿' },
      { id: 'sec4', label: '工业互联网政策' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '科技/AI/半导体' },
      { id: 'sec6', label: '新能源/电力' },
      { id: 'sec7', label: '宏观/政策' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec8', label: '避雷针' }
    ]
  }
];

function renderDecisionNav_0630() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0630.map(section => `
    <div class="mb-6">
      <h3 class="text-sm font-black text-slate-900 mb-3 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}"
             class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
             onclick="document.getElementById('${link.id}').scrollIntoView({behavior: 'smooth'})">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
