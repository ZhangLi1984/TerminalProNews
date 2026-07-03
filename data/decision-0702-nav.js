const DECISION_NAV_CONFIG_0702 = [
  {
    "title": "核心摘要",
    "links": [
      {
        "id": "sec2",
        "label": "一、核心摘要与全局叙事（3分钟速读）"
      },
      {
        "id": "sec3",
        "label": "一、核心摘要与全局叙事（3分钟速读）"
      }
    ]
  },
  {
    "title": "重大事件",
    "links": [
      {
        "id": "sec4",
        "label": "二、重大事件：深度推理与沙盘推演"
      },
      {
        "id": "sec5",
        "label": "二、重大事件：深度推理与沙盘推演"
      }
    ]
  },
  {
    "title": "重要新闻",
    "links": [
      {
        "id": "sec6",
        "label": "三、重要新闻分类"
      },
      {
        "id": "sec7",
        "label": "三、重要新闻分类"
      }
    ]
  },
  {
    "title": "热点赛道",
    "links": [
      {
        "id": "sec8",
        "label": "四、热点赛道追踪"
      },
      {
        "id": "sec9",
        "label": "四、热点赛道追踪"
      },
      {
        "id": "sec10",
        "label": "五、跨赛道传导分析"
      },
      {
        "id": "sec11",
        "label": "五、跨赛道传导分析"
      }
    ]
  },
  {
    "title": "明日关注",
    "links": [
      {
        "id": "sec12",
        "label": "六、明日（7月3日）关注"
      },
      {
        "id": "sec13",
        "label": "六、明日（7月3日）关注"
      }
    ]
  },
  {
    "title": "风险提示",
    "links": [
      {
        "id": "sec14",
        "label": "七、风险提示与证伪区（避雷针）"
      },
      {
        "id": "sec15",
        "label": "七、风险提示与证伪区（避雷针）"
      }
    ]
  },
  {
    "title": "其他",
    "links": [
      {
        "id": "sec1",
        "label": "2026-07-02 投资决策内参 | "
      }
    ]
  }
];

function renderDecisionNav_0702() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0702.forEach(section => {
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
