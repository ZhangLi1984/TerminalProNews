// ==========================================
// 行业研究导航配置 - 2026-05-09
// ==========================================

const INDUSTRY_NAV_CONFIG_0509 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力产业链' },
    { id: 'i_sec2', label: '锂电/新型储能' },
    { id: 'i_sec3', label: '风电板块' },
    { id: 'i_sec4', label: '医药创新药及CXO' }
  ]},
  { title: '攻守兼备', links: [
    { id: 'i_sec5', label: '证券/保险' },
    { id: 'i_sec6', label: '煤炭行业' }
  ]},
  { title: '二阶暗线博弈', links: [
    { id: 'i_sec7', label: '油运/化工供给侧出清' },
    { id: 'i_sec8', label: '钠电商业化' },
    { id: 'i_sec9', label: '生猪产能去化' }
  ]},
  { title: '预期差方向', links: [
    { id: 'i_sec10', label: '基础化工困境反转' },
    { id: 'i_sec11', label: '军工新域新质' },
    { id: 'i_sec12', label: '非共识赛道' }
  ]},
  { title: '数据监测', links: [
    { id: 'i_sec13', label: '大宗商品量价表' },
    { id: 'i_sec14', label: '产业链估值监测' }
  ]},
  { title: '操作建议', links: [
    { id: 'i_sec15', label: '仓位配置建议' }
  ]}
];

function renderIndustryNav_0509() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('industry', '${link.id}')"
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
