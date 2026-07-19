const INDUSTRY_NAV_CONFIG_0715 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "三条主线与核心阿尔法" }
    ]
  },
  {
    "title": "高胜率赛道",
    "links": [
      { "id": "sec2", "label": "创新药BD出海" },
      { "id": "sec3", "label": "AI算力纵深扩散" },
      { "id": "sec4", "label": "生猪周期拐点" },
      { "id": "sec5", "label": "中东地缘重定价" },
      { "id": "sec6", "label": "垃圾焚烧：成长的长江电力" },
      { "id": "sec7", "label": "锂电材料反转" },
      { "id": "sec8", "label": "黄金：央行增持+资源重估" }
    ]
  },
  {
    "title": "跨赛道暗线",
    "links": [
      { "id": "sec9", "label": "AI挤占→车规存储→液冷转型" },
      { "id": "sec10", "label": "科技财富效应→高端地产" },
      { "id": "sec11", "label": "其他暗线（机器人/长征十号等）" }
    ]
  },
  {
    "title": "预期差与困境反转",
    "links": [
      { "id": "sec12", "label": "医药/线下药店/血制品/客车/零售/地产" }
    ]
  },
  {
    "title": "底仓资产",
    "links": [
      { "id": "sec13", "label": "煤炭/城燃/保险举牌/证券/血制品" }
    ]
  },
  {
    "title": "CIO仓位建议",
    "links": [
      { "id": "sec14", "label": "7成仓位攻防配置" },
      { "id": "sec15", "label": "风险预案与触发条件" }
    ]
  },
  {
    "title": "监测表",
    "links": [
      { "id": "sec16", "label": "大宗商品监测表" },
      { "id": "sec17", "label": "产业链周期与估值表" }
    ]
  }
];

function renderIndustryNav_0715() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0715.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
