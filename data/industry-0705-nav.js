const INDUSTRY_NAV_CONFIG_0705 = [
  {
    "title": "科技/AI/半导体",
    "links": [
      { "id": "ind1", "label": "存储芯片超级周期" },
      { "id": "ind2", "label": "半导体设备景气上行" },
      { "id": "ind3", "label": "AI智能体与CPU/IC载板" },
      { "id": "ind4", "label": "电子级氢氟酸国产化" },
      { "id": "ind5", "label": "计算机/AI大模型" }
    ]
  },
  {
    "title": "机器人/航天/制造",
    "links": [
      { "id": "ind6", "label": "人形机器人产业化" },
      { "id": "ind7", "label": "商业航天密集组网" },
      { "id": "ind8", "label": "低空经济政策推进" },
      { "id": "ind9", "label": "工业母机与智能制造" }
    ]
  },
  {
    "title": "新能源/电力",
    "links": [
      { "id": "ind10", "label": "锂电储能旺季在即" },
      { "id": "ind11", "label": "电网出海与算力配电" },
      { "id": "ind12", "label": "氢燃料电池新方向" }
    ]
  },
  {
    "title": "能源/原材料",
    "links": [
      { "id": "ind13", "label": "原油地缘缓和_supply恢复滞后" },
      { "id": "ind14", "label": "有色金属铜价企稳" },
      { "id": "ind15", "label": "煤炭淡季走势" },
      { "id": "ind16", "label": "钢铁供需双弱" }
    ]
  },
  {
    "title": "消费/医药/金融",
    "links": [
      { "id": "ind17", "label": "创新药竞争格局" },
      { "id": "ind18", "label": "医美化妆品618复盘" },
      { "id": "ind19", "label": "消费弱内需展望" },
      { "id": "ind20", "label": "券商评价重构" },
      { "id": "ind21", "label": "银行流动性新范式" }
    ]
  },
  {
    "title": "今日研报速查",
    "links": [
      { "id": "ind22", "label": "重点研报一览表" }
    ]
  }
];

function renderIndustryNav_0705() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0705.forEach(section => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-900 mb-3 px-3">${section.title}</h3>
        <ul class="space-y-1">
          ${section.links.map(link => `
            <li>
              <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" data-section="${link.id}">
                ${link.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}
