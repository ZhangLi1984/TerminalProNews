const MACRO_NAV_CONFIG_0617 = [
  { title: '宏观判断', links: [
    { id: 'sec1', label: '周期定位' },
    { id: 'sec2', label: '经济增长' },
    { id: 'sec3', label: '通胀预期' }
  ]},
  { title: '政策分析', links: [
    { id: 'sec4', label: '货币政策' },
    { id: 'sec5', label: '财政政策' },
    { id: 'sec6', label: '产业政策' }
  ]},
  { title: '资产配置', links: [{ id: 'sec7', label: '配置建议' }] },
  { title: '行业映射', links: [{ id: 'sec8', label: '轮动逻辑' }] },
  { title: '风险提示', links: [{ id: 'sec9', label: '证伪指标' }] }
];
function renderMacroNav_0617() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
