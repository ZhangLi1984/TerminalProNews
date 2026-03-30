// ==========================================
// 行业研究导航配置 - 2026-03-31
// ==========================================

const INDUSTRY_NAV_CONFIG_0331 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI 智能体/算力云服务' },
      { id: 'i_sec2', label: '人形机器人' },
      { id: 'i_sec3', label: '可控核聚变' },
      { id: 'i_sec4', label: '固态电池' }
    ]
  },
  {
    title: '周期资源',
    links: [
      { id: 'i_sec5', label: '高压实磷酸铁锂' },
      { id: 'i_sec6', label: '黄金/贵金属' },
      { id: 'i_sec7', label: '煤炭' },
      { id: 'i_sec8', label: '石油炼化' }
    ]
  },
  {
    title: '成长赛道',
    links: [
      { id: 'i_sec9', label: '创新药' },
      { id: 'i_sec10', label: '电力设备/电网' },
      { id: 'i_sec11', label: '半导体' },
      { id: 'i_sec12', label: '游戏' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec13', label: '房地产' },
      { id: 'i_sec14', label: '券商' },
      { id: 'i_sec15', label: '汽车智能化' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'i_sec16', label: 'S 级/A 级标的' },
      { id: 'i_sec17', label: '完整评级表' }
    ]
  }
];

function renderIndustryNav_0331() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
