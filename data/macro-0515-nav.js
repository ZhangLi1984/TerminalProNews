const MACRO_NAV_CONFIG_0515 = [
  { title: '核心观点', links: [
    { id: 'sec1', label: '核心观点摘要' },
  ]},
  { title: '经济数据', links: [
    { id: 'sec2', label: '通胀数据快照' },
    { id: 'sec3', label: '增长与需求指标' },
    { id: 'sec4', label: '金融与流动性' },
  ]},
  { title: '核心主题', links: [
    { id: 'sec5', label: '通胀：PPI超预期暴涨' },
    { id: 'sec6', label: '货币政策：总量审慎' },
    { id: 'sec7', label: '美联储与中美利差' },
    { id: 'sec8', label: '地缘政治与油价' },
    { id: 'sec9', label: '出口韧性' },
    { id: 'sec10', label: '财政收支' },
  ]},
  { title: '策略与博弈', links: [
    { id: 'sec11', label: '数据交叉验证' },
    { id: 'sec12', label: '资产配置矩阵' },
    { id: 'sec13', label: '行业轮动建议' },
    { id: 'sec14', label: '预期差与博弈机会' },
  ]},
  { title: '风险监测', links: [
    { id: 'sec15', label: '风险预警与应对' },
    { id: 'sec16', label: '证伪指标监测清单' },
  ]},
];

function renderMacroNav_0515() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0515.forEach(group => {
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
