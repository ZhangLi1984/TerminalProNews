const MACRO_NAV_CONFIG_0518 = [
  { title: '核心观点', links: [
    { id: 'sec1', label: '执行摘要' },
  ]},
  { title: '经济数据', links: [
    { id: 'sec2', label: '增长端：弱复苏格局' },
    { id: 'sec3', label: '通胀端：输入性通胀主导' },
    { id: 'sec4', label: '外贸端：AI链驱动高增' },
  ]},
  { title: '核心主题', links: [
    { id: 'sec5', label: '货币政策：总量审慎' },
    { id: 'sec6', label: '地缘政治：中东再升级' },
    { id: 'sec7', label: '美联储与通胀' },
    { id: 'sec8', label: '房地产：二手回暖' },
    { id: 'sec9', label: 'AI与就业替代' },
    { id: 'sec10', label: 'A股盈利修复' },
  ]},
  { title: '策略与博弈', links: [
    { id: 'sec11', label: '共识与分歧' },
    { id: 'sec12', label: '资产配置矩阵' },
    { id: 'sec13', label: '行业轮动与映射' },
    { id: 'sec14', label: '交易策略' },
  ]},
  { title: '风险监测', links: [
    { id: 'sec15', label: '外部风险' },
    { id: 'sec16', label: '内部风险' },
    { id: 'sec17', label: '证伪指标清单' },
  ]},
];

function renderMacroNav_0518() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  let html = '';
  MACRO_NAV_CONFIG_0518.forEach(group => {
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
