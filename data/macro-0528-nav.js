// ==========================================
// 宏观研究模块 - 导航配置 (2026-05-28)
// ==========================================

const MACRO_NAV_CONFIG_0528 = [
  {
    title: '宏观总览',
    links: [
      { id: 'm_sec1', label: '核心指标速览' },
      { id: 'm_sec2', label: '数据特征：K型分化' }
    ]
  },
  {
    title: '核心观点',
    links: [
      { id: 'm_sec3', label: '十五五开局超预期' },
      { id: 'm_sec4', label: '美伊冲突与二次通胀' },
      { id: 'm_sec5', label: '财政结构性转向' },
      { id: 'm_sec6', label: 'AI产业与安全资产' },
      { id: 'm_sec7', label: '信用周期与债市' }
    ]
  },
  {
    title: '预期差分析',
    links: [
      { id: 'm_sec8', label: '关键预期差识别' },
      { id: 'm_sec9', label: '核心矛盾点' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'm_sec10', label: '资产配置方向' },
      { id: 'm_sec11', label: '行业布局建议' },
      { id: 'm_sec12', label: '风险提示与证伪指标' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec13', label: '通胀与增长数据' },
      { id: 'm_sec14', label: '利率与金融数据' },
      { id: 'm_sec15', label: '财政与外汇数据' }
    ]
  },
  {
    title: '重点研报',
    links: [
      { id: 'm_sec16', label: '重点关注研报清单' }
    ]
  }
];

function renderMacroNav_0528() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
