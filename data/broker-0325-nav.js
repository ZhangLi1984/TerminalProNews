// ==========================================
// 券商晨报 - 导航配置 (2026-03-25)
// ==========================================

const BROKER_NAV_CONFIG_0325 = [
  {
    title: '晨报概览',
    links: [
      { id: 'b_sec1', label: '晨报动态' }
    ]
  }
];

function renderBrokerNav_0325() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无券商晨报数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}