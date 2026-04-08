// ==========================================
// 集思录导航模块 - 2026 年 4 月 8 日
// ==========================================

const JISILU_NAV_CONFIG_0408 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '可转债 (30 帖)' },
      { id: 'j_sec2', label: '其他 (27 帖)' },
      { id: 'j_sec3', label: '期货/宏观 (6 帖)' },
      { id: 'j_sec4', label: 'ETF/指数 (4 帖)' },
      { id: 'j_sec5', label: '美股/宏观 (3 帖)' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'j_sec_strategy', label: '投资方法论' },
      { id: 'j_sec_tickers', label: '热议标的' },
      { id: 'j_sec_sentiment', label: '市场情绪' }
    ]
  },
  {
    title: '风险控制',
    links: [
      { id: 'j_sec_risks', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0408() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0408.map(category => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h4>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900 truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
