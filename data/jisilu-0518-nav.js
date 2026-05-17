const JISILU_NAV_CONFIG_0518 = [
  { title: '热门话题', links: [
    { id: 'sec1', label: '闻泰转债——"问题债"之王' },
    { id: 'sec2', label: 'ST龙大下修博弈' },
    { id: 'sec3', label: '*ST三房巷面值退市' },
    { id: 'sec4', label: '长鑫存储IPO' },
    { id: 'sec5', label: '低风险投资者"至暗时刻"' },
    { id: 'sec6', label: '锂矿周期反转' },
    { id: 'sec7', label: '五粮液财务大洗澡' },
    { id: 'sec8', label: '北交所打新500%涨幅' },
    { id: 'sec9', label: '可转债量化策略' },
    { id: 'sec10', label: '纳指大跌 vs 科技狂欢' },
  ]},
  { title: '投资策略', links: [
    { id: 'sec11', label: '投资方法论精粹' },
  ]},
  { title: '标的与情绪', links: [
    { id: 'sec12', label: '热议标的清单' },
    { id: 'sec13', label: '市场情绪观察' },
  ]},
  { title: '风险与关注', links: [
    { id: 'sec14', label: '风险提示' },
    { id: 'sec15', label: '操作建议' },
  ]},
];

function renderJisiluNav_0518() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0518.forEach(group => {
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
