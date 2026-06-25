const INDUSTRY_NAV_CONFIG_0625 = [
  { title: '核心高胜率赛道', links: [{ id: 'sec1', label: 'AI硬件基础设施' }, { id: 'sec2', label: '有色金属' }, { id: 'sec3', label: '煤炭' }] },
  { title: '跨赛道暗线', links: [{ id: 'sec4', label: 'Agentic AI → ARM崛起' }, { id: 'sec5', label: '欧洲天然气 → 户储出海' }, { id: 'sec6', label: '固态电池材料重构' }, { id: 'sec7', label: 'CDMO出海分化' }] },
  { title: '预期差与反转', links: [{ id: 'sec8', label: '锂电储能反转' }, { id: 'sec9', label: 'CXO困境反转' }] },
  { title: '高确定性底仓', links: [{ id: 'sec10', label: '创新药/药店连锁' }] },
  { title: '数据监测', links: [{ id: 'sec11', label: '大宗商品量价表' }, { id: 'sec12', label: '产业链周期估值表' }] }
];

function renderIndustryNav_0625() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0625.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
