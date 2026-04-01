// ==========================================
// 投资决策内参导航 - 2026年4月2日
// ==========================================

const DECISION_NAV_CONFIG_0402 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '今日宏观主线' },
      { id: 'sec2', label: '市场关键信号' },
      { id: 'sec3', label: '今日最重要三条新闻' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec4', label: '中东局势转折' },
      { id: 'sec5', label: '智谱商业化爆发' },
      { id: 'sec6', label: '能源危机深度分析' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec7', label: '政策与监管动态' },
      { id: 'sec8', label: '公司动态追踪' },
      { id: 'sec9', label: '资本市场信号' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec10', label: 'AI/算力赛道' },
      { id: 'sec11', label: '机器人产业' },
      { id: 'sec12', label: '新能源汽车' },
      { id: 'sec13', label: '半导体存储' }
    ]
  },
  {
    title: '跨赛道传导分析',
    links: [
      { id: 'sec14', label: '能源→制造→消费链' },
      { id: 'sec15', label: 'AI→算力→电力链' },
      { id: 'sec16', label: '地产→金融→消费链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec17', label: '重要事件日程' },
      { id: 'sec18', label: '数据发布预告' },
      { id: 'sec19', label: '市场焦点追踪' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec20', label: '短期风险（1-4周）' },
      { id: 'sec21', label: '中期风险（1-6个月）' },
      { id: 'sec22', label: '长期风险（6个月以上）' }
    ]
  },
  {
    title: '投资策略建议',
    links: [
      { id: 'sec23', label: '配置思路' },
      { id: 'sec24', label: '行业优先级' },
      { id: 'sec25', label: '操作建议' }
    ]
  }
];

function renderDecisionNav_0402() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';

  DECISION_NAV_CONFIG_0402.forEach((group, groupIndex) => {
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