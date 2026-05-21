// ==========================================
// 行业研究导航占位 - 2026-05-22
// ==========================================

const INDUSTRY_NAV_CONFIG_0522 = [
  { title: '提示', links: [{ id: 'i_sec1', label: '数据待更新' }] }
];

function renderIndustryNav_0522() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = '<div class="p-4 text-center"><div class="text-sm text-slate-500">今日行业研究数据待更新</div></div>';
}
