const MACRO_NAV_CONFIG_0702 = [
  {
    "title": "宏观判断",
    "links": [
      {
        "id": "sec2",
        "label": "核心宏观判断与周期定位"
      },
      {
        "id": "sec3",
        "label": "核心宏观判断与周期定位"
      },
      {
        "id": "sec8",
        "label": "资产配置建议（核心输出）"
      },
      {
        "id": "sec15",
        "label": "核心结论"
      }
    ]
  },
  {
    "title": "货币财政",
    "links": [
      {
        "id": "sec4",
        "label": "货币政策与流动性分析"
      },
      {
        "id": "sec5",
        "label": "货币政策与流动性分析"
      },
      {
        "id": "sec6",
        "label": "财政政策与产业政策"
      },
      {
        "id": "sec7",
        "label": "财政政策与产业政策"
      }
    ]
  },
  {
    "title": "行业轮动",
    "links": [
      {
        "id": "sec9",
        "label": "行业轮动与宏观映射"
      },
      {
        "id": "sec10",
        "label": "行业轮动与宏观映射"
      }
    ]
  },
  {
    "title": "预期分歧",
    "links": [
      {
        "id": "sec11",
        "label": "预期分歧点"
      }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      {
        "id": "sec12",
        "label": "宏观风险提示"
      },
      {
        "id": "sec13",
        "label": "宏观风险提示"
      },
      {
        "id": "sec14",
        "label": "关键日历与催化节点"
      }
    ]
  },
  {
    "title": "其他",
    "links": [
      {
        "id": "sec1",
        "label": "2026年7月2日 宏观研究买方策略内参"
      }
    ]
  }
];

function renderMacroNav_0702() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0702.forEach(section => {
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
