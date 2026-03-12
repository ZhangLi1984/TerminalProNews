// 集思录内容渲染 - 2026-03-12

function renderJisiluContent_0312() {
  return `
<div class="prose prose-slate max-w-none">

  <!-- 标题区 -->
  <div class="mb-8">
    <h1 class="text-3xl font-black text-slate-900 mb-2 flex items-center">
      <span class="w-2 h-10 bg-teal-600 rounded-full mr-4"></span>
      集思录投资洞察
    </h1>
    <p class="text-slate-500 text-sm">2026年3月12日 · 数据来源：集思录热门讨论</p>
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
        <p class="text-teal-700 text-sm">社区整体偏向低风险策略，可转债、期货贴水套利受关注。中概股持续下跌引发抄底讨论，市场情绪谨慎偏乐观。</p>
      </div>
    </div>
  </div>

  <!-- 热门话题 TOP5 -->
  <h2 id="j_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    热门话题 TOP 5
  </h2>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-teal-700 text-white">
        <tr>
          <th class="px-4 py-3 text-left">排名</th>
          <th class="px-4 py-3 text-left">话题</th>
          <th class="px-4 py-3 text-center">热度</th>
          <th class="px-4 py-3 text-left">核心方向</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
          <td class="px-4 py-3 font-black text-teal-700">1</td>
          <td class="px-4 py-3 font-bold">资产配置与投资策略</td>
          <td class="px-4 py-3 text-center">★★★★★</td>
          <td class="px-4 py-3 text-sm">年终总结、量化选股、永久投资组合</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-black text-teal-700">2</td>
          <td class="px-4 py-3 font-bold">可转债与套利策略</td>
          <td class="px-4 py-3 text-center">★★★★☆</td>
          <td class="px-4 py-3 text-sm">可转债多因子、转债性价比对比</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-black text-teal-700">3</td>
          <td class="px-4 py-3 font-bold">期货贴水策略</td>
          <td class="px-4 py-3 text-center">★★★★☆</td>
          <td class="px-4 py-3 text-sm">铁矿石吃贴水、豆粕滚贴水</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-black text-teal-700">4</td>
          <td class="px-4 py-3 font-bold">房产与房贷</td>
          <td class="px-4 py-3 text-center">★★★☆☆</td>
          <td class="px-4 py-3 text-sm">上海房产置换、抵押贷置换按揭</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-black text-teal-700">5</td>
          <td class="px-4 py-3 font-bold">港股/中概股</td>
          <td class="px-4 py-3 text-center">★★★☆☆</td>
          <td class="px-4 py-3 text-sm">恒生科技、中概互联</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 热议标的 -->
  <h2 id="j_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    热议标的清单
  </h2>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">标的/资产</th>
          <th class="px-4 py-3 text-left">类型</th>
          <th class="px-4 py-3 text-center">热度</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">永22转债</td>
          <td class="px-4 py-3">可转债</td>
          <td class="px-4 py-3 text-center">中</td>
          <td class="px-4 py-3 text-sm">尾盘加仓讨论</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">三房转债</td>
          <td class="px-4 py-3">可转债</td>
          <td class="px-4 py-3 text-center">中</td>
          <td class="px-4 py-3 text-sm">性价比对比</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">美锦转债</td>
          <td class="px-4 py-3">可转债</td>
          <td class="px-4 py-3 text-center">中</td>
          <td class="px-4 py-3 text-sm">性价比对比</td>
        </tr>
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3 font-bold text-purple-700">铁矿石</td>
          <td class="px-4 py-3">商品期货</td>
          <td class="px-4 py-3 text-center font-bold text-purple-600">高</td>
          <td class="px-4 py-3 text-sm">吃贴水策略</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">豆粕</td>
          <td class="px-4 py-3">商品期货</td>
          <td class="px-4 py-3 text-center">中</td>
          <td class="px-4 py-3 text-sm">滚贴水实践</td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-bold text-red-700">恒生科技</td>
          <td class="px-4 py-3">指数</td>
          <td class="px-4 py-3 text-center font-bold text-red-600">高</td>
          <td class="px-4 py-3 text-sm">跌幅大，讨论抄底</td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-bold text-red-700">中概互联</td>
          <td class="px-4 py-3">指数</td>
          <td class="px-4 py-3 text-center font-bold text-red-600">高</td>
          <td class="px-4 py-3 text-sm">持续下跌引发关注</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-700">上海房产</td>
          <td class="px-4 py-3">房产</td>
          <td class="px-4 py-3 text-center">中</td>
          <td class="px-4 py-3 text-sm">置换时机讨论</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 低风险策略 -->
  <h2 id="j_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    低风险策略
  </h2>

  <div class="grid md:grid-cols-3 gap-4 my-6">
    <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5">
      <h4 class="font-black text-teal-800 mb-2 flex items-center">
        <span class="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center mr-2 text-white text-xs">1</span>
        可转债多因子
      </h4>
      <p class="text-teal-700 text-sm">实盘记账单持续更新，关注转债性价比对比</p>
    </div>
    <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5">
      <h4 class="font-black text-teal-800 mb-2 flex items-center">
        <span class="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center mr-2 text-white text-xs">2</span>
        期货贴水策略
      </h4>
      <p class="text-teal-700 text-sm">铁矿石吃贴水、豆粕滚贴水，滚动展期获取贴水收益</p>
    </div>
    <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5">
      <h4 class="font-black text-teal-800 mb-2 flex items-center">
        <span class="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center mr-2 text-white text-xs">3</span>
        永久投资组合
      </h4>
      <p class="text-teal-700 text-sm">构建永久组合偿还房贷，资产分散配置降低风险</p>
    </div>
  </div>

  <!-- 资产配置 -->
  <h2 id="j_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    资产配置
  </h2>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2">主流思路：拥抱确定性</h4>
    <ul class="text-blue-900 text-sm space-y-1">
      <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span>2026年展望强调"确定性"资产</span>
      </li>
      <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span>量化选股 + 资产配置双轮驱动</span>
      </li>
      <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span>关注风险控制："抵住诱惑，严控风险"</span>
      </li>
    </ul>
  </div>

  <!-- 情绪观察 -->
  <h2 id="j_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    市场情绪观察
  </h2>

  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">整体情绪：谨慎偏乐观</h3>

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
      </ul>
    </div>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
    <h4 class="font-black text-amber-800 mb-2">风险偏好：中性偏低</h4>
    <p class="text-amber-700 text-sm">社区整体偏向低风险策略，可转债、贴水套利等低风险策略受关注。"抵住诱惑，严控风险"成为共识。</p>
  </div>

  <!-- 争议话题 -->
  <h2 id="j_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    争议话题
  </h2>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">话题</th>
          <th class="px-4 py-3 text-left">多方观点</th>
          <th class="px-4 py-3 text-left">空方观点</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold">中概股/恒生科技</td>
          <td class="px-4 py-3 text-sm text-green-700">跌幅足够大，可以抄底</td>
          <td class="px-4 py-3 text-sm text-red-700">继续下跌，生活不能自理</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold">上海房产置换</td>
          <td class="px-4 py-3 text-sm text-green-700">现在是置换好时机</td>
          <td class="px-4 py-3 text-sm text-red-700">等待更优时机</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold">炒股vs其他投资</td>
          <td class="px-4 py-3 text-sm text-green-700">普通人出路在股市</td>
          <td class="px-4 py-3 text-sm text-red-700">炒股没有出路，清仓投降</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 风险提示 -->
  <h2 id="j_sec7" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    风险提示
  </h2>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2">注意事项</h4>
    <ul class="text-red-900 text-sm space-y-1">
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>中概股风险</strong>：持续下跌风险，需谨慎抄底</span>
      </li>
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>房产流动性</strong>：置换需考虑交易周期和税费</span>
      </li>
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>抵押贷合规</strong>：置换房贷存在政策风险</span>
      </li>
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>期货杠杆</strong>：贴水策略需控制仓位</span>
      </li>
    </ul>
  </div>

  <!-- 页脚 -->
  <div class="mt-10 pt-6 border-t border-slate-200 text-slate-500 text-sm">
    <p>报告生成时间：2026-03-12 19:00 | 数据来源：集思录热门讨论</p>
  </div>

</div>
`;
}