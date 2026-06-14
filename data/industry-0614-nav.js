const INDUSTRY_NAV_CONFIG_0614 = [
  { title: '核心高胜率赛道', links: [
    { id: 'i_sec1', label: '半导体设备' },
    { id: 'i_sec2', label: '医疗器械出海' },
    { id: 'i_sec3', label: '贵金属与小金属' },
    { id: 'i_sec4', label: 'AI硬件材料' }
  ]},
  { title: '跨赛道暗线博弈', links: [
    { id: 'i_sec5', label: '晶圆厂扩产传导' },
    { id: 'i_sec6', label: 'DRG/DIP控费传导' },
    { id: 'i_sec7', label: 'AI服务器功耗升级' },
    { id: 'i_sec8', label: '存款搬家效应' },
    { id: 'i_sec9', label: '光模块工艺变革' }
  ]},
  { title: '预期差与反转', links: [
    { id: 'i_sec10', label: '跨境电商合规' },
    { id: 'i_sec11', label: '钢铁底部磨底' },
    { id: 'i_sec12', label: 'AI Agent出清' },
    { id: 'i_sec13', label: '五轴数控机床' }
  ]},
  { title: '景气延续资产', links: [
    { id: 'i_sec14', label: '叉车电动化' },
    { id: 'i_sec15', label: 'IP授权衍生品' },
    { id: 'i_sec16', label: '保险资负共振' }
  ]},
  { title: '数据监测表', links: [
    { id: 'i_sec17', label: '大宗商品量价' },
    { id: 'i_sec18', label: '产业链周期估值' }
  ]}
];

function renderIndustryNav_0614() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0614.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); window.scrollTo({ top: document.getElementById('${link.id}')?.offsetTop - 80, behavior: 'smooth' })"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-3 transition-colors bg-transparent group-hover:bg-red-500"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
