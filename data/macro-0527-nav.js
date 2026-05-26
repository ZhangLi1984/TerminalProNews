// ==========================================
// 宏观研究导航配置 - 2026年5月27日
// ==========================================
const MACRO_NAV_CONFIG_0527 = [
  {
    title: '核心结论',
    links: [
      { id: 'm_sec1', label: '核心结论' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec2', label: '关键指标速查' },
      { id: 'm_sec3', label: '趋势判断' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec4', label: '经济增长' },
      { id: 'm_sec5', label: '通胀分析' },
      { id: 'm_sec6', label: '货币政策' },
      { id: 'm_sec7', label: '财政政策' },
      { id: 'm_sec8', label: '地缘政治' },
      { id: 'm_sec9', label: '跨市场共振' }
    ]
  },
  {
    title: '预期差与博弈',
    links: [
      { id: 'm_sec10', label: '市场共识 vs 实际' },
      { id: 'm_sec11', label: '二阶思维推演' },
      { id: 'm_sec12', label: '博弈格局' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'm_sec13', label: '大类资产配置' },
      { id: 'm_sec14', label: '超配方向' },
      { id: 'm_sec15', label: '低配/规避方向' },
      { id: 'm_sec16', label: '仓位建议' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec17', label: '外部风险' },
      { id: 'm_sec18', label: '内部风险' },
      { id: 'm_sec19', label: '证伪指标' }
    ]
  },
  {
    title: '重点关注',
    links: [
      { id: 'm_sec20', label: '未来1-2周变量' }
    ]
  }
];

function renderMacroNav_0527() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0527.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
