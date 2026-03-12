// 集思录导航配置 - 2026-03-12
const JISILU_NAV_CONFIG_0312 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '热门话题 TOP5' },
      { id: 'j_sec2', label: '热议标的' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec3', label: '低风险策略' },
      { id: 'j_sec4', label: '资产配置' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec5', label: '情绪观察' },
      { id: 'j_sec6', label: '争议话题' },
      { id: 'j_sec7', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0312() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0312.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-between"
            data-section="${link.id}"
            onclick="scrollToSection('jisilu', '${link.id}')"
          >
            <span>${link.label}</span>
            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}