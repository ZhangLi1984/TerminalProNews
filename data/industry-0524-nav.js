// ==========================================
// 行业研究内参 - 导航配置 2026-05-24
// ==========================================
const INDUSTRY_NAV_CONFIG_0524 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: '半导体/AI算力全产业链' },
      { id: 'i_sec2', label: '存储芯片超级周期' },
      { id: 'i_sec3', label: '天然气发动机/数据中心发电' },
      { id: 'i_sec4', label: '高纯四氯化硅/光纤产业链' }
    ]
  },
  {
    title: '周期与反转',
    links: [
      { id: 'i_sec5', label: '生猪养殖（左侧布局）' },
      { id: 'i_sec6', label: '食品饮料/大消费' },
      { id: 'i_sec7', label: '钢铁（需求结构转型）' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec8', label: '电力设备/电网' },
      { id: 'i_sec9', label: '储能与锂电池' },
      { id: 'i_sec10', label: '商业航天/低空经济' },
      { id: 'i_sec11', label: '创新药/CXO' }
    ]
  },
  {
    title: '底仓与策略',
    links: [
      { id: 'i_sec12', label: '银行/家电/快递' },
      { id: 'i_sec13', label: '大宗商品监测表' },
      { id: 'i_sec14', label: '策略总结与风险提示' }
    ]
  }
];

function renderIndustryNav_0524() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0524.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
