// ==========================================
// Stock Nav Config: 2026-06-28
// ==========================================

const STOCK_NAV_CONFIG_0628 = [
  {
    title: 'S 级核心标的',
    links: [
      { id: 'sec1', label: '长川科技 (300604)' },
      { id: 'sec2', label: '盐津铺子 (002847)' },
      { id: 'sec3', label: '新宙邦 (300037)' },
      { id: 'sec4', label: '广钢气体 (688548)' },
      { id: 'sec5', label: '蓝思科技 (300433)' },
      { id: 'sec6', label: '厦门钨业 (600549)' },
      { id: 'sec7', label: '上海沿浦 (605128)' },
      { id: 'sec8', label: '隆源股份 (920055)' },
      { id: 'sec9', label: '恩捷股份 (002812)' },
      { id: 'sec10', label: '德业股份 (605117)' },
      { id: 'sec11', label: '白云电器 (603861)' },
      { id: 'sec12', label: '华虹宏力 (688347)' },
      { id: 'sec13', label: '哈尔斯 (002615)' },
      { id: 'sec14', label: '卫星化学 (002648)' },
      { id: 'sec15', label: '中国人保 (601319)' },
      { id: 'sec16', label: '鸿富瀚 (301086)' },
      { id: 'sec17', label: '有研粉材 (688456)' },
      { id: 'sec18', label: '矽电股份 (301629)' },
      { id: 'sec19', label: '博力威 (688345)' },
      { id: 'sec20', label: '中际旭创 (300308)' },
      { id: 'sec21', label: '亿纬锂能 (300014)' }
    ]
  },
  {
    title: 'A 级优质标的',
    links: [
      { id: 'sec22', label: '帝尔激光 (300776)' },
      { id: 'sec23', label: '川仪股份 (603100)' },
      { id: 'sec24', label: '豪悦护理 (605009)' },
      { id: 'sec25', label: '江天科技 (920121)' },
      { id: 'sec26', label: '新澳股份 (603889)' },
      { id: 'sec27', label: '泽璟制药-U (688266)' },
      { id: 'sec28', label: '泛亚微透 (688386)' },
      { id: 'sec29', label: '华工科技 (000988)' },
      { id: 'sec30', label: '盛剑科技 (603324)' },
      { id: 'sec31', label: '通宇通讯 (002792)' },
      { id: 'sec32', label: '海博思创 (688411)' },
      { id: 'sec33', label: '软通动力 (301236)' },
      { id: 'sec34', label: '华润微 (688396)' },
      { id: 'sec35', label: '卓胜微 (300782)' },
      { id: 'sec36', label: '华亚智能 (003043)' },
      { id: 'sec37', label: '中稀有色 (600259)' },
      { id: 'sec38', label: '众鑫股份 (603091)' },
      { id: 'sec39', label: '固德威 (688390)' },
      { id: 'sec40', label: '泉阳泉 (600189)' },
      { id: 'sec41', label: '中熔电气 (301031)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec42', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0628() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0628.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#stock-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
