// ==========================================
// 行业研究导航配置 - 2026 年 3 月 18 日
// 融合行研总监与 CIO 深度洞察
// ==========================================

const INDUSTRY_NAV_CONFIG_0318 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力基础设施' },
      { id: 'i_sec2', label: '半导体产业链' },
      { id: 'i_sec3', label: '维生素/原料药' }
    ]
  },
  {
    title: '跨赛道暗线博弈',
    links: [
      { id: 'i_sec4', label: '地缘冲突→油运+煤化工' },
      { id: 'i_sec5', label: 'AI 算力爆发→存储+端侧' },
      { id: 'i_sec6', label: '美国关税取消→锂电出口' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec7', label: '人形机器人' },
      { id: 'i_sec8', label: '生猪养殖' },
      { id: 'i_sec9', label: '白酒板块' }
    ]
  },
  {
    title: '高确定性景气延续',
    links: [
      { id: 'i_sec10', label: '储能/锂电' },
      { id: 'i_sec11', label: '电力设备' },
      { id: 'i_sec12', label: '创新药/医疗器械' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec13', label: '大宗商品量价监测' },
      { id: 'i_sec14', label: '产业链周期估值' }
    ]
  },
  {
    title: 'CIO 配置建议',
    links: [
      { id: 'i_sec15', label: '核心配置' },
      { id: 'i_sec16', label: '战术配置' },
      { id: 'i_sec17', label: '风险警示' }
    ]
  }
];

function renderIndustryNav_0318() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0318.forEach((section, index) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">`;

    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('industry', '${link.id}'); return false;"
        class="nav-btn w-full flex items-center px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors"></div>
        ${link.label}
      </button>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}