const INDUSTRY_NAV_CONFIG_0623 = [
  { title: '高胜率赛道', links: [{ id: 'sec1', label: 'AI算力' }, { id: 'sec2', label: '钼行业' }, { id: 'sec3', label: '基础化工' }, { id: 'sec4', label: '纺织服装' }] },
  { title: '二阶博弈', links: [{ id: 'sec5', label: '绿电直供' }, { id: 'sec6', label: '炼化弹性' }, { id: 'sec7', label: '宠物经济' }, { id: 'sec8', label: '光互联' }, { id: 'sec9', label: '物业数字化' }] },
  { title: '预期差反转', links: [{ id: 'sec10', label: '锂电回收' }, { id: 'sec11', label: '生活纸企' }, { id: 'sec12', label: '信创放量' }, { id: 'sec13', label: '浮法玻璃' }] },
  { title: '底仓资产', links: [{ id: 'sec14', label: '公用事业' }, { id: 'sec15', label: '头部券商' }, { id: 'sec16', label: '家电内销' }] },
  { title: '数据监测', links: [{ id: 'sec17', label: '大宗商品表' }, { id: 'sec18', label: '产业链估值' }] }
];

function renderIndustryNav_0623() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0623.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
      <ul class="space-y-0.5">
        ${section.links.map(link => `<li><a href="#${link.id}" class="nav-link block px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 rounded-lg transition-colors" onclick="scrollToSection('${link.id}')">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
