// truncated=================================
// 集思录导航模块 - 2026-03-17
// ==========================================

const JISILU_NAV_CONFIG_0317 = [
  {
    title: '热门话题',
    links: [
      { id: 'sec1', label: 'TOP10 话题' },
      { id: 'sec2', label: '讨论焦点' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'sec3', label: '可转债策略' },
      { id: 'sec4', label: '套利策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'sec5', label: '看涨逻辑' },
      { id: 'sec6', label: '看空逻辑' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'sec7', label: '情绪评分' },
      { id: 'sec8', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0317() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-amber-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
