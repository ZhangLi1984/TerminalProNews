const BROKER_NAV_CONFIG_0625 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '市场共识与仓位建议' }] },
  { title: '热门赛道', links: [{ id: 'sec2', label: '推荐次数TOP5' }] },
  { title: '金股组合', links: [{ id: 'sec3', label: '被多家券商同时推荐的个股' }] },
  { title: '行业观点', links: [{ id: 'sec4', label: '各行业详细观点汇总' }] },
  { title: '风险与分歧', links: [{ id: 'sec5', label: '主要分歧点' }, { id: 'sec6', label: '共同风险' }] },
  { title: '操作建议', links: [{ id: 'sec7', label: '买方操作建议' }] }
];

function renderBrokerNav_0625() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0625.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
