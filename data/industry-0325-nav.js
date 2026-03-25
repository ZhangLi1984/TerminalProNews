// ==========================================
// 行业研究 - 导航配置 (2026-03-25)
// ==========================================

const INDUSTRY_NAV_CONFIG_0325 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: '人形机器人/具身智能' },
      { id: 'i_sec2', label: 'AI算力基础设施' },
      { id: 'i_sec3', label: '新能源/储能' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec4', label: '煤化工/煤代油替代链' },
      { id: 'i_sec5', label: '化工品涨价传导链' },
      { id: 'i_sec6', label: '电解铝供给收缩链' },
      { id: 'i_sec7', label: '油运战略价值重估' },
      { id: 'i_sec8', label: '风电/光伏出海替代' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec9', label: '生猪养殖' },
      { id: 'i_sec10', label: '医疗器械' }
    ]
  },
  {
    title: '高确定性资产',
    links: [
      { id: 'i_sec11', label: '银行' },
      { id: 'i_sec12', label: '黄金/贵金属' },
      { id: 'i_sec13', label: '煤炭' }
    ]
  }
];

function renderIndustryNav_0325() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';

  INDUSTRY_NAV_CONFIG_0325.forEach(section => {
    html += `<div class="mb-6">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${section.title}</h4>
      <div class="space-y-1">`;

    section.links.forEach(link => {
      html += `<button
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        data-section="${link.id}"
        onclick="scrollToSection('industry', '${link.id}')"
      >
        ${link.label}
      </button>`;
    });

    html += `</div>
    </div>`;
  });

  container.innerHTML = html;
}