// ==========================================
// 宏观研究内容模块 - 2026-04-19
// ==========================================

function renderMacroContent_0419() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 执行摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、执行摘要</h2>

    <blockquote class="border-l-4 border-red-500 bg-slate-50 rounded-r-xl p-4 my-4 text-slate-700">
      <p class="font-semibold text-slate-900 mb-2">宏观基调：弱复苏 + 输入型通胀 + 供给强于需求</p>
      <p>2026年一季度GDP同比增长5.0%，超预期（预期4.8%），实现"十五五"良好开局。但3月单月数据普遍走弱，消费（1.7% vs 预期2.5%）、出口（2.5% vs 预期8.6%）均低于预期，仅工业生产（5.7% vs 预期5.3%）超预期。PPI时隔41个月转正至+0.5%，但主要由输入性因素驱动。美伊谈判无果，霍尔木兹海峡封锁持续，布伦特原油站稳96美元高位平台。综合研判：<strong>当前经济处于弱复苏阶段，供给强于需求，输入型通胀与内需偏弱并存。政策刺激时点可能推迟至下半年。</strong></p>
    </blockquote>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>资产配置建议总览
      </h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
        <div class="bg-white rounded-xl p-3 text-center shadow-sm">
          <div class="text-2xl font-black text-green-600">超配</div>
          <div class="text-sm font-bold text-slate-700 mt-1">股票</div>
          <div class="text-xs text-slate-500 mt-1">AI产业链+能源军工</div>
        </div>
        <div class="bg-white rounded-xl p-3 text-center shadow-sm">
          <div class="text-2xl font-black text-yellow-600">标配</div>
          <div class="text-sm font-bold text-slate-700 mt-1">债券</div>
          <div class="text-xs text-slate-500 mt-1">10Y国债中枢2.5%</div>
        </div>
        <div class="bg-white rounded-xl p-3 text-center shadow-sm">
          <div class="text-2xl font-black text-green-600">超配</div>
          <div class="text-sm font-bold text-slate-700 mt-1">商品</div>
          <div class="text-xs text-slate-500 mt-1">黄金+原油</div>
        </div>
        <div class="bg-white rounded-xl p-3 text-center shadow-sm">
          <div class="text-2xl font-black text-red-600">低配</div>
          <div class="text-sm font-bold text-slate-700 mt-1">现金</div>
          <div class="text-xs text-slate-500 mt-1">DR007仅1.22%</div>
        </div>
      </div>
    </div>

    <!-- 经济数据全景 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、经济数据全景</h2>

    <h3 id="m_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.1 经济增长：开门红与3月走弱的"温差"</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">实际值</th>
            <th class="px-4 py-3 text-center">市场预期</th>
            <th class="px-4 py-3 text-center">前值</th>
            <th class="px-4 py-3 text-left">解读</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">Q1 GDP同比</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">5.0%</td>
            <td class="px-4 py-3 text-center">4.8%</td>
            <td class="px-4 py-3 text-center">4.5% (Q4)</td>
            <td class="px-4 py-3 text-green-700 font-medium">超预期，处于全年目标区间上沿</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">名义GDP同比</td>
            <td class="px-4 py-3 text-center font-bold">4.9%</td>
            <td class="px-4 py-3 text-center">--</td>
            <td class="px-4 py-3 text-center">3.9% (Q4)</td>
            <td class="px-4 py-3">大幅回升，输入型通胀驱动</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">工业增加值</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">5.7%</td>
            <td class="px-4 py-3 text-center">5.3%-5.5%</td>
            <td class="px-4 py-3 text-center">6.3%</td>
            <td class="px-4 py-3 text-green-700">高于预期，高技术制造业12.5%领跑</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">社零总额</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">1.7%</td>
            <td class="px-4 py-3 text-center">2.3%-2.5%</td>
            <td class="px-4 py-3 text-center">2.8%</td>
            <td class="px-4 py-3 text-red-700 font-medium">显著低于预期，节后消费回落</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">固投累计</td>
            <td class="px-4 py-3 text-center font-bold">1.7%</td>
            <td class="px-4 py-3 text-center">1.7%-1.9%</td>
            <td class="px-4 py-3 text-center">1.8%</td>
            <td class="px-4 py-3">符合/略低于预期，制造业投资改善</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">出口（3月）</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">2.5%</td>
            <td class="px-4 py-3 text-center">4.0%-8.6%</td>
            <td class="px-4 py-3 text-center">21.8%</td>
            <td class="px-4 py-3 text-red-700">大幅回落，春节错位+高基数</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">出口（Q1累计）</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">14.7%</td>
            <td class="px-4 py-3 text-center">--</td>
            <td class="px-4 py-3 text-center">--</td>
            <td class="px-4 py-3 text-green-700 font-medium">仍处历史高位，AI产业链支撑</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">进口（3月）</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">27.8%</td>
            <td class="px-4 py-3 text-center">--</td>
            <td class="px-4 py-3 text-center">13.8%</td>
            <td class="px-4 py-3 text-green-700">能源价格大涨+AI进口驱动</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
      <h4 class="text-amber-800 font-bold mb-2">核心判断</h4>
      <p class="text-amber-900 text-sm">Q1经济"开门红"主要由外需（出口Q1+14.7%）和财政前置发力（基建投资+8.9%）驱动，内需（社零仅+2.4%累计）仍偏弱。3月单月数据走弱部分受春节错位影响，但消费和居民信贷的疲弱反映了<strong>内需修复的结构性困境</strong>——居民加杠杆意愿降至2009年以来最低。</p>
    </div>

    <h3 id="m_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.2 通胀：PPI转正的"输入型"特征</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">3月</th>
            <th class="px-4 py-3 text-center">2月</th>
            <th class="px-4 py-3 text-left">趋势</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">CPI同比</td>
            <td class="px-4 py-3 text-center font-bold">1.0%</td>
            <td class="px-4 py-3 text-center">1.3%</td>
            <td class="px-4 py-3">节后季节性回落</td>
          </tr>
          <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <td class="px-4 py-3 font-bold">核心CPI</td>
            <td class="px-4 py-3 text-center font-bold">1.1%</td>
            <td class="px-4 py-3 text-center">1.8%</td>
            <td class="px-4 py-3 text-yellow-700">大幅回落0.7pct</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">PPI同比</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">+0.5%</td>
            <td class="px-4 py-3 text-center">-0.9%</td>
            <td class="px-4 py-3 text-green-700 font-medium">41个月来首次转正</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">PPI环比</td>
            <td class="px-4 py-3 text-center font-bold text-green-700">+1.0%</td>
            <td class="px-4 py-3 text-center">+0.4%</td>
            <td class="px-4 py-3 text-green-700">连续6个月上涨</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ 关键解读</h4>
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>PPI转正<strong>主要由输入性因素驱动</strong>：石油和天然气开采业价格环比+15.8%，石油加工环比+5.8%。测算原油对PPI传导系数约7.4%，对CPI仅1.2%。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>生活资料PPI仍为-1.3%</strong>，表明国内需求端通缩压力并未根本消除。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>Q1名义GDP与实际GDP增速差收窄至-0.1%，GDP平减指数<strong>接近转正</strong>，Q2有望转正。</span></li>
      </ul>
    </div>

    <h3 id="m_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.3 金融数据：宽货币向宽信用传导受阻</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">3月</th>
            <th class="px-4 py-3 text-center">前值</th>
            <th class="px-4 py-3 text-left">变化</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <td class="px-4 py-3 font-bold">新增社融</td>
            <td class="px-4 py-3 text-center font-bold">5.23万亿</td>
            <td class="px-4 py-3 text-center">2.38万亿</td>
            <td class="px-4 py-3 text-yellow-700">同比少增6700亿</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">社融存量增速</td>
            <td class="px-4 py-3 text-center font-bold">7.9%</td>
            <td class="px-4 py-3 text-center">8.2%</td>
            <td class="px-4 py-3">回落0.3pct</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">新增人民币贷款</td>
            <td class="px-4 py-3 text-center font-bold">2.99万亿</td>
            <td class="px-4 py-3 text-center">0.90万亿</td>
            <td class="px-4 py-3">同比少增6500亿</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">居民贷款</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">4909亿</td>
            <td class="px-4 py-3 text-center">--</td>
            <td class="px-4 py-3 text-red-700 font-medium">同比少增4944亿（近乎腰斩）</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">M2同比</td>
            <td class="px-4 py-3 text-center font-bold">8.5%</td>
            <td class="px-4 py-3 text-center">9.0%</td>
            <td class="px-4 py-3">回落0.5pct</td>
          </tr>
          <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <td class="px-4 py-3 font-bold">M1同比</td>
            <td class="px-4 py-3 text-center font-bold">5.1%</td>
            <td class="px-4 py-3 text-center">5.9%</td>
            <td class="px-4 py-3 text-yellow-700">回落0.8pct</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-slate-50 rounded-xl p-5 my-6 border border-slate-200">
      <h4 class="text-slate-900 font-black mb-3">核心判断</h4>
      <ul class="space-y-2">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>居民信贷是最大拖累</strong>：新增居民中长贷（12月移动平均）已下探至2009年8月以来最低，反映购房和消费信心严重不足。</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>企业短贷支撑，中长贷偏弱</strong>：企业短期经营性需求维持韧性，但地缘冲突下资本开支扩产意愿阶段性回落。</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>降准必要性下降</strong>（信达证券观点）：银行体系存差持续走高，可贷资金充裕，核心矛盾是需求端而非供给端。</span></li>
      </ul>
    </div>

    <h3 id="m_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.4 房地产：一线城市出现筑底信号</h3>

    <ul class="space-y-2">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>3月一线城市新建商品住宅价格环比+0.2%（2月持平），二手住宅价格环比+0.4%（2月-0.1%），为2025年3月以来首次上涨。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>4月房地产市场呈现"小阳春"，<strong>二手房价同比有望Q2筑底回升，斜率温和</strong>。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>房地产投资累计仍-11.2%，新开工-20.3%，竣工-25.0%，<strong>行业整体仍处于深度调整期</strong>。</span></li>
    </ul>

    <!-- 研报核心观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>三、研报核心观点提炼</h2>

    <h3 id="m_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.1 增长主题：开门红确认，但结构分化</h3>

    <div class="bg-green-50 border border-green-200 rounded-xl p-5 my-4">
      <h4 class="text-green-800 font-bold mb-2">机构共识</h4>
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>Q1经济实现开门红，工业和服务业生产保持韧性，财政前置发力投资端企稳回升，AI产业链需求支撑出口，消费内需相对承压。经济开门红有望助推本轮权益行情。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>浦银国际：</strong>一季度实际GDP超预期加快到5.0%，制造业改善是主要推动力。3月除工业生产外，其余实体经济数据均下滑且低于预期，需求端复苏仍不及供给端。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>需求小幅走弱，供给韧性较强。产能利用率Q1降至73.6%，反映供给强于需求格局强化，物价转正基础不够稳固。</span></li>
      </ul>
    </div>

    <h3 id="m_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.2 通胀主题：PPI转正但内生动力不足</h3>

    <ul class="space-y-2">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>太平洋证券：</strong>PPI同比由负转正，主要受国际输入性因素和国内部分行业供需改善推动。4月PPI翘尾因素较3月上涨0.4%，预计4月PPI同比将保持在正区间。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>浦银国际：</strong>输入性通胀（高油价）不能彻底帮助中国摆脱低迷通胀，改善的关键仍在内需。能源危机对经济的影响"先扬后抑"。</span></li>
    </ul>

    <h3 id="m_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.3 金融与货币政策：降准降息或被推迟</h3>

    <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
      <h4 class="text-amber-800 font-bold mb-2">政策预期</h4>
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>信达证券：</strong>降准的必要性或在下降。银行并非缺资金，而是居民、企业贷款意愿偏低。此时降准不仅无法缓解实体融资需求偏弱的核心矛盾，可能还会压低银行资产端收益率。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>浦银国际：</strong>预计下半年央行降息10bp、降准50bp，处于此前预测区间的下限。稳健的一季度经济增速以及高油价推升的通胀或延后增量政策出台时间。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>预计10年期国债目标区间2%-3%，中枢或为2.5%。如果有宽货币政策，收益率或短暂下行后上行。</span></li>
      </ul>
    </div>

    <h3 id="m_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.4 贸易与出口：AI产业链是确定性支撑</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🌍</span>出口结构分化
      </h4>
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>太平洋证券：</strong>出口增速放缓受春节偏晚、高基数影响。集成电路出口+84.9%、汽车+43.9%保持韧性。劳动密集型产品出口多数由正转负。进口高增受能源价格和AI科技进口驱动。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>出口同比+2.5%并不低。综合一季度看，出口同比+14.7%，环比水平远高于近十年同期。AI产业链产品出口存在确定性支撑，维持全年出口同比+6%预测。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券（另一篇）：</strong>高频数据指向4月出口或已筑底。高油价将带动中国煤炭及下游煤电产业链、新能源产品出口扩大份额。</span></li>
      </ul>
    </div>

    <h3 id="m_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.5 地缘政治：美伊"斗而不破"成常态</h3>

    <ul class="space-y-2">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券：</strong>美伊诉求高度对立、筹码不对等，谈判难以速成；双方消耗殆尽，全面升级亦无以为继，"斗而不破"将成常态。基准情形下冲突向"低烈度、长战线"演化。最大尾部风险来自以色列。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>山金期货：</strong>中东局势走向长期僵持的概率最大，霍尔木兹海峡不会回到战前状态，油价将在较长时期维持高位。IEA上调布伦特原油2026年均价至96美元。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>格林大华：</strong>全球经济已在2025年Q4越过顶部区域。美国前财长保尔森警告美债需求可能崩溃。石油美元循环已中断。中东能源基础设施大规模破坏，修复旷日持久。</span></li>
    </ul>

    <h3 id="m_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.6 资产配置：宽松交易终结</h3>

    <ul class="space-y-2">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券：</strong>高油价持续推升通胀预期，美联储降息空间被进一步压缩。美股估值偏高存在回调压力，能源、军工板块相对占优；美债延续熊平；黄金长线逻辑最为清晰，"石油美元"裂痕暴露推动避险属性回归。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>格林大华：</strong>A股主要指数进入前期密集成交区，创业板在光通信、锂电池等高景气板块带动下向上突破，存在演绎独立行情的可能性。美伊停火期延长具有不确定性，选择高点降仓位。</span></li>
    </ul>

    <!-- 预期差分析 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、预期差分析</h2>

    <h3 id="m_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4.1 市场共识 vs 实际数据</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">维度</th>
            <th class="px-4 py-3 text-left">市场共识</th>
            <th class="px-4 py-3 text-left">实际数据</th>
            <th class="px-4 py-3 text-center">方向</th>
            <th class="px-4 py-3 text-left">投资机会</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">Q1 GDP</td>
            <td class="px-4 py-3 text-sm">4.8%</td>
            <td class="px-4 py-3 text-sm font-bold text-green-700">5.0%</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">超预期</span></td>
            <td class="px-4 py-3 text-sm">利好权益市场</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">3月出口</td>
            <td class="px-4 py-3 text-sm">4-8.6%</td>
            <td class="px-4 py-3 text-sm font-bold text-red-700">2.5%</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">低于预期</span></td>
            <td class="px-4 py-3 text-sm">Q1累计14.7%仍强，4月或筑底</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">3月社零</td>
            <td class="px-4 py-3 text-sm">2.3-2.5%</td>
            <td class="px-4 py-3 text-sm font-bold text-red-700">1.7%</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">显著低于预期</span></td>
            <td class="px-4 py-3 text-sm">消费股承压，服务消费相对强</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">3月PPI</td>
            <td class="px-4 py-3 text-sm">接近0%</td>
            <td class="px-4 py-3 text-sm font-bold text-green-700">+0.5%</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">大幅超预期</span></td>
            <td class="px-4 py-3 text-sm">利好周期股、上游资源品</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">3月居民信贷</td>
            <td class="px-4 py-3 text-sm">正常水平</td>
            <td class="px-4 py-3 text-sm font-bold text-red-700">近乎腰斩</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">显著低于预期</span></td>
            <td class="px-4 py-3 text-sm">宽信用堵点，降息预期升温但推迟</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold">降准预期</td>
            <td class="px-4 py-3 text-sm">二季度可能</td>
            <td class="px-4 py-3 text-sm font-bold">必要性下降</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-bold">偏鹰</span></td>
            <td class="px-4 py-3 text-sm">债券收益率可能短期上行</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4.2 核心预期差：PPI转正的"含金量"不足</h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ 市场可能过度解读PPI转正信号</h4>
      <p class="text-red-900 text-sm">3月PPI转正<strong>几乎全部由输入性因素驱动</strong>（原油价格大涨带动石油开采+15.8%、石油加工+5.8%），而生活资料PPI仍为-1.3%，说明国内终端需求通缩压力并未消除。</p>
    </div>

    <ul class="space-y-2 mt-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>对上游资源品</strong>（石油石化、有色、煤炭）是利好，但持续性取决于油价。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>对中下游制造业</strong>，成本上升可能挤压利润，除非能够传导至终端。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>对债券市场</strong>，PPI转正可能被解读为通胀信号，但核心逻辑（内需驱动）尚未确认，因此长端利率上行空间有限。</span></li>
    </ul>

    <h3 id="m_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4.3 另一个关键预期差：中东冲突的"中国替代效应"</h3>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">💡</span>中国替代效应
      </h4>
      <p class="text-emerald-900 text-sm">中东能源危机对中国出口可能产生<strong>短期正向溢出效应</strong>：中国对中东油气依赖度低于日韩（煤炭仍是最重要能源），完善的供应链体系使中国在能源成本冲击下相对竞争优势反而扩大。2020-2021年疫情期间中国出口同比曾飙升至50%，类似逻辑可能部分重演。<strong>关注煤化工替代、新能源出口、航运板块</strong>。</p>
    </div>

    <!-- 资产配置建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、资产配置建议</h2>

    <h3 id="m_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5.1 大类资产配置</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">资产类别</th>
            <th class="px-4 py-3 text-center">配置建议</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
            <th class="px-4 py-3 text-left">风险因素</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">股票</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">超配</span></td>
            <td class="px-4 py-3 text-sm">Q1经济超预期，AI产业链出口景气延续，PPI转正利好上游盈利修复，创业板可能演绎独立行情</td>
            <td class="px-4 py-3 text-sm text-red-700">美伊冲突升级超预期、居民消费持续疲弱、美股回调传染</td>
          </tr>
          <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
            <td class="px-4 py-3 font-bold text-yellow-900">债券</td>
            <td class="px-4 py-3 text-center"><span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">标配</span></td>
            <td class="px-4 py-3 text-sm">10Y国债中枢2.5%（区间2-3%）。降准必要性下降压制下行空间，但经济内生动能不足限制上行空间</td>
            <td class="px-4 py-3 text-sm text-red-700">通胀超预期导致货币收紧、社融加速修复</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">商品</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">超配</span></td>
            <td class="px-4 py-3 text-sm">黄金：避险+美元走弱+石油美元裂痕；原油：中东供给中断长期化（IEA均价96美元）；铜/铝：AI+新能源需求支撑</td>
            <td class="px-4 py-3 text-sm text-red-700">美伊突然达成和平协议、全球经济衰退</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">现金</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">低配</span></td>
            <td class="px-4 py-3 text-sm">DR007仅1.22%，SHIBOR隔夜1.22%，资金面宽松但收益率极低，持有现金机会成本高</td>
            <td class="px-4 py-3 text-sm text-red-700">流动性突发性收紧</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5.2 行业轮动与宏观映射</h3>

    <!-- AI产业链 -->
    <div class="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🚀</span>AI产业链（半导体/光通信/算力设备）
      </h4>
      <div class="space-y-2">
        <p class="text-purple-900"><strong>宏观驱动：</strong>AI全球投资浪潮+出口高景气（集成电路出口+84.9%）</p>
        <p class="text-purple-900"><strong>重点方向：</strong>存储芯片、光模块、算力服务器</p>
      </div>
    </div>

    <!-- 能源与石油石化 -->
    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🛢️</span>能源与石油石化
      </h4>
      <div class="space-y-2">
        <p class="text-orange-900"><strong>宏观驱动：</strong>中东供给中断长期化+油价高位平台化（布伦特96美元）</p>
        <p class="text-orange-900"><strong>重点方向：</strong>石油开采、炼化、煤化工（进口替代逻辑）</p>
      </div>
    </div>

    <!-- 军工与国防 -->
    <div class="bg-gradient-to-r from-slate-50 to-gray-100 border-l-4 border-slate-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🛡️</span>军工与国防
      </h4>
      <div class="space-y-2">
        <p class="text-slate-900"><strong>宏观驱动：</strong>地缘冲突常态化+全球军费扩张</p>
        <p class="text-slate-900"><strong>重点方向：</strong>航空装备、导弹、船舶</p>
      </div>
    </div>

    <!-- 黄金及贵金属 -->
    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-yellow-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🥇</span>黄金及贵金属
      </h4>
      <div class="space-y-2">
        <p class="text-yellow-900"><strong>宏观驱动：</strong>避险需求回归+美元霸权弱化+央行持续增持（黄金储备同比+49.3%）</p>
        <p class="text-yellow-900"><strong>重点方向：</strong>黄金开采、贵金属ETF</p>
      </div>
    </div>

    <!-- 新能源 -->
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔋</span>新能源（锂电/光伏/风电）
      </h4>
      <div class="space-y-2">
        <p class="text-green-900"><strong>宏观驱动：</strong>高油价推动替代效应+出口份额扩大</p>
        <p class="text-green-900"><strong>重点方向：</strong>锂电（产量+40.8%）、储能、光伏</p>
      </div>
    </div>

    <!-- 航运与港口 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🚢</span>航运与港口
      </h4>
      <div class="space-y-2">
        <p class="text-blue-900"><strong>宏观驱动：</strong>霍尔木兹封锁导致运距拉长+运价上行</p>
        <p class="text-blue-900"><strong>重点方向：</strong>油运、干散货、集运</p>
      </div>
    </div>

    <!-- 服务消费 -->
    <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-pink-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎭</span>服务消费（旅游/餐饮/文娱）
      </h4>
      <div class="space-y-2">
        <p class="text-pink-900"><strong>宏观驱动：</strong>服务零售增速（5.5%）远超商品零售，"十五五"服务业扩能提质</p>
        <p class="text-pink-900"><strong>重点方向：</strong>旅游、餐饮连锁、文娱传媒</p>
      </div>
    </div>

    <!-- 风险提示 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>六、风险提示</h2>

    <h3 id="m_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6.1 外部风险</h3>
    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center"><span class="text-lg mr-2">⚠️</span>风险提示</h4>
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中东局势升级：</strong>以色列单边行动可能触发全面战争，霍尔木兹海峡完全封锁将导致油价突破120美元。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美国经济滞胀：</strong>美国CPI能源环比突破10%，ISM制造业物价指数飙升，美联储降息空间被压缩。若美国经济超预期衰退，将拖累中国出口。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美债市场风险：</strong>美国债务总额接近39万亿美元，前财长保尔森警告美债需求可能崩溃。若爆发公共债务危机，将冲击全球"无风险锚"。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>日元套息交易回流：</strong>日本10年期国债收益率创新高，大规模套息交易平仓将对美债、美股、中债产生负向冲击。</span></li>
      </ul>
    </div>

    <h3 id="m_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6.2 内部风险</h3>
    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <ul class="space-y-2">
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>居民消费持续疲弱：</strong>居民信贷降至2009年以来最低，消费倾向（62.2%）同比下降，以旧换新政策退坡效应显现。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>房地产修复不及预期：</strong>尽管一线城市出现小阳春，但房地产投资仍-11.2%，新开工-20.3%，行业整体修复斜率可能偏缓。</span></li>
        <li class="py-1.5 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>产能利用率下行：</strong>Q1工业产能利用率73.6%（环比-1.3pct），供给过剩压力可能引发新一轮"价格战"。</span></li>
      </ul>
    </div>

    <h3 id="m_sec19" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6.3 证伪指标</h3>
    <p class="text-slate-600 mb-4 text-sm">若以下指标出现，则本报告核心逻辑需要修正：</p>

    <div class="space-y-3">
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
        <p class="text-orange-900"><strong>1. "宽复苏"逻辑成立的信号：</strong>社融存量增速回升至9%以上、居民中长贷显著修复、核心CPI持续高于1.5%。</p>
      </div>
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
        <p class="text-orange-900"><strong>2. "衰退风险"加大的信号：</strong>出口累计同比转负、PMI跌破荣枯线、PPI重新转负且生活资料跌幅扩大。</p>
      </div>
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
        <p class="text-orange-900"><strong>3. 中东和平突然达成的信号：</strong>布伦特原油跌破70美元、海运指数快速回落、全球风险偏好急剧修复。</p>
      </div>
    </div>

    <div class="mt-10 pt-6 border-t border-slate-200">
      <p class="text-xs text-slate-400 text-center">免责声明：本报告基于公开数据和研报观点整理，不构成投资建议。投资者应结合自身的风险承受能力和投资目标独立判断。</p>
    </div>

  </div>`;
}
