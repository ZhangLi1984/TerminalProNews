const INDUSTRY_NAV_CONFIG_0708 = [
  {
    "title": "核心高胜率赛道",
    "links": [
      { "id": "sec1", "label": "AI算力基础设施" },
      { "id": "sec2", "label": "人形机器人/物理AI" },
      { "id": "sec3", "label": "氟化工/电子材料" },
      { "id": "sec4", "label": "国产开源模型/AI应用" },
      { "id": "sec5", "label": "半导体设备/存储" },
      { "id": "sec6", "label": "燃气/长协资源" },
      { "id": "sec7", "label": "非银金融" }
    ]
  },
  {
    "title": "CIO深度洞察",
    "links": [
      { "id": "sec8", "label": "AI电力与能量缓冲" },
      { "id": "sec9", "label": "氟化工三重共振" },
      { "id": "sec10", "label": "机器人量产铲子" },
      { "id": "sec11", "label": "资源稀缺性" },
      { "id": "sec12", "label": "现金流运营资产" }
    ]
  },
  {
    "title": "跨赛道暗线",
    "links": [
      { "id": "sec13", "label": "CPU价值回归" },
      { "id": "sec14", "label": "BBU标配化" },
      { "id": "sec15", "label": "CPO与玻璃基" },
      { "id": "sec16", "label": "氦气/SAF/农化" }
    ]
  },
  {
    "title": "预期差与逆向",
    "links": [
      { "id": "sec17", "label": "房地产：租金先于情绪" },
      { "id": "sec18", "label": "银行：基本面被错杀" },
      { "id": "sec19", "label": "炼化盈利修复" },
      { "id": "sec20", "label": "垃圾焚烧现金流" }
    ]
  },
  {
    "title": "底仓资产",
    "links": [
      { "id": "sec21", "label": "水电/核电/公用事业" },
      { "id": "sec22", "label": "高股息银行" },
      { "id": "sec23", "label": "汽车出海+智能化" }
    ]
  },
  {
    "title": "大宗商品监测",
    "links": [
      { "id": "sec24", "label": "原油/天然气/动力煤" },
      { "id": "sec25", "label": "碳酸锂/制冷剂/氟材料" },
      { "id": "sec26", "label": "铜/铝/黄金/稀土" }
    ]
  },
  {
    "title": "风险与分歧",
    "links": [
      { "id": "sec27", "label": "预期分歧与共同风险" }
    ]
  },
  {
    "title": "仓位建议",
    "links": [
      { "id": "sec28", "label": "攻防配置与风险预案" }
    ]
  }
];

function renderIndustryNav_0708() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0708.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
