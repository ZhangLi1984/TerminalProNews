// ==========================================
// 宏观研究导航配置 - 2026-05-12
// ==========================================

const MACRO_NAV_CONFIG_0512 = [
  { title: '核心判断', links: [
    { id: 'm_sec1', label: '经济增长' },
    { id: 'm_sec2', label: '通胀预期' },
    { id: 'm_sec3', label: '货币与信用' }
  ]},
  { title: '研报观点', links: [
    { id: 'm_sec4', label: '地缘与大宗商品' },
    { id: 'm_sec5', label: '出口与产业政策' },
    { id: 'm_sec6', label: '海外宏观与汇率' }
  ]},
  { title: '交叉验证', links: [
    { id: 'm_sec7', label: '一致性判断' },
    { id: 'm_sec8', label: '预期分歧点' },
    { id: 'm_sec9', label: '四维框架定位' }
  ]},
  { title: '投资策略', links: [
    { id: 'm_sec10', label: '大类资产配置' },
    { id: 'm_sec11', label: '行业轮动方向' },
    { id: 'm_sec12', label: '事件驱动机会' }
  ]},
  { title: '风险预警', links: [
    { id: 'm_sec13', label: '外部风险' },
    { id: 'm_sec14', label: '内部风险' },
    { id: 'm_sec15', label: '核心证伪指标' }
  ]}
];

function renderMacroNav_0512() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0512.map(group => `
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
