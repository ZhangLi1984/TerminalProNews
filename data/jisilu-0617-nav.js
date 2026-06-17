const JISILU_NAV_CONFIG_0617 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '老登股vs科技股' },
      { id: 'j_sec2', label: '闻泰转债' },
      { id: 'j_sec3', label: '龙大转债' },
      { id: 'j_sec4', label: '传统双低低迷' },
      { id: 'j_sec5', label: '双创见顶论' },
      { id: 'j_sec6', label: '消费萎靡' },
      { id: 'j_sec7', label: '拉动消费辩论' },
      { id: 'j_sec8', label: '回到924煎熬' },
      { id: 'j_sec9', label: '北交所打新' },
      { id: 'j_sec10', label: '三板巷股东会' }
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
      { id: 'j_sec13', label: '市场情绪' },
      { id: 'j_sec14', label: '五大风险提示' },
      { id: 'j_sec15', label: '核心洞察' }
    ]
  }
];

function renderJisiluNav_0617() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
