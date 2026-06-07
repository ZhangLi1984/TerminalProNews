// ==========================================
// 行业研究导航 - 2026-06-07
// ==========================================

const INDUSTRY_NAV_CONFIG_0607 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施' },
      { id: 'i_sec2', label: '半导体国产替代' },
      { id: 'i_sec3', label: '氟化工/制冷剂' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec4', label: '地缘冲突→化工替代' },
      { id: 'i_sec5', label: 'Token经济→800VDC' },
      { id: 'i_sec6', label: 'AI算力→光纤需求' },
      { id: 'i_sec7', label: 'Vera Rubin→CCL升级' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec8', label: '保险板块' },
      { id: 'i_sec9', label: '风电行业' },
      { id: 'i_sec10', label: '人形机器人' },
      { id: 'i_sec11', label: '房地产' }
    ]
  },
  {
    title: '高确定性景气',
    links: [
      { id: 'i_sec12', label: '六大高景气方向' }
    ]
  },
  {
    title: '数据监测表',
    links: [
      { id: 'i_sec13', label: '大宗商品量价监测' },
      { id: 'i_sec14', label: '产业链估值监测' }
    ]
  },
  {
    title: '风险预警',
    links: [
      { id: 'i_sec15', label: '预期分歧点' }
    ]
  }
];

function renderIndustryNav_0607() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0607.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-500"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
