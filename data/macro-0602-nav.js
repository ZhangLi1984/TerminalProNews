// ==========================================
// 宏观研究 - 导航配置 (2026-06-02)
// ==========================================

const MACRO_NAV_CONFIG_0602 = [
  {
    title: '今日数据',
    links: [
      { id: 'm_sec1', label: '暂无数据' }
    ]
  }
];

function renderMacroNav_0602() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0602.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
