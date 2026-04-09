// ==========================================
// 行业研究导航模块 - 2026-04-09
// 整合行研总监 + CIO深度报告
// ==========================================

const INDUSTRY_NAV_CONFIG_0409 = [
  {
    title: '核心赛道',
    links: [
      { id: 'ind_sec1', label: '人形机器人 (S级)' },
      { id: 'ind_sec2', label: '储能/锂电/海风 (S级)' },
      { id: 'ind_sec3', label: '创新药/CXO (A+级)' },
      { id: 'ind_sec4', label: 'AI算力/半导体 (A级)' },
      { id: 'ind_sec5', label: '券商 (A级)' },
      { id: 'ind_sec6', label: '猪周期 (B+级)' }
    ]
  },
  {
    title: '其他板块',
    links: [
      { id: 'ind_sec7', label: '氟化工/制冷剂' },
      { id: 'ind_sec8', label: '商业航天' },
      { id: 'ind_sec9', label: '工程机械/出海' },
      { id: 'ind_sec10', label: '房地产/煤炭' }
    ]
  },
  {
    title: 'CIO 专题',
    links: [
      { id: 'ind_sec11', label: '重点个股推荐' },
      { id: 'ind_sec12', label: '四大暗线博弈' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'ind_sec13', label: '大宗商品监测表' },
      { id: 'ind_sec14', label: '产业链估值表' }
    ]
  },
  {
    title: '策略与操作',
    links: [
      { id: 'ind_sec15', label: '仓位配置建议' },
      { id: 'ind_sec16', label: '周度操作清单' },
      { id: 'ind_sec17', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0409() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0409.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
