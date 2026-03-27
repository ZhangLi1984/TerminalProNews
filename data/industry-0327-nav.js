// ==========================================
// 行业研究导航配置 - 2026 年 3 月 27 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0327 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力/存储芯片' },
      { id: 'i_sec2', label: '储能/电网设备' },
      { id: 'i_sec3', label: '工程机械/客车出海' }
    ]
  },
  {
    title: '二阶暗线',
    links: [
      { id: 'i_sec4', label: '北美缺电→绝缘子' },
      { id: 'i_sec5', label: '存储周期→晶圆代工' },
      { id: 'i_sec6', label: '中东冲突→煤头化工' },
      { id: 'i_sec7', label: '人形机器人→关节丝杠' }
    ]
  },
  {
    title: '预期差',
    links: [
      { id: 'i_sec8', label: '摩托车出口' },
      { id: 'i_sec9', label: '生猪养殖' },
      { id: 'i_sec10', label: '传媒/AI 游戏' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec11', label: '制冷剂' },
      { id: 'i_sec12', label: '福耀玻璃' },
      { id: 'i_sec13', label: '快递/黄金' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec14', label: '大宗商品监测' },
      { id: 'i_sec15', label: '产业链估值' }
    ]
  }
];

function renderIndustryNav_0327() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0327.map((section, index) => `
    <div class="nav-section">
      <h3 class="nav-section-title">${section.title}</h3>
      <ul class="nav-list">
        ${section.links.map(link => `
          <li class="nav-item">
            <button class="nav-btn" data-section="${link.id}" onclick="scrollToSection('industry', '${link.id}')">
              <div class="nav-dot"></div>
              <span class="nav-label">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
