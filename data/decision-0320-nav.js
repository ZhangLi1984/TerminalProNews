// ==========================================
// Decision Nav Config: 2026-03-20
// ==========================================

const DECISION_NAV_CONFIG_0320 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '中东局势缓和' },
      { id: 'sec5', label: '阿里云算力涨价' },
      { id: 'sec6', label: '央行证监会发声' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '新能源/汽车' },
      { id: 'sec9', label: '政策/宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec10', label: 'AI/算力产业链' },
      { id: 'sec11', label: '机器人/具身智能' },
      { id: 'sec12', label: '半导体/国产替代' },
      { id: 'sec13', label: '新能源/储能' }
    ]
  },
  {
    title: '深度推演',
    links: [
      { id: 'sec14', label: '跨赛道传导分析' },
      { id: 'sec15', label: '明日关注' },
      { id: 'sec16', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0320() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0320.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#decision-sec${idx + 1}-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
