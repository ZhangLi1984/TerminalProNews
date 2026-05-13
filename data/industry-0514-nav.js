// ==========================================
// 行业研究导航模块 - 2026-05-14
// ==========================================

const INDUSTRY_NAV_CONFIG_0514 = [
  { title: '宏观定位', links: [
    { id: 'i_sec1', label: '补库元年与通胀叙事' }
  ]},
  { title: '核心赛道', links: [
    { id: 'i_sec2', label: 'AI算力产业链' },
    { id: 'i_sec3', label: '电解铝/有色' },
    { id: 'i_sec4', label: '人形机器人' },
    { id: 'i_sec5', label: '储能/电池' }
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'i_sec6', label: '能源通胀传导链' },
    { id: 'i_sec7', label: 'AI向能源反向传导' },
    { id: 'i_sec8', label: '反内卷/供给纪律' },
    { id: 'i_sec9', label: '汽车到机器人跨界' }
  ]},
  { title: '困境反转', links: [
    { id: 'i_sec10', label: '白酒/房地产/CXO' },
    { id: 'i_sec11', label: '生猪养殖/药店' }
  ]},
  { title: '高确定性资产', links: [
    { id: 'i_sec12', label: '造船/银行/潮玩' }
  ]},
  { title: '监测表', links: [
    { id: 'i_sec13', label: '大宗商品监测表' },
    { id: 'i_sec14', label: '产业链估值监测表' }
  ]},
  { title: 'CIO配置', links: [
    { id: 'i_sec15', label: '哑铃策略与仓位建议' },
    { id: 'i_sec16', label: '风险提示与事件日历' }
  ]}
];

function renderIndustryNav_0514() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0514.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
