// ==========================================
// 宏观研究内容渲染 - 2026年5月7日
// ==========================================

function renderMacroContent_0507() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-10 text-white">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-4xl">&#128202;</span>
        <div>
          <h1 class="text-2xl font-black tracking-tight">宏观研究 &#183; 买方策略内参</h1>
          <p class="text-slate-400 text-sm mt-1">2026年5月7日 | 覆盖50篇宏观研报（方正中期、光大期货、东海期货、诚通证券、开源证券、宝城期货、国金证券、五矿证券等）</p>
        </div>
      </div>
      <div class="bg-white/10 rounded-xl p-4 mt-4">
        <p class="text-slate-200 text-sm leading-relaxed">
          核心画像："外需强+内需弱"的非对称复苏格局。Q1 GDP 5.0%超预期，PPI结束41个月通缩首次转正至+0.5%。霍尔木兹海峡地缘冲突推升油价中枢至100-115美元，美联储降息预期推迟至2027年底。政策从总量刺激转向结构发力，AI+、能源安全、"六张网"新基建为确定性主线。
        </p>
      </div>
    </div>

    <!-- 一、宏观经济数据快照 -->
    <h2 id="m_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、宏观经济数据快照
    </h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.1 增长指标：外需拉动为主，内需修复偏弱</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">最新值</th>
            <th class="px-4 py-3 text-left">趋势</th>
            <th class="px-4 py-3 text-left">解读</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">Q1 GDP同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">5.0%</span></td>
            <td class="px-4 py-3 text-slate-700">企稳回升</td>
            <td class="px-4 py-3 text-green-800 font-bold">一季度经济超预期，名义GDP同比4.94%大幅反弹</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">4月制造业PMI</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">50.3</span></td>
            <td class="px-4 py-3 text-slate-700">微降但强于季节性</td>
            <td class="px-4 py-3 text-slate-700">过去10年4月平均回落0.8个百分点，今年仅回落0.1，"淡季不淡"</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">4月非制造业PMI</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">49.4</span></td>
            <td class="px-4 py-3 text-slate-700">收缩区间</td>
            <td class="px-4 py-3 text-red-800 font-bold">建筑业48.0%、服务业49.6%，均处于收缩，地产拖累显著</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">Q1出口累计同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">+14.7%</span></td>
            <td class="px-4 py-3 text-slate-700">强劲</td>
            <td class="px-4 py-3 text-slate-700">机电产品出口增长18.3%，占出口总值63.4%，Q1经济超预期核心支撑</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">Q1社零累计同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">+2.4%</span></td>
            <td class="px-4 py-3 text-slate-700">偏弱</td>
            <td class="px-4 py-3 text-red-800 font-bold">汽车类同比-11.8%，拖累明显，居民消费意愿不足</td>
          </tr>
          <tr class="hover:bg-orange-50 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">Q1固投累计同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-sm font-bold">+1.7%</span></td>
            <td class="px-4 py-3 text-slate-700">放缓</td>
            <td class="px-4 py-3 text-slate-700">基建8.9%支撑，地产-11.2%拖累，结构分化明显</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.2 通胀指标：PPI转正，输入性通胀是主线</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">最新值</th>
            <th class="px-4 py-3 text-left">解读</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">CPI同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">1.0%</span></td>
            <td class="px-4 py-3 text-slate-700">春节后食品和服务价格季节性回落，核心CPI 1.1%保持温和</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">PPI同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">+0.5%</span></td>
            <td class="px-4 py-3 text-green-800 font-bold">连续41个月下降后首次转正，环比+1.0%为48个月最大涨幅，通缩终结标志</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">PMI购进价格指数</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">63.7%</span></td>
            <td class="px-4 py-3 text-red-800 font-bold">历史高位（88%分位数），出厂价格55.1%，价差创近两年最低，上游成本向下游传导不畅</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.3 金融数据：信用扩张放缓，流动性充裕</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">最新值</th>
            <th class="px-4 py-3 text-left">解读</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">3月新增信贷</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">3.15万亿</span></td>
            <td class="px-4 py-3 text-red-800 font-bold">同比-17.56%，住户中长期贷款同比少增2094亿，实体融资需求偏弱</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">社融存量同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-sm font-bold">7.9%</span></td>
            <td class="px-4 py-3 text-slate-700">较2月回落0.3个百分点</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">M2 / M1同比</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">8.5% / 5.1%</span></td>
            <td class="px-4 py-3 text-slate-700">货币信贷增速差继续收窄至3.4pct，资金活化程度边际改善</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">DR007</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-sm font-bold">1.2710%</span></td>
            <td class="px-4 py-3 text-orange-800 font-bold">资金面极度宽松；央行5月3M买断式回购缩量5000亿显示态度微调</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.4 海外数据：美国投资驱动复苏，全球央行边际转鹰</h3>

    <ul class="space-y-3 my-4">
      <li class="py-2.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美国Q1 GDP：</strong>环比折年率+2.0%，同比+2.7%，私人投资（AI资本开支）为核心驱动，Q1私人投资环比+8.7%对GDP拉动1.48个百分点</span>
      </li>
      <li class="py-2.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美国3月CPI：</strong>同比3.3%（前值2.4%），核心PCE 3.2%，能源价格推升通胀，通胀定性从"略微升高"升级为"高企"</span>
      </li>
      <li class="py-2.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美联储：</strong>维持利率3.5%-3.75%不变，内部8:4分歧创34年之最，降息预期推迟至2027年底，沃什即将就任主席</span>
      </li>
      <li class="py-2.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>欧元区：</strong>Q1 GDP同比仅0.8%，4月HICP突破3%至3.04%，面临"滞胀"风险；欧洲央行维持存款利率2.00%不变</span>
      </li>
    </ul>

    <!-- 二、核心宏观观点 -->
    <h2 id="m_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、核心宏观观点
    </h2>

    <!-- 观点1 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#127919;</span>观点1：中国经济处于"外需强+内需弱"的非对称复苏格局（共识度：高）
      </h4>
      <p class="text-blue-900 text-sm leading-relaxed mb-3">
        <strong>来源：</strong>方正中期、光大期货、东海期货、诚通证券、开源证券（50篇研报中80%+认同）
      </p>
      <p class="text-blue-900 text-sm leading-relaxed mb-3">
        Q1 GDP 5.0%的超预期增长主要靠出口（+14.7%）和基建投资（+8.9%）拉动，而消费（+2.4%）和房地产投资（-11.2%）仍然疲弱。制造业PMI 50.3好于季节性，但非制造业PMI 49.4已落入收缩区间，显示经济修复呈现"工业强、服务弱"的分化特征。
      </p>
      <div class="bg-white/60 rounded-lg p-3 mt-2">
        <p class="text-blue-800 text-sm font-bold">&#128161; 投资含义：</p>
        <p class="text-blue-900 text-sm mt-1">出口链（机电、新能源、汽车零部件）和基建链（工程机械、建材、水利）仍是确定性最高的配置方向。</p>
      </div>
    </div>

    <!-- 观点2 -->
    <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#127758;</span>观点2：霍尔木兹海峡地缘冲突是2026年最大的宏观变量（共识度：高）
      </h4>
      <p class="text-orange-900 text-sm leading-relaxed mb-3">
        <strong>来源：</strong>国金证券（2篇）、开源证券、宝城期货、光大期货
      </p>
      <p class="text-orange-900 text-sm leading-relaxed mb-3">
        美伊冲突已持续2月有余，霍尔木兹海峡通航量不足战前5%，布伦特原油在100-115美元/桶区间震荡。这一地缘冲击正在从"价格冲击"演变为"供应链冲击"：日韩化工生产大幅回落，中国能化开工率下降但以成本冲击为主。阿联酋宣布退出OPEC+机制并逐步增产，但远水难解近渴。
      </p>
      <div class="bg-white/60 rounded-lg p-3 mt-2">
        <p class="text-orange-800 text-sm font-bold">&#128161; 投资含义：</p>
        <p class="text-orange-900 text-sm mt-1">短期利好能源（煤炭、石油石化）、煤化工替代路线（电石法PVC、煤制乙二醇）；中期关注供应链安全（战略储备、关键矿产）；长期利好新能源替代加速。</p>
      </div>
    </div>

    <!-- 观点3 -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#127974;</span>观点3：美联储降息预期大幅推迟，全球流动性进入"紧缩观望期"（共识度：中高）
      </h4>
      <p class="text-red-900 text-sm leading-relaxed mb-3">
        <strong>来源：</strong>诚通证券、开源证券、宝城期货、五矿证券
      </p>
      <p class="text-red-900 text-sm leading-relaxed mb-3">
        美联储4月FOMC维持利率不变，内部出现8:4的显著分歧，3位票委反对保留"宽松偏向"措辞。鲍威尔留任理事但影响力受限，新主席沃什（倾向"降息+缩表"）即将上任。市场定价第一次降息已推迟至2027年底。欧央行可能6月加息，日央行加息预期归零。全球央行呈现"边际转鹰"态势。
      </p>
      <div class="bg-white/60 rounded-lg p-3 mt-2">
        <p class="text-red-800 text-sm font-bold">&#128161; 投资含义：</p>
        <p class="text-red-900 text-sm mt-1">中美利差收窄支撑人民币汇率（6.75-6.85区间），但制约国内降息空间；美元资产吸引力阶段性回升；贵金属高位震荡。</p>
      </div>
    </div>

    <!-- 观点4 -->
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#128221;</span>观点4：国内政策从"总量刺激"转向"结构发力"（共识度：高）
      </h4>
      <p class="text-purple-900 text-sm leading-relaxed mb-3">
        <strong>来源：</strong>五矿证券、方正中期、开源证券
      </p>
      <p class="text-purple-900 text-sm leading-relaxed mb-3">
        4月28日政治局会议定调"精准有效实施更加积极的财政政策和适度宽松的货币政策"，但强调"优化财政支出结构"。短期内全面降准降息的必要性下降，政策重心转向：
      </p>
      <ul class="space-y-2 mb-3">
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>投资端：</strong>水网、新型电网、算力网、城市地下管网等重大工程</span>
        </li>
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>产业端：</strong>"人工智能+"行动、反内卷（产能治理）、能源资源安全</span>
        </li>
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>风险端：</strong>稳房地产、化解地方债、中小金融机构改革</span>
        </li>
      </ul>
      <div class="bg-white/60 rounded-lg p-3 mt-2">
        <p class="text-purple-800 text-sm font-bold">&#128161; 投资含义：</p>
        <p class="text-purple-900 text-sm mt-1">AI算力基础设施、商业航天、城市更新（管网建材）、核电设备是政策确定性最高的方向。</p>
      </div>
    </div>

    <!-- 观点5 -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#128200;</span>观点5：A股估值合理水平在提升，不存在绝对"均值回归"（共识度：中）
      </h4>
      <p class="text-emerald-900 text-sm leading-relaxed mb-3">
        <strong>来源：</strong>诚通证券（宏观深度报告）
      </p>
      <p class="text-emerald-900 text-sm leading-relaxed mb-3">
        万得全A PE从2024年9月24日的15.6升至23.8（五年100%分位数），但报告指出：随着中国经济结构转型（新经济占比提升）和"反内卷"带来的市场集中度上升，企业市场势力增强，资本收益率ROE相对于必要收益率R的差距走阔，PB和PE的合理值在提升。因此，高估值分位数不一定意味着高估。
      </p>
      <div class="bg-white/60 rounded-lg p-3 mt-2">
        <p class="text-emerald-800 text-sm font-bold">&#128161; 投资含义：</p>
        <p class="text-emerald-900 text-sm mt-1">不宜简单以历史估值分位数判断A股贵贱，应关注市场势力持续增强的方向——AI、新能源、医药等具备技术壁垒的行业，以及产能出清后的周期龙头。</p>
      </div>
    </div>

    <!-- 三、预期差识别 -->
    <h2 id="m_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>三、预期差识别
    </h2>

    <!-- 预期差1 -->
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#9889;</span>预期差1：PPI回升幅度可能被低估
      </h4>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-amber-200 text-amber-900">
            <tr>
              <th class="px-4 py-2 text-left">维度</th>
              <th class="px-4 py-2 text-left">市场共识</th>
              <th class="px-4 py-2 text-left">实际数据</th>
              <th class="px-4 py-2 text-center">背离</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr>
              <td class="px-4 py-2 font-bold text-amber-900">PPI同比预期</td>
              <td class="px-4 py-2 text-slate-700">1.5%左右</td>
              <td class="px-4 py-2 text-slate-700">开源证券预计4月PPI同比3.4%</td>
              <td class="px-4 py-2 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-bold">上修空间大</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-amber-900 text-sm leading-relaxed">
        3月PPI仅微涨0.5%，但PMI购进价格指数63.7%处于历史高位（88%分位数），叠加低基数效应，4-5月PPI同比可能快速跳升至3-4%区间。<strong>当前市场尚未充分定价这一再通胀冲击。</strong>
      </p>
    </div>

    <!-- 预期差2 -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#127968;</span>预期差2：房地产"小阳春"的可持续性被高估
      </h4>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-red-200 text-red-900">
            <tr>
              <th class="px-4 py-2 text-left">维度</th>
              <th class="px-4 py-2 text-left">市场乐观预期</th>
              <th class="px-4 py-2 text-left">实际信号</th>
              <th class="px-4 py-2 text-center">风险</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-red-50">
              <td class="px-4 py-2 font-bold text-red-900">一线二手房成交</td>
              <td class="px-4 py-2 text-slate-700">持续放量</td>
              <td class="px-4 py-2 text-slate-700">北京、上海4月同比+7%/+21%但挂牌价指数仍在回落</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-bold">以价换量</span></td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-bold text-red-900">住户中长期贷款</td>
              <td class="px-4 py-2 text-slate-700">触底回升</td>
              <td class="px-4 py-2 text-slate-700">3月同比少增2094亿</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-bold">信贷不支持</span></td>
            </tr>
            <tr class="bg-red-50">
              <td class="px-4 py-2 font-bold text-red-900">建筑业PMI</td>
              <td class="px-4 py-2 text-slate-700">季节性恢复</td>
              <td class="px-4 py-2 text-slate-700">4月48.0%，创2020年3月以来最低</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-bold">实物工作量偏弱</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-red-900 text-sm leading-relaxed">
        研报普遍提示：春节后一线楼市"小阳春"主要靠政策放松驱动（北京放宽限购、上海松绑限购+公积金提额），缺乏收入改善支撑，参考2024年5月和9月的经验，成交放量后大概率再次走弱。
      </p>
    </div>

    <!-- 预期差3 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#127974;</span>预期差3：央行"宽松不降息"的操作框架被误读
      </h4>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-blue-200 text-blue-900">
            <tr>
              <th class="px-4 py-2 text-left">维度</th>
              <th class="px-4 py-2 text-left">市场误读</th>
              <th class="px-4 py-2 text-left">实际含义</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-blue-50">
              <td class="px-4 py-2 font-bold text-blue-900">LPR不变=政策转向</td>
              <td class="px-4 py-2 text-slate-700">错</td>
              <td class="px-4 py-2 text-slate-700">LPR不变是因为：①经济开局良好不需要强刺激；②地缘风险下需保持汇率稳定；③政策更倾向结构性工具（再贷款、买断式回购）</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-bold text-blue-900">DR007破1.2%=央行失控</td>
              <td class="px-4 py-2 text-slate-700">错</td>
              <td class="px-4 py-2 text-slate-700">央行5月3M买断式回购缩量5000亿，显示维护资金价格中枢不低于1.2%的态度明确，但限于工具频率，短期内宽松趋势不变</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 预期差4 -->
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">&#129302;</span>预期差4：AI投资对美国经济的支撑力被低估
      </h4>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-green-200 text-green-900">
            <tr>
              <th class="px-4 py-2 text-left">维度</th>
              <th class="px-4 py-2 text-left">市场认知</th>
              <th class="px-4 py-2 text-left">被低估的事实</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-green-50">
              <td class="px-4 py-2 font-bold text-green-900">美国科技巨头AI Capex</td>
              <td class="px-4 py-2 text-slate-700">增长但有限</td>
              <td class="px-4 py-2 text-slate-700">2026年微软+亚马逊+谷歌+Meta资本开支将达7250亿美元，同比+77%</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-bold text-green-900">对美国经济拉动</td>
              <td class="px-4 py-2 text-slate-700">次要因素</td>
              <td class="px-4 py-2 text-slate-700">Q1私人投资环比+8.7%，对GDP拉动1.48个百分点，是最大支撑</td>
            </tr>
            <tr class="bg-green-50">
              <td class="px-4 py-2 font-bold text-green-900">对中国出口拉动</td>
              <td class="px-4 py-2 text-slate-700">一般</td>
              <td class="px-4 py-2 text-slate-700">一季度集成电路出口金额同比+84.9%，AI相关设备/零部件需求旺盛</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 四、大类资产配置建议 -->
    <h2 id="m_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、大类资产配置建议
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">&#128200;</span>
          <span class="text-green-800 font-black text-lg">A股：超配</span>
        </div>
        <p class="text-green-900 text-sm leading-relaxed">
          <strong>核心逻辑：</strong>①盈利端：Q1工业企业利润+15.5%，再通胀加速改善利润表；②估值端：ROE/R走阔，合理估值上移；③政策端："稳定和增强资本市场信心"新表述；④流动性端：资金面极度宽松，居民存款搬家趋势未变。<br>
          <strong>风险因素：</strong>①美伊冲突超预期升级；②国内消费持续疲软拖累盈利修复
        </p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">&#128202;</span>
          <span class="text-slate-800 font-black text-lg">债券：低配（长端）/ 标配（短端）</span>
        </div>
        <p class="text-slate-900 text-sm leading-relaxed">
          <strong>核心逻辑：</strong>①经济修复+再通胀方向不变，长端利率下行空间有限（10Y国债1.75%）；②央行态度边际收紧，5月买断式回购缩量5000亿；③特别国债发行加速，供给压力上升。<br>
          <strong>风险因素：</strong>若美伊冲突导致避险情绪急剧升温，长债仍有交易性机会
        </p>
      </div>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">&#128736;</span>
          <span class="text-orange-800 font-black text-lg">商品：超配（能化/有色）/ 标配（黑色）</span>
        </div>
        <p class="text-orange-900 text-sm leading-relaxed">
          <strong>核心逻辑：</strong>①地缘冲突推升能源价格中枢；②中国产业链优势承接能化出口份额；③有色金属受全球补库+AI需求双重驱动。<br>
          <strong>风险因素：</strong>①美伊达成停火协议将导致油价急跌；②高油价最终压制全球需求
        </p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">&#128176;</span>
          <span class="text-red-800 font-black text-lg">现金/货币基金：标配</span>
        </div>
        <p class="text-red-900 text-sm leading-relaxed">
          <strong>核心逻辑：</strong>DR007处于1.27%极低水平，货币基金收益率偏低，但央行边际收紧可能使短端利率企稳。<br>
          <strong>约束：</strong>流动性陷阱下持有现金的机会成本高
        </p>
      </div>
    </div>

    <!-- 五、行业配置建议 -->
    <h2 id="m_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、行业配置建议（三梯队）
    </h2>

    <!-- 第一梯队 -->
    <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">&#127942;</span>第一梯队：高景气+政策确定性
      </h4>

      <div class="space-y-3">
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-purple-800 font-bold mb-2">1. AI算力基础设施</h5>
          <p class="text-purple-900 text-sm mb-1"><strong>宏观驱动：</strong>全球AI投资浪潮（美国科技巨头Capex+77%）+ 国内"人工智能+"行动</p>
          <p class="text-purple-900 text-sm mb-1"><strong>重点方向：</strong>国产算力、光模块、服务器、数据中心</p>
          <p class="text-purple-900 text-sm mb-1"><strong>催化剂：</strong>5月全国人工智能产业发展大会、国产替代加速</p>
          <p class="text-purple-900 text-sm"><strong>风格偏好：</strong>成长</p>
        </div>
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-purple-800 font-bold mb-2">2. 能源安全/高油价受益</h5>
          <p class="text-purple-900 text-sm mb-1"><strong>宏观驱动：</strong>霍尔木兹海峡封锁导致油价中枢上移，煤化工替代油化工逻辑强化</p>
          <p class="text-purple-900 text-sm mb-1"><strong>重点方向：</strong>煤炭、石油石化、煤化工、油服</p>
          <p class="text-purple-900 text-sm mb-1"><strong>数据验证：</strong>4月煤炭板块周涨3.9%，石油石化周涨4.2%</p>
          <p class="text-purple-900 text-sm"><strong>风格偏好：</strong>价值/周期</p>
        </div>
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-purple-800 font-bold mb-2">3. 储能及锂电上游材料</h5>
          <p class="text-purple-900 text-sm mb-1"><strong>宏观驱动：</strong>全球储能需求高景气，津巴布韦锂矿出口禁令+宜春停产推升碳酸锂价格</p>
          <p class="text-purple-900 text-sm mb-1"><strong>数据验证：</strong>5月锂电排产249GWh，连续3月创历史峰值</p>
          <p class="text-purple-900 text-sm"><strong>风格偏好：</strong>成长/周期</p>
        </div>
      </div>
    </div>

    <!-- 第二梯队 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">&#127919;</span>第二梯队：政策催化+估值修复
      </h4>

      <div class="space-y-3">
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-blue-800 font-bold mb-2">4. 商业航天</h5>
          <p class="text-blue-900 text-sm mb-1"><strong>宏观驱动：</strong>5月朱雀三号遥二火箭发射 + SpaceX 6月IPO催化密集期</p>
          <p class="text-blue-900 text-sm mb-1"><strong>重点方向：</strong>卫星互联网、火箭制造、地面设备</p>
          <p class="text-blue-900 text-sm"><strong>风格偏好：</strong>主题/成长</p>
        </div>
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-blue-800 font-bold mb-2">5. 电力设备出海</h5>
          <p class="text-blue-900 text-sm mb-1"><strong>宏观驱动：</strong>全球电网升级需求 + 一带一路出口红利</p>
          <p class="text-blue-900 text-sm mb-1"><strong>数据验证：</strong>一季度风电机组出口+45.2%，电力设备海外订单持续高增</p>
          <p class="text-blue-900 text-sm"><strong>重点方向：</strong>变压器、开关、智能电网</p>
        </div>
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="text-blue-800 font-bold mb-2">6. 创新药/生物医药</h5>
          <p class="text-blue-900 text-sm mb-1"><strong>宏观驱动：</strong>人口老龄化长期趋势 + 医保支付改革</p>
          <p class="text-blue-900 text-sm"><strong>风格偏好：</strong>成长</p>
        </div>
      </div>
    </div>

    <!-- 第三梯队 -->
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">&#9889;</span>第三梯队：防御性配置
      </h4>

      <div class="bg-white/70 rounded-lg p-4">
        <h5 class="text-amber-800 font-bold mb-2">7. 高股息/红利资产</h5>
        <p class="text-amber-900 text-sm mb-1"><strong>逻辑：</strong>在经济不确定性和地缘风险背景下，红利资产提供安全边际（银行、公用事业、高速公路）</p>
        <p class="text-amber-900 text-sm"><strong>约束：</strong>利率下行空间收窄，高股息策略的相对吸引力边际下降</p>
      </div>
    </div>

    <!-- 六、风格配置 -->
    <h2 id="m_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>六、风格配置建议
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">风格</th>
            <th class="px-4 py-3 text-center">建议</th>
            <th class="px-4 py-3 text-left">逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">成长</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">超配</span></td>
            <td class="px-4 py-3 text-slate-700">AI投资浪潮推动盈利高增长，风险偏好提升</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">周期</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">超配</span></td>
            <td class="px-4 py-3 text-slate-700">再通胀周期+高油价环境，资源品和化工品受益</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">消费</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">低配</span></td>
            <td class="px-4 py-3 text-slate-700">以价换量趋势延续，居民收入预期尚未明显改善</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">金融</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-sm font-bold">标配</span></td>
            <td class="px-4 py-3 text-slate-700">银行受益于资产质量改善但息差承压</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 七、风险预警 -->
    <h2 id="m_sec7" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>七、风险预警
    </h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">7.1 一级风险（高概率/高影响）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">风险因子</th>
            <th class="px-4 py-3 text-left">触发条件</th>
            <th class="px-4 py-3 text-left">影响路径</th>
            <th class="px-4 py-3 text-left">对冲策略</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">美伊冲突升级</td>
            <td class="px-4 py-3 text-slate-700">美国"自由计划"行动遭伊朗军事反击</td>
            <td class="px-4 py-3 text-red-700 font-bold">油价突破120美元→全球通胀飙升→美联储被迫加息→风险资产大跌</td>
            <td class="px-4 py-3 text-slate-700">增持能源股、做多原油、减配成长股</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">国内消费持续疲弱</td>
            <td class="px-4 py-3 text-slate-700">社零增速跌破2%，居民储蓄率进一步上升</td>
            <td class="px-4 py-3 text-red-700 font-bold">企业盈利修复中断→再通胀逻辑证伪→顺周期资产回调</td>
            <td class="px-4 py-3 text-slate-700">增持必选消费、医药等防御性板块</td>
          </tr>
          <tr class="hover:bg-red-50 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">美联储鹰派超预期</td>
            <td class="px-4 py-3 text-slate-700">美国通胀突破4%，美联储释放加息信号</td>
            <td class="px-4 py-3 text-red-700 font-bold">全球流动性收紧→人民币汇率承压→外资流出A股</td>
            <td class="px-4 py-3 text-slate-700">增持出口链（人民币贬值受益）、减配外资重仓股</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">7.2 二级风险（中概率/中影响）</h3>

    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>房地产下行螺旋加速：</strong>一线城市"小阳春"结束后成交骤降，房企债务违约事件增多。关注指标：30城商品房成交面积、房企债券利差</span>
      </li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>地方债风险传导：</strong>部分地区城投债兑付困难，信用利差走阔。关注指标：城投债信用利差、地方专项债发行进度</span>
      </li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>全球贸易摩擦升温：</strong>美国对欧盟汽车加征关税至25%，可能波及中国间接出口。关注指标：中国对美出口数据、PMI新出口订单</span>
      </li>
    </ul>

    <!-- 八、核心证伪指标 -->
    <h2 id="m_sec8" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>八、核心证伪指标
    </h2>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">&#128680;</span>以下指标若出现恶化，将直接推翻本报告的核心逻辑
      </h4>
      <ul class="space-y-3">
        <li class="py-2 flex items-start bg-white/60 rounded-lg px-4">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-red-700">PPI环比转负</strong> → 再通胀逻辑不成立，周期股逻辑崩塌</span>
        </li>
        <li class="py-2 flex items-start bg-white/60 rounded-lg px-4">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-red-700">PMI新出口订单跌破48%</strong> → 外需拉动逻辑失效</span>
        </li>
        <li class="py-2 flex items-start bg-white/60 rounded-lg px-4">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-red-700">布伦特原油跌破80美元</strong> → 地缘溢价消退，能源股逻辑逆转</span>
        </li>
        <li class="py-2 flex items-start bg-white/60 rounded-lg px-4">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-red-700">DR007突破1.8%</strong> → 流动性宽松逻辑逆转</span>
        </li>
        <li class="py-2 flex items-start bg-white/60 rounded-lg px-4">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong class="text-red-700">美国ISM制造业PMI跌破48%</strong> → 全球AI投资周期中断</span>
        </li>
      </ul>
    </div>

    <!-- 九、经济数据汇总表 -->
    <h2 id="m_sec9" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>九、经济数据汇总表（东方财富数据快照）
    </h2>

    <div class="bg-slate-50 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center">
        <span class="text-lg mr-2">&#128203;</span>关键经济指标汇总（截至2026年5月7日）
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-slate-900 text-white">
            <tr>
              <th class="px-4 py-3 text-left">指标类别</th>
              <th class="px-4 py-3 text-left">指标名称</th>
              <th class="px-4 py-3 text-center">最新值</th>
              <th class="px-4 py-3 text-left">趋势</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">增长</td>
              <td class="px-4 py-2 font-bold text-slate-900">Q1 GDP同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">+5.0%</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">超预期，名义GDP+4.94%大幅反弹</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">增长</td>
              <td class="px-4 py-2 font-bold text-slate-900">4月制造业PMI</td>
              <td class="px-4 py-2 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">50.3</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">淡季不淡，回落幅度远小于季节性</td>
            </tr>
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">增长</td>
              <td class="px-4 py-2 font-bold text-red-900">4月非制造业PMI</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">49.4</span></td>
              <td class="px-4 py-2 text-red-700 text-sm font-bold">收缩区间，建筑业48.0%</td>
            </tr>
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">通胀</td>
              <td class="px-4 py-2 font-bold text-green-900">PPI同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">+0.5%</span></td>
              <td class="px-4 py-2 text-green-700 text-sm font-bold">41个月来首次转正！通缩终结</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">通胀</td>
              <td class="px-4 py-2 font-bold text-slate-900">CPI同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">+1.0%</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">温和通胀，城乡分化（城市+1.1%/农村-0.7%）</td>
            </tr>
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">通胀</td>
              <td class="px-4 py-2 font-bold text-red-900">PMI购进价格</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">63.7%</span></td>
              <td class="px-4 py-2 text-red-700 text-sm font-bold">历史高位88%分位数，输入性通胀</td>
            </tr>
            <tr class="hover:bg-orange-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">金融</td>
              <td class="px-4 py-2 font-bold text-slate-900">M2 / M1同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-sm font-bold">8.5% / 5.1%</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">剪刀差收窄至3.4pct，资金活化改善</td>
            </tr>
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">金融</td>
              <td class="px-4 py-2 font-bold text-red-900">3月新增信贷</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">31522亿</span></td>
              <td class="px-4 py-2 text-red-700 text-sm font-bold">同比-17.56%，实体融资需求偏弱</td>
            </tr>
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">贸易</td>
              <td class="px-4 py-2 font-bold text-green-900">Q1出口累计同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm font-bold">+14.7%</span></td>
              <td class="px-4 py-2 text-green-700 text-sm font-bold">强劲，但3月当月回落至+2.5%</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">利率</td>
              <td class="px-4 py-2 font-bold text-slate-900">SHIBOR隔夜</td>
              <td class="px-4 py-2 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-bold">1.2710%</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">极度宽松，-5.6BP</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">财政</td>
              <td class="px-4 py-2 font-bold text-slate-900">Q1财政收入累计</td>
              <td class="px-4 py-2 text-center"><span class="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-sm font-bold">61613亿（+2.4%）</span></td>
              <td class="px-4 py-2 text-slate-700 text-sm">3月当月+6.89%，收入增速改善</td>
            </tr>
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-4 py-2 text-slate-500 text-sm">消费</td>
              <td class="px-4 py-2 font-bold text-red-900">Q1社零累计同比</td>
              <td class="px-4 py-2 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-sm font-bold">+2.4%</span></td>
              <td class="px-4 py-2 text-red-700 text-sm font-bold">偏弱，3月当月仅+1.7%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <blockquote class="border-l-4 border-slate-400 bg-slate-50 rounded-r-xl p-4 my-6 text-slate-600 text-sm">
      <strong>免责声明：</strong>本报告基于公开研报和经济数据整合分析，覆盖50篇宏观研报，仅供内部研究参考，不构成任何投资建议。市场有风险，投资需谨慎。<br>
      <strong>数据来源：</strong>国家统计局、东方财富经济数据快照、券商宏观研报（方正中期、光大期货、东海期货、诚通证券、开源证券、宝城期货、国金证券、五矿证券等）
    </blockquote>

  </div>`;
}
