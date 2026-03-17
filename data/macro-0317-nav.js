// ==========================================
// 宏观研究导航模块 - 2026-03-17
// ==========================================

const MACRO_NAV_CONFIG_0317 = [
  {
    title: '宏观核心观点',
    links: [
      { id: 'sec1', label: '市场格局判断' },
      { id: 'sec2', label: '关键数据监测' },
      { id: 'sec3', label: '核心配置方向' }
    ]
  },
  {
    title: '政策宏观',
    links: [
      { id: 'sec4', label: '国务院会议' },
      { id: 'sec5', label: '房地产政策' },
      { id: 'sec6', label: '医保政策' }
    ]
  },
  {
    title: '流动性监测',
    links: [
      { id: 'sec7', label: 'SHIBOR/社融' },
      { id: 'sec8', label: 'M1/M2 剪刀差' },
      { id: 'sec9', label: '两融数据' }
    ]
  },
  {
    title: '地缘宏观',
    links: [
      { id: 'sec10', label: '中东局势升级' },
      { id: 'sec11', label: '原油传导链' },
      { id: 'sec12', label: '美联储决议' }
    ]
  },
  {
    title: '产业政策',
    links: [
      { id: 'sec13', label: '十五五规划' },
      { id: 'sec14', label: '算电协同战略' },
      { id: 'sec15', label: '氢能政策' }
    ]
  }
];

function renderMacroNav_0317() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-emerald-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
