const BROKER_NAV_CONFIG_0617 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '市场共识' }] },
  { title: '宏观策略', links: [{ id: 'sec2', label: '券商观点' }] },
  { title: '热门行业', links: [{ id: 'sec3', label: '推荐榜' }] },
  { title: '金股组合', links: [{ id: 'sec4', label: 'TOP金股' }] },
  { title: '风险分歧', links: [{ id: 'sec5', label: '分歧点' }] }
];
function renderBrokerNav_0617() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
