// truncated=================================
// 文档二：行业汇总 - 导航配置 (3 月 4 日版)
// ==========================================

const INDUSTRY_NAV_CONFIG_0304 = [
  { title: '确信推荐', links: [
    { id: 'i_sec1', label: '高胜率赛道' },
    { id: 'i_sec_base', label: '景气延续' }
  ]},
  { title: '深度挖掘', links: [
    { id: 'i_sec2', label: '跨赛道暗线' },
    { id: 'i_sec3', label: '困境反转' }
  ]},
  { title: '数据追踪', links: [
    { id: 'i_sec_table1', label: '大宗量价' },
    { id: 'i_sec_table2', label: '估值监测' },
    { id: 'i_sec9', label: '配置总结' }
  ]}
];

/**
 * 渲染侧边导航 (3 月 4 日)
 */
function renderIndustryNav_0304() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0304.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToElement('${link.id}'); updateActiveNav('${link.id}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
