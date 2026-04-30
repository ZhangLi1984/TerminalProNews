// truncated=================================
// 集思录投资洞察导航配置 - 2026-04-03
// ==========================================

const JISILU_NAV_CONFIG_0403 = [
  {
    title: '市场观察',
    links: [
      { id: 'j_sec1', label: '市场情绪速览' },
      { id: 'j_sec2', label: '今日要点提炼' }
    ]
  },
  {
    title: '热点方向',
    links: [
      { id: 'j_sec3', label: '地缘冲突应对' },
      { id: 'j_sec4', label: '油价高位策略' },
      { id: 'j_sec5', label: 'AI 算力投资' }
    ]
  },
  {
    title: '策略参考',
    links: [
      { id: 'j_sec6', label: '资产配置建议' },
      { id: 'j_sec7', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0403() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0403.forEach((category) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('jisilu', '${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
