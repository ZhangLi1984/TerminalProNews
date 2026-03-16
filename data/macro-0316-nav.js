// ==========================================
// 宏观研究导航模块 - 2026 年 3 月 16 日
// ==========================================

const MACRO_NAV_CONFIG_0316 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '核心主线与全局叙事' },
      { id: 'm_sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'm_sec3', label: '美伊冲突与油价' },
      { id: 'm_sec4', label: '315 晚会曝光' },
      { id: 'm_sec5', label: '十五五规划' }
    ]
  },
  {
    title: '政策宏观',
    links: [
      { id: 'm_sec6', label: '央行逆回购' },
      { id: 'm_sec7', label: '社融数据' },
      { id: 'm_sec8', label: '监管动态' }
    ]
  },
  {
    title: '跨赛道传导',
    links: [
      { id: 'm_sec9', label: '地缘→能源→化工' },
      { id: 'm_sec10', label: 'AI 安全→合规红利' },
      { id: 'm_sec11', label: 'HALO 策略' }
    ]
  }
];

function renderMacroNav_0316() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('macro', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
