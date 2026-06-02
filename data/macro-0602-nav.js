// ==========================================
// 宏观研究 - 导航配置 (2026-06-02)
// ==========================================

const MACRO_NAV_CONFIG_0602 = [
  {
    title: '宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期定位' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '流动性环境' },
      { id: 'm_sec6', label: '财政政策' },
      { id: 'm_sec7', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '大类资产超配矩阵' },
      { id: 'm_sec9', label: '权益哑铃策略' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec10', label: '受益行业映射' },
      { id: 'm_sec11', label: '二阶博弈预期差' }
    ]
  },
  {
    title: '交叉验证',
    links: [
      { id: 'm_sec12', label: '机构共识' },
      { id: 'm_sec13', label: '研报分歧点' }
    ]
  },
  {
    title: '风险与日历',
    links: [
      { id: 'm_sec14', label: '风险提示' },
      { id: 'm_sec15', label: '监测日历' },
      { id: 'm_sec16', label: '买方策略框架' }
    ]
  }
];

function renderMacroNav_0602() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0602.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
