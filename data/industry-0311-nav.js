// ==========================================
// 行业研究导航 - 2026 年 3 月 11 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0311 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力与半导体' },
      { id: 'i_sec2', label: '铝产业链' },
      { id: 'i_sec3', label: '生物燃料与油脂化工' }
    ]
  },
  {
    title: 'CIO 深度洞察',
    links: [
      { id: 'i_sec4', label: '半导体涨价周期' },
      { id: 'i_sec5', label: '医药生物/创新药' },
      { id: 'i_sec6', label: '低空经济' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec7', label: '油运龙头持续获益' },
      { id: 'i_sec8', label: '绿电运营商重估' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec9', label: '生猪养殖周期反转' },
      { id: 'i_sec10', label: '券商估值修复' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec11', label: '大宗商品监测表' },
      { id: 'i_sec12', label: '产业链周期估值表' }
    ]
  }
];

function renderIndustryNav_0311() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-blue-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-blue-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
