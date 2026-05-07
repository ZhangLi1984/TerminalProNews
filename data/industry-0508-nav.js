// ==========================================
// 行业研究导航配置 - 2026-05-08
// ==========================================

const INDUSTRY_NAV_CONFIG_0508 = [
  { title: '核心赛道(S级)', links: [
    { id: 'sec1', label: 'AI算力/半导体' },
    { id: 'sec2', label: '先进封装三足共振' },
    { id: 'sec3', label: '锂电储能/缺电链' },
    { id: 'sec4', label: '化工蛋氨酸' }
  ]},
  { title: '重点赛道(A级)', links: [
    { id: 'sec5', label: '券商板块' },
    { id: 'sec6', label: '军工行业' },
    { id: 'sec7', label: '电网设备/电力设备' },
    { id: 'sec8', label: '创新药/CXO' }
  ]},
  { title: '结构性机会(B级)', links: [
    { id: 'sec9', label: '煤炭能源重估' },
    { id: 'sec10', label: '生猪养殖' },
    { id: 'sec11', label: '保险板块' },
    { id: 'sec12', label: '新型烟草' }
  ]},
  { title: '观察/等待(C级)', links: [
    { id: 'sec13', label: '磷矿/磷化工' },
    { id: 'sec14', label: '房地产' },
    { id: 'sec15', label: '建筑材料' },
    { id: 'sec16', label: '旅游/机器人/低空' }
  ]},
  { title: '配置建议', links: [
    { id: 'sec17', label: '综合评分矩阵' },
    { id: 'sec18', label: '风险提示' },
    { id: 'sec19', label: '5月配置策略' }
  ]}
];

function renderIndustryNav_0508() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0508.map(group => `
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
