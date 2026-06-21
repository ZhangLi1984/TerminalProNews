const MACRO_NAV_CONFIG_0621 = [
  { title: '核心判断', links: [{ id: 'sec1', label: '周期定位' }] },
  { title: '政策分析', links: [{ id: 'sec2', label: '货币政策' }, { id: 'sec3', label: '财政政策' }] },
  { title: '资产配置', links: [{ id: 'sec4', label: '配置建议' }] },
  { title: '行业轮动', links: [{ id: 'sec5', label: '行业映射' }] },
  { title: '经济数据', links: [{ id: 'sec6', label: '通胀指标' }, { id: 'sec7', label: '经济增长' }, { id: 'sec8', label: '投资消费' }, { id: 'sec9', label: '贸易金融' }] },
  { title: '风险提示', links: [{ id: 'sec10', label: '宏观风险' }] }
];

function renderMacroNav_0621() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0621.map(category => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">
        ${category.links.map(link => `
          <a href="#${link.id}" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" data-section="${link.id}">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 inline-block"></span>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
