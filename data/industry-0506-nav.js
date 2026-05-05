// Industry Nav Module for 2026-05-06
const INDUSTRY_NAV_CONFIG_0506 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力硬件产业链' },
      { id: 'i_sec2', label: '储能锂电与10C超充' },
      { id: 'i_sec3', label: '氟化工/制冷剂' },
      { id: 'i_sec4', label: '船舶制造' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec5', label: '猪周期反转' },
      { id: 'i_sec6', label: '工程机械' },
      { id: 'i_sec7', label: '钢铁板块' },
      { id: 'i_sec8', label: '零售药店出清' }
    ]
  },
  {
    title: '底仓防御配置',
    links: [
      { id: 'i_sec9', label: '保险行业' },
      { id: 'i_sec10', label: '银行行业' },
      { id: 'i_sec11', label: '电网设备出海' },
      { id: 'i_sec12', label: '核电' }
    ]
  },
  {
    title: '二阶暗线',
    links: [
      { id: 'i_sec13', label: '暗线一：AI电力需求传导' },
      { id: 'i_sec14', label: '暗线二：氦气/钼/铝供给冲击' },
      { id: 'i_sec15', label: '暗线三：中国制造业出口替代' },
      { id: 'i_sec16', label: '暗线四：10C超充LiFSI链' }
    ]
  },
  {
    title: '数据监测与策略',
    links: [
      { id: 'i_sec17', label: '大宗商品量价监测表' },
      { id: 'i_sec18', label: '产业链周期与估值表' },
      { id: 'i_sec19', label: 'CIO仓位矩阵' },
      { id: 'i_sec20', label: '5月跟踪事件与风险提示' }
    ]
  }
];

function renderIndustryNav_0506() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0506.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('industry','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
