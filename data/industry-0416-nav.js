// ==========================================
// 行业研究内参导航模块 - 2026-04-16
// （深度整合：全市场行业汇总 + CIO战略投资内参）
// ==========================================

const INDUSTRY_NAV_CONFIG_0416 = [
  {
    title: 'S级赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施' },
      { id: 'i_sec2', label: '储能锂电与新能源' },
      { id: 'i_sec3', label: 'AI Agent与大模型' }
    ]
  },
  {
    title: 'A级赛道',
    links: [
      { id: 'i_sec4', label: '人形机器人' },
      { id: 'i_sec5', label: '有色金属' },
      { id: 'i_sec6', label: '基础化工' },
      { id: 'i_sec7', label: '工程机械' },
      { id: 'i_sec8', label: 'CXO/创新药' },
      { id: 'i_sec9', label: '券商/非银金融' },
      { id: 'i_sec10', label: '制冷剂与MDI' }
    ]
  },
  {
    title: 'B级与暗线',
    links: [
      { id: 'i_sec11', label: 'B级赛道汇总' },
      { id: 'i_sec12', label: '跨赛道暗线博弈' },
      { id: 'i_sec13', label: '预期差与困境反转' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec14', label: '大宗商品量价监测' },
      { id: 'i_sec15', label: '产业链周期估值' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'i_sec16', label: 'CIO实战配置建议' },
      { id: 'i_sec17', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0416() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0416.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
