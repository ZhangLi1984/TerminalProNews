// ==========================================
// 行业研究内参 - 导航配置 2026-05-26
// ==========================================
const INDUSTRY_NAV_CONFIG_0526 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力全产业链' },
      { id: 'i_sec2', label: '半导体（设备/设计/存储）' },
      { id: 'i_sec3', label: 'AIDC供电链（SOFC/燃气轮机/SST）' },
      { id: 'i_sec4', label: '商业航天/卫星互联网' }
    ]
  },
  {
    title: '周期与反转',
    links: [
      { id: 'i_sec5', label: '锂电产业链（6F涨价）' },
      { id: 'i_sec6', label: '生猪养殖（左侧布局）' },
      { id: 'i_sec7', label: '煤炭（安监升级）' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec8', label: '人形机器人' },
      { id: 'i_sec9', label: '传媒游戏/AI应用' },
      { id: 'i_sec10', label: '化工新材料' }
    ]
  },
  {
    title: '监测与策略',
    links: [
      { id: 'i_sec11', label: '大宗商品量价监测表' },
      { id: 'i_sec12', label: '产业链估值监测表' },
      { id: 'i_sec13', label: '配置建议与风险提示' }
    ]
  }
];

function renderIndustryNav_0526() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
