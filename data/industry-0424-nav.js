// ==========================================
// 行业研究导航配置 - 2026-04-24
// ==========================================

const INDUSTRY_NAV_CONFIG_0424 = [
  {
    title: '市场概览',
    links: [
      { id: 'i_sec1', label: '市场全景与情绪监测' },
      { id: 'i_sec2', label: 'CIO周期定位总结' }
    ]
  },
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec3', label: 'AI算力硬件' },
      { id: 'i_sec4', label: 'CW光芯片与光通信' },
      { id: 'i_sec5', label: '存储芯片超级周期' },
      { id: 'i_sec6', label: '燃气轮机/AIDC电力设备' }
    ]
  },
  {
    title: '能源安全链',
    links: [
      { id: 'i_sec7', label: '能源安全链（煤炭/油运）' }
    ]
  },
  {
    title: '二阶暗线',
    links: [
      { id: 'i_sec8', label: 'SiC散热基板' },
      { id: 'i_sec9', label: '煤化工替代路径' },
      { id: 'i_sec10', label: 'PCB材料升级' },
      { id: 'i_sec11', label: '半导体材料国产替代' },
      { id: 'i_sec12', label: '大众品成本改善' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec13', label: '储能/锂电' },
      { id: 'i_sec14', label: '电网设备/特高压' },
      { id: 'i_sec15', label: '快递物流' }
    ]
  },
  {
    title: '预期差反转',
    links: [
      { id: 'i_sec16', label: '白酒深度筑底' },
      { id: 'i_sec17', label: '钢铁PPI转正' },
      { id: 'i_sec18', label: '生猪养殖去化' },
      { id: 'i_sec19', label: '煤炭压舱石' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec20', label: '大宗商品量价监测表' },
      { id: 'i_sec21', label: '产业链估值监测表' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec22', label: 'CIO买方配置建议' },
      { id: 'i_sec23', label: '风险提示与跟踪节点' }
    ]
  }
];

function renderIndustryNav_0424() {
  var container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0424.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'industry\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
