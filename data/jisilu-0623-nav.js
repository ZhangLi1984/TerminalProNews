const JISILU_NAV_CONFIG_0623 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '老登vs小登风格撕裂' },
      { id: 'j_sec2', label: '科技牛泡沫争议' },
      { id: 'j_sec3', label: '港股互联网暴跌37%' },
      { id: 'j_sec4', label: '可转债市场高温' },
      { id: 'j_sec5', label: '马斯克庞氏骗局论' },
      { id: 'j_sec6', label: '低风险渠道被封死' },
      { id: 'j_sec7', label: '北交所打新不公' },
      { id: 'j_sec8', label: '龙大转债违约风险' },
      { id: 'j_sec9', label: '国家队持续减持' },
      { id: 'j_sec10', label: '中年投资与职场焦虑' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '六大实战策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec12', label: '八大标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec13', label: '市场情绪观察' },
      { id: 'j_sec14', label: '六大风险提示' },
      { id: 'j_sec15', label: 'KOL观点追踪' }
    ]
  }
];

function renderJisiluNav_0623() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0623.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
