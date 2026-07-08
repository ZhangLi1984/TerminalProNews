const DECISION_NAV_CONFIG_0708 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与操作方向" },
      { "id": "sec2", "label": "市场全景速览" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec3", "label": "芯片股全球反攻：三星暴涨韩国救场" },
      { "id": "sec4", "label": "A股V型反转：科技领涨4000点攻防" },
      { "id": "sec5", "label": "美伊冲突骤然升级：油价跳涨" },
      { "id": "sec6", "label": "GPT-5.6本周四发布：AI催化再升级" }
    ]
  },
  {
    "title": "行业新闻追踪",
    "links": [
      { "id": "sec7", "label": "半导体/AI芯片：国产算力突围" },
      { "id": "sec8", "label": "算力硬件：云计算+昇腾共振" },
      { "id": "sec9", "label": "创新药：恒瑞+中生双催化" },
      { "id": "sec10", "label": "港股科技：阿里暴涨10%+" },
      { "id": "sec11", "label": "锂矿/新能源：价格回暖与分化" },
      { "id": "sec12", "label": "宏观/政策" }
    ]
  },
  {
    "title": "业绩亮点",
    "links": [
      { "id": "sec13", "label": "H1业绩爆发公司一览" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec14", "label": "国产算力Plan B" },
      { "id": "sec15", "label": "折叠屏iPhone量产" },
      { "id": "sec16", "label": "AI软件应用爆发" },
      { "id": "sec17", "label": "旅游强国建设" }
    ]
  },
  {
    "title": "跨赛道传导",
    "links": [
      { "id": "sec18", "label": "芯片暴跌→反攻→结构分化" },
      { "id": "sec19", "label": "美伊冲突→油价→A股传导" },
      { "id": "sec20", "label": "GPT-5.6→AI全产业链" }
    ]
  },
  {
    "title": "本周关注",
    "links": [
      { "id": "sec21", "label": "关键事件日历" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec22", "label": "地缘/宏观风险预警" },
      { "id": "sec23", "label": "板块分化与逻辑证伪" }
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
