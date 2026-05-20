// 宏观研究导航 - 2026-05-21
const MACRO_NAV_CONFIG_0521 = [
  { title: '宏观框架', links: [
    { id: 'm_sec1', label: 'K型分化时代宏观叙事' },
    { id: 'm_sec2', label: 'PPI转正与周期研判' },
  ]},
  { title: '策略框架', links: [
    { id: 'm_sec3', label: '杠铃配置策略' },
    { id: 'm_sec4', label: '仓位配置建议' },
  ]},
  { title: '风险预警', links: [
    { id: 'm_sec5', label: '一级/二级风险' },
    { id: 'm_sec6', label: '三阶思维预警' },
  ]},
];

function renderMacroNav_0521() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0521.map((cat, ci) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'macro'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
