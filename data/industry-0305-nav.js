// ==========================================
// 行业研究报告导航配置 - 2026-03-05
// ==========================================

const INDUSTRY_NAV_CONFIG_0305 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI 算力与光通信' },
      { id: 'sec2', label: '半导体 (存储/设备)' },
      { id: 'sec3', label: '人形机器人' }
    ]
  },
  {
    title: '医药与周期',
    links: [
      { id: 'sec4', label: '医药供给端重构' },
      { id: 'sec5', label: '生猪养殖 (困境反转)' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec6', label: '霍尔木兹→化工替代' },
      { id: 'sec7', label: '欧洲天然气→玻纤出口' },
      { id: 'sec8', label: '津巴布韦→锂矿再平衡' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec9', label: '大宗量价监测表' },
      { id: 'sec10', label: '产业链估值监测' },
      { id: 'sec11', label: '仓位配置建议' }
    ]
  }
];

function renderIndustryNav_0305() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0305.map((group, idx) => `
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
