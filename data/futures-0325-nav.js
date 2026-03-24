// ==========================================
// 期货市场 - 导航配置 (2026-03-25)
// ==========================================

const FUTURES_NAV_CONFIG_0325 = [
  {
    title: '期货概览',
    links: [
      { id: 'f_sec1', label: '期货动态' }
    ]
  }
];

function renderFuturesNav_0325() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无期货市场数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}