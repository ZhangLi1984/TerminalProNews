// ==========================================
// Jisilu Nav Config: 2026-03-22
// ==========================================

const JISILU_NAV_CONFIG_0322 = [
  {
    title: '集思录',
    links: [
      { id: 'sec1', label: '核心观点' }
    ]
  }
];

function renderJisiluNav_0322() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-amber-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#jisilu-sec${idx + 1}-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
