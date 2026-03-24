// ==========================================
// 集思录 - 导航配置 (2026-03-25)
// ==========================================

const JISILU_NAV_CONFIG_0325 = [
  {
    title: '集思录概览',
    links: [
      { id: 'j_sec1', label: '集思录动态' }
    ]
  }
];

function renderJisiluNav_0325() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无集思录数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}