// ==========================================
// Industry Nav Config: 2026-03-24
// 行业研究汇总 - 导航配置
// ==========================================

const INDUSTRY_NAV_CONFIG_0324 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力与存储链' },
      { id: 'i_sec2', label: '光通信与液冷' },
      { id: 'i_sec3', label: '化工龙头白马' },
      { id: 'i_sec4', label: '储能与锂电' }
    ]
  },
  {
    title: '跨赛道暗线博弈',
    links: [
      { id: 'i_sec5', label: '油运/航运替代路线' },
      { id: 'i_sec6', label: '电力缺口→燃气轮机/SST' },
      { id: 'i_sec7', label: '半导体涨价→龙头集中' },
      { id: 'i_sec8', label: '生猪去产能→牛肉/鸡肉' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec9', label: '人形机器人' },
      { id: 'i_sec10', label: '光伏 (太空概念)' },
      { id: 'i_sec11', label: '证券' }
    ]
  },
  {
    title: '大宗商品监测',
    links: [
      { id: 'i_sec12', label: '量价监测表' },
      { id: 'i_sec13', label: '周期与估值表' }
    ]
  }
];

function renderIndustryNav_0324() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0324.forEach((category) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#${link.id}" onclick="scrollToSection('industry', '${link.id}')" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
