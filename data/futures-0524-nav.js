const FUTURES_NAV_CONFIG_0524 = [{ title: '期货市场', links: [{ id: 'f_sec1', label: '暂无数据' }] }];
function renderFuturesNav_0524() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = '<div class="text-center py-12 text-slate-400"><p class="text-lg font-bold">今日暂无期货市场数据</p><p class="text-sm mt-2">数据将在可用时自动更新</p></div>';
}
function renderFuturesContent_0524() { return '<div class="prose prose-slate max-w-none"><div class="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-12 text-center text-slate-400"><h2 class="text-xl font-bold mb-2">今日暂无期货市场数据</h2><p class="text-sm">数据将在可用时自动更新</p></div></div>'; }
