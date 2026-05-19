const MACRO_NAV_CONFIG_0519 = [
  { title: '数据速览', links: [
    { id: 'm_sec1', label: '核心指标与特征' },
  ]},
  { title: '机构观点', links: [
    { id: 'm_sec2', label: '中诚信：内需疲弱' },
    { id: 'm_sec3', label: '东吴：三大分化' },
    { id: 'm_sec4', label: '光大：货币审慎' },
    { id: 'm_sec5', label: '国信：利率转向' },
    { id: 'm_sec6', label: '民银：海外通胀' },
  ]},
  { title: '矛盾与预期差', links: [
    { id: 'm_sec7', label: '共识与分歧矩阵' },
    { id: 'm_sec8', label: '最大预期差' },
  ]},
  { title: '买方策略', links: [
    { id: 'm_sec9', label: '资产配置矩阵' },
    { id: 'm_sec10', label: '行业配置方向' },
    { id: 'm_sec11', label: '债券市场策略' },
  ]},
  { title: '跟踪与风险', links: [
    { id: 'm_sec12', label: '短期催化事件' },
    { id: 'm_sec13', label: '证伪指标清单' },
    { id: 'm_sec14', label: '核心风险提示' },
  ]},
];

function renderMacroNav_0519() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0519.forEach(group => {
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
