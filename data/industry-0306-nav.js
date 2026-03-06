// ==========================================
// 行业研究报告导航配置 - 2026-03-06
// ==========================================

const INDUSTRY_NAV_CONFIG_0306 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI 算力/光通信' },
      { id: 'sec2', label: '证券/保险' },
      { id: 'sec3', label: '医药/创新药' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec4', label: 'AI→电力瓶颈' },
      { id: 'sec5', label: '地缘→化工替代' },
      { id: 'sec6', label: '原奶周期反转' }
    ]
  },
  {
    title: '预期差挖掘',
    links: [
      { id: 'sec7', label: '人形机器人' },
      { id: 'sec8', label: '商业航天' },
      { id: 'sec9', label: '焦煤/钢铁' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec10', label: '大宗量价监测表' },
      { id: 'sec11', label: '产业链估值监测' },
      { id: 'sec12', label: '仓位配置建议' }
    ]
  }
];

function renderIndustryNav_0306() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0306.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToElement('${link.id}'); updateActiveNav('${link.id}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
