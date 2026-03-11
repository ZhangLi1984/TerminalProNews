// ==========================================
// 投资决策内参导航 - 2026 年 3 月 11 日
// ==========================================

const DECISION_NAV_CONFIG_0311 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec3', label: '中东地缘冲突升级' },
      { id: 'sec4', label: 'AI 智能体狂潮与监管' },
      { id: 'sec5', label: '储能政策催化' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec6', label: '政策宏观' },
      { id: 'sec7', label: '产业动态' },
      { id: 'sec8', label: '公司事件' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec9', label: 'AI/算力/半导体' },
      { id: 'sec10', label: '储能/新能源' },
      { id: 'sec11', label: '机器人' },
      { id: 'sec12', label: '油气/资源' }
    ]
  },
  {
    title: '跨赛道传导',
    links: [
      { id: 'sec13', label: 'AI→电力→储能/核电' },
      { id: 'sec14', label: '中东→化肥→农业' },
      { id: 'sec15', label: 'AI 监管→网络安全' },
      { id: 'sec16', label: '电动车→机床订单' }
    ]
  },
  {
    title: '明日关注与风险',
    links: [
      { id: 'sec17', label: '事件日历' },
      { id: 'sec18', label: '风险提示' },
      { id: 'sec19', label: '核心标的池' }
    ]
  }
];

function renderDecisionNav_0311() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
