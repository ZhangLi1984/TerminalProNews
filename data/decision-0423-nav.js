// ==========================================
// 决策内参导航配置 - 2026-04-23
// ==========================================

const DECISION_NAV_CONFIG_0423 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '三大主线博弈' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '美伊对峙与油价破百' },
      { id: 'sec3', label: 'AI算力链爆发' },
      { id: 'sec4', label: '特斯拉业绩超预期' },
      { id: 'sec5', label: 'DeepSeek融资传闻' },
      { id: 'sec6', label: '节能降碳意见' }
    ]
  },
  {
    title: '新闻分类',
    links: [
      { id: 'sec7', label: '宏观/政策' },
      { id: 'sec8', label: '行业/产业' },
      { id: 'sec9', label: '公司/财报' },
      { id: 'sec10', label: '监管/风险' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec11', label: '赛道追踪表' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec12', label: '四阶传导链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec13', label: '事件时间表' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec14', label: '逻辑证伪区' },
      { id: 'sec15', label: '传闻预警' },
      { id: 'sec16', label: '仓位建议' }
    ]
  }
];

function renderDecisionNav_0423() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0423.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'decision\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
