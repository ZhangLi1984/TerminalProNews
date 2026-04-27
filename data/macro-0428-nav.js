// ==========================================
// 宏观研究导航配置 - 2026-04-28
// ==========================================

const MACRO_NAV_CONFIG_0428 = [
  {
    title: '宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长分析' },
      { id: 'm_sec2', label: '通胀预期分析' },
      { id: 'm_sec3', label: '周期定位（错位格局）' }
    ]
  },
  {
    title: '货币与财政',
    links: [
      { id: 'm_sec4', label: '中国货币政策' },
      { id: 'm_sec5', label: '美联储政策与沃什听证' },
      { id: 'm_sec6', label: '其他央行动态' }
    ]
  },
  {
    title: '财政与产业',
    links: [
      { id: 'm_sec7', label: '财政力度与关键工具' },
      { id: 'm_sec8', label: '产业政策方向' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec9', label: '四大类资产配置矩阵' },
      { id: 'm_sec10', label: '行业轮动与宏观映射' }
    ]
  },
  {
    title: '风险与证伪',
    links: [
      { id: 'm_sec11', label: '外部风险' },
      { id: 'm_sec12', label: '内部风险' },
      { id: 'm_sec13', label: '证伪指标清单' }
    ]
  }
];

function renderMacroNav_0428() {
  var container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0428.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'macro\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
