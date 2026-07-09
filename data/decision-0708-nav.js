const DECISION_NAV_CONFIG_0708 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "全局叙事与核心主线" },
      { "id": "sec2", "label": "关键推演与操作方向" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec3", "label": "AI定价逻辑切换" },
      { "id": "sec4", "label": "美伊冲突升级" },
      { "id": "sec5", "label": "港股科技与南向资金" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec6", "label": "云计算/AI应用" },
      { "id": "sec7", "label": "国产算力/华为昇腾" },
      { "id": "sec8", "label": "半导体/存储/HBM" },
      { "id": "sec9", "label": "新能源车/储能" },
      { "id": "sec10", "label": "创新药/医药" },
      { "id": "sec11", "label": "券商/金融" },
      { "id": "sec12", "label": "化工/资源品" }
    ]
  },
  {
    "title": "热点赛道追踪",
    "links": [
      { "id": "sec13", "label": "AI/云计算/国产算力" },
      { "id": "sec14", "label": "半导体/存储" },
      { "id": "sec15", "label": "港股科技" },
      { "id": "sec16", "label": "油气/煤炭/黄金" },
      { "id": "sec17", "label": "新能源车/储能" },
      { "id": "sec18", "label": "机器人/具身智能" },
      { "id": "sec19", "label": "创新药/CXO" }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      { "id": "sec20", "label": "关键事件与催化" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec21", "label": "逻辑证伪与避雷针" }
    ]
  }
];

function renderDecisionNav_0708() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0708.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
