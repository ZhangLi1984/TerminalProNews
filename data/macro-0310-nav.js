// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 10 日
// ==========================================

const MACRO_NAV_CONFIG_0310 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期位置' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '财政政策' }
    ]
  },
  {
    title: '配置策略',
    links: [
      { id: 'm_sec6', label: '资产配置' },
      { id: 'm_sec7', label: '行业轮动' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec8', label: '宏观风险' },
      { id: 'm_sec9', label: '证伪指标' },
      { id: 'm_sec10', label: '关注事件' }
    ]
  }
];

function renderMacroNav_0310() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0310.map(category => `
    <div class="mb-6">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-3">${category.title}</div>
      <nav class="space-y-1">
        ${category.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center group"
            data-section="${link.id}"
            onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior: 'smooth', block: 'start'});"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 transition-all duration-200 bg-transparent group-hover:bg-slate-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
