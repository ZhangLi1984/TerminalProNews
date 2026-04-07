// ==========================================
// 集思录投资洞察导航配置 - 2026 年 4 月 7 日
// ==========================================

const JISILU_NAV_CONFIG_0407 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '话题 TOP10' },
      { id: 'j_sec2', label: '投资方法论' }
    ]
  },
  {
    title: '标的与情绪',
    links: [
      { id: 'j_sec3', label: '热议标的' },
      { id: 'j_sec4', label: '市场情绪' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'j_sec5', label: '风险提示' },
      { id: 'j_sec6', label: '下周关注' }
    ]
  }
];

function renderJisiluNav_0407() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  const navHtml = JISILU_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'j_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
