// ==========================================
// 个股研报导航配置 - 2026-05-08
// ==========================================

const STOCK_NAV_CONFIG_0508 = [
  { title: '研报概览', links: [
    { id: 'sec1', label: '评级分布总览' },
    { id: 'sec2', label: '核心投资主题' }
  ]},
  { title: 'S 级标的', links: [
    { id: 'sec3', label: '海光信息 688041' },
    { id: 'sec4', label: '鼎胜新材 603876' },
    { id: 'sec5', label: '恒瑞医药 600276' },
    { id: 'sec6', label: '金晶科技 600586' },
    { id: 'sec7', label: '山外山 688410' },
    { id: 'sec8', label: '万辰集团 300972' },
    { id: 'sec9', label: '赤峰黄金 600988' },
    { id: 'sec10', label: '毕得医药 688073' },
    { id: 'sec11', label: '伊利股份 600887' },
    { id: 'sec12', label: '江波龙 301308' },
    { id: 'sec13', label: '美的集团 000333' },
    { id: 'sec14', label: '天味食品 603317' },
    { id: 'sec15', label: '匠心家居 603180' },
    { id: 'sec16', label: '山金国际 000975' }
  ]},
  { title: 'A 级精选', links: [
    { id: 'sec17', label: '20 只重点 A 级标的' }
  ]},
  { title: '全量清单', links: [
    { id: 'sec18', label: '100 篇研报汇总' }
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
