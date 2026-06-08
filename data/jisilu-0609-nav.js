// ==========================================
// 集思录投资洞察导航 - 2026年6月9日
// ==========================================
const JISILU_NAV_CONFIG_0609 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '中金合并东信达通过' },
    { id: 'j_sec2', label: '五粮液财报洗澡争议' },
    { id: 'j_sec3', label: '转债新版页面争议' },
    { id: 'j_sec4', label: '北交打新券商吐槽' },
    { id: 'j_sec5', label: '低风险渠道被堵死' },
  ]},
  { title: '热门话题(续)', links: [
    { id: 'j_sec6', label: '实盘记录分享' },
    { id: 'j_sec7', label: '券商板块深度回调' },
    { id: 'j_sec8', label: '白酒板块分化' },
    { id: 'j_sec9', label: '掼蛋与投资心态' },
    { id: 'j_sec10', label: 'ETF筛选插件' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '多资产动态平衡' },
    { id: 'j_sec12', label: '可转债轮动量化' },
    { id: 'j_sec13', label: '高股息长线策略' },
    { id: 'j_sec14', label: '券商合并套利' },
    { id: 'j_sec15', label: 'ETF/LOF套利' },
  ]},
  { title: '投资方法论(续)', links: [
    { id: 'j_sec16', label: '稳态趋势+期权' },
    { id: 'j_sec17', label: '北交所打新(式微)' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec18', label: '中金公司(601995)' },
    { id: 'j_sec19', label: '东兴/信达证券' },
    { id: 'j_sec20', label: '五粮液(000858)' },
    { id: 'j_sec21', label: '泸州老窖(000568)' },
    { id: 'j_sec22', label: '龙大转债(127060)' },
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec23', label: '情绪评分与信号' },
    { id: 'j_sec24', label: '风险偏好与轮动' },
    { id: 'j_sec25', label: '六大风险提示' },
    { id: 'j_sec26', label: '下周关注点' },
  ]},
];

function renderJisiluNav_0609() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0609.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
