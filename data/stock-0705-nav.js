const STOCK_NAV_CONFIG_0705 = [
  {
    "title": "重点推荐标的",
    "links": [
      { "id": "st1", "label": "买入评级：国泰海通" },
      { "id": "st2", "label": "买入评级：三祥新材" },
      { "id": "st3", "label": "买入评级：芯碁微装" },
      { "id": "st4", "label": "买入评级：影石创新" },
      { "id": "st5", "label": "买入评级：赛力斯" }
    ]
  },
  {
    "title": "增持/覆盖标的",
    "links": [
      { "id": "st6", "label": "增持：江丰电子" },
      { "id": "st7", "label": "增持：乔锋智能" },
      { "id": "st8", "label": "买入：长电科技" },
      { "id": "st9", "label": "买入：广钢气体" },
      { "id": "st10", "label": "买入：锐捷网络" }
    ]
  },
  {
    "title": "新股与研报速查",
    "links": [
      { "id": "st11", "label": "新股覆盖研究" },
      { "id": "st12", "label": "全部研报评级速查表" }
    ]
  }
];

function renderStockNav_0705() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0705.forEach(section => {
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
