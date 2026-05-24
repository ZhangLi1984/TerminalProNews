// ==========================================
// 行业研究内参 - 导航配置 2026-05-24
// ==========================================
const INDUSTRY_NAV_CONFIG_0524 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: '半导体/AI算力全产业链' },
      { id: 'i_sec2', label: '存储产业链' },
      { id: 'i_sec3', label: '人形机器人/智能驾驶' }
    ]
  },
  {
    title: '暗线与二阶博弈',
    links: [
      { id: 'i_sec4', label: '天然气发动机出海' },
      { id: 'i_sec5', label: '中东冲突->中国钢出口' },
      { id: 'i_sec6', label: 'Rubin架构->PCB/MLCC爆发' },
      { id: 'i_sec7', label: '光纤预制棒/四氯化硅' },
      { id: 'i_sec8', label: '太空光伏/CPI膜' }
    ]
  },
  {
    title: '周期反转',
    links: [
      { id: 'i_sec9', label: '生猪养殖' },
      { id: 'i_sec10', label: '食品饮料/大消费' },
      { id: 'i_sec11', label: '房地产' },
      { id: 'i_sec12', label: '家电' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec13', label: '电力设备/电网' },
      { id: 'i_sec14', label: '储能/锂电池' },
      { id: 'i_sec15', label: '商业航天/低空经济' },
      { id: 'i_sec16', label: '创新药/CXO' },
      { id: 'i_sec17', label: '银行' },
      { id: 'i_sec18', label: '快递物流' }
    ]
  },
  {
    title: '监测数据',
    links: [
      { id: 'i_sec19', label: '大宗商品量价监测表' },
      { id: 'i_sec20', label: '产业链周期与估值表' },
      { id: 'i_sec21', label: '策略总结：杠铃配置' }
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
