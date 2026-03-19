// ==========================================
// 期货市场导航配置 - 2026-03-19
// ==========================================

const FUTURES_NAV_CONFIG_0319 = [
  {
    title: '市场综述',
    links: [
      { id: 'f_sec1', label: '整体表现与板块分布' }
    ]
  },
  {
    title: '重点品种',
    links: [
      { id: 'f_sec2', label: '原油/燃料油/甲醇' },
      { id: 'f_sec3', label: '贵金属（黄金/白银）' },
      { id: 'f_sec4', label: '有色金属（铜/铝/锌/锡）' },
      { id: 'f_sec5', label: '黑色建材（螺纹/玻璃/铁矿）' },
      { id: 'f_sec6', label: '农产品（豆粕/油脂/生猪）' },
      { id: 'f_sec7', label: '新能源材料（碳酸锂/工业硅）' }
    ]
  },
  {
    title: '交易机会',
    links: [
      { id: 'f_sec8', label: '做多机会推荐' },
      { id: 'f_sec9', label: '做空机会推荐' },
      { id: 'f_sec10', label: '套利策略' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'f_sec11', label: '核心风险与仓位管理' }
    ]
  }
];

function renderFuturesNav_0319() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0319.map(section => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('futures', '${link.id}'); return false;"
            class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}