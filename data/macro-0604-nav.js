const MACRO_NAV_CONFIG_0604 = [
  {
    title: '执行摘要',
    links: [
      { id: 'm_sec1', label: '核心结论' }
    ]
  },
  {
    title: '关键经济数据',
    links: [
      { id: 'm_sec2', label: '核心指标概览' },
      { id: 'm_sec3', label: '趋势解读' },
      { id: 'm_sec4', label: '企业利润分化' }
    ]
  },
  {
    title: '五大核心观点',
    links: [
      { id: 'm_sec5', label: '外需再通胀+内需弱修复' },
      { id: 'm_sec6', label: 'AI中美双轮驱动' },
      { id: 'm_sec7', label: '美伊谈判与全球定价' },
      { id: 'm_sec8', label: '结构性精准发力' },
      { id: 'm_sec9', label: '美联储滞胀两难' }
    ]
  },
  {
    title: '跨境与地缘风险',
    links: [
      { id: 'm_sec10', label: '霍尔木兹海峡' },
      { id: 'm_sec11', label: '中美经贸' },
      { id: 'm_sec12', label: '全球央行政策分化' }
    ]
  },
  {
    title: '大类资产配置',
    links: [
      { id: 'm_sec13', label: '配置矩阵' },
      { id: 'm_sec14', label: '股票哑铃策略' },
      { id: 'm_sec15', label: '债券与商品' }
    ]
  },
  {
    title: '行业线索与主题',
    links: [
      { id: 'm_sec16', label: 'AI产业链' },
      { id: 'm_sec17', label: '出口链' },
      { id: 'm_sec18', label: '上游资源品' },
      { id: 'm_sec19', label: '城市更新/基建' },
      { id: 'm_sec20', label: '房地产' }
    ]
  },
  {
    title: '风险预警',
    links: [
      { id: 'm_sec21', label: '外部风险' },
      { id: 'm_sec22', label: '内部风险' },
      { id: 'm_sec23', label: '证伪指标' }
    ]
  },
  {
    title: '数据附录',
    links: [
      { id: 'm_sec24', label: '月度趋势' },
      { id: 'm_sec25', label: '全球资产价格' }
    ]
  }
];

function renderMacroNav_0604() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0604.map(cat => `
    <div class="mb-5">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 flex items-center group text-slate-700 hover:bg-slate-100">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
