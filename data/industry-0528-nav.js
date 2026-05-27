// ==========================================
// 行业研究模块 - 导航配置 (2026-05-28)
// 深度融合：全市场行业汇总 + CIO战略投资内参
// ==========================================

const INDUSTRY_NAV_CONFIG_0528 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力与半导体（合并版）' },
      { id: 'i_sec2', label: '创新药与医疗器械（合并版）' },
      { id: 'i_sec3', label: '智能驾驶与自动驾驶（合并版）' },
    ]
  },
  {
    title: '跨赛道暗线与二阶博弈',
    links: [
      { id: 'i_sec4', label: '暗线一：AI算力→PCB材料→设备替代' },
      { id: 'i_sec5', label: '暗线二：煤炭供给收缩→煤化工' },
      { id: 'i_sec6', label: '暗线三：半导体硅片触底反转' },
      { id: 'i_sec7', label: '暗线四：制冷剂出口量价齐升' },
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec8', label: '生猪养殖：周期反转倒计时' },
      { id: 'i_sec9', label: '光伏：产能出清深水区' },
      { id: 'i_sec10', label: '肉牛+原奶：牧业大周期反转' },
    ]
  },
  {
    title: '行业监测表',
    links: [
      { id: 'i_sec11', label: '大宗商品量价监测表' },
      { id: 'i_sec12', label: '产业链周期与估值监测表' },
      { id: 'i_sec13', label: 'CIO战略配置建议' },
    ]
  },
];

function renderIndustryNav_0528() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
