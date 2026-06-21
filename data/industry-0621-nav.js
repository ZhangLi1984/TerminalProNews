const INDUSTRY_NAV_CONFIG_0621 = [
  { title: '核心高胜率赛道', links: [{ id: 'sec1', label: 'AI大模型产业链' }, { id: 'sec2', label: '有色金属/锂' }, { id: 'sec3', label: '半导体自主可控' }] },
  { title: '跨赛道暗线博弈', links: [{ id: 'sec4', label: 'MPO光纤连接器' }, { id: 'sec5', label: 'SAF生物航煤' }, { id: 'sec6', label: '玻璃基板商业化' }] },
  { title: '预期差与反转', links: [{ id: 'sec7', label: '房地产链' }, { id: 'sec8', label: '出版行业语料' }, { id: 'sec9', label: '锂电供给逼空' }] },
  { title: '景气延续底仓', links: [{ id: 'sec10', label: '眼科医疗服务' }, { id: 'sec11', label: '券商非银金融' }] },
  { title: '数据监测表', links: [{ id: 'sec12', label: '大宗商品量价' }, { id: 'sec13', label: '产业链周期估值' }] }
];

function renderIndustryNav_0621() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0621.forEach(cat => {
    html += `<div class="mb-4"><h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${cat.title}</h4><div class="space-y-1">`;
    cat.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}')" data-section="${link.id}" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></span><span>${link.label}</span></button>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}
