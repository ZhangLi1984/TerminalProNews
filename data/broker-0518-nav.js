const BROKER_NAV_CONFIG_0518 = [
  { title: '核心模块', links: [
    { id: 'sec1', label: '市场共识概览' },
    { id: 'sec2', label: '行业共识推荐 TOP10' },
  ]},
  { title: '金股榜单', links: [
    { id: 'sec3', label: '金股共识榜单' },
  ]},
  { title: '券商观点', links: [
    { id: 'sec4', label: '各家券商核心观点' },
  ]},
  { title: '策略建议', links: [
    { id: 'sec5', label: '买方策略建议' },
  ]},
];

function renderBrokerNav_0518() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0518.forEach(group => {
    html += '<div class="space-y-1"><div class="text-xs font-black text-slate-400 uppercase tracking-wider px-3 mb-2">' + group.title + '</div>';
    group.links.forEach(link => {
      html += '<button class="nav-btn w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-all flex items-center" data-section="' + link.id + '" onclick="updateActiveNav(\'' + link.id + '\')">';
      html += '<div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent flex-shrink-0"></div>';
      html += '<span>' + link.label + '</span>';
      html += '</button>';
    });
    html += '</div>';
  });
  container.innerHTML = html;
}
