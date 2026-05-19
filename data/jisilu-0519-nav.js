const JISILU_NAV_CONFIG_0519 = [
  { title: '热门话题', links: [
    { id: 'sec1', label: '闻泰科技*ST与转债博弈' },
    { id: 'sec2', label: '中金/信达/东兴合并套利' },
    { id: 'sec3', label: '老登股踏空科技牛市' },
    { id: 'sec4', label: '可转债市场高温预警' },
    { id: 'sec5', label: '龙大转债下修博弈' },
    { id: 'sec6', label: '美股展望与Fed降息' },
    { id: 'sec7', label: '白酒板块底部博弈' },
    { id: 'sec8', label: '实盘操作与策略分享' },
    { id: 'sec9', label: '第一桶金与投资心态' },
    { id: 'sec10', label: '量化投资与市场结构' },
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
  ]},
];

function renderJisiluNav_0519() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0519.forEach(group => {
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
