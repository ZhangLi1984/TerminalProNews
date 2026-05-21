const BROKER_NAV_CONFIG_0522 = [{ title: '提示', links: [{ id: 'b_sec1', label: '数据待更新' }] }];
function renderBrokerNav_0522() { const c = document.getElementById('broker-nav-content'); if (!c) return; c.innerHTML = '<div class="p-4 text-center"><div class="text-sm text-slate-500">今日券商晨报数据待更新</div></div>'; }
