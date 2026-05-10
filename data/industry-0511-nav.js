// ==========================================
// 行业研究导航配置 - 2026-05-11
// ==========================================

const INDUSTRY_NAV_CONFIG_0511 = [
  { title: '核心高胜率赛道', links: [
    { id: 'i_sec1', label: 'AI算力与半导体' },
    { id: 'i_sec2', label: '锂电/储能' },
    { id: 'i_sec3', label: '制冷剂/氟化工' },
  ]},
  { title: '产业链二阶博弈', links: [
    { id: 'i_sec4', label: '算电协同产业链' },
    { id: 'i_sec5', label: 'CPU短缺级联传导' },
    { id: 'i_sec6', label: 'BC电池替代' },
    { id: 'i_sec7', label: '白羽鸡供给断档' },
    { id: 'i_sec8', label: '蛋氨酸供给冲击' },
  ]},
  { title: '困境反转与预期差', links: [
    { id: 'i_sec9', label: '白酒底部布局' },
    { id: 'i_sec10', label: '生猪养殖' },
    { id: 'i_sec11', label: 'IVD/家电' },
  ]},
  { title: '高确定性景气延续', links: [
    { id: 'i_sec12', label: '电网设备/储能' },
    { id: 'i_sec13', label: '券商/保险/银行' },
  ]},
  { title: '监测与配置', links: [
    { id: 'i_sec14', label: '量价监测表' },
    { id: 'i_sec15', label: '估值监测表' },
    { id: 'i_sec16', label: '配置建议与风险' },
  ]},
];

function renderIndustryNav_0511() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0511.map((group, gi) => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('industry','${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors group-hover:bg-red-500"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
