const INDUSTRY_NAV_CONFIG_0615 = [
  { title: '核心赛道', links: [{ id: 'sec1', label: 'AI算力基础设施' }, { id: 'sec2', label: '有色金属' }, { id: 'sec3', label: '商业航天' }] },
  { title: '二阶博弈', links: [{ id: 'sec4', label: '半导体材料革新' }, { id: 'sec5', label: '光伏产能出清' }] },
  { title: '独立板块', links: [{ id: 'sec6', label: '数据监测表' }, { id: 'sec7', label: 'CIO策略建议' }] }
];
function renderIndustryNav_0615() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0615.map(cat => `
    <div class="mb-4">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</h3>
      <ul class="space-y-0.5">
        ${cat.links.map(link => `<li><a href="#${link.id}" class="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
