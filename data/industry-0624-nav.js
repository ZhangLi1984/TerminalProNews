const INDUSTRY_NAV_CONFIG_0624 = [
  { title: '核心高胜率赛道', links: [{ id: 'sec1', label: 'AI算力与先进封装' }, { id: 'sec2', label: '汽车智能化与激光雷达' }, { id: 'sec3', label: '储能与大电芯' }] },
  { title: '跨赛道暗线', links: [{ id: 'sec4', label: 'AIDC缺电链' }, { id: 'sec5', label: 'HBM溢出效应' }, { id: 'sec6', label: '玻璃基板TGV' }, { id: 'sec7', label: '油价大跌传导' }] },
  { title: '预期差与反转', links: [{ id: 'sec8', label: '火电价值重估' }, { id: 'sec9', label: '光伏供给侧改革' }, { id: 'sec10', label: '锂电主动补库' }] },
  { title: '景气延续', links: [{ id: 'sec11', label: '人形机器人' }, { id: 'sec12', label: '潮玩IP经济' }, { id: 'sec13', label: '制冷剂' }] },
  { title: '数据监测', links: [{ id: 'sec14', label: '大宗商品量价表' }, { id: 'sec15', label: '产业链周期估值表' }] },
  { title: '策略建议', links: [{ id: 'sec16', label: '仓位配置建议' }] }
];

function renderIndustryNav_0624() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0624.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
