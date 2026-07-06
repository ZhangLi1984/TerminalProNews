const JISILU_NAV_CONFIG_0706 = [
  {
    "title": "热门话题",
    "links": [
      { "id": "sec2", "label": "一、热门话题 TOP 10" },
      { "id": "sec3", "label": "一、热门话题 TOP 10" }
    ]
  },
  {
    "title": "投资方法论",
    "links": [
      { "id": "sec4", "label": "二、投资方法论精粹（实操导向）" },
      { "id": "sec5", "label": "二、投资方法论精粹（实操导向）" }
    ]
  },
  {
    "title": "热议标的",
    "links": [
      { "id": "sec6", "label": "三、热议标的清单" },
      { "id": "sec7", "label": "三、热议标的清单" }
    ]
  },
  {
    "title": "市场情绪",
    "links": [
      { "id": "sec8", "label": "四、市场情绪观察" },
      { "id": "sec9", "label": "四、市场情绪观察" }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      { "id": "sec10", "label": "五、风险提示（具体可操作）" },
      { "id": "sec11", "label": "五、风险提示（具体可操作）" }
    ]
  },
  {
    "title": "其他",
    "links": [
      { "id": "sec1", "label": "2026年7月6日 集思录投资洞察报告" },
      { "id": "sec12", "label": "六、下周关注要点" }
    ]
  }
];

function renderJisiluNav_0706() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0706.forEach(section => {
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
