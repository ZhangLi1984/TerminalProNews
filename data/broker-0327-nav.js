// ==========================================
// 券商晨报导航配置 - 2026 年 3 月 27 日
// ==========================================

const BROKER_NAV_CONFIG_0327 = [
  {
    title: '核心观点',
    links: [
      { id: 'b_sec1', label: '市场走势' },
      { id: 'b_sec2', label: '仓位建议' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec3', label: '行业热度榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec4', label: '券商金股' },
      { id: 'b_sec5', label: '共识个股' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec6', label: '共同风险' },
      { id: 'b_sec7', label: '行业特定风险' }
    ]
  }
];

function renderBrokerNav_0327() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('broker', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
