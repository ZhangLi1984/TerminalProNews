// ==========================================
// 集思录投资洞察导航 - 2026年6月17日
// ==========================================

const JISILU_NAV_CONFIG_0617 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债下修到底' },
      { id: 'j_sec2', label: '双创见顶周期之争' },
      { id: 'j_sec3', label: '老登股全面溃败' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec4', label: '以身入局白马' },
      { id: 'j_sec5', label: '五粮液维权诉讼' },
      { id: 'j_sec6', label: '股市赚钱不消费' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec7', label: '期货吃贴水策略' },
      { id: 'j_sec8', label: '转债多因子轮动' },
      { id: 'j_sec9', label: '配债一手策略' },
      { id: 'j_sec10', label: '候鸟式配置' },
      { id: 'j_sec11', label: '封基折价套利' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec12', label: '闻泰转债' },
      { id: 'j_sec13', label: '五粮液' },
      { id: 'j_sec14', label: '三江转债' },
      { id: 'j_sec15', label: '科创50封基' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec16', label: '情绪评分4.5/10' },
      { id: 'j_sec17', label: '转债高估值风险' },
      { id: 'j_sec18', label: '科技抱团瓦解' },
      { id: 'j_sec19', label: '信用风险扩散' }
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
