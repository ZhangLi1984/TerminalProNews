// ==========================================
// 宏观研究内参 - 导航配置 2026-05-26
// ==========================================
const MACRO_NAV_CONFIG_0526 = [
  {
    title: '宏观框架',
    links: [
      { id: 'm_sec1', label: '四大周期共振' },
      { id: 'm_sec2', label: '技术周期：AI从基建到应用' },
      { id: 'm_sec3', label: '能源周期：电力本位体系' }
    ]
  },
  {
    title: '周期与盈利',
    links: [
      { id: 'm_sec4', label: '气候周期：厄尔尼诺' },
      { id: 'm_sec5', label: '盈利周期：PPI转正' },
      { id: 'm_sec6', label: '资金面判断' }
    ]
  },
  {
    title: '策略与配置',
    links: [
      { id: 'm_sec7', label: '核心配置建议' },
      { id: 'm_sec8', label: '卫星仓位布局' },
      { id: 'm_sec9', label: '防御仓位' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'm_sec10', label: '核心风险与证伪路径' },
      { id: 'm_sec11', label: '关键时间日历' }
    ]
  }
];

function renderMacroNav_0526() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0526.map(group => `
    <div>
      <h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
            onclick="scrollToSection('macro', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent group-hover:bg-slate-400 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
