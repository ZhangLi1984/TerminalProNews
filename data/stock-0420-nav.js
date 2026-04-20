// ==========================================
// 个股研报导航模块 - 2026-04-20
// ==========================================
const STOCK_NAV_CONFIG_0420 = [
  { title: '核心摘要', links: [
    { id: 's_sec1', label: '研报总览' }
  ]},
  { title: 'S 级标的', links: [
    { id: 's_sec2', label: '宁德时代' },
    { id: 's_sec3', label: '雅葆轩' },
    { id: 's_sec4', label: '纽威股份' },
    { id: 's_sec5', label: '乖宝宠物' },
    { id: 's_sec6', label: '泰格医药' },
    { id: 's_sec7', label: '方盛制药' },
    { id: 's_sec8', label: '京东方A' },
    { id: 's_sec9', label: '日联科技' },
    { id: 's_sec10', label: '川能动力' }
  ]},
  { title: 'A 级标的', links: [
    { id: 's_sec11', label: '安克创新' },
    { id: 's_sec12', label: '英唐智控' },
    { id: 's_sec13', label: '洪城环境' },
    { id: 's_sec14', label: '电科蓝天' },
    { id: 's_sec15', label: '丸美生物' },
    { id: 's_sec16', label: '康龙化成' },
    { id: 's_sec17', label: '渤海汽车' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec18', label: 'B 级标的汇总（12只）' },
    { id: 's_sec19', label: 'C 级标的汇总（72只）' }
  ]}
];

function renderStockNav_0420() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0420.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
