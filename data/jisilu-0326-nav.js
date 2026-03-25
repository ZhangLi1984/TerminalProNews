// ==========================================
// 集思录导航模块 - 2026 年 3 月 26 日
// ==========================================

const JISILU_NAV_CONFIG_0326 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 可转债配债风险' },
      { id: 'j_sec2', label: 'TOP2 券商合并套利' },
      { id: 'j_sec3', label: 'TOP3 可转债策略讨论' },
      { id: 'j_sec4', label: 'TOP4 ETF 期权卖方' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec5', label: '可转债大饼策略' },
      { id: 'j_sec6', label: '期权卖方到期策略' },
      { id: 'j_sec7', label: '券商合并套利法' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec8', label: '中金/信达/东兴' },
      { id: 'j_sec9', label: '闻泰转债/龙大转债' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec10', label: '情绪评分 5.5/10' },
      { id: 'j_sec11', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0326() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0326.map(section => `
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
