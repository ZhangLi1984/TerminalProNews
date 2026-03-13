// 集思录导航配置 - 2026-03-13
const JISILU_NAV_CONFIG_0313 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '🔥 TOP 10 详细分析' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec2', label: '💡 策略精粹' }
    ]
  },
  {
    title: '标的与情绪',
    links: [
      { id: 'j_sec3', label: '热议标的清单' },
      { id: 'j_sec4', label: '市场情绪观察' }
    ]
  },
  {
    title: '风险与建议',
    links: [
      { id: 'j_sec5', label: '⚠️ 风险提示' },
      { id: 'j_sec6', label: '今日操作建议' }
    ]
  }
];

function renderJisiluNav_0313() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0313.map(section => `
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