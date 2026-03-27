// ==========================================
// 集思录导航配置 - 2026 年 3 月 27 日
// ==========================================

const JISILU_NAV_CONFIG_0327 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '生猪周期布局' },
      { id: 'j_sec2', label: '转债溢价转股' },
      { id: 'j_sec3', label: '高股息价值投资' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec4', label: '低风险策略' },
      { id: 'j_sec5', label: '资产配置' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec6', label: '热议标的' },
      { id: 'j_sec7', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0327() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('jisilu', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
