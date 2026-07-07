const DECISION_NAV_CONFIG_0707 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与关键推演" },
      { "id": "sec2", "label": "操作方向" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec3", "label": "三星利润暴增18倍却暴跌" },
      { "id": "sec4", "label": "A股失守4000点" },
      { "id": "sec5", "label": "英伟达Kyber延期反转" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec6", "label": "半导体/AI芯片" },
      { "id": "sec7", "label": "算力硬件/PCB" },
      { "id": "sec8", "label": "游戏板块" },
      { "id": "sec9", "label": "锂矿/新能源" },
      { "id": "sec10", "label": "宏观/政策" },
      { "id": "sec11", "label": "美股/海外" }
    ]
  },
  {
    "title": "业绩亮点",
    "links": [
      { "id": "sec12", "label": "H1业绩爆发公司一览" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec13", "label": "AI/算力：从GPU到全栈" },
      { "id": "sec14", "label": "半导体设备：全球景气" },
      { "id": "sec15", "label": "人形机器人" },
      { "id": "sec16", "label": "商业航天" },
      { "id": "sec17", "label": "折叠屏iPhone" }
    ]
  },
  {
    "title": "跨赛道传导",
    "links": [
      { "id": "sec18", "label": "三星→存储→ASIC" },
      { "id": "sec19", "label": "A股4000→K型分化" },
      { "id": "sec20", "label": "华为→先进封装" },
      { "id": "sec21", "label": "锂矿战略重估" }
    ]
  },
  {
    "title": "本周关注",
    "links": [
      { "id": "sec22", "label": "关键事件日历" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec23", "label": "逻辑证伪与传闻预警" },
      { "id": "sec24", "label": "地缘/宏观风险" }
    ]
  }
];

function renderDecisionNav_0707() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0707.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
