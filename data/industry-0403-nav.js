// truncatedRY_NAV_CONFIG_0403 = [
  {
    title: '宏观与策略',
    links: [
      { id: 'i_sec1', label: '宏观经济：温和修复' },
      { id: 'i_sec2', label: '策略配置：哑铃结构' },
      { id: 'i_sec3', label: '港股与海外市场' }
    ]
  },
  {
    title: 'AI & 科技',
    links: [
      { id: 'i_sec4', label: 'AI 算力与芯片' },
      { id: 'i_sec5', label: '光通信 (OFC 2026)' },
      { id: 'i_sec6', label: '半导体设备' },
      { id: 'i_sec7', label: '人形机器人' }
    ]
  },
  {
    title: '医药生物',
    links: [
      { id: 'i_sec8', label: '创新药出海爆发' },
      { id: 'i_sec9', label: '维生素全线涨价' }
    ]
  },
  {
    title: '新能源与电池',
    links: [
      { id: 'i_sec10', label: '固态电池' },
      { id: 'i_sec11', label: '光伏与储能' },
      { id: 'i_sec12', label: '锂电产业链' }
    ]
  },
  {
    title: '能源与资源品',
    links: [
      { id: 'i_sec13', label: '石油 & 油运' },
      { id: 'i_sec14', label: '煤炭' },
      { id: 'i_sec15', label: '有色金属' },
      { id: 'i_sec16', label: '黄金' }
    ]
  },
  {
    title: '消费板块',
    links: [
      { id: 'i_sec17', label: '食品饮料' },
      { id: 'i_sec18', label: '汽车行业' }
    ]
  },
  {
    title: '金融地产',
    links: [
      { id: 'i_sec19', label: '房地产' },
      { id: 'i_sec20', label: '银行' },
      { id: 'i_sec21', label: '证券 & 保险' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec22', label: '优先级配置表' },
      { id: 'i_sec23', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0403() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0403.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700"
            data-section="${link.id}"
            onclick="scrollToSection('industry', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors flex-shrink-0"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
