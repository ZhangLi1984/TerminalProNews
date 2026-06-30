const STOCK_NAV_CONFIG_0630 = [
  { title: 'S级标的', links: [{ id: 'sec1', label: '深度分析' }] },
  { title: 'A级标的', links: [{ id: 'sec2', label: '重点推荐' }] },
  { title: '评级汇总', links: [{ id: 'sec3', label: '完整表格' }] }
];

function renderStockNav_0630() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = `
    <nav class="space-y-6">
      ${STOCK_NAV_CONFIG_0630.map(section => `
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
