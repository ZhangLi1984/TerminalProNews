// ==========================================
// 个股研报导航配置 - 2026-05-08
// ==========================================

const STOCK_NAV_CONFIG_0508 = [
  { title: '评级分布', links: [
    { id: 'sec1', label: '评级总览' }
  ]},
  { title: 'S级标的', links: [
    { id: 'sec2', label: '海光信息' },
    { id: 'sec3', label: '鼎胜新材' },
    { id: 'sec4', label: '恒瑞医药' },
    { id: 'sec5', label: '金晶科技' },
    { id: 'sec6', label: '山外山' },
    { id: 'sec7', label: '万辰集团' },
    { id: 'sec8', label: '赤峰黄金' },
    { id: 'sec9', label: '毕得医药' },
    { id: 'sec10', label: '伊利股份' },
    { id: 'sec11', label: '江波龙' },
    { id: 'sec12', label: '美的集团' },
    { id: 'sec13', label: '天味食品' },
    { id: 'sec14', label: '匠心家居' },
    { id: 'sec15', label: '山金国际' }
  ]},
  { title: 'A级精选', links: [
    { id: 'sec16', label: 'A级标的TOP20' }
  ]},
  { title: '投资主题', links: [
    { id: 'sec17', label: '六大核心主题' }
  ]},
  { title: '全量清单', links: [
    { id: 'sec18', label: '100篇研报清单' }
  ]}
];

function renderStockNav_0508() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0508.map(group => `
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
