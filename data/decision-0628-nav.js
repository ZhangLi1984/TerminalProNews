// ==========================================
// Decision Nav Config: 2026-06-28
// ==========================================

const DECISION_NAV_CONFIG_0628 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: '人形机器人关节模组' },
      { id: 'sec2', label: 'AI视频生成模型' },
      { id: 'sec3', label: '太空光伏' },
      { id: 'sec4', label: 'AI智能体企业级应用' },
      { id: 'sec5', label: '航空运输' }
    ]
  },
  {
    title: '跨赛道暗线与二阶博弈',
    links: [
      { id: 'sec6', label: '暗线一：太空光伏→空间算力能源' },
      { id: 'sec7', label: '暗线二：人形机器人→灵巧手供应链' },
      { id: 'sec8', label: '暗线三：AI视频→液冷散热/高速连接器' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'sec9', label: '非银金融（券商跨境+保险）' },
      { id: 'sec10', label: '轮胎品牌（中国品牌崛起）' },
      { id: 'sec11', label: '海运（干散货磨底后回暖）' }
    ]
  },
  {
    title: '其他重要赛道',
    links: [
      { id: 'sec12', label: 'AI4S (AI for Science)' },
      { id: 'sec13', label: '电信运营商线上代理' },
      { id: 'sec14', label: '超声波指纹识别' },
      { id: 'sec15', label: '智能床' },
      { id: 'sec16', label: '网络安全' },
      { id: 'sec17', label: '城市轨道交通' },
      { id: 'sec18', label: '宠物品种专用喂养' }
    ]
  }
];

function renderDecisionNav_0628() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
