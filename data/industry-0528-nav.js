// ==========================================
// 行业研究模块 - 导航配置 (2026-05-28)
// 深度融合：全市场行业汇总 + CIO战略投资内参
// ==========================================

const INDUSTRY_NAV_CONFIG_0528 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施（合并版）' },
      { id: 'i_sec2', label: '创新药/ADC（合并版）' },
      { id: 'i_sec3', label: '制冷剂（合并版）' },
      { id: 'i_sec4', label: '半导体/华为韬定律（合并版）' },
    ]
  },
  {
    title: '跨赛道暗线与二阶博弈',
    links: [
      { id: 'i_sec5', label: 'AI算力→AIDC缺电→能源链' },
      { id: 'i_sec6', label: '山西矿难→焦煤收缩→煤化工' },
      { id: 'i_sec7', label: 'Vera Rubin→PCB→钻针替代' },
      { id: 'i_sec8', label: 'FSD入华→智驾军备竞赛' },
      { id: 'i_sec9', label: '硫磺中断→镍成本飙升' },
      { id: 'i_sec10', label: '光模块→磷化铟→铟重估' },
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec11', label: '生猪养殖：周期底部' },
      { id: 'i_sec12', label: '肉牛/原奶：共振反转' },
      { id: 'i_sec13', label: 'CXO：底部修复' },
      { id: 'i_sec14', label: '纯碱：产能出清' },
      { id: 'i_sec15', label: '垃圾焚烧→算电协同' },
    ]
  },
  {
    title: '确定性与景气延续',
    links: [
      { id: 'i_sec16', label: '家电出口链' },
      { id: 'i_sec17', label: '国货美妆/快递/啤酒' },
    ]
  },
  {
    title: '监测表与配置',
    links: [
      { id: 'i_sec18', label: '大宗商品量价监测表' },
      { id: 'i_sec19', label: '产业链周期与估值监测' },
      { id: 'i_sec20', label: 'CIO超配/标配/低配建议' },
      { id: 'i_sec21', label: '行业配置建议与权重' },
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
