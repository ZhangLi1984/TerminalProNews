// truncated=================================
// 行业研究报告导航配置 - 2026-03-06
// 深度融合：行研总监 × CIO 内参
// ==========================================

const INDUSTRY_NAV_CONFIG_0306 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI 算力/光通信' },
      { id: 'sec2', label: '油气开采/油服' },
      { id: 'sec3', label: '人形机器人' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec4', label: '欧洲气涨→化工替代' },
      { id: 'sec5', label: 'AI Agent→Token 消耗' },
      { id: 'sec6', label: '海峡封锁→细分化工' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'sec7', label: '原奶周期底部' },
      { id: 'sec8', label: '生猪养殖去产能' },
      { id: 'sec9', label: '房地产政策底' }
    ]
  },
  {
    title: '高确定性与事件驱动',
    links: [
      { id: 'sec10', label: '黄金/跨境电商' },
      { id: 'sec11', label: '商业航天/量子/核电' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec12', label: '大宗量价监测表' },
      { id: 'sec13', label: '产业链估值监测' }
    ]
  }
];

function renderIndustryNav_0306() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0306.map((group, idx) => `
    <div class="nav-section">
      <div class="nav-section-title">${group.title}</div>
      <ul class="nav-list space-y-1">
        ${group.links.map(link => `
          <li>
            <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                    data-section="${link.id}"
                    onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior: 'smooth', block: 'start'});">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
                <span>${link.label}</span>
              </div>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
