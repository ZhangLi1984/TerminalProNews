// ==========================================
// 行业研究导航配置 - 2026-03-20
// 整合：行研总监 + CIO 深度投研
// ==========================================

const INDUSTRY_NAV_CONFIG_0320 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: '人形机器人/具身智能' },
      { id: 'i_sec2', label: 'AI 算力/光通信' },
      { id: 'i_sec3', label: '储能/锂电' },
      { id: 'i_sec4', label: '脑机接口' }
    ]
  },
  {
    title: '周期行业',
    links: [
      { id: 'i_sec5', label: '半导体' },
      { id: 'i_sec6', label: '风电/海缆' },
      { id: 'i_sec7', label: '生猪养殖' },
      { id: 'i_sec8', label: '化工/维生素' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec9', label: '大宗商品价格表' },
      { id: 'i_sec10', label: '产业链周期估值表' }
    ]
  },
  {
    title: 'CIO 洞察',
    links: [
      { id: 'i_sec11', label: '暗线一：半导体涨价' },
      { id: 'i_sec12', label: '暗线二：风电关税' },
      { id: 'i_sec13', label: '暗线三：猪周期' }
    ]
  }
];

function renderIndustryNav_0320() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0320.map((section, idx) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('industry', '${link.id}'); return false;"
            class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
