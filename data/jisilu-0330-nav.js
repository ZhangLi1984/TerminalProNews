// ==========================================
// 集思录导航 - 2026年3月30日
// ==========================================

const JISILU_NAV_CONFIG_0330 = [
  {
    title: '数据待更新',
    links: [
      { id: 'j_sec1', label: '敬请期待' }
    ]
  }
];

function renderJisiluNav_0330() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';

  JISILU_NAV_CONFIG_0330.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('jisilu', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}