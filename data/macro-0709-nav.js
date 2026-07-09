const MACRO_NAV_CONFIG_0709 = [
  {
    "title": "宏观判断",
    "links": [
      { "id": "sec1", "label": "核心宏观判断与周期定位" },
      { "id": "sec2", "label": "通胀预期与交叉验证" }
    ]
  },
  {
    "title": "政策分析",
    "links": [
      { "id": "sec3", "label": "货币政策与流动性" },
      { "id": "sec4", "label": "财政政策与产业政策" }
    ]
  },
  {
    "title": "资产配置",
    "links": [
      { "id": "sec5", "label": "大类资产配置建议" },
      { "id": "sec6", "label": "行业轮动与宏观映射" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec7", "label": "宏观风险提示" },
      { "id": "sec8", "label": "证伪指标" }
    ]
  },
  {
    "title": "组合建议",
    "links": [
      { "id": "sec9", "label": "买方策略落地" }
    ]
  }
];

function renderMacroNav_0709() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0709.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
