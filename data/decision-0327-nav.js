// ==========================================
// 投资决策内参导航配置 - 2026 年 3 月 27 日
// ==========================================

const DECISION_NAV_CONFIG_0327 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '特朗普推迟打击伊朗' },
      { id: 'sec4', label: '业绩分化' },
      { id: 'sec5', label: 'Google TurboQuant' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec6', label: 'AI/算力链' },
      { id: 'sec7', label: '半导体' },
      { id: 'sec8', label: '锂电池' },
      { id: 'sec9', label: '商业航天' }
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

function renderDecisionNav_0327() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('decision', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
