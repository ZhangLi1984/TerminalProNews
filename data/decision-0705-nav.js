const DECISION_NAV_CONFIG_0705 = [
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
      { "id": "sec3", "label": "存储芯片供应短缺与江波龙" },
      { "id": "sec4", "label": "人形机器人产业化狂飙" },
      { "id": "sec5", "label": "A股交易制度改革落地" },
      { "id": "sec6", "label": "华为V2版韬定律" },
      { "id": "sec7", "label": "证监会再融资新规" }
    ]
  },
  {
    "title": "重要新闻分类",
    "links": [
      { "id": "sec8", "label": "科技/AI/半导体" },
      { "id": "sec9", "label": "新能源/储能" },
      { "id": "sec10", "label": "机器人/高端制造" },
      { "id": "sec11", "label": "金融/宏观" },
      { "id": "sec12", "label": "地缘政治" }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      { "id": "sec13", "label": "AI/算力赛道" },
      { "id": "sec14", "label": "机器人/具身智能" },
      { "id": "sec15", "label": "半导体赛道" },
      { "id": "sec16", "label": "新能源赛道" }
    ]
  },
  {
    "title": "二阶传导",
    "links": [
      { "id": "sec17", "label": "AI算力→材料→电力" },
      { "id": "sec18", "label": "存储涨价→终端分化" },
      { "id": "sec19", "label": "地缘→油价→新能源" },
      { "id": "sec20", "label": "机器人→车企→供应链" }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      { "id": "sec21", "label": "7月6日-12日关键事件" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec22", "label": "短期波动风险" },
      { "id": "sec23", "label": "中期结构性风险" }
    ]
  }
];

function renderDecisionNav_0705() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0705.forEach(section => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-900 mb-3 px-3">${section.title}</h3>
        <ul class="space-y-1">
          ${section.links.map(link => `
            <li>
              <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="${link.id}">
                ${link.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}
