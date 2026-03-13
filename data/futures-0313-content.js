// ==========================================
// 期货市场分析 - 内容渲染
// 日期：2026-03-13
// ==========================================

function renderFuturesContent_0313() {
  return `
<div class="prose prose-slate max-w-none">
  <div class="mb-8">
    <h1 class="text-3xl font-black text-slate-900 mb-2 flex items-center">
      <span class="w-2 h-10 bg-orange-600 rounded-full mr-4"></span>
      期货市场投资策略报告
    </h1>
    <p class="text-slate-500 text-sm">2026年3月13日 · 中东地缘冲突主导市场</p>
  </div>

  <!-- 核心观点 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>市场概况与核心观点
  </h2>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">🔥</span>核心驱动：中东地缘政治冲突
    </h4>
    <p class="text-orange-900 mb-3">今日国内商品期货市场受中东地缘政治冲突主导，主力合约整体涨多跌少。霍尔木兹海峡封锁引发的全球能源供应危机成为核心交易逻辑，能源化工板块领涨，有色金属受供应端扰动偏强运行，农产品板块相对独立。</p>
    <p class="text-orange-900 font-medium">伊朗与美国/以色列冲突持续升级，霍尔木兹海峡通行近乎停滞，全球约三分之一石油贸易受阻。布伦特原油价格一度逼近120美元/桶，后回落至92美元/桶附近。</p>
  </div>

  <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">短期策略建议</h3>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="bg-green-50 border border-green-200 rounded-xl p-4">
      <h5 class="text-green-800 font-black mb-2 flex items-center">
        <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>做多方向
      </h5>
      <ul class="text-green-900 text-sm space-y-1">
        <li>- 原油系品种（原油、燃料油、低硫燃油）</li>
        <li>- 铝（中东产能停产）</li>
        <li>- 黄金（避险情绪）</li>
      </ul>
    </div>
    <div class="bg-red-50 border border-red-200 rounded-xl p-4">
      <h5 class="text-red-800 font-black mb-2 flex items-center">
        <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>做空方向
      </h5>
      <ul class="text-red-900 text-sm space-y-1">
        <li>- 生猪（基本面偏弱）</li>
        <li>- 苹果（交割压力）</li>
      </ul>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <h5 class="text-slate-800 font-black mb-2 flex items-center">
        <span class="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>观望品种
      </h5>
      <ul class="text-slate-900 text-sm space-y-1">
        <li>- 铜（等待库存拐点）</li>
        <li>- 镍、锌（信号不明确）</li>
      </ul>
    </div>
  </div>

  <!-- 能源化工板块 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>重点品种分析
  </h2>

  <h3 id="f_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">能源化工板块</h3>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·原油
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">最新价</div>
        <div class="font-black text-orange-900">92美元/桶</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">日内区间</div>
        <div class="font-black text-orange-900">80-120美元</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">涨跌幅</div>
        <div class="font-black text-green-600">+11%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">趋势</div>
        <div class="font-black text-green-600">上涨</div>
      </div>
    </div>
    <p class="text-orange-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-orange-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>霍尔木兹海峡封锁，全球石油供应中断约1000万桶/日</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>IEA成员国释放4亿桶战略石油储备，但仅为短期缓冲</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>伊朗控制海峡，威胁任何美以船只通行</li>
    </ul>
    <p class="text-orange-900 text-sm"><strong>操作建议：</strong>多单持有，关注中东局势变化</p>
    <p class="text-red-700 text-sm mt-2"><strong>风险提示：</strong>若冲突缓和，油价可能快速回落</p>
  </div>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·对二甲苯（PX）
    </h4>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">涨跌幅</div>
        <div class="font-black text-green-600">+13.01%（涨停）</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">趋势</div>
        <div class="font-black text-green-600">上涨</div>
      </div>
    </div>
    <p class="text-orange-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-orange-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>原油成本抬升带动全产业链涨价</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>亚洲石脑油、乙烯供应紧张</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>PX出口数据强劲，韩国3月出口同比增72%</li>
    </ul>
    <p class="text-orange-900 text-sm"><strong>操作建议：</strong>多单持有，关注下游涤丝销售情况</p>
  </div>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·燃料油/低硫燃油
    </h4>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">低硫燃油</div>
        <div class="font-black text-green-600">+15%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">燃料油</div>
        <div class="font-black text-green-600">+9%</div>
      </div>
    </div>
    <p class="text-orange-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-orange-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>海峡封锁直接影响中东燃料油出口</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>高硫燃料油受影响最为直接</li>
    </ul>
    <p class="text-orange-900 text-sm"><strong>操作建议：</strong>偏多思路，但需警惕高位波动</p>
  </div>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·甲醇
    </h4>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">涨跌幅</div>
        <div class="font-black text-green-600">+4%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-orange-600">趋势</div>
        <div class="font-black text-green-600">上涨</div>
      </div>
    </div>
    <p class="text-orange-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-orange-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>伊朗是全球第一大甲醇出口国，装置全停</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>中国从伊朗进口甲醇占总进口量约60%</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>3月进口缩量预期强烈</li>
    </ul>
    <p class="text-orange-900 text-sm"><strong>操作建议：</strong>短期偏多，但基本面仍偏弱，情绪降温后可能回落</p>
  </div>

  <!-- 有色金属板块 -->
  <h3 id="f_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">有色金属板块</h3>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·铝
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-blue-600">最新价</div>
        <div class="font-black text-blue-900">25315元/吨</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-blue-600">涨跌幅</div>
        <div class="font-black text-green-600">+0.38%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-blue-600">趋势</div>
        <div class="font-black text-green-600">上涨</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-blue-600">止损位</div>
        <div class="font-black text-red-600">24800</div>
      </div>
    </div>
    <p class="text-blue-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-blue-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>巴林铝业（165万吨产能）宣布不可抗力</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>卡塔尔铝厂（65万吨产能）启动停产程序</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>中东电解铝产能占全球约9%</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>国内社会库存125.6万吨，创2023年3月以来新高</li>
    </ul>
    <p class="text-blue-900 text-sm"><strong>操作建议：</strong>多单持有，供应缺口具有持续性</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-slate-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📊</span>品种分析·铜
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-slate-600">最新价</div>
        <div class="font-black text-slate-900">101310元/吨</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-slate-600">涨跌幅</div>
        <div class="font-black text-red-600">-0.51%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-slate-600">趋势</div>
        <div class="font-black text-slate-600">震荡</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-slate-600">库存</div>
        <div class="font-black text-slate-900">~150万吨</div>
      </div>
    </div>
    <p class="text-slate-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-slate-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2 flex-shrink-0"></span>矿紧格局延续，TC低位运行</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2 flex-shrink-0"></span>全球库存约150万吨，处于高位</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2 flex-shrink-0"></span>中东局势引发滞胀担忧，压制铜价</li>
    </ul>
    <p class="text-slate-900 text-sm"><strong>操作建议：</strong>观望，等待库存拐点信号</p>
  </div>

  <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-yellow-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·黄金
    </h4>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-yellow-600">沪金</div>
        <div class="font-black text-yellow-900">1151.48元/克</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-yellow-600">COMEX金</div>
        <div class="font-black text-yellow-900">5175美元/盎司</div>
      </div>
    </div>
    <p class="text-yellow-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-yellow-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-2 flex-shrink-0"></span>避险情绪升温</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-2 flex-shrink-0"></span>全球黄金ETF连续9个月净流入</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-2 flex-shrink-0"></span>华泰证券预计2026-2028年金价有望冲击5400-6800美元/盎司</li>
    </ul>
    <p class="text-yellow-900 text-sm"><strong>操作建议：</strong>多单持有，地缘风险持续</p>
  </div>

  <!-- 黑色板块 -->
  <h3 id="f_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">黑色板块</h3>

  <div class="bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-gray-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📈</span>品种分析·铁矿石
    </h4>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-gray-600">夜盘涨幅</div>
        <div class="font-black text-green-600">近4%</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-gray-600">趋势</div>
        <div class="font-black text-green-600">震荡偏强</div>
      </div>
    </div>
    <p class="text-gray-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-gray-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-2 flex-shrink-0"></span>华北高炉限产结束，钢厂或加速复产</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-2 flex-shrink-0"></span>澳巴发运环比大幅下滑</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-2 flex-shrink-0"></span>钢厂库存去化，补库需求释放</li>
    </ul>
    <p class="text-gray-900 text-sm"><strong>操作建议：</strong>多单持有，关注需求强度</p>
  </div>

  <div class="bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-400 p-5 my-5 rounded-r-xl">
    <h4 class="text-gray-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📊</span>品种分析·螺纹钢/热卷
    </h4>
    <p class="text-gray-900 text-sm mb-2"><strong>趋势判断：</strong>震荡</p>
    <p class="text-gray-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-gray-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0"></span>五大品种库存超过2025年高点</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0"></span>两会结束后供应预计维持高位</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0"></span>需求恢复缓慢</li>
    </ul>
    <p class="text-gray-900 text-sm"><strong>操作建议：</strong>区间震荡思路，关注需求强度</p>
  </div>

  <!-- 农产品板块 -->
  <h3 id="f_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">农产品板块</h3>

  <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-red-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📉</span>品种分析·生猪
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-red-600">全国均价</div>
        <div class="font-black text-red-900">10.15元/kg</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-red-600">猪粮比</div>
        <div class="font-black text-red-900">4.67:1</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-red-600">预警级别</div>
        <div class="font-black text-red-600">一级预警</div>
      </div>
      <div class="bg-white/60 rounded-lg p-2 text-center">
        <div class="text-xs text-red-600">趋势</div>
        <div class="font-black text-red-600">下跌</div>
      </div>
    </div>
    <p class="text-red-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-red-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>猪粮比4.67:1，进入过度下跌一级预警区间</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>广东省启动冻猪肉储备收储</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>终端需求疲软，涨价可能性不大</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>出栏体重偏大，供应压力明显</li>
    </ul>
    <p class="text-red-900 text-sm"><strong>操作建议：</strong>逢高偏空思路</p>
    <p class="text-amber-700 text-sm mt-2"><strong>风险提示：</strong>收储政策可能带来短期支撑</p>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">📊</span>品种分析·豆粕/菜粕
    </h4>
    <p class="text-green-900 text-sm mb-2"><strong>趋势判断：</strong>震荡偏强</p>
    <p class="text-green-900 text-sm mb-2"><strong>驱动因素：</strong></p>
    <ul class="text-green-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>中东战争扰动航运市场</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>进口大豆到港边际收缩</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>国内库存压力逐渐缓解</li>
    </ul>
    <p class="text-green-900 text-sm"><strong>操作建议：</strong>偏多思路，关注月差正套机会</p>
  </div>

  <!-- 新闻热点 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>新闻热点与事件驱动
  </h2>

  <h3 id="f_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">中东地缘政治冲突（核心驱动）</h3>

  <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-red-800 font-black mb-3">事件梳理</h4>
    <ol class="text-red-900 text-sm space-y-2 mb-4 list-decimal list-inside">
      <li><strong>冲突起源：</strong>2月28日美以对伊朗发动空袭</li>
      <li><strong>海峡封锁：</strong>伊朗封锁霍尔木兹海峡，威胁美以船只</li>
      <li><strong>伊朗政权更迭：</strong>穆杰塔巴·哈梅内伊继任最高领袖，发表强硬声明</li>
      <li><strong>国际应对：</strong>IEA成员国释放4亿桶战略石油储备，美国释放1.72亿桶</li>
    </ol>
    <h4 class="text-red-800 font-black mb-2">市场影响</h4>
    <ul class="text-red-900 text-sm space-y-1 mb-4">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>布伦特原油一度逼近120美元/桶</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>全球石油供应中断约1000万桶/日</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>马士基等航运公司船只被困波斯湾</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>化工品成本大幅抬升</li>
    </ul>
    <h4 class="text-red-800 font-black mb-2">后续关注</h4>
    <ul class="text-red-900 text-sm space-y-1">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>霍尔木兹海峡通航情况</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>伊朗哈尔克岛（处理90%原油出口）是否受到攻击</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>美以是否对伊朗能源设施实施打击</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>伊朗内部政权交接进展</li>
    </ul>
  </div>

  <h3 id="f_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">美国贸易政策</h3>

  <div class="bg-slate-50 border-l-4 border-slate-400 p-5 my-5 rounded-r-xl">
    <h4 class="text-slate-800 font-black mb-3">301调查</h4>
    <p class="text-slate-900 text-sm mb-2">3月11日，美国对包括中国、欧盟、日本等16个贸易伙伴发起301调查，涉及"过剩工业产能"、数字服务税、汇率操纵等议题。</p>
    <p class="text-slate-900 text-sm mb-2"><strong>市场影响：</strong></p>
    <ul class="text-slate-900 text-sm space-y-1 mb-3">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2 flex-shrink-0"></span>中美贸易关系不确定性增加</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2 flex-shrink-0"></span>可能引发新一轮关税战</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2 flex-shrink-0"></span>对有色金属、农产品出口可能产生影响</li>
    </ul>
    <p class="text-slate-900 text-sm"><strong>中方回应：</strong>外交部表示反对各种形式的单边关税措施，所谓"产能过剩"是伪命题。</p>
  </div>

  <h3 id="f_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">国内政策动态</h3>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-black mb-3">两会闭幕</h4>
    <ul class="text-blue-900 text-sm space-y-1 mb-4">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>十四届全国人大四次会议闭幕</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>表决通过2026年国民经济和社会发展计划</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>生态环境法典草案等获通过</li>
    </ul>
    <h4 class="text-blue-800 font-black mb-2">行业政策</h4>
    <ul class="text-blue-900 text-sm space-y-1">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>广东省启动冻猪肉储备收储（猪粮比进入一级预警）</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>氢能被提升至"未来产业"战略高度</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>绿色甲醇产业发展获政策支持</li>
    </ul>
  </div>

  <!-- 操作建议 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示与操作建议
  </h2>

  <h3 id="f_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做多机会</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">品种</th>
          <th class="px-4 py-3 text-left">理由</th>
          <th class="px-4 py-3 text-center">入场位</th>
          <th class="px-4 py-3 text-center">止损位</th>
          <th class="px-4 py-3 text-center">目标位</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">原油</td>
          <td class="px-4 py-3 text-slate-700">霍尔木兹海峡封锁，供应中断</td>
          <td class="px-4 py-3 text-center font-medium">85-90美元</td>
          <td class="px-4 py-3 text-center text-red-600">75美元</td>
          <td class="px-4 py-3 text-center text-green-600">100-110美元</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">铝</td>
          <td class="px-4 py-3 text-slate-700">中东产能停产，供应缺口扩大</td>
          <td class="px-4 py-3 text-center font-medium">24800-25200</td>
          <td class="px-4 py-3 text-center text-red-600">24000</td>
          <td class="px-4 py-3 text-center text-green-600">26000-27000</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">黄金</td>
          <td class="px-4 py-3 text-slate-700">避险情绪+资产再配置</td>
          <td class="px-4 py-3 text-center font-medium">1100-1150元/克</td>
          <td class="px-4 py-3 text-center text-red-600">1050</td>
          <td class="px-4 py-3 text-center text-green-600">1200-1250</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">燃料油</td>
          <td class="px-4 py-3 text-slate-700">海峡封锁直接影响供应</td>
          <td class="px-4 py-3 text-center font-medium">跟随原油</td>
          <td class="px-4 py-3 text-center text-slate-500">-</td>
          <td class="px-4 py-3 text-center text-slate-500">-</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="f_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做空机会</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">品种</th>
          <th class="px-4 py-3 text-left">理由</th>
          <th class="px-4 py-3 text-center">入场位</th>
          <th class="px-4 py-3 text-center">止损位</th>
          <th class="px-4 py-3 text-center">目标位</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">生猪</td>
          <td class="px-4 py-3 text-slate-700">产能过剩，需求疲软</td>
          <td class="px-4 py-3 text-center font-medium">11000-11200</td>
          <td class="px-4 py-3 text-center text-red-600">11500</td>
          <td class="px-4 py-3 text-center text-green-600">10500-10800</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">苹果</td>
          <td class="px-4 py-3 text-slate-700">盘面回落，交割压力</td>
          <td class="px-4 py-3 text-center font-medium">10000-10200</td>
          <td class="px-4 py-3 text-center text-red-600">10500</td>
          <td class="px-4 py-3 text-center text-green-600">9500-9800</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="f_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">仓位管理建议</h3>

  <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-amber-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">⚠️</span>风险提示
    </h4>
    <p class="text-amber-900 text-sm mb-3">鉴于当前地缘政治风险极高，建议：</p>
    <ul class="text-amber-900 text-sm space-y-1 mb-4">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span><strong>单品种仓位控制在20%以内</strong></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span><strong>总仓位控制在60%以内</strong></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span><strong>设置严格止损</strong>，原油系品种止损幅度可适当放宽</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span><strong>保持一定现金比例</strong>，应对突发情况</li>
    </ul>
    <h4 class="text-amber-800 font-black mb-2">持续关注事项</h4>
    <ul class="text-amber-900 text-sm space-y-1">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>中东局势进展：霍尔木兹海峡通航情况、伊朗哈尔克岛动态</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>宏观政策变化：美联储降息节奏、美国对华贸易政策</li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>产业基本面变化：有色金属库存拐点、农产品春耕情况</li>
    </ul>
  </div>

  <!-- 机构观点汇总 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>机构观点汇总
  </h2>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">机构</th>
          <th class="px-4 py-3 text-left">核心观点</th>
          <th class="px-4 py-3 text-left">重点品种</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">华泰证券</td>
          <td class="px-4 py-3 text-slate-700">黄金、铝受益于地缘冲突；金价2026-2028年或达5400-6800美元</td>
          <td class="px-4 py-3 text-slate-700">黄金、铝</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">中信证券</td>
          <td class="px-4 py-3 text-slate-700">2026年将是消费行业景气拐点确立的关键之年</td>
          <td class="px-4 py-3 text-slate-700">消费板块</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">中信建投</td>
          <td class="px-4 py-3 text-slate-700">AI算力推动液冷散热需求爆发</td>
          <td class="px-4 py-3 text-slate-700">AI产业链</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">中金公司</td>
          <td class="px-4 py-3 text-slate-700">绿色甲醇未来1-2年仍供不应求</td>
          <td class="px-4 py-3 text-slate-700">绿色甲醇</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">开源证券</td>
          <td class="px-4 py-3 text-slate-700">中东局势依旧紧张，美国通胀考验或在3月后</td>
          <td class="px-4 py-3 text-slate-700">能源、贵金属</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 免责声明 -->
  <div class="mt-10 pt-6 border-t border-slate-200">
    <p class="text-slate-500 text-sm text-center">本报告仅供参考，不构成投资建议。投资者应根据自身情况独立决策，并承担相应风险。期货市场风险较大，请谨慎投资。</p>
    <p class="text-slate-400 text-xs text-center mt-2">报告完成时间：2026年3月13日 | 数据来源：东方财富期货</p>
  </div>
</div>
`;
}