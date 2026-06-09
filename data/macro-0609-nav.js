const MACRO_NAV_CONFIG_0609 = [
  { title: '宏观判断', links: [
    { id: 'm_sec1', label: '周期定位' },
    { id: 'm_sec2', label: '通胀预期' },
  ]},
  { title: '政策分析', links: [
    { id: 'm_sec3', label: '货币政策' },
    { id: 'm_sec4', label: '财政产业政策' },
  ]},
  { title: '资产配置', links: [
    { id: 'm_sec5', label: '配置建议表' },
    { id: 'm_sec6', label: '行业轮动' },
  ]},
  { title: '风险与指标', links: [
    { id: 'm_sec7', label: '宏观风险提示' },
    { id: 'm_sec8', label: '经济指标快照' },
    { id: 'm_sec9', label: '投资策略总结' },
  ]},
];

function renderMacroNav_0609() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0609.map(group => `
    <div class="mb-6">
      <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
