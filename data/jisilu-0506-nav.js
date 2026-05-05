// 集思录导航配置 - 2026-05-06
const JISILU_NAV_CONFIG_0506 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '🔥 *ST闻泰复牌' },
      { id: 'j_sec2', label: '💥 转债四傻博弈' },
      { id: 'j_sec3', label: '📊 垃圾债历史复盘' },
      { id: 'j_sec4', label: '🏦 银行股拐点' },
      { id: 'j_sec5', label: '🍶 白酒财务洗澡' },
      { id: 'j_sec6', label: '📈 美股新高28000' },
      { id: 'j_sec7', label: '⚙️ 下修套利策略' },
      { id: 'j_sec8', label: '💰 微盘股轮动' },
      { id: 'j_sec9', label: '📚 价值投资之辩' },
      { id: 'j_sec10', label: '🧘 投资人生哲学' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_method1', label: '策略一：垃圾债抄底法' },
      { id: 'j_method2', label: '策略二：下修套利法' },
      { id: 'j_method3', label: '策略三：银行股拐点' },
      { id: 'j_method4', label: '策略四：微盘股轮动' },
      { id: 'j_method5', label: '策略五：白酒轮动网格' }
    ]
  },
  {
    title: '标的与情绪',
    links: [
      { id: 'j_targets', label: '热议标的清单' },
      { id: 'j_sentiment', label: '市场情绪观察' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'j_risk1', label: '⚠️ 闻泰退市风险' },
      { id: 'j_risk2', label: '⚠️ 白酒连锁风险' },
      { id: 'j_risk3', label: '⚠️ 银行拨备风险' },
      { id: 'j_risk4', label: '⚠️ 美股回调风险' },
      { id: 'j_risk5', label: '⚠️ 历史类比陷阱' }
    ]
  }
];

function renderJisiluNav_0506() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0506.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-between"
            data-section="${link.id}"
            onclick="scrollToSection('jisilu', '${link.id}')"
          >
            <span>${link.label}</span>
            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
