// ==========================================
// 集思录投资洞察 - 导航配置 (2026-05-31)
// ==========================================

const JISILU_NAV_CONFIG_0531 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债风暴' },
      { id: 'j_sec2', label: 'AI泡沫论' },
      { id: 'j_sec3', label: '老登股vs小登股' },
    ]
  },
  {
    title: '方法论与标的',
    links: [
      { id: 'j_sec4', label: '投资方法论精粹' },
      { id: 'j_sec5', label: '热议标的清单' },
    ]
  },
  {
    title: '情绪与策略',
    links: [
      { id: 'j_sec6', label: '市场情绪观察' },
      { id: 'j_sec7', label: '风险提示' },
    ]
  },
];

function renderJisiluNav_0531() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0531.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
