const MACRO_NAV_CONFIG_0705 = [
  {
    "title": "核心结论",
    "links": [
      {
        "id": "sec1",
        "label": "Executive Summary"
      }
    ]
  },
  {
    "title": "宏观数据",
    "links": [
      {
        "id": "sec2",
        "label": "通胀指标（CPI/PPI）"
      },
      {
        "id": "sec3",
        "label": "经济增长（GDP/PMI）"
      },
      {
        "id": "sec4",
        "label": "投资与消费"
      },
      {
        "id": "sec5",
        "label": "外贸数据"
      },
      {
        "id": "sec6",
        "label": "财政与金融"
      },
      {
        "id": "sec7",
        "label": "利率与汇率"
      }
    ]
  },
  {
    "title": "国内研判",
    "links": [
      {
        "id": "sec8",
        "label": "PMI回暖三大信号"
      },
      {
        "id": "sec9",
        "label": "K型分化深化"
      },
      {
        "id": "sec10",
        "label": "经济周期定位"
      }
    ]
  },
  {
    "title": "海外研判",
    "links": [
      {
        "id": "sec11",
        "label": "美国经济K型分化"
      },
      {
        "id": "sec12",
        "label": "中东地缘核心变量"
      },
      {
        "id": "sec13",
        "label": "强美元分析"
      }
    ]
  },
  {
    "title": "AI专题",
    "links": [
      {
        "id": "sec14",
        "label": "AI超级周期延续"
      },
      {
        "id": "sec15",
        "label": "AI商业化边界"
      },
      {
        "id": "sec16",
        "label": "中国AI产业链"
      }
    ]
  },
  {
    "title": "配置与日历",
    "links": [
      {
        "id": "sec17",
        "label": "大类资产配置建议"
      },
      {
        "id": "sec18",
        "label": "股票结构建议"
      },
      {
        "id": "sec19",
        "label": "7月关键事件日历"
      }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      {
        "id": "sec20",
        "label": "六大风险提示"
      },
      {
        "id": "sec21",
        "label": "核心数据速查表"
      }
    ]
  }
];

function renderMacroNav_0705() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0705.forEach(section => {
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
