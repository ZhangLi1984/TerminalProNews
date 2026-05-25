// ==========================================
// 集思录投资洞察 - 导航配置 2026-05-26
// ==========================================
const JISILU_NAV_CONFIG_0526 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '华为"韬定律"与半导体' },
      { id: 'j_sec2', label: 'SpaceX IPO催化' },
      { id: 'j_sec3', label: '美伊谈判与能源链' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec4', label: '半导体周期投资框架' },
      { id: 'j_sec5', label: '困境反转策略' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec6', label: '情绪观察与风险偏好' },
      { id: 'j_sec7', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0526() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
