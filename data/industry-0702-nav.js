const INDUSTRY_NAV_CONFIG_0702 = [
  {
    "title": "核心赛道",
    "links": [
      {
        "id": "sec1",
        "label": "宏观（36篇）"
      },
      {
        "id": "sec2",
        "label": "策略（51篇）"
      },
      {
        "id": "sec3",
        "label": "债券（43篇）"
      },
      {
        "id": "sec4",
        "label": "公司（46篇）"
      },
      {
        "id": "sec5",
        "label": "创业板（15篇）"
      }
    ]
  },
  {
    "title": "周期监测",
    "links": [
      {
        "id": "sec6",
        "label": "基金（9篇）"
      },
      {
        "id": "sec7",
        "label": "晨报（50篇）"
      },
      {
        "id": "sec8",
        "label": "行业（137篇）"
      }
    ]
  }
];

function renderIndustryNav_0702() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0702.forEach(section => {
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
