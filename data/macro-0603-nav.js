const MACRO_NAV_CONFIG_0603 = [
  {
    title: '执行摘要',
    links: [
      { id: 'm_sec1', label: '核心结论' }
    ]
  },
  {
    title: '关键经济数据',
    links: [
      { id: 'm_sec2', label: '增长与通胀' },
      { id: 'm_sec3', label: '三驾马车' },
      { id: 'm_sec4', label: '金融与货币' },
      { id: 'm_sec5', label: '企业利润' }
    ]
  },
  {
    title: '核心研报观点',
    links: [
      { id: 'm_sec6', label: 'PMI与通胀' },
      { id: 'm_sec7', label: 'AI出口周期' },
      { id: 'm_sec8', label: '全球货币再定价' },
      { id: 'm_sec9', label: '中美关系' },
      { id: 'm_sec10', label: '再通胀趋势' },
      { id: 'm_sec11', label: '城市更新规划' },
      { id: 'm_sec12', label: 'AI与分配改革' }
    ]
  },
  {
    title: '数据交叉验证',
    links: [
      { id: 'm_sec13', label: '数据支撑' },
      { id: 'm_sec14', label: '研报分歧' },
      { id: 'm_sec15', label: '预期差分析' }
    ]
  },
  {
    title: '周期定位',
    links: [
      { id: 'm_sec16', label: '经济周期' },
      { id: 'm_sec17', label: '政策周期' },
      { id: 'm_sec18', label: '二阶博弈' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec19', label: '大类资产排序' },
      { id: 'm_sec20', label: '汇率展望' }
    ]
  },
  {
    title: '风险与行动',
    links: [
      { id: 'm_sec21', label: '尾部风险' },
      { id: 'm_sec22', label: '买方行动清单' }
    ]
  }
];

function renderMacroNav_0603() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0603.map(cat => `
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
