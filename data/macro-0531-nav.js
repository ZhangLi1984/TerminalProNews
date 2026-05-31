// ==========================================
// 宏观研究模块 - 导航配置 (2026-05-31)
// ==========================================

const MACRO_NAV_CONFIG_0531 = [
  { title: '宏观指标', links: [
    { id: 'm_sec1', label: '核心指标速览' },
    { id: 'm_sec2', label: '经济数据亮点' }
  ]},
  { title: '研报共识', links: [
    { id: 'm_sec3', label: '国内经济 K 型分化' },
    { id: 'm_sec4', label: '海外宏观再通胀' },
    { id: 'm_sec5', label: '地缘政治变量' },
    { id: 'm_sec6', label: 'AI 产业主线' }
  ]},
  { title: '预期差', links: [
    { id: 'm_sec7', label: '四大核心矛盾' }
  ]},
  { title: '资产配置', links: [
    { id: 'm_sec8', label: '大类资产配置' },
    { id: 'm_sec9', label: '行业轮动映射' },
    { id: 'm_sec10', label: '一周操作策略' }
  ]},
  { title: '风险预警', links: [
    { id: 'm_sec11', label: '风险矩阵' },
    { id: 'm_sec12', label: '证伪指标' }
  ]}
];

function renderMacroNav_0531() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0531.map(group => `
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
