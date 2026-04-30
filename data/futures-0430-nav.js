// ==========================================
// 期货市场分析导航配置 - 2026-04-30
// ==========================================

const FUTURES_NAV_CONFIG_0430 = [
  {
    title: '市场概览',
    links: [
      { id: 'f_sec1', label: '期货市场总览' }
    ]
  }
];

function renderFuturesNav_0430() {
  var container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0430.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'futures\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
