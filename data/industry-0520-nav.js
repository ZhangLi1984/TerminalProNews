// ==========================================
// 行业研究内参 - 导航配置 - 2026-05-20
// ==========================================

const INDUSTRY_NAV_CONFIG_0520 = [
  {
    title: '战略定位',
    links: [
      { id: 'i_sec1', label: '全局战略定位' },
      { id: 'i_sec2', label: '配置建议与仓位' }
    ]
  },
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec3', label: '半导体/存储' },
      { id: 'i_sec4', label: 'AI算力基础设施' },
      { id: 'i_sec5', label: '非银金融-券商' },
      { id: 'i_sec6', label: '保险' }
    ]
  },
  {
    title: '二阶博弈暗线',
    links: [
      { id: 'i_sec7', label: '煤化工替代' },
      { id: 'i_sec8', label: '电网设备超级周期' },
      { id: 'i_sec9', label: '工程机械涨价' },
      { id: 'i_sec10', label: '化工全球市占率' },
      { id: 'i_sec11', label: '人形机器人量产' },
      { id: 'i_sec12', label: '厄尔尼诺+生猪' }
    ]
  },
  {
    title: '预期差反转',
    links: [
      { id: 'i_sec13', label: '白酒困境反转' },
      { id: 'i_sec14', label: '生猪产能去化' },
      { id: 'i_sec15', label: '光伏设备筑底' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec16', label: '煤炭' },
      { id: 'i_sec17', label: '银行' },
      { id: 'i_sec18', label: '锂电' }
    ]
  },
  {
    title: '监测与风控',
    links: [
      { id: 'i_sec19', label: '大宗商品监测表' },
      { id: 'i_sec20', label: '估值监测表' },
      { id: 'i_sec21', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0520() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0520.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 text-slate-700 hover:bg-slate-100"
            data-section="${link.id}" onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent transition-colors"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
