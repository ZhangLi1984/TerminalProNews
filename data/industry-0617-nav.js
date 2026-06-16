const INDUSTRY_NAV_CONFIG_0617 = [
  { title: '核心赛道', links: [
    { id: 'sec1', label: 'AIDC电力与热管理' },
    { id: 'sec2', label: '半导体先进封装' },
    { id: 'sec3', label: 'siRNA心血管药物' }
  ]},
  { title: '二阶博弈', links: [
    { id: 'sec4', label: 'SOFC爆发' },
    { id: 'sec5', label: '中压设备内移' },
    { id: 'sec6', label: '肉奶周期共振' },
    { id: 'sec7', label: '香精香料弹性' }
  ]},
  { title: '预期差挖掘', links: [
    { id: 'sec8', label: '房地产反转' },
    { id: 'sec9', label: '煤炭安监' },
    { id: 'sec10', label: '锂盐弹性' }
  ]},
  { title: '监测数据', links: [
    { id: 'sec11', label: '大宗商品表' },
    { id: 'sec12', label: '估值监测' }
  ]}
];
function renderIndustryNav_0617() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
