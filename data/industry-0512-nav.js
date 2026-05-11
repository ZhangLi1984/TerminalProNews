// 行业研究导航模块 - 2026-05-12
const INDUSTRY_NAV_CONFIG_0512 = [
  {
    title: '共识高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力全产业链' },
      { id: 'i_sec2', label: '锂电/储能涨价周期' },
      { id: 'i_sec3', label: '非银金融（券商）' },
      { id: 'i_sec4', label: '医药CXO/创新药' }
    ]
  },
  {
    title: '二阶博弈暗线',
    links: [
      { id: 'i_sec5', label: 'CPU通胀→MLCC爆发' },
      { id: 'i_sec6', label: '霍尔木兹→煤炭替代' },
      { id: 'i_sec7', label: '碳酸锂→钠电替代' },
      { id: 'i_sec8', label: '汇兑扭曲→汽车反转' },
      { id: 'i_sec9', label: '商业航天→太空光伏' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'i_sec10', label: '光伏底部机会' },
      { id: 'i_sec11', label: '生猪养殖去产能' },
      { id: 'i_sec12', label: '白酒筑底确认' },
      { id: 'i_sec13', label: '游戏估值修复' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec14', label: '电网设备三重驱动' },
      { id: 'i_sec15', label: '风电从周期到成长' },
      { id: 'i_sec16', label: '保险负债端反转' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec17', label: '大宗商品量价表' },
      { id: 'i_sec18', label: '产业链周期估值表' },
      { id: 'i_sec19', label: '资产配置建议' }
    ]
  }
];

function renderIndustryNav_0512() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0512.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
