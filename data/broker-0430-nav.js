// ==========================================
// 券商晨报导航配置 - 2026-04-30
// ==========================================

const BROKER_NAV_CONFIG_0430 = [
  {
    title: '核心观点',
    links: [
      { id: 'b_sec1', label: '核心观点摘要' },
      { id: 'b_sec2', label: '共识行业推荐TOP10' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec3', label: '共识金股组合' },
      { id: 'b_sec4', label: '各券商重点金股' }
    ]
  },
  {
    title: '券商晨报要点',
    links: [
      { id: 'b_sec5', label: '万联/山西/开源/东兴' },
      { id: 'b_sec6', label: '东海/华源/英大/国信' },
      { id: 'b_sec7', label: '东吴/中银' }
    ]
  },
  {
    title: '风险与分歧',
    links: [
      { id: 'b_sec8', label: '主要分歧点' },
      { id: 'b_sec9', label: '共同风险因素' }
    ]
  }
];

function renderBrokerNav_0430() {
  var container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0430.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'broker\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
