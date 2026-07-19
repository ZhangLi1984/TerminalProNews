const JISILU_NAV_CONFIG_0719 = [
  {
    "title": "热门话题TOP10",
    "links": [
      { "id": "sec1", "label": "龙大转债违约与兑付" },
      { "id": "sec2", "label": "闻泰转债化债" },
      { "id": "sec3", "label": "证金公司撤退" },
      { "id": "sec4", "label": "茅台提价" },
      { "id": "sec5", "label": "长鑫科技IPO" },
      { "id": "sec6", "label": "科技抱团失衡" },
      { "id": "sec7", "label": "红利vs科技争论" },
      { "id": "sec8", "label": "片仔癀现金流" },
      { "id": "sec9", "label": "港股互联网困境" },
      { "id": "sec10", "label": "大盘点位判断" }
    ]
  },
  {
    "title": "投资方法论",
    "links": [
      { "id": "sec11", "label": "可转债强赎窗口策略" },
      { "id": "sec12", "label": "低溢价转债策略" },
      { "id": "sec13", "label": "红利低波ETF择时" },
      { "id": "sec14", "label": "四资产均衡策略" },
      { "id": "sec15", "label": "打新策略" },
      { "id": "sec16", "label": "省印花税技巧" }
    ]
  },
  {
    "title": "热议标的",
    "links": [
      { "id": "sec17", "label": "热议标的一览表" }
    ]
  },
  {
    "title": "市场情绪",
    "links": [
      { "id": "sec18", "label": "整体情绪·4/10偏悲观" },
      { "id": "sec19", "label": "乐观与悲观信号" }
    ]
  },
  {
    "title": "争议与分歧",
    "links": [
      { "id": "sec20", "label": "科技抱团可持续?" },
      { "id": "sec21", "label": "红利低波值否?" },
      { "id": "sec22", "label": "茅台提价利/空?" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec23", "label": "可转债违约风险" },
      { "id": "sec24", "label": "科技抱团瓦解" },
      { "id": "sec25", "label": "证金撤退冲击" },
      { "id": "sec26", "label": "传统行业下滑" },
      { "id": "sec27", "label": "AI泡沫·量化不对称" }
    ]
  }
];

function renderJisiluNav_0719() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
