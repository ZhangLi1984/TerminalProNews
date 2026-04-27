// ==========================================
// 宏观研究导航配置 - 2026-04-24
// ==========================================

const MACRO_NAV_CONFIG_0424 = [
  {
    title: '宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长与周期定位' },
      { id: 'm_sec2', label: '通胀预期分析' }
    ]
  },
  {
    title: '货币与财政',
    links: [
      { id: 'm_sec3', label: '货币政策与流动性' },
      { id: 'm_sec4', label: '财政政策与产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec5', label: '四大类资产配置建议' },
      { id: 'm_sec6', label: '股债性价比与AH溢价' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec7', label: '盈利驱动阶段轮动规律' },
      { id: 'm_sec8', label: '六大行业配置方向' }
    ]
  },
  {
    title: '风险与分歧',
    links: [
      { id: 'm_sec9', label: '宏观风险提示' },
      { id: 'm_sec10', label: '预期分歧点与证伪指标' }
    ]
  },
  {
    title: '数据速查',
    links: [
      { id: 'm_sec11', label: '核心数据速查表' }
    ]
  }
];

function renderMacroNav_0424() {
  var container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0424.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'macro\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
