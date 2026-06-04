const INDUSTRY_NAV_CONFIG_0604 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力基础设施' },
    { id: 'i_sec2', label: '新型储能' },
    { id: 'i_sec3', label: '半导体设备' },
    { id: 'i_sec4', label: '化工涨价链' }
  ]},
  { title: '周期反转', links: [
    { id: 'i_sec5', label: '生猪养殖' },
    { id: 'i_sec6', label: '白酒' },
    { id: 'i_sec7', label: '保险' }
  ]},
  { title: '新兴成长', links: [
    { id: 'i_sec8', label: 'AI智能汽车' },
    { id: 'i_sec9', label: '商业航天' },
    { id: 'i_sec10', label: '人形机器人' }
  ]},
  { title: '数据监测', links: [
    { id: 'i_sec11', label: '量价监测表' },
    { id: 'i_sec12', label: '周期估值表' },
    { id: 'i_sec13', label: '投资组合方案' }
  ]}
];

function renderIndustryNav_0604() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0604.map(cat => `
    <div class="mb-5">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${cat.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${cat.links.map(l => `<button class="nav-btn text-sm px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all" data-section="${l.id}" onclick="updateActiveNav('${l.id}')">${l.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
  updateActiveNav('i_sec1');
}
