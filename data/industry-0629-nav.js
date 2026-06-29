// ==========================================
// Industry Nav Config: 2026-06-29
// ==========================================

const INDUSTRY_NAV_CONFIG_0629 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI算力基础设施' },
      { id: 'sec2', label: '存储芯片' },
      { id: 'sec3', label: '电子布/CCL' },
      { id: 'sec4', label: '创新药及CXO' },
      { id: 'sec5', label: '液冷数据中心' },
      { id: 'sec6', label: '锂电储能' }
    ]
  },
  {
    title: '跨赛道暗线博弈',
    links: [
      { id: 'sec7', label: 'AI芯片功耗→液冷' },
      { id: 'sec8', label: '激光雷达降本' },
      { id: 'sec9', label: '生猪亏损倒逼去化' },
      { id: 'sec10', label: 'FSD入华催化' },
      { id: 'sec11', label: '碳纤维国产替代' },
      { id: 'sec12', label: '可再生能源考核' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'sec13', label: 'CXO预期差' },
      { id: 'sec14', label: '商业地产' },
      { id: 'sec15', label: '水泥/玻璃' },
      { id: 'sec16', label: '生猪养殖' },
      { id: 'sec17', label: '快递物流' }
    ]
  },
  {
    title: '高确定性景气延续',
    links: [
      { id: 'sec18', label: '煤炭' },
      { id: 'sec19', label: '家电出口' },
      { id: 'sec20', label: '水电' },
      { id: 'sec21', label: '轮胎' },
      { id: 'sec22', label: '轨交运营' }
    ]
  },
  {
    title: '数据监测表',
    links: [
      { id: 'sec23', label: '大宗商品量价' },
      { id: 'sec24', label: '产业链周期估值' }
    ]
  }
];

function renderIndustryNav_0629() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0629.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(l => `<li><a href="#${l.id}" onclick="scrollToSection('${l.id}')" class="block px-3 py-2 text-sm text-slate-700 hover:bg-red-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-red-500">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
