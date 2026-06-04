// ==========================================
// 期货市场分析内容渲染 - 2026年6月4日
// ==========================================
function renderFuturesContent_0604() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 标题头 -->
    <div class="bg-gradient-to-br from-orange-900 to-amber-800 rounded-2xl p-8 mb-10 text-white shadow-2xl">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-xs font-bold uppercase tracking-widest bg-amber-400 px-3 py-1 rounded-full">期货市场</span>
        <span class="text-xs text-slate-400">2026年6月4日</span>
      </div>
      <h1 class="text-3xl font-black leading-tight">期货市场分析报告</h1>
      <p class="text-slate-300 mt-3 text-sm">综合行研总监、宏观研究、全球新闻等615份研报交叉验证 | 能源/金属/农产品全板块覆盖</p>
    </div>

    <!-- ===== 价格行情表 ===== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、各板块主要品种价格和涨跌幅</h2>

    <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">能源化工板块</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr><th class="px-4 py-3 text-left">品种</th><th class="px-4 py-3 text-left">最新价</th><th class="px-4 py-3 text-left">日变动</th><th class="px-4 py-3 text-left">YTD</th><th class="px-4 py-3 text-left">驱动因素</th></tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-orange-50 hover:bg-orange-100"><td class="px-4 py-3 font-bold text-orange-900">布伦特原油</td><td class="px-4 py-3">94美元/桶</td><td class="px-4 py-3 text-green-600 font-bold">-3.93%</td><td class="px-4 py-3 text-emerald-600">+67%+</td><td class="px-4 py-3 text-sm">美伊谈判推进，霍尔木兹海峡通航预期</td></tr>
          <tr class="bg-orange-50 hover:bg-orange-100"><td class="px-4 py-3 font-bold text-orange-900">WTI原油</td><td class="px-4 py-3">92美元/桶</td><td class="px-4 py-3 text-green-600 font-bold">-4.21%</td><td class="px-4 py-3 text-emerald-600">+67%+</td><td class="px-4 py-3 text-sm">同上，美国原油库存加速下降</td></tr>
          <tr class="bg-amber-50 hover:bg-amber-100"><td class="px-4 py-3 font-bold text-amber-900">纯MDI</td><td class="px-4 py-3">2.38万元/吨</td><td class="px-4 py-3 text-red-600 font-bold">+31.5% YTD</td><td class="px-4 py-3 text-red-600">+31.5%</td><td class="px-4 py-3 text-sm">中东Sadara停产，社会库存历史低位</td></tr>
          <tr class="bg-amber-50 hover:bg-amber-100"><td class="px-4 py-3 font-bold text-amber-900">维生素VA</td><td class="px-4 py-3">95元/kg</td><td class="px-4 py-3 text-red-600 font-bold">+52% YTD</td><td class="px-4 py-3 text-red-600">+52%</td><td class="px-4 py-3 text-sm">霍尔木兹封锁+下游库存历史低位</td></tr>
          <tr class="bg-amber-50 hover:bg-amber-100"><td class="px-4 py-3 font-bold text-amber-900">维生素VE</td><td class="px-4 py-3">92.5元/kg</td><td class="px-4 py-3 text-red-600 font-bold">+66.7% YTD</td><td class="px-4 py-3 text-red-600">+66.7%</td><td class="px-4 py-3 text-sm">全球供给高度集中+地缘冲击</td></tr>
          <tr class="bg-amber-50 hover:bg-amber-100"><td class="px-4 py-3 font-bold text-amber-900">蛋氨酸</td><td class="px-4 py-3">41.5元/kg</td><td class="px-4 py-3 text-red-600 font-bold">+135.8% YTD</td><td class="px-4 py-3 text-red-600">+135.8%</td><td class="px-4 py-3 text-sm">三重共振暴涨：养殖旺季+供给受阻+库存极低</td></tr>
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">有机硅DMC</td><td class="px-4 py-3">13,500元/吨</td><td class="px-4 py-3 text-amber-600">减产30%后反弹</td><td class="px-4 py-3 text-amber-600">反弹</td><td class="px-4 py-3 text-sm">投产高峰已过，"反内卷"减产</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金属板块</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr><th class="px-4 py-3 text-left">品种</th><th class="px-4 py-3 text-left">最新价</th><th class="px-4 py-3 text-left">日变动</th><th class="px-4 py-3 text-left">YTD</th><th class="px-4 py-3 text-left">驱动因素</th></tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100"><td class="px-4 py-3 font-bold text-amber-900">COMEX黄金</td><td class="px-4 py-3">4,570美元/盎司</td><td class="px-4 py-3 text-emerald-600">+0.28%</td><td class="px-4 py-3 text-emerald-600">+3.05%</td><td class="px-4 py-3 text-sm">向上触及4500美元创历史新高，央行购金+地缘对冲</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100"><td class="px-4 py-3 font-bold text-blue-900">LME铜</td><td class="px-4 py-3">13,656美元/吨</td><td class="px-4 py-3 text-red-600">-0.41%</td><td class="px-4 py-3 text-emerald-600">+9.57%</td><td class="px-4 py-3 text-sm">铜矿资本开支不足，AI+新能源需求拉动，LME创2013年以来最大单日提货纪录</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100"><td class="px-4 py-3 font-bold text-blue-900">沪铝主力</td><td class="px-4 py-3">24,340元/吨</td><td class="px-4 py-3 text-amber-600">高位震荡</td><td class="px-4 py-3 text-emerald-600">上涨</td><td class="px-4 py-3 text-sm">国内产能接近天花板，阿联酋160万吨产能受损，几内亚铝土矿出口管制</td></tr>
          <tr class="bg-green-50 hover:bg-green-100"><td class="px-4 py-3 font-bold text-green-900">碳酸锂</td><td class="px-4 py-3">17.75万元/吨</td><td class="px-4 py-3 text-emerald-600">上行周期</td><td class="px-4 py-3 text-emerald-600">上涨</td><td class="px-4 py-3 text-sm">供给弹性减弱+储能需求高增（4月磷酸铁锂产量+76%），Q3涨价预期强</td></tr>
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">锡</td><td class="px-4 py-3">426,450元/吨</td><td class="px-4 py-3 text-red-600">年涨30.7%</td><td class="px-4 py-3 text-red-600">+30.7%</td><td class="px-4 py-3 text-sm">供给受限+半导体需求拉动</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">煤炭与农产品板块</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr><th class="px-4 py-3 text-left">品种</th><th class="px-4 py-3 text-left">最新价</th><th class="px-4 py-3 text-left">变动</th><th class="px-4 py-3 text-left">驱动因素</th></tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">动力煤(Q5500)</td><td class="px-4 py-3">854元/吨</td><td class="px-4 py-3 text-red-600">周涨19元</td><td class="px-4 py-3 text-sm">安全检查+旺季补库，山西安全事件后检查扩大</td></tr>
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">炼焦煤</td><td class="px-4 py-3">1,830元/吨</td><td class="px-4 py-3 text-red-600">周涨120元</td><td class="px-4 py-3 text-sm">山西112座煤矿停产（1.22亿吨产能），供给明显收缩</td></tr>
          <tr class="bg-green-50 hover:bg-green-100"><td class="px-4 py-3 font-semibold text-green-900">生猪（全国均价）</td><td class="px-4 py-3">9.60元/kg</td><td class="px-4 py-3 text-green-600">跌破成本线</td><td class="px-4 py-3 text-sm">能繁母猪同比-3.3%，去化加速，政策主动去产能</td></tr>
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">磷矿石</td><td class="px-4 py-3">1,037.5元/吨</td><td class="px-4 py-3 text-amber-600">历史高位</td><td class="px-4 py-3 text-sm">新能源拉动需求+新增供给困难</td></tr>
          <tr class="bg-slate-50 hover:bg-slate-100"><td class="px-4 py-3 font-semibold">粘胶短纤</td><td class="px-4 py-3">棉粘价差10年高位</td><td class="px-4 py-3 text-red-600">库存6年低位</td><td class="px-4 py-3 text-sm">多年无新增产能+需求边际改善</td></tr>
        </tbody>
      </table>
    </div>

    <!-- ===== 品种分析 ===== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、品种分析：按板块分类展示趋势判断和操作建议</h2>

    <h3 id="f_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">能源化工板块</h3>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·原油（布伦特/WTI）</h4>
      <p class="text-orange-900 text-sm mb-3"><strong>趋势判断：</strong>短期承压，中期高位震荡。美伊谈判推进是核心变量，特朗普称协议可能周末达成导致油价暴跌4%。但扫雷行动需数周，霍尔木兹海峡通航恢复不会一蹴而就，油价短期仍有支撑。</p>
      <p class="text-orange-900 text-sm mb-3"><strong>操作建议：</strong>远月合约（大幅贴水保护）为最佳标的，布伦特目标80-100美元区间。短期关注周末美伊谈判结果：协议达成→油价可能快速回落至85美元以下，做空窗口打开；谈判破裂→油价反弹至98-100美元，多头持有。俄罗斯副总理称石油市场预测应大幅下调修正，与沙特一致认为石油需求存在不确定性，中期需求端承压。</p>
    </div>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·MDI/维生素/蛋氨酸（化工涨价链）</h4>
      <p class="text-orange-900 text-sm mb-3"><strong>趋势判断：</strong>中期强势，但短期面临美伊谈判扰动。纯MDI/聚合MDI较年初涨31.5%/30.3%，社会库存历史低位；VA/VE/蛋氨酸分别涨52%/66.7%/135.8%，霍尔木兹封锁+下游库存历史低位+养殖旺季三重共振。但美伊若达成协议，油价回落将削弱化工涨价逻辑。</p>
      <p class="text-orange-900 text-sm"><strong>操作建议：</strong>多头持有但需设置止损。蛋氨酸年初至今涨幅已达135.8%，短期涨幅过大需警惕回调。重点跟踪：霍尔木兹海峡通航状态、产品周度价格、中东局势变化。若美伊协议达成，建议减仓化工涨价链，转向AI算力/储能。</p>
    </div>

    <h3 id="f_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金属板块</h3>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·铜</h4>
      <p class="text-blue-900 text-sm mb-3"><strong>趋势判断：</strong>中期 bullish。铜矿资本开支不足，中长期供需由紧平衡转向短缺。AI算力+新能源需求拉动铜消费，LME创2013年以来最大单日提货纪录，显示实物需求强劲。</p>
      <p class="text-blue-900 text-sm"><strong>操作建议：</strong>超配。铜是AI+新能源双重需求拉动的核心受益品种，中长期供需缺口确定。短期关注美联储加息预期对铜价的压制，但回调即是加仓机会。重点跟踪：铜矿新增项目进度、LME库存变化、中国进口数据。</p>
    </div>

    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·黄金</h4>
      <p class="text-amber-900 text-sm mb-3"><strong>趋势判断：</strong>强势创新高。现货黄金向上触及4500美元，超越美债成为全球官方储备最大资产。央行购金（中国央行连续18个月增持）+地缘风险溢价+全球债务货币化预期是核心驱动力。但建行、农行上调黄金白银延期合约保证金至120%，短期流动性冲击需关注。</p>
      <p class="text-amber-900 text-sm"><strong>操作建议：</strong>标配。黄金仍是确定性最高的防御品种，但4500美元已是历史新高，短期追高风险较大。保证金上调可能引发短期多头平仓，建议回调至4400美元附近加仓。重点跟踪：央行购金数据、美伊谈判进展、美国实际利率变化。</p>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·碳酸锂</h4>
      <p class="text-blue-900 text-sm mb-3"><strong>趋势判断：</strong>进入上行周期。17.75万元/吨，供给弹性减弱+储能需求高增（4月磷酸铁锂产量同比+76%）。华能4GWh框采验证大电芯降本逻辑（450Ah以上大电芯进入央企集采），Q3旺季临近有望驱动新一轮涨价。</p>
      <p class="text-blue-900 text-sm"><strong>操作建议：</strong>逢低布局。碳酸锂下方回调空间有限，Q3旺季涨价预期强。重点跟踪：月度储能电池出货量、电芯价格环比变动、中东大单交付进度。止损位：跌破12万元/吨说明供给过剩未解决。</p>
    </div>

    <h3 id="f_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">农产品板块</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·生猪</h4>
      <p class="text-green-900 text-sm mb-3"><strong>趋势判断：</strong>周期底部，产能去化加速。全国商品猪9.60元/kg，外购仔猪养殖利润-269元/头，自繁自养-339元/头。政策端主动去产能持续推进，能繁母猪同比-3.3%且去化速率在加速。2027年猪价上行确定性增强。</p>
      <p class="text-green-900 text-sm"><strong>操作建议：</strong>左侧布局，输时间不输钱。养殖业ETF持续净申购增加，与股价下跌呈剪刀差。耐心可能需要半年起步，时间成本极高。重点跟踪：能繁母猪月度数据、猪粮比、头部企业出栏量主动收缩信号。</p>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析·煤炭（动力煤/炼焦煤）</h4>
      <p class="text-green-900 text-sm mb-3"><strong>趋势判断：</strong>拐点右侧→上行。动力煤854元/吨（周涨19元），炼焦煤1830元/吨（周涨120元）。山西安全事件后检查扩大，112座煤矿停产（1.22亿吨产能），供给明显收缩。夏季用电高峰临近补库需求启动。板块PE仅18.96倍，PB 1.49倍，持仓处于低位。</p>
      <p class="text-green-900 text-sm"><strong>操作建议：</strong>多头持有。内外供给双双收紧，PE全行业倒数，周期+红利双逻辑。重点跟踪：秦港煤价、安全检查范围、进口煤大幅涌入风险。美伊谈判对煤炭影响有限（国内煤炭自给率高）。</p>
    </div>

    <!-- ===== 交易机会 ===== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>三、交易机会：做多/做空机会和风险提示</h2>

    <h3 id="f_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做多机会</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>交易机会</h4>
      <ul class="space-y-3 text-sm text-green-900">
        <li><strong>铜（超配）：</strong>AI算力+新能源双重需求拉动，铜矿资本开支不足，中长期供需缺口确定。LME创2013年以来最大单日提货纪录，实物需求强劲。</li>
        <li><strong>黄金（标配）：</strong>央行购金+地缘对冲+美元信用削弱支撑，4500美元历史新高。回调至4400美元附近可加仓。</li>
        <li><strong>碳酸锂（逢低布局）：</strong>供给弹性减弱+储能需求高增，Q3旺季涨价预期强。下方回调空间有限。</li>
        <li><strong>煤炭（多头持有）：</strong>内外供给双双收紧，PE 18.96倍历史低位，周期+红利双逻辑。美伊谈判对其影响有限。</li>
        <li><strong>原油远月（超配）：</strong>大幅贴水保护，布伦特目标80-100美元区间。</li>
      </ul>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">做空机会</h3>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>交易机会</h4>
      <ul class="space-y-3 text-sm text-red-900">
        <li><strong>原油近月（若美伊协议达成）：</strong>协议达成→油价可能快速回落至85美元以下，做空窗口打开。</li>
        <li><strong>化工涨价链（短期警惕）：</strong>蛋氨酸年初至今涨幅已达135.8%，短期涨幅过大需警惕回调。若美伊协议达成，建议减仓。</li>
        <li><strong>加密货币相关：</strong>比特币失守63000美元（自高点腰斩），超28万人爆仓，"加密寒冬"全面笼罩，回避相关品种。</li>
      </ul>
    </div>

    <!-- ===== 新闻热点 ===== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、新闻热点：重要新闻核心观点</h2>

    <ul class="space-y-3">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美伊谈判推进：</strong>特朗普称协议可能周末达成，布伦特原油失守94美元（跌3.93%），WTI失守92美元（跌4.21%）。英国和法国已敲定多国扫雷行动计划，但通航恢复需数周。俄罗斯副总理称石油市场预测应大幅下调修正。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>黄金4500美元创新高：</strong>现货黄金向上触及4500美元，超越美债成为全球官方储备最大资产。建行、农行上调黄金白银延期合约保证金至120%。百亿资金撤离黄金ETF。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国内油价下调：</strong>加满一箱油少花20元。专家称OPEC+对国际油价影响力弱化。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>煤炭全线涨价：</strong>内外供给双双收紧，动力煤周涨19元，炼焦煤周涨120元。山西112座煤矿停产（1.22亿吨产能）。</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>氦气/六氟化钨涨价：</strong>氦气概念逆势走强，华特气体澄清氦气售价下行但海外气源审批暗藏供应风险。</span></li>
    </ul>

    <!-- ===== 风险提示 ===== -->
    <h2 id="f_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>五、策略建议：风险提示</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">⚠️ 地缘政治风险</h4>
        <p class="text-red-900 text-sm">美伊谈判结果不确定：若协议达成，油价快速回落将冲击化工涨价链逻辑；若谈判破裂，油价可能再度冲击120美元+。建议设置止损，控制化工/能源仓位。</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">⚠️ 美联储政策风险</h4>
        <p class="text-red-900 text-sm">年内加息概率40-50%，10年期美债收益率逼近4.5%。加息预期升温将对铜、黄金等金属价格形成短期压制。关注6月FOMC会议（沃什首秀）。</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">⚠️ 全球衰退风险</h4>
        <p class="text-red-900 text-sm">美国Q1 GDP下修至1.6%，个人实际收入同比-1.1%（疫情来首次负增长），消费者信心跌至70年最低。若全球经济衰退超预期，工业品（铜、铝、煤炭）价格将面临暴跌风险。</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-2">⚠️ 供给端风险</h4>
        <p class="text-red-900 text-sm">碳酸锂：海外矿复产超预期可能导致供给释放，打压锂价。煤炭：进口煤大幅涌入是唯一风险。铝：几内亚出口管制不及预期可能缓解供给紧张。</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-slate-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📋</span>综合策略建议</h4>
      <ul class="space-y-2 text-sm text-slate-700">
        <li><strong>超配：</strong>铜（AI+新能源需求拉动）、原油远月（大幅贴水保护）、煤炭（周期+红利双逻辑）</li>
        <li><strong>标配：</strong>黄金（地缘对冲）、碳酸锂（储能需求高增）</li>
        <li><strong>低配：</strong>化工涨价链（短期警惕美伊协议冲击）、加密货币相关（加密寒冬）</li>
        <li><strong>核心跟踪变量：</strong>周末美伊谈判结果、6月FOMC会议、霍尔木兹海峡通航状态、LME库存变化、中国进口数据</li>
      </ul>
    </div>

    <div class="mt-12 pt-6 border-t border-slate-200">
      <p class="text-xs text-slate-400 text-center">免责声明：本报告仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
      <p class="text-xs text-slate-400 text-center mt-1">报告生成日期：2026年6月4日 | 数据来源：行研总监、宏观研究、全球财经新闻等615份研报交叉验证</p>
    </div>

  </div>`;
}
