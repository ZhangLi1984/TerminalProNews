// ==========================================
// Macro Nav Config: 2026-07-02
// ==========================================

const MACRO_NAV_CONFIG_0702 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期位置' }
    ]
  },
  {
    title: '货币政策与流动性',
    links: [
      { id: 'm_sec4', label: '政策立场' },
      { id: 'm_sec5', label: '工具预判' },
      { id: 'm_sec6', label: '流动性环境' }
    ]
  },
  {
    title: '财政政策与产业政策',
    links: [
      { id: 'm_sec7', label: '财政力度' },
      { id: 'm_sec8', label: '产业方向' }
    ]
  },
  {
    title: '资产配置建议',
    links: [
      { id: 'm_sec9', label: '核心配置表' }
    ]
  },
  {
    title: '行业轮动与宏观映射',
    links: [
      { id: 'm_sec10', label: 'AI硬件外需链' },
      { id: 'm_sec11', label: '出口新动能链' },
      { id: 'm_sec12', label: '"六张网"新基建' },
      { id: 'm_sec13', label: '上游资源品' },
      { id: 'm_sec14', label: '高股息防御板块' }
    ]
  },
  {
    title: '预期分歧点',
    links: [
      { id: 'm_sec15', label: '七大分歧议题' }
    ]
  },
  {
    title: '宏观风险提示',
    links: [
      { id: 'm_sec16', label: '外部风险' },
      { id: 'm_sec17', label: '内部风险' },
      { id: 'm_sec18', label: '证伪指标' }
    ]
  },
  {
    title: '关键日历与结论',
    links: [
      { id: 'm_sec19', label: '催化节点' },
      { id: 'm_sec20', label: '核心结论' }
    ]
  }
];

function renderMacroNav_0702() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0702.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(l => `<li><a href="#${l.id}" onclick="scrollToSection('${l.id}')" class="block px-3 py-2 text-sm text-slate-700 hover:bg-red-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-red-500">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
