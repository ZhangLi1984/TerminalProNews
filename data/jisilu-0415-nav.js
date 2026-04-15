// ==========================================
// 集思录导航模块 - 2026 年 4 月 15 日
// ==========================================

const JISILU_NAV_CONFIG_0415 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债危机博弈' },
      { id: 'j_sec2', label: '伊朗地缘冲突冲击' },
      { id: 'j_sec3', label: '期指贴水与卖沽策略' },
      { id: 'j_sec4', label: '跨境ETF套利新规' },
      { id: 'j_sec5', label: '可转债调仓与强赎' }
    ]
  },
  {
    title: '投资与生活',
    links: [
      { id: 'j_sec6', label: '北交所打新与中科仪' },
      { id: 'j_sec7', label: '生猪周期底部博弈' },
      { id: 'j_sec8', label: '微盘股清仓与配置' },
      { id: 'j_sec9', label: '纳指大跌布局机会' },
      { id: 'j_sec10', label: '量化弱点与散户套利' }
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
      { id: 'j_sec_risks', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0415() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0415.map(category => `
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
