// 集思录内容渲染 - 2026-04-28

function renderJisiluContent_0428() {
  return `
<div class="prose prose-slate max-w-none">

  <!-- 标题区 -->
  <div class="mb-8">
    <h1 class="text-3xl font-black text-slate-900 mb-2 flex items-center">
      <span class="w-2 h-10 bg-teal-600 rounded-full mr-4"></span>
      集思录投资洞察
    </h1>
    <p class="text-slate-500 text-sm">2026年4月28日 · 数据来源：集思录热门讨论（80条帖子）</p>
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
        <p class="text-teal-700 text-sm">闻泰转债因荷兰安世半导体政治事件暴跌至92.3元，双低榜首引发"送钱还是送命"激烈辩论。神马转债AAA信用暴跌。北京银行年报暴雷四季度亏近10亿。科技抱团见顶警告增多，市场情绪谨慎偏悲观（5.5/10）。低价转债、平价套利、吃贴水等低风险策略成社区焦点。</p>
      </div>
    </div>
  </div>

  <!-- ==================== 一、热门话题 TOP 10 ==================== -->
  <h2 id="j_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    🔥 热门话题 TOP 10
  </h2>

  <!-- TOP 1: 闻泰转债危机 -->
  <div class="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-red-800 font-black flex items-center">
        <span class="text-xl mr-2">🔥</span>1. 闻泰转债危机与投资机会
      </h4>
      <span class="text-red-600 text-sm font-bold">★★★★★</span>
    </div>
    <p class="text-red-700 text-sm mb-3"><strong>讨论焦点：</strong>闻泰转债因荷兰安世半导体政治事件暴跌至92.295元，溢价率仅5.18%，成为当日双低榜首，"送钱还是送命"辩论白热化</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-red-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-red-900 text-sm space-y-1">
        <li>• <strong>看多派</strong>（aswyoooo）：违约概率几乎为0，公司账面现金17亿+ODM出售43.89亿可覆盖债务</li>
        <li>• <strong>看空派</strong>（huanhappy2017）："等ST后85块以下再进"，担忧正股ST导致机构清仓</li>
        <li>• <strong>政治分析</strong>（Rogerwu）：ICC仲裁最可能闻泰部分胜诉（60%概率），认定荷兰政府"临时接管"违规</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-red-400 pl-3 text-red-800 text-sm italic">
      "马克斯在《周期》里讲得很清楚，最美妙的交易有两个，一个是基金不得不买，一个是基金不得不卖，机构就是送钱或者抬轿。独立思考扫货就行。" —— tracyoasis
    </blockquote>
    <p class="text-red-600 text-xs mt-2">散户情绪：极度分化——多头"兴奋"看底牌，空头"瑟瑟发抖"，中间派等年报落地</p>
  </div>

  <!-- TOP 2: 神马转债 -->
  <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-amber-800 font-black flex items-center">
        <span class="text-xl mr-2">🔥</span>2. 神马转债 -- AAA信用债暴跌
      </h4>
      <span class="text-amber-600 text-sm font-bold">★★★★★</span>
    </div>
    <p class="text-amber-700 text-sm mb-3"><strong>讨论焦点：</strong>神马转债（110093）当日跌幅-7.68%，收盘124.48元，溢价率34.83%，正股面临ST风险</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-amber-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-amber-900 text-sm space-y-1">
        <li>• <strong>国企担保派</strong>（鼎级外星人）：省级大型重点国企，平煤集团全额担保，保本价约109.8元</li>
        <li>• <strong>谨慎派</strong>（铁骨素心）："见过太多送钱贴了"，列举中金三傻、龙大转债等历史教训</li>
        <li>• <strong>抄底行动</strong>（亮亮与六便土）："-10%以下买了一点点，当天净挣2.5%，只恨买少了"</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-amber-400 pl-3 text-amber-800 text-sm italic">
      "违约可能性很小，机构当天出完可能性也很小，后面正股ST的可能性很大。" —— 竹尘
    </blockquote>
    <p class="text-amber-600 text-xs mt-2">散户情绪：谨慎观望，部分试探性抄底，整体偏恐惧</p>
  </div>

  <!-- TOP 3: 银行股业绩分化 -->
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-blue-800 font-black flex items-center">
        <span class="text-xl mr-2">🏦</span>3. 银行股业绩分化与分红争议
      </h4>
      <span class="text-blue-600 text-sm font-bold">★★★★★</span>
    </div>
    <p class="text-blue-700 text-sm mb-3"><strong>讨论焦点：</strong>北京银行年报净利润下滑23.73%，四季度亏损近10亿，分红减少13.1%，引发银行股信任危机</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-blue-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-blue-900 text-sm space-y-1">
        <li>• <strong>暴雷分析</strong>（flitter）：四季度亏近10亿！核心一级资本充足率仅8.37%，但一季报巨幅好于预期</li>
        <li>• <strong>估值争论</strong>（趋势交易者）：20多元净资产卖7元，股息率6%；（半弦反驳）："用拨备换利润，6.6真的很低吗？"</li>
        <li>• <strong>分红能力</strong>（河南工程大学生）：华夏银行每100元风险资产要赚1.1才能维持分红，实际才赚0.8</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-blue-400 pl-3 text-blue-800 text-sm italic">
      "北京银行年报公告之前，华夏银行股息率第一，北京银行第二，现在华夏银行股息率更加遥遥领先！" —— 太保破发
    </blockquote>
    <p class="text-blue-600 text-xs mt-2">散户情绪：银粉信心动摇，部分转向高股息品种</p>
  </div>

  <!-- TOP 4: 平价套利 -->
  <div class="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-purple-800 font-black flex items-center">
        <span class="text-xl mr-2">📊</span>4. 平价套利策略风险探讨
      </h4>
      <span class="text-purple-600 text-sm font-bold">★★★★☆</span>
    </div>
    <p class="text-purple-700 text-sm mb-3"><strong>讨论焦点：</strong>纸浆09合约期权合成期货升水22个点的平价套利机会，滑点与到期行权风险</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-purple-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-purple-900 text-sm space-y-1">
        <li>• <strong>滑点教训</strong>（铭小贝）："股指期货平价套利，看着有10-15点差价，结果滑点23点多，直接爆亏"</li>
        <li>• <strong>风险化解</strong>（kolanta）："接近到期主动平仓，输赢都认。不要赚尽最后一个铜板"</li>
        <li>• <strong>核心认知</strong>（青木堂大钻石）："核心是滑点问题，流动性不好的品种会出现大滑点"</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-purple-400 pl-3 text-purple-800 text-sm italic">
      "整个组合220块收益，还有94天，扣除手续费之后差不多年化7%收益率。但纸浆出现大幅波动，交易所就会大幅提保...会让你觉得这个小钱真难赚。" —— honyqian
    </blockquote>
    <p class="text-purple-600 text-xs mt-2">散户情绪：理性探讨，共识"小钱难赚"需专业设备</p>
  </div>

  <!-- TOP 5: 市场风格之争 -->
  <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-slate-800 font-black flex items-center">
        <span class="text-xl mr-2">⚖️</span>5. 市场风格之争 -- 大盘蓝筹 vs 科技小票
      </h4>
      <span class="text-slate-600 text-sm font-bold">★★★★☆</span>
    </div>
    <p class="text-slate-700 text-sm mb-3"><strong>讨论焦点：</strong>中证2000远超2022年中小盘牛市高点，上证50和沪深300未触及上一轮高点，指数分化极端化</p>
    <div class="bg-white/50 rounded-lg p-3 mb-3">
      <h5 class="text-slate-800 font-bold text-sm mb-2">核心观点：</h5>
      <ul class="text-slate-900 text-sm space-y-1">
        <li>• <strong>泡沫警告</strong>（半弦）："科技的抱团不管在涨幅、预期和集中度方面已经走到极致。茅台涨价是市场风格大小切换的明确信号"</li>
        <li>• <strong>危险信号</strong>（aiplus）："现在的科技抱团差不多是2021年1月茅王、宁王、药王的水平了"</li>
        <li>• <strong>悲观预测</strong>（showmethemana）："等股灾吧，没有千股跌停的场景，国家队不会拉50和300的"</li>
      </ul>
    </div>
    <blockquote class="border-l-2 border-slate-400 pl-3 text-slate-800 text-sm italic">
      "最近体感确实太差了，只能死扛到底，现在转投阵营容易成为49年的国军。" —— 大头果果
    </blockquote>
    <p class="text-slate-600 text-xs mt-2">散户情绪：持有大盘蓝筹者"体感太差"焦虑，持有小票者警惕泡沫破灭</p>
  </div>

  <!-- TOP 6-10: 快速概览 -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
      <h5 class="text-emerald-800 font-bold text-sm">6. 铁矿石吃贴水 ★★★★☆</h5>
      <p class="text-emerald-700 text-xs mt-1">铁矿石年化贴水17.299%远超IM（9.792%）和IC（5.843%），coolstone长期实盘跟踪，散户相对占优策略</p>
    </div>
    <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
      <h5 class="text-yellow-800 font-bold text-sm">7. 黄金投资必要性 ★★★★☆</h5>
      <p class="text-yellow-700 text-xs mt-1">伊朗局势推升避险需求，518880流动性优先，518850/518660低费率，康波周期角度抗通胀</p>
    </div>
    <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
      <h5 class="text-indigo-800 font-bold text-sm">8. 量化弱点与散户套利 ★★★★☆</h5>
      <p class="text-indigo-700 text-xs mt-1">2024年2月GJD救市拉爆十几家量化，极端行情下量化策略存在脆弱性，散户寻找反身性机会</p>
    </div>
    <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
      <h5 class="text-cyan-800 font-bold text-sm">9. 港股打新策略 ★★★☆☆</h5>
      <p class="text-cyan-700 text-xs mt-1">已从"低风险"变为"概率游戏"，资金门槛提升，15万本金打新一年收益约5万，注意汇率风险</p>
    </div>
    <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
      <h5 class="text-rose-800 font-bold text-sm">10. 微盘股清仓 ★★★☆☆</h5>
      <p class="text-rose-700 text-xs mt-1">微盘中位数市值从17-19亿升至24亿+，全仓微盘太影响心态，建议多策略配置分散风险</p>
    </div>
    <div class="bg-violet-50 border border-violet-200 rounded-xl p-4">
      <h5 class="text-violet-800 font-bold text-sm">茅台年报分析 ★★★★☆</h5>
      <p class="text-violet-700 text-xs mt-1">营收下滑1.21%至1688亿，利润下滑4.53%至823亿，上市以来首次年度利润下滑。Q1反转向好</p>
    </div>
  </div>

  <!-- ==================== 二、投资方法论 ==================== -->
  <h2 id="j_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    💡 投资方法论精粹
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <!-- 策略1 -->
    <div class="bg-white border-2 border-teal-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-teal-800 font-black text-base">可转债双低策略</h5>
        <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">中低风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>价格低+溢价率低获取上行弹性，债底保护</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①关注双低值前20 ②优先国企担保AAA品种 ③分散持仓单只≤10% ④跌破债底(100-110元)重新评估</p>
      <p class="text-slate-500 text-xs">案例：闻泰转债双低值97.48，但正股面临ST风险</p>
    </div>
    <!-- 策略2 -->
    <div class="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-purple-800 font-black text-base">期货平价套利(PCP)</h5>
        <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">中低风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>期权合成期货与实际期货升贴水套利，纸浆年化约7%</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①无限易自定义套利设阈值 ②确认最小交易单位 ③预留一倍资金应对提保 ④到期主动平仓不赚尽最后一个铜板</p>
      <p class="text-slate-500 text-xs">案例：纸浆09合约组合收益220元/94天，年化约7%</p>
    </div>
    <!-- 策略3 -->
    <div class="bg-white border-2 border-emerald-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-emerald-800 font-black text-base">股指期货吃贴水</h5>
        <span class="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">中风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>长期持有利用贴水获取系统性超额收益</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①IM年化贴水9.792%，IC 5.843% ②适合长期持有 ③注意保证金管理和换月成本</p>
      <p class="text-slate-500 text-xs">案例：铁矿石年化贴水17.299%，为最优品种之一</p>
    </div>
    <!-- 策略4 -->
    <div class="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-blue-800 font-black text-base">价值投资+股债平衡</h5>
        <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">低风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>"买股票就是买公司"，低估分散不深研</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①股债动态平衡 ②成长型估值≤15倍 ③个股仓位≤10% ④选股标准：看得懂>商业模式>合理价格>好管理层</p>
      <p class="text-slate-500 text-xs">案例：路人甲pro 5年CAGR 7.85%，知识复利效应显现</p>
    </div>
    <!-- 策略5 -->
    <div class="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-orange-800 font-black text-base">DDM/DCF估值轮动</h5>
        <span class="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">中风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>股利贴现模型对银行股估值轮动</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①适合高股息稳定分红成熟企业 ②对增长率g极度敏感，差0.5%估值差20-50% ③折现率给7-8%较合适</p>
      <p class="text-slate-500 text-xs">案例：Twenty实盘净值年化约10%+</p>
    </div>
    <!-- 策略6 -->
    <div class="bg-white border-2 border-cyan-200 rounded-xl p-5 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h5 class="text-cyan-800 font-black text-base">港股打新"跟风"策略</h5>
        <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">中高风险</span>
      </div>
      <p class="text-slate-700 text-sm mb-2"><strong>核心逻辑：</strong>散户信息劣势下"明牌抄作业"</p>
      <p class="text-slate-700 text-sm mb-2"><strong>操作要点：</strong>①看申购资金和超额认购倍数 ②"大家都申购的我就申购" ③关注确定性高的品种 ④注意汇率风险对冲</p>
      <p class="text-slate-500 text-xs">案例：birdalex投入15万中3只，总收益约2万</p>
    </div>
  </div>

  <!-- ==================== 三、热议标的清单 ==================== -->
  <h2 id="j_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    热议标的清单
  </h2>

  <!-- 闻泰转债 -->
  <div class="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <h5 class="text-red-800 font-black text-base">闻泰转债（可转债）</h5>
      <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">讨论热度：极高</span>
    </div>
    <p class="text-slate-600 text-xs mb-3">收盘92.295元 · 溢价率5.18% · 当日双低第一</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-green-50 rounded-lg p-3">
        <h6 class="text-green-700 font-bold text-xs mb-1">📈 看多逻辑</h6>
        <ul class="text-green-900 text-xs space-y-1">
          <li>• aswyoooo：违约概率几乎为0，账面17亿+ODM出售43.89亿覆盖债务</li>
          <li>• Will吴：不会倒闭退市，迟早就是130</li>
          <li>• 可转债老韭菜：就算ST也是最好的ST公司</li>
        </ul>
      </div>
      <div class="bg-red-50 rounded-lg p-3">
        <h6 class="text-red-700 font-bold text-xs mb-1">📉 风险点</h6>
        <ul class="text-red-900 text-xs space-y-1">
          <li>• 大道至简之菲特：闻泰马上要退市了</li>
          <li>• huanhappy2017：等ST后85块以下再进</li>
          <li>• 年报后正股可能被ST导致机构清仓踩踏</li>
        </ul>
      </div>
    </div>
    <p class="text-slate-500 text-xs mt-2">情绪倾向：极度分化</p>
  </div>

  <!-- 神马转债 -->
  <div class="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <h5 class="text-amber-800 font-black text-base">神马转债（可转债）</h5>
      <span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">讨论热度：高</span>
    </div>
    <p class="text-slate-600 text-xs mb-3">收盘124.48元 · 跌幅-7.68% · 溢价率34.83%</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-green-50 rounded-lg p-3">
        <h6 class="text-green-700 font-bold text-xs mb-1">📈 看多逻辑</h6>
        <ul class="text-green-900 text-xs space-y-1">
          <li>• 鼎级外星人：省级国企+平煤集团全额担保，保本价约109.8元</li>
          <li>• 亮亮与六便土：-10%以下买入当天净挣2.5%</li>
          <li>• 竹尘：违约可能性很小</li>
        </ul>
      </div>
      <div class="bg-red-50 rounded-lg p-3">
        <h6 class="text-red-700 font-bold text-xs mb-1">📉 风险点</h6>
        <ul class="text-red-900 text-xs space-y-1">
          <li>• 铁骨素心："见过太多送钱贴了"，历史教训深刻</li>
          <li>• 郁闷的老湿："太贵了"（获12赞）</li>
          <li>• 正股面临ST风险，AAA评级可能被剔除质押</li>
        </ul>
      </div>
    </div>
    <p class="text-slate-500 text-xs mt-2">情绪倾向：谨慎，部分抄底但信心不足</p>
  </div>

  <!-- 北京银行 -->
  <div class="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <h5 class="text-blue-800 font-black text-base">北京银行（601009）</h5>
      <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">讨论热度：极高</span>
    </div>
    <p class="text-slate-600 text-xs mb-3">2025年报净利润下滑23.73% · 四季度亏近10亿 · 分红减少13.1%</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-green-50 rounded-lg p-3">
        <h6 class="text-green-700 font-bold text-xs mb-1">📈 看多逻辑</h6>
        <ul class="text-green-900 text-xs space-y-1">
          <li>• flitter：一季报可比利润43.5亿，实际80.98亿，巨幅好于预期</li>
          <li>• yunxi：绝大部分银行股业绩反转向上了</li>
        </ul>
      </div>
      <div class="bg-red-50 rounded-lg p-3">
        <h6 class="text-red-700 font-bold text-xs mb-1">📉 风险点</h6>
        <ul class="text-red-900 text-xs space-y-1">
          <li>• 四季度亏损近10亿，核心一级资本充足率仅8.37%</li>
          <li>• 拨备覆盖率持续降至200.21%</li>
          <li>• 部分投资者"明天开盘跑路"</li>
        </ul>
      </div>
    </div>
    <p class="text-slate-500 text-xs mt-2">情绪倾向：恐慌</p>
  </div>

  <!-- 贵州茅台 -->
  <div class="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <h5 class="text-violet-800 font-black text-base">贵州茅台（600519）</h5>
      <span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">讨论热度：高</span>
    </div>
    <p class="text-slate-600 text-xs mb-3">营收下滑1.21%至1688亿 · 净利润下滑4.53%至823亿 · 上市以来首次年度利润下滑</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-green-50 rounded-lg p-3">
        <h6 class="text-green-700 font-bold text-xs mb-1">📈 看多逻辑</h6>
        <ul class="text-green-900 text-xs space-y-1">
          <li>• isaaccao：Q1业绩反转，营收539亿净利润272.43亿，"拳击手收回拳头"</li>
          <li>• 新董事长陈华市场化改革思路清晰</li>
        </ul>
      </div>
      <div class="bg-red-50 rounded-lg p-3">
        <h6 class="text-red-700 font-bold text-xs mb-1">📉 风险点</h6>
        <ul class="text-red-900 text-xs space-y-1">
          <li>• 路人甲pro：调整深度可能比2012年塑化剂事件更严重</li>
          <li>• 洋河预告利润下滑62-68%</li>
          <li>• 管理层不再提来年增长目标</li>
        </ul>
      </div>
    </div>
    <p class="text-slate-500 text-xs mt-2">情绪倾向：争议极大</p>
  </div>

  <!-- 永22转债、博瑞转债、黄金ETF、九强转债 - 快速卡片 -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <h5 class="text-slate-800 font-bold text-sm">永22转债 · 强赎倒计时</h5>
      <p class="text-slate-600 text-xs mt-1">收盘129.006元，溢价率-0.02%折价，最后交易日5/7。博弈心态重，多为短线交易者</p>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <h5 class="text-slate-800 font-bold text-sm">博瑞转债 · 强赎最后日</h5>
      <p class="text-slate-600 text-xs mt-1">收盘194.639元，强赎当日涨幅+10.58%，4/28最后交易日，注意时间节点</p>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <h5 class="text-slate-800 font-bold text-sm">黄金ETF（518880/518850/518660）</h5>
      <p class="text-slate-600 text-xs mt-1">地缘政治推升避险需求，518880流动性优先，低费率选518850/518660，康波周期抗通胀</p>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <h5 class="text-slate-800 font-bold text-sm">九强转债（123150）</h5>
      <p class="text-slate-600 text-xs mt-1">已公告下修到底，新转股价12.30元，下修后溢价率压缩，短期有交易机会</p>
    </div>
  </div>

  <!-- ==================== 四、市场情绪观察 ==================== -->
  <h2 id="j_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    市场情绪观察
  </h2>

  <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
    <div class="flex items-center justify-between mb-4">
      <h4 class="text-amber-900 font-black text-xl">整体情绪评分</h4>
      <div class="text-3xl font-black text-amber-700">5.5<span class="text-lg text-amber-500">/10</span></div>
    </div>
    <p class="text-amber-700 text-sm">谨慎偏悲观。投资者对"送钱帖"高度警惕，银行股信心动摇，科技抱团见顶警告增多</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <h4 class="text-green-700 font-black text-sm mb-3 flex items-center">
        <span class="w-2 h-5 bg-green-500 rounded-full mr-2"></span>
        乐观信号
      </h4>
      <ul class="space-y-3">
        <li class="bg-green-50 rounded-lg p-3">
          <p class="text-green-800 text-xs font-bold">转债低估值机会</p>
          <blockquote class="text-green-700 text-xs italic mt-1">"闻泰不会倒闭退市，迟早就是130" —— Will吴</blockquote>
        </li>
        <li class="bg-green-50 rounded-lg p-3">
          <p class="text-green-800 text-xs font-bold">部分银行一季报好转</p>
          <blockquote class="text-green-700 text-xs italic mt-1">北京银行一季报"巨幅好于预期" —— flitter</blockquote>
        </li>
        <li class="bg-green-50 rounded-lg p-3">
          <p class="text-green-800 text-xs font-bold">茅台Q1业绩反转</p>
          <blockquote class="text-green-700 text-xs italic mt-1">"拳击手收回拳头，是为了下一击更有力" —— isaaccao</blockquote>
        </li>
      </ul>
    </div>
    <div>
      <h4 class="text-red-700 font-black text-sm mb-3 flex items-center">
        <span class="w-2 h-5 bg-red-500 rounded-full mr-2"></span>
        悲观/谨慎信号
      </h4>
      <ul class="space-y-3">
        <li class="bg-red-50 rounded-lg p-3">
          <p class="text-red-800 text-xs font-bold">北京银行年报暴雷</p>
          <blockquote class="text-red-700 text-xs italic mt-1">"四季度亏损近10亿！" —— flitter</blockquote>
        </li>
        <li class="bg-red-50 rounded-lg p-3">
          <p class="text-red-800 text-xs font-bold">科技股泡沫警告</p>
          <blockquote class="text-red-700 text-xs italic mt-1">"泡沫终将破灭，疯狂的小票行情终将以疯狂的下跌结束" —— 半弦</blockquote>
        </li>
        <li class="bg-red-50 rounded-lg p-3">
          <p class="text-red-800 text-xs font-bold">微观体感差</p>
          <blockquote class="text-red-700 text-xs italic mt-1">"最近体感确实太差了，只能死扛到底" —— 大头果果</blockquote>
        </li>
      </ul>
    </div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
    <h4 class="text-slate-800 font-black text-sm mb-3">风险偏好与热点轮动</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-slate-600 text-xs font-bold mb-2">风险偏好：中等偏下</p>
        <ul class="text-slate-700 text-xs space-y-1">
          <li>• 对"送钱帖"高度警惕，多次提及历史教训</li>
          <li>• 低价转债关注度提升，但多为试探性建仓</li>
          <li>• 银行股投资者信心动摇</li>
          <li>• 微盘股清仓讨论增多，资金从高风险品种撤出</li>
        </ul>
      </div>
      <div>
        <p class="text-slate-600 text-xs font-bold mb-2">热点轮动方向</p>
        <ul class="text-slate-700 text-xs space-y-1">
          <li>• <strong>科技→价值</strong>：多帖讨论科技抱团见顶，资金可能回流低估值蓝筹</li>
          <li>• <strong>股票→转债</strong>：闻泰暴跌引发低价转债关注潮</li>
          <li>• <strong>国内→海外</strong>：港股打新、美股、中东资金流入香港升温</li>
          <li>• <strong>进攻→防御</strong>：黄金、高股息、实物资产讨论增多</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ==================== 五、风险提示 ==================== -->
  <h2 id="j_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
    ⚠️ 风险提示
  </h2>

  <div class="space-y-4">
    <div class="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
      <h5 class="text-red-800 font-black text-base mb-2">风险一：闻泰转债ST退市风险</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span class="text-red-700 font-bold text-xs">触发条件：</span><p class="text-red-900 text-xs mt-1">2025年报公布后正股被ST（连续两年亏损），荷兰安世半导体事件导致持续经营能力存疑</p></div>
        <div><span class="text-red-700 font-bold text-xs">应对建议：</span><p class="text-red-900 text-xs mt-1">①未持仓者等年报落地后再评估 ②已持仓控制在5%以内 ③设定85元以下止损线 ④关注小额刚兑条款可行性</p></div>
      </div>
    </div>
    <div class="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
      <h5 class="text-orange-800 font-black text-base mb-2">风险二：银行股业绩恶化与"财务洗澡"</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span class="text-orange-700 font-bold text-xs">触发条件：</span><p class="text-orange-900 text-xs mt-1">北京银行年报净利润下滑23.73%，江苏银行董事长辞职+年报延期，华夏银行持续下跌</p></div>
        <div><span class="text-orange-700 font-bold text-xs">应对建议：</span><p class="text-orange-900 text-xs mt-1">①避免重仓单一城商行 ②关注核心一级资本充足率（北京银行仅8.37%） ③优先选分红稳定品种 ④警惕"用拨备换利润"的银行</p></div>
      </div>
    </div>
    <div class="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
      <h5 class="text-purple-800 font-black text-base mb-2">风险三：科技小票泡沫破裂</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span class="text-purple-700 font-bold text-xs">触发条件：</span><p class="text-purple-900 text-xs mt-1">中证2000远超2022年中小盘高点，科技抱团"走到极致"，量化策略拥挤</p></div>
        <div><span class="text-purple-700 font-bold text-xs">应对建议：</span><p class="text-purple-900 text-xs mt-1">①全仓微盘股者考虑减仓转向多策略 ②关注风格切换信号 ③避免极端分化时追高热门赛道</p></div>
      </div>
    </div>
    <div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
      <h5 class="text-blue-800 font-black text-base mb-2">风险四：平价套利保证金风险</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span class="text-blue-700 font-bold text-xs">触发条件：</span><p class="text-blue-900 text-xs mt-1">品种大幅波动时交易所大幅提保，期货端浮亏需追加保证金，期权端盈利不计入权益</p></div>
        <div><span class="text-blue-700 font-bold text-xs">应对建议：</span><p class="text-blue-900 text-xs mt-1">①组合之外预留一倍资金应对提保 ②低仓位操作 ③选择流动性好的品种 ④接近到期主动平仓</p></div>
      </div>
    </div>
    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-xl">
      <h5 class="text-emerald-800 font-black text-base mb-2">风险五：可转债下修博弈风险</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span class="text-emerald-700 font-bold text-xs">触发条件：</span><p class="text-emerald-900 text-xs mt-1">下修后可能到期还钱而非促转股，龙大转债下修空间有限，立高转债溢价率255%下修效果存疑</p></div>
        <div><span class="text-emerald-700 font-bold text-xs">应对建议：</span><p class="text-emerald-900 text-xs mt-1">①区分"真下修"和"假下修" ②溢价率>100%品种下修后弹性有限 ③优先选转股价值接近100的品种</p></div>
      </div>
    </div>
  </div>

  <!-- ==================== 六、下周关注点 ==================== -->
  <h2 id="j_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>
    下周关注点
  </h2>

  <div class="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
        <div><p class="text-slate-800 font-bold text-sm">闻泰科技年报</p><p class="text-slate-600 text-xs">关键事件：决定转债命运，ST与否将引发价格剧烈波动</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
        <div><p class="text-slate-800 font-bold text-sm">江苏银行年报（4/30）</p><p class="text-slate-600 text-xs">董事长辞职+无快报，市场担忧"财务洗澡"</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
        <div><p class="text-slate-800 font-bold text-sm">美诺转债最后交易日（4/29）</p><p class="text-slate-600 text-xs">强赎最后日，注意时间节点</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
        <div><p class="text-slate-800 font-bold text-sm">章鼓转债下修股东大会</p><p class="text-slate-600 text-xs">提议下修，关注表决结果</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
        <div><p class="text-slate-800 font-bold text-sm">五一节前资金面</p><p class="text-slate-600 text-xs">交易所提保、资金回笼影响</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
        <div><p class="text-slate-800 font-bold text-sm">伊朗局势进展</p><p class="text-slate-600 text-xs">地缘政治风险溢价变化</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>
        <div><p class="text-slate-800 font-bold text-sm">风格切换确认信号</p><p class="text-slate-600 text-xs">关注上证50/沪深300是否企稳反弹，中证2000是否见顶</p></div>
      </div>
      <div class="flex items-start space-x-3">
        <span class="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">8</span>
        <div><p class="text-slate-800 font-bold text-sm">美联储议息会议预期</p><p class="text-slate-600 text-xs">影响全球资产定价</p></div>
      </div>
    </div>
  </div>

  <div class="mt-8 p-4 bg-slate-100 rounded-xl border border-slate-200">
    <p class="text-slate-500 text-xs text-center">本报告基于集思录社区公开讨论整理，仅代表社区用户观点，不构成任何投资建议。投资有风险，决策需谨慎。</p>
  </div>

</div>
`;
}
