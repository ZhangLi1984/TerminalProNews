// ==========================================
// 个股研报 - 导航配置 (2026-03-25)
// ==========================================

const STOCK_NAV_CONFIG_0325 = [
  {
    title: '研报概览',
    links: [
      { id: 's_sec1', label: '研报动态' }
    ]
  }
];

function renderStockNav_0325() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无个股研报数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}