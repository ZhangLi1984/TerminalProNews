const STOCK_NAV_CONFIG_0625 = [
  {
    title: 'S级标的',
    links: [
      { id: 'sec1', label: '海博思创' },
      { id: 'sec2', label: '火炬电子' },
      { id: 'sec3', label: '科达利' },
      { id: 'sec4', label: '完美世界' },
      { id: 'sec5', label: '鸿富瀚' },
      { id: 'sec6', label: '中际旭创' },
      { id: 'sec7', label: '有研粉材' },
      { id: 'sec8', label: '卫星化学' },
      { id: 'sec9', label: '中熔电气' },
      { id: 'sec10', label: '华工科技' },
      { id: 'sec11', label: '广钢气体' },
      { id: 'sec12', label: '新宙邦' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 'sec13', label: '友升股份' },
      { id: 'sec14', label: '西部矿业' },
      { id: 'sec15', label: '鹏辉能源' },
      { id: 'sec16', label: '华光新材' },
      { id: 'sec17', label: '威腾电气' },
      { id: 'sec18', label: '安路科技' },
      { id: 'sec19', label: '隆华科技' },
      { id: 'sec20', label: '楚江新材' },
      { id: 'sec21', label: '行动教育' },
      { id: 'sec22', label: '广立微' },
      { id: 'sec23', label: '江山股份' },
      { id: 'sec24', label: '固德威' },
      { id: 'sec25', label: '泉阳泉' },
      { id: 'sec26', label: '科威尔' },
      { id: 'sec27', label: '厦门钨业' },
      { id: 'sec28', label: '城发环境' },
      { id: 'sec29', label: '上海沿浦' },
      { id: 'sec30', label: '豪悦护理' },
      { id: 'sec31', label: '华虹宏力' },
      { id: 'sec32', label: '泛亚微透' },
      { id: 'sec33', label: '力盛体育' },
      { id: 'sec34', label: '盐津铺子' },
      { id: 'sec35', label: '新澳股份' },
      { id: 'sec36', label: '隆源股份' },
      { id: 'sec37', label: '保利发展' },
      { id: 'sec38', label: '淮北矿业' },
      { id: 'sec39', label: '昊华能源' },
      { id: 'sec40', label: '长川科技' },
      { id: 'sec41', label: '卓胜微' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec42', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0625() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0625.map(section => `
    <div class="mb-6">
      <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-4">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-4 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">${link.label}</a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
