const DECISION_NAV_CONFIG_0702 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与资金推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: 'Meta 卖算力引发 AI 硬件崩盘' },
      { id: 'sec3', label: '非农爆冷与美联储预期降温' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec4', label: 'MLCC 涨价潮全面爆发' },
      { id: 'sec5', label: '先进封装与功率器件涨价' },
      { id: 'sec6', label: '人形机器人量产加速' },
      { id: 'sec7', label: '创新药 BD 交易火爆' },
      { id: 'sec8', label: '有色金属与贵金属走强' },
      { id: 'sec9', label: '业绩预增精选' }
    ]
  },
  {
    title: '跨赛道传导',
    links: [
      { id: 'sec10', label: '三大传导链分析' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec11', label: '7 月 3 日关键事件' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec12', label: '逻辑证伪与避雷区' }
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
