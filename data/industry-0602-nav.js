// ==========================================
// 行业研究 - 导航配置 (2026-06-02)
// ==========================================

const INDUSTRY_NAV_CONFIG_0602 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基建' },
      { id: 'i_sec2', label: 'MLCC' },
      { id: 'i_sec3', label: '创新药/CXO' },
      { id: 'i_sec4', label: '人形机器人' }
    ]
  },
  {
    title: '重点行业',
    links: [
      { id: 'i_sec5', label: '电力设备' },
      { id: 'i_sec6', label: '锂电材料' },
      { id: 'i_sec7', label: '汽车智能化' },
      { id: 'i_sec8', label: '商业航天' }
    ]
  },
  {
    title: '其他行业',
    links: [
      { id: 'i_sec9', label: '证券行业' },
      { id: 'i_sec10', label: '建筑建材' },
      { id: 'i_sec11', label: '基础化工' },
      { id: 'i_sec12', label: '钢铁行业' }
    ]
  },
  {
    title: '消费与周期',
    links: [
      { id: 'i_sec13', label: '新能源环卫' },
      { id: 'i_sec14', label: '消费/纺服' },
      { id: 'i_sec15', label: '房地产/REITs' },
      { id: 'i_sec16', label: '原料药跨界' }
    ]
  },
  {
    title: 'CIO专属',
    links: [
      { id: 'i_sec17', label: '量价监测表' },
      { id: 'i_sec18', label: '周期估值监测' },
      { id: 'i_sec19', label: '仓位建议' },
      { id: 'i_sec20', label: '行动清单' }
    ]
  }
];

function renderIndustryNav_0602() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0602.map(group => `
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
