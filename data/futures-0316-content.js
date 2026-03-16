// ==========================================
// 期货市场内容模块 - 2026 年 3 月 16 日
// ==========================================

function renderFuturesContent_0316() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-orange-800 font-black text-lg flex items-center">
          <span class="text-xl mr-2">📈</span>期货市场投资策略报告
        </h2>
        <span class="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">2026-03-16</span>
      </div>
      <p class="text-orange-900 text-sm">核心驱动：中东地缘冲突持续，霍尔木兹海峡断航导致原油供给缺口扩大</p>
    </div>

    <!-- 一、市场概览 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>一、市场概览
    </h2>

    <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">涨跌分布</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种类别</th>
            <th class="px-4 py-3 text-left">领涨品种</th>
            <th class="px-4 py-3 text-center">涨幅</th>
            <th class="px-4 py-3 text-left">领跌品种</th>
            <th class="px-4 py-3 text-center">跌幅</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">能源化工</td>
            <td class="px-4 py-3 text-slate-700">原油、沥青</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+4%</td>
            <td class="px-4 py-3 text-slate-700">燃油、低硫燃油</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-4%</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">黑色金属</td>
            <td class="px-4 py-3 text-slate-700">-</td>
            <td class="px-4 py-3 text-center text-slate-400">-</td>
            <td class="px-4 py-3 text-slate-700">铁矿石</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-2%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">有色金属</td>
            <td class="px-4 py-3 text-slate-700">氧化铝</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+1%</td>
            <td class="px-4 py-3 text-slate-700">沪银、沪锡</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-3%~-4%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">农产品</td>
            <td class="px-4 py-3 text-slate-700">豆一</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+</td>
            <td class="px-4 py-3 text-slate-700">豆粕、菜粕</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-2%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">贵金属</td>
            <td class="px-4 py-3 text-slate-700">-</td>
            <td class="px-4 py-3 text-center text-slate-400">-</td>
            <td class="px-4 py-3 text-slate-700">沪金、沪银</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-1%~-4%</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">建材化工</td>
            <td class="px-4 py-3 text-slate-700">PVC、烧碱</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+3%~4%</td>
            <td class="px-4 py-3 text-slate-700">瓶片</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-4%</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">新能源</td>
            <td class="px-4 py-3 text-slate-700">-</td>
            <td class="px-4 py-3 text-center text-slate-400">-</td>
            <td class="px-4 py-3 text-slate-700">碳酸锂</td>
            <td class="px-4 py-3 text-center text-red-600 font-bold">-3%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="f_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">成交量异常情况</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-xl">
        <h4 class="text-red-800 font-bold mb-2">🔥 原油系</h4>
        <p class="text-red-900 text-sm">成交量显著放大，地缘风险驱动资金涌入</p>
      </div>
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-2">📉 碳酸锂</h4>
        <p class="text-blue-900 text-sm">持仓量减少 8500 手，资金流出明显</p>
      </div>
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <h4 class="text-amber-800 font-bold mb-2">⚔️ 铁矿石</h4>
        <p class="text-amber-900 text-sm">成交量维持高位，多空分歧加剧</p>
      </div>
    </div>

    <!-- 二、重点品种分析 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>二、重点品种分析
    </h2>

    <!-- 原油 -->
    <div id="f_sec3" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🛢️</span>原油 - 强势上涨
      </h4>
      <div class="space-y-3 text-orange-900">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div><span class="font-semibold">WTI 4 月：</span>98.71 美元/桶</div>
          <div><span class="font-semibold">Brent 5 月：</span>103.14 美元/桶</div>
          <div><span class="font-semibold">SC2604：</span>786.8 元/桶（最高 818 元）</div>
          <div><span class="font-semibold">周涨幅：</span>WTI +8.81%，Brent +11.33%</div>
        </div>
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• <strong>地缘面（核心）：</strong>霍尔木兹海峡封锁持续，原油运输量从日均 2000 万桶骤降至"极低水平"</li>
            <li>• <strong>供给面：</strong>海湾国家每日减产至少 1000 万桶，替代运力有限</li>
            <li>• <strong>政策面：</strong>IEA 宣布释放 4 亿桶战略石油储备，日本 16 日起释放 8000 万桶储备</li>
            <li>• <strong>情绪面：</strong>市场对海峡通航恢复预期悲观，油价历史高点可能还在前面</li>
          </ul>
        </div>
        <div class="bg-green-50 rounded-lg p-3">
          <p class="font-bold text-green-800 mb-2">操作建议：逢低做多</p>
          <p class="text-sm text-green-900">入场位：SC 750-770 元/桶 | 止损位：SC 720 元/吨 | 目标位：SC 850-880 元/桶</p>
        </div>
      </div>
    </div>

    <!-- 铁矿石 -->
    <div id="f_sec4" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🪨</span>铁矿石 - 震荡偏强，存在冲高回落风险
      </h4>
      <div class="space-y-3 text-slate-900">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div><span class="font-semibold">最新价：</span>811.5 元/吨</div>
          <div><span class="font-semibold">较春节低点：</span>+10.25%</div>
          <div><span class="font-semibold">普氏指数：</span>109.10 美元/吨</div>
        </div>
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• <strong>消息面：</strong>必和必拓纽曼粉被加入现货限制名单，短期流动性收紧</li>
            <li>• <strong>资金面：</strong>投机资金推高价格，已部分计价利好消息</li>
            <li>• <strong>基本面：</strong>港口库存持续增加，供大于求格局未变</li>
            <li>• <strong>需求面：</strong>3 月下半月钢厂季节性复产预期，但需求恢复速度存疑</li>
          </ul>
        </div>
        <div class="bg-blue-50 rounded-lg p-3">
          <p class="font-bold text-blue-800 mb-2">操作建议：谨慎观望/反弹沽空</p>
          <p class="text-sm text-blue-900">入场位：830-850 元/吨逢高沽空 | 止损位：870 元/吨 | 目标位：760-780 元/吨</p>
        </div>
      </div>
    </div>

    <!-- 碳酸锂 -->
    <div id="f_sec5" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔋</span>碳酸锂 - 宽幅震荡
      </h4>
      <div class="space-y-3 text-emerald-900">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div><span class="font-semibold">最新价：</span>约 15-16 万元/吨</div>
          <div><span class="font-semibold">持仓变化：</span>-8500 手</div>
          <div><span class="font-semibold">仓单：</span>36403 手</div>
        </div>
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• <strong>供给面：</strong>锂盐厂开工率环比 +3.71%，供给增加</li>
            <li>• <strong>需求面：</strong>磷酸铁锂产量环比 +0.55%，动力电芯产量 +6.35%</li>
            <li>• <strong>库存面：</strong>社会总库存环比 -0.42%，小幅去库</li>
            <li>• <strong>情绪面：</strong>上游惜售挺价，下游谨慎观望</li>
          </ul>
        </div>
        <div class="bg-blue-50 rounded-lg p-3">
          <p class="font-bold text-blue-800 mb-2">操作建议：区间操作</p>
          <p class="text-sm text-blue-900">入场位：14-17 万元/吨区间操作 | 止损位：区间外 5%</p>
        </div>
      </div>
    </div>

    <!-- 贵金属 -->
    <div id="f_sec6" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-yellow-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🥇</span>贵金属（沪金、沪银）- 短期回调，中长期看涨
      </h4>
      <div class="space-y-3 text-yellow-900">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div><span class="font-semibold">沪金：</span>跌超 1%</div>
          <div><span class="font-semibold">沪银：</span>跌超 4%</div>
        </div>
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• <strong>利空：</strong>地缘风险溢价部分消化，美元反弹压制</li>
            <li>• <strong>利多：</strong>全球央行购金趋势延续，地缘不确定性支撑避险需求</li>
            <li>• <strong>数据：</strong>2026 年 1 月全球央行净购金 5 吨，购金势头有所放缓但长期趋势不变</li>
          </ul>
        </div>
        <div class="bg-green-50 rounded-lg p-3">
          <p class="font-bold text-green-800 mb-2">操作建议：回调做多</p>
          <p class="text-sm text-green-900">入场位：沪金回调至 480-485 元/克 | 止损位：470 元/克 | 目标位：500 元/克以上</p>
        </div>
      </div>
    </div>

    <!-- 能源化工 -->
    <h3 id="f_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">能源化工（PTA、乙二醇、PVC）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种</th>
            <th class="px-4 py-3 text-center">涨幅</th>
            <th class="px-4 py-3 text-left">驱动因素</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">PTA</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+2%</td>
            <td class="px-4 py-3 text-slate-700">原油成本推动</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">乙二醇</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+2%</td>
            <td class="px-4 py-3 text-slate-700">原油带动 + 需求回暖</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">PVC</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+3%</td>
            <td class="px-4 py-3 text-slate-700">成本支撑 + 出口改善</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-medium text-slate-900">烧碱</td>
            <td class="px-4 py-3 text-center text-green-600 font-bold">+4%</td>
            <td class="px-4 py-3 text-slate-700">供给收紧</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded-r-xl">
      <p class="font-bold text-green-800 mb-2">操作建议：跟随做多</p>
      <p class="text-sm text-green-900">PTA 入场位：5600-5700 元/吨 | 止损位：5450 元/吨</p>
    </div>

    <!-- 农产品 -->
    <h3 id="f_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">农产品（生猪、豆粕）</h3>

    <!-- 生猪 -->
    <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-pink-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🐷</span>生猪 - 弱势寻底
      </h4>
      <div class="space-y-3 text-pink-900">
        <div class="grid grid-cols-3 gap-2 text-sm">
          <div><span class="font-semibold">全国猪价：</span>11.89 元/公斤（连续 5 周下降）</div>
          <div><span class="font-semibold">全国肉价：</span>23.04 元/公斤（连续 4 周下降）</div>
          <div><span class="font-semibold">行业亏损：</span>250-300 元/头</div>
        </div>
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• 供应充裕，二育入场谨慎</li>
            <li>• 全行业亏损近 6 个月，产能去化加速</li>
            <li>• 26Q4/2027 年景气可期</li>
          </ul>
        </div>
        <div class="bg-green-50 rounded-lg p-3">
          <p class="font-bold text-green-800 mb-2">操作建议：远月逢低布局多单</p>
          <p class="text-sm text-green-900">合约：LH2609/LH2611 | 入场位：10000-10500 元/吨 | 止损位：9500 元/吨</p>
        </div>
      </div>
    </div>

    <!-- 豆粕 -->
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🌾</span>豆粕 - 震荡偏弱
      </h4>
      <div class="space-y-3 text-amber-900">
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">驱动因素：</p>
          <ul class="text-sm space-y-1">
            <li>• 巴西大豆出口装运偏慢</li>
            <li>• 国内油厂大豆和豆粕高库存</li>
            <li>• 地缘冲突带来粮食安全溢价</li>
          </ul>
        </div>
        <div class="bg-blue-50 rounded-lg p-3">
          <p class="font-bold text-blue-800 mb-2">操作建议：观望</p>
        </div>
      </div>
    </div>

    <!-- 三、投资策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>三、投资策略建议
    </h2>

    <!-- 做多机会 -->
    <div id="f_sec11" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>做多机会
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-green-800 text-white">
            <tr>
              <th class="px-4 py-3 text-left">品种</th>
              <th class="px-4 py-3 text-left">合约</th>
              <th class="px-4 py-3 text-center">入场位</th>
              <th class="px-4 py-3 text-center">止损位</th>
              <th class="px-4 py-3 text-center">目标位</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-green-100">
            <tr class="hover:bg-green-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">原油</td>
              <td class="px-4 py-3 text-slate-700">SC2604</td>
              <td class="px-4 py-3 text-center text-green-600">750-770 元/桶</td>
              <td class="px-4 py-3 text-center text-red-600">720 元/桶</td>
              <td class="px-4 py-3 text-center text-green-600">850-880 元/桶</td>
              <td class="px-4 py-3 text-sm text-slate-700">海峡断航持续，供需缺口扩大</td>
            </tr>
            <tr class="hover:bg-green-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">沥青</td>
              <td class="px-4 py-3 text-slate-700">BU2606</td>
              <td class="px-4 py-3 text-center text-green-600">3600 元/吨</td>
              <td class="px-4 py-3 text-center text-red-600">3450 元/吨</td>
              <td class="px-4 py-3 text-center text-green-600">3900 元/吨</td>
              <td class="px-4 py-3 text-sm text-slate-700">成本推动 + 基建需求</td>
            </tr>
            <tr class="hover:bg-green-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">集运欧线</td>
              <td class="px-4 py-3 text-slate-700">EC2606-08</td>
              <td class="px-4 py-3 text-center text-green-600">1400-1500 点</td>
              <td class="px-4 py-3 text-center text-red-600">1300 点</td>
              <td class="px-4 py-3 text-center text-green-600">1800-2000 点</td>
              <td class="px-4 py-3 text-sm text-slate-700">中东航线停滞，旺季预期</td>
            </tr>
            <tr class="hover:bg-green-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">黄金</td>
              <td class="px-4 py-3 text-slate-700">AU2606</td>
              <td class="px-4 py-3 text-center text-green-600">480-485 元/克</td>
              <td class="px-4 py-3 text-center text-red-600">470 元/克</td>
              <td class="px-4 py-3 text-center text-green-600">500+ 元/克</td>
              <td class="px-4 py-3 text-sm text-slate-700">避险 + 央行购金</td>
            </tr>
            <tr class="hover:bg-green-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">生猪</td>
              <td class="px-4 py-3 text-slate-700">LH2609/2611</td>
              <td class="px-4 py-3 text-center text-green-600">10000-10500 元/吨</td>
              <td class="px-4 py-3 text-center text-red-600">9500 元/吨</td>
              <td class="px-4 py-3 text-center text-green-600">12000 元/吨</td>
              <td class="px-4 py-3 text-sm text-slate-700">产能去化，周期反转</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 做空机会 -->
    <div id="f_sec12" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📉</span>做空机会
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-red-800 text-white">
            <tr>
              <th class="px-4 py-3 text-left">品种</th>
              <th class="px-4 py-3 text-left">合约</th>
              <th class="px-4 py-3 text-center">入场位</th>
              <th class="px-4 py-3 text-center">止损位</th>
              <th class="px-4 py-3 text-center">目标位</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-red-100">
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">铁矿石</td>
              <td class="px-4 py-3 text-slate-700">I2605</td>
              <td class="px-4 py-3 text-center text-red-600">830-850 元/吨</td>
              <td class="px-4 py-3 text-center text-green-600">870 元/吨</td>
              <td class="px-4 py-3 text-center text-red-600">760-780 元/吨</td>
              <td class="px-4 py-3 text-sm text-slate-700">供大于求，利好计价充分</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">集运欧线</td>
              <td class="px-4 py-3 text-slate-700">EC2604</td>
              <td class="px-4 py-3 text-center text-red-600">1800 点以上</td>
              <td class="px-4 py-3 text-center text-green-600">1900 点</td>
              <td class="px-4 py-3 text-center text-red-600">1500 点</td>
              <td class="px-4 py-3 text-sm text-slate-700">淡季缺乏货量支撑</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">碳酸锂</td>
              <td class="px-4 py-3 text-slate-700">LC2605</td>
              <td class="px-4 py-3 text-center text-red-600">16.5 万/吨以上</td>
              <td class="px-4 py-3 text-center text-green-600">17.5 万/吨</td>
              <td class="px-4 py-3 text-center text-red-600">14 万/吨</td>
              <td class="px-4 py-3 text-sm text-slate-700">供给增加，需求谨慎</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">生猪</td>
              <td class="px-4 py-3 text-slate-700">LH2605</td>
              <td class="px-4 py-3 text-center text-red-600">10500 元/吨以上</td>
              <td class="px-4 py-3 text-center text-green-600">11000 元/吨</td>
              <td class="px-4 py-3 text-center text-red-600">9500 元/吨</td>
              <td class="px-4 py-3 text-sm text-slate-700">短期供应充裕</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 套利策略 -->
    <div id="f_sec13" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔄</span>套利策略
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-purple-800 text-white">
            <tr>
              <th class="px-4 py-3 text-left">策略</th>
              <th class="px-4 py-3 text-left">操作</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-purple-100">
            <tr class="hover:bg-purple-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">多原油空燃油</td>
              <td class="px-4 py-3 text-slate-700">多 SC2604 / 空 FU2605</td>
              <td class="px-4 py-3 text-sm text-slate-700">原油供给冲击更直接</td>
            </tr>
            <tr class="hover:bg-purple-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">多沥青空燃油</td>
              <td class="px-4 py-3 text-slate-700">多 BU2606 / 空 FU2605</td>
              <td class="px-4 py-3 text-sm text-slate-700">基建需求 + 成本传导</td>
            </tr>
            <tr class="hover:bg-purple-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">集运月差</td>
              <td class="px-4 py-3 text-slate-700">空 EC2604 / 多 EC2606</td>
              <td class="px-4 py-3 text-sm text-slate-700">淡旺季 + 地缘风险延续</td>
            </tr>
            <tr class="hover:bg-purple-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">螺矿比扩大</td>
              <td class="px-4 py-3 text-slate-700">多 RB2610 / 空 I2605</td>
              <td class="px-4 py-3 text-sm text-slate-700">钢厂复产利好成材</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 风险提示 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、风险提示
    </h2>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚠️</span>需警惕的风险因素
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-red-900 text-white">
            <tr>
              <th class="px-4 py-3 text-left">风险因素</th>
              <th class="px-4 py-3 text-left">潜在影响</th>
              <th class="px-4 py-3 text-left">受影响品种</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-red-100">
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 text-slate-900">地缘冲突突然缓和</td>
              <td class="px-4 py-3 text-red-600">油价快速回落</td>
              <td class="px-4 py-3 text-slate-700">原油、燃油、化工品</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 text-slate-900">霍尔木兹海峡恢复通航</td>
              <td class="px-4 py-3 text-red-600">油价大幅回调</td>
              <td class="px-4 py-3 text-slate-700">原油、集运</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 text-slate-900">美联储超预期鹰派</td>
              <td class="px-4 py-3 text-red-600">贵金属、有色承压</td>
              <td class="px-4 py-3 text-slate-700">沪金、沪银、铜铝</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 text-slate-900">国内需求恢复不及预期</td>
              <td class="px-4 py-3 text-red-600">黑色系回调</td>
              <td class="px-4 py-3 text-slate-700">铁矿石、螺纹钢</td>
            </tr>
            <tr class="hover:bg-red-50 transition-colors">
              <td class="px-4 py-3 text-slate-900">政策调控干预</td>
              <td class="px-4 py-3 text-red-600">价格快速回归</td>
              <td class="px-4 py-3 text-slate-700">铁矿石、煤炭</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-slate-50 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
      <p class="text-slate-700 font-semibold mb-2">仓位管理建议：</p>
      <ul class="text-slate-600 text-sm space-y-1">
        <li>• 单边持仓：不超过总资金 30%</li>
        <li>• 套利持仓：不超过总资金 40%</li>
        <li>• 止损纪律：严格执行，单笔损失不超过 2%</li>
      </ul>
    </div>

    <!-- 总结 -->
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-600 p-6 my-6 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📋</span>核心观点总结
      </h4>
      <p class="text-slate-700 leading-relaxed">
        本周期货市场核心交易逻辑围绕<strong>中东地缘冲突</strong>展开，霍尔木兹海峡断航导致原油供给缺口持续扩大，油价维持高位震荡格局。在"实物资产重估"和"涨价链"两条主线下，建议维持<strong>"逢低做多能源、逢高沽空铁矿石、配置黄金避险"</strong>的策略组合。
      </p>
    </div>

    <p class="text-slate-400 text-xs text-center mt-8">* 本报告基于公开数据整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。 *</p>
  </div>`;
}
