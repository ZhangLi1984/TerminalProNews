const JISILU_NAV_CONFIG_0624 = [
  { title: '集思录洞察', links: [
    { id: 'sec1', label: '市场情绪观察' },
    { id: 'sec-summary', label: '核心洞察总结' }
  ]},
  { title: '热门话题 TOP 10', links: [
    { id: 'sec2', label: '龙大转债违约' },
    { id: 'sec3', label: '老登股崩盘' },
    { id: 'sec4', label: '国家队撤退' },
    { id: 'sec5', label: '科技vs老登分裂' },
    { id: 'sec6', label: '港股互联网暴跌' },
    { id: 'sec7', label: '宁泉资产道歉' },
    { id: 'sec8', label: '闻泰转债下修' },
    { id: 'sec9', label: '市值管理之争' },
    { id: 'sec10', label: '北交所打新争议' },
    { id: 'sec11', label: '百畅转债陷阱' }
  ]},
  { title: '投资策略', links: [
    { id: 'sec-strategy', label: '实操方法论' }
  ]},
  { title: '热议标的', links: [
    { id: 'sec-stocks', label: '标的分析清单' }
  ]},
  { title: '风险提示', links: [
    { id: 'sec-risk', label: '五大风险预警' }
  ]}
];

function renderJisiluNav_0624() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';
  JISILU_NAV_CONFIG_0624.forEach((category, catIdx) => {
    html += `<div class="mb-6"><h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${category.title}</h3><div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<a href="#" onclick="scrollToSection('${link.id}'); return false;" class="block px-3 py-2.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover:bg-red-500 transition-colors"></span>${link.label}</a>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
