const MACRO_NAV_CONFIG_0403 = [
  {
    title: '宏观经济',
    links: [
      { id: 'm_sec1', label: '核心数据一览' },
      { id: 'm_sec2', label: '经济动态分析' },
      { id: 'm_sec3', label: '货币与财政政策' }
    ]
  },
  {
    title: '策略配置',
    links: [
      { id: 'm_sec4', label: '市场预期与风格' },
      { id: 'm_sec5', label: '三大结构主题' },
      { id: 'm_sec6', label: '港股与美股' }
    ]
  },
  {
    title: '地缘分析',
    links: [
      { id: 'm_sec7', label: '美伊冲突进展' },
      { id: 'm_sec8', label: '对中国的二阶影响' },
      { id: 'm_sec9', label: '全球溢出效应' }
    ]
  },
  {
    title: '大类资产',
    links: [
      { id: 'm_sec10', label: '固定收益' },
      { id: 'm_sec11', label: '可转债' },
      { id: 'm_sec12', label: '大宗商品' }
    ]
  },
  {
    title: '行业精选',
    links: [
      { id: 'm_sec13', label: '油运与能源' },
      { id: 'm_sec14', label: '银行与保险' },
      { id: 'm_sec15', label: '券商与地产' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec16', label: '七大风险因子' },
      { id: 'm_sec17', label: '4 月三大催化' }
    ]
  }
];

function renderMacroNav_0403() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0403.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700"
            data-section="${link.id}"
            onclick="scrollToSection('macro', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors flex-shrink-0"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
