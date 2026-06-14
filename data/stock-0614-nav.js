// ==========================================
// 个股研报导航 - 2026年6月14日
// ==========================================

const STOCK_NAV_CONFIG_0614 = [
  {
    title: 'S级标的',
    links: [
      { id: 's_sec1', label: '强一股份' },
      { id: 's_sec2', label: '卫星化学' },
      { id: 's_sec3', label: '天承科技' },
      { id: 's_sec4', label: '沐曦股份' }
    ]
  },
  {
    title: 'S级标的(续)',
    links: [
      { id: 's_sec5', label: '联动科技' },
      { id: 's_sec6', label: '茂莱光学' },
      { id: 's_sec7', label: '迈普医学' },
      { id: 's_sec8', label: '石英股份' }
    ]
  },
  {
    title: 'S级标的(续二)',
    links: [
      { id: 's_sec9', label: '长盈精密' },
      { id: 's_sec10', label: '妙可蓝多' },
      { id: 's_sec11', label: '莱特光电' },
      { id: 's_sec12', label: '渝农商行' }
    ]
  },
  {
    title: 'S级标的(续三)',
    links: [
      { id: 's_sec13', label: '杰华特' },
      { id: 's_sec14', label: '福田汽车' },
      { id: 's_sec15', label: '博拓生物' },
      { id: 's_sec16', label: '若羽臣' }
    ]
  },
  {
    title: 'S级标的(续四)',
    links: [
      { id: 's_sec17', label: '先锋精科' },
      { id: 's_sec18', label: '比音勒芬' },
      { id: 's_sec19', label: '南华期货' },
      { id: 's_sec20', label: '思源电气' }
    ]
  },
  {
    title: 'S级标的(续五)',
    links: [
      { id: 's_sec21', label: '诺思兰德' },
      { id: 's_sec22', label: '安井食品' },
      { id: 's_sec23', label: '日联科技' },
      { id: 's_sec24', label: '迪尔化工' }
    ]
  },
  {
    title: 'S级标的(续六)',
    links: [
      { id: 's_sec25', label: '美德乐' },
      { id: 's_sec26', label: '西山科技' },
      { id: 's_sec27', label: '华康洁净' },
      { id: 's_sec28', label: '三夫户外' }
    ]
  },
  {
    title: 'S级标的(续七)',
    links: [
      { id: 's_sec29', label: '同星科技' },
      { id: 's_sec30', label: '呈和科技' }
    ]
  },
  {
    title: 'A级标的精选',
    links: [
      { id: 'a_sec1', label: '天华新能' },
      { id: 'a_sec2', label: '科莱瑞迪' },
      { id: 'a_sec3', label: '华锡有色' },
      { id: 'a_sec4', label: '安集科技' }
    ]
  },
  {
    title: 'A级标的精选(续)',
    links: [
      { id: 'a_sec5', label: '登康口腔' },
      { id: 'a_sec6', label: '国亮新材' },
      { id: 'a_sec7', label: '恺英网络' },
      { id: 'a_sec8', label: '锦江酒店' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'summary_sec1', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0614() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0614.map(section => `
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
