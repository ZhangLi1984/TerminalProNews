const FUTURES_NAV_CONFIG_0705 = [
  {
    "title": "能源期货",
    "links": [
      { "id": "fu1", "label": "原油：地缘缓和_supply滞后" },
      { "id": "fu2", "label": "碳酸锂：美国收储+广期所国际化" }
    ]
  },
  {
    "title": "金属期货",
    "links": [
      { "id": "fu3", "label": "铜：非农低于预期_价格企稳" },
      { "id": "fu4", "label": "黄金：美元偏强_地缘避险" },
      { "id": "fu5", "label": "钢铁：淡季供需双弱" }
    ]
  },
  {
    "title": "农产品期货",
    "links": [
      { "id": "fu6", "label": "玉米：第25周行情监测" }
    ]
  },
  {
    "title": "策略与风险",
    "links": [
      { "id": "fu7", "label": "期货交易策略建议" },
      { "id": "fu8", "label": "风险提示" }
    ]
  }
];

function renderFuturesNav_0705() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0705.forEach(section => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-900 mb-3 px-3">${section.title}</h3>
        <ul class="space-y-1">
          ${section.links.map(link => `
            <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="${link.id}">
              ${link.label}
            </a>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}
