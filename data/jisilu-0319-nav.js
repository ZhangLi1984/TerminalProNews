// ==========================================
// 集思录导航配置 - 2026-03-19
// ==========================================

const JISILU_NAV_CONFIG_0319 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 银行股低 PB 策略' },
      { id: 'j_sec2', label: 'TOP2 三房转债负溢价' },
      { id: 'j_sec3', label: 'TOP3 配债亏损警惕' },
      { id: 'j_sec4', label: 'TOP4 永 22 强赎教训' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec5', label: '银行股真实 PB 计算' },
      { id: 'j_sec6', label: '转债负溢价套利' },
      { id: 'j_sec7', label: '网格交易策略' },
      { id: 'j_sec8', label: '要约收购套利' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec9', label: '华夏银行/光大银行' },
      { id: 'j_sec10', label: '三房转债/上声转债' },
      { id: 'j_sec11', label: '生猪期货/燃油期货' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec12', label: '情绪评分 5.5/10' },
      { id: 'j_sec13', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0319() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0319.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-amber-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
