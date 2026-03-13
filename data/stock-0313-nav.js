// ==========================================
// 个股研报导航 - 2026 年 3 月 13 日
// ==========================================

const STOCK_NAV_CONFIG_0313 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '评级概览' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec2', label: '中国平安' }
    ]
  },
  {
    title: 'A 级标的 - 新能源',
    links: [
      { id: 's_sec3', label: '宁德时代' },
      { id: 's_sec4', label: '海博思创' },
      { id: 's_sec5', label: '天赐材料' },
      { id: 's_sec6', label: '壹连科技' }
    ]
  },
  {
    title: 'A 级标的 - AI算力',
    links: [
      { id: 's_sec7', label: '芯原股份' },
      { id: 's_sec8', label: '工业富联' },
      { id: 's_sec9', label: '炬芯科技' },
      { id: 's_sec10', label: '同花顺' }
    ]
  },
  {
    title: 'A 级标的 - 机器人',
    links: [
      { id: 's_sec11', label: '斯菱智驱' },
      { id: 's_sec12', label: '长盈精密' },
      { id: 's_sec13', label: '伟测科技' }
    ]
  },
  {
    title: 'A 级标的 - 其他',
    links: [
      { id: 's_sec14', label: '黄金资源' },
      { id: 's_sec15', label: '医药医疗' },
      { id: 's_sec16', label: '其他A級' }
    ]
  },
  {
    title: 'B/C 级标的',
    links: [
      { id: 's_sec17', label: 'B级标的概览' },
      { id: 's_sec18', label: 'C级风险提示' }
    ]
  },
  {
    title: '跨赛道分析',
    links: [
      { id: 's_sec19', label: '传导链分析' }
    ]
  },
  {
    title: '附录',
    links: [
      { id: 's_sec20', label: '100篇研报清单' }
    ]
  }
];

function renderStockNav_0313() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0313.map(section => `
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