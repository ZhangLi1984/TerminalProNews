// ==========================================
// 期货市场内容渲染 - 2026-03-19
// ==========================================

function renderFuturesContent_0319() {
  return `<div class="prose prose-slate max-w-none">

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>市场综述</h2>

    <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">整体市场表现</h3>

    <p class="text-slate-700 mb-4">国内商品期货收盘，主力合约大面积飘绿。从夜盘开盘情况来看，甲醇涨超12%，燃油涨超5%，原油涨近5%，沥青、LPG涨近4%，能化板块受中东局势影响大幅走强；跌幅方面，多晶硅跌超5%，碳酸锂跌超4%，红枣、玻璃、20号胶、工业硅、沪锡等跌超2%。</p>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">板块</th>
            <th class="px-4 py-3 text-left">表现</th>
            <th class="px-4 py-3 text-left">代表品种</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">能源化工</td>
            <td class="px-4 py-3 text-green-700 font-bold">大幅走强</td>
            <td class="px-4 py-3 text-slate-700">甲醇+12%、燃油+5%、原油+5%</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">贵金属</td>
            <td class="px-4 py-3 text-red-700 font-bold">回调</td>
            <td class="px-4 py-3 text-slate-700">沪金-2%、沪银-3%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">有色金属</td>
            <td class="px-4 py-3 text-slate-700">分化</td>
            <td class="px-4 py-3 text-slate-700">氧化铝+1%、沪铜-1%、沪锡-2%</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">黑色建材</td>
            <td class="px-4 py-3 text-red-700 font-bold">偏弱</td>
            <td class="px-4 py-3 text-slate-700">玻璃-2%、螺纹钢0%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">农产品</td>
            <td class="px-4 py-3 text-slate-700">分化</td>
            <td class="px-4 py-3 text-slate-700">豆粕+1%、鸡蛋+0.5%、白糖-1%</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">新能源材料</td>
            <td class="px-4 py-3 text-red-700 font-bold">走弱</td>
            <td class="px-4 py-3 text-slate-700">碳酸锂-4%、工业硅-2%、多晶硅-5%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>重点品种分析</h2>

    <!-- 原油及相关品种 -->
    <h3 id="f_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">原油及相关品种</h3>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>品种分析·原油（SC2605）
      </h4>
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-orange-600 text-sm">最新价</p>
          <p class="text-orange-900 font-black text-xl">764.9 元/桶</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-orange-600 text-sm">涨跌幅</p>
          <p class="text-green-600 font-black text-xl">+2.74%</p>
        </div>
      </div>
      <p class="text-orange-900 mb-2"><strong>趋势判断：</strong>上涨</p>
      <p class="text-orange-900 mb-2"><strong>驱动因素：</strong>中东地缘政治——霍尔木兹海峡封锁、伊朗南帕尔斯气田遭袭、阿联酋石油设施遇袭</p>
      <p class="text-orange-900 mb-2"><strong>操作建议：</strong>逢低做多</p>
      <div class="bg-white/70 rounded-lg p-3 mt-3">
        <p class="text-orange-800 font-bold mb-2">核心逻辑：</p>
        <ul class="space-y-1 text-orange-900 text-sm">
          <li>• 霍尔木兹海峡航运几乎完全中断，全球约2000万桶/日石油供应被封锁</li>
          <li>• 花旗银行将布伦特原油短线基线预测上调至110-120美元/桶</li>
          <li>• 美国已摧毁30艘布雷船，但航运恢复仍需时日</li>
          <li>• 特朗普暂停《琼斯法案》60天以缓解油价上涨压力</li>
        </ul>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>品种分析·甲醇（MA2605）
      </h4>
      <div class="grid grid-cols-3 gap-4 mb-3">
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-orange-600 text-sm">最新价</p>
          <p class="text-orange-900 font-black text-xl">2943 元/吨</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-orange-600 text-sm">涨跌幅</p>
          <p class="text-green-600 font-black text-xl">+4.44%</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-orange-600 text-sm">持仓量</p>
          <p class="text-orange-900 font-black text-xl">63万手</p>
        </div>
      </div>
      <p class="text-orange-900 mb-2"><strong>趋势判断：</strong>大幅上涨</p>
      <p class="text-orange-900 mb-2"><strong>驱动因素：</strong>伊朗装置全停+港口去库加速</p>
      <p class="text-orange-900 mb-2"><strong>操作建议：</strong>波段操作</p>
      <div class="bg-white/70 rounded-lg p-3 mt-3">
        <p class="text-orange-800 font-bold mb-2">核心逻辑：</p>
        <ul class="space-y-1 text-orange-900 text-sm">
          <li>• 伊朗是全球第一大甲醇出口国，中国从伊朗进口甲醇占总进口量约60%</li>
          <li>• 伊朗甲醇装置目前全停，3月份进口预期大幅缩量</li>
          <li>• 港口库存降至129万吨，环比下降12万吨</li>
        </ul>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-blue-800 font-bold mb-2">燃料油（LU2605）</h4>
      <p class="text-blue-900">夜盘涨超5%，<strong>趋势判断：强势上涨</strong>。驱动因素：原油成本推动+航运绕行增加需求。操作建议：跟随原油做多。</p>
    </div>

    <!-- 贵金属 -->
    <h3 id="f_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">贵金属</h3>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📉</span>品种分析·黄金（AU2606）
      </h4>
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-red-600 text-sm">最新价</p>
          <p class="text-red-900 font-black text-xl">1116.2 元/克</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-red-600 text-sm">涨跌幅</p>
          <p class="text-red-600 font-black text-xl">-1.31%</p>
        </div>
      </div>
      <p class="text-red-900 mb-2"><strong>趋势判断：</strong>高位回调</p>
      <p class="text-red-900 mb-2"><strong>驱动因素：</strong>美联储鹰派表态+美元走强</p>
      <p class="text-red-900 mb-2"><strong>操作建议：</strong>观望为主</p>
      <div class="bg-white/70 rounded-lg p-3 mt-3">
        <p class="text-red-800 font-bold mb-2">核心逻辑：</p>
        <ul class="space-y-1 text-red-900 text-sm">
          <li>• 美联储3月会议维持利率在3.5%-3.75%不变，点阵图显示年内仅降息一次</li>
          <li>• 鲍威尔释放鹰派信号，强调通胀顽固、不确定性上升</li>
          <li>• 美元指数重返100大关，对金价形成压制</li>
          <li>• 但中东地缘风险未消退，中长期看多逻辑仍在</li>
        </ul>
      </div>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2">白银（AG2606）</h4>
      <p class="text-red-900">最新价20682元/千克，跌幅-4.59%。<strong>趋势判断：大幅回调</strong>。驱动因素：工业属性拖累+贵金属整体走弱。操作建议：多看少动。</p>
    </div>

    <!-- 有色金属 -->
    <h3 id="f_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">有色金属</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">铜（CU2604）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：99140元/吨，跌幅-0.92%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>震荡偏弱</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>逢低短多。全球三大交易所库存合计128.2万吨，铜精矿TC为-60.39美元/吨，矿紧预期对铜价仍有支撑。</p>
      </div>
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">铝（AL2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：24915元/吨，跌幅-0.52%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>高位震荡</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>回调企稳后配置多单。中东地区55.9万吨电解铝产能明确停产。</p>
      </div>
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">氧化铝（AO2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：3076元/吨，涨幅+1.59%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>震荡偏强</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>区间操作。几内亚铝土矿政策预期+海运费上涨。</p>
      </div>
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">锡（SN2604）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：370920元/吨，跌幅-2.34%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>承压回调</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>短期观望。佤邦复产预期+印尼出口政策研究。</p>
      </div>
    </div>

    <!-- 黑色建材 -->
    <h3 id="f_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">黑色建材</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">螺纹钢</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：3120元/吨</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>震荡整理</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>区间操作</p>
      </div>
      <div class="bg-red-50 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">玻璃（FG2605）</h4>
        <p class="text-slate-700 text-sm mb-2">日内跌超2%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>偏弱运行</p>
        <p class="text-red-700 text-sm"><strong>建议：</strong>逢高沽空</p>
      </div>
      <div class="bg-green-50 rounded-xl p-4">
        <h4 class="text-green-800 font-bold mb-2">铁矿石（I2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：816.5元/吨，+1.81%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>震荡偏强</p>
        <p class="text-green-700 text-sm"><strong>建议：</strong>逢低做多</p>
      </div>
    </div>

    <!-- 农产品 -->
    <h3 id="f_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">农产品</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>品种分析·豆粕（M2605）
      </h4>
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-green-600 text-sm">最新价</p>
          <p class="text-green-900 font-black text-xl">3380 元/吨</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-green-600 text-sm">基差</p>
          <p class="text-green-900 font-black text-xl">296 元/吨</p>
        </div>
      </div>
      <p class="text-green-900 mb-2"><strong>趋势判断：</strong>偏强震荡</p>
      <p class="text-green-900 mb-2"><strong>驱动因素：</strong>巴西检验新规影响出口+库存去化</p>
      <p class="text-green-900 mb-2"><strong>操作建议：</strong>逢低做多</p>
      <div class="bg-white/70 rounded-lg p-3 mt-3">
        <p class="text-green-800 font-bold mb-2">核心逻辑：</p>
        <ul class="space-y-1 text-green-900 text-sm">
          <li>• 豆粕库存降至59万吨，环比减少13万吨</li>
          <li>• 港口大豆库存522万吨，环比-45万吨</li>
          <li>• 巴西农业部将赴华磋商大豆检疫问题</li>
          <li>• 5-9价差由负转正，反映供应偏紧预期</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div class="bg-slate-50 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold mb-2">棕榈油（P2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：9954元/吨，+0.30%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>偏强震荡</p>
        <p class="text-slate-700 text-sm"><strong>建议：</strong>逢低做多。印尼B50政策预期+地缘冲突。</p>
      </div>
      <div class="bg-red-50 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">生猪（LH2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：10695元/吨，-1.06%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>偏弱运行</p>
        <p class="text-red-700 text-sm"><strong>建议：</strong>反弹抛空。需求淡季+出栏意愿强。</p>
      </div>
    </div>

    <!-- 新能源材料 -->
    <h3 id="f_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新能源材料</h3>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>品种分析·碳酸锂（LC2605）
      </h4>
      <div class="grid grid-cols-3 gap-4 mb-3">
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-amber-600 text-sm">最新价</p>
          <p class="text-amber-900 font-black text-xl">150120 元/吨</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-amber-600 text-sm">涨跌幅</p>
          <p class="text-red-600 font-black text-xl">-4.43%</p>
        </div>
        <div class="bg-white/50 rounded-lg p-3">
          <p class="text-amber-600 text-sm">持仓量</p>
          <p class="text-amber-900 font-black text-xl">307422手</p>
        </div>
      </div>
      <p class="text-amber-900 mb-2"><strong>趋势判断：</strong>高位震荡</p>
      <p class="text-amber-900 mb-2"><strong>驱动因素：</strong>供给扰动+需求疲软博弈</p>
      <p class="text-amber-900 mb-2"><strong>操作建议：</strong>区间操作</p>
      <div class="bg-white/70 rounded-lg p-3 mt-3">
        <p class="text-amber-800 font-bold mb-2">核心逻辑：</p>
        <ul class="space-y-1 text-amber-900 text-sm">
          <li>• 津巴布韦禁止锂精矿出口，仅持有效采矿权及获批选矿厂的企业具备出口资格</li>
          <li>• 1-2月新能源汽车累计销量171万辆，同比下滑6.9%</li>
          <li>• SMM周度碳酸锂库存98958吨，环比去库415吨，处于近几年最低水平</li>
          <li>• 低库存水平下，下方支撑明显</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div class="bg-red-50 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">工业硅（SI2605）</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：8675元/吨，-0.12%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>震荡偏弱</p>
        <p class="text-red-700 text-sm"><strong>建议：</strong>关注9000元/吨附近做空机会</p>
      </div>
      <div class="bg-red-50 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">多晶硅</h4>
        <p class="text-slate-700 text-sm mb-2">最新价：42040元/吨，-2.04%</p>
        <p class="text-slate-700 text-sm mb-2"><strong>趋势：</strong>偏弱运行</p>
        <p class="text-red-700 text-sm"><strong>建议：</strong>观望。高库存压力+需求疲软</p>
      </div>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>交易机会推荐</h2>

    <!-- 做多机会 -->
    <h3 id="f_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做多机会</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-green-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种</th>
            <th class="px-4 py-3 text-left">推荐理由</th>
            <th class="px-4 py-3 text-center">入场位</th>
            <th class="px-4 py-3 text-center">止损位</th>
            <th class="px-4 py-3 text-center">目标位</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">原油（SC2605）</td>
            <td class="px-4 py-3 text-slate-700">霍尔木兹海峡封锁，供应中断2000万桶/日</td>
            <td class="px-4 py-3 text-center font-bold">750元/桶</td>
            <td class="px-4 py-3 text-center text-red-600">700元/桶</td>
            <td class="px-4 py-3 text-center text-green-600">850元/桶</td>
          </tr>
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">甲醇（MA2605）</td>
            <td class="px-4 py-3 text-slate-700">伊朗装置全停，港口去库加速</td>
            <td class="px-4 py-3 text-center font-bold">2900元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">2700元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">3300元/吨</td>
          </tr>
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">豆粕（M2605）</td>
            <td class="px-4 py-3 text-slate-700">巴西检验新规影响出口，库存去化明显</td>
            <td class="px-4 py-3 text-center font-bold">3300元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">3100元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">3600元/吨</td>
          </tr>
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">棕榈油（P2605）</td>
            <td class="px-4 py-3 text-slate-700">印尼B50政策预期+地缘冲突</td>
            <td class="px-4 py-3 text-center font-bold">9800元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">9400元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">10500元/吨</td>
          </tr>
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">乙二醇（MEG2605）</td>
            <td class="px-4 py-3 text-slate-700">行业开工率降至52%，供应偏紧</td>
            <td class="px-4 py-3 text-center font-bold">4750元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">4500元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">5200元/吨</td>
          </tr>
          <tr class="hover:bg-green-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">铁矿石（I2605）</td>
            <td class="px-4 py-3 text-slate-700">钢厂复产+成本支撑</td>
            <td class="px-4 py-3 text-center font-bold">800元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">750元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">900元/吨</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 做空机会 -->
    <h3 id="f_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做空机会</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-red-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种</th>
            <th class="px-4 py-3 text-left">推荐理由</th>
            <th class="px-4 py-3 text-center">入场位</th>
            <th class="px-4 py-3 text-center">止损位</th>
            <th class="px-4 py-3 text-center">目标位</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">碳酸锂（LC2605）</td>
            <td class="px-4 py-3 text-slate-700">新能源汽车销量下滑，4月需求或回落</td>
            <td class="px-4 py-3 text-center font-bold">155000元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">165000元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">135000元/吨</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">多晶硅</td>
            <td class="px-4 py-3 text-slate-700">高库存压力+需求疲软</td>
            <td class="px-4 py-3 text-center font-bold">43000元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">46000元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">38000元/吨</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">生猪（LH2605）</td>
            <td class="px-4 py-3 text-slate-700">需求淡季+出栏意愿强</td>
            <td class="px-4 py-3 text-center font-bold">10800元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">11200元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">10000元/吨</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">玻璃（FG2605）</td>
            <td class="px-4 py-3 text-slate-700">高库存+需求表现一般</td>
            <td class="px-4 py-3 text-center font-bold">1050元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">1100元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">950元/吨</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">沪锡（SN2604）</td>
            <td class="px-4 py-3 text-slate-700">佤邦复产预期+印尼出口政策研究</td>
            <td class="px-4 py-3 text-center font-bold">375000元/吨</td>
            <td class="px-4 py-3 text-center text-green-600">390000元/吨</td>
            <td class="px-4 py-3 text-center text-red-600">340000元/吨</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 套利策略 -->
    <h3 id="f_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">套利策略</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">套利组合</th>
            <th class="px-4 py-3 text-left">策略</th>
            <th class="px-4 py-3 text-left">逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">多甲醇空原油</td>
            <td class="px-4 py-3 text-green-600 font-bold">做多价差</td>
            <td class="px-4 py-3 text-slate-700">甲醇因伊朗供应中断涨幅高于原油</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">多氧化铝空电解铝</td>
            <td class="px-4 py-3 text-green-600 font-bold">做多价差</td>
            <td class="px-4 py-3 text-slate-700">成本推动与供应扰动的价差扩大</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">多棕榈油空豆油</td>
            <td class="px-4 py-3 text-green-600 font-bold">做多价差</td>
            <td class="px-4 py-3 text-slate-700">印尼B50政策预期支撑棕榈油</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">多铁矿石空螺纹钢</td>
            <td class="px-4 py-3 text-green-600 font-bold">做多价差</td>
            <td class="px-4 py-3 text-slate-700">原料端强于成材端</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示</h2>

    <h3 id="f_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">核心风险与仓位管理</h3>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚠️</span>需警惕的品种和因素
      </h4>
      <ul class="space-y-3 text-red-900">
        <li class="py-2 border-b border-red-100">
          <strong>1. 中东局势缓和风险</strong>
          <p class="text-sm mt-1">若霍尔木兹海峡恢复通航，原油及相关能化品种可能大幅回调。建议密切关注特朗普政府外交动向及伊朗官方表态。</p>
        </li>
        <li class="py-2 border-b border-red-100">
          <strong>2. 美联储政策超预期鹰派</strong>
          <p class="text-sm mt-1">若通胀数据持续走高，美联储可能释放加息信号，将对贵金属、有色金属等形成进一步压制。</p>
        </li>
        <li class="py-2 border-b border-red-100">
          <strong>3. 国内需求不及预期</strong>
          <p class="text-sm mt-1">"金三银四"旺季若需求验证不及预期，黑色建材可能承压。关注房地产销售数据及基建投资进度。</p>
        </li>
        <li class="py-2 border-b border-red-100">
          <strong>4. 部分品种高库存压力</strong>
          <p class="text-sm mt-1">碳酸锂、多晶硅、玻璃等品种库存处于高位，若供应端扰动缓解，价格可能快速回落。</p>
        </li>
        <li class="py-2">
          <strong>5. 政策变化风险</strong>
          <p class="text-sm mt-1">几内亚铝土矿政策、巴西大豆检疫政策等存在不确定性，建议设置合理止损，控制仓位。</p>
        </li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📋</span>仓位管理建议
      </h4>
      <ul class="space-y-2 text-blue-900">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>单品种仓位：</strong>不超过总资金的15%</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>相关品种总仓位：</strong>不超过总资金的30%</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>止损设置：</strong>严格执行，建议设置为入场价的3%-5%</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>止盈策略：</strong>达到目标位后可分批减仓，保留部分仓位博取超额收益</span></li>
      </ul>
    </div>

    <div class="bg-slate-100 rounded-xl p-5 my-6">
      <h4 class="text-slate-800 font-bold mb-3">市场主线总结</h4>
      <p class="text-slate-700 mb-3">中东地缘政治风险是当前市场的主导因素，能源及能化品种受益于供应收紧预期，表现强势；美联储鹰派表态压制贵金属和有色金属表现；农产品板块分化，受供需基本面影响较大。</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p class="text-slate-800 font-bold mb-2">操作策略：</p>
          <ul class="space-y-1 text-slate-700 text-sm">
            <li>• <strong>顺势而为：</strong>能源化工板块维持逢低做多思路</li>
            <li>• <strong>谨慎观望：</strong>贵金属短期回调压力较大，等待企稳信号</li>
            <li>• <strong>精选品种：</strong>农产品板块关注豆粕、棕榈油等供需偏紧品种</li>
            <li>• <strong>控制风险：</strong>严格设置止损，避免地缘局势突变带来的大幅波动</li>
          </ul>
        </div>
        <div>
          <p class="text-slate-800 font-bold mb-2">核心关注：</p>
          <ul class="space-y-1 text-slate-700 text-sm">
            <li>• 霍尔木兹海峡通航恢复时间</li>
            <li>• 美联储下半年降息路径</li>
            <li>• 国内"金三银四"需求验证</li>
            <li>• 部分品种供应端政策变化</li>
          </ul>
        </div>
      </div>
    </div>

    <p class="text-slate-500 text-sm mt-8 text-center">报告生成时间：2026-03-19 | 数据来源：东方财富期货数据中心、各交易所公开信息</p>
    <p class="text-slate-400 text-xs mt-2 text-center">免责声明：本报告基于公开数据进行分析，仅供参考，不构成任何投资建议。期货市场风险较大，投资者应根据自己的风险承受能力谨慎决策。</p>

  </div>`;
}