const DECISION_NAV_CONFIG_0709 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "全局叙事与核心主线" },
      { "id": "sec2", "label": "操作方向" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec3", "label": "长鑫科技IPO引爆存储重估" },
      { "id": "sec4", "label": "AI硬件业绩全面兑现" },
      { "id": "sec5", "label": "美伊冲突与油价重燃" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec6", "label": "科技/半导体/存储" },
      { "id": "sec7", "label": "AI服务器/PCB/光通信" },
      { "id": "sec8", "label": "国产算力/AI芯片" },
      { "id": "sec9", "label": "新能源/储能/电力设备" },
      { "id": "sec10", "label": "锂电/电池材料" },
      { "id": "sec11", "label": "有色/资源品" },
      { "id": "sec12", "label": "券商/金融" },
      { "id": "sec13", "label": "港股/南向资金" },
      { "id": "sec14", "label": "医药/基药目录" },
      { "id": "sec15", "label": "消费/零售政策" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec16", "label": "AI/国产算力" },
      { "id": "sec17", "label": "半导体/存储" },
      { "id": "sec18", "label": "PCB/先进封装" },
      { "id": "sec19", "label": "CPO/NPO/光通信" },
      { "id": "sec20", "label": "机器人/具身智能" },
      { "id": "sec21", "label": "新能源/储能/电力设备" },
      { "id": "sec22", "label": "医药/创新药" },
      { "id": "sec23", "label": "油气/黄金/地缘对冲" }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      { "id": "sec24", "label": "十大关注要点" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec25", "label": "逻辑证伪与传闻预警" },
      { "id": "sec26", "label": "避雷方向" }
    ]
  }
];

function renderDecisionNav_0709() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0709.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
