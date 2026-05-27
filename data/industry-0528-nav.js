// ==========================================
// 行业研究模块 - 导航配置 (2026-05-28)
// ==========================================

const INDUSTRY_NAV_CONFIG_0528 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力与半导体' },
      { id: 'i_sec2', label: '创新药与医疗器械' },
      { id: 'i_sec3', label: '智能驾驶与自动驾驶' }
    ]
  },
  {
    title: '暗线与二阶博弈',
    links: [
      { id: 'i_sec4', label: 'PCB材料设备国产替代' },
      { id: 'i_sec5', label: '煤炭供给侧黑天鹅' },
      { id: 'i_sec6', label: '半导体硅片困境反转' },
      { id: 'i_sec7', label: '制冷剂量价齐升' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec8', label: '生猪养殖周期反转' },
      { id: 'i_sec9', label: '光伏产能出清' },
      { id: 'i_sec10', label: '肉牛+原奶周期共振' }
    ]
  },
  {
    title: '其他赛道',
    links: [
      { id: 'i_sec11', label: '人形机器人' },
      { id: 'i_sec12', label: '金融非银银行' },
      { id: 'i_sec13', label: '电力设备新能源' },
      { id: 'i_sec14', label: '大宗商品量价监测' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec15', label: 'CIO战略配置建议' },
      { id: 'i_sec16', label: '产业链估值监测表' }
    ]
  }
];

function renderIndustryNav_0528() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
