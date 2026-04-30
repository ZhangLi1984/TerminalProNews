// ==========================================
// 行业研究导航配置 - 2026-04-30
// ==========================================

const INDUSTRY_NAV_CONFIG_0430 = [
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力基础设施' },
      { id: 'i_sec2', label: '储能与动力电池' },
      { id: 'i_sec3', label: '制冷剂（氟化工）' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec4', label: 'SAT疫情→猪周期反转' },
      { id: 'i_sec5', label: '半导体设备景气传导' },
      { id: 'i_sec6', label: 'CPU/GPU配比重构' },
      { id: 'i_sec7', label: 'CBAM碳关税→绿色化工' },
      { id: 'i_sec8', label: '10C快充→LiFSI共振' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec9', label: '生猪养殖（戴维斯双杀）' },
      { id: 'i_sec10', label: '纯碱（亏损底部反转）' },
      { id: 'i_sec11', label: '保险板块（利率企稳）' },
      { id: 'i_sec12', label: '国产GPU（黎明前黑暗）' }
    ]
  },
  {
    title: '高确定性与底仓',
    links: [
      { id: 'i_sec13', label: '人形机器人' },
      { id: 'i_sec14', label: 'CXO医药外包' },
      { id: 'i_sec15', label: '钼金属' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec16', label: '大宗商品量价监测表' },
      { id: 'i_sec17', label: '产业链周期估值表' }
    ]
  },
  {
    title: '风险与策略',
    links: [
      { id: 'i_sec18', label: '风险总览' },
      { id: 'i_sec19', label: 'CIO逆向思维总结' },
      { id: 'i_sec20', label: '仓位建议' }
    ]
  }
];

function renderIndustryNav_0430() {
  var container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0430.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'industry\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
