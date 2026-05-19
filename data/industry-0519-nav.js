// 行业研究导航配置 - 2026-05-19
const INDUSTRY_NAV_CONFIG_0519 = [
  {
    title: '核心赛道',
    links: [
      { id: 'sec1', label: 'CPO/光通信' },
      { id: 'sec2', label: 'AI存储 DRAM/NAND' },
      { id: 'sec3', label: '半导体设备/材料' },
      { id: 'sec4', label: 'AI算力硬件 PCB/CCL' }
    ]
  },
  {
    title: '周期与成长',
    links: [
      { id: 'sec5', label: '锂电/储能' },
      { id: 'sec6', label: '燃气轮机/AIDC电力' },
      { id: 'sec7', label: '人形机器人' },
      { id: 'sec8', label: '创新药/CXO' }
    ]
  },
  {
    title: '新兴与防御',
    links: [
      { id: 'sec9', label: '商业航天/卫星互联网' },
      { id: 'sec10', label: '消费电子/AI端侧' },
      { id: 'sec11', label: '保险/非银金融' },
      { id: 'sec12', label: '工程机械' }
    ]
  },
  {
    title: '底部观察',
    links: [
      { id: 'sec13', label: '农林牧渔（猪周期）' },
      { id: 'sec14', label: '光伏设备' },
      { id: 'sec15', label: '船舶制造' }
    ]
  },
  {
    title: '综合数据',
    links: [
      { id: 'sec16', label: '行业景气指标速查表' },
      { id: 'sec17', label: 'CIO仓位与交易策略' }
    ]
  }
];

function renderIndustryNav_0519() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0519.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
            <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors bg-transparent group-hover:bg-slate-400"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
