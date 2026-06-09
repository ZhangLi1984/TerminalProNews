const DECISION_NAV_CONFIG_0609 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '美涉军清单' },
      { id: 'sec3', label: 'AI三巨头IPO' },
      { id: 'sec4', label: '美伊谈判' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '科技半导体' },
      { id: 'sec6', label: '新能源光伏' },
      { id: 'sec7', label: '商业航天' },
      { id: 'sec8', label: '政策宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI算力' },
      { id: 'sec10', label: '商业航天' },
      { id: 'sec11', label: '新能源' },
      { id: 'sec12', label: '机器人' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec13', label: '跨赛道传导' },
      { id: 'sec14', label: '明日关注' },
      { id: 'sec15', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0609() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0609.map((category, idx) => `
    <div class="mb-6">
      <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 px-3">${category.title}</h3>
      <nav class="space-y-1">
        ${category.links.map(link => `
          <a href="#${link.id}"
             class="block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
             onclick="scrollToSection('${link.id}')">
            ${link.label}
          </a>
        `).join('')}
      </nav>
    </div>
  `).join('');
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
