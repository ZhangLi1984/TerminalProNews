// ==========================================
// 集思录导航配置 - 2026-03-24
// ==========================================

const JISILU_NAV_CONFIG_0324 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 可转债市场动态' },
      { id: 'j_sec2', label: 'TOP2 中金/信达/东兴合并' },
      { id: 'j_sec3', label: 'TOP3 中东地缘政治' },
      { id: 'j_sec4', label: 'TOP4 牛市后期判断' },
      { id: 'j_sec5', label: 'TOP5 股指期货/期权策略' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec6', label: '可转债摊大饼' },
      { id: 'j_sec7', label: '网格交易策略' },
      { id: 'j_sec8', label: '期权对冲策略' },
      { id: 'j_sec9', label: '红利低波 ETF 定投' },
      { id: 'j_sec10', label: '事件驱动套利' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec11', label: '中金/信达/东兴' },
      { id: 'j_sec12', label: '龙大/伟测/百川转债' },
      { id: 'j_sec13', label: '红利低波 ETF' },
      { id: 'j_sec14', label: '油气 ETF/LOF' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec15', label: '情绪评分 4.2/10' },
      { id: 'j_sec16', label: '六大风险提示' }
    ]
  }
];

function renderJisiluNav_0324() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0324.map(section => `
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
