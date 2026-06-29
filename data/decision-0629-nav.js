// ==========================================
// Decision Nav Config: 2026-06-29
// ==========================================

const DECISION_NAV_CONFIG_0629 = [
  {
    title: '核心主线赛道',
    links: [
      { id: 'sec1', label: '半导体涨价潮' },
      { id: 'sec2', label: '创新药爆发' },
      { id: 'sec3', label: '科创50新高' },
      { id: 'sec4', label: '可控核聚变' }
    ]
  },
  {
    title: '政策催化方向',
    links: [
      { id: 'sec5', label: 'AI全学段教育' },
      { id: 'sec6', label: '出口管制反制' },
      { id: 'sec7', label: '教育发展十五五规划' }
    ]
  },
  {
    title: '产业动态与机会',
    links: [
      { id: 'sec8', label: '商业航天突破' },
      { id: 'sec9', label: '减肥药赛道' },
      { id: 'sec10', label: '存储芯片扩产' },
      { id: 'sec11', label: 'MLCC涨价周期' }
    ]
  },
  {
    title: '市场情绪观察',
    links: [
      { id: 'sec12', label: '资金流向分析' },
      { id: 'sec13', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0629() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0629.map(section => `
    <div class="mb-6">
      <h3 class="text-sm font-bold text-slate-700 mb-3 px-2">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}"
               class="block px-3 py-2 text-sm rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors border-l-2 border-transparent hover:border-red-500"
               onclick="scrollToSection('${link.id}')">
              ${link.label}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
