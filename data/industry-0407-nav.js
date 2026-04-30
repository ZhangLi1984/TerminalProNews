// truncated=================================
// 行业研究导航配置 - 2026 年 4 月 7 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0407 = [
  {
    title: '核心摘要',
    links: [
      { id: 'i_sec1', label: '评级分布' },
      { id: 'i_sec2', label: '研报类型' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 'i_sec3', label: '昆药集团' },
      { id: 'i_sec4', label: '电新行业' },
      { id: 'i_sec5', label: '非银金融' },
      { id: 'i_sec6', label: '东鹏饮料' },
      { id: 'i_sec7', label: '云意电气' },
      { id: 'i_sec8', label: '先导智能' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'i_sec9', label: '中联重科' },
      { id: 'i_sec10', label: '中信建投' },
      { id: 'i_sec11', label: '电力设备' },
      { id: 'i_sec12', label: '医药生物' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'i_sec13', label: '完整榜单' }
    ]
  }
];

function renderIndustryNav_0407() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  const navHtml = INDUSTRY_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'i_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
