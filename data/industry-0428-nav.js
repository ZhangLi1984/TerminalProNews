// ==========================================
// 行业研究导航配置（深度融合版）- 2026-04-28
// ==========================================

const INDUSTRY_NAV_CONFIG_0428 = [
  {
    title: '战略定调',
    links: [
      { id: 'i_sec1', label: '三大主线交汇' }
    ]
  },
  {
    title: '核心赛道（深度融合）',
    links: [
      { id: 'i_sec2', label: 'AI算力基础设施' },
      { id: 'i_sec3', label: '国产算力自主可控' },
      { id: 'i_sec4', label: '锂电/储能' },
      { id: 'i_sec5', label: '半导体/电子' },
      { id: 'i_sec6', label: '医药生物/CGT' },
      { id: 'i_sec7', label: '人形机器人' }
    ]
  },
  {
    title: '传统与周期',
    links: [
      { id: 'i_sec8', label: '煤炭/石油/能源' },
      { id: 'i_sec9', label: '农林牧渔（猪周期）' },
      { id: 'i_sec10', label: '消费/白酒/大金融' },
      { id: 'i_sec11', label: '面板LCD/房地产' }
    ]
  },
  {
    title: '预期差与暗线',
    links: [
      { id: 'i_sec12', label: '五大预期差分析' },
      { id: 'i_sec13', label: '五条跨赛道暗线' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec14', label: '景气度变化全景' },
      { id: 'i_sec15', label: '大宗商品量价监测' },
      { id: 'i_sec16', label: '产业链周期估值' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec17', label: '攻守兼备配置方案' },
      { id: 'i_sec18', label: '风险矩阵' }
    ]
  }
];

function renderIndustryNav_0428() {
  var container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0428.map(function(group) {
    var linksHtml = group.links.map(function(link) {
      return '<button class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="' + link.id + '" onclick="scrollToSection(\'industry\', \'' + link.id + '\'); updateActiveNav(\'' + link.id + '\');">' +
        '<div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>' + link.label + '</button>';
    }).join('');
    return '<div><h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-3">' + group.title + '</h4><div class="space-y-0.5">' + linksHtml + '</div></div>';
  }).join('');
}
