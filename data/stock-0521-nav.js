// 个股研报导航 - 2026-05-21
const STOCK_NAV_CONFIG_0521 = [
  { title: 'S级标的（核心仓位）', links: [
    { id: 'sec1', label: '大族激光 (002008)' },
    { id: 'sec2', label: '国民技术 (300077)' },
    { id: 'sec3', label: '远东股份 (600869)' },
  ]},
  { title: 'A级标的（主要仓位）', links: [
    { id: 'sec4', label: '药明康德 (603259)' },
    { id: 'sec5', label: '艾森股份 (688720)' },
    { id: 'sec6', label: '柏楚电子 (688188)' },
    { id: 'sec7', label: '德才股份 (605287)' },
    { id: 'sec8', label: '铜牛信息 (300895)' },
    { id: 'sec9', label: '星昊医药 (920017.BJ)' },
    { id: 'sec10', label: '钧达股份 (002865)' },
    { id: 'sec11', label: '奥普特 (688686)' },
    { id: 'sec12', label: '神州数码 (000034)' },
    { id: 'sec13', label: '中国核电 (601985)' },
    { id: 'sec14', label: '旭升集团 (603305)' },
  ]},
  { title: 'B级标的精选', links: [
    { id: 'sec15', label: '医药/白酒/新能源' },
    { id: 'sec16', label: '汽车零部件/金融' },
    { id: 'sec17', label: 'AI/激光/通信/其他' },
  ]},
  { title: '评级汇总', links: [
    { id: 'sec18', label: '完整评级汇总表（100只）' },
    { id: 'sec19', label: '赛道投资优先级排序' },
  ]},
];

function renderStockNav_0521() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  let html = '';
  STOCK_NAV_CONFIG_0521.forEach(group => {
    html += `<div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
        class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
        <span class="truncate">${link.label}</span>
      </a>`;
    });
    html += `</nav></div>`;
  });
  container.innerHTML = html;
}
