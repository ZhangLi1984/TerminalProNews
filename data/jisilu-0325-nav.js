// ==========================================
// 集思录 - 导航配置 (2026-03-25)
// ==========================================

const JISILU_NAV_CONFIG_0325 = [
  {
    title: '投资洞察',
    links: [
      { id: 'j_sec1', label: '热门话题 TOP 10' },
      { id: 'j_sec2', label: '投资方法论精粹' },
      { id: 'j_sec3', label: '热议标的清单' },
      { id: 'j_sec4', label: '市场情绪观察' },
      { id: 'j_sec5', label: '风险提示' },
      { id: 'j_sec6', label: '投资要点总结' }
    ]
  }
];

function renderJisiluNav_0325() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0325.forEach(section => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${section.title}</h3>
      <ul class="space-y-1">`;
    section.links.forEach(link => {
      html += `<li>
        <a href="#${link.id}" class="block py-2 px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors nav-link" data-section="${link.id}">
          ${link.label}
        </a>
      </li>`;
    });
    html += `</ul></div>`;
  });

  container.innerHTML = html;
}