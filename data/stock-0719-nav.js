const STOCK_NAV_CONFIG_0719 = [
  {
    "title": "核心摘要",
    "links": [
      { "id": "sec1", "label": "S/A级标的总览" }
    ]
  },
  {
    "title": "S级标的深度",
    "links": [
      { "id": "sec2", "label": "壹连科技·SOFC+AIDC" },
      { "id": "sec3", "label": "蔚蓝锂芯·BBU电芯" },
      { "id": "sec4", "label": "鼎胜新材·电池箔" },
      { "id": "sec5", "label": "海星股份·AI铝箔" },
      { "id": "sec6", "label": "鹏辉能源·储能" }
    ]
  },
  {
    "title": "A级标的精选",
    "links": [
      { "id": "sec7", "label": "中矿资源·锂铜锗" },
      { "id": "sec8", "label": "亨通光电·光纤" },
      { "id": "sec9", "label": "荣盛石化·炼化" },
      { "id": "sec10", "label": "长鑫科技·DRAM" },
      { "id": "sec11", "label": "中国人寿·保险" },
      { "id": "sec12", "label": "芯原股份·ASIC" },
      { "id": "sec13", "label": "其他A级标的" }
    ]
  },
  {
    "title": "评级汇总",
    "links": [
      { "id": "sec14", "label": "全量评级表" }
    ]
  }
];

function renderStockNav_0719() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  let html = '';
  STOCK_NAV_CONFIG_0719.forEach(section => {
    html += '<div class="mb-6"><h3 class="text-sm font-bold text-slate-900 mb-3 px-3">' + section.title + '</h3><ul class="space-y-1">';
    section.links.forEach(link => {
      html += '<li><a href="#' + link.id + '" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="' + link.id + '">' + link.label + '</a></li>';
    });
    html += '</ul></div>';
  });
  container.innerHTML = html;
}
