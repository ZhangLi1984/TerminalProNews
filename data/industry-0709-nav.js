const INDUSTRY_NAV_CONFIG_0709 = [
  {
    "title": "核心高胜率赛道",
    "links": [
      { "id": "sec1", "label": "AI算力基础设施全链条" },
      { "id": "sec2", "label": "人形机器人核心零部件" },
      { "id": "sec3", "label": "制冷剂与高端氟材料" },
      { "id": "sec4", "label": "券商与非银金融" },
      { "id": "sec5", "label": "独立储能与AIDC电池链" }
    ]
  },
  {
    "title": "跨赛道暗线",
    "links": [
      { "id": "sec6", "label": "AI功耗→BBU+氟材料+模拟电源" },
      { "id": "sec7", "label": "Agentic AI→国产CPU窗口" },
      { "id": "sec8", "label": "先进封装→ABF膜卡脖子" },
      { "id": "sec9", "label": "机器人量产→汽车链复用" },
      { "id": "sec10", "label": "制冷剂→电子氟材料迁移" }
    ]
  },
  {
    "title": "预期差与困境反转",
    "links": [
      { "id": "sec11", "label": "房地产：租金早周期信号" },
      { "id": "sec12", "label": "银行：基本面被资金误杀" },
      { "id": "sec13", "label": "储能：表观下滑掩盖爆发" },
      { "id": "sec14", "label": "涤纶长丝：油价反转利润" }
    ]
  },
  {
    "title": "高确定性底仓",
    "links": [
      { "id": "sec15", "label": "云计算CSP与AI平台" },
      { "id": "sec16", "label": "核电/水电/公用事业" },
      { "id": "sec17", "label": "垃圾焚烧与环保运营" },
      { "id": "sec18", "label": "汽车出海与智能化" }
    ]
  },
  {
    "title": "监测表格",
    "links": [
      { "id": "sec19", "label": "大宗商品量价监测表" },
      { "id": "sec20", "label": "产业链周期与估值表" }
    ]
  },
  {
    "title": "风险与结论",
    "links": [
      { "id": "sec21", "label": "风险与分歧" },
      { "id": "sec22", "label": "买方排序结论" }
    ]
  }
];

function renderIndustryNav_0709() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0709.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
