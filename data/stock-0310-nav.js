// ==========================================
// 个股研报导航配置 - 2026-03-10
// ==========================================

const STOCK_NAV_CONFIG_0310 = [
  {
    title: '📈 核心摘要',
    links: [
      { id: 'sec1', label: '今日核心观点' }
    ]
  },
  {
    title: '🏆 S 级标的',
    links: [
      { id: 'sec2', label: '澜起科技 (688008.SH)' },
      { id: 'sec3', label: '鹏鼎控股 (002938.SZ)' }
    ]
  },
  {
    title: '🎯 A 级标的',
    links: [
      { id: 'sec4', label: '瑞芯微 (603893.SH)' },
      { id: 'sec5', label: '德龙激光 (688170.SH)' },
      { id: 'sec6', label: '开发科技 (920029.BJ)' },
      { id: 'sec7', label: '国力电子 (688103.SH)' },
      { id: 'sec8', label: '富士达 (920640.BJ)' },
      { id: 'sec9', label: '长虹能源 (920239.BJ)' },
      { id: 'sec10', label: '铁大科技 (920541.BJ)' }
    ]
  },
  {
    title: '📋 评级汇总',
    links: [
      { id: 'sec11', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0310() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0310.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-purple-800 uppercase tracking-widest mb-3 px-3 flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></span>
        ${section.title}
      </h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
