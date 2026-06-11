// ==========================================
// 个股研报导航 - 2026年6月12日
// ==========================================

const STOCK_NAV_CONFIG_0612 = [
  {
    title: 'S级标的',
    links: [
      { id: 's_sec1', label: '若羽臣' },
      { id: 's_sec2', label: '三夫户外' },
      { id: 's_sec3', label: '云南锗业' },
      { id: 's_sec4', label: '汇宇制药' }
    ]
  },
  {
    title: 'S级标的(续)',
    links: [
      { id: 's_sec5', label: '菲沃泰' },
      { id: 's_sec6', label: '妙可蓝多' },
      { id: 's_sec7', label: '日联科技' },
      { id: 's_sec8', label: '安井食品' }
    ]
  },
  {
    title: 'S级标的(续二)',
    links: [
      { id: 's_sec9', label: '卫星化学' },
      { id: 's_sec10', label: '迈普医学' },
      { id: 's_sec11', label: '强一股份' },
      { id: 's_sec12', label: '石英股份' }
    ]
  },
  {
    title: 'S级标的(续三)',
    links: [
      { id: 's_sec13', label: '先锋精科' }
    ]
  },
  {
    title: 'A级标的精选',
    links: [
      { id: 's_sec14', label: '骄成超声' },
      { id: 's_sec15', label: '南华期货' },
      { id: 's_sec16', label: '恒立液压' },
      { id: 's_sec17', label: '川投能源' }
    ]
  },
  {
    title: 'A级标的精选(续)',
    links: [
      { id: 's_sec18', label: '盛合晶微' },
      { id: 's_sec19', label: '天华新能' },
      { id: 's_sec20', label: '兴蓉环境' },
      { id: 's_sec21', label: '赛英电子' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec22', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0612() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0612.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
