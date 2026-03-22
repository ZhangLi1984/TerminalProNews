// ==========================================
// Decision Nav Config: 2026-03-22
// 投资决策内参 - 导航配置
// ==========================================

const DECISION_NAV_CONFIG_0322 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '一句话判断' },
      { id: 'sec2', label: '今日三大核心事件' },
      { id: 'sec3', label: '今日市场信号' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec4', label: '霍尔木兹海峡危机' },
      { id: 'sec5', label: '华为昇腾950PR' },
      { id: 'sec6', label: '马斯克Terafab' },
      { id: 'sec7', label: '四川稀土发现' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec8', label: 'AI/算力' },
      { id: 'sec9', label: '机器人' },
      { id: 'sec10', label: '新能源/储能' },
      { id: 'sec11', label: '稀土/战略金属' },
      { id: 'sec12', label: '航运/港口' }
    ]
  },
  {
    title: '二阶思维',
    links: [
      { id: 'sec13', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'sec14', label: '明日关注' },
      { id: 'sec15', label: '风险提示' },
      { id: 'sec16', label: '推荐组合' }
    ]
  }
];

function renderDecisionNav_0322() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#${link.id}" onclick="scrollToSection('decision', '${link.id}')" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}