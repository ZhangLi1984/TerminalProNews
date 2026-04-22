// 宏观研究导航 - 2026-04-22
const MACRO_NAV_CONFIG_0422 = [
  { title: '经济数据', links: [
    { id: 'm_sec1', label: '关键指标最新值' },
    { id: 'm_sec2', label: '增长与通胀' },
    { id: 'm_sec3', label: '金融与流动性' },
    { id: 'm_sec4', label: '贸易与消费' }
  ] },
  { title: '研报观点', links: [
    { id: 'm_sec5', label: '核心机构观点提炼' }
  ] },
  { title: '交叉验证', links: [
    { id: 'm_sec6', label: '市场共识' },
    { id: 'm_sec7', label: '预期分歧点' },
    { id: 'm_sec8', label: '数据验证结论' }
  ] },
  { title: '资产配置', links: [
    { id: 'm_sec9', label: '大类资产配置' },
    { id: 'm_sec10', label: 'A股行业矩阵' }
  ] },
  { title: '地缘博弈', links: [
    { id: 'm_sec11', label: '美伊局势与能源' },
    { id: 'm_sec12', label: '中美谈判前瞻' }
  ] },
  { title: '风险策略', links: [
    { id: 'm_sec13', label: '预期差分析' },
    { id: 'm_sec14', label: '证伪指标' },
    { id: 'm_sec15', label: '一周操作策略' }
  ] },
  { title: '数据速查', links: [{ id: 'm_sec16', label: '指数/利率速查表' }] }
];

function renderMacroNav_0422() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0422.map(group => `
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
