// ==========================================
// 宏观研究 - 导航配置 (2026-03-25)
// ==========================================

const MACRO_NAV_CONFIG_0325 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '宏观动态' }
    ]
  }
];

function renderMacroNav_0325() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无宏观研究数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}