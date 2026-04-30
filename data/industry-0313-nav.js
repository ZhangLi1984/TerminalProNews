// truncated=================================
// 行业研究报告 - 2026-03-13 导航配置
// ==========================================

const INDUSTRY_NAV_CONFIG_0313 = [
  {
    title: '核心观点',
    links: [
      { id: 'i_sec1', label: '核心观点摘要' }
    ]
  },
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec2', label: 'AI算力基础设施' },
      { id: 'i_sec3', label: '人形机器人' },
      { id: 'i_sec4', label: '新能源汽车' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec5', label: '维生素与氨基酸供给冲击' },
      { id: 'i_sec6', label: '电解铝供给收缩' },
      { id: 'i_sec7', label: '算电协同机遇' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec8', label: '钢铁行业价值重估' },
      { id: 'i_sec9', label: '化工行业地缘溢价' },
      { id: 'i_sec10', label: '军工行业订单加速' }
    ]
  },
  {
    title: '高确定性赛道',
    links: [
      { id: 'i_sec11', label: '低空经济与医药生物' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec12', label: '大宗商品量价监测' },
      { id: 'i_sec13', label: '产业链周期与估值' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'i_sec14', label: '四维配置框架' }
    ]
  }
];

function renderIndustryNav_0313() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0313.map(category => `
    <div class="nav-category">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${category.title}</h3>
      <ul class="space-y-1">
        ${category.links.map(link => `
          <li>
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center"
              data-section="${link.id}"
              onclick="scrollToSection('industry', '${link.id}')"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0 transition-colors"></div>
              ${link.label}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}