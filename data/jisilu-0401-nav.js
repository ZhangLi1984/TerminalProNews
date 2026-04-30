// truncated=================================
// 集思录投资洞察导航配置 - 2026-04-01
// ==========================================

const JISILU_NAV_CONFIG_0401 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '热门话题 TOP10' },
      { id: 'j_sec2', label: '市场情绪观察' }
    ]
  },
  {
    title: '投资方法',
    links: [
      { id: 'j_sec3', label: '投资方法论精粹' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec4', label: '标的清单' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'j_sec5', label: '风险警示' }
    ]
  }
];

function renderJisiluNav_0401() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0401.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
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