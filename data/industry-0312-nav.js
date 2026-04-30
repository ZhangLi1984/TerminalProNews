// truncated=================================
// 行业研究导航 - 2026-03-12
// ==========================================

const INDUSTRY_NAV_CONFIG_0312 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: '医药生物/创新药' },
      { id: 'i_sec2', label: '低空经济' },
      { id: 'i_sec3', label: '国防军工' },
      { id: 'i_sec4', label: 'AI 算力' },
      { id: 'i_sec5', label: '量子计算' },
      { id: 'i_sec6', label: '半导体' }
    ]
  },
  {
    title: '成长赛道',
    links: [
      { id: 'i_sec7', label: 'AI 大模型/GPT-5.4' },
      { id: 'i_sec8', label: '人形机器人' },
      { id: 'i_sec9', label: '新能源汽车' },
      { id: 'i_sec10', label: '电力设备/电网' }
    ]
  },
  {
    title: '周期赛道',
    links: [
      { id: 'i_sec11', label: '有色金属' },
      { id: 'i_sec12', label: '交通运输/油运' },
      { id: 'i_sec13', label: '农林牧渔' },
      { id: 'i_sec14', label: '煤炭行业' }
    ]
  },
  {
    title: 'CIO 深度洞察',
    links: [
      { id: 'i_sec15', label: '高胜率赛道共识' },
      { id: 'i_sec16', label: '跨赛道暗线博弈' },
      { id: 'i_sec17', label: '预期差与困境反转' },
      { id: 'i_sec18', label: 'CIO 配置建议' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec19', label: '大宗商品量价监测' },
      { id: 'i_sec20', label: '产业链周期估值' }
    ]
  }
];

function renderIndustryNav_0312() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('industry', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
