// ==========================================
// 期货市场导航模块 - 2026-04-16
// ==========================================

const FUTURES_NAV_CONFIG_0416 = [
  {
    title: '行情总览',
    links: [
      { id: 'f_sec1', label: '主要品种行情表' },
      { id: 'f_sec2', label: '板块强弱分析' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工 (原油/燃油/化工)' },
      { id: 'f_sec4', label: '贵金属 (黄金/白银)' },
      { id: 'f_sec5', label: '有色金属 (铜/铝/锌)' },
      { id: 'f_sec6', label: '黑色系 (螺纹/铁矿/焦炭)' },
      { id: 'f_sec7', label: '农产品 (豆粕/棕榈油/生猪)' }
    ]
  },
  {
    title: '市场热点',
    links: [
      { id: 'f_sec8', label: '地缘冲突与油价博弈' },
      { id: 'f_sec9', label: '美联储政策预期' },
      { id: 'f_sec10', label: '国内宏观数据解读' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec11', label: '做多/做空机会' },
      { id: 'f_sec12', label: '套利策略' },
      { id: 'f_sec13', label: '风险提示' }
    ]
  },
  {
    title: '本周关注',
    links: [
      { id: 'f_sec14', label: '重要事件日历' }
    ]
  }
];

function renderFuturesNav_0416() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0416.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
