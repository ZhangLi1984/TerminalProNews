// 个股研报导航配置 - 2026年4月15日
const STOCK_NAV_CONFIG_0415 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '今日概览' }] },
  { title: 'A级标的', links: [
    { id: 's_sec2', label: '新宙邦·华源证券' },
    { id: 's_sec3', label: '海光信息·太平洋证券' },
    { id: 's_sec4', label: '中科蓝讯·中邮证券' },
    { id: 's_sec5', label: '寒武纪·国金证券' },
    { id: 's_sec6', label: '美格智能·西南证券' },
    { id: 's_sec7', label: '三环集团·信达证券' },
    { id: 's_sec8', label: '云天化·中银证券' },
    { id: 's_sec9', label: '太辰光·华鑫证券' },
    { id: 's_sec10', label: '安克创新·太平洋证券' },
    { id: 's_sec11', label: '鹿得医疗·西南证券' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec12', label: '全量100只标的清单' },
    { id: 's_sec13', label: 'B级标的汇总' },
    { id: 's_sec14', label: 'C级标的汇总' }
  ]},
  { title: '投资方向', links: [{ id: 's_sec15', label: '资金主攻方向' }] }
];

function renderStockNav_0415() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0415.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors truncate"
            data-section="${link.id}"
            onclick="scrollToSection('stock', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
              <span class="truncate">${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
