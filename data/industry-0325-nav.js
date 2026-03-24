// ==========================================
// 行业研究 - 导航配置 (2026-03-25)
// ==========================================

const INDUSTRY_NAV_CONFIG_0325 = [
  {
    title: '行业概览',
    links: [
      { id: 'i_sec1', label: '行业动态' }
    ]
  }
];

function renderIndustryNav_0325() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '<div class="text-center py-8 text-slate-400">';
  html += '<p>暂无行业研究数据</p>';
  html += '<p class="text-sm mt-2">请稍后再查看</p>';
  html += '</div>';

  container.innerHTML = html;
}