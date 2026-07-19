const INDUSTRY_NAV_CONFIG_0719 = [
  {
    "title": "高胜率赛道",
    "links": [
      { "id": "sec1", "label": "AI算力基建·超节点+Token" },
      { "id": "sec2", "label": "半导体设备·存储" },
      { "id": "sec3", "label": "创新药出海" },
      { "id": "sec4", "label": "汽车出口" },
      { "id": "sec5", "label": "券商中报" }
    ]
  },
  {
    "title": "跨赛道暗线",
    "links": [
      { "id": "sec6", "label": "AI→金刚石散热" },
      { "id": "sec7", "label": "霍尔木兹→油气重构" },
      { "id": "sec8", "label": "存储→材料/设备" },
      { "id": "sec9", "label": "锂电消费税→产能出清" },
      { "id": "sec10", "label": "生猪双亏损→反转" }
    ]
  },
  {
    "title": "CIO深度洞察",
    "links": [
      { "id": "sec11", "label": "AI算力·Token经济" },
      { "id": "sec12", "label": "医药创新·全球重估" },
      { "id": "sec13", "label": "半导体·双重共振" },
      { "id": "sec14", "label": "小金属·供给刚性" },
      { "id": "sec15", "label": "航空·左侧配置" }
    ]
  },
  {
    "title": "预期差·困境反转",
    "links": [
      { "id": "sec16", "label": "房地产·一线修复" },
      { "id": "sec17", "label": "家电·Q2筑底" },
      { "id": "sec18", "label": "纺织服饰·ESG" },
      { "id": "sec19", "label": "航空机场" },
      { "id": "sec20", "label": "锂矿·紧平衡" }
    ]
  },
  {
    "title": "底仓资产",
    "links": [
      { "id": "sec21", "label": "银行" },
      { "id": "sec22", "label": "保险" },
      { "id": "sec23", "label": "船舶" },
      { "id": "sec24", "label": "工程机械" }
    ]
  },
  {
    "title": "大宗商品监测",
    "links": [
      { "id": "sec25", "label": "商品周期监测表" },
      { "id": "sec26", "label": "产业链估值监测表" }
    ]
  },
  {
    "title": "CIO仓位建议",
    "links": [
      { "id": "sec27", "label": "攻防配置方案" },
      { "id": "sec28", "label": "风险预案" }
    ]
  },
  {
    "title": "风险与分歧",
    "links": [
      { "id": "sec29", "label": "预期分歧点" },
      { "id": "sec30", "label": "共同风险" }
    ]
  }
];

function renderIndustryNav_0719() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
