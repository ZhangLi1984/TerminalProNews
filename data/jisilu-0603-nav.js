// ==========================================
// 集思录投资洞察 - 导航配置 (2026-06-03)
// ==========================================

const JISILU_NAV_CONFIG_0603 = [
  { id: 'nav_jisilu_1', label: '热门话题', href: '#j_sec1' },
  { id: 'nav_jisilu_2', label: '投资方法论', href: '#j_sec11' },
  { id: 'nav_jisilu_3', label: '热议标的', href: '#j_sec21' },
  { id: 'nav_jisilu_4', label: '市场情绪', href: '#j_sec31' },
  { id: 'nav_jisilu_5', label: '风险提示', href: '#j_sec41' },
];

function renderJisiluNav_0603() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0603.forEach(item => {
    html += `<a href="${item.href}" class="nav-item">${item.label}</a>`;
  });
  container.innerHTML = html;
}
