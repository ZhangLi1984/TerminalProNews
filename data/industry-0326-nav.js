// ==========================================
// 行业研究导航配置 - 2026 年 3 月 26 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0326 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力与半导体' },
      { id: 'i_sec2', label: '稀土永磁' },
      { id: 'i_sec3', label: '商业航天' },
      { id: 'i_sec4', label: '医美注射' }
    ]
  },
  {
    title: '暗线博弈',
    links: [
      { id: 'i_sec5', label: '化工品涨价' },
      { id: 'i_sec6', label: '液冷散热' },
      { id: 'i_sec7', label: '太空光伏' }
    ]
  },
  {
    title: '预期差',
    links: [
      { id: 'i_sec8', label: 'MLCC/继电器' },
      { id: 'i_sec9', label: 'CXO/创新药' },
      { id: 'i_sec10', label: '房地产' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec11', label: '大宗商品监测' },
      { id: 'i_sec12', label: '产业链周期' }
    ]
  },
  {
    title: '策略总结',
    links: [
      { id: 'i_sec13', label: '仓位建议' }
    ]
  }
];

function renderIndustryNav_0326() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0326.forEach((section, idx) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${section.title}</h3>
      <nav class="space-y-1">`;
    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('industry', '${link.id}')"
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group hover:bg-slate-100"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</nav></div>`;
  });

  container.innerHTML = html;
}
