// truncated8-nav.js
// 宏观研究 - 3 月 8 日导航数据

const MACRO_NAV_CONFIG_0308 = [
  {
    title: '宏观周期',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '货币政策分析' },
      { id: 'm_sec3', label: '财政与产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec4', label: '配置建议' },
      { id: 'm_sec5', label: '行业轮动' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'm_sec6', label: '风险提示' },
      { id: 'm_sec7', label: '事件日历' },
      { id: 'm_sec8', label: '策略总结' }
    ]
  }
];

function renderMacroNav_0308() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0308.forEach(group => {
    html += `
      <div>
        <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-3">${group.title}</h3>
        <nav class="space-y-1">
          ${group.links.map(link => `
            <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-all duration-200" data-section="${link.id}">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0"></div>
              <span>${link.label}</span>
            </a>
          `).join('')}
        </nav>
      </div>
    `;
  });

  container.innerHTML = html;
}
