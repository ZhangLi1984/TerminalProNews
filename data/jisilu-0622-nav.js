const JISILU_NAV_CONFIG_0622 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '科技吸血牛行情' },
      { id: 'j_sec2', label: '老登股集体崩盘' },
      { id: 'j_sec3', label: '港股互联网腰斩' },
      { id: 'j_sec4', label: '可转债信用风险' },
      { id: 'j_sec5', label: '国家队撤退争议' },
      { id: 'j_sec6', label: '券商合并套利' },
      { id: 'j_sec7', label: '融资余额创新高' },
      { id: 'j_sec8', label: '期权卖方实录' },
      { id: 'j_sec9', label: '投资心态崩溃' },
      { id: 'j_sec10', label: '低风险渠道封死' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '六大策略精粹' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec12', label: '核心标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec13', label: '市场情绪观察' },
      { id: 'j_sec14', label: '六大风险提示' },
      { id: 'j_sec15', label: '集思录金句' }
    ]
  }
];

function renderJisiluNav_0622() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0622.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
