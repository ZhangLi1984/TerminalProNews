const DECISION_NAV_CONFIG_0701 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与资金推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '工业互联网政策' },
      { id: 'sec3', label: '韩国芯片出口异动' },
      { id: 'sec4', label: '人形机器人量产加速' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec5', label: '半导体材料涨价' },
      { id: 'sec6', label: '券商板块回归' },
      { id: 'sec7', label: '猪周期右侧上行' },
      { id: 'sec8', label: '光伏情绪错杀' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec9', label: '逻辑证伪与避雷区' }
    ]
  }
];

function renderDecisionNav_0701() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0701.forEach(section => {
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
