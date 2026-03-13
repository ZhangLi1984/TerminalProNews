// ==========================================
// 宏观研究导航配置 - 2026年3月13日
// ==========================================

const MACRO_NAV_CONFIG_0313 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长与周期定位' },
      { id: 'm_sec2', label: '通胀预期分析' },
      { id: 'm_sec3', label: '美林时钟定位' }
    ]
  },
  {
    title: '货币政策',
    links: [
      { id: 'm_sec4', label: '中美政策分化' },
      { id: 'm_sec5', label: '工具预判与流动性' }
    ]
  },
  {
    title: '财政与产业',
    links: [
      { id: 'm_sec6', label: '财政政策力度' },
      { id: 'm_sec7', label: '十五五产业方向' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '大类资产配置矩阵' },
      { id: 'm_sec9', label: '配置核心逻辑' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec10', label: 'AI产业链' },
      { id: 'm_sec11', label: '新能源/能源转型' },
      { id: 'm_sec12', label: '消费板块' },
      { id: 'm_sec13', label: '高股息资产' },
      { id: 'm_sec14', label: '航运/物流' }
    ]
  },
  {
    title: '风险与策略',
    links: [
      { id: 'm_sec15', label: '宏观风险提示' },
      { id: 'm_sec16', label: '预期分歧点' },
      { id: 'm_sec17', label: '投资策略总结' }
    ]
  }
];

/**
 * 渲染宏观研究导航 - 3月13日
 */
function renderMacroNav_0313() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0313.map(category => `
    <div class="nav-category">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${category.title}</div>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-200 flex items-center"
            data-section="${link.id}"
            onclick="scrollToSection('macro', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  // 设置第一个为激活状态
  const firstBtn = container.querySelector('.nav-btn');
  if (firstBtn) {
    firstBtn.classList.remove('text-slate-700', 'hover:bg-slate-200');
    firstBtn.classList.add('bg-slate-900', 'text-white', 'shadow-md');
    const dot = firstBtn.querySelector('div');
    if (dot) {
      dot.classList.remove('bg-transparent');
      dot.classList.add('bg-red-500');
    }
  }
}