// ==========================================
// Macro Nav Config: 2026-06-30
// ==========================================

const MACRO_NAV_CONFIG_0630 = [
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
      { id: 'm_sec4', label: '政策 stance' },
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
      { id: 'm_sec9', label: '核心输出表' }
    ]
  },
  {
    title: '行业轮动与宏观映射',
    links: [
      { id: 'm_sec10', label: 'AI基建链' },
      { id: 'm_sec11', label: '高股息红利资产' },
      { id: 'm_sec12', label: '出口链（新质生产力）' },
      { id: 'm_sec13', label: '城市更新链' },
      { id: 'm_sec14', label: '困境反转（消费/地产链）' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec15', label: '外部风险' },
      { id: 'm_sec16', label: '内部风险' },
      { id: 'm_sec17', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0630() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0630.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(l => `<li><a href="#${l.id}" onclick="scrollToSection('${l.id}')" class="block px-3 py-2 text-sm text-slate-700 hover:bg-red-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-red-500">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
