const STOCK_NAV_CONFIG_0624 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '整体概览' }] },
  { title: 'S级标的', links: [
    { id: 'sec2', label: '天准科技' },
    { id: 'sec3', label: '亿纬锂能' },
    { id: 'sec4', label: '科翔股份' },
    { id: 'sec5', label: '威腾电气' },
    { id: 'sec6', label: '海博思创' },
    { id: 'sec7', label: '西部矿业' },
    { id: 'sec8', label: '鹏辉能源' },
    { id: 'sec9', label: '万通发展' },
    { id: 'sec10', label: '神工股份' },
    { id: 'sec11', label: '三生国健' },
    { id: 'sec12', label: '九州一轨' },
    { id: 'sec13', label: '帝尔激光' },
    { id: 'sec14', label: '华工科技' },
    { id: 'sec15', label: '上海沿浦' },
    { id: 'sec16', label: '盐津铺子' },
    { id: 'sec17', label: '广钢气体' },
    { id: 'sec18', label: '中稀有色' },
    { id: 'sec19', label: '妙可蓝多' },
    { id: 'sec20', label: '绿发电力' },
    { id: 'sec21', label: '卫星化学' },
    { id: 'sec22', label: '昊华能源' },
    { id: 'sec23', label: '鸿富瀚' },
    { id: 'sec24', label: '中际旭创' },
    { id: 'sec25', label: '有研粉材' }
  ]},
  { title: 'A级标的', links: [{ id: 'sec26', label: '重点推荐清单' }] },
  { title: '评级汇总', links: [{ id: 'sec27', label: '全量99篇汇总' }] }
];

function renderStockNav_0624() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0624.forEach(section => {
    html += `<div class="mb-4"><h3 class="text-sm font-black text-slate-900 mb-2 px-3">${section.title}</h3><ul class="space-y-1">`;
    section.links.forEach(link => {
      html += `<li><a href="#${link.id}" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">${link.label}</a></li>`;
    });
    html += `</ul></div>`;
  });

  container.innerHTML = html;
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
