const MACRO_NAV_CONFIG_0706 = [
  {"title":"宏观判断","links":[
    {"id":"sec1","label":"经济增长与周期定位"},
    {"id":"sec2","label":"通胀预期"},
    {"id":"sec3","label":"美林时钟定位"}
  ]},
  {"title":"政策分析","links":[
    {"id":"sec4","label":"货币政策与流动性"},
    {"id":"sec5","label":"财政政策解读"},
    {"id":"sec6","label":"产业政策重点"}
  ]},
  {"title":"海外宏观","links":[
    {"id":"sec7","label":"美国经济与美联储"},
    {"id":"sec8","label":"地缘政治"},
    {"id":"sec9","label":"全球资产定价"}
  ]},
  {"title":"资产配置","links":[
    {"id":"sec10","label":"大类资产配置建议"},
    {"id":"sec11","label":"权益结构判断"},
    {"id":"sec12","label":"债券与房地产"}
  ]},
  {"title":"行业映射","links":[
    {"id":"sec13","label":"半导体/AI产业链"},
    {"id":"sec14","label":"有色/出口链/军工"},
    {"id":"sec15","label":"创新药/券商"}
  ]},
  {"title":"风险与分歧","links":[
    {"id":"sec16","label":"五大预期分歧"},
    {"id":"sec17","label":"风险提示"},
    {"id":"sec18","label":"核心结论与操作建议"}
  ]}
];

function renderMacroNav_0706() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0706.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}