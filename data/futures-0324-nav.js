// ==========================================
// Futures Nav Config: 2026-03-23
// 期货市场分析 - 导航配置
// ==========================================

const FUTURES_NAV_CONFIG_0323 = [
  {
    title: '今日提示',
    links: [
      { id: 'f_sec1', label: '报告说明' }
    ]
  }
];

function renderFuturesNav_0323() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0323.forEach((category) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-orange-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#${link.id}" onclick="scrollToSection('futures', '${link.id}')" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
