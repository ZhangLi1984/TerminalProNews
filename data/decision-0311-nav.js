// truncated=================================
// 投资决策内参导航模块 - 2026 年 3 月 11 日
// ==========================================

const DECISION_NAV_CONFIG_0311 = [
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
      { id: 'sec4', label: '中东冲突升级' },
      { id: 'sec5', label: '腾讯 All in AI' },
      { id: 'sec6', label: '宁德时代财报' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '新能源/电力' },
      { id: 'sec9', label: '化工/周期' },
      { id: 'sec10', label: '政策/宏观' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec11', label: 'AI/机器人' },
      { id: 'sec12', label: '半导体' },
      { id: 'sec13', label: '新能源' },
      { id: 'sec14', label: '军工/地缘' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec15', label: '逻辑证伪' },
      { id: 'sec16', label: '传闻预警' },
      { id: 'sec17', label: '黑天鹅监测' }
    ]
  }
];

function renderDecisionNav_0311() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <div class="nav-section-title">${section.title}</div>
      <ul class="nav-links">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" class="nav-link" data-section="${link.id}">${link.label}</a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
