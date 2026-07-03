const STOCK_NAV_CONFIG_0702 = [
  {
    "title": "S级标的",
    "links": [
      {
        "id": "sec3",
        "label": "S 级标的深度分析（3 只）"
      },
      {
        "id": "sec4",
        "label": "S 级标的深度分析（3 只）"
      }
    ]
  },
  {
    "title": "A级标的",
    "links": [
      {
        "id": "sec5",
        "label": "A 级标的深度分析（20+ 只）"
      },
      {
        "id": "sec6",
        "label": "A 级标的深度分析（20+ 只）"
      }
    ]
  },
  {
    "title": "B级标的",
    "links": [
      {
        "id": "sec7",
        "label": "B 级标的简要列表（40+ 只）"
      }
    ]
  },
  {
    "title": "C级标的",
    "links": [
      {
        "id": "sec8",
        "label": "C 级标的简要列表（10+ 只）"
      }
    ]
  },
  {
    "title": "其他",
    "links": [
      {
        "id": "sec1",
        "label": "2026-07-02 个股研报深度总结"
      },
      {
        "id": "sec2",
        "label": "执行状态"
      },
      {
        "id": "sec9",
        "label": "全量 100 篇表格清单"
      }
    ]
  }
];

function renderStockNav_0702() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0702.forEach(section => {
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
