// ==========================================
// 期货市场分析 - 导航配置
// 日期：2026-03-13
// ==========================================

const FUTURES_NAV_CONFIG_0313 = [
  {
    title: '市场概况',
    links: [
      { id: 'f_sec1', label: '核心观点' }
    ]
  },
  {
    title: '重点品种',
    links: [
      { id: 'f_sec2', label: '能源化工' },
      { id: 'f_sec3', label: '有色金属' },
      { id: 'f_sec4', label: '黑色板块' },
      { id: 'f_sec5', label: '农产品' }
    ]
  },
  {
    title: '新闻热点',
    links: [
      { id: 'f_sec6', label: '中东地缘冲突' },
      { id: 'f_sec7', label: '美国贸易政策' },
      { id: 'f_sec8', label: '国内政策' }
    ]
  },
  {
    title: '操作建议',
    links: [
      { id: 'f_sec9', label: '做多机会' },
      { id: 'f_sec10', label: '做空机会' },
      { id: 'f_sec11', label: '仓位管理' }
    ]
  }
];

function renderFuturesNav_0313() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0313.map(category => `
    <div class="nav-category">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${category.title}</h3>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center text-slate-700 hover:bg-slate-200"
            data-section="${link.id}"
            onclick="scrollToSection('futures', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  const firstBtn = container.querySelector('.nav-btn');
  if (firstBtn) {
    firstBtn.classList.remove('text-slate-700', 'hover:bg-slate-200');
    firstBtn.classList.add('bg-slate-900', 'text-white', 'shadow-md');
    const dot = firstBtn.querySelector('div');
    if (dot) {
      dot.classList.remove('bg-transparent');
      dot.classList.add('bg-red-500');
    }
  }
}