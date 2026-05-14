const INDUSTRY_NAV_CONFIG_0515 = [
  { title: '核心赛道', links: [
    { id: 'sec1', label: 'AI算力基础设施' },
    { id: 'sec2', label: '锂电产业链' },
    { id: 'sec3', label: '工程机械' },
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'sec4', label: '暗线一：AI能源需求' },
    { id: 'sec5', label: '暗线二：CPU瓶颈' },
    { id: 'sec6', label: '暗线三：钠离子电池' },
    { id: 'sec7', label: '暗线四：对位芳纶' },
    { id: 'sec8', label: '暗线五：磷化工' },
  ]},
  { title: '预期差与反转', links: [
    { id: 'sec9', label: '白酒：不对称机会' },
    { id: 'sec10', label: '光伏：出清信号' },
    { id: 'sec11', label: '生猪养殖：第三轮出清' },
    { id: 'sec12', label: '水泥：碳市场布局' },
  ]},
  { title: '景气延续', links: [
    { id: 'sec13', label: 'CXO/电力/电网/银行/机器人' },
  ]},
  { title: '数据与策略', links: [
    { id: 'sec14', label: '大宗商品量价监测表' },
    { id: 'sec15', label: '产业链周期与估值监测' },
    { id: 'sec16', label: 'CIO战略配置建议' },
  ]},
  { title: '风险', links: [
    { id: 'sec17', label: '关键风险提示' },
  ]},
];

function renderIndustryNav_0515() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  let html = '';
  INDUSTRY_NAV_CONFIG_0515.forEach(group => {
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
