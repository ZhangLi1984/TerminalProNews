// ==========================================
// 个股研报导航 - 2026年6月10日
// ==========================================

const STOCK_NAV_CONFIG_0610 = [
  {
    title: 'S级标的',
    links: [
      { id: 's_sec1', label: '神马电力' },
      { id: 's_sec2', label: '天华新能' },
      { id: 's_sec3', label: '和林微纳' },
      { id: 's_sec4', label: '西山科技' }
    ]
  },
  {
    title: 'S级标的(续)',
    links: [
      { id: 's_sec5', label: '盛科通信' },
      { id: 's_sec6', label: '长城汽车' },
      { id: 's_sec7', label: '安井食品' },
      { id: 's_sec8', label: '南华期货' }
    ]
  },
  {
    title: 'A级标的精选',
    links: [
      { id: 's_sec9', label: '汇宇制药' },
      { id: 's_sec10', label: '光力科技' },
      { id: 's_sec11', label: '骄成超声' },
      { id: 's_sec12', label: '强一股份' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec13', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0610() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0610.map(section => `
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
