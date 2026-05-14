const JISILU_NAV_CONFIG_0515 = [
  { title: '热门话题', links: [
    { id: 'sec1', label: '大盘顶部判断' },
    { id: 'sec2', label: '可转债高位震荡' },
    { id: 'sec3', label: '科技股与老登股分化' },
    { id: 'sec4', label: '闻泰转债与中美博弈' },
    { id: 'sec5', label: '低风险现金理财' },
    { id: 'sec6', label: '第一桶金与本金积累' },
    { id: 'sec7', label: '周期股投资与反内卷' },
    { id: 'sec8', label: '美股AI泡沫' },
    { id: 'sec9', label: '基金溢价套利' },
    { id: 'sec10', label: 'DDM模型与银行股' },
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
    { id: 'sec15', label: '下周关注点' },
  ]},
];

function renderJisiluNav_0515() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0515.forEach(group => {
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
