const DECISION_NAV_CONFIG_0707 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与关键推演" },
      { "id": "sec2", "label": "操作方向" }
    ]
  },
  {
    "title": "重大新闻详解",
    "links": [
      { "id": "sec3", "label": "三星Q2利润飙升18倍" },
      { "id": "sec4", "label": "英伟达Kyber延期风波" },
      { "id": "sec5", "label": "A股沪指失守4000点" }
    ]
  },
  {
    "title": "重要新闻分类",
    "links": [
      { "id": "sec6", "label": "半导体/AI芯片" },
      { "id": "sec7", "label": "算力硬件/光通信" },
      { "id": "sec8", "label": "券商/金融" },
      { "id": "sec9", "label": "商业航天" },
      { "id": "sec10", "label": "黄金/贵金属" },
      { "id": "sec11", "label": "人形机器人" },
      { "id": "sec12", "label": "其他重要业绩" }
    ]
  },
  {
    "title": "热点赛道追踪",
    "links": [
      { "id": "sec13", "label": "ASIC定制芯片" },
      { "id": "sec14", "label": "算力硬件" },
      { "id": "sec15", "label": "商业航天" }
    ]
  },
  {
    "title": "跨赛道传导分析",
    "links": [
      { "id": "sec16", "label": "三星→ASIC替代加速" },
      { "id": "sec17", "label": "华为→先进封装重估" },
      { "id": "sec18", "label": "央行增持→避险重估" }
    ]
  },
  {
    "title": "本周关注",
    "links": [
      { "id": "sec19", "label": "关键事件日历" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec20", "label": "存储周期见顶二阶效应" },
      { "id": "sec21", "label": "大基金减持/美联储/地缘/流动性" }
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
