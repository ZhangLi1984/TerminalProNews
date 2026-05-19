const MACRO_NAV_CONFIG_0520 = [
  { title: '执行摘要', links: [
    { id: 'm20_sec1', label: '核心判断与关键指标' },
  ]},
  { title: '经济数据速览', links: [
    { id: 'm20_sec2', label: '关键指标一览表' },
    { id: 'm20_sec3', label: '五大预警信号' },
  ]},
  { title: '核心观点汇总', links: [
    { id: 'm20_sec4', label: '经济增速判断' },
    { id: 'm20_sec5', label: '通胀与价格趋势' },
    { id: 'm20_sec6', label: '信贷与流动性' },
    { id: 'm20_sec7', label: '房地产走势' },
    { id: 'm20_sec8', label: '海外宏观影响' },
  ]},
  { title: '共识与预期差', links: [
    { id: 'm20_sec9', label: '市场共识五点' },
    { id: 'm20_sec10', label: '预期差与分歧点' },
  ]},
  { title: '买方策略', links: [
    { id: 'm20_sec11', label: '宏观配置矩阵' },
    { id: 'm20_sec12', label: '行业投资线索' },
    { id: 'm20_sec13', label: '核心逻辑链' },
  ]},
  { title: '风险跟踪', links: [
    { id: 'm20_sec14', label: '风险提示' },
    { id: 'm20_sec15', label: '证伪指标清单' },
  ]},
];

function renderMacroNav_0520() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0520.forEach(group => {
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
