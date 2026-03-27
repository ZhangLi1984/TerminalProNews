// ==========================================
// 个股研报导航配置 - 2026 年 3 月 27 日
// ==========================================

const STOCK_NAV_CONFIG_0327 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: '紫金矿业' },
      { id: 's_sec2', label: '海星股份' },
      { id: 's_sec3', label: '若羽臣' },
      { id: 's_sec4', label: '协创数据' },
      { id: 's_sec5', label: '深南电路' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec6', label: '华勤技术' },
      { id: 's_sec7', label: '万辰集团' },
      { id: 's_sec8', label: '山金国际' },
      { id: 's_sec9', label: '卫星化学' },
      { id: 's_sec10', label: '金山办公' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec11', label: '完整评级表' }
    ]
  }
];

function renderStockNav_0327() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('stock', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
