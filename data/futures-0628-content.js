// ==========================================
// Futures Content: 2026-06-28
// ==========================================

function renderFuturesContent_0628() {
  return `<div class="prose prose-slate max-w-none">

    <!-- Header -->
    <div class="bg-gradient-to-r from-orange-600 to-red-700 text-white p-6 rounded-xl mb-8">
      <h1 class="text-2xl font-black mb-2">📈 2026-06-28 期货市场分析</h1>
      <p class="text-sm opacity-90">报告日期：2026年6月28日 | 数据来源：东方财富Choice数据、各券商研报</p>
    </div>

    <!-- 价格行情表 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>📊 主要品种价格与涨跌幅</h2>

    <h3 id="sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1. 价格行情总览</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种</th>
            <th class="px-4 py-3 text-left">板块</th>
            <th class="px-4 py-3 text-right">最新价</th>
            <th class="px-4 py-3 text-right">涨跌幅</th>
            <th class="px-4 py-3 text-left">趋势判断</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <!-- 能源化工 -->
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">布伦特原油</td>
            <td class="px-4 py-3 text-slate-700">能源</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">73.74美元/桶</td>
            <td class="px-4 py-3 text-right font-mono text-red-600">-37.7%</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">震荡回落</span></td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">航空煤油</td>
            <td class="px-4 py-3 text-slate-700">能源</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">进口到岸价预计下跌</td>
            <td class="px-4 py-3 text-right font-mono text-red-600">↓</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">下行趋势</span></td>
          </tr>
          <!-- 金属 -->
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">LME铜</td>
            <td class="px-4 py-3 text-slate-700">金属</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">13,587美元/吨</td>
            <td class="px-4 py-3 text-right font-mono text-green-600">↑</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">强势上行</span></td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">LME铝</td>
            <td class="px-4 py-3 text-slate-700">金属</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">3,397.5美元/吨</td>
            <td class="px-4 py-3 text-right font-mono text-red-600">↓</td>
            <td class="px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">高位回调</span></td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">氧化镨钕</td>
            <td class="px-4 py-3 text-slate-700">稀土</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">718,300元/吨</td>
            <td class="px-4 py-3 text-right font-mono text-green-600">+4.12% WoW</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">主动补库</span></td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">氧化镝</td>
            <td class="px-4 py-3 text-slate-700">稀土</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">136万元/吨</td>
            <td class="px-4 py-3 text-right font-mono text-green-600">+2.26% WoW</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">底部回升</span></td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">碳酸锂</td>
            <td class="px-4 py-3 text-slate-700">金属</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">169,000元/吨</td>
            <td class="px-4 py-3 text-right font-mono text-green-600">+1.8%</td>
            <td class="px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">过剩缓解</span></td>
          </tr>
          <!-- 农产品（暂无详细数据，基于宏观推断） -->
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">豆粕</td>
            <td class="px-4 py-3 text-slate-700">农产品</td>
            <td class="px-4 py-3 text-right font-mono text-slate-900">-</td>
            <td class="px-4 py-3 text-right font-mono text-slate-700">-</td>
            <td class="px-4 py-3"><span class="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-bold">震荡</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 品种分析 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>📈 品种分析</h2>

    <!-- 能源化工板块 -->
    <h3 id="sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">能源化工板块</h3>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🛢️</span>布伦特原油：地缘风险溢价消退，油价回归基本面
      </h4>
      <p class="text-orange-900"><strong>趋势判断：</strong>布油期货结算价从5月高点115美元/桶回落至73.74美元/桶（-37.7%），已跌回战前水平。美伊谅解备忘录推动油价回落，若谈判破裂或霍尔木兹海峡封锁，油价可能飙升至100美元。</p>
      <p class="text-orange-900 mt-2"><strong>操作建议：</strong>短期看空，但需密切关注中东局势变化。若油价稳定在75美元以下，航空运输成本压力将显著缓解。</p>
    </div>

    <!-- 金属板块 -->
    <h3 id="sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金属板块</h3>

    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚙️</span>LME铜：AI数据中心+电动车需求爆发
      </h4>
      <p class="text-blue-900"><strong>趋势判断：</strong>铜价处于去库初期，AI数据中心和电动车需求爆发，矿端供应扰动支撑价格。上海库存-23,500吨 WoW至194,300吨，TC Spread -120.82 USD/t，供需紧平衡。</p>
      <p class="text-blue-900 mt-2"><strong>操作建议：</strong>中期看多，关注全球经济复苏进度和矿山供给扰动。</p>
    </div>

    <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚙️</span>稀土（氧化镨钕/氧化镝）：战略储层托底，MLCC需求拉动
      </h4>
      <p class="text-purple-900"><strong>趋势判断：</strong>氧化镨钕+4.12% WoW至718,300元/吨，氧化镝+2.26%至136万元/吨。稀土配额收紧+战略储层，MLCC/磁材需求拉动重稀土价格底部回升。</p>
      <p class="text-purple-900 mt-2"><strong>操作建议：</strong>看多，关注特斯拉无稀土电机技术突破风险。</p>
    </div>

    <!-- 农产品板块 -->
    <h3 id="sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">农产品板块</h3>

    <div class="bg-slate-50 border-l-4 border-slate-400 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🌾</span>整体展望：社零疲软背景下，防御性配置价值凸显
      </h4>
      <p class="text-slate-900"><strong>趋势判断：</strong>必选消费维持正增长（粮油食品+1.9%、日用品+1.6%、中西药品+4.0%），防御性配置价值凸显。但整体社零转负至-0.6%，反映消费需求疲软。</p>
      <p class="text-slate-900 mt-2"><strong>操作建议：</strong>中性偏多，关注粮食安全政策和极端天气对价格的催化。</p>
    </div>

    <!-- 交易机会 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>🎯 交易机会</h2>

    <h3 id="sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做多/做空机会与风险提示</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>做多机会
      </h4>
      <div class="space-y-3 text-green-900">
        <p><strong>1. 铜：</strong>AI数据中心+电动车需求爆发，矿端供应扰动，供需紧平衡。目标价：14,000美元/吨。</p>
        <p><strong>2. 稀土（氧化镨钕/氧化镝）：</strong>战略储层托底，MLCC/磁材需求拉动。目标价：氧化镨钕750,000元/吨。</p>
        <p><strong>3. 碳酸锂：</strong>澳洲矿山减产，储能需求超预期，过剩缓解。目标价：180,000元/吨。</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚠️</span>做空机会/风险提示
      </h4>
      <div class="space-y-3 text-red-900">
        <p><strong>1. 布伦特原油：</strong>若美伊谈判破裂或霍尔木兹海峡封锁，油价可能飙升至100美元。止损位：80美元/桶。</p>
        <p><strong>2. LME铝：</strong>中国产能天花板4500万吨接近，但欧洲能源危机再起可能推升成本。警惕电解铝复产超预期风险。</p>
        <p><strong>3. 碳酸锂：</strong>盐湖提锂成本下探、固态电池延迟可能压制价格。止损位：150,000元/吨。</p>
      </div>
    </div>

  </div>`;
}
