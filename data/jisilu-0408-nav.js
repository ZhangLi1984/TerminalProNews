// ==========================================
// 智研金融 Terminal Pro - 集思录导航 2026-04-08
// ==========================================

const JISILU_NAV_CONFIG_0408 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '中东停火讨论' },
      { id: 'j_sec2', label: 'A 股反弹策略' }
    ]
  },
  {
    title: '投资洞察',
    links: [
      { id: 'j_sec3', label: ' ETF 套利' },
      { id: 'j_sec4', label: '可转债机会' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'j_sec5', label: '市场风险' }
    ]
  }
];

function renderJisiluNav_0408() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0408.map(section => `
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
