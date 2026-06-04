// ==========================================
// 宏观研究导航 - 2026年6月4日
// ==========================================
const MACRO_NAV_CONFIG_0604 = [
  { title: '执行摘要', links: [
    { id: 'm_sec1', label: '核心结论' },
  ]},
  { title: '经济数据', links: [
    { id: 'm_sec2', label: '核心指标概览' },
    { id: 'm_sec3', label: '趋势解读' },
  ]},
  { title: '核心观点', links: [
    { id: 'm_sec4', label: '外需再通胀+内需弱修复' },
    { id: 'm_sec5', label: 'AI中美双轮驱动' },
    { id: 'm_sec6', label: '美伊谈判与全球定价' },
    { id: 'm_sec7', label: '结构性精准发力' },
    { id: 'm_sec8', label: '美联储滞胀两难' },
  ]},
  { title: '资产配置', links: [
    { id: 'm_sec9', label: '配置矩阵' },
    { id: 'm_sec10', label: '股票/债券/商品策略' },
  ]},
  { title: '行业线索', links: [
    { id: 'm_sec11', label: 'AI产业链' },
    { id: 'm_sec12', label: '出口链/资源品' },
    { id: 'm_sec13', label: '城市更新/房地产' },
  ]},
  { title: '风险提示', links: [
    { id: 'm_sec14', label: '内外风险' },
    { id: 'm_sec15', label: '证伪指标' },
  ]},
];

function renderMacroNav_0604() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0604.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
