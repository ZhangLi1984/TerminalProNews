// truncated=================================
// 行业研究报告导航模块 - 2026 年 3 月 9 日
// （深度融合行研总监+CIO 内参）
// ==========================================

const INDUSTRY_NAV_CONFIG_0309 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力产业链' },
      { id: 'i_sec2', label: '半导体 (存储 + 设备)' },
      { id: 'i_sec3', label: '人形机器人' }
    ]
  },
  {
    title: '周期资源链',
    links: [
      { id: 'i_sec4', label: '石油/油运' },
      { id: 'i_sec5', label: '电解铝' },
      { id: 'i_sec6', label: '燃气轮机' },
      { id: 'i_sec7', label: '煤炭' }
    ]
  },
  {
    title: '新能源/新材料',
    links: [
      { id: 'i_sec8', label: '锂电上游' },
      { id: 'i_sec9', label: '制冷剂' },
      { id: 'i_sec10', label: '玻纤' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec11', label: '生猪养殖' },
      { id: 'i_sec12', label: '房地产' },
      { id: 'i_sec13', label: '证券' }
    ]
  },
  {
    title: '高端制造',
    links: [
      { id: 'i_sec14', label: '工程机械' },
      { id: 'i_sec15', label: '电网设备' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec16', label: '大宗商品监测表' },
      { id: 'i_sec17', label: '产业链估值表' },
      { id: 'i_sec18', label: '策略建议' }
    ]
  }
];

function renderIndustryNav_0309() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0309.map(section => `
    <div>
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-2">${section.title}</div>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors text-left" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
