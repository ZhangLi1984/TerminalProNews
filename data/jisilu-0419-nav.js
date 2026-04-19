// ==========================================
// 集思录导航模块 - 2026年4月19日
// ==========================================

const JISILU_NAV_CONFIG_0419 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '转债历史经典事件' },
      { id: 'j_sec2', label: '闻泰转债抄底争议' },
      { id: 'j_sec3', label: '北交所打新策略' },
      { id: 'j_sec4', label: '牛熊分界线' },
      { id: 'j_sec5', label: '标普500 vs A股' }
    ]
  },
  {
    title: '市场观察',
    links: [
      { id: 'j_sec6', label: 'ST股投资策略' },
      { id: 'j_sec7', label: '周期股与猪周期' },
      { id: 'j_sec8', label: '东方证券收购' },
      { id: 'j_sec9', label: '投资人生困惑' },
      { id: 'j_sec10', label: '实盘与资产配置' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'j_sec_strategy', label: '投资方法论精粹' },
      { id: 'j_sec_tickers', label: '热议标的清单' },
      { id: 'j_sec_sentiment', label: '市场情绪观察' }
    ]
  },
  {
    title: '风险控制',
    links: [
      { id: 'j_sec_risks', label: '风险提示' },
      { id: 'j_sec_next', label: '下周关注' }
    ]
  }
];

function renderJisiluNav_0419() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0419.map(category => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h4>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900 truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
