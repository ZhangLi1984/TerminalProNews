const STOCK_NAV_CONFIG_0519 = [
  { title: 'S级标的（核心仓位）', links: [
    { id: 'sec1', label: '呈和科技 (688625)' },
    { id: 'sec2', label: '星宸科技 (301536)' },
  ]},
  { title: 'A级标的（主要仓位）', links: [
    { id: 'sec3', label: '君实生物 (688180)' },
    { id: 'sec4', label: '中国中免 (601888)' },
    { id: 'sec5', label: '阿尔特 (300825)' },
    { id: 'sec6', label: '拓普集团 (601689)' },
    { id: 'sec7', label: '隆盛科技 (300680)' },
    { id: 'sec8', label: '当升科技 (300073)' },
    { id: 'sec9', label: '洛阳钼业 (603993)' },
    { id: 'sec10', label: '伟测科技 (688372)' },
  ]},
  { title: 'B级标的精选', links: [
    { id: 'sec11', label: '创新药/医疗器械' },
    { id: 'sec12', label: 'AI算力/半导体' },
    { id: 'sec13', label: '新能源/电力设备' },
    { id: 'sec14', label: '汽车零部件/机器人' },
    { id: 'sec15', label: '消费/金融/其他' },
  ]},
  { title: '评级汇总', links: [
    { id: 'sec16', label: '完整评级汇总表（100只）' },
    { id: 'sec17', label: '评级体系说明' },
  ]},
];

function renderStockNav_0519() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  let html = '';
  STOCK_NAV_CONFIG_0519.forEach(group => {
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
