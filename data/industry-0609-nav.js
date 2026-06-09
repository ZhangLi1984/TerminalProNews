const INDUSTRY_NAV_CONFIG_0609 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力基础设施' },
    { id: 'i_sec2', label: '半导体设备材料' },
    { id: 'i_sec3', label: 'AI应用与流量' },
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'i_sec4', label: 'MLCC/PCB传导' },
    { id: 'i_sec5', label: '直流供电重构' },
    { id: 'i_sec6', label: '韩国半导体出口' },
  ]},
  { title: '预期差反转', links: [
    { id: 'i_sec7', label: '涤纶长丝补库' },
    { id: 'i_sec8', label: '保险估值修复' },
    { id: 'i_sec9', label: '游戏暑期旺季' },
  ]},
  { title: '高确定景气', links: [
    { id: 'i_sec10', label: '有色金属铜铝' },
    { id: 'i_sec11', label: '煤炭高温用电' },
    { id: 'i_sec12', label: 'REITs配置价值' },
  ]},
  { title: '监测与策略', links: [
    { id: 'i_sec13', label: '大宗商品监测表' },
    { id: 'i_sec14', label: '产业链周期表' },
    { id: 'i_sec15', label: 'CIO战略配置' },
  ]},
];

function renderIndustryNav_0609() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0609.map(group => `
    <div class="mb-6">
      <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
