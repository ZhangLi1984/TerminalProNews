const DECISION_NAV_CONFIG_0715 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与关键推演" },
      { "id": "sec2", "label": "操作方向" }
    ]
  },
  {
    "title": "重大事件推演",
    "links": [
      { "id": "sec3", "label": "美伊冲突升级与霍尔木兹封锁" },
      { "id": "sec4", "label": "美国CPI负增长与沃什首秀" },
      { "id": "sec5", "label": "创新药BD出海爆发" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec6", "label": "科技/AI/半导体" },
      { "id": "sec7", "label": "新能源" },
      { "id": "sec8", "label": "宏观/政策" },
      { "id": "sec9", "label": "大宗/周期" },
      { "id": "sec10", "label": "其他重要行业" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec11", "label": "赛道追踪一览表" }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      { "id": "sec12", "label": "关键催化与事件" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec13", "label": "逻辑证伪与传闻预警" },
      { "id": "sec14", "label": "其他风险信号" }
    ]
  }
];

function renderDecisionNav_0715() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0715.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
