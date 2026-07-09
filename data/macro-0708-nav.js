const MACRO_NAV_CONFIG_0708 = [
  {
    "title": "核心宏观判断",
    "links": [
      { "id": "sec1", "label": "经济增长与周期定位" },
      { "id": "sec2", "label": "通胀预期与背离" }
    ]
  },
  {
    "title": "货币与财政政策",
    "links": [
      { "id": "sec3", "label": "货币政策与流动性" },
      { "id": "sec4", "label": "财政与产业政策" }
    ]
  },
  {
    "title": "大类资产配置",
    "links": [
      { "id": "sec5", "label": "股票/债券/商品/现金" }
    ]
  },
  {
    "title": "行业轮动与宏观映射",
    "links": [
      { "id": "sec6", "label": "AI算力与数据中心" },
      { "id": "sec7", "label": "半导体设备与材料" },
      { "id": "sec8", "label": "创新药/CXO" },
      { "id": "sec9", "label": "有色与贵金属" },
      { "id": "sec10", "label": "券商与金融" },
      { "id": "sec11", "label": "汽车出口链" },
      { "id": "sec12", "label": "地产链与消费" }
    ]
  },
  {
    "title": "宏观风险提示",
    "links": [
      { "id": "sec13", "label": "外部与内部风险" },
      { "id": "sec14", "label": "证伪指标" }
    ]
  },
  {
    "title": "买方结论",
    "links": [
      { "id": "sec15", "label": "核心结论与配置优先级" }
    ]
  }
];

function renderMacroNav_0708() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0708.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
