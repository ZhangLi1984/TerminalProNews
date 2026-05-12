// 宏观研究导航模块 - 2026-05-13
const MACRO_NAV_CONFIG_0513 = [
  {
    title: '宏观定调',
    links: [
      { id: 'm_sec1', label: '周期定位：主动补库中期' },
      { id: 'm_sec2', label: '流动性与货币政策' },
      { id: 'm_sec3', label: '地缘格局重塑定价锚' }
    ]
  },
  {
    title: '核心矛盾',
    links: [
      { id: 'm_sec4', label: '科技投资 vs 消费滞后' },
      { id: 'm_sec5', label: '股债利差与安全垫' },
      { id: 'm_sec6', label: '大宗商品定价逻辑切换' }
    ]
  },
  {
    title: '策略配置',
    links: [
      { id: 'm_sec7', label: '攻守兼备仓位框架' },
      { id: 'm_sec8', label: '动态调仓触发条件' },
      { id: 'm_sec9', label: '核心风险矩阵' },
      { id: 'm_sec10', label: '高频跟踪指标清单' }
    ]
  }
];

function renderMacroNav_0513() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0513.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
