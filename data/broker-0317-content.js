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
        各券商普遍认为 <strong class="text-slate-900">A 股震荡向上仍是主基调</strong>，科技成长与高股息防御并重。
        市场成交额维持在 <strong class="text-red-600">2.4-2.5 万亿元</strong> 高位，科技股（AI 算力、半导体、通信）持续活跃，
        油气板块受地缘局势影响波动加大。
      </p>
    </div>

    <!-- 仓位建议 -->
    <div id="b_sec2" class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-green-800 mb-3 flex items-center">
        <span class="mr-2">💼</span>仓位建议
      </h3>
      <ul class="space-y-2 text-green-900">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>整体仓位：</strong>建议维持 <strong class="text-green-700">7-8 成仓位</strong>，逢低布局</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>风格配置：</strong>成长（科技）+ 价值（高股息）均衡配置</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>操作策略：</strong>不追高，择机逢低布局</span>
        </li>
      </ul>
    </div>

    <!-- 热门赛道 TOP5 -->
    <div id="b_sec3" class="my-6">
      <h3 id="b_sec3" class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">🔥</span>热门赛道 TOP5
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            <tr>
              <th class="px-4 py-3 text-center">排名</th>
              <th class="px-4 py-3 text-left">行业</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">1</span></td>
              <td class="px-4 py-3 font-bold text-red-900">AI/算力/光模块</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">9 次</span></td>
              <td class="px-4 py-3 text-sm text-slate-700">腾讯云涨价、国产大模型爆发、推理需求激增</td>
            </tr>
            <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">2</span></td>
              <td class="px-4 py-3 font-bold text-orange-900">半导体/集成电路</td>
              <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">7 次</span></td>
              <td class="px-4 py-3 text-sm text-slate-700">国产替代加速、出口数据亮眼、周期复苏</td>
            </tr>
            <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">3</span></td>
              <td class="px-4 py-3 font-bold text-amber-900">通信设备</td>
              <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">6 次</span></td>
              <td class="px-4 py-3 text-sm text-slate-700">5.5G/6G 建设、卫星互联网、AI 算力驱动</td>
            </tr>
            <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-yellow-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">4</span></td>
              <td class="px-4 py-3 font-bold text-yellow-900">电力设备/新能源</td>
              <td class="px-4 py-3 text-center"><span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">5 次</span></td>
              <td class="px-4 py-3 text-sm text-slate-700">宁德时代业绩高增、储能需求旺盛</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">5</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">煤炭/高股息</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">4 次</span></td>
              <td class="px-4 py-3 text-sm text-slate-700">供给紧平衡、分红稳健、防御属性</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 金股 TOP10 -->
    <div id="b_sec4" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">⭐</span>金股 TOP10
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th class="px-4 py-3 text-center">排名</th>
              <th class="px-4 py-3 text-left">股票</th>
              <th class="px-4 py-3 text-center">代码</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">推荐券商</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-purple-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">1</span></td>
              <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300750</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">3</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银、开源、东吴</td>
              <td class="px-4 py-3 text-sm text-slate-700">2025 年净利 +42%，全球市占率 39.2%</td>
            </tr>
            <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">2</span></td>
              <td class="px-4 py-3 font-bold text-amber-900">老铺黄金</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">06181.HK</td>
              <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东吴、开源</td>
              <td class="px-4 py-3 text-sm text-slate-700">古法金龙头，净利 +233%~240%</td>
            </tr>
            <tr class="bg-pink-50 hover:bg-pink-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-pink-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">3</span></td>
              <td class="px-4 py-3 font-bold text-pink-900">上美股份</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">02145.HK</td>
              <td class="px-4 py-3 text-center"><span class="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">第一创业、东吴</td>
              <td class="px-4 py-3 text-sm text-slate-700">多品牌战略，净利 +42%~44%</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-blue-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-sm">4</span></td>
              <td class="px-4 py-3 font-bold text-blue-900">同花顺</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300033</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">开源、中银</td>
              <td class="px-4 py-3 text-sm text-slate-700">市场交投活跃，广告业务 +71%</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">5</td>
              <td class="px-4 py-3 font-medium text-slate-900">中信海直</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">000099</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-sm text-slate-700">低空经济核心标的</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">6</td>
              <td class="px-4 py-3 font-medium text-slate-900">迈瑞医疗</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300760</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-sm text-slate-700">医疗器械龙头</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">7</td>
              <td class="px-4 py-3 font-medium text-slate-900">中国中免</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">601888</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-sm text-slate-700">免税龙头，消费复苏</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">8</td>
              <td class="px-4 py-3 font-medium text-slate-900">宁波银行</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">002142</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东兴</td>
              <td class="px-4 py-3 text-sm text-slate-700">银行优质标的</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">9</td>
              <td class="px-4 py-3 font-medium text-slate-900">牧原股份</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">002714</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东兴</td>
              <td class="px-4 py-3 text-sm text-slate-700">生猪养殖龙头</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 text-center">10</td>
              <td class="px-4 py-3 font-medium text-slate-900">兴森科技</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">002436</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东兴</td>
              <td class="px-4 py-3 text-sm text-slate-700">PCB/半导体测试</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 宏观策略汇总 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>宏观策略汇总
    </h2>

    <div id="b_sec5" class="overflow-x-auto my-6">
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
            <td class="px-4 py-3 font-bold text-cyan-700">第一创业</td>
            <td class="px-4 py-3 text-green-600">震荡攀升</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">科技 + 消费</td>
            <td class="px-4 py-3 text-sm">出口数据超预期，覆铜板涨价利好 PCB</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">东兴证券</td>
            <td class="px-4 py-3 text-green-600">反弹延续</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7-8 成</span></td>
            <td class="px-4 py-3 text-sm">均衡配置</td>
            <td class="px-4 py-3 text-sm">外贸数据亮眼，私募备案大增</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">国新证券</td>
            <td class="px-4 py-3 text-green-600">震荡向上</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">成长优先</td>
            <td class="px-4 py-3 text-sm">前 2 月出口 +21.8%，提振做多热情</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">万联证券</td>
            <td class="px-4 py-3 text-blue-600">结构性机会</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">6-7 成</span></td>
            <td class="px-4 py-3 text-sm">新质生产力</td>
            <td class="px-4 py-3 text-sm">政府工作报告定调，AI/低空经济/量子科技</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">东海证券</td>
            <td class="px-4 py-3 text-green-600">震荡盘升</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">科技 + 高股息</td>
            <td class="px-4 py-3 text-sm">创业板改革利好，出口开门红</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">中银证券</td>
            <td class="px-4 py-3 text-green-600">温和向上</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7-8 成</span></td>
            <td class="px-4 py-3 text-sm">成长 + 价值</td>
            <td class="px-4 py-3 text-sm">创业板新标准利好新消费，宁德业绩高增</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">东吴证券</td>
            <td class="px-4 py-3 text-blue-600">波动中向上</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">地缘主题</td>
            <td class="px-4 py-3 text-sm">油价波动，关注黄金、原油</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">英大证券</td>
            <td class="px-4 py-3 text-green-600">震荡向上</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">科技 + 油气</td>
            <td class="px-4 py-3 text-sm">AI 算力、半导体、人形机器人逢低布局</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">华源证券</td>
            <td class="px-4 py-3 text-slate-600">债市震荡</td>
            <td class="px-4 py-3 text-center text-slate-400">-</td>
            <td class="px-4 py-3 text-sm">REITs 分化</td>
            <td class="px-4 py-3 text-sm">数据中心 REITs 受益 AI 算力</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">开源证券</td>
            <td class="px-4 py-3 text-slate-600">债市谨慎</td>
            <td class="px-4 py-3 text-center text-slate-400">-</td>
            <td class="px-4 py-3 text-sm">科技成长</td>
            <td class="px-4 py-3 text-sm">出口超预期，长债收益率 2-3% 区间</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-cyan-700">山西证券</td>
            <td class="px-4 py-3 text-blue-600">结构性行情</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">7 成</span></td>
            <td class="px-4 py-3 text-sm">煤炭 + 机械</td>
            <td class="px-4 py-3 text-sm">煤价有上涨空间，设备更新需求</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 热门行业推荐榜 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>热门行业推荐榜
    </h2>

    <div id="b_sec6" class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">主要逻辑</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">AI/算力/光模块</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">9 次</span></td>
            <td class="px-4 py-3 text-sm">腾讯云涨价 400%、国产大模型调用量全球第一、推理需求爆发</td>
            <td class="px-4 py-3 text-xs text-slate-600">第一创业、国新、万联、东海、中银、东吴、英大、开源、山西</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">半导体/集成电路</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">7 次</span></td>
            <td class="px-4 py-3 text-sm">出口 +72.6%、国产替代加速、周期复苏</td>
            <td class="px-4 py-3 text-xs text-slate-600">第一创业、国新、万联、东海、中银、英大、开源</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">通信设备</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">6 次</span></td>
            <td class="px-4 py-3 text-sm">5.5G/6G 建设、卫星互联网、CPO 技术突破</td>
            <td class="px-4 py-3 text-xs text-slate-600">第一创业、国新、万联、东海、英大、开源</td>
          </tr>
          <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <td class="px-4 py-3 font-bold text-yellow-900">电力设备/新能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">5 次</span></td>
            <td class="px-4 py-3 text-sm">宁德时代净利 +42%、储能销量 +29%、光伏底部企稳</td>
            <td class="px-4 py-3 text-xs text-slate-600">东兴、中银、东吴、开源、山西</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">煤炭/高股息</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white px-3 py-1 rounded-full text-xs font-bold">4 次</span></td>
            <td class="px-4 py-3 text-sm">供给紧平衡、煤价有上涨空间、分红稳健</td>
            <td class="px-4 py-3 text-xs text-slate-600">国新、英大、东吴、山西</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">消费电子</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">4 次</span></td>
            <td class="px-4 py-3 text-sm">AI 手机/PC 换机潮、钛合金/折叠屏渗透</td>
            <td class="px-4 py-3 text-xs text-slate-600">第一创业、国新、万联、开源</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">食品饮料</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">4 次</span></td>
            <td class="px-4 py-3 text-sm">消费复苏、以旧换新政策、白酒企稳</td>
            <td class="px-4 py-3 text-xs text-slate-600">第一创业、东海、万联、东吴</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">黄金珠宝</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-sm">金价上涨、古法金赛道高景气</td>
            <td class="px-4 py-3 text-xs text-slate-600">东吴、中银、开源</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">机械设备</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-sm">挖掘机出口 +37%、人形机器人产业化</td>
            <td class="px-4 py-3 text-xs text-slate-600">东海、万联、山西</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">医药生物</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-sm">创新药收获期、医疗器械国产替代</td>
            <td class="px-4 py-3 text-xs text-slate-600">中银、开源、山西</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 券商金股组合 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>券商金股组合
    </h2>

    <!-- 被多家券商同时推荐的个股 -->
    <div id="b_sec7" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">⭐</span>被多家券商同时推荐的个股
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-red-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票</th>
              <th class="px-4 py-3 text-center">代码</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">推荐券商</th>
              <th class="px-4 py-3 text-center">评级</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300750</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">3</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银、开源、东吴</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">2025 年净利 722 亿 (+42%)，全球市占率 39.2% 连续 9 年第一</td>
            </tr>
            <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
              <td class="px-4 py-3 font-bold text-amber-900">老铺黄金</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">06181.HK</td>
              <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东吴、开源</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">2025 年净利 +233%~240%，古法金高端赛道龙头</td>
            </tr>
            <tr class="bg-pink-50 hover:bg-pink-100 transition-colors">
              <td class="px-4 py-3 font-bold text-pink-900">上美股份</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">02145.HK</td>
              <td class="px-4 py-3 text-center"><span class="bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">第一创业、东吴</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">2025 年净利 +42%~44%，韩束 + 多品牌孵化战略</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">同花顺</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300033</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">2</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">开源、中银</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">2025 年净利 +76%，广告业务 +71%，一季报高增</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">中信海直</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">000099</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">低空经济核心标的，通航运营龙头</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">迈瑞医疗</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">300760</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">医疗器械国产替代，海外扩张</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">中国中免</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">601888</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">免税龙头，入境消费政策利好</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">九号公司</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">689009</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">中银</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">智能短交通龙头，全球化扩张</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">宁波银行</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">002142</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东兴</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">银行优质标的，资产质量优异</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-3 font-bold text-slate-900">牧原股份</td>
              <td class="px-4 py-3 text-center text-sm text-slate-600">002714</td>
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">1</span></td>
              <td class="px-4 py-3 text-sm text-slate-600">东兴</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">买入</span></td>
              <td class="px-4 py-3 text-sm">生猪养殖龙头，周期向上</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 中银证券 3 月金股组合 -->
    <div id="b_sec8" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">🏦</span>中银证券 3 月金股组合
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-slate-800 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票代码</th>
              <th class="px-4 py-3 text-left">股票名称</th>
              <th class="px-4 py-3 text-left">行业</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">0119.HK</td><td class="px-4 py-3 font-medium">保利置业集团</td><td class="px-4 py-3 text-sm text-slate-600">房地产</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">000099.SZ</td><td class="px-4 py-3 font-medium">中信海直</td><td class="px-4 py-3 text-sm text-slate-600">交通运输</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">601872.SH</td><td class="px-4 py-3 font-medium">招商轮船</td><td class="px-4 py-3 text-sm text-slate-600">交通运输</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">600352.SH</td><td class="px-4 py-3 font-medium">浙江龙盛</td><td class="px-4 py-3 text-sm text-slate-600">基础化工</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002409.SZ</td><td class="px-4 py-3 font-medium">雅克科技</td><td class="px-4 py-3 text-sm text-slate-600">电子</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002709.SZ</td><td class="px-4 py-3 font-medium">天赐材料</td><td class="px-4 py-3 text-sm text-slate-600">电力设备</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">300760.SZ</td><td class="px-4 py-3 font-medium">迈瑞医疗</td><td class="px-4 py-3 text-sm text-slate-600">医药生物</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">605338.SH</td><td class="px-4 py-3 font-medium">巴比食品</td><td class="px-4 py-3 text-sm text-slate-600">食品饮料</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">1579.HK</td><td class="px-4 py-3 font-medium">颐海国际</td><td class="px-4 py-3 text-sm text-slate-600">食品饮料</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">601888.SH</td><td class="px-4 py-3 font-medium">中国中免</td><td class="px-4 py-3 text-sm text-slate-600">商贸零售</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">689009.SH</td><td class="px-4 py-3 font-medium">九号公司-WD</td><td class="px-4 py-3 text-sm text-slate-600">汽车</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">688630.SH</td><td class="px-4 py-3 font-medium">芯碁微装</td><td class="px-4 py-3 text-sm text-slate-600">电子</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 东兴证券 3 月金股组合 -->
    <div id="b_sec9" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">🏦</span>东兴证券 3 月金股组合
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-slate-800 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票代码</th>
              <th class="px-4 py-3 text-left">股票名称</th>
              <th class="px-4 py-3 text-left">行业</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002142.SZ</td><td class="px-4 py-3 font-medium">宁波银行</td><td class="px-4 py-3 text-sm text-slate-600">银行</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002392.SZ</td><td class="px-4 py-3 font-medium">北京利尔</td><td class="px-4 py-3 text-sm text-slate-600">建筑材料</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002436.SZ</td><td class="px-4 py-3 font-medium">兴森科技</td><td class="px-4 py-3 text-sm text-slate-600">电子</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002714.SZ</td><td class="px-4 py-3 font-medium">牧原股份</td><td class="px-4 py-3 text-sm text-slate-600">农林牧渔</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002991.SZ</td><td class="px-4 py-3 font-medium">中矿资源</td><td class="px-4 py-3 text-sm text-slate-600">有色金属</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">002991.SZ</td><td class="px-4 py-3 font-medium">甘源食品</td><td class="px-4 py-3 text-sm text-slate-600">食品饮料</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">300627.SZ</td><td class="px-4 py-3 font-medium">华测导航</td><td class="px-4 py-3 text-sm text-slate-600">计算机</td></tr>
            <tr class="hover:bg-slate-50"><td class="px-4 py-3 text-sm font-mono">300810.SZ</td><td class="px-4 py-3 font-medium">中科海讯</td><td class="px-4 py-3 text-sm text-slate-600">国防军工</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 各行业详细观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>各行业详细观点
    </h2>

    <!-- AI/算力/光通信 -->
    <div id="b_sec10" class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-purple-800 mb-3 flex items-center">
        <span class="mr-2">🤖</span>AI/算力/光通信
      </h3>
      <ul class="space-y-2 text-purple-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-purple-700">第一创业：</strong>甲骨文业绩超预期，缓解 AI 投资过度担忧，利好 AI 软硬件产业链</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-purple-700">国新证券：</strong>光模块、光电路交换机表现活跃，AI 算力需求持续高增</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-purple-700">万联证券：</strong>国产 AI 大模型 2 月 token 用量首超美国，关注 AI 生态构建和数据基础设施</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-purple-700">开源证券：</strong>腾讯云涨价 400%，AI 云 IAAS 进入涨价周期，推荐 AIDC、算力租赁、CDN</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-purple-700">英大证券：</strong>光通信模块处于高景气周期，AI 算力、数据中心升级是核心驱动力</span>
        </li>
      </ul>
    </div>

    <!-- 半导体/集成电路 -->
    <div id="b_sec11" class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-blue-800 mb-3 flex items-center">
        <span class="mr-2">💾</span>半导体/集成电路
      </h3>
      <ul class="space-y-2 text-blue-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-blue-700">第一创业：</strong>覆铜板龙头企业建滔集团第三次涨价，看好 PCB 全产业链高景气</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-blue-700">国新证券：</strong>半导体板块上涨，国产替代进入不可逆加速通道</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-blue-700">万联证券：</strong>存储及电视面板价格有望维持涨势，PCB 处于景气扩张周期</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-blue-700">开源证券：</strong>半导体长期向好逻辑没变，自主可控是长期必然趋势</span>
        </li>
      </ul>
    </div>

    <!-- 通信设备 -->
    <div id="b_sec12" class="bg-gradient-to-r from-indigo-50 to-violet-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-indigo-800 mb-3 flex items-center">
        <span class="mr-2">📡</span>通信设备
      </h3>
      <ul class="space-y-2 text-indigo-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-indigo-700">第一创业：</strong>通信行业涨幅居前，5.5G/6G 建设持续推进</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-indigo-700">万联证券：</strong>通信行业跑赢大盘，光通信作为算力产业链核心环节持续受益</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-indigo-700">英大证券：</strong>通信板块可逢低关注，AI 与算力是核心驱动</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-indigo-700">开源证券：</strong>重视腾讯云涨价投资机会，AIDC 机房、液冷、供电核心受益</span>
        </li>
      </ul>
    </div>

    <!-- 电力设备/新能源 -->
    <div id="b_sec13" class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-green-800 mb-3 flex items-center">
        <span class="mr-2">⚡</span>电力设备/新能源
      </h3>
      <ul class="space-y-2 text-green-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-green-700">中银证券：</strong>宁德时代 2025 年净利 722 亿 (+42%)，储能电池销量 +29%</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-green-700">开源证券：</strong>宁德时代量利齐升，盈利韧性再超预期，维持买入评级</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-green-700">山西证券：</strong>光伏产业链上游价格下降，组件价格持平，关注海博思创、阳光电源</span>
        </li>
      </ul>
    </div>

    <!-- 煤炭/高股息 -->
    <div id="b_sec14" class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-amber-800 mb-3 flex items-center">
        <span class="mr-2">🪨</span>煤炭/高股息
      </h3>
      <ul class="space-y-2 text-amber-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-amber-700">山西证券：</strong>2026 年政府工作报告点评，煤价仍有上涨空间，推荐兖矿能源、广汇能源</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-amber-700">国新证券：</strong>煤炭板块涨幅居前，高油价下煤炭替代需求增加</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-amber-700">英大证券：</strong>油气板块逢低配置，分红稳健、业绩确定性强的优质股</span>
        </li>
      </ul>
    </div>

    <!-- 食品饮料/黄金珠宝/机械设备/医药生物 -->
    <div id="b_sec15" class="my-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 食品饮料 -->
        <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-xl">
          <h4 class="text-pink-800 font-black mb-2 flex items-center">
            <span class="mr-2">🍜</span>食品饮料
          </h4>
          <ul class="space-y-1 text-pink-900 text-xs">
            <li><strong>东海证券：</strong>政策利好需求复苏，把握餐饮供应链、乳业、零食赛道修复机会</li>
            <li><strong>万联证券：</strong>服务消费政策延续升级，新兴赛道蓄势发力</li>
            <li><strong>东吴证券：</strong>重庆啤酒 2025 年净利 +10%，维持高分红政策</li>
          </ul>
        </div>

        <!-- 黄金珠宝 -->
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
          <h4 class="text-yellow-800 font-black mb-2 flex items-center">
            <span class="mr-2">💎</span>黄金珠宝
          </h4>
          <ul class="space-y-1 text-yellow-900 text-xs">
            <li><strong>东吴证券：</strong>老铺黄金 2025 年净利 +233%~240%，持续引领高端古法金赛道</li>
            <li><strong>第一创业：</strong>上美股份 2025 年净利 +42%~44%，多品牌战略持续推进</li>
          </ul>
        </div>

        <!-- 机械设备 -->
        <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
          <h4 class="text-slate-800 font-black mb-2 flex items-center">
            <span class="mr-2">🏗️</span>机械设备
          </h4>
          <ul class="space-y-1 text-slate-900 text-xs">
            <li><strong>东海证券：</strong>挖掘机出口 +37%，龙头募资投向全球化和智能化</li>
            <li><strong>万联证券：</strong>人形机器人标准体系发布，产业化进入关键窗口期</li>
            <li><strong>山西证券：</strong>日联科技新签订单大幅增长，收并购打开业务边界</li>
          </ul>
        </div>

        <!-- 医药生物 -->
        <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-xl">
          <h4 class="text-red-800 font-black mb-2 flex items-center">
            <span class="mr-2">💊</span>医药生物
          </h4>
          <ul class="space-y-1 text-red-900 text-xs">
            <li><strong>开源证券：</strong>可孚医疗 2025 年净利 +19%，深耕 + 出海 + 授权驱动成长</li>
            <li><strong>东吴证券：</strong>百诚医药创新药进入收获期，仿制药 CRO/CDMO 困境反转</li>
            <li><strong>山西证券：</strong>pan-RAS/pan-KRAS 抑制剂竞逐胰腺癌，国产创新药突破</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 投资策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>投资策略建议
    </h2>

    <!-- 配置建议 -->
    <div id="b_sec16" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
      <h3 class="text-lg font-black text-blue-800 mb-4 flex items-center">
        <span class="mr-2">📋</span>配置建议
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-bold text-purple-700">科技成长</span>
            <span class="text-xs font-black text-purple-600 bg-purple-100 px-2 py-1 rounded">40%</span>
          </div>
          <p class="text-xs text-slate-600">AI 算力、半导体、通信设备、人形机器人</p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-bold text-amber-700">高股息防御</span>
            <span class="text-xs font-black text-amber-600 bg-amber-100 px-2 py-1 rounded">30%</span>
          </div>
          <p class="text-xs text-slate-600">煤炭、油气、银行、电力</p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-bold text-pink-700">消费复苏</span>
            <span class="text-xs font-black text-pink-600 bg-pink-100 px-2 py-1 rounded">20%</span>
          </div>
          <p class="text-xs text-slate-600">食品饮料、黄金珠宝、免税</p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-bold text-cyan-700">主题投资</span>
            <span class="text-xs font-black text-cyan-600 bg-cyan-100 px-2 py-1 rounded">10%</span>
          </div>
          <p class="text-xs text-slate-600">低空经济、量子科技、商业航天</p>
        </div>
      </div>
    </div>

    <!-- 重点关注 -->
    <div id="b_sec17" class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 my-6 rounded-r-xl">
      <h3 class="text-lg font-black text-green-800 mb-4 flex items-center">
        <span class="mr-2">🎯</span>重点关注
      </h3>
      <ul class="space-y-3 text-green-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <div>
            <strong class="text-green-700">AI 算力产业链：</strong>腾讯云涨价打开长期空间，AIDC、算力租赁、光模块核心受益
          </div>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <div>
            <strong class="text-green-700">半导体国产替代：</strong>出口数据亮眼，设备/材料/制造环节直接受益
          </div>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <div>
            <strong class="text-green-700">宁德时代产业链：</strong>业绩高增验证行业景气度，储能是第二增长曲线
          </div>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <div>
            <strong class="text-green-700">高股息资产：</strong>地缘局势不稳背景下，油气、煤炭防御属性凸显
          </div>
        </li>
      </ul>
    </div>

    <!-- 风险提示 -->
    <div id="b_sec18" class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
      <h3 class="text-lg font-black text-red-800 mb-4 flex items-center">
        <span class="mr-2">⚠️</span>风险提示
      </h3>
      <ul class="space-y-2 text-red-900 text-sm">
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span>地缘政治冲突加剧（美伊局势）</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span>国内经济复苏不及预期</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span>政策落地效果不及预期</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span>海外市场波动风险</span>
        </li>
        <li class="flex items-start">
          <span class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span>AI 产业发展不及预期</span>
        </li>
      </ul>
    </div>

    <div class="mt-8 pt-6 border-t border-slate-200 text-center text-slate-500 text-xs">
      <p>数据来源：第一创业、东兴、国新、万联、东海、中银、东吴、英大、华源、开源、山西等 11 家券商晨会纪要</p>
      <p class="mt-1">免责声明：本报告仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
    </div>

  </div>`;
}
