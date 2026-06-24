const JISILU_NAV_CONFIG_0624 = [
  { title: '集思录洞察', links: [{ id: 'sec1', label: '市场情绪观察' }] },
  { title: '热门话题', links: [{ id: 'sec2', label: '讨论焦点' }] },
  { title: '投资策略', links: [{ id: 'sec3', label: '实操方法论' }] }
];

function renderJisiluNav_0624() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0624.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
