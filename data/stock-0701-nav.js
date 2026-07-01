const STOCK_NAV_CONFIG_0701 = [
  { title: 'S级标的', links: [{ id: 'sec1', label: '中际旭创' }, { id: 'sec2', label: '有研粉材' }, { id: 'sec3', label: '兆易创新' }, { id: 'sec4', label: '奥普特' }, { id: 'sec5', label: '长川科技' }, { id: 'sec6', label: '泽璟制药-U' }] },
  { title: 'A级标的精选', links: [{ id: 'sec7', label: '联动科技' }, { id: 'sec8', label: '药明康德' }, { id: 'sec9', label: '博力威' }, { id: 'sec10', label: '亿纬锂能' }, { id: 'sec11', label: '德业股份' }, { id: 'sec12', label: '乔锋智能' }, { id: 'sec13', label: '信维通信' }, { id: 'sec14', label: '盛剑科技' }, { id: 'sec15', label: '圆通速递' }, { id: 'sec16', label: '卧龙电驱' }] },
  { title: '完整评级汇总', links: [{ id: 'sec17', label: '评级汇总表' }] }
];

function renderStockNav_0701() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0701.forEach(group => {
    html += `<div class="mb-6"><h3 class="text-sm font-black text-slate-900 mb-3 px-2">${group.title}</h3><div class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="#${link.id}" onclick="scrollToSection('${link.id}')" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
