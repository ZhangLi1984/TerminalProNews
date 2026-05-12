// 行业研究导航模块 - 2026-05-13
const INDUSTRY_NAV_CONFIG_0513 = [
  {
    title: '核心赛道',
    links: [
      { id: 'sec1', label: 'AI算力基础设施' },
      { id: 'sec2', label: '锂电新周期' },
      { id: 'sec3', label: '非银金融（券商）' }
    ]
  },
  {
    title: '暗线与二阶博弈',
    links: [
      { id: 'sec4', label: 'AI Agent → CPU超级周期' },
      { id: 'sec5', label: '伊朗地缘 → 化工供给冲击' },
      { id: 'sec6', label: '锂电高景气 → 钠电产业化' },
      { id: 'sec7', label: '风电周期反转' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'sec8', label: '白酒行业出清' },
      { id: 'sec9', label: '医药生物底部确认' },
      { id: 'sec10', label: '生猪养殖深度亏损' },
      { id: 'sec11', label: '工程机械三重共振' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec12', label: '大宗商品量价监测表' },
      { id: 'sec13', label: '产业链周期与估值监测' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'sec14', label: '仓位配置与动态调仓' }
    ]
  }
];

function renderIndustryNav_0513() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0513.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
