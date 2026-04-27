// ==========================================
// 决策内参导航配置 - 2026-04-28
// ==========================================

const DECISION_NAV_CONFIG_0428 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '三条主线共振博弈' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: 'DeepSeek V4 + 国产算力适配' },
      { id: 'sec3', label: '美伊冲突 + 霍尔木兹封锁' },
      { id: 'sec4', label: '发改委禁止Meta收购Manus' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '科技/AI/半导体' },
      { id: 'sec6', label: '新能源/锂电' },
      { id: 'sec7', label: '政策/宏观' },
      { id: 'sec8', label: '机器人/具身智能' }
    ]
  },
  {
    title: '赛道跟踪',
    links: [
      { id: 'sec9', label: 'AI算力链' },
      { id: 'sec10', label: '机器人链' },
      { id: 'sec11', label: '新能源链' },
      { id: 'sec12', label: '半导体链' }
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
      { id: 'sec14', label: '关键事件日历' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec15', label: '逻辑证伪区' },
      { id: 'sec16', label: '传闻预警' },
      { id: 'sec17', label: '核心风险矩阵' }
    ]
  }
];

function renderDecisionNav_0428() {
  var container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0428.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'decision\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
