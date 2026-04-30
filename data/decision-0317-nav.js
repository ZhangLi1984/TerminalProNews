// truncatedON_NAV_CONFIG_0317 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '英伟达 GTC 大会' },
      { id: 'sec5', label: '霍尔木兹海峡封锁' },
      { id: 'sec6', label: '氢能政策落地' }
    ]
  },
  {
    title: '政策解读',
    links: [
      { id: 'sec7', label: '政策宏观' },
      { id: 'sec8', label: '产业动态' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI/算力链' },
      { id: 'sec10', label: '半导体' },
      { id: 'sec11', label: '新能源' },
      { id: 'sec12', label: '机器人/脑机接口' }
    ]
  },
  {
    title: '跨赛道传导',
    links: [
      { id: 'sec13', label: 'AI→电力' },
      { id: 'sec14', label: '地缘→航运' },
      { id: 'sec15', label: '存储→消费电子' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec16', label: '重要数据/事件' },
      { id: 'sec17', label: '财报密集期' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec18', label: '逻辑证伪区' },
      { id: 'sec19', label: '传闻预警' },
      { id: 'sec20', label: '黑天鹅监测' }
    ]
  }
];

function renderDecisionNav_0317() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0317.map(section => `
    <div class="mb-8">
      <h3 class="text-lg font-bold text-slate-800 mb-3 pb-2 border-b-2 border-red-500">${section.title}</h3>
      <div class="space-y-2">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-4 py-2.5 bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-700 rounded-lg transition-all duration-200 border border-slate-200 hover:border-red-300 text-sm">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
