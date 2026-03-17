// ==========================================
// 券商晨报内容模块 - 2026-03-17
// ==========================================

function renderBrokerContent_0317() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600 p-6 my-6 rounded-r-xl">
      <div class="flex items-center mb-3">
        <span class="text-2xl mr-2">📰</span>
        <h2 class="text-xl font-black text-cyan-800">券商晨报买方汇总内参</h2>
      </div>
      <div class="flex items-center gap-4 text-cyan-700 text-sm">
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg>
          2026 年 3 月 17 日
        </span>
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          11 家券商晨会纪要
        </span>
      </div>
    </div>

    <!-- 核心摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>核心摘要（3 分钟速读）
    </h2>

    <!-- 市场共识 -->
    <div id="b_sec1" class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">📊</span>市场共识
      </h3>
      <p class="text-slate-700 leading-relaxed">
        各券商普遍认为 <strong class="text-cyan-600">A 股震荡向上仍是主基调</strong>，科技成长与高股息防御并重。市场成交额维持在 2.4-2.5 万亿元高位，科技股（AI 算力、半导体、通信）持续活跃，油气板块受地缘局势影响波动加大。
      </p>
    </div>

    <!-- 仓位建议 -->
    <div id="b_sec2" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-blue-800 mb-3 flex items-center">
        <span class="mr-2">🎯</span>仓位建议
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg p-4 border border-blue-200">
          <p class="text-blue-600 text-xs font-semibold mb-1">整体仓位</p>
          <p class="text-blue-800 font-black text-2xl">7-8 成</p>
          <p class="text-blue-600 text-xs mt-1">逢低布局</p>
        </div>
        <div class="bg-white rounded-lg p-4 border border-blue-200">
          <p class="text-blue-600 text-xs font-semibold mb-1">风格配置</p>
          <p class="text-blue-800 font-black text-lg">成长 + 价值</p>
          <p class="text-blue-600 text-xs mt-1">均衡配置</p>
        </div>
        <div class="bg-white rounded-lg p-4 border border-blue-200">
          <p class="text-blue-600 text-xs font-semibold mb-1">操作策略</p>
          <p class="text-blue-800 font-black text-lg">不追高</p>
          <p class="text-blue-600 text-xs mt-1">择机逢低</p>
        </div>
      </div>
    </div>

    <!-- 热门赛道 TOP5 -->
    <div id="b_sec3" class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-amber-800 mb-3 flex items-center">
        <span class="mr-2">🔥</span>热门赛道 TOP5
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-amber-100">
            <tr>
              <th class="px-3 py-2 text-left">排名</th>
              <th class="px-3 py-2 text-left">行业</th>
              <th class="px-3 py-2 text-center">推荐次数</th>
              <th class="px-3 py-2 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-200">
            <tr class="hover:bg-amber-50">
              <td class="px-3 py-2"><span class="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">1</span></td>
              <td class="px-3 py-2 font-medium">AI/算力/光模块</td>
              <td class="px-3 py-2 text-center"><span class="text-red-600 font-bold">9 次</span></td>
              <td class="px-3 py-2 text-xs">腾讯云涨价、国产大模型爆发、推理需求激增</td>
            </tr>
            <tr class="hover:bg-amber-50">
              <td class="px-3 py-2"><span class="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">2</span></td>
              <td class="px-3 py-2 font-medium">半导体/集成电路</td>
              <td class="px-3 py-2 text-center"><span class="text-orange-600 font-bold">7 次</span></td>
              <td class="px-3 py-2 text-xs">国产替代加速、出口数据亮眼、周期复苏</td>
            </tr>
            <tr class="hover:bg-amber-50">
              <td class="px-3 py-2"><span class="bg-yellow-500 text-white px-2 py-0.5 rounded text-xs font-bold">3</span></td>
              <td class="px-3 py-2 font-medium">通信设备</td>
              <td class="px-3 py-2 text-center"><span class="text-yellow-700 font-bold">6 次</span></td>
              <td class="px-3 py-2 text-xs">5.5G/6G 建设、卫星互联网、AI 算力驱动</td>
            </tr>
            <tr class="hover:bg-amber-50">
              <td class="px-3 py-2"><span class="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">4</span></td>
              <td class="px-3 py-2 font-medium">电力设备/新能源</td>
              <td class="px-3 py-2 text-center"><span class="text-green-700 font-bold">5 次</span></td>
              <td class="px-3 py-2 text-xs">宁德时代业绩高增、储能需求旺盛</td>
            </tr>
            <tr class="hover:bg-amber-50">
              <td class="px-3 py-2"><span class="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">5</span></td>
              <td class="px-3 py-2 font-medium">煤炭/高股息</td>
              <td class="px-3 py-2 text-center"><span class="text-blue-700 font-bold">4 次</span></td>
              <td class="px-3 py-2 text-xs">供给紧平衡、分红稳健、防御属性</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 金股 TOP10 -->
    <div id="b_sec4" class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-purple-800 mb-3 flex items-center">
        <span class="mr-2">💎</span>金股 TOP10
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-purple-100">
            <tr>
              <th class="px-3 py-2 text-left">排名</th>
              <th class="px-3 py-2 text-left">股票</th>
              <th class="px-3 py-2 text-left">代码</th>
              <th class="px-3 py-2 text-center">推荐次数</th>
              <th class="px-3 py-2 text-left">推荐券商</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-purple-200">
            <tr class="hover:bg-purple-50">
              <td class="px-3 py-2"><span class="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">1</span></td>
              <td class="px-3 py-2 font-bold text-purple-800">宁德时代</td>
              <td class="px-3 py-2 text-xs">300750</td>
              <td class="px-3 py-2 text-center"><span class="text-red-600 font-bold">3</span></td>
              <td class="px-3 py-2 text-xs">中银、开源、东吴</td>
            </tr>
            <tr class="hover:bg-purple-50">
              <td class="px-3 py-2"><span class="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">2</span></td>
              <td class="px-3 py-2 font-bold text-purple-800">老铺黄金</td>
              <td class="px-3 py-2 text-xs">06181.HK</td>
              <td class="px-3 py-2 text-center"><span class="text-orange-600 font-bold">2</span></td>
              <td class="px-3 py-2 text-xs">东吴、开源</td>
            </tr>
            <tr class="hover:bg-purple-50">
              <td class="px-3 py-2"><span class="bg-yellow-500 text-white px-2 py-0.5 rounded text-xs font-bold">3</span></td>
              <td class="px-3 py-2 font-bold text-purple-800">上美股份</td>
              <td class="px-3 py-2 text-xs">02145.HK</td>
              <td class="px-3 py-2 text-center"><span class="text-yellow-700 font-bold">2</span></td>
              <td class="px-3 py-2 text-xs">第一创业、东吴</td>
            </tr>
            <tr class="hover:bg-purple-50">
              <td class="px-3 py-2"><span class="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">4</span></td>
              <td class="px-3 py-2 font-bold text-purple-800">同花顺</td>
              <td class="px-3 py-2 text-xs">300033</td>
              <td class="px-3 py-2 text-center"><span class="text-green-700 font-bold">2</span></td>
              <td class="px-3 py-2 text-xs">开源、中银</td>
            </tr>
            <tr class="hover:bg-purple-50">
              <td class="px-3 py-2"><span class="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">5</span></td>
              <td class="px-3 py-2 font-bold text-purple-800">中信海直</td>
              <td class="px-3 py-2 text-xs">000099</td>
              <td class="px-3 py-2 text-center"><span class="text-blue-700 font-bold">1</span></td>
              <td class="px-3 py-2 text-xs">中银</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 宏观策略 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>宏观策略
    </h2>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">券商策略汇总</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">大盘判断</th>
            <th class="px-4 py-3 text-center">仓位建议</th>
            <th class="px-4 py-3 text-left">风格偏好</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">第一创业</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">震荡攀升</span></td>
            <td class="px-4 py-3 text-center">7 成</td>
            <td class="px-4 py-3 text-xs">科技 + 消费</td>
            <td class="px-4 py-3 text-xs">出口数据超预期，覆铜板涨价利好 PCB</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">东兴证券</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">反弹延续</span></td>
            <td class="px-4 py-3 text-center">7-8 成</td>
            <td class="px-4 py-3 text-xs">均衡配置</td>
            <td class="px-4 py-3 text-xs">外贸数据亮眼，私募备案大增</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">国新证券</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">震荡向上</span></td>
            <td class="px-4 py-3 text-center">7 成</td>
            <td class="px-4 py-3 text-xs">成长优先</td>
            <td class="px-4 py-3 text-xs">前 2 月出口 +21.8%，提振做多热情</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">万联证券</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">结构性机会</span></td>
            <td class="px-4 py-3 text-center">6-7 成</td>
            <td class="px-4 py-3 text-xs">新质生产力</td>
            <td class="px-4 py-3 text-xs">政府工作报告定调，AI/低空经济/量子科技</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">中银证券</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">温和向上</span></td>
            <td class="px-4 py-3 text-center">7-8 成</td>
            <td class="px-4 py-3 text-xs">成长 + 价值</td>
            <td class="px-4 py-3 text-xs">创业板新标准利好新消费，宁德业绩高增</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">英大证券</td>
            <td class="px-4 py-3"><span class="text-green-600 font-medium">震荡向上</span></td>
            <td class="px-4 py-3 text-center">7 成</td>
            <td class="px-4 py-3 text-xs">科技 + 油气</td>
            <td class="px-4 py-3 text-xs">AI 算力、半导体、人形机器人逢低布局</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 行业排名 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>行业排名
    </h2>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业推荐榜</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border-2 border-red-200">
        <div class="flex items-center mb-2">
          <span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP1</span>
          <span class="text-red-800 font-bold">AI/算力/光模块</span>
        </div>
        <p class="text-red-700 text-xs mb-2">推荐次数：9 次</p>
        <p class="text-red-600 text-xs">腾讯云涨价 400%、国产大模型调用量全球第一、推理需求爆发</p>
      </div>

      <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border-2 border-orange-200">
        <div class="flex items-center mb-2">
          <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP2</span>
          <span class="text-orange-800 font-bold">半导体/集成电路</span>
        </div>
        <p class="text-orange-700 text-xs mb-2">推荐次数：7 次</p>
        <p class="text-orange-600 text-xs">出口 +72.6%、国产替代加速、周期复苏</p>
      </div>

      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 border-2 border-amber-200">
        <div class="flex items-center mb-2">
          <span class="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP3</span>
          <span class="text-amber-800 font-bold">通信设备</span>
        </div>
        <p class="text-amber-700 text-xs mb-2">推荐次数：6 次</p>
        <p class="text-amber-600 text-xs">5.5G/6G 建设、卫星互联网、CPO 技术突破</p>
      </div>

      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
        <div class="flex items-center mb-2">
          <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP4</span>
          <span class="text-green-800 font-bold">电力设备/新能源</span>
        </div>
        <p class="text-green-700 text-xs mb-2">推荐次数：5 次</p>
        <p class="text-green-600 text-xs">宁德时代净利 +42%、储能销量 +29%、光伏底部企稳</p>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
        <div class="flex items-center mb-2">
          <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP5</span>
          <span class="text-blue-800 font-bold">煤炭/高股息</span>
        </div>
        <p class="text-blue-700 text-xs mb-2">推荐次数：4 次</p>
        <p class="text-blue-600 text-xs">供给紧平衡、煤价有上涨空间、分红稳健</p>
      </div>

      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
        <div class="flex items-center mb-2">
          <span class="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOP6</span>
          <span class="text-purple-800 font-bold">消费电子</span>
        </div>
        <p class="text-purple-700 text-xs mb-2">推荐次数：4 次</p>
        <p class="text-purple-600 text-xs">AI 手机/PC 换机潮、钛合金/折叠屏渗透</p>
      </div>
    </div>

    <!-- 金股组合 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>金股组合
    </h2>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">多家推荐个股</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-800">宁德时代</td>
            <td class="px-4 py-3 text-xs">300750</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">3</span></td>
            <td class="px-4 py-3 text-xs">中银、开源、东吴</td>
            <td class="px-4 py-3 text-xs">2025 年净利 722 亿 (+42%)，全球市占率 39.2% 连续 9 年第一</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-800">老铺黄金</td>
            <td class="px-4 py-3 text-xs">06181.HK</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
            <td class="px-4 py-3 text-xs">东吴、开源</td>
            <td class="px-4 py-3 text-xs">2025 年净利 +233%~240%，古法金高端赛道龙头</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-800">上美股份</td>
            <td class="px-4 py-3 text-xs">02145.HK</td>
            <td class="px-4 py-3 text-center"><span class="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
            <td class="px-4 py-3 text-xs">第一创业、东吴</td>
            <td class="px-4 py-3 text-xs">2025 年净利 +42%~44%，韩束 + 多品牌孵化战略</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-800">同花顺</td>
            <td class="px-4 py-3 text-xs">300033</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
            <td class="px-4 py-3 text-xs">开源、中银</td>
            <td class="px-4 py-3 text-xs">2025 年净利 +76%，广告业务 +71%，一季报高增</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">中银证券金股</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-cyan-900 text-white">
          <tr>
            <th class="px-3 py-2 text-left">股票代码</th>
            <th class="px-3 py-2 text-left">股票名称</th>
            <th class="px-3 py-2 text-left">行业</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100 text-sm">
          <tr><td class="px-3 py-2">0119.HK</td><td class="px-3 py-2">保利置业集团</td><td class="px-3 py-2">房地产</td></tr>
          <tr><td class="px-3 py-2">000099.SZ</td><td class="px-3 py-2">中信海直</td><td class="px-3 py-2">交通运输</td></tr>
          <tr><td class="px-3 py-2">601872.SH</td><td class="px-3 py-2">招商轮船</td><td class="px-3 py-2">交通运输</td></tr>
          <tr><td class="px-3 py-2">600352.SH</td><td class="px-3 py-2">浙江龙盛</td><td class="px-3 py-2">基础化工</td></tr>
          <tr><td class="px-3 py-2">002409.SZ</td><td class="px-3 py-2">雅克科技</td><td class="px-3 py-2">电子</td></tr>
          <tr><td class="px-3 py-2">002709.SZ</td><td class="px-3 py-2">天赐材料</td><td class="px-3 py-2">电力设备</td></tr>
          <tr><td class="px-3 py-2">300760.SZ</td><td class="px-3 py-2">迈瑞医疗</td><td class="px-3 py-2">医药生物</td></tr>
          <tr><td class="px-3 py-2">605338.SH</td><td class="px-3 py-2">巴比食品</td><td class="px-3 py-2">食品饮料</td></tr>
          <tr><td class="px-3 py-2">1579.HK</td><td class="px-3 py-2">颐海国际</td><td class="px-3 py-2">食品饮料</td></tr>
          <tr><td class="px-3 py-2">601888.SH</td><td class="px-3 py-2">中国中免</td><td class="px-3 py-2">商贸零售</td></tr>
          <tr><td class="px-3 py-2">689009.SH</td><td class="px-3 py-2">九号公司-WD</td><td class="px-3 py-2">汽车</td></tr>
          <tr><td class="px-3 py-2">688630.SH</td><td class="px-3 py-2">芯碁微装</td><td class="px-3 py-2">电子</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">东兴证券金股</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-cyan-900 text-white">
          <tr>
            <th class="px-3 py-2 text-left">股票代码</th>
            <th class="px-3 py-2 text-left">股票名称</th>
            <th class="px-3 py-2 text-left">行业</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100 text-sm">
          <tr><td class="px-3 py-2">002142.SZ</td><td class="px-3 py-2">宁波银行</td><td class="px-3 py-2">银行</td></tr>
          <tr><td class="px-3 py-2">002392.SZ</td><td class="px-3 py-2">北京利尔</td><td class="px-3 py-2">建筑材料</td></tr>
          <tr><td class="px-3 py-2">002436.SZ</td><td class="px-3 py-2">兴森科技</td><td class="px-3 py-2">电子</td></tr>
          <tr><td class="px-3 py-2">002714.SZ</td><td class="px-3 py-2">牧原股份</td><td class="px-3 py-2">农林牧渔</td></tr>
          <tr><td class="px-3 py-2">002738.SZ</td><td class="px-3 py-2">中矿资源</td><td class="px-3 py-2">有色金属</td></tr>
          <tr><td class="px-3 py-2">002991.SZ</td><td class="px-3 py-2">甘源食品</td><td class="px-3 py-2">食品饮料</td></tr>
          <tr><td class="px-3 py-2">300627.SZ</td><td class="px-3 py-2">华测导航</td><td class="px-3 py-2">计算机</td></tr>
          <tr><td class="px-3 py-2">300810.SZ</td><td class="px-3 py-2">中科海讯</td><td class="px-3 py-2">国防军工</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 详细观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>详细观点
    </h2>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">AI/算力</h3>

    <div class="space-y-4 my-4">
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <p class="text-blue-800 font-bold mb-2">第一创业：甲骨文业绩超预期，缓解 AI 投资过度担忧</p>
        <p class="text-blue-700 text-sm">利好 AI 软硬件产业链，国产大模型 2 月 token 用量首超美国</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <p class="text-blue-800 font-bold mb-2">开源证券：腾讯云涨价 400%，AI 云 IAAS 进入涨价周期</p>
        <p class="text-blue-700 text-sm">推荐 AIDC、算力租赁、CDN，核心受益标的：AIDC 机房、液冷、供电</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <p class="text-blue-800 font-bold mb-2">英大证券：光通信模块处于高景气周期</p>
        <p class="text-blue-700 text-sm">AI 算力、数据中心升级是核心驱动力</p>
      </div>
    </div>

    <h3 id="b_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">半导体</h3>

    <div class="space-y-4 my-4">
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
        <p class="text-purple-800 font-bold mb-2">第一创业：覆铜板龙头企业建滔集团第三次涨价</p>
        <p class="text-purple-700 text-sm">看好 PCB 全产业链高景气</p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
        <p class="text-purple-800 font-bold mb-2">国新证券：半导体板块上涨，国产替代进入不可逆加速通道</p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
        <p class="text-purple-800 font-bold mb-2">开源证券：半导体长期向好逻辑没变</p>
        <p class="text-purple-700 text-sm">自主可控是长期必然趋势</p>
      </div>
    </div>

    <h3 id="b_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">通信设备</h3>

    <div class="space-y-4 my-4">
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
        <p class="text-green-800 font-bold mb-2">第一创业：通信行业涨幅居前，5.5G/6G 建设持续推进</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
        <p class="text-green-800 font-bold mb-2">万联证券：光通信作为算力产业链核心环节持续受益</p>
      </div>
    </div>

    <h3 id="b_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新能源</h3>

    <div class="space-y-4 my-4">
      <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
        <p class="text-emerald-800 font-bold mb-2">中银证券：宁德时代 2025 年净利 722 亿 (+42%)</p>
        <p class="text-emerald-700 text-sm">储能电池销量 +29%，全球市占率 39.2% 连续 9 年第一</p>
      </div>
      <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
        <p class="text-emerald-800 font-bold mb-2">山西证券：光伏产业链上游价格下降，组件价格持平</p>
        <p class="text-emerald-700 text-sm">关注海博思创、阳光电源</p>
      </div>
    </div>

    <h3 id="b_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">煤炭/高股息</h3>

    <div class="space-y-4 my-4">
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <p class="text-amber-800 font-bold mb-2">山西证券：煤价仍有上涨空间</p>
        <p class="text-amber-700 text-sm">推荐兖矿能源、广汇能源</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <p class="text-amber-800 font-bold mb-2">国新证券：煤炭板块涨幅居前，高油价下煤炭替代需求增加</p>
      </div>
    </div>

    <h3 id="b_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">消费/医药</h3>

    <div class="space-y-4 my-4">
      <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-xl">
        <p class="text-pink-800 font-bold mb-2">东吴证券：重庆啤酒 2025 年净利 +10%，维持高分红政策</p>
      </div>
      <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-xl">
        <p class="text-pink-800 font-bold mb-2">开源证券：可孚医疗 2025 年净利 +19%，深耕 + 出海 + 授权驱动成长</p>
      </div>
      <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-xl">
        <p class="text-pink-800 font-bold mb-2">东吴证券：百诚医药创新药进入收获期，仿制药 CRO/CDMO 困境反转</p>
      </div>
    </div>

    <!-- 投资策略 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>投资策略
    </h2>

    <h3 id="b_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">配置建议</h3>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 text-center border-2 border-red-200">
        <p class="text-red-600 text-xs font-semibold mb-1">科技成长</p>
        <p class="text-red-800 font-black text-3xl">40%</p>
        <p class="text-red-600 text-xs mt-1">AI 算力、半导体、通信、机器人</p>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border-2 border-blue-200">
        <p class="text-blue-600 text-xs font-semibold mb-1">高股息防御</p>
        <p class="text-blue-800 font-black text-3xl">30%</p>
        <p class="text-blue-600 text-xs mt-1">煤炭、油气、银行、电力</p>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border-2 border-green-200">
        <p class="text-green-600 text-xs font-semibold mb-1">消费复苏</p>
        <p class="text-green-800 font-black text-3xl">20%</p>
        <p class="text-green-600 text-xs mt-1">食品饮料、黄金珠宝、免税</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border-2 border-purple-200">
        <p class="text-purple-600 text-xs font-semibold mb-1">主题投资</p>
        <p class="text-purple-800 font-black text-3xl">10%</p>
        <p class="text-purple-600 text-xs mt-1">低空经济、量子科技、商业航天</p>
      </div>
    </div>

    <h3 id="b_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">重点关注</h3>

    <div class="space-y-3 my-4">
      <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
        <p class="text-slate-800 font-bold mb-1">1. AI 算力产业链</p>
        <p class="text-slate-600 text-sm">腾讯云涨价打开长期空间，AIDC、算力租赁、光模块核心受益</p>
      </div>
      <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
        <p class="text-slate-800 font-bold mb-1">2. 半导体国产替代</p>
        <p class="text-slate-600 text-sm">出口数据亮眼，设备/材料/制造环节直接受益</p>
      </div>
      <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
        <p class="text-slate-800 font-bold mb-1">3. 宁德时代产业链</p>
        <p class="text-slate-600 text-sm">业绩高增验证行业景气度，储能是第二增长曲线</p>
      </div>
      <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
        <p class="text-slate-800 font-bold mb-1">4. 高股息资产</p>
        <p class="text-slate-600 text-sm">地缘局势不稳背景下，油气、煤炭防御属性凸显</p>
      </div>
    </div>

    <h3 id="b_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">风险提示</h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <ul class="space-y-2 text-red-900 text-sm">
        <li><strong>1.</strong> 地缘政治冲突加剧（美伊局势）</li>
        <li><strong>2.</strong> 国内经济复苏不及预期</li>
        <li><strong>3.</strong> 政策落地效果不及预期</li>
        <li><strong>4.</strong> 海外市场波动风险</li>
        <li><strong>5.</strong> AI 产业发展不及预期</li>
      </ul>
    </div>

    <div class="mt-8 pt-6 border-t border-slate-200 text-center text-slate-500 text-xs">
      <p>数据来源：第一创业、东兴、国新、万联、东海、中银、东吴、英大、华源、开源、山西等 11 家券商晨会纪要</p>
      <p class="mt-2">免责声明：本报告仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
    </div>

  </div>`;
}
