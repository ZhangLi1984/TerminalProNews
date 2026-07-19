const MACRO_NAV_CONFIG_0715 = [
  {
    "title": "核心宏观判断",
    "links": [
      { "id": "sec1", "label": "经济增长：K型分化" },
      { "id": "sec2", "label": "通胀预期：PPI见顶" },
      { "id": "sec3", "label": "周期定位：美林时钟" }
    ]
  },
  {
    "title": "货币与流动性",
    "links": [
      { "id": "sec4", "label": "政策取向与工具预判" },
      { "id": "sec5", "label": "流动性环境与债市" }
    ]
  },
  {
    "title": "财政与产业政策",
    "links": [
      { "id": "sec6", "label": "财政力度与节奏" },
      { "id": "sec7", "label": "碳达峰+AI+新能源" }
    ]
  },
  {
    "title": "大类资产配置",
    "links": [
      { "id": "sec8", "label": "配置建议总表" }
    ]
  },
  {
    "title": "行业轮动",
    "links": [
      { "id": "sec9", "label": "AI产业链" },
      { "id": "sec10", "label": "新能源" },
      { "id": "sec11", "label": "高端制造" },
      { "id": "sec12", "label": "贵金属/军工/医药" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec13", "label": "外部风险" },
      { "id": "sec14", "label": "内部风险与证伪" }
    ]
  },
  {
    "title": "操作建议",
    "links": [
      { "id": "sec15", "label": "债券/股票/商品/现金" }
    ]
  }
];

function renderMacroNav_0715() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0715.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
