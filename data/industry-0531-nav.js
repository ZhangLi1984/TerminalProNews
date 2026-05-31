// ==========================================
// 行业研究模块 - 导航配置 (2026-05-31)
// ==========================================

const INDUSTRY_NAV_CONFIG_0531 = [
  {
    title: 'S级赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施' },
      { id: 'i_sec2', label: '创新药ADC/双抗' },
      { id: 'i_sec3', label: '人形机器人' }
    ]
  },
  {
    title: 'A级赛道',
    links: [
      { id: 'i_sec4', label: 'AI电力基础设施' },
      { id: 'i_sec5', label: '焦煤/煤炭' },
      { id: 'i_sec6', label: '生猪养殖' },
      { id: 'i_sec7', label: '锂电产业链' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec8', label: '四条暗线推演' }
    ]
  },
  {
    title: '数据与配置',
    links: [
      { id: 'i_sec9', label: '大宗商品量价监测' },
      { id: 'i_sec10', label: '产业链周期估值' },
      { id: 'i_sec11', label: 'CIO仓位建议' },
      { id: 'i_sec12', label: '风险预警与信号' }
    ]
  }
];

function renderIndustryNav_0531() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0531.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
