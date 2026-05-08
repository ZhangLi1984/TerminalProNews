// ==========================================
// 个股研报导航配置 - 2026-05-09
// ==========================================

const STOCK_NAV_CONFIG_0509 = [
  { title: '评级总览', links: [
    { id: 's_sec1', label: '评级分布' }
  ]},
  { title: 'S级标的', links: [
    { id: 's_sec2', label: '百奥赛图(688796)' },
    { id: 's_sec3', label: '华海清科(688120)' }
  ]},
  { title: 'A级精选', links: [
    { id: 's_sec4', label: '巨化股份' },
    { id: 's_sec5', label: '安集科技' },
    { id: 's_sec6', label: '比亚迪' },
    { id: 's_sec7', label: '华勤技术' },
    { id: 's_sec8', label: '新产业' },
    { id: 's_sec9', label: '恒瑞医药' },
    { id: 's_sec10', label: '山西汾酒' },
    { id: 's_sec11', label: '中润光学' },
    { id: 's_sec12', label: '鲁西化工' },
    { id: 's_sec13', label: '雅克科技' }
  ]},
  { title: 'B/C级', links: [
    { id: 's_sec14', label: 'B级76只概览' },
    { id: 's_sec15', label: 'C级规避标的' }
  ]},
  { title: '行业统计', links: [
    { id: 's_sec16', label: '行业分布' }
  ]},
  { title: '全量清单', links: [
    { id: 's_sec17', label: '100篇研报汇总' }
  ]}
];

function renderStockNav_0509() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
