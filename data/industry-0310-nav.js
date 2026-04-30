// truncated=================================
// 行业研究报告导航模块 - 2026 年 3 月 10 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0310 = [
  {
    title: '核心主题',
    links: [
      { id: 'i_sec1', label: '地缘冲突与新质生产力' }
    ]
  },
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec2', label: '半导体/存储芯片' },
      { id: 'i_sec3', label: 'AI 算力基础设施' },
      { id: 'i_sec4', label: '油气/油运' },
      { id: 'i_sec5', label: '人形机器人' }
    ]
  },
  {
    title: 'CIO 深度洞察',
    links: [
      { id: 'i_sec6', label: 'AI 算力产业链' },
      { id: 'i_sec7', label: '机器人/具身智能' },
      { id: 'i_sec8', label: '半导体周期' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec9', label: '中东冲突→化工格局' },
      { id: 'i_sec10', label: 'AI 算力→电力需求' },
      { id: 'i_sec11', label: '存储缺货→面板涨价' },
      { id: 'i_sec12', label: '猪价→周期反转' }
    ]
  },
  {
    title: '预期差挖掘',
    links: [
      { id: 'i_sec13', label: 'CXO 临床 CRO' },
      { id: 'i_sec14', label: '铝/供给侧约束' },
      { id: 'i_sec15', label: '生猪养殖' },
      { id: 'i_sec16', label: '煤炭估值修复' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec17', label: '电网设备' },
      { id: 'i_sec18', label: '储能' },
      { id: 'i_sec19', label: '创新药' },
      { id: 'i_sec20', label: '核电' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec21', label: '大宗商品量价表' },
      { id: 'i_sec22', label: '产业链估值表' }
    ]
  },
  {
    title: '策略总结',
    links: [
      { id: 'i_sec23', label: '仓位配置建议' }
    ]
  }
];

function renderIndustryNav_0310() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0310.map((category, idx) => `
    <div class="nav-category">
      <div class="nav-category-title">${category.title}</div>
      <ul class="nav-list">
        ${category.links.map(link => `
          <li class="nav-item">
            <a href="#${link.id}" class="nav-btn" data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3"></div>
              <span class="text-sm font-bold">${link.label}</span>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
