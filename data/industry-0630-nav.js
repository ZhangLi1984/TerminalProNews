const INDUSTRY_NAV_CONFIG_0630 = [
  { title: '核心赛道', links: [
    { id: 'sec1', label: 'AI算力硬件' },
    { id: 'sec2', label: '创新药/Biotech' },
    { id: 'sec3', label: '电力设备/AIDC' }
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'sec4', label: '存储→设备/封装' },
    { id: 'sec5', label: '核电→铀/磷重估' },
    { id: 'sec6', label: '物理AI数据基建' }
  ]},
  { title: '预期差挖掘', links: [
    { id: 'sec7', label: '光伏BC/太空光伏' },
    { id: 'sec8', label: '氢能SOFC错杀' }
  ]},
  { title: '周期监测', links: [
    { id: 'sec9', label: '大宗商品表' },
    { id: 'sec10', label: '产业链估值' }
  ]}
];

function renderIndustryNav_0630() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = `
    <nav class="space-y-6">
      ${INDUSTRY_NAV_CONFIG_0630.map(section => `
        <div>
          <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-4">${section.title}</h3>
          <ul class="space-y-1">
            ${section.links.map(link => `
              <li>
                <a href="#${link.id}" onclick="scrollToSection('${link.id}')"
                   class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors">
                  ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </nav>
  `;
}
