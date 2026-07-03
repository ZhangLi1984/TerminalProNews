const FUTURES_NAV_CONFIG_0702 = [
  {
    "title": "期货市场",
    "links": [
      {
        "id": "sec1",
        "label": "暂无数据"
      }
    ]
  }
];

function renderFuturesNav_0702() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0702.forEach(section => {
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
