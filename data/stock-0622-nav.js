// ==========================================
// 个股研报导航 - 2026 年 6 月 22 日
// ==========================================

const STOCK_NAV_CONFIG_0622 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '评级概览' }
    ]
  },
  {
    title: 'S 级标的 - AI算力',
    links: [
      { id: 's_sec2', label: '杰华特' },
      { id: 's_sec3', label: '芯原股份' },
      { id: 's_sec4', label: '联瑞新材' },
      { id: 's_sec5', label: '万通发展' },
      { id: 's_sec6', label: '安路科技' },
      { id: 's_sec7', label: '工业富联' }
    ]
  },
  {
    title: 'S 级标的 - 半导体设备/材料',
    links: [
      { id: 's_sec8', label: '中科仪' },
      { id: 's_sec9', label: '神工股份' },
      { id: 's_sec10', label: '广钢气体' },
      { id: 's_sec11', label: '悦安新材' },
      { id: 's_sec12', label: '呈和科技' }
    ]
  },
  {
    title: 'S 级标的 - 新能源/储能',
    links: [
      { id: 's_sec13', label: '西部矿业' },
      { id: 's_sec14', label: '鹏辉能源' },
      { id: 's_sec15', label: '国轩高科' },
      { id: 's_sec16', label: '海博思创' },
      { id: 's_sec17', label: '钧达股份' }
    ]
  },
  {
    title: 'S 级标的 - 消费电子/新材料',
    links: [
      { id: 's_sec18', label: '瑞联新材' },
      { id: 's_sec19', label: '火炬电子' },
      { id: 's_sec20', label: '德科立' },
      { id: 's_sec21', label: '九州一轨' }
    ]
  },
  {
    title: 'S 级标的 - 消费/医药',
    links: [
      { id: 's_sec22', label: '潮宏基' },
      { id: 's_sec23', label: '盐津铺子' },
      { id: 's_sec24', label: '安克创新' },
      { id: 's_sec25', label: '三生国健' }
    ]
  },
  {
    title: 'S 级标的 - 其他',
    links: [
      { id: 's_sec26', label: '帝尔激光' },
      { id: 's_sec27', label: '山高环能' },
      { id: 's_sec28', label: '江天科技' },
      { id: 's_sec29', label: '隆源股份' },
      { id: 's_sec30', label: '上海沿浦' },
      { id: 's_sec31', label: '力盛体育' },
      { id: 's_sec32', label: '威腾电气' }
    ]
  },
  {
    title: 'A 级标的精选',
    links: [
      { id: 's_sec33', label: '亿纬锂能' },
      { id: 's_sec34', label: '士兰微' },
      { id: 's_sec35', label: '华润微' },
      { id: 's_sec36', label: '华虹宏力' },
      { id: 's_sec37', label: '长川科技' },
      { id: 's_sec38', label: '中国汽研' },
      { id: 's_sec39', label: '厦门钨业' },
      { id: 's_sec40', label: '华工科技' },
      { id: 's_sec41', label: '万兴科技' }
    ]
  },
  {
    title: 'B/C 级标的',
    links: [
      { id: 's_sec42', label: 'B级标的概览' },
      { id: 's_sec43', label: 'C级风险提示' }
    ]
  },
  {
    title: '投资线索',
    links: [
      { id: 's_sec44', label: '核心主线' },
      { id: 's_sec45', label: '全量清单' }
    ]
  }
];

function renderStockNav_0622() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0622.map(section => `
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
