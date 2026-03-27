// ==========================================
// 期货市场导航配置 - 2026 年 3 月 27 日
// ==========================================

const FUTURES_NAV_CONFIG_0327 = [
  {
    title: '核心观点',
    links: [
      { id: 'f_sec1', label: '市场展望' }
    ]
  },
  {
    title: '板块分析',
    links: [
      { id: 'f_sec2', label: '能源化工' },
      { id: 'f_sec3', label: '黑色建材' },
      { id: 'f_sec4', label: '农产品' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec5', label: '做多机会' },
      { id: 'f_sec6', label: '做空机会' }
    ]
  }
];

function renderFuturesNav_0327() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('futures', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
