const DECISION_NAV_CONFIG_0705 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与全局叙事" },
      { "id": "sec2", "label": "三大关键推演" },
      { "id": "sec3", "label": "操作方向" }
    ]
  },
  {
    "title": "重大新闻详解",
    "links": [
      { "id": "sec4", "label": "存储芯片供应严重短缺" },
      { "id": "sec5", "label": "A股交易规则重大变革" },
      { "id": "sec6", "label": "Meta卖算力的二阶解读" }
    ]
  },
  {
    "title": "重要新闻分类",
    "links": [
      { "id": "sec7", "label": "科技/AI/半导体" },
      { "id": "sec8", "label": "人形机器人/具身智能" },
      { "id": "sec9", "label": "商业航天" },
      { "id": "sec10", "label": "创新药" },
      { "id": "sec11", "label": "新能源/锂电/储能" },
      { "id": "sec12", "label": "宏观/政策" },
      { "id": "sec13", "label": "地缘政治/大宗" }
    ]
  },
  {
    "title": "业绩亮点",
    "links": [
      { "id": "sec14", "label": "中报预告窗口" }
    ]
  },
  {
    "title": "二阶传导分析",
    "links": [
      { "id": "sec15", "label": "AI算力过剩→存储反面确认" },
      { "id": "sec16", "label": "存储涨价→终端两极分化" },
      { "id": "sec17", "label": "再融资松绑→券商增量" },
      { "id": "sec18", "label": "玻璃基板→封装链重构" },
      { "id": "sec19", "label": "美国锂收储→战略重估" },
      { "id": "sec20", "label": "机器人→车企供应链共享" }
    ]
  },
  {
    "title": "下周关注",
    "links": [
      { "id": "sec21", "label": "7月6日-12日关键事件" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec22", "label": "逻辑证伪信号" },
      { "id": "sec23", "label": "传闻预警与估值风险" },
      { "id": "sec24", "label": "制度风险" }
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
