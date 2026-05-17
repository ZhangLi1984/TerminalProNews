const INDUSTRY_NAV_CONFIG_0518 = [
  { title: '宏观策略', links: [
    { id: 'sec1', label: '宏观周期定位' },
    { id: 'sec2', label: '资产配置建议' },
  ]},
  { title: '核心赛道', links: [
    { id: 'sec3', label: 'AI算力硬件链' },
    { id: 'sec4', label: '创新药/BD出海' },
    { id: 'sec5', label: '燃气轮机产业链' },
    { id: 'sec6', label: '工程机械' },
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'sec7', label: '中东冲突与能源替代' },
    { id: 'sec8', label: 'AI外溢与PCB产业链' },
    { id: 'sec9', label: '刚果钴出口管制' },
    { id: 'sec10', label: '缅甸锑矿与三星罢工' },
  ]},
  { title: '预期差反转', links: [
    { id: 'sec11', label: '白酒十年周期大底' },
    { id: 'sec12', label: '生猪养殖拐点' },
    { id: 'sec13', label: '医疗器械与零售药店' },
    { id: 'sec14', label: '白羽鸡与粮食' },
  ]},
  { title: '景气延续', links: [
    { id: 'sec15', label: '存储芯片/机器人/海运/高股息' },
  ]},
  { title: '数据监测', links: [
    { id: 'sec16', label: '大宗商品量价表' },
    { id: 'sec17', label: '产业链周期估值表' },
  ]},
  { title: '操作建议', links: [
    { id: 'sec18', label: '本周操作清单' },
    { id: 'sec19', label: '组合构建示例' },
    { id: 'sec20', label: '风险提示与对冲' },
    { id: 'sec21', label: '总监研判总结' },
  ]},
];

function renderIndustryNav_0518() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0518.forEach(group => {
    html += `<div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
        class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
        <span class="truncate">${link.label}</span>
      </a>`;
    });
    html += `</nav></div>`;
  });
  container.innerHTML = html;
}
