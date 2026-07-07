const INDUSTRY_NAV_CONFIG_0706 = [
  {
    "title": "核心高胜率赛道",
    "links": [
      { "id": "sec1", "label": "AI算力链（存储>PCB>MLCC）" },
      { "id": "sec2", "label": "储能 — 全球景气共振" },
      { "id": "sec3", "label": "锂电材料 — 涨价周期开启" }
    ]
  },
  {
    "title": "跨赛道暗线",
    "links": [
      { "id": "sec4", "label": "油价回落→化工中下游修复" },
      { "id": "sec5", "label": "Fed加息预期→有色修复" },
      { "id": "sec6", "label": "AIDC电力瓶颈" },
      { "id": "sec7", "label": "碳酸锂→车企利润挤压" }
    ]
  },
  {
    "title": "预期差与困境反转",
    "links": [
      { "id": "sec8", "label": "消费板块 — 极度悲观中的反转" },
      { "id": "sec9", "label": "光伏 — 至暗时刻临近" },
      { "id": "sec10", "label": "汽车内需 — 下滑被低估" }
    ]
  },
  {
    "title": "高确定性底仓资产",
    "links": [
      { "id": "sec11", "label": "煤炭 — 供应收缩+迎峰度夏" },
      { "id": "sec12", "label": "银行 — 高股息+估值修复" },
      { "id": "sec13", "label": "水电/公用事业" }
    ]
  },
  {
    "title": "监测表格",
    "links": [
      { "id": "sec14", "label": "大宗商品量价监测表" },
      { "id": "sec15", "label": "产业链周期与估值表" },
      { "id": "sec16", "label": "关键证伪节点日历" }
    ]
  },
  {
    "title": "风险总结",
    "links": [
      { "id": "sec17", "label": "五大核心风险" }
    ]
  }
];

function renderIndustryNav_0706() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0706.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
