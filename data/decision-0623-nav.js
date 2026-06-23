const DECISION_NAV_CONFIG_0623 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '全局叙事与操作方向' }] },
  { title: '重大事件推演', links: [{ id: 'sec2', label: 'AI去泡沫化' }, { id: 'sec3', label: '资源品价格回归' }] },
  { title: '行业催化', links: [{ id: 'sec4', label: '汽车后市场' }, { id: 'sec5', label: '医药生物' }, { id: 'sec6', label: '大金融' }, { id: 'sec7', label: '半导体' }] },
  { title: '风险提示', links: [{ id: 'sec8', label: '证伪区与避雷针' }] }
];

function renderDecisionNav_0623() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0623.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
