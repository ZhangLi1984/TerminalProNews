// truncated=================================
// 投资决策内参导航 - 2026年4月1日
// ==========================================

const DECISION_NAV_CONFIG_0401 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' },
      { id: 'sec2', label: '重大事件速览' },
      { id: 'sec3', label: '投资主线与方向' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec4', label: '中东冲突缓和信号' },
      { id: 'sec5', label: '张雪机车WSBK夺冠' },
      { id: 'sec6', label: '华为2025年报解析' },
      { id: 'sec7', label: '茅台首次调渠道价' },
      { id: 'sec8', label: 'OpenAI估值8520亿美元' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec9', label: '宏观政策动态' },
      { id: 'sec10', label: '产业动态追踪' },
      { id: 'sec11', label: '公司业绩亮点' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec12', label: 'AI算力赛道' },
      { id: 'sec13', label: '人形机器人' },
      { id: 'sec14', label: '商业航天' },
      { id: 'sec15', label: '固态电池' },
      { id: 'sec16', label: '半导体存储' }
    ]
  },
  {
    title: '跨赛道传导分析',
    links: [
      { id: 'sec17', label: '地缘→能源→化工链' },
      { id: 'sec18', label: 'AI算力→光通信链' },
      { id: 'sec19', label: '国产摩托→出海链' }
    ]
  },
  {
    title: '预期差分析',
    links: [
      { id: 'sec20', label: 'AI需求持续性' },
      { id: 'sec21', label: '固态电池进度' },
      { id: 'sec22', label: '新能源车出海' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec23', label: '重点事件日程' },
      { id: 'sec24', label: '重点公司追踪' },
      { id: 'sec25', label: '关键指标监测' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec26', label: '地缘政治风险' },
      { id: 'sec27', label: '市场风险' },
      { id: 'sec28', label: '产业风险' },
      { id: 'sec29', label: '操作建议' }
    ]
  }
];

function renderDecisionNav_0401() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';

  DECISION_NAV_CONFIG_0401.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('decision', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}