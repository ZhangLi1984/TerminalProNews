// ==========================================
// 行业研究模块导航 - 2026-04-13
// ==========================================

const INDUSTRY_NAV_CONFIG_0413 = [
  {
    title: '核心总览',
    links: [
      { id: 'i_sec1', label: '宏观叙事主轴' },
      { id: 'i_sec2', label: '行业景气度排序' }
    ]
  },
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec3', label: '储能/锂电' },
      { id: 'i_sec4', label: 'AI光互联/算力' },
      { id: 'i_sec5', label: '半导体（结构性）' },
      { id: 'i_sec6', label: '煤炭/煤化工' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec7', label: 'CXO/医药' },
      { id: 'i_sec8', label: '光伏' }
    ]
  },
  {
    title: '高确定性底仓',
    links: [
      { id: 'i_sec9', label: '证券' },
      { id: 'i_sec10', label: '海风/电车出海' }
    ]
  },
  {
    title: '暗线与二阶博弈',
    links: [
      { id: 'i_sec11', label: '煤化工重估' },
      { id: 'i_sec12', label: '光芯片国产替代' },
      { id: 'i_sec13', label: '固态电池材料链' }
    ]
  },
  {
    title: '数据监测表',
    links: [
      { id: 'i_sec14', label: '大宗商品量价监测' },
      { id: 'i_sec15', label: '产业链周期估值监测' }
    ]
  },
  {
    title: 'CIO 仓位与策略',
    links: [
      { id: 'i_sec16', label: '建议仓位配置' },
      { id: 'i_sec17', label: '加减仓信号矩阵' },
      { id: 'i_sec18', label: '下周操作计划' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'i_sec19', label: '灰犀牛与黑天鹅' },
      { id: 'i_sec20', label: '关键证伪指标' }
    ]
  }
];

function renderIndustryNav_0413() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0413.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
