// ==========================================
// 集思录导航配置 - 2026-05-08
// ==========================================

const JISILU_NAV_CONFIG_0508 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '🔥 闻泰转债/安世危机' },
      { id: 'j_sec2', label: '🌑 低风险至暗时刻' },
      { id: 'j_sec3', label: '💔 科技股踏空焦虑' },
      { id: 'j_sec4', label: '⚙️ 转债下修/强赎博弈' },
      { id: 'j_sec5', label: '🏠 法拍房投资陷阱' },
      { id: 'j_sec6', label: '🧘 全职投资心理战' },
      { id: 'j_sec7', label: '🏦 银行股险资加仓' },
      { id: 'j_sec8', label: '📊 网格/量化实盘' },
      { id: 'j_sec9', label: '💎 价值投资十年实验' },
      { id: 'j_sec10', label: '🍜 餐饮/经济微观' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_method1', label: '策略一：可转债下修博弈' },
      { id: 'j_method2', label: '策略二：中性对冲套利' },
      { id: 'j_method3', label: '策略三：网格交易' },
      { id: 'j_method4', label: '策略四：双低轮动' },
      { id: 'j_method5', label: '策略五：价值投资框架' },
      { id: 'j_method6', label: '策略六：期货贴水套利' }
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
      { id: 'j_risk1', label: '⚠️ 闻泰退市/违约' },
      { id: 'j_risk2', label: '⚠️ 转债强赎' },
      { id: 'j_risk3', label: '⚠️ 法拍房陷阱' },
      { id: 'j_risk4', label: '⚠️ 低风险策略失效' },
      { id: 'j_risk5', label: '⚠️ 美伊地缘风险' }
    ]
  }
];

function renderJisiluNav_0508() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0508.map(section => `
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
