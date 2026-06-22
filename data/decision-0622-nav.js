const DECISION_NAV_CONFIG_0622 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事' },
      { id: 'sec2', label: '关键推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '伊美协议' },
      { id: 'sec4', label: 'AI算力通胀' },
      { id: 'sec5', label: '稳外资新政' }
    ]
  },
  {
    title: '重要新闻',
    links: [
      { id: 'sec6', label: '行业催化' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec7', label: '赛道追踪' }
    ]
  },
  {
    title: '深度推演',
    links: [
      { id: 'sec8', label: '跨赛道传导' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec9', label: '重要日程' },
      { id: 'sec10', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0622() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0622.map(section => `
    <div class="mb-4">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h4>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent flex-shrink-0"></span>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
