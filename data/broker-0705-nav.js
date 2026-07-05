const BROKER_NAV_CONFIG_0705 = [
  {
    "title": "市场策略",
    "links": [
      { "id": "bk1", "label": "市场或进入风格均衡震荡" },
      { "id": "bk2", "label": "上半年上涨收官，下半年兼顾成长" },
      { "id": "bk3", "label": "科技股或迎来分化" }
    ]
  },
  {
    "title": "各券商晨会精要",
    "links": [
      { "id": "bk4", "label": "国信证券晨会" },
      { "id": "bk5", "label": "华源证券晨会" },
      { "id": "bk6", "label": "开源证券晨会" },
      { "id": "bk7", "label": "中银证券晨会" },
      { "id": "bk8", "label": "东兴证券晨报" },
      { "id": "bk9", "label": "金元证券晨报" },
      { "id": "bk10", "label": "万联/万和/申港观点" }
    ]
  },
  {
    "title": "综合研判",
    "links": [
      { "id": "bk11", "label": "本周核心观点汇总" }
    ]
  }
];

function renderBrokerNav_0705() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0705.forEach(section => {
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
