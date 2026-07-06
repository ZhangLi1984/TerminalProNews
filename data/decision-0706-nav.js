const DECISION_NAV_CONFIG_0706 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "核心主线与全局叙事" },
      { "id": "sec2", "label": "三条核心传导逻辑" },
      { "id": "sec3", "label": "操作方向" }
    ]
  },
  {
    "title": "重大事件详解",
    "links": [
      { "id": "sec4", "label": "华为韬定律V2发布" },
      { "id": "sec5", "label": "英伟达Kyber延迟" },
      { "id": "sec6", "label": "存储芯片超级周期" }
    ]
  },
  {
    "title": "重要新闻分类",
    "links": [
      { "id": "sec7", "label": "半导体/AI算力" },
      { "id": "sec8", "label": "创新药" },
      { "id": "sec9", "label": "新能源/锂电" },
      { "id": "sec10", "label": "石油/资源品" },
      { "id": "sec11", "label": "A股市场生态" },
      { "id": "sec12", "label": "机器人" },
      { "id": "sec13", "label": "港股/海外" }
    ]
  },
  {
    "title": "热点赛道追踪",
    "links": [
      { "id": "sec14", "label": "AI/算力" },
      { "id": "sec15", "label": "半导体" },
      { "id": "sec16", "label": "机器人" },
      { "id": "sec17", "label": "新能源" }
    ]
  },
  {
    "title": "二阶传导分析",
    "links": [
      { "id": "sec18", "label": "韬定律→先进封装链" },
      { "id": "sec19", "label": "Kyber→PCB/光纤" },
      { "id": "sec20", "label": "碳酸锂储备→战略重估" },
      { "id": "sec21", "label": "油价回落→全球再平衡" },
      { "id": "sec22", "label": "存储涨价→消费电子" }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      { "id": "sec23", "label": "7月7日关键事件" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec24", "label": "逻辑证伪风险" },
      { "id": "sec25", "label": "传闻预警" },
      { "id": "sec26", "label": "证伪信号与拥挤度" }
    ]
  }
];

function renderDecisionNav_0706() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0706.forEach(section => {
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
