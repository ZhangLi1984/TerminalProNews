const DECISION_NAV_CONFIG_0623 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '全局叙事' }] },
  { title: '重大事件', links: [{ id: 'sec2', label: '科技股调整' }, { id: 'sec3', label: '地缘缓和' }] },
  { title: '重要新闻', links: [{ id: 'sec4', label: '汽车后市场' }, { id: 'sec5', label: '医药生物' }, { id: 'sec6', label: '大金融' }, { id: 'sec7', label: '半导体' }] },
  { title: '风险提示', links: [{ id: 'sec8', label: '避雷针' }] }
];

function renderDecisionNav_0623() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0623.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
      <ul class="space-y-0.5">
        ${section.links.map(link => `<li><a href="#${link.id}" class="nav-link block px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 rounded-lg transition-colors" onclick="scrollToSection('${link.id}')">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
