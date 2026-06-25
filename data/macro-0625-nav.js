const MACRO_NAV_CONFIG_0625 = [
  { title: '核心宏观判断', links: [{ id: 'sec1', label: '经济增长与周期定位' }] },
  { title: '货币与财政政策', links: [{ id: 'sec2', label: '货币政策 stance' }, { id: 'sec3', label: '财政政策与产业政策' }] },
  { title: '资产配置', links: [{ id: 'sec4', label: '大类资产配置建议' }] },
  { title: '行业轮动', links: [{ id: 'sec5', label: '宏观映射与行业推荐' }] },
  { title: '风险提示', links: [{ id: 'sec6', label: '外部风险' }, { id: 'sec7', label: '内部风险' }, { id: 'sec8', label: '证伪指标' }] }
];

function renderMacroNav_0625() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0625.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
