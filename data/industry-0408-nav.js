// ==========================================
// 智研金融 Terminal Pro - 行业研究导航 2026-04-08
// ==========================================

const INDUSTRY_NAV_CONFIG_0408 = [
  {
    title: 'S 级核心赛道',
    links: [
      { id: 'i_sec1', label: '人形机器人' },
      { id: 'i_sec2', label: 'AI 算力产业链' }
    ]
  },
  {
    title: 'A 级重点方向',
    links: [
      { id: 'i_sec3', label: '存储芯片' },
      { id: 'i_sec4', label: '海上风电' },
      { id: 'i_sec5', label: '创新药' },
      { id: 'i_sec6', label: '有色金属' }
    ]
  },
  {
    title: 'CIO 深度暗线',
    links: [
      { id: 'i_sec7', label: '氟化盐/预焙阳极' },
      { id: 'i_sec8', label: '小分子 CDMO' },
      { id: 'i_sec9', label: 'IP 版权方' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec10', label: '大宗商品监测' },
      { id: 'i_sec11', label: '产业链周期' },
      { id: 'i_sec12', label: '完整评级表' }
    ]
  }
];

function renderIndustryNav_0408() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
