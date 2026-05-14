// 宏观研究导航配置 - 2026年5月15日
const MACRO_NAV_CONFIG_0515 = [
  {
    title: '核心观点',
    links: [
      { id: 'sec1', label: '核心观点摘要' },
      { id: 'sec2', label: '经济数据快照' }
    ]
  },
  {
    title: '专题研究',
    links: [
      { id: 'sec3', label: '通胀走势' },
      { id: 'sec4', label: '货币政策' },
      { id: 'sec5', label: '美联储与中美利差' },
      { id: 'sec6', label: '地缘政治与油价' },
      { id: 'sec7', label: '出口韧性' },
      { id: 'sec8', label: '财政收支' }
    ]
  },
  {
    title: '策略与建议',
    links: [
      { id: 'sec9', label: '数据交叉验证' },
      { id: 'sec10', label: '资产配置矩阵' },
      { id: 'sec11', label: '行业轮动建议' },
      { id: 'sec12', label: '风险预警与应对' }
    ]
  },
  {
    title: '前瞻与博弈',
    links: [
      { id: 'sec13', label: '预期差与博弈机会' },
      { id: 'sec14', label: '证伪指标监测' },
      { id: 'sec15', label: '经济数据汇总' }
    ]
  }
];

function renderMacroNav_0515() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0515.map(function(group) {
    return '<div class="mb-4"><h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">' + group.title + '</h4><div class="space-y-1">' + group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="' + link.id + '" onclick="updateActiveNav(\'' + link.id + '\'); document.getElementById(\'macro-content\').querySelector(\'#' + link.id + '\')?.scrollIntoView({behavior:\'smooth\',block:\'start\'});"><span class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 inline-block"></span>' + link.label + '</button>';
    }).join('') + '</div></div>';
  }).join('');
}
