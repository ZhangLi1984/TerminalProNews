const BROKER_NAV_CONFIG_0515 = [
  { title: '市场共识', links: [
    { id: 'sec1', label: '整体多空态度' },
    { id: 'sec2', label: '主要关注方向' },
    { id: 'sec3', label: '宏观关键变量' },
  ]},
  { title: '热门行业', links: [
    { id: 'sec4', label: 'TOP1 半导体/AI算力' },
    { id: 'sec5', label: 'TOP2 电力/电网' },
    { id: 'sec6', label: 'TOP3 锂电/储能' },
    { id: 'sec7', label: 'TOP4 人形机器人' },
    { id: 'sec8', label: 'TOP5-10 其他热门' },
  ]},
  { title: '金股与策略', links: [
    { id: 'sec9', label: '金股汇总' },
    { id: 'sec10', label: '买方策略建议' },
  ]},
  { title: '风险', links: [
    { id: 'sec11', label: '风险提示与分歧点' },
  ]},
];

function renderBrokerNav_0515() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  let html = '';
  BROKER_NAV_CONFIG_0515.forEach(group => {
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
