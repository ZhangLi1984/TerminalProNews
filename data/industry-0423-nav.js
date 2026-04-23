// ==========================================
// 行业研究导航 - 2026-04-23
// ==========================================

const INDUSTRY_NAV_CONFIG_0423 = [
  { title: '高胜率赛道', links: [
    { id: 'i_sec1', label: 'AI算力硬件' },
    { id: 'i_sec2', label: '半导体/先进封装' },
    { id: 'i_sec3', label: 'CW激光器/光芯片' },
    { id: 'i_sec4', label: '创新药/出海' },
    { id: 'i_sec5', label: '锂电/储能' },
    { id: 'i_sec6', label: '券商' },
  ]},
  { title: '二阶暗线', links: [
    { id: 'i_sec7', label: '东南亚能源危机' },
    { id: 'i_sec8', label: '溴素涨价传导链' },
    { id: 'i_sec9', label: 'SST固态变压器' },
    { id: 'i_sec10', label: '存款搬家/金融资产' },
  ]},
  { title: '预期差/困境反转', links: [
    { id: 'i_sec11', label: '猪周期' },
    { id: 'i_sec12', label: '白酒' },
    { id: 'i_sec13', label: '光伏' },
  ]},
  { title: '景气延续', links: [
    { id: 'i_sec14', label: '电网设备出海' },
    { id: 'i_sec15', label: '工程机械' },
    { id: 'i_sec16', label: '人形机器人' },
  ]},
  { title: '监测与策略', links: [
    { id: 'i_sec17', label: '大宗商品监测表' },
    { id: 'i_sec18', label: '估值监测表' },
    { id: 'i_sec19', label: 'CIO仓位建议' },
    { id: 'i_sec20', label: '行业轮动信号' },
  ]}
];

function renderIndustryNav_0423() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0423.map(group =>
    `<div><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h4>
     <ul class="space-y-1">${group.links.map(l =>
       `<li><button onclick="scrollToSection('industry','${l.id}')" class="nav-btn w-full text-left text-sm text-slate-700 hover:bg-slate-100 px-2 py-1.5 rounded-lg transition-all" data-section="${l.id}"><div class="inline-block w-1.5 h-1.5 rounded-full bg-transparent mr-1"></div>${l.label}</button></li>`
     ).join('')}</ul></div>`
  ).join('');
}
