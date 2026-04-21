// ==========================================
// 宏观研究导航 - 2026-04-21
// ==========================================

const MACRO_NAV_CONFIG_0421 = [
  { title: '数据总览', links: [
    { id: 'm_sec1', label: '关键指标最新值' },
    { id: 'm_sec2', label: '核心数据解读' }
  ] },
  { title: '研报观点', links: [
    { id: 'm_sec3', label: '8大机构研报提炼' }
  ] },
  { title: '交叉验证', links: [
    { id: 'm_sec4', label: '市场共识' },
    { id: 'm_sec5', label: '预期分歧点' },
    { id: 'm_sec6', label: '数据验证结论' }
  ] },
  { title: '资产配置', links: [{ id: 'm_sec7', label: '大类资产配置建议' }] },
  { title: '行业配置', links: [{ id: 'm_sec8', label: 'A股行业配置矩阵' }] },
  { title: '风险与策略', links: [
    { id: 'm_sec9', label: '预期差与风险提示' },
    { id: 'm_sec10', label: '证伪指标' },
    { id: 'm_sec11', label: '一周操作策略' }
  ] },
  { title: '数据速查', links: [{ id: 'm_sec12', label: '指数/利率速查表' }] }
];

function renderMacroNav_0421() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('macro','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
