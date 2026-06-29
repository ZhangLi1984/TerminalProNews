// ==========================================
// Jisilu Nav Config: 2026-06-29
// ==========================================

const JISILU_NAV_CONFIG_0629 = [
  {
    title: '热门话题 TOP 5',
    links: [
      { id: 'sec1', label: '① 可转债违约潮来袭' },
      { id: 'sec2', label: '② 科技vs老登风格撕裂' },
      { id: 'sec3', label: '③ 港股互联网无底洞' },
      { id: 'sec4', label: '④ 白酒帝国崩塌' },
      { id: 'sec5', label: '⑤ AI改变世界与通缩' }
    ]
  },
  {
    title: '热门话题 6-10',
    links: [
      { id: 'sec6', label: '⑥ 低风险渠道被堵死' },
      { id: 'sec7', label: '⑦ 可转债策略实战' },
      { id: 'sec8', label: '⑧ 期指贴水增强' },
      { id: 'sec9', label: '⑨ 宁泉资产道歉' },
      { id: 'sec10', label: '⑩ 马斯克庞氏论' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'method1', label: '转债多因子轮动' },
      { id: 'method2', label: '候鸟式大类轮动' },
      { id: 'method3', label: '期指吃贴水增强' },
      { id: 'method4', label: '债权申报维权' },
      { id: 'method5', label: '北交所打新策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'stock1', label: '龙大转债' },
      { id: 'stock2', label: '闻泰转债' },
      { id: 'stock3', label: '文科转债' },
      { id: 'stock4', label: '港股互联网ETF' },
      { id: 'stock5', label: '白酒板块' },
      { id: 'stock6', label: '中际旭创' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'mood', label: '情绪评分 3.8/10' },
      { id: 'risk', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0629() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0629.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}" onclick="event.preventDefault(); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'}); return false;">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
