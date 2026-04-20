// ==========================================
// 集思录导航模块 - 2026年4月20日
// ==========================================

const JISILU_NAV_CONFIG_0420 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债多空博弈' },
      { id: 'j_sec2', label: '转债整体估值偏高' },
      { id: 'j_sec3', label: '美股标普500 vs A股' },
      { id: 'j_sec4', label: '低利率理财困境' },
      { id: 'j_sec5', label: '期权卖沽策略实战' }
    ]
  },
  {
    title: '投资记录',
    links: [
      { id: 'j_sec6', label: '大V实盘记录' },
      { id: 'j_sec7', label: '美伊冲突市场冲击' },
      { id: 'j_sec8', label: '北交所打新策略' },
      { id: 'j_sec9', label: 'A股温度计仓位管理' },
      { id: 'j_sec10', label: '死磕老登股 vs 分散' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'j_sec_strategy', label: '投资方法论精粹' },
      { id: 'j_sec_tickers', label: '热议标的清单' },
      { id: 'j_sec_sentiment', label: '市场情绪观察' }
    ]
  },
  {
    title: '风险控制',
    links: [
      { id: 'j_sec_debates', label: '争议与分歧' },
      { id: 'j_sec_risks', label: '风险提示' },
      { id: 'j_sec_next', label: '下周关注' }
    ]
  }
];

function renderJisiluNav_0420() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0420.map(category => `
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
