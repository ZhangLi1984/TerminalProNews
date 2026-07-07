const MACRO_NAV_CONFIG_0707 = [
  {"title":"宏观经济核心判断","links":[
    {"id":"sec1","label":"国内经济：通缩终结"},
    {"id":"sec2","label":"通胀形势：CPI/PPI"},
    {"id":"sec3","label":"核心矛盾：内需不足"},
    {"id":"sec4","label":"结构性亮点：新动能"}
  ]},
  {"title":"海外经济","links":[
    {"id":"sec5","label":"美国就业与通胀"},
    {"id":"sec6","label":"美联储沃什改革"},
    {"id":"sec7","label":"中美关系与地缘"},
    {"id":"sec8","label":"全球经济增速"}
  ]},
  {"title":"政策展望","links":[
    {"id":"sec9","label":"货币政策：Q3宽松"},
    {"id":"sec10","label":"财政政策：支出偏慢"},
    {"id":"sec11","label":"产业政策：AI+制造"}
  ]},
  {"title":"大类资产配置","links":[
    {"id":"sec12","label":"配置总览与建议"},
    {"id":"sec13","label":"分项详述"},
    {"id":"sec14","label":"汇率与外汇"}
  ]},
  {"title":"预期差与风险","links":[
    {"id":"sec15","label":"一致预期（5大共识）"},
    {"id":"sec16","label":"4大关键预期差"},
    {"id":"sec17","label":"核心风险点"},
    {"id":"sec18","label":"证伪指标"}
  ]},
  {"title":"投资主线","links":[
    {"id":"sec19","label":"科技自主（最高确定性）"},
    {"id":"sec20","label":"高端装备制造"},
    {"id":"sec21","label":"有色金属与贵金属"},
    {"id":"sec22","label":"高股息防御"},
    {"id":"sec23","label":"地产局部修复"}
  ]},
  {"title":"附录数据","links":[
    {"id":"sec24","label":"工业利润结构分化"},
    {"id":"sec25","label":"7月交易日历"},
    {"id":"sec26","label":"关键价格与利率"},
    {"id":"sec27","label":"7月交易策略"},
    {"id":"sec28","label":"经济数据快照"}
  ]}
];

function renderMacroNav_0707() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0707.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
