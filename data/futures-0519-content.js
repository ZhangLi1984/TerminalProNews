// 期货市场分析内容 - 2026-05-19
function renderFuturesContent_0519() {
  return `<div class="prose prose-slate max-w-none">

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-5 my-5">
      <h4 class="text-orange-800 font-black mb-2 flex items-center"><span class="text-xl mr-2">📈</span>期货市场分析 - 2026年5月19日</h4>
      <p class="text-orange-900 text-sm">综合宏观研报、券商晨报及大宗商品数据，研判各板块品种趋势与交易机会。数据来源：中诚信国际、东吴证券、光大期货、国信证券等</p>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、商品市场总览</h2>

    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-3 flex items-center"><span class="text-xl mr-2">🔥</span>核心矛盾：地缘溢价 vs 需求疲软</h4>
      <p class="text-red-900 text-sm mb-3">当前商品市场处于"地缘溢价高位+国内需求疲弱"的拉锯状态。霍尔木兹海峡处于"双重封锁"胶着期，原油库存继续下降，美油突破100美元/桶。同时国内PPI从0.5%大幅跳升至2.8%，石油开采业PPI环比+18.5%，输入性通胀压力显著。但国内信贷-4006亿创历史罕见负值，社零+0.2%创三年新低，实体需求端支撑有限。</p>
    </div>

    <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">主要品种行情概览</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr><th class="px-4 py-3 text-left">品种</th><th class="px-4 py-3 text-center">板块</th><th class="px-4 py-3 text-center">趋势判断</th><th class="px-4 py-3 text-left">核心驱动</th><th class="px-4 py-3 text-center">操作建议</th></tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">原油（WTI/Brent）</td>
            <td class="px-4 py-3 text-center">能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-bold">偏强震荡</span></td>
            <td class="px-4 py-3 text-sm">霍尔木兹海峡封锁+美国CPI 3.8%、PPI 6%</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">逢低做多</span></td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">黄金</td>
            <td class="px-4 py-3 text-center">贵金属</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold">高位震荡</span></td>
            <td class="px-4 py-3 text-sm">地缘避险+央行购金逻辑未变，美债利率上行压制</td>
            <td class="px-4 py-3 text-center"><span class="text-amber-600 font-bold">标配持有</span></td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">白银</td>
            <td class="px-4 py-3 text-center">贵金属</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold">强势拉升</span></td>
            <td class="px-4 py-3 text-sm">避险情绪升温，应声拉升</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">短线跟进</span></td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">铜</td>
            <td class="px-4 py-3 text-center">有色</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-bold">偏强</span></td>
            <td class="px-4 py-3 text-sm">AI产业链拉动需求+能源转型用铜</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">逢低做多</span></td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">碳酸锂</td>
            <td class="px-4 py-3 text-center">新能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">反弹走强</span></td>
            <td class="px-4 py-3 text-sm">触及20万/吨，储能需求旺盛，磷酸铁锂加工费普涨</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">趋势跟随</span></td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">螺纹钢</td>
            <td class="px-4 py-3 text-center">黑色</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">加速上涨</span></td>
            <td class="px-4 py-3 text-sm">4月下旬至5月上旬加速上涨，需求回暖信号</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">顺势做多</span></td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">生猪</td>
            <td class="px-4 py-3 text-center">农产品</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-xs font-bold">底部震荡</span></td>
            <td class="px-4 py-3 text-sm">猪价9.60元/kg（-34.87%），产能去化中</td>
            <td class="px-4 py-3 text-center"><span class="text-amber-600 font-bold">观望等待</span></td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">动力煤/焦煤</td>
            <td class="px-4 py-3 text-center">能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-bold">稳中偏强</span></td>
            <td class="px-4 py-3 text-sm">地缘扰动延续煤价稳中向好，旺季上行有强支撑</td>
            <td class="px-4 py-3 text-center"><span class="text-green-600 font-bold">逢低配置</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="f_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">品种趋势判断矩阵</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr><th class="px-4 py-3 text-left">品种</th><th class="px-4 py-3 text-center">短期（1-2周）</th><th class="px-4 py-3 text-center">中期（1-3月）</th><th class="px-4 py-3 text-center">关键价位/事件</th></tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold">原油</td><td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">偏强</span></td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">高位震荡</span></td><td class="px-4 py-3 text-sm">美伊谈判进展是核心变量</td></tr>
          <tr><td class="px-4 py-3 font-bold">黄金</td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">震荡</span></td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">温和上行</span></td><td class="px-4 py-3 text-sm">美债利率突破5%形成压制</td></tr>
          <tr><td class="px-4 py-3 font-bold">铜</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">偏强</span></td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">震荡上行</span></td><td class="px-4 py-3 text-sm">AI产业链拉动+能源转型需求</td></tr>
          <tr><td class="px-4 py-3 font-bold">碳酸锂</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">偏强</span></td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">趋势上行</span></td><td class="px-4 py-3 text-sm">关注能否站稳20万/吨</td></tr>
          <tr><td class="px-4 py-3 font-bold">螺纹钢</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">偏强</span></td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">高位震荡</span></td><td class="px-4 py-3 text-sm">1万亿特别国债下达进度</td></tr>
          <tr><td class="px-4 py-3 font-bold">生猪</td><td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">底部震荡</span></td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">等待拐点</span></td><td class="px-4 py-3 text-sm">5月能繁母猪存栏数据</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、板块品种分析</h2>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·能源化工</h4>
      <p class="text-orange-900"><strong>原油：</strong>霍尔木兹海峡处于"双重封锁"胶着期，呈现长期化趋势。美国4月PPI飙升至6%（2022年12月以来新高），能源冲击正从弹性部分扩散至黏性部分。美油已突破100美元/桶，地缘溢价充分定价。券商9/9家均提及此风险。短期偏强震荡，但需警惕美伊谈判超预期突破导致的回调风险。<br/><strong>煤炭：</strong>地缘扰动延续煤价稳中向好，旺季煤价上行存在强支撑。开源证券认为"地缘扰动延续煤价稳中向好"。动力煤/焦煤建议逢低配置，受益于能源替代逻辑。<br/><strong>化工品：</strong>PPI跳升背景下，石油开采业PPI环比+18.5%，化工链涨价传导顺畅。关注煤化工成本优势凸显后的利润弹性。</p>
    </div>

    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-yellow-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·贵金属</h4>
      <p class="text-yellow-900"><strong>黄金：</strong>地缘不确定性支撑金价，但美债利率突破5%压制实际收益。央行购金逻辑未变，但短期冲高回落风险加大。建议标配持有，作为组合的防御对冲工具。<br/><strong>白银：</strong>地缘避险情绪升温，白银应声拉升。工业需求（光伏/电子）叠加避险属性，短期弹性高于黄金。但波动率也更大，适合短线操作。</p>
    </div>

    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-cyan-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·有色金属</h4>
      <p class="text-cyan-900"><strong>铜：</strong>AI产业链拉动铜需求（数据中心/电力设备）+能源转型用铜（新能源车/光伏）双逻辑驱动。洛阳钼业Q1营收+44.3%、利润+96.7%验证涨价周期。建议逢低做多，中期震荡上行。<br/><strong>铝：</strong>集思录社区讨论明泰铝业（601677），LME/沪铝库存分化，出口占比高（28%），吨铝加工利润提升。但铝加工是低毛利生意（7.2%），反弹已20%+，追高风险。</p>
    </div>

    <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·黑色金属</h4>
      <p class="text-slate-900"><strong>螺纹钢：</strong>4月下旬至5月上旬加速上涨，反映需求回暖信号。国信证券指出螺纹钢价格上涨是需求回暖的重要指标。1万亿超长期特别国债6月底前基本下达完毕，基建投资有望加速，利好建筑建材板块。但需关注PMI新订单指数能否维持在50以上。<br/><strong>铁矿石：</strong>跟随成材走势，关注钢厂复产节奏和库存变化。</p>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·农产品</h4>
      <p class="text-green-900"><strong>生猪：</strong>猪价9.60元/kg（同比-34.87%），能繁母猪存栏3904万头（环比-1.44%），政策将正常保有量调减至3750万头。行业冰点已现，产能去化进行中。但二育托底增强，产能去化尚未加速。建议观望，等待5月能繁存栏数据和猪价企稳信号。<br/><strong>碳酸锂（新能源品种）：</strong>碳酸锂期货触及20万/吨，磷酸铁锂大客户加工费普涨1500-2000元/吨。2026Q1隔膜出货97亿平（+51%），5-6月满产状态。六氟磷酸锂从底部涨至10.6万/吨（+8.7%），预计Q3供应缺口。趋势明确，逢低做多为主。</p>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>三、交易机会与风险提示</h2>

    <h3 id="f_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">交易机会</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>做多机会</h4>
      <ul class="space-y-3">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>原油（WTI/Brent）：</strong>逢低做多。霍尔木兹海峡封锁+美国通胀高企，能源价格中枢上移。回调至95美元附近可加仓。止损：美伊谈判超预期突破</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>碳酸锂：</strong>趋势跟随。20万/吨是关键心理关口，若站稳则打开上行空间至25万/吨。核心驱动：储能需求爆发+六氟磷酸锂Q3供应缺口</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>铜：</strong>逢低做多。AI产业链拉动+能源转型需求，中长期供需格局偏紧。回调至支撑位可布局</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>螺纹钢：</strong>顺势做多。特别国债下达+基建投资加速预期，需求回暖信号明确</span></li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>做空机会</h4>
      <ul class="space-y-3">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>生猪：</strong>暂无做空机会。价格已处周期底部，下行空间有限。等待做多信号（猪价企稳+产能去化加速）</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>黄金：</strong>若美债利率持续突破5%且地缘缓和，短线可轻仓试空。但中长期看多逻辑不变，严格止损</span></li>
      </ul>
    </div>

    <h3 id="f_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">风险提示</h3>

    <div class="space-y-4 my-5">
      <div class="bg-red-50 border border-red-200 rounded-xl p-5">
        <h4 class="text-red-800 font-bold mb-2">1. 霍尔木兹海峡突然解封（极高风险）</h4>
        <p class="text-red-900 text-sm">若美伊谈判取得突破性进展，霍尔木兹海峡通航恢复，原油可能在数日内暴跌10-15美元/桶。多头需严格设置止损，或在关键事件窗口前减仓。</p>
      </div>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
        <h4 class="text-orange-800 font-bold mb-2">2. 美联储政策超预期偏鹰（高风险）</h4>
        <p class="text-orange-900 text-sm">6月FOMC会议（沃什首次主持），若释放加息信号，美债利率可能突破5.5%，黄金/白银/铜等品种将承压回调。</p>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h4 class="text-amber-800 font-bold mb-2">3. 国内需求证伪（中高风险）</h4>
        <p class="text-amber-900 text-sm">若5-6月PMI新订单指数持续低于50，或特别国债下达后基建投资未加速，螺纹钢等黑色品种将面临回调风险。</p>
      </div>
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h4 class="text-yellow-800 font-bold mb-2">4. 碳酸锂价格见顶回落（中等风险）</h4>
        <p class="text-yellow-900 text-sm">若20万/吨未能站稳且储能采招环比连续两季度下滑，碳酸锂多头逻辑将被证伪，需立即减仓。</p>
      </div>
    </div>

    <div class="mt-10 pt-6 border-t border-slate-200 text-center">
      <p class="text-xs text-slate-400">本报告基于宏观研报、券商晨报及大宗商品数据综合研判，不构成投资建议。期货市场风险较大，投资需谨慎。</p>
    </div>

  </div>`;
}
