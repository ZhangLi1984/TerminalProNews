// ==========================================
// 行业研究导航配置 - 2026-06-22
// ==========================================

const INDUSTRY_NAV_CONFIG_0622 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI算力基础设施链' },
      { id: 'sec2', label: '锂电材料盈利修复' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec3', label: 'AI用电→电力资产重估' },
      { id: 'sec4', label: '半导体3D NAND→钼靶材' },
      { id: 'sec5', label: '钙钛矿→ITO靶材耗铟' },
      { id: 'sec6', label: '美伊停战→化工成本坍塌' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'sec7', label: '煤炭（焦煤/动力煤）' },
      { id: 'sec8', label: '创新药/CXO' },
      { id: 'sec9', label: '工程机械电动化' }
    ]
  },
  {
    title: '高确定性与景气延续',
    links: [
      { id: 'sec10', label: '跨境电商出海' },
      { id: 'sec11', label: '黄金珠宝' },
      { id: 'sec12', label: '大储系统集成' }
    ]
  },
  {
    title: '数据监测表',
    links: [
      { id: 'sec13', label: '大宗商品量价监测' },
      { id: 'sec14', label: '产业链周期与估值' }
    ]
  }
];

function renderIndustryNav_0622() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0622.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'industry')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 group-hover:bg-red-500 transition-colors"></span>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
