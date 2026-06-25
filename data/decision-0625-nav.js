const DECISION_NAV_CONFIG_0625 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '市场主线与超预期事件' }] },
  { title: '重大新闻详解', links: [{ id: 'sec2', label: '存储芯片超级周期确认' }, { id: 'sec3', label: 'SK海力士赴美上市' }, { id: 'sec4', label: '黄金暴跌30%' }, { id: 'sec5', label: '黄仁勋定调AI基建周期' }] },
  { title: '重要新闻分类', links: [{ id: 'sec6', label: '产业政策' }, { id: 'sec7', label: '公司动态' }, { id: 'sec8', label: '国际局势' }] },
  { title: '热点赛道追踪', links: [{ id: 'sec9', label: 'AI硬件链' }, { id: 'sec10', label: '半导体设备/材料' }, { id: 'sec11', label: '新能源/电力' }, { id: 'sec12', label: '脑机接口' }] },
  { title: '跨赛道传导', links: [{ id: 'sec13', label: '存储涨价传导' }, { id: 'sec14', label: '黄金暴跌传导' }, { id: 'sec15', label: '半导体估值重估' }, { id: 'sec16', label: 'AI算力扩张传导' }] },
  { title: '风险提示', links: [{ id: 'sec17', label: '高风险事项' }, { id: 'sec18', label: '中等风险' }, { id: 'sec19', label: '低风险需跟踪' }] }
];

function renderDecisionNav_0625() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0625.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
