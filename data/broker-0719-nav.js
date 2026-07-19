const BROKER_NAV_CONFIG_0719 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "3分钟速读" }
    ]
  },
  {
    "title": "宏观策略",
    "links": [
      { "id": "sec2", "label": "各家策略汇总" }
    ]
  },
  {
    "title": "热门行业",
    "links": [
      { "id": "sec3", "label": "推荐榜TOP10" },
      { "id": "sec4", "label": "算力/半导体/通信" },
      { "id": "sec5", "label": "煤炭" },
      { "id": "sec6", "label": "锂矿/锂电材料" },
      { "id": "sec7", "label": "地产+REITs" },
      { "id": "sec8", "label": "食品饮料/大消费" },
      { "id": "sec9", "label": "传媒游戏" },
      { "id": "sec10", "label": "汽车智能化" },
      { "id": "sec11", "label": "保险/券商" },
      { "id": "sec12", "label": "公用环保" }
    ]
  },
  {
    "title": "金股组合",
    "links": [
      { "id": "sec13", "label": "多家推荐个股" }
    ]
  },
  {
    "title": "风险与分歧",
    "links": [
      { "id": "sec14", "label": "策略分歧" },
      { "id": "sec15", "label": "共同风险" }
    ]
  }
];

function renderBrokerNav_0719() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  let html = '';
  BROKER_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
