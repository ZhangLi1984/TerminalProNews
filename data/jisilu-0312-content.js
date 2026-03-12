// 集思录内容渲染 - 2026-03-12 (详细版)

function renderJisiluContent_0312() {
  return `
<div class="prose prose-slate max-w-none">

  <!-- 标题区 -->
  <div class="mb-8">
    <h1 class="text-3xl font-black text-slate-900 mb-2 flex items-center">
      <span class="w-2 h-10 bg-teal-600 rounded-full mr-4"></span>
      集思录投资洞察
    </h1>
    <p class="text-slate-500 text-sm">2026年3月12日 · 数据来源：集思录热门讨论（80条帖子）</p>
  </div>

  <!-- 摘要卡片 -->
  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6 mb-8">
    <div class="flex items-start space-x-4">
      <div class="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-black text-teal-900 mb-1">今日核心洞察</h3>
        <p class="text-teal-700 text-sm">可转债强赎博弈成热点，永22转债事件引发"操纵股价"质疑。职业投资人孔曼子分享6年年化22.8%方法。社区整体偏向低风险策略，情绪中性偏谨慎。</p>
      </div>
    </div>
  </div>

  <!-- 热门话题1：可转债强赎博弈 -->
  <h2 id="j_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    🔥 热门话题 TOP 5
  </h2>

  <!-- 话题1详情卡片 -->
  <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-amber-800 font-black flex items-center">
        <span class="text-xl mr-2">🔥</span>1. 可转债强赎博弈
      </h4>
      <span class="text-amber-600 text-sm font-bold">★★★★★</span>
    </div>
    <p class="text-amber-700 text-sm mb-3"><strong>讨论焦点：</strong>永22转债尾盘强赎事件，上市公司被质疑操纵股价</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-amber-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-amber-900 text-sm space-y-1">
        <li>• 公司连续两日尾盘拉升正股至21.45以上，触发强赎条件</li>
        <li>• 强赎后转债失去溢价资格，等于变成正股永冠新材</li>
        <li>• 转股溢价约-2%，存在套利空间但风险极大</li>
        <li>• 有投资者在恒锋工具强赎中"吃了差不多一个10%跌停"</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-amber-400 pl-3 text-amber-800 text-sm italic">
      "只能说这家上市公司够不要脸，整个事件严重践踏了市场的公平，抢劫了公司可转债持有人的钱包。" —— 封基越放越醇
    </blockquote>
    <p class="text-amber-600 text-xs mt-2">散户情绪：愤怒与无奈</p>
  </div>

  <!-- 话题2详情卡片 -->
  <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-emerald-800 font-black flex items-center">
        <span class="text-xl mr-2">🔥</span>2. 职业投资与资产配置
      </h4>
      <span class="text-emerald-600 text-sm font-bold">★★★★★</span>
    </div>
    <p class="text-emerald-700 text-sm mb-3"><strong>讨论焦点：</strong>孔曼子2025年投资总结，连续6年正收益的方法论</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-emerald-800 font-bold text-sm mb-2">核心数据：</h5>
      <ul class="text-emerald-900 text-sm space-y-1">
        <li>• <strong>2025年收益率39.6%</strong>，6年平均年化22.8%</li>
        <li>• 策略组合：ST股大饼(20%)、北交所大饼(10%)、转债大饼(15%)</li>
        <li>• 仓位控制：等效仓位60-70%，持有现金等价物</li>
        <li>• AI辅助研究，但选择避开主流量化资金的品种</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-emerald-400 pl-3 text-emerald-800 text-sm italic">
      "我始终坚持了不追高热门股，持仓高度分散，以及对高风险品种有严格的仓位控制。" —— 孔曼子
    </blockquote>
  </div>

  <!-- 话题3-5简要 -->
  <div class="grid md:grid-cols-3 gap-4 my-6">
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
      <h4 class="font-black text-blue-800 mb-2">3. 港股私有化套利</h4>
      <p class="text-blue-700 text-sm">中金/信达/东兴并购套利，嘉亨家化要约价33.21元，要约存在不确定性</p>
    </div>
    <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
      <h4 class="font-black text-purple-800 mb-2">4. 房地产置换决策</h4>
      <p class="text-purple-700 text-sm">上海房子置换时机讨论，闵行老破小租售比较高，置换需大量精力研究</p>
    </div>
    <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
      <h4 class="font-black text-cyan-800 mb-2">5. 低风险策略实盘</h4>
      <p class="text-cyan-700 text-sm">可转债多因子轮动净值1.86，铁矿石/豆粕吃贴水策略持续分享</p>
    </div>
  </div>

  <!-- 投资方法论 -->
  <h2 id="j_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    💡 投资方法论精粹
  </h2>

  <!-- 策略卡片组 -->
  <div class="grid md:grid-cols-2 gap-4 my-6">
    <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-black text-teal-800">可转债大饼</h4>
        <span class="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">低-中风险</span>
      </div>
      <p class="text-teal-700 text-sm mb-2"><strong>核心逻辑：</strong>分散持有低价转债，博下修或正股上涨</p>
      <p class="text-teal-600 text-xs">操作：价格<120元、溢价<50%、单标的<2%、总标的>30个</p>
      <p class="text-teal-800 text-xs mt-2 font-bold">代表：孔曼子（年化22.8%）</p>
    </div>
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-black text-blue-800">要约收购套利</h4>
        <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">低风险</span>
      </div>
      <p class="text-blue-700 text-sm mb-2"><strong>核心逻辑：</strong>套利要约价与市价差额，确定性高</p>
      <p class="text-blue-600 text-xs">操作：关注已公告要约、对比价差、注意部分要约风险</p>
      <p class="text-blue-800 text-xs mt-2 font-bold">代表：嘉亨家化（33.21）、瓦轴B股</p>
    </div>
    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-black text-amber-800">期货贴水策略</h4>
        <span class="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">中风险</span>
      </div>
      <p class="text-amber-700 text-sm mb-2"><strong>核心逻辑：</strong>持有贴水期货，滚动展期赚取基差收益</p>
      <p class="text-amber-600 text-xs">操作：选择远期贴水品种、控制仓位、关注基本面</p>
      <p class="text-amber-800 text-xs mt-2 font-bold">品种：铁矿石、豆粕</p>
    </div>
    <div class="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-black text-red-800">ST股摊大饼</h4>
        <span class="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">中-高风险</span>
      </div>
      <p class="text-red-700 text-sm mb-2"><strong>核心逻辑：</strong>分散持有ST股，博重组或摘帽</p>
      <p class="text-red-600 text-xs">操作：分散30+只、单标的<2%、关注摘帽预期</p>
      <p class="text-red-800 text-xs mt-2 font-bold">注意：退市风险，严格止损</p>
    </div>
  </div>

  <!-- 热议标的 -->
  <h2 id="j_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    热议标的清单
  </h2>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">标的</th>
          <th class="px-4 py-3 text-left">类型</th>
          <th class="px-4 py-3 text-left">看多逻辑</th>
          <th class="px-4 py-3 text-left">风险点</th>
          <th class="px-4 py-3 text-center">情绪</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-emerald-50 hover:bg-emerald-100 transition-colors">
          <td class="px-4 py-3 font-bold text-emerald-700">方特(新三板)</td>
          <td class="px-4 py-3 text-sm">新三板</td>
          <td class="px-4 py-3 text-sm text-emerald-700">低估值+基本面好+孔曼子重仓</td>
          <td class="px-4 py-3 text-sm text-red-600">流动性差</td>
          <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">看多</span></td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">闻泰转债</td>
          <td class="px-4 py-3 text-sm">可转债</td>
          <td class="px-4 py-3 text-sm text-emerald-700">112元有博弈价值，低价安全边际</td>
          <td class="px-4 py-3 text-sm text-red-600">行业周期下行</td>
          <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">分歧</span></td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">北证50基金</td>
          <td class="px-4 py-3 text-sm">基金</td>
          <td class="px-4 py-3 text-sm text-emerald-700">政策支持+低估值+估值修复</td>
          <td class="px-4 py-3 text-sm text-red-600">ETF未上市</td>
          <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">看多</span></td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-bold text-red-700">永22转债</td>
          <td class="px-4 py-3 text-sm">可转债</td>
          <td class="px-4 py-3 text-sm text-emerald-700">转股溢价-2%有套利空间</td>
          <td class="px-4 py-3 text-sm text-red-600 font-bold">已强赎，转股压力大</td>
          <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">恐慌</span></td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-bold text-red-700">恒生科技</td>
          <td class="px-4 py-3 text-sm">指数</td>
          <td class="px-4 py-3 text-sm text-emerald-700">估值足够便宜</td>
          <td class="px-4 py-3 text-sm text-red-600 font-bold">持续下跌，反转信号不明</td>
          <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">悲观</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 市场情绪 -->
  <h2 id="j_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    市场情绪观察
  </h2>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
    <div class="flex items-center justify-between mb-3">
      <h4 class="font-black text-amber-800">整体情绪评分</h4>
      <div class="flex items-center">
        <div class="w-32 h-3 bg-slate-200 rounded-full overflow-hidden mr-2">
          <div class="w-[55%] h-full bg-amber-500 rounded-full"></div>
        </div>
        <span class="text-amber-700 font-bold">5.5/10</span>
      </div>
    </div>
    <p class="text-amber-700 text-sm">中性偏谨慎，社区偏向低风险策略</p>
  </div>

  <div class="grid md:grid-cols-2 gap-4 my-6">
    <div class="bg-green-50 border border-green-200 rounded-xl p-5">
      <h4 class="font-black text-green-800 mb-3 flex items-center">
        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
        乐观信号
      </h4>
      <ul class="text-green-700 text-sm space-y-2">
        <li>"这周末给我的感觉今天要千股涨停"</li>
        <li>"人民币资产崛起，汇率已经6.8了"</li>
        <li>北交所机会被多位职业投资人加仓</li>
      </ul>
    </div>
    <div class="bg-red-50 border border-red-200 rounded-xl p-5">
      <h4 class="font-black text-red-800 mb-3 flex items-center">
        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
          <polyline points="17 18 23 18 23 12"></polyline>
        </svg>
        谨慎信号
      </h4>
      <ul class="text-red-700 text-sm space-y-2">
        <li>"清仓投降了，炒股是没有出路的"</li>
        <li>"恒生科技快跌到生活不能自理了"</li>
        <li>"故乡回不去了，普通人的出路在股市吗？"</li>
      </ul>
    </div>
  </div>

  <!-- 风险提示 -->
  <h2 id="j_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    ⚠️ 风险提示
  </h2>

  <div class="space-y-4 my-6">
    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2">⚠️ 可转债强赎风险</h4>
      <p class="text-red-700 text-sm"><strong>教训：</strong>永22转债强赎后持有人被动转股亏损，恒锋工具博弈失败吃10%跌停</p>
      <p class="text-red-600 text-xs mt-2"><strong>应对：</strong>关注强赎计数，提前转股或卖出，避免博弈"不强赎"</p>
    </div>
    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
      <h4 class="text-amber-800 font-bold mb-2">⚠️ 要约收购不确定性</h4>
      <p class="text-amber-700 text-sm"><strong>风险：</strong>要约可能因监管、股价波动等原因"黄掉"</p>
      <p class="text-amber-600 text-xs mt-2"><strong>应对：</strong>确认要约流程走完再参与，计算最坏亏损是否可接受</p>
    </div>
    <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
      <h4 class="text-purple-800 font-bold mb-2">⚠️ ST股退市风险</h4>
      <p class="text-purple-700 text-sm"><strong>教训：</strong>康乐卫士基本面恶化持续下跌</p>
      <p class="text-purple-600 text-xs mt-2"><strong>应对：</strong>高度分散（单标的<2%），关注财务和退市警示</p>
    </div>
  </div>

  <!-- 操作建议 -->
  <h2 id="j_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    本周操作建议
  </h2>

  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5 my-6">
    <ul class="text-teal-800 text-sm space-y-3">
      <li class="flex items-start">
        <span class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white text-xs font-bold">1</span>
        <span><strong>转债：</strong>关注低价转债大饼，规避临期债和强赎风险品种</span>
      </li>
      <li class="flex items-start">
        <span class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white text-xs font-bold">2</span>
        <span><strong>套利：</strong>要约收购需确认确定性后再参与，注意部分要约风险</span>
      </li>
      <li class="flex items-start">
        <span class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white text-xs font-bold">3</span>
        <span><strong>仓位：</strong>保持60-70%仓位，留足现金应对黑天鹅机会</span>
      </li>
      <li class="flex items-start">
        <span class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white text-xs font-bold">4</span>
        <span><strong>心态：</strong>不追高、不恐慌、坚持分散原则</span>
      </li>
    </ul>
  </div>

  <!-- 页脚 -->
  <div class="mt-10 pt-6 border-t border-slate-200 text-slate-500 text-sm">
    <p>报告生成时间：2026-03-12 20:15 | 数据来源：集思录热门讨论</p>
    <p class="text-xs mt-1">免责声明：仅供参考，不构成投资建议</p>
  </div>

</div>
`;
}