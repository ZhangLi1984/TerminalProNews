// ==========================================
// CIO战略投资内参导航 - 2026年6月15日
// ==========================================

const STOCK_NAV_CONFIG_0615 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'cio_sec1', label: 'AI算力基础设施(AIDC)' },
      { id: 'cio_sec2', label: '有色金属(铜/钨/钼)' }
    ]
  },
  {
    title: '跨赛道暗线与二阶博弈',
    links: [
      { id: 'cio_sec3', label: '半导体材料革新(以钼代钨)' },
      { id: 'cio_sec4', label: 'SOFC燃料电池数据中心替代' },
      { id: 'cio_sec5', label: '光伏组件效率标准提升' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'cio_sec6', label: '光伏行业底部配置机会' },
      { id: 'cio_sec7', label: '银行理财/非银金融低位重估' }
    ]
  },
  {
    title: '大宗商品监测',
    links: [
      { id: 'cio_sec8', label: '量价监测表' }
    ]
  },
  {
    title: '产业链周期监测',
    links: [
      { id: 'cio_sec9', label: '估值监测表' }
    ]
  },
  {
    title: '操作策略',
    links: [
      { id: 'cio_sec10', label: '风险提示与证伪节点' },
      { id: 'cio_sec11', label: '具体操作策略建议' }
    ]
  }
];

function renderStockNav_0615() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0615.map(section => `
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
