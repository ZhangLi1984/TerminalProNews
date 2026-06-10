// ==========================================
// 行业研究导航 - 2026年6月10日
// ==========================================

const INDUSTRY_NAV_CONFIG_0610 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施' },
      { id: 'i_sec2', label: '半导体/医疗器械平台' },
      { id: 'i_sec3', label: '有色金属/战略资源' },
      { id: 'i_sec4', label: '新能源汽车出海' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec5', label: 'SOFC电堆材料' },
      { id: 'i_sec6', label: '硬质合金刀具整合' },
      { id: 'i_sec7', label: '燃油车产业链出清' },
      { id: 'i_sec8', label: '炼化一体化出口' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec9', label: '茶饮连锁左侧布局' },
      { id: 'i_sec10', label: '造纸产能扩张' },
      { id: 'i_sec11', label: '黄金珠宝奢侈品模型' }
    ]
  },
  {
    title: '监测表与策略',
    links: [
      { id: 'i_sec12', label: '大宗商品监测表' },
      { id: 'i_sec13', label: '产业链周期估值表' },
      { id: 'i_sec14', label: 'CIO风险提示' }
    ]
  }
];

function renderIndustryNav_0610() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0610.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
