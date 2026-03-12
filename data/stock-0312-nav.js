// ==========================================
// 个股研报导航 - 2026 年 3 月 12 日
// ==========================================

const STOCK_NAV_CONFIG_0312 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '评级概览' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec2', label: '宁德时代' },
      { id: 's_sec3', label: '日联科技' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec4', label: '亚虹医药-U' },
      { id: 's_sec5', label: '五新隧装' },
      { id: 's_sec6', label: '长芯博创' },
      { id: 's_sec7', label: '伟测科技' },
      { id: 's_sec8', label: '可孚医疗' },
      { id: 's_sec9', label: '普洛药业' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec10', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0312() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0312.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-purple-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-purple-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
