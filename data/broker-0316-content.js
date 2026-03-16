// ==========================================
// 券商晨报内容模块 - 2026 年 3 月 16 日
// ==========================================

function renderBrokerContent_0316() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
      <div class="flex items-center mb-3">
        <span class="text-2xl mr-2">📰</span>
        <h2 class="text-xl font-black text-blue-900">券商晨报买方汇总内参</h2>
      </div>
      <div class="flex items-center gap-4 text-blue-700 text-sm">
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg>
          2026 年 3 月 16 日
        </span>
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          50 份券商晨报深度分析
        </span>
      </div>
    </div>

    <!-- 核心摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="text-2xl mr-2">🌟</span>核心摘要（3 分钟速读）
    </h2>

    <!-- 市场共识 -->
    <div id="b_sec1" class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">📊</span>市场共识
      </h3>
      <p class="text-slate-700 leading-relaxed">
        各券商对大盘走势的共识判断：<strong class="text-red-600">震荡向上，中期慢牛格局不变</strong>。多数券商认为，尽管地缘政治冲突（美伊局势）带来短期扰动，但不改 A 股中期向上趋势。上证指数在 4100 点附近震荡，创业板指表现相对强势。
      </p>
    </div>

    <!-- 仓位建议 -->
    <div id="b_sec2" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">💼</span>仓位建议
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-slate-900 text-white">
            <tr>
              <th class="px-4 py-3 text-left">仓位类型</th>
              <th class="px-4 py-3 text-center">占比</th>
              <th class="px-4 py-3 text-left">建议</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-3 font-semibold text-green-900">中等仓位</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-600 text-white px-2 py-1 rounded-full text-sm font-bold">65%</span></td>
              <td class="px-4 py-3 text-slate-700">中性均衡，标配为主，逢低布局</td>
            </tr>
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-3 font-semibold text-red-900">高仓位</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold">25%</span></td>
              <td class="px-4 py-3 text-slate-700">积极进攻，聚焦科技成长</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-semibold text-blue-900">低仓位</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">10%</span></td>
              <td class="px-4 py-3 text-slate-700">防御为主，等待趋势明朗</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-slate-600 text-sm mt-3"><strong>平均仓位建议：6-7 成</strong>，较上周持平。</p>
    </div>

    <!-- 热门赛道 TOP5 -->
    <div id="b_sec3" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">🔥</span>热门赛道 TOP5
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <tr>
              <th class="px-4 py-3 text-center">排名</th>
              <th class="px-4 py-3 text-left">行业</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="hover:bg-amber-50 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">银行</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">47 次</span></td>
              <td class="px-4 py-3 text-slate-700">高股息防御 + 估值修复</td>
            </tr>
            <tr class="hover:bg-amber-50 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">有色金属</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">41 次</span></td>
              <td class="px-4 py-3 text-slate-700">金属涨价 + 通胀预期</td>
            </tr>
            <tr class="hover:bg-amber-50 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">机械设备</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">40 次</span></td>
              <td class="px-4 py-3 text-slate-700">设备更新 + 出口高增</td>
            </tr>
            <tr class="hover:bg-amber-50 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">AI/算力</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">39 次</span></td>
              <td class="px-4 py-3 text-slate-700">大模型爆发 + 算力需求</td>
            </tr>
            <tr class="hover:bg-amber-50 transition-colors">
              <td class="px-4 py-3 text-center"><span class="bg-amber-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span></td>
              <td class="px-4 py-3 font-bold text-slate-900">商业贸易</td>
              <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">39 次</span></td>
              <td class="px-4 py-3 text-slate-700">消费促进月 + 外贸超预期</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 金股 TOP10 -->
    <div id="b_sec4" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">💎</span>金股 TOP10
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票</th>
              <th class="px-4 py-3 text-left">代码</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">中钨高新</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">688737</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">稀有金属涨价</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">杭州银行</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">600926</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">城商行龙头</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">招商证券</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">601226</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">券商景气度回升</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">王府井</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">600859</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">免税 + 消费复苏</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">泰慕士</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">001218</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">纺织出口高增</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">鹏辉能源</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">300810</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">储能景气度</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">宁波银行</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">002142</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">银行优质标的</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">牧原股份</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">002714</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">养殖拐点</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">华测检测</td>
              <td class="px-4 py-3 text-slate-600 font-mono text-sm">300627</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">检测龙头</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 宏观策略汇总 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="text-2xl mr-2">📈</span>宏观策略汇总
    </h2>

    <div id="b_sec5" class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">大盘判断</th>
            <th class="px-4 py-3 text-center">仓位建议</th>
            <th class="px-4 py-3 text-left">风格偏好</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">英大证券</td>
            <td class="px-4 py-3 text-slate-700">震荡向上，慢牛延续</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">6-7 成</span></td>
            <td class="px-4 py-3 text-slate-700">均衡配置</td>
            <td class="px-4 py-3 text-slate-600 text-sm">美伊冲突改变节奏而非牛市根基，GDP 目标 4.5%-5%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">中信证券</td>
            <td class="px-4 py-3 text-slate-700">结构性行情</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">7 成</span></td>
            <td class="px-4 py-3 text-slate-700">成长为主</td>
            <td class="px-4 py-3 text-slate-600 text-sm">出口超预期，AI 产业链高景气</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">国信证券</td>
            <td class="px-4 py-3 text-slate-700">区间震荡</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">6 成</span></td>
            <td class="px-4 py-3 text-slate-700">价值防御</td>
            <td class="px-4 py-3 text-slate-600 text-sm">债市震荡，关注高股息资产</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">开源证券</td>
            <td class="px-4 py-3 text-slate-700">震荡上行</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">7 成</span></td>
            <td class="px-4 py-3 text-slate-700">科技成长</td>
            <td class="px-4 py-3 text-slate-600 text-sm">1-2 月出口增 21.8%，机电产品 +27.1%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">申万宏源</td>
            <td class="px-4 py-3 text-slate-700">温和反弹</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">6-7 成</span></td>
            <td class="px-4 py-3 text-slate-700">均衡</td>
            <td class="px-4 py-3 text-slate-600 text-sm">财政政策积极，货币政策适度宽松</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">第一创业</td>
            <td class="px-4 py-3 text-slate-700">震荡市</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">5-6 成</span></td>
            <td class="px-4 py-3 text-slate-700">主题投资</td>
            <td class="px-4 py-3 text-slate-600 text-sm">寒武纪等 AI 公司业绩爆发</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">华源证券</td>
            <td class="px-4 py-3 text-slate-700">震荡偏强</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">6 成</span></td>
            <td class="px-4 py-3 text-slate-700">防御 + 成长</td>
            <td class="px-4 py-3 text-slate-600 text-sm">油价脉冲式上涨，债市偏震荡</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">万联证券</td>
            <td class="px-4 py-3 text-slate-700">区间整理</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">5-6 成</span></td>
            <td class="px-4 py-3 text-slate-700">低估值</td>
            <td class="px-4 py-3 text-slate-600 text-sm">消费促进月启动，培育外贸新动能</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 行业推荐榜 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="text-2xl mr-2">🏆</span>热门行业推荐榜
    </h2>

    <div id="b_sec6" class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <tr>
            <th class="px-4 py-3 text-center">排名</th>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">主要逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span></td>
            <td class="px-4 py-3 font-bold text-amber-900">银行</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">47 次</span></td>
            <td class="px-4 py-3 text-slate-700">高股息 + 低估值 + 防御属性</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span></td>
            <td class="px-4 py-3 font-bold text-amber-900">有色金属</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">41 次</span></td>
            <td class="px-4 py-3 text-slate-700">金属涨价 + 通胀预期 + 避险需求</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span></td>
            <td class="px-4 py-3 font-bold text-amber-900">机械设备</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">40 次</span></td>
            <td class="px-4 py-3 text-slate-700">设备更新政策 + 出口高增</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span></td>
            <td class="px-4 py-3 font-bold text-amber-900">AI/算力</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">39 次</span></td>
            <td class="px-4 py-3 text-slate-700">大模型爆发 + 推理算力需求高增</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span></td>
            <td class="px-4 py-3 font-bold text-amber-900">商业贸易</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">39 次</span></td>
            <td class="px-4 py-3 text-slate-700">消费促进月 + 外贸超预期</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-300 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">新能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">37 次</span></td>
            <td class="px-4 py-3 text-slate-700">光伏风电装机 + 储能需求</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-300 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">7</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">石油石化</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">37 次</span></td>
            <td class="px-4 py-3 text-slate-700">地缘冲突 + 油价上涨</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-300 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">8</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">交通运输</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">36 次</span></td>
            <td class="px-4 py-3 text-slate-700">航运运价 + 物流复苏</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-300 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">9</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">半导体</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">33 次</span></td>
            <td class="px-4 py-3 text-slate-700">国产替代加速 + 周期复苏</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-300 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">10</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">国防军工</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">33 次</span></td>
            <td class="px-4 py-3 text-slate-700">地缘局势 + 军费增长</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 重点行业详细观点 -->
    <div id="b_sec7" class="my-8">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">📊</span>重点行业详细观点
      </h3>

      <!-- AI/算力 -->
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-purple-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">🤖</span>AI/算力（39 次推荐）
        </h4>
        <ul class="space-y-2 text-purple-900">
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">中信证券：</strong>AI 相关产业链发展推动机电产品、高新技术产品出口增速高增，1-2 月集成电路出口同比增长 72.6%</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">开源证券：</strong>腾讯云涨价验证 AgentAI 落地可行性，互联网巨头推出自有产品，应用端推理算力需求进入快速增长阶段</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">英大证券：</strong>AI 算力、具身智能是重要会议提及的产业叙事，逢低布局兼顾安全性与成长性</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">第一创业：</strong>寒武纪 2025 年营收 64.97 亿元，同比增长 453.21%，净利润 20.59 亿元扭亏为盈</span>
          </li>
        </ul>
      </div>

      <!-- 半导体 -->
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-blue-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">💾</span>半导体（33 次推荐）
        </h4>
        <ul class="space-y-2 text-blue-900">
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">英大证券：</strong>半导体长期向好逻辑没变，国产替代进入不可逆加速通道，关注设备/材料/制造环节</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">开源证券：</strong>存储及电视面板价格有望维持涨势，英伟达业绩高增长验证行业景气度</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">中信证券：</strong>集成电路出口高增，国产替代逻辑强化</span>
          </li>
        </ul>
      </div>

      <!-- 新能源 -->
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-green-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">⚡</span>新能源（37 次推荐）
        </h4>
        <ul class="space-y-2 text-green-900">
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">中信证券：</strong>"十五五"规划提出加力建设新型能源基础设施，积极稳妥推进碳达峰</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">开源证券：</strong>宁德时代量利齐升，盈利韧性再超预期</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">英大证券：</strong>比亚迪发布兆瓦闪充技术后，纯电车型销量占比会进一步提升</span>
          </li>
        </ul>
      </div>

      <!-- 银行 -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-amber-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">🏦</span>银行（47 次推荐）
        </h4>
        <ul class="space-y-2 text-amber-900">
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-amber-700">国信证券：</strong>银行板块高股息防御属性突出，关注杭州银行、宁波银行等优质城商行</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-amber-700">华源证券：</strong>1Y 短端信用债收益率创新低，建议关注高票息资产的稳健收益价值</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-amber-700">中信证券：</strong>金融板块估值修复，券商景气度回升</span>
          </li>
        </ul>
      </div>

      <!-- 有色金属 -->
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">🥇</span>有色金属（41 次推荐）
        </h4>
        <ul class="space-y-2 text-yellow-900">
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-yellow-700">华源证券：</strong>北矿检测是有色金属检测龙头，金属涨价 + 仪器国产化驱动成长</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-yellow-700">英大证券：</strong>通胀预期抬升，贵金属震荡走强，关注黄金、铜、铝等</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-yellow-700">第一创业：</strong>碳纤维产品供不应求，价格上调 5000 元/吨</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 券商金股组合 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="text-2xl mr-2">💎</span>券商金股组合
    </h2>

    <!-- 被多家券商同时推荐的个股 -->
    <div id="b_sec8" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">🏆</span>被多家券商同时推荐的个股
      </h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">推荐券商</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">中钨高新</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">国信证券</td>
              <td class="px-4 py-3 text-slate-700">稀有金属涨价，钨资源稀缺</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">杭州银行</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">国信证券</td>
              <td class="px-4 py-3 text-slate-700">城商行龙头，资产质量优异</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">招商证券</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">国信证券</td>
              <td class="px-4 py-3 text-slate-700">券商景气度回升，业绩弹性大</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">王府井</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">国信证券</td>
              <td class="px-4 py-3 text-slate-700">免税牌照 + 消费复苏</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3 font-bold text-purple-900">泰慕士</td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-700">国信证券</td>
              <td class="px-4 py-3 text-slate-700">纺织出口高增，产能扩张</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">鹏辉能源</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">东方证券</td>
              <td class="px-4 py-3 text-slate-700">储能景气度高，订单饱满</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">宁波银行</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">东方证券</td>
              <td class="px-4 py-3 text-slate-700">银行优质标的，零售业务突出</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">牧原股份</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">东方证券</td>
              <td class="px-4 py-3 text-slate-700">养殖拐点渐进，成本优势明显</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">华测检测</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">东方证券</td>
              <td class="px-4 py-3 text-slate-700">检测龙头，市占率提升</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3 font-bold text-blue-900">寒武纪</td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-700">第一创业</td>
              <td class="px-4 py-3 text-slate-700">AI 芯片龙头，业绩爆发式增长</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 其他重点推荐个股 -->
    <div id="b_sec9" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">📋</span>其他重点推荐个股
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">中国中免</span>
            <span class="text-xs text-slate-500 font-mono">601888</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">中信证券：免税龙头，消费复苏</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">雅克科技</span>
            <span class="text-xs text-slate-500 font-mono">002409</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">中信证券：半导体材料，国产替代</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">中信海洋</span>
            <span class="text-xs text-slate-500 font-mono">000099</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">中信证券：低空经济，通航龙头</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">百花医药</span>
            <span class="text-xs text-slate-500 font-mono">605338</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">中信证券：创新药，研发管线丰富</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">可孚医疗</span>
            <span class="text-xs text-slate-500 font-mono">301087</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">开源证券：2025 年业绩高增，出海驱动</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">宁德时代</span>
            <span class="text-xs text-slate-500 font-mono">300750</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">开源证券：量利齐升，盈利超预期</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">同花顺</span>
            <span class="text-xs text-slate-500 font-mono">300033</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">开源证券：市场交投活跃，广告业务高增</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">波司登</span>
            <span class="text-xs text-slate-500 font-mono">03998.HK</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">华源证券：品牌势能提升，稳增长</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">和黄医药</span>
            <span class="text-xs text-slate-500 font-mono">00013.HK</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">华源证券：全球商业化增长，ATTC 平台潜力</p>
        </div>
      </div>
    </div>

    <!-- 投资策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="text-2xl mr-2">📋</span>投资策略建议
    </h2>

    <div id="b_sec10" class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <!-- 短期策略 -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
        <h4 class="text-blue-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">📅</span>短期策略（1-2 周）
        </h4>
        <ul class="space-y-2 text-blue-900 text-sm">
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>仓位：</strong>维持 6-7 成中性仓位</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>配置：</strong>银行 + 有色金属防御，AI/算力/半导体进攻</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>操作：</strong>逢低布局，不追高</span>
          </li>
        </ul>
      </div>

      <!-- 中期策略 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
        <h4 class="text-purple-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">📈</span>中期策略（1-3 个月）
        </h4>
        <ul class="space-y-2 text-purple-900 text-sm">
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>主线一：</strong>AI 算力产业链（大模型、光模块、服务器）</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>主线二：</strong>出口高增产业链（机电产品、集成电路）</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>主线三：</strong>高股息防御（银行、油气、煤炭）</span>
          </li>
        </ul>
      </div>

      <!-- 重点关注时点 -->
      <div class="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5">
        <h4 class="text-amber-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">⏰</span>重点关注时点
        </h4>
        <ul class="space-y-2 text-amber-900 text-sm">
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>3 月 16 日：</strong>经济数据公布</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>3 月下旬：</strong>两会政策落地</span>
          </li>
          <li class="flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>4 月上旬：</strong>一季报预告</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 风险提示 -->
    <div id="b_sec11" class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">⚠️</span>风险提示
      </h4>

      <h5 class="text-red-700 font-bold mb-2">主要分歧</h5>
      <div class="overflow-x-auto mb-4">
        <table class="min-w-full border-collapse rounded-lg overflow-hidden">
          <thead class="bg-red-100 text-red-800">
            <tr>
              <th class="px-3 py-2 text-left text-sm">分歧点</th>
              <th class="px-3 py-2 text-left text-sm">多方观点</th>
              <th class="px-3 py-2 text-left text-sm">空方观点</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-red-50">
            <tr>
              <td class="px-3 py-2 text-sm font-semibold text-red-900">市场走势</td>
              <td class="px-3 py-2 text-sm text-slate-700">英大/中信：慢牛延续，震荡向上</td>
              <td class="px-3 py-2 text-sm text-slate-700">国信/万联：区间震荡，谨慎为主</td>
            </tr>
            <tr>
              <td class="px-3 py-2 text-sm font-semibold text-red-900">仓位建议</td>
              <td class="px-3 py-2 text-sm text-slate-700">中信/开源：7 成积极进攻</td>
              <td class="px-3 py-2 text-sm text-slate-700">第一创业/万联：5-6 成防御</td>
            </tr>
            <tr>
              <td class="px-3 py-2 text-sm font-semibold text-red-900">风格偏好</td>
              <td class="px-3 py-2 text-sm text-slate-700">中信/开源：科技成长为主</td>
              <td class="px-3 py-2 text-sm text-slate-700">国信/华源：价值防御为主</td>
            </tr>
            <tr>
              <td class="px-3 py-2 text-sm font-semibold text-red-900">油价走势</td>
              <td class="px-3 py-2 text-sm text-slate-700">英大：中长期战略价值凸显</td>
              <td class="px-3 py-2 text-sm text-slate-700">华源：脉冲式上涨，节奏快于 2022H1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h5 class="text-red-700 font-bold mb-2">共同风险</h5>
      <ul class="space-y-2 text-red-900 text-sm">
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>地缘政治风险：</strong>美伊冲突持续升级，霍尔木兹海峡航道安全受威胁</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>经济复苏不及预期：</strong>PPI 同比高位，经济数据公布可能引发市场波动</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>政策变化风险：</strong>宽货币、宽财政政策执行力度存在不确定性</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>出口持续性风险：</strong>1-2 月出口高增受春节错位影响，3 月或将承压</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>通胀回升风险：</strong>油价上涨推升通胀，可能影响货币政策宽松空间</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>技术迭代风险：</strong>AI、半导体等领域技术快速迭代，存在不确定性</span>
        </li>
      </ul>
    </div>

    <!-- 底部免责声明 -->
    <div class="border-t border-slate-200 pt-6 mt-8 text-center">
      <p class="text-slate-500 text-xs">
        免责声明：本报告基于各券商公开晨报整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。
      </p>
      <p class="text-slate-400 text-xs mt-2">
        数据来源：50 份券商晨报（中信证券、国信证券、开源证券、申万宏源、第一创业、华源证券、万联证券、英大证券等）
      </p>
    </div>

  </div>`;
}
