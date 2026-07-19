const MACRO_NAV_CONFIG_0719 = [
  {
    "title": "核心宏观判断",
    "links": [
      { "id": "sec1", "label": "经济增长·弱总量强结构" },
      { "id": "sec2", "label": "通胀预期·CPI/PPI" },
      { "id": "sec3", "label": "周期定位·美林时钟" }
    ]
  },
  {
    "title": "货币政策",
    "links": [
      { "id": "sec4", "label": "政策取向·提效率" },
      { "id": "sec5", "label": "工具预判·双降分歧" },
      { "id": "sec6", "label": "流动性·M2-M1剪刀差" }
    ]
  },
  {
    "title": "财政政策",
    "links": [
      { "id": "sec7", "label": "财政力度·下半年增强" },
      { "id": "sec8", "label": "产业方向·反内卷" }
    ]
  },
  {
    "title": "大类资产配置",
    "links": [
      { "id": "sec9", "label": "配置建议总表" }
    ]
  },
  {
    "title": "行业轮动映射",
    "links": [
      { "id": "sec10", "label": "集成电路/AI算力" },
      { "id": "sec11", "label": "汽车出口" },
      { "id": "sec12", "label": "船舶/高端装备" },
      { "id": "sec13", "label": "服务消费" },
      { "id": "sec14", "label": "电力设备/新型电网" },
      { "id": "sec15", "label": "黄金/贵金属" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec16", "label": "外部风险" },
      { "id": "sec17", "label": "内部风险" },
      { "id": "sec18", "label": "证伪指标" }
    ]
  }
];

function renderMacroNav_0719() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
