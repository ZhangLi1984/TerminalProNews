// 集思录导航配置 - 2026-05-07
const JISILU_NAV_CONFIG_0507 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '🔥 闻泰转债ST危机' },
      { id: 'j_sec2', label: '📊 持有封基方法论' },
      { id: 'j_sec3', label: '💥 科创50期权博弈' },
      { id: 'j_sec4', label: '💔 垃圾债踩雷反思' },
      { id: 'j_sec5', label: '⚙️ 龙大转债下修' },
      { id: 'j_sec6', label: '💎 存储芯片重仓' },
      { id: 'j_sec7', label: '📋 转债事件驱动' },
      { id: 'j_sec8', label: '🌐 AI泡沫讨论' },
      { id: 'j_sec9', label: '🇺🇸 美股展望' },
      { id: 'j_sec10', label: '📈 期指贴水策略' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_method1', label: '策略一：可转债浮动阈值轮动' },
      { id: 'j_method2', label: '策略二："四低打地鼠"垃圾债' },
      { id: 'j_method3', label: '策略三：期权移仓救援法' },
      { id: 'j_method4', label: '策略四：期指贴水增强' },
      { id: 'j_method5', label: '策略五："天然不对称"投资法' }
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
      { id: 'j_risk1', label: '⚠️ 问题债信用违约' },
      { id: 'j_risk2', label: '⚠️ 科创50极端波动' },
      { id: 'j_risk3', label: '⚠️ 可转债估值偏高' },
      { id: 'j_risk4', label: '⚠️ 地缘政治与制裁' },
      { id: 'j_risk5', label: '⚠️ 年报季报暴雷' }
    ]
  }
];

function renderJisiluNav_0507() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0507.map(section => `
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
