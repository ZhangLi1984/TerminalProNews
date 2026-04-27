// ==========================================
// 行业研究导航配置 - 2026-04-28
// ==========================================

const INDUSTRY_NAV_CONFIG_0428 = [
  {
    title: '核心观点',
    links: [
      { id: 'i_sec1', label: '今日行业观点' },
      { id: 'i_sec2', label: '高胜率赛道' }
    ]
  },
  {
    title: '景气趋势',
    links: [
      { id: 'i_sec3', label: '行业景气度变化' }
    ]
  },
  {
    title: '预期差分析',
    links: [
      { id: 'i_sec4', label: 'CPU被低估' },
      { id: 'i_sec5', label: '煤炭被错误定价' },
      { id: 'i_sec6', label: '面板周期转成长' },
      { id: 'i_sec7', label: '非银估值错配' },
      { id: 'i_sec8', label: 'AI Deflation破裂' }
    ]
  },
  {
    title: '二阶思维',
    links: [
      { id: 'i_sec9', label: '五条跨赛道暗线' }
    ]
  },
  {
    title: '底仓资产',
    links: [
      { id: 'i_sec10', label: '五大高确定性赛道' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec11', label: '大宗商品量价监测' },
      { id: 'i_sec12', label: '产业链周期估值' }
    ]
  },
  {
    title: '风险与配置',
    links: [
      { id: 'i_sec13', label: '风险因素评估' },
      { id: 'i_sec14', label: '配置建议总结' }
    ]
  }
];

function renderIndustryNav_0428() {
  var container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0428.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'industry\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
