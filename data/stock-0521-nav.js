// 个股研报导航 - 2026-05-21
const STOCK_NAV_CONFIG_0521 = [
  { title: 'S级标的（核心仓位）', links: [
    { id: 'sec1', label: '大族激光 (002008) - 9.0分' },
    { id: 'sec2', label: '国民技术 (300077) - 9.0分' },
    { id: 'sec3', label: '远东股份 (600869) - 8.8分' },
  ]},
  { title: 'A级标的（主要仓位）', links: [
    { id: 'sec4', label: '药明康德 (603259) - 8.5分' },
    { id: 'sec5', label: '艾森股份 (688720) - 8.3分' },
    { id: 'sec6', label: '柏楚电子 (688188) - 8.2分' },
    { id: 'sec7', label: '德才股份/铜牛信息等 - 8.0分' },
    { id: 'sec8', label: '星昊医药/钧达股份/奥普特' },
    { id: 'sec9', label: '神州数码/中国核电/旭升集团' },
  ]},
  { title: 'B级标的概述', links: [
    { id: 'sec10', label: 'B级标的列表（24只）' },
  ]},
  { title: '全量研报清单', links: [
    { id: 'sec11', label: '100篇研报完整清单' },
  ]},
  { title: '赛道投资优先级', links: [
    { id: 'sec12', label: '五大赛道排序' },
  ]},
];

function renderStockNav_0521() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0521.map((cat) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'stock'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-amber-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
