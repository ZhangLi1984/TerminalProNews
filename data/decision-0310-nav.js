// truncated=================================
// 投资决策内参导航模块 - 2026 年 3 月 10 日
// ==========================================

const DECISION_NAV_CONFIG_0310 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '中东局势与油价' },
      { id: 'sec3', label: '宁德时代年报' },
      { id: 'sec4', label: 'AI OpenClaw 生态' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '科技/AI/半导体' },
      { id: 'sec6', label: '新能源/储能' },
      { id: 'sec7', label: '政策宏观' },
      { id: 'sec8', label: '医药生物' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI/机器人/OpenClaw' },
      { id: 'sec10', label: '新能源/储能' },
      { id: 'sec11', label: '半导体/国产芯片' },
      { id: 'sec12', label: '能源/资源品' }
    ]
  },
  {
    title: '二阶思维',
    links: [
      { id: 'sec13', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec14', label: '证伪区与避雷针' }
    ]
  }
];

function renderDecisionNav_0310() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0310.map((category, idx) => `
    <div class="nav-category">
      <div class="nav-category-title">${category.title}</div>
      <ul class="nav-list">
        ${category.links.map(link => `
          <li class="nav-item">
            <a href="#${link.id}" class="nav-btn" data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
              <span class="text-sm font-bold">${link.label}</span>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
