const BROKER_NAV_CONFIG_0708 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "市场共识与仓位建议" },
      { "id": "sec2", "label": "热门赛道TOP5与金股" }
    ]
  },
  {
    "title": "宏观策略汇总",
    "links": [
      { "id": "sec3", "label": "10家券商大盘判断" }
    ]
  },
  {
    "title": "行业详细观点",
    "links": [
      { "id": "sec4", "label": "AI硬件/半导体" },
      { "id": "sec5", "label": "电力设备/储能" },
      { "id": "sec6", "label": "化工/电子新材料" },
      { "id": "sec7", "label": "有色/资源品" },
      { "id": "sec8", "label": "创新药/CXO" },
      { "id": "sec9", "label": "机器人/物理AI" },
      { "id": "sec10", "label": "地产/非银/汽车" }
    ]
  },
  {
    "title": "金股组合",
    "links": [
      { "id": "sec11", "label": "多券商共同推荐" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec12", "label": "分歧与共同风险" }
    ]
  }
];

function renderBrokerNav_0708() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  let html = '';
  BROKER_NAV_CONFIG_0708.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
