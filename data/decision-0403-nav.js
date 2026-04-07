const DECISION_NAV_CONFIG_0403 = [
  {
    title: '核心速读',
    links: [
      { id: 'dec_sec1', label: '3 分钟速读' },
      { id: 'dec_sec2', label: '关键信号' }
    ]
  },
  {
    title: '重大新闻',
    links: [
      { id: 'dec_sec3', label: '中东冲突升级' },
      { id: 'dec_sec4', label: '油价突破112美元'},
      { id: 'dec_sec5', label: 'Blue Owl撤资危机' },
      { id: 'dec_sec6', label: 'SpaceX IPO+阿耳忒弥斯' },
      { id: 'dec_sec7', label: '普惠算力政策' },
      { id: 'dec_sec8', label: '数字人民币扩容' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'dec_sec9', label: 'AI & 算力' },
      { id: 'dec_sec10', label: '商业航天' },
      { id: 'dec_sec11', label: '石油石化 & 航运' },
      { id: 'dec_sec12', label: '半导体/芯片' },
      { id: 'dec_sec13', label: '养殖/农业' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'dec_sec14', label: '油价→新能源' },
      { id: 'dec_sec15', label: '通胀→利率路径' },
      { id: 'dec_sec16', label: '信贷危机→科技' },
      { id: 'dec_sec17', label: '海峡受阻→供应链'},
      { id: 'dec_sec18', label: '普惠算力→AI应用' }
    ]
  },
  {
    title: '策略与风险',
    links: [
      { id: 'dec_sec19', label: '明日关注' },
      { id: 'dec_sec20', label: '风险提示' },
      { id: 'dec_sec21', label: '投资策略速览' }
    ]
  }
];

function renderDecisionNav_0403() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0403.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700"
            data-section="${link.id}"
            onclick="scrollToSection('decision', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors flex-shrink-0"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
