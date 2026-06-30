const BROKER_NAV_CONFIG_0630 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '3分钟速读' }] },
  { title: '宏观策略', links: [{ id: 'sec2', label: '券商观点汇总' }] },
  { title: '热门行业', links: [{ id: 'sec3', label: '推荐榜TOP5' }] },
  { title: '金股组合', links: [{ id: 'sec4', label: '券商金股TOP10' }] },
  { title: '风险提示', links: [{ id: 'sec5', label: '分歧与风险' }] }
];

function renderBrokerNav_0630() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = `
    <nav class="space-y-6">
      ${BROKER_NAV_CONFIG_0630.map(section => `
        <div>
          <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-4">${section.title}</h3>
          <ul class="space-y-1">
            ${section.links.map(link => `
              <li>
                <a href="#${link.id}" onclick="scrollToSection('${link.id}')"
                   class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors">
                  ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </nav>
  `;
}
