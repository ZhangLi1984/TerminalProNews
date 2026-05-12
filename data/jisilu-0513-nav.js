// 集思录导航模块 - 2026-05-13
const JISILU_NAV_CONFIG_0513 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债面值博弈' },
      { id: 'j_sec2', label: '龙大转债危机' },
      { id: 'j_sec3', label: '汇车1踩踏' },
      { id: 'j_sec4', label: '老登股抄底' },
      { id: 'j_sec5', label: '可转债策略调仓' },
      { id: 'j_sec6', label: '五粮液争议' },
      { id: 'j_sec7', label: '融资余额创新高' },
      { id: 'j_sec8', label: '期货套利' },
      { id: 'j_sec9', label: '港股打新热潮' },
      { id: 'j_sec10', label: '低风险至暗时刻' }
    ]
  },
  {
    title: '方法论与标的',
    links: [
      { id: 'j_sec11', label: '投资方法论精粹' },
      { id: 'j_sec12', label: '热议标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec13', label: '市场情绪观察' },
      { id: 'j_sec14', label: '风险提示' },
      { id: 'j_sec15', label: '总结与展望' }
    ]
  }
];

function renderJisiluNav_0513() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0513.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
