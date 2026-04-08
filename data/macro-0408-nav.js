// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-08
// ==========================================

const MACRO_NAV_CONFIG_0408 = [
  {
    title: '全球宏观',
    links: [
      { id: 'm_sec1', label: '中东停火协议' },
      { id: 'm_sec2', label: '美联储政策' }
    ]
  },
  {
    title: '国内经济',
    links: [
      { id: 'm_sec3', label: '货币政策' },
      { id: 'm_sec4', label: '产业政策' }
    ]
  },
  {
    title: '市场策略',
    links: [
      { id: 'm_sec5', label: 'A 股策略' },
      { id: 'm_sec6', label: '债市观点' }
    ]
  }
];

function renderMacroNav_0408() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
