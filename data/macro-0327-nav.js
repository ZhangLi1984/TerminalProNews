// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 27 日
// ==========================================

const MACRO_NAV_CONFIG_0327 = [
  {
    title: '周期定位',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '通胀预期' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec3', label: '货币政策' },
      { id: 'm_sec4', label: '财政政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec5', label: '大类资产配置' },
      { id: 'm_sec6', label: '行业轮动' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec7', label: '外部风险' },
      { id: 'm_sec8', label: '内部风险' }
    ]
  }
];

function renderMacroNav_0327() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('macro', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
