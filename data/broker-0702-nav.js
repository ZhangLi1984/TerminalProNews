const BROKER_NAV_CONFIG_0702 = [
  {
    "title": "执行摘要",
    "links": [
      {
        "id": "sec2",
        "label": "执行摘要"
      }
    ]
  },
  {
    "title": "数据速览",
    "links": [
      {
        "id": "sec3",
        "label": "一、市场数据速览（7月1日收盘）"
      }
    ]
  },
  {
    "title": "券商分析",
    "links": [
      {
        "id": "sec4",
        "label": "二、各券商详细分析"
      },
      {
        "id": "sec5",
        "label": "二、各券商详细分析"
      }
    ]
  },
  {
    "title": "观点汇总",
    "links": [
      {
        "id": "sec1",
        "label": "券商晨报买方汇总内参"
      },
      {
        "id": "sec6",
        "label": "三、此前各期重点观点汇总（6月25日-7"
      },
      {
        "id": "sec7",
        "label": "三、此前各期重点观点汇总（6月25日-7"
      },
      {
        "id": "sec16",
        "label": "八、金股组合汇总（7月）"
      },
      {
        "id": "sec17",
        "label": "八、金股组合汇总（7月）"
      }
    ]
  },
  {
    "title": "共识分析",
    "links": [
      {
        "id": "sec8",
        "label": "四、共识度分析"
      },
      {
        "id": "sec9",
        "label": "四、共识度分析"
      }
    ]
  },
  {
    "title": "策略建议",
    "links": [
      {
        "id": "sec10",
        "label": "五、核心主题与催化剂梳理"
      },
      {
        "id": "sec11",
        "label": "五、核心主题与催化剂梳理"
      },
      {
        "id": "sec12",
        "label": "六、投资策略建议"
      },
      {
        "id": "sec13",
        "label": "六、投资策略建议"
      }
    ]
  },
  {
    "title": "分歧预期",
    "links": [
      {
        "id": "sec14",
        "label": "七、分歧点与预期差"
      },
      {
        "id": "sec15",
        "label": "七、分歧点与预期差"
      }
    ]
  }
];

function renderBrokerNav_0702() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0702.forEach(section => {
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
