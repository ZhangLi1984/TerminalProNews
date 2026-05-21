// ==========================================
// 行业研究导航配置 - 2026-05-22
// ==========================================

const INDUSTRY_NAV_CONFIG_0522 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力/半导体/存储' },
      { id: 'i_sec2', label: '锂电池/储能' },
      { id: 'i_sec3', label: '创新药/CXO' },
      { id: 'i_sec4', label: 'AI传媒/应用' },
      { id: 'i_sec5', label: '船舶制造' }
    ]
  },
  {
    title: '暗线与二阶博弈',
    links: [
      { id: 'i_sec6', label: 'SiC功率器件' },
      { id: 'i_sec7', label: '能源链式重估' },
      { id: 'i_sec8', label: 'SAF/生物柴油' },
      { id: 'i_sec9', label: '光纤涨价' },
      { id: 'i_sec10', label: '肉牛周期' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec11', label: '白酒' },
      { id: 'i_sec12', label: '券商' },
      { id: 'i_sec13', label: '生猪养殖' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec14', label: '玻纤/新材料' },
      { id: 'i_sec15', label: '工程机械出海' }
    ]
  },
  {
    title: '监测与组合',
    links: [
      { id: 'i_sec16', label: '大宗商品监测表' },
      { id: 'i_sec17', label: '产业链估值表' },
      { id: 'i_sec18', label: 'CIO组合配置方案' },
      { id: 'i_sec19', label: '风险预警与对冲' }
    ]
  }
];

function renderIndustryNav_0522() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
