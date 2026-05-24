const BROKER_NAV_CONFIG_0524 = [{ title: '券商晨报', links: [{ id: 'b_sec1', label: '暂无数据' }] }];
function renderBrokerNav_0524() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = '<div class="text-center py-12 text-slate-400"><p class="text-lg font-bold">今日暂无券商晨报数据</p><p class="text-sm mt-2">数据将在可用时自动更新</p></div>';
}
