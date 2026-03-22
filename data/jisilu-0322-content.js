// ==========================================
// 集思录内容渲染 - 2026-03-22
// ==========================================

function renderJisiluContent_0322() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 my-6 rounded-r-xl">
      <div class="flex items-center mb-3">
        <span class="text-3xl mr-3">📊</span>
        <h2 class="text-2xl font-black text-amber-900">集思录投资洞察</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-amber-800">
        <div><span class="font-semibold">报告日期:</span> 2026 年 3 月 22 日</div>
        <div><span class="font-semibold">数据来源:</span> 集思录热门讨论（80 条帖子）</div>
        <div><span class="font-semibold">抓取时间:</span> 2026/3/22 21:06</div>
        <div><span class="font-semibold">情绪评分:</span> 5/10 偏谨慎</div>
      </div>
    </div>

    <!-- 一、热门话题 TOP 10 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
      热门话题 TOP 10
    </h2>

    <!-- 话题 1：实盘收益汇总 -->
    <div id="j_sec1" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥🔥🔥🔥🔥</span> 实盘收益汇总贴
      </h4>
      <div class="space-y-3 text-amber-900">
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">📌 讨论焦点</p>
          <p>周度收益汇报与重仓品种统计，可转债和小市值策略成主流配置</p>
        </div>

        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">💡 核心观点</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@持有封基:</strong> 按周收益率排序统计，可转债/转债大饼出现次数 25+ 次，小市值/微盘股 15+ 次，ETF 大饼 15+ 次</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@奔魔:</strong> 实际年收益率 108.49%（最初误报为净值未减 1）</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@绿叶菜超天才:</strong> 周收益 -1.96%，年收益 9.09%，仓位 99.8%，重仓中金三傻、镇洋发展、华夏银行</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@溢彩流光:</strong> 周收益 -5.79%，年收益 8.61%，仓位 150%，重仓中英科技、联发股份、彩虹集团</span>
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-amber-600 bg-white/60 rounded-r-xl p-4 my-3 text-slate-700">
          <p class="text-sm"><strong>@持有封基:</strong> "可转债/转债大饼 25+、小市值/微盘股 15+、ETF 大饼/各类 ETF 15+、股票大饼 10+"</p>
        </blockquote>

        <p class="text-amber-700 text-sm"><strong>散户情绪:</strong> 观望（本周普遍回撤，但长期信心仍在）</p>
      </div>
    </div>

    <!-- 话题 2：刺猬与狐狸之辩 -->
    <div id="j_sec2" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥🔥🔥🔥☆</span> 投资哲学：刺猬与狐狸之辩
      </h4>
      <div class="space-y-3 text-purple-900">
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">📌 讨论焦点</p>
          <p>投资者应该做坚守单一原则的"刺猬"还是灵活应变的"狐狸"</p>
        </div>

        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">💡 核心观点</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@雪雁悟道:</strong> 价格投资者是刺猬，趋势投资者和投机者是狐狸；刺猬和狐狸不是敌人，可能是朋友</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@他丫的:</strong> 投资者既要有刺猬思维（找到策略底层逻辑构建能力圈）也要有狐狸思维（认识投资结果不确定性）</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@pppppp:</strong> 大腚小灵，一种复合体，魂如阴阳鱼；40 不惑阶段，未来大方向要有 (刺猬)，具体微观操作要灵活 (狐狸)</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@kevinfeng1972:</strong> 要有常识，如果我知道我会死在哪，我一定不会去哪里</span>
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-purple-500 bg-white/60 rounded-r-xl p-4 my-3 text-slate-700">
          <p class="text-sm"><strong>@jian:</strong> "刺猬的敌人是嫉妒，看到别的刺猬找到了丰水宝地，看到狐狸们经常有美食享用；刺猬的敌人是寂寞，长时间的傻傻的呆着；众生皆苦。"</p>
        </blockquote>

        <p class="text-purple-700 text-sm"><strong>散户情绪:</strong> 理性思考（深度哲学讨论）</p>
      </div>
    </div>

    <!-- 话题 3：可转债强赎博弈 -->
    <div id="j_sec3" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥🔥🔥🔥☆</span> 可转债强赎博弈
      </h4>
      <div class="space-y-3 text-blue-900">
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">📌 讨论焦点</p>
          <p>海优转债负溢价率强制赎回引发的套利机会与风险</p>
        </div>

        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">💡 核心观点</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@NGC4038:</strong> 105 附近补的海优已出掉，光伏主要消息驱动，不确定性高，先落袋为安</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@小胖子 2014:</strong> 已买入正股持续搬砖，公司肯定不想还钱，持续做折价应该亏不了多少</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@luckzpz:</strong> 基本面太差，这货是怎么做到强赎的</span>
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-blue-500 bg-white/60 rounded-r-xl p-4 my-3 text-slate-700">
          <p class="text-sm"><strong>@小胖子 2014:</strong> "公司肯定不想还钱，这个价位开始持续做折价应该是亏不了多少的，但只买转债低买高卖的话，感觉还有些下行空间。"</p>
        </blockquote>

        <p class="text-blue-700 text-sm"><strong>散户情绪:</strong> 谨慎乐观（套利机会与风险并存）</p>
      </div>
    </div>

    <!-- 话题 4：房价拐点讨论 -->
    <div id="j_sec4" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥🔥🔥🔥☆</span> 房价拐点与老破小投资
      </h4>
      <div class="space-y-3 text-green-900">
        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">📌 讨论焦点</p>
          <p>成都女性买家入手多套"老破小"收租是否可行</p>
        </div>

        <div class="bg-white/60 rounded-lg p-3">
          <p class="font-bold mb-2">💡 核心观点</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@孔曼子:</strong> 成都市区租房市场不太好，住宅性质老破小正常出租达到 5% 收益率不太可能</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@cheche88:</strong> 成都土著告诉你，这是明显假新闻，骗人接盘</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@momo 丁:</strong> 县城 3-5 万破房子，20 多平方，租 200-300 元/月，年化 6%</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
              <span><strong>@犇犇犇:</strong> 投资房子流动性差，买卖成本 10% 起步，出租花时间，租客不稳定</span>
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-green-600 bg-white/60 rounded-r-xl p-4 my-3 text-slate-700">
          <p class="text-sm"><strong>@xmclub:</strong> "正常来说，几乎不会有人会在网络上公开向从未认识的陌生人无偿分享自己赚大钱的方法，这相当于自己给自己培养竞争对手。"</p>
        </blockquote>

        <p class="text-green-700 text-sm"><strong>散户情绪:</strong> 怀疑（多数认为是中介骗局）</p>
      </div>
    </div>

    <!-- 话题 5-10 简化展示 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP5: 小市值策略深度讨论</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> 微盘股策略的有效性与风险控制</p>
        <p class="text-xs text-slate-500"><strong>@dingo49:</strong> "我每次说我全仓小市值都是做好了被腰斩的准备"</p>
        <p class="text-xs text-slate-500"><strong>@绿叶菜超天才:</strong> 小市值策略本质是卖保险</p>
      </div>

      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP6: 基金大饼与量化择时</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> 量化择时 + 主观轮动的基金组合策略</p>
        <p class="text-xs text-slate-500"><strong>@网格定投 2007:</strong> "最大的风险，不是市场下跌，而是所有人都相信它不会下跌"</p>
      </div>

      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP7: 配债策略困境</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> 可转债配债策略近期表现不佳</p>
        <p class="text-xs text-slate-500"><strong>@eye00:</strong> "配债都赔掉裤衩了"</p>
        <p class="text-xs text-slate-500"><strong>@creasylai:</strong> 埋伏的 8 个只有 1 个账面盈利</p>
      </div>

      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP8: ETF 期权交易心得</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> ETF 期权 3-4 年交易经验总结</p>
        <p class="text-xs text-slate-500"><strong>@搭积木的影子:</strong> "做买方是以时间为敌，做卖方平时赚小便宜关键时候用命填"</p>
      </div>

      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP9: 红利增强策略实盘</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> 个体户投资者的红利增强策略实践</p>
        <p class="text-xs text-slate-500"><strong>@zhangsheng123:</strong> 构建 5-10 只股票组合，目标每年超额收益 1%-3%</p>
      </div>

      <div class="bg-gradient-to-br from-slate-50 to-gray-50 border-l-4 border-slate-400 p-4 rounded-r-xl md:col-span-2">
        <h5 class="font-black text-slate-800 mb-2">🔥🔥🔥☆☆ TOP10: 券商打新通道评测</h5>
        <p class="text-sm text-slate-600 mb-2"><strong>焦点:</strong> 普昂医疗申购各券商通道表现</p>
        <p class="text-xs text-slate-500"><strong>@楼主:</strong> 东方财富 6:13 下单都有翻车，只有提前下隔夜单才能稳稳上岸</p>
      </div>
    </div>

    <!-- 二、投资方法论精粹 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>
      投资方法论精粹（实操导向）
    </h2>

    <div id="j_sec5" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3">策略 1: 1234 战法资产配置</h4>
      <div class="space-y-2 text-amber-900">
        <p><strong>核心逻辑:</strong> 通过大类资产分散配置 + 再平衡获取稳定收益。商品类激进进攻，行业大饼代替 A 股大盘偏进攻，红利类防守，债类减波。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>10% 商品（激进）</li>
          <li>20% 债券或现金（减波）</li>
          <li>30% 红利类（防守）</li>
          <li>40% 行业大饼（进攻）</li>
          <li>结合 LOF 套利、行业大饼轮动、比例再平衡获取额外收益</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-yellow-600 font-bold">中</span></p>
        <p><strong>代表案例:</strong> jxncpjf 实盘分享，20 万起步</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3">策略 2: 可转债强赎折价套利</h4>
      <div class="space-y-2 text-blue-900">
        <p><strong>核心逻辑:</strong> 强赎转债通常出现折价，通过买入转债 + 转股或在折价时买入正股做折价收益，公司不愿还钱会推动转股。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>选择已宣布强赎且出现折价的转债</li>
          <li>持有正股，盘中出现折价时卖出正股买入转债</li>
          <li>收盘前转股，持续操作获取折价收益</li>
          <li>注意强赎实施日期公告</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-yellow-600 font-bold">中</span>（正股波动风险）</p>
        <p><strong>代表案例:</strong> NGC4038、小胖子 2014 海优转债操作</p>
      </div>
    </div>

    <div id="j_sec6" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3">策略 3: 量化择时 + 主观轮动基金大饼</h4>
      <div class="space-y-2 text-green-900">
        <p><strong>核心逻辑:</strong> 量化择时控制仓位，主观轮动选择行业，网格交易执行，分散投资控制回撤。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>红利策略：仓位 10-30%，标的红利低波 ETF</li>
          <li>量化择时：仓位 0-50%，标的中证 A 股 ETF、中证 500、中证 1000 等</li>
          <li>行业轮动：仓位 0-30%，行业主题 ETF</li>
          <li>低相关品种：仓位 10-20%，商品 ETF 和转债基金</li>
          <li>赛季理念：连续亏损或亏损超 20% 调整策略</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-yellow-600 font-bold">中</span></p>
        <p><strong>代表案例:</strong> 网格定投 2007，当前净值 1.004，权益仓位 60%</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3">策略 4: 红利增强选股策略</h4>
      <div class="space-y-2 text-purple-900">
        <p><strong>核心逻辑:</strong> 以红利 ETF 成分股为基础，筛选历史分红大于融资且有业绩反转预期的超跌个股，构建 5-10 只组合，目标跑赢红利 ETF 1-3%。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>以红利 ETF 股票池为基础</li>
          <li>筛选历史分红大于融资的个股</li>
          <li>选择有业绩反转预期的超跌反弹股</li>
          <li>分行业构建 5-10 只组合</li>
          <li>买入前设定买卖条件，使用条件单自动执行</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-green-600 font-bold">低至中</span></p>
        <p><strong>代表案例:</strong> zhangsheng123，持仓梅花生物、平煤股份、海螺水泥等</p>
      </div>
    </div>

    <div id="j_sec7" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3">策略 5: 小市值轮动策略</h4>
      <div class="space-y-2 text-red-900">
        <p><strong>核心逻辑:</strong> 小市值股票长期存在溢价，通过分散持有最小市值股票并定期轮动，获取小市值因子的超额收益。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>选择最小市值股票池（剔除北交、科创、ST）</li>
          <li>分散持有 20-50 只</li>
          <li>定期轮动（如每周/每月）</li>
          <li>做好被腰斩的心理准备</li>
          <li>前提条件：货币宽松环境</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-red-600 font-bold">高</span>（退市风险、流动性风险）</p>
        <p><strong>代表案例:</strong> dingo49，全仓小市值策略，年收益曾达 108.49%</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-indigo-800 font-black mb-3">策略 6: ETF 期权长期投资策略</h4>
      <div class="space-y-2 text-indigo-900">
        <p><strong>核心逻辑:</strong> 将期权作为长期投资工具而非炒作工具，在低估时买入最远月最实值看涨期权，利用杠杆获取超额收益。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>看估值：沪深 300 市净率 1.1 倍左右为低估</li>
          <li>选合约：最远月、最实值期权（时间价值最少）</li>
          <li>控杠杆：总杠杆 2 倍左右</li>
          <li>死拿不放：每隔 3-6 个月移仓</li>
          <li>高估减仓：市净率 1.5 倍以上降低杠杆</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-red-600 font-bold">高</span>（杠杆风险）</p>
        <p><strong>代表案例:</strong> 茶山浪人，10 年期权期指交易经验</p>
      </div>
    </div>

    <div id="j_sec8" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-teal-800 font-black mb-3">策略 7: 强赎博弈对冲新思路</h4>
      <div class="space-y-2 text-teal-900">
        <p><strong>核心逻辑:</strong> 买入即将满足强赎条件的转债，同时买入双低的同板块转债对冲，套取溢价率回升收益。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>选择即将满足强赎条件且计数停止的转债</li>
          <li>同时买入双低的同板块转债替代正股对冲</li>
          <li>板块景气度绑定，双低转债向下空间有限</li>
          <li>对冲板块杀跌风险</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-yellow-600 font-bold">中</span></p>
        <p><strong>代表案例:</strong> NGC4038 晶能转债 + 海优转债组合</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3">策略 8: 北交所大饼策略</h4>
      <div class="space-y-2 text-orange-900">
        <p><strong>核心逻辑:</strong> 北交所股票分散投资，利用高波动性和资金轮动获取收益。</p>
        <p><strong>操作要点:</strong></p>
        <ol class="list-decimal list-inside space-y-1 text-sm">
          <li>分散持有 20-30 只北交所股票</li>
          <li>非 ST、市值 10 亿左右</li>
          <li>定期轮动</li>
          <li>做好极端回撤预案</li>
        </ol>
        <p><strong>风险等级:</strong> <span class="text-red-600 font-bold">高</span></p>
        <p><strong>代表案例:</strong> 小小泽雨，周收益 -9.34%，最大回撤 19.37%</p>
      </div>
    </div>

    <!-- 三、热议标的清单 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
      热议标的清单
    </h2>

    <div id="j_sec9" class="scroll-mt-24"></div>
    <div class="overflow-x-auto my-6">
      <table class="w-full text-sm text-left border rounded-lg overflow-hidden">
        <thead class="bg-slate-100 font-black text-slate-800">
          <tr>
            <th class="px-4 py-3 border-b">标的</th>
            <th class="px-4 py-3 border-b">类型</th>
            <th class="px-4 py-3 border-b">热度</th>
            <th class="px-4 py-3 border-b">核心逻辑</th>
            <th class="px-4 py-3 border-b">风险提示</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">海优转债<br><span class="text-xs text-slate-500">118008</span></td>
            <td class="px-4 py-3">可转债</td>
            <td class="px-4 py-3"><span class="text-red-500">高</span></td>
            <td class="px-4 py-3">强赎折价套利，公司不愿还钱有动力维持折价</td>
            <td class="px-4 py-3 text-red-600">基本面差，正股波动大，强赎实施日期不确定</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">晶能转债<br><span class="text-xs text-slate-500">118046</span></td>
            <td class="px-4 py-3">可转债</td>
            <td class="px-4 py-3"><span class="text-red-500">高</span></td>
            <td class="px-4 py-3">脱离强赎风险后有溢价率回升空间，光伏板块弹性</td>
            <td class="px-4 py-3 text-red-600">光伏行业波动大，强赎风险未完全解除</td>
          </tr>
          <tr id="j_sec10" class="scroll-mt-24 hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">龙大转债<br><span class="text-xs text-slate-500">127069</span></td>
            <td class="px-4 py-3">可转债</td>
            <td class="px-4 py-3"><span class="text-orange-500">中高</span></td>
            <td class="px-4 py-3">下修后有一定安全边际</td>
            <td class="px-4 py-3 text-red-600">预期目标价不断下调，可能走鸿达路线</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">三房转债<br><span class="text-xs text-slate-500">123155</span></td>
            <td class="px-4 py-3">可转债</td>
            <td class="px-4 py-3"><span class="text-yellow-500">中</span></td>
            <td class="px-4 py-3">大股东股票被冻结但有国资接盘预期</td>
            <td class="px-4 py-3 text-red-600">控制权变更不确定，正股业绩差</td>
          </tr>
          <tr id="j_sec11" class="scroll-mt-24 hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">信达证券<br><span class="text-xs text-slate-500">601059</span></td>
            <td class="px-4 py-3">股票</td>
            <td class="px-4 py-3"><span class="text-orange-500">中高</span></td>
            <td class="px-4 py-3">现金选择权 17.79 元 vs 现价 17.29 元，近 3% 套利空间</td>
            <td class="px-4 py-3 text-red-600">合并方案可能失败，现金选择权有下调机制</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">镇洋发展<br><span class="text-xs text-slate-500">603213</span></td>
            <td class="px-4 py-3">股票</td>
            <td class="px-4 py-3"><span class="text-yellow-500">中</span></td>
            <td class="px-4 py-3">要约收购概念，孔曼子重仓品种</td>
            <td class="px-4 py-3 text-red-600">投票可能出幺蛾子，波动性低</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">中证红利低波 ETF</td>
            <td class="px-4 py-3">ETF</td>
            <td class="px-4 py-3"><span class="text-red-500">高</span></td>
            <td class="px-4 py-3">长期 8-10% 年化收益，防守属性强</td>
            <td class="px-4 py-3 text-red-600">银行金融板块占比高，短期跑输市场</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">纳指 ETF</td>
            <td class="px-4 py-3">ETF</td>
            <td class="px-4 py-3"><span class="text-orange-500">中高</span></td>
            <td class="px-4 py-3">连涨 3 年后回调，长期配置价值</td>
            <td class="px-4 py-3 text-red-600">已连涨 3 年，明年下跌可能性较大</td>
          </tr>
          <tr class="hover:bg-amber-50">
            <td class="px-4 py-3 font-bold text-amber-700">北交所小市值</td>
            <td class="px-4 py-3">股票组合</td>
            <td class="px-4 py-3"><span class="text-red-500">高</span></td>
            <td class="px-4 py-3">高弹性，轮动收益高</td>
            <td class="px-4 py-3 text-red-600">本周崩盘，最大回撤超 19%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 四、市场情绪观察 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
      市场情绪观察
    </h2>

    <div id="j_sec12" class="scroll-mt-24"></div>
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 my-6 rounded-r-xl">
      <div class="flex items-center mb-4">
        <span class="text-4xl mr-4">😐</span>
        <div>
          <p class="text-2xl font-black text-green-800">整体情绪评分：5/10</p>
          <p class="text-green-700">偏谨慎，本周普遍回调</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="font-black text-green-800 mb-2 flex items-center">
            <span class="text-lg mr-2">📈</span>乐观信号
          </h5>
          <ul class="space-y-2 text-sm text-green-900">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@dingo49:</strong> "坚信轮动的力量，坚信超额能够不断累积"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@dingo49:</strong> "调整之后，会有新高"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@网格定投 2007:</strong> "上证指数跌破 3900，加仓权益配置"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@小小泽雨:</strong> "越跌越快，距离底部越来越近了"</span>
            </li>
          </ul>
        </div>

        <div class="bg-white/70 rounded-lg p-4">
          <h5 class="font-black text-red-800 mb-2 flex items-center">
            <span class="text-lg mr-2">📉</span>悲观/谨慎信号
          </h5>
          <ul class="space-y-2 text-sm text-red-900">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@eye00:</strong> "配债都赔掉裤衩了"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@长安 2004:</strong> "震荡下跌可能就是 2026 年的主基调"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@小小泽雨:</strong> "北交所崩了，我的账户也崩了"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@caifeng2018:</strong> "其实整个三月，我都是晚上偷偷躲在被窝里哭"</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>@网格定投 2007:</strong> "最大的风险，不是市场下跌，而是所有人都相信它不会下跌"</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-4 flex gap-4 text-sm">
        <div class="bg-white/70 rounded-lg px-4 py-2">
          <span class="font-semibold text-green-800">风险偏好:</span>
          <span class="text-green-700 ml-2">中低（多数用户强调仓位控制、分散投资）</span>
        </div>
      </div>
      <div class="mt-2 bg-white/70 rounded-lg px-4 py-2">
        <span class="font-semibold text-green-800">热点轮动:</span>
        <span class="text-green-700 ml-2">可转债 &gt; 红利低波 &gt; 黄金 &gt; 券商合并 &gt; 小市值</span>
      </div>
    </div>

    <!-- 五、风险提示 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
      风险提示（具体可操作）
    </h2>

    <div id="j_sec13" class="scroll-mt-24"></div>
    <div class="space-y-4 my-6">
      <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <h5 class="font-black text-red-800 mb-2">⚠️ 风险 1: 小市值策略流动性风险</h5>
        <p class="text-sm text-red-900"><strong>触发条件:</strong> 市值低于 5 亿退市新规触发、市场流动性收紧、微盘股集体踩踏</p>
        <p class="text-sm text-red-900"><strong>历史教训:</strong> 2024 年 2 月微盘股指数从高点回撤超 40%</p>
        <p class="text-sm text-red-900"><strong>应对建议:</strong> ①做好被腰斩的心理和资金准备 ②控制仓位，不要全仓单一策略 ③分散持有 30-50 只以上 ④关注货币政策动向</p>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h5 class="font-black text-blue-800 mb-2">⚠️ 风险 2: 可转债信用风险</h5>
        <p class="text-sm text-blue-900"><strong>触发条件:</strong> 正股基本面持续恶化、公司现金流断裂、转债到期无法兑付</p>
        <p class="text-sm text-blue-900"><strong>历史教训:</strong> 搜特转债、蓝盾转债违约</p>
        <p class="text-sm text-blue-900"><strong>应对建议:</strong> ①问题债跌不到 8X 不重仓 ②分散投资，单只转债不超过 5% 仓位 ③关注公司现金流和债务状况 ④避免过度依赖"刚兑"信仰</p>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
        <h5 class="font-black text-green-800 mb-2">⚠️ 风险 3: 配债策略亏损风险</h5>
        <p class="text-sm text-green-900"><strong>触发条件:</strong> 大盘情绪不佳、配债股上市破发、转债上市溢价率低</p>
        <p class="text-sm text-green-900"><strong>历史教训:</strong> 2026 年 3 月配债普遍亏损</p>
        <p class="text-sm text-green-900"><strong>应对建议:</strong> ①大盘情绪不佳时暂停配债 ②只埋伏本身有价值的正股 ③控制配债仓位 ④设置止损线</p>
      </div>

      <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
        <h5 class="font-black text-purple-800 mb-2">⚠️ 风险 4: 期权卖方极端行情风险</h5>
        <p class="text-sm text-purple-900"><strong>触发条件:</strong> 市场突发大行情、波动率飙升、保证金不足</p>
        <p class="text-sm text-purple-900"><strong>历史教训:</strong> "千日担柴一日烧"，一次大行情可亏光所有利润</p>
        <p class="text-sm text-purple-900"><strong>应对建议:</strong> ①控制杠杆，总杠杆不超过 2 倍 ②做好止损 ③避免裸卖空 ④买方策略控制仓位（归零心态）</p>
      </div>

      <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
        <h5 class="font-black text-orange-800 mb-2">⚠️ 风险 5: 房产投资流动性风险</h5>
        <p class="text-sm text-orange-900"><strong>触发条件:</strong> 房价持续下跌、租客不稳定、利率上升</p>
        <p class="text-sm text-orange-900"><strong>应对建议:</strong> ①警惕网络"老破小"投资建议（多为中介骗局）②考虑管理成本和时间成本 ③预留足够现金流应对空置期 ④关注房产税政策</p>
      </div>

      <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-4 rounded-r-lg">
        <h5 class="font-black text-slate-800 mb-2">⚠️ 风险 6: 4 月调整风险</h5>
        <p class="text-sm text-slate-900"><strong>触发条件:</strong> 年报密集披露、业绩暴雷、传统 4 月调整窗口</p>
        <p class="text-sm text-slate-900"><strong>历史教训:</strong> 往年 4 月微盘股普遍调整</p>
        <p class="text-sm text-slate-900"><strong>应对建议:</strong> ①用 30% 仓位做择时，保留 70% 大部分仓位 ②关注年报披露进度 ③回避业绩可能暴雷品种 ④可考虑部分对冲</p>
      </div>

      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
        <h5 class="font-black text-amber-800 mb-2">⚠️ 风险 7: 券商打新通道风险</h5>
        <p class="text-sm text-amber-900"><strong>触发条件:</strong> 券商申报系统延迟、申购时间窗口短、顶格申购竞争激烈</p>
        <p class="text-sm text-amber-900"><strong>应对建议:</strong> ①避开已知翻车券商（中银、华宝、国金等）②选择隔夜单功能稳定的券商 ③多券商分散申购 ④降低预期</p>
      </div>
    </div>

    <!-- 六、下周关注点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
      下周关注点
    </h2>

    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-6 my-6 rounded-r-xl">
      <ul class="space-y-3 text-indigo-900">
        <li class="flex items-start">
          <span class="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">1</span>
          <div>
            <p class="font-bold">可转债强赎实施</p>
            <p class="text-sm">海优转债、盟升转债等强赎转债最后交易日/转股日</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">2</span>
          <div>
            <p class="font-bold">年报披露</p>
            <p class="text-sm">3 月底为年报密集披露期，关注业绩暴雷风险</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">3</span>
          <div>
            <p class="font-bold">短线交易监管新规</p>
            <p class="text-sm">证监会《关于短线交易监管的若干规定》4 月 7 日起施行</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">4</span>
          <div>
            <p class="font-bold">北交所走势</p>
            <p class="text-sm">关注是否企稳反弹</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">5</span>
          <div>
            <p class="font-bold">美伊局势</p>
            <p class="text-sm">地缘政治对黄金、原油价格影响</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 免责声明 -->
    <div class="bg-slate-100 border-l-4 border-slate-400 p-4 my-6 rounded-r-lg">
      <p class="text-sm text-slate-600">
        <strong>免责声明:</strong> 本报告基于集思录用户公开讨论整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。
      </p>
    </div>

  </div>`;
}
