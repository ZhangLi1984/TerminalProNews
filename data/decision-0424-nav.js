// ==========================================
// 决策内参导航配置 - 2026-04-24
// ==========================================

const DECISION_NAV_CONFIG_0424 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与主线博弈' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '美伊战事与能源定价' },
      { id: 'sec3', label: '存储超级周期确认' },
      { id: 'sec4', label: '人形机器人产业化拐点' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '科技/AI/半导体' },
      { id: 'sec6', label: '新能源/电力设备' },
      { id: 'sec7', label: '宏观/政策/金融' },
      { id: 'sec8', label: '消费/医药' },
      { id: 'sec9', label: '航天军工' }
    ]
  },
  {
    title: '板块博弈',
    links: [
      { id: 'sec10', label: '热门板块资金跟踪表' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec11', label: '四条跨市场传导链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec12', label: '五大关键事件' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec13', label: '逻辑证伪区' },
      { id: 'sec14', label: '传闻预警' },
      { id: 'sec15', label: '仓位与风控建议' }
    ]
  }
];

function renderDecisionNav_0424() {
  var container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0424.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'decision\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
