const STOCK_NAV_CONFIG_0524 = [{ title: '个股研报', links: [{ id: 's_sec1', label: '暂无数据' }] }];
function renderStockNav_0524() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = '<div class="text-center py-12 text-slate-400"><p class="text-lg font-bold">今日暂无个股研报数据</p><p class="text-sm mt-2">数据将在可用时自动更新</p></div>';
}
function renderStockContent_0524() { return '<div class="prose prose-slate max-w-none"><div class="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-12 text-center text-slate-400"><svg class="w-16 h-16 mx-auto mb-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg><h2 class="text-xl font-bold mb-2">今日暂无个股研报数据</h2><p class="text-sm">数据将在可用时自动更新</p></div></div>'; }
