// ==========================================
// 行业研究报告导航模块 - 2026 年 3 月 8 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0308 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力基础设施' },
      { id: 'i_sec2', label: '半导体 (存储 + 设备)' },
      { id: 'i_sec3', label: '人形机器人' }
    ]
  },
  {
    title: '周期资源',
    links: [
      { id: 'i_sec4', label: '油气链/油服设备' },
      { id: 'i_sec5', label: '燃气轮机' },
      { id: 'i_sec6', label: '煤炭' },
      { id: 'i_sec7', label: '工程机械' }
    ]
  },
  {
    title: '新能源链',
    links: [
      { id: 'i_sec8', label: '锂电上游' },
      { id: 'i_sec9', label: '制冷剂' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec10', label: '生猪养殖' },
      { id: 'i_sec11', label: '房地产' },
      { id: 'i_sec12', label: '证券' },
      { id: 'i_sec13', label: '玻纤' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec14', label: '大宗商品监测表' },
      { id: 'i_sec15', label: '产业链估值表' },
      { id: 'i_sec16', label: '策略建议' }
    ]
  }
];

function renderIndustryNav_0308() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0308.map(section => `
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
