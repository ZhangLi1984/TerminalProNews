const JISILU_NAV_CONFIG_0709 = [
  {
    "title": "热门话题",
    "links": [
      { "id": "sec1", "label": "科创/半导体/AI主线极端强势" },
      { "id": "sec2", "label": "老登股/红利低波下跌" },
      { "id": "sec3", "label": "镇洋转债：强赎+合并" },
      { "id": "sec4", "label": "龙大转债：违约风险" },
      { "id": "sec5", "label": "白酒/五粮液/消费下行" },
      { "id": "sec6", "label": "微盘策略失效" },
      { "id": "sec7", "label": "北交所打新合规" },
      { "id": "sec8", "label": "IM-IC价差套利" },
      { "id": "sec9", "label": "期权卖方风险" },
      { "id": "sec10", "label": "闻泰转债化债进展" }
    ]
  },
  {
    "title": "投资方法论",
    "links": [
      { "id": "sec11", "label": "可转债强赎计数博弈" },
      { "id": "sec12", "label": "问题转债最后转股期" },
      { "id": "sec13", "label": "期指吃贴水增强" },
      { "id": "sec14", "label": "红利收息/负成本资产" }
    ]
  },
  {
    "title": "热议标的",
    "links": [
      { "id": "sec15", "label": "热议标的清单" }
    ]
  },
  {
    "title": "市场情绪",
    "links": [
      { "id": "sec16", "label": "情绪观察（4.5/10）" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec17", "label": "科技抱团风险" },
      { "id": "sec18", "label": "可转债信用风险" },
      { "id": "sec19", "label": "期权卖方尾部风险" },
      { "id": "sec20", "label": "白酒基本面风险" }
    ]
  }
];

function renderJisiluNav_0709() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0709.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
