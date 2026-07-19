const DECISION_NAV_CONFIG_0719 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心叙事与关键推演" },
      { "id": "sec1b", "label": "操作方向" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec2", "label": "美伊冲突·霍尔木兹关闭" },
      { "id": "sec3", "label": "Kimi K3·半导体熊市" },
      { "id": "sec4", "label": "2037亿ETF抄底·长鑫IPO" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec5", "label": "科技/AI/半导体" },
      { "id": "sec6", "label": "新能源/锂电/储能" },
      { "id": "sec7", "label": "政策宏观" },
      { "id": "sec8", "label": "白酒消费" },
      { "id": "sec9", "label": "地产周期" },
      { "id": "sec10", "label": "监管处罚" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec11", "label": "AI算力·超节点" },
      { "id": "sec12", "label": "液冷·AI热管理" },
      { "id": "sec13", "label": "存储芯片·涨价周期" },
      { "id": "sec14", "label": "人形机器人" },
      { "id": "sec15", "label": "太空算力" },
      { "id": "sec16", "label": "新能源/储能" },
      { "id": "sec17", "label": "半导体设备/国产化" },
      { "id": "sec18", "label": "钼价·新高" }
    ]
  },
  {
    "title": "下周关注",
    "links": [
      { "id": "sec19", "label": "关键事件日历" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec20", "label": "逻辑证伪" },
      { "id": "sec21", "label": "传闻预警" }
    ]
  }
];

function renderDecisionNav_0719() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
