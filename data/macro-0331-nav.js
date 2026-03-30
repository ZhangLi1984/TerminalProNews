// ==========================================
// 宏观研究导航配置 - 2026-03-31
// ==========================================

const MACRO_NAV_CONFIG_0331 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '全球宏观主线' },
      { id: 'm_sec2', label: '国内政策展望' }
    ]
  },
  {
    title: '货币政策',
    links: [
      { id: 'm_sec3', label: '美联储政策路径' },
      { id: 'm_sec4', label: '中国货币政策' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec5', label: '中国经济数据' },
      { id: 'm_sec6', label: '海外经济数据' }
    ]
  },
  {
    title: '大类资产',
    links: [
      { id: 'm_sec7', label: '资产配置建议' }
    ]
  }
];

function renderMacroNav_0331() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
