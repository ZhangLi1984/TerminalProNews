// ==========================================
// 行业研究报告导航配置 - 2026-03-07
// 深度融合：行研总监 × CIO 内参
// ==========================================

const INDUSTRY_NAV_CONFIG_0307 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI 算力/半导体' },
      { id: 'sec2', label: '油气/油服' },
      { id: 'sec3', label: '人形机器人' },
      { id: 'sec4', label: '氟化工/制冷剂' },
      { id: 'sec5', label: '电子布/玻纤' }
    ]
  },
  {
    title: '资源周期赛道',
    links: [
      { id: 'sec6', label: '锂资源/新能源金属' },
      { id: 'sec7', label: '黄金/贵金属' },
      { id: 'sec8', label: '煤炭' },
      { id: 'sec9', label: '核电' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec10', label: '中东冲突→欧洲化工替代' },
      { id: 'sec11', label: 'AI 算力→电力缺口→燃气轮机' },
      { id: 'sec12', label: '锂矿断供→回收/钠电受益' },
      { id: 'sec13', label: '海峡封锁→油运费率跳涨' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'sec14', label: '生猪养殖周期底部' },
      { id: 'sec15', label: '原奶/乳制品去产能' },
      { id: 'sec16', label: '光伏反内卷政策' },
      { id: 'sec17', label: '房地产一线回暖' },
      { id: 'sec18', label: '创新药分化机会' }
    ]
  },
  {
    title: '事件驱动',
    links: [
      { id: 'sec19', label: '英伟达 GTC2026' },
      { id: 'sec20', label: '券商并购浪潮' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec21', label: '大宗量价监测表' },
      { id: 'sec22', label: '产业链估值监测' },
      { id: 'sec23', label: '首席策略总结' }
    ]
  }
];

function renderIndustryNav_0307() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0307.map((group, idx) => `
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
