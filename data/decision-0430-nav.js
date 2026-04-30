// ==========================================
// 决策内参导航配置 - 2026-04-30
// ==========================================

const DECISION_NAV_CONFIG_0430 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '三条主线共振博弈' },
      { id: 'sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec3', label: '美联储34年最大分歧' },
      { id: 'sec4', label: '中东地缘链：原油$110+' },
      { id: 'sec5', label: 'AI算力超级周期验证' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源' },
      { id: 'sec8', label: '政策宏观' }
    ]
  },
  {
    title: '赛道跟踪',
    links: [
      { id: 'sec9', label: 'AI算力链' },
      { id: 'sec10', label: '机器人' },
      { id: 'sec11', label: '新能源' },
      { id: 'sec12', label: '半导体' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec13', label: '三条跨行业传导链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec14', label: '交易日历' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec15', label: '逻辑证伪' },
      { id: 'sec16', label: '传闻预警' },
      { id: 'sec17', label: '仓位管理' }
    ]
  }
];

function renderDecisionNav_0430() {
  var container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0430.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'decision\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
