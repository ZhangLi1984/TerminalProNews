// ==========================================
// 宏观研究导航 - 2026-03-12
// ==========================================

const MACRO_NAV_CONFIG_0312 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '核心主线' },
      { id: 'm_sec2', label: '地缘政治推演' }
    ]
  },
  {
    title: '政策监测',
    links: [
      { id: 'm_sec3', label: '两会政策' },
      { id: 'm_sec4', label: '央行动态' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec5', label: '外贸数据' },
      { id: 'm_sec6', label: '资金面' }
    ]
  },
  {
    title: '全球宏观',
    links: [
      { id: 'm_sec7', label: '美联储政策' },
      { id: 'm_sec8', label: '大宗商品' }
    ]
  }
];

function renderMacroNav_0312() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('macro', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
