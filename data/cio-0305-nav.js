// ==========================================
// 文档：行业研究报告 - 导航配置 (2026-03-05版)
// 自动生成时间：2026-03-05 16:43
// ==========================================

const CIO_NAV_CONFIG_03-05 = [
  { title: '核心要点', links: [{ id: 'sec1', label: 'AI 算力与光通信 - 核心逻辑：全...' }, { id: 'sec2', label: '半导体（存储/设备/材料）- 核心逻...' }, { id: 'sec3', label: '人形机器人 - 核心逻辑：2026 ...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '暗线一：霍尔木兹海峡封锁 → 油运狂...' }, { id: 'sec2', label: '暗线二：津巴布韦锂矿出口暂停 → 锂...' }, { id: 'sec3', label: '暗线三：欧洲天然气大涨 40% → ...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '生猪养殖 - 市场过度悲观，周期反转...' }, { id: 'sec2', label: '互联网（大模型/Agent）- 估值...' }, { id: 'sec3', label: '房地产与建材 - 政策底已现，市场底...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '核心要点' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '核心要点' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '仓位建议' }, { id: 'sec2', label: '核心风险提示' }, { id: 'sec3', label: '关键跟踪指标（下周）' }] },
];

/**
 * 渲染侧边导航
 */
function renderCioNav_03-05() {
  const container = document.getElementById('cio-nav-content');
  if (!container) return;

  container.innerHTML = CIO_NAV_CONFIG_03-05.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map((link, linkIdx) => `
          <button
            onclick="scrollToElement('sec${linkIdx + 1}'); updateActiveNav('sec${linkIdx + 1}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="sec${linkIdx + 1}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
