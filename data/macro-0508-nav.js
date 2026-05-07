// ==========================================
// 宏观研究导航配置 - 2026-05-08
// ==========================================

const MACRO_NAV_CONFIG_0508 = [
  { title: '宏观概览', links: [
    { id: 'sec1', label: '宏观经济底色' },
    { id: 'sec2', label: '周期定位矩阵' }
  ]},
  { title: '关键变量', links: [
    { id: 'sec3', label: '地缘政治与油价' },
    { id: 'sec4', label: '美联储政策' },
    { id: 'sec5', label: 'A股市场资金面' }
  ]},
  { title: '行业与策略', links: [
    { id: 'sec6', label: '盈利周期分析' },
    { id: 'sec7', label: '跨赛道暗线传导' },
    { id: 'sec8', label: '配置策略与仓位' }
  ]},
  { title: '跟踪与风险', links: [
    { id: 'sec9', label: '下周关键指标' },
    { id: 'sec10', label: '尾部风险矩阵' }
  ]}
];

function renderMacroNav_0508() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0508.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
