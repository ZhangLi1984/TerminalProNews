// ==========================================
// 宏观研究导航模块 - 2026-05-14
// ==========================================

const MACRO_NAV_CONFIG_0514 = [
  { title: '核心判断', links: [
    { id: 'm_sec1', label: '结构性弱复苏+输入性通胀' }
  ]},
  { title: '经济数据', links: [
    { id: 'm_sec2', label: '国内宏观数据亮点' },
    { id: 'm_sec3', label: '海外宏观数据要点' }
  ]},
  { title: '研报观点', links: [
    { id: 'm_sec4', label: '通胀趋势交叉验证' },
    { id: 'm_sec5', label: '美国CPI与非农' },
    { id: 'm_sec6', label: '中东地缘与大宗商品' },
    { id: 'm_sec7', label: '货币政策与利率' },
    { id: 'm_sec8', label: '进出口与外贸' }
  ]},
  { title: '预期差', links: [
    { id: 'm_sec9', label: '预期差与风险提示' }
  ]},
  { title: '买方策略', links: [
    { id: 'm_sec10', label: '大类资产配置' },
    { id: 'm_sec11', label: '行业轮动与操作建议' }
  ]},
  { title: '下周关注', links: [
    { id: 'm_sec12', label: '关键事件日历' }
  ]}
];

function renderMacroNav_0514() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0514.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
