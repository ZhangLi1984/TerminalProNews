// ==========================================
// 行业研究导航 - 2026年6月4日（行研总监+CIO深度整合版）
// ==========================================
const INDUSTRY_NAV_CONFIG_0604 = [
  { title: '核心主线', links: [
    { id: 'i_sec1', label: 'AI算力基础设施' },
    { id: 'i_sec2', label: '新型储能' },
    { id: 'i_sec3', label: '半导体设备' },
  ]},
  { title: '周期与化工', links: [
    { id: 'i_sec4', label: '化工涨价链' },
    { id: 'i_sec5', label: '大宗商品' },
  ]},
  { title: '困境反转', links: [
    { id: 'i_sec6', label: '生猪养殖' },
    { id: 'i_sec7', label: '白酒' },
    { id: 'i_sec8', label: '保险' },
  ]},
  { title: '新兴产业', links: [
    { id: 'i_sec9', label: '锂电/AIDC电力' },
    { id: 'i_sec10', label: '创新药' },
  ]},
  { title: '数据监测', links: [
    { id: 'i_sec11', label: '量价监测表' },
    { id: 'i_sec12', label: '周期估值表' },
    { id: 'i_sec13', label: '投资组合方案' },
  ]},
];

function renderIndustryNav_0604() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0604.map(group => `
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
