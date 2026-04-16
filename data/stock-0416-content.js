// ==========================================
// 智研金融 Terminal Pro - 个股研报内容渲染 2026-04-16
// ==========================================
function renderStockContent_0416() {
  return `<div class="prose prose-slate max-w-none">

<!-- ====== 核心摘要 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>个股研报核心摘要</h2>

<div class="bg-slate-50 rounded-2xl p-6 mb-8">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-white rounded-xl p-4 text-center shadow-sm">
      <div class="text-3xl font-black text-slate-900">100</div>
      <div class="text-sm text-slate-500 mt-1">研报总数</div>
    </div>
    <div class="bg-white rounded-xl p-4 text-center shadow-sm">
      <div class="text-3xl font-black text-purple-600">2</div>
      <div class="text-sm text-slate-500 mt-1">S 级标的</div>
    </div>
    <div class="bg-white rounded-xl p-4 text-center shadow-sm">
      <div class="text-3xl font-black text-blue-600">8</div>
      <div class="text-sm text-slate-500 mt-1">A 级标的</div>
    </div>
    <div class="bg-white rounded-xl p-4 text-center shadow-sm">
      <div class="text-3xl font-black text-slate-600">75</div>
      <div class="text-sm text-slate-500 mt-1">B 级标的</div>
    </div>
  </div>
  <p class="text-slate-700 leading-relaxed">2026年4月16日共收集到 <strong>100</strong> 篇个股研报，整体情绪偏暖，"买入/买进"评级占比超过 <strong>75%</strong>。资金主攻方向集中在三大主线：<strong>(1) AI算力与新能源产业链</strong>（宁德时代、海光信息、优优绿能等）；<strong>(2) 资源品周期反转</strong>（神火股份电解铝、川恒股份磷化工、新天然气UCG）；<strong>(3) 出海与全球化布局</strong>（众鑫股份泰国基地、新锐股份海外并购）。本次评级中，S级标的2只（宁德时代、新锐股份），A级标的8只，B级标的75只，C级标的15只。S/A级合计占比10%，体现了当前市场中具有显著超额收益预期的标的仍属稀缺。</p>
</div>

<h3 id="s_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">今日概览与评级分布</h3>

<div class="grid grid-cols-2 md:grid-cols-5 gap-3 my-6">
  <div class="bg-red-50 rounded-lg p-3 text-center border border-red-200"><div class="text-lg font-bold text-red-800">电力设备/新能源</div><div class="text-xs text-slate-500 mt-1">21篇 | 资金关注度: 高</div></div>
  <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200"><div class="text-lg font-bold text-blue-800">计算机/软件</div><div class="text-xs text-slate-500 mt-1">12篇 | 资金关注度: 中高</div></div>
  <div class="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200"><div class="text-lg font-bold text-indigo-800">半导体/芯片</div><div class="text-xs text-slate-500 mt-1">10篇 | 资金关注度: 高</div></div>
  <div class="bg-green-50 rounded-lg p-3 text-center border border-green-200"><div class="text-lg font-bold text-green-800">化工/材料</div><div class="text-xs text-slate-500 mt-1">17篇 | 资金关注度: 中</div></div>
  <div class="bg-amber-50 rounded-lg p-3 text-center border border-amber-200"><div class="text-lg font-bold text-amber-800">军工/航空</div><div class="text-xs text-slate-500 mt-1">13篇 | 资金关注度: 中</div></div>
</div>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4 rounded-r-xl">
  <h4 class="text-purple-800 font-bold mb-2 flex items-center"><span class="text-xl mr-2">&#x1F4C6;</span>评级分布统计</h4>
  <div class="overflow-x-auto">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden">
      <thead class="bg-slate-900 text-white">
        <tr><th class="px-4 py-2 text-left text-sm">评级</th><th class="px-4 py-2 text-center text-sm">数量</th><th class="px-4 py-2 text-center text-sm">占比</th><th class="px-4 py-2 text-left text-sm">说明</th></tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-purple-50"><td class="px-4 py-2 font-bold text-purple-900">S级 (&gt;8.5分)</td><td class="px-4 py-2 text-center">2</td><td class="px-4 py-2 text-center">2%</td><td class="px-4 py-2 text-sm">极度看好，超额收益预期&gt;30%</td></tr>
        <tr class="bg-blue-50"><td class="px-4 py-2 font-bold text-blue-900">A级 (7-8.5分)</td><td class="px-4 py-2 text-center">8</td><td class="px-4 py-2 text-center">8%</td><td class="px-4 py-2 text-sm">重点看好，超额收益预期15-30%</td></tr>
        <tr><td class="px-4 py-2 font-semibold">B级 (5-7分)</td><td class="px-4 py-2 text-center">75</td><td class="px-4 py-2 text-center">75%</td><td class="px-4 py-2 text-sm">中性偏多，基本面稳定</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2 font-semibold text-slate-600">C级 (&lt;5分)</td><td class="px-4 py-2 text-center">15</td><td class="px-4 py-2 text-center">15%</td><td class="px-4 py-2 text-sm">谨慎规避，盈利预测下调</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ====== S级标的 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>S级标的深度剖析（核心仓位推荐）</h2>

<!-- S1: 宁德时代 -->
<h3 id="s_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宁德时代 (300750) · 东吴证券</h3>

<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3C6;</span>S 级·宁德时代 (300750)
  </h4>
  <div class="space-y-3 text-purple-900">
    <p><strong>评级得分：</strong>9.0 (标题超预期2 + 常规覆盖1 + 盈利上修2 + 基本面优秀2 + 龙头溢价2) | <strong>评级：</strong>买入 | <strong>目标价：</strong>632元（当前431元，上行空间46.6%）</p>
    <p><strong>核心看点：</strong>Q1业绩超预期，排产上修至1.1-1.2TWh，储能翻倍增长，成立时代资源深化上游布局</p>
    <p><strong>核心投资逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>业绩持续超预期：</strong>2026年Q1营收1291亿元（同比+52%），归母净利润207亿元（同比+49%），经营性现金流337亿元。公司给予26年归母净利润预测962亿元（上修前940亿）。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>排产与出货量大幅上修：</strong>26年排产上修至1.1-1.2TWh，对应出货量1000GWh（同增50%），其中储能出货250-300GWh同比翻番以上。单Wh利润维持在0.075-0.08元，成本传导顺畅。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>储能业务爆发：</strong>Q1储能50GWh，同比+125%。储能业务正成为公司第二增长曲线，增速远超动力电池板块。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>上游资源布局：</strong>拟成立300亿注册资本的时代资源子公司，深化上游矿产布局，构建从矿产到电池的全产业链护城河，上游资源自给率将进一步提升成本优势。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 962亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">ROE: 24.66%</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">毛利率: 24.8%</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">现金流: 337亿</span>
    </div>
    <p class="text-sm text-purple-700 mt-2"><strong>预期差与催化剂：</strong>市场低估了储能业务爆发式增长（Q1储能同比+125%）和时代资源成立后上游资源自给率提升带来的成本优势进一步巩固。</p>
    <p class="text-sm text-red-700 mt-2"><strong>潜在风险：</strong>电动车销量不及预期；原材料价格波动；竞争加剧超预期；汇兑损失（Q1测算汇兑损失17亿+）。</p>
  </div>
</div>

<!-- S2: 新锐股份 -->
<h3 id="s_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新锐股份 (688257) · 东吴证券</h3>

<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3C6;</span>S 级·新锐股份 (688257)
  </h4>
  <div class="space-y-3 text-purple-900">
    <p><strong>评级得分：</strong>8.8 (标题超预期1 + 常规覆盖1 + 盈利大幅上调2 + 基本面优秀2 + 成长性2) | <strong>评级：</strong>买入</p>
    <p><strong>核心看点：</strong>并购整合+钨价红利，26E净利润上调156%至10.43亿，EPS从0.90元飙升至4.13元</p>
    <p><strong>核心投资逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>硬质合金+凿岩工具全产业链平台：</strong>公司本质是通过持续外延并购实现跨越式增长。2025年营收24.93亿元（+33.89%），归母净利润2.26亿元（+25.13%）。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>26E业绩大幅爆发：</strong>2026E营收预计达54.02亿元（+116.70%），归母净利润10.43亿元（原值4.08亿，上调156%），EPS从0.90元飙升至4.13元。钨价上涨释放利润弹性，海外布局打开成长天花板。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>5起并购协同效应：</strong>自2025年以来完成5起并购（智利Drillco、澳洲Drillers World、德锐宝、富邦工具、慧联电子），海外布局全面展开。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>新赛道拓展：</strong>PCB刀具新赛道落地，进一步拓展硬质合金应用场景。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E营收: 54.02亿(+116.7%)</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 10.43亿(+361.3%)</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">ROE: 30.66%</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">毛利率: 42.68%</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">PE: 17.75x</span>
    </div>
    <p class="text-sm text-purple-700 mt-2"><strong>预期差与催化剂：</strong>市场尚未充分定价并购整合带来的协同效应和钨价上行的利润弹性。2026E PE仅17.75倍，ROE 30.66%，ROIC 28.25%，财务指标极为亮眼。催化剂：钨价持续上涨、海外并购整合超预期、PCB刀具新赛道落地。</p>
    <p class="text-sm text-red-700 mt-2"><strong>潜在风险：</strong>制造业复苏不及预期；原材料钨价波动风险；海外并购整合不及预期；商誉减值风险。</p>
  </div>
</div>

<!-- ====== A级标的 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>A级标的重点叙述（8只）</h2>

<!-- A1: 金山办公 -->
<h3 id="s_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金山办公 (688111) · 群益证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·金山办公 (688111)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>8.0 | <strong>评级：</strong>买入 | <strong>目标价：</strong>300元 / 28.3%（当前233.74元） | <strong>预期盈利增速：</strong>+78.90%（2026E）</p>
    <p><strong>核心看点：</strong>AI持续推动三大业务线增长，WPS AI正式开启公测，对标Microsoft 365 Copilot</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Q1业绩超预期：</strong>剔除投资收益后归母净利润4.9-5.4亿（同比+21%-33%），主业增长动能强劲。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>AI商业化加速：</strong>WPS AI正式开启公测，对标Microsoft 365 Copilot，AI功能有望推动付费用户渗透率和ARPU值双重提升。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>盈利高增长预期：</strong>2026E净利润32.85亿（+78.90%），EPS 7.09元，AI赋能驱动业绩加速释放。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 32.85亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">EPS: 7.09元</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">目标价: 300元</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>AI商业化不及预期；市场竞争加剧；海外拓展受阻。</p>
  </div>
</div>

<!-- A2: 申通快递 -->
<h3 id="s_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">申通快递 (002468) · 群益证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·申通快递 (002468)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>8.0 | <strong>评级：</strong>买入 | <strong>目标价：</strong>19.5元 / 30.9%（当前14.90元） | <strong>预期盈利增速：</strong>+48%（2026E）</p>
    <p><strong>核心看点：</strong>快递行业"反内卷"背景下单票收入持续回升，完成丹鸟物流收购切入高端电商快递</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Q1利润超预期：</strong>归母净利润3.8-5.0亿元（同比+61%-112%），盈利改善斜率陡峭。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>"反内卷"红利：</strong>行业恶性价格竞争趋缓，单票收入持续回升，盈利能力修复趋势确立。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>高端业务突破：</strong>完成丹鸟物流收购，切入高端电商快递领域，打开收入结构升级空间。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>估值极具吸引力：</strong>2026E净利润20.2亿，PE仅11倍，显著低于快递行业平均水平。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 20.2亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">PE: 11x</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">目标价: 19.5元</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>行业竞争格局再度恶化；电商需求增速放缓；整合丹鸟物流不及预期。</p>
  </div>
</div>

<!-- A3: 海光信息 -->
<h3 id="s_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">海光信息 (688041) · 太平洋证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·海光信息 (688041)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>8.0 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>+65.56%（2026E）</p>
    <p><strong>核心看点：</strong>CPU+DCU双芯驱动，25年营收+57%，DCU广泛落地于20+行业300+场景</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>业绩持续高增长：</strong>2025年营收143.77亿（+56.92%），2026Q1营收40.34亿（+68.06%），增速保持高位。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>CPU+DCU双芯片架构：</strong>作为国内AI算力芯片龙头，受益于国产替代与AI算力需求爆发双重驱动。DCU已在20+行业、300+应用场景落地。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>盈利预期高增：</strong>2026E归母净利润42.13亿（+65.56%），ROE 16.34%，成长性确定性强。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 42.13亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">ROE: 16.34%</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>技术研发不及预期；市场竞争加剧；产能供给受限。</p>
  </div>
</div>

<!-- A4: 众鑫股份 -->
<h3 id="s_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">众鑫股份 (603091) · 信达证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·众鑫股份 (603091)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>7.5 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>+126%（2026E）</p>
    <p><strong>核心看点：</strong>泰国基地净利率高达40%，国内盈利拐点清晰，PE仅13.5倍</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>泰国基地盈利能力突出：</strong>25H2泰国基地净利率高达40%，海外产能成本优势显著。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国内盈利拐点清晰：</strong>国内业务经历调整后，盈利有望逐步回升，整体盈利能力进入上行通道。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>产品结构多元化：</strong>切入精品工业包装赛道，成长动能充沛。2026E归母净利润6.0亿（+126%），PE仅13.5倍，估值修复空间大。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 6.0亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">PE: 13.5x</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">泰国基地净利率: 40%</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>海外关税政策变化；国内需求恢复不及预期；原材料成本上涨。</p>
  </div>
</div>

<!-- A5: 新天然气 -->
<h3 id="s_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新天然气 (600150) · 中邮证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·新天然气 (600150)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>7.5 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>+50.90%（2026E）</p>
    <p><strong>核心看点：</strong>首次覆盖深度报告，天然气产量5年翻倍，UCG项目打开全新能源开发模式</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>天然气产量翻倍预期：</strong>天然气产量有望3-5年内从16亿方增长至32.7-42.7亿方，成长性极为确定。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>UCG颠覆性技术：</strong>煤炭地下气化（UCG）项目落地在即，有望解锁全新能源开发模式，成为长期增长引擎。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>低估值高成长：</strong>2026E归母净利润12.18亿（+50.90%），PE仅12倍，低估值高成长特征显著。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 12.18亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">PE: 12x</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">产量增长: 16→32.7-42.7亿方</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>UCG项目进展不及预期；天然气价格波动；政策环境变化。</p>
  </div>
</div>

<!-- A6: 神火股份 -->
<h3 id="s_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">神火股份 (600550) · 国金证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·神火股份 (600550)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>7.5 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>+122.45%（2026E）</p>
    <p><strong>核心看点：</strong>Q1利润+223%，电解铝盈利弹性集中释放，26E PE仅8.4倍</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Q1业绩爆炸式增长：</strong>26Q1归母净利润22.9亿（同比+223.3%），电解铝盈利弹性集中释放。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>铝价上行+成本回落：</strong>铝价上行叠加氧化铝成本回落，综合毛利率33.5%（同比+18.6pct），盈利剪刀差显著扩大。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>深度价值低估：</strong>2026E归母净利润89.1亿（+122.45%），PE仅8.4倍，深度价值低估，向上弹性巨大。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 89.1亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">PE: 8.4x</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">综合毛利率: 33.5%</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>铝价大幅回调；氧化铝成本反弹；电解铝行业产能过剩风险。</p>
  </div>
</div>

<!-- A7: 龙源电力 -->
<h3 id="s_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">龙源电力 (001289) · 开源证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·龙源电力 (001289)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>7.5 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>+18.1%（2026E）</p>
    <p><strong>核心看点：</strong>首次覆盖，风电运营龙头，集团4000万千瓦资产注入可期</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国内风电运营龙头：</strong>行业地位稳固，规模效应显著，运营效率行业领先。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>集团资产注入预期：</strong>国家能源集团承诺2028年前解决同业竞争，剩余约4000万千瓦风电装机有望注入上市公司。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>"以大代小"技改增量：</strong>老旧机组"以大代小"技改带来4.59-19.68GW增量空间，提升发电效率。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">26E净利润: 53.44亿</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">增速: +18.1%</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">资产注入: 约4000万千瓦</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>风电补贴退坡；资产注入进度不及预期；风资源波动。</p>
  </div>
</div>

<!-- A8: 川恒股份 -->
<h3 id="s_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">川恒股份 (002895) · 东吴证券</h3>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center">
    <span class="text-xl mr-2">&#x1F3AF;</span>A 级·川恒股份 (002895)
  </h4>
  <div class="space-y-3 text-blue-900">
    <p><strong>评级得分：</strong>7.0 | <strong>评级：</strong>买入 | <strong>预期盈利增速：</strong>超预期上调</p>
    <p><strong>核心看点：</strong>业绩超预期，磷化工景气持续上行，新能源材料布局打开成长空间</p>
    <p><strong>核心逻辑：</strong></p>
    <ul class="ml-4 space-y-1.5">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>磷化工景气持续上行：</strong>磷矿石供需紧平衡态势延续，磷化工产品价格维持高位，行业景气度持续。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>业绩超预期：</strong>2026E盈利预测上调，公司传统磷化工业务盈利稳健增长。</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>新能源材料布局：</strong>磷酸铁锂前驱体等新能源材料项目推进，打开长期成长空间，周期景气+成长双击。</span></li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-3">
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">磷化工景气上行</span>
      <span class="bg-white/70 px-3 py-1 rounded-full text-sm font-semibold">新能源材料布局</span>
    </div>
    <p class="text-sm text-blue-700 mt-2"><strong>风险提示：</strong>磷化工景气度回落；新能源材料项目进展不及预期；环保政策收紧。</p>
  </div>
</div>

<!-- ====== 全量评级清单 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-slate-700 rounded-full mr-3"></span>全量100只标的评级清单</h2>

<h3 id="s_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">全量评级汇总表</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left text-sm">序号</th>
        <th class="px-4 py-3 text-left text-sm">股票</th>
        <th class="px-4 py-3 text-left text-sm">代码</th>
        <th class="px-4 py-3 text-left text-sm">机构</th>
        <th class="px-4 py-3 text-center text-sm">评级</th>
        <th class="px-4 py-3 text-center text-sm">总分</th>
        <th class="px-4 py-3 text-left text-sm">核心一句话逻辑</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100">
      <!-- S级 -->
      <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3">1</td><td class="px-4 py-3 font-bold text-purple-900">宁德时代</td><td class="px-4 py-3 text-sm">300750</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">S</span></td><td class="px-4 py-3 text-center font-bold">9.0</td><td class="px-4 py-3 text-sm">Q1业绩超预期，排产上修至1.1-1.2TWh，储能翻倍增长</td></tr>
      <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3">2</td><td class="px-4 py-3 font-bold text-purple-900">新锐股份</td><td class="px-4 py-3 text-sm">688257</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">S</span></td><td class="px-4 py-3 text-center font-bold">8.8</td><td class="px-4 py-3 text-sm">并购整合+钨价红利，26E净利润上调156%至10.43亿</td></tr>
      <!-- A级 -->
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">3</td><td class="px-4 py-3 font-bold text-blue-900">金山办公</td><td class="px-4 py-3 text-sm">688111</td><td class="px-4 py-3 text-sm">群益证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">8.0</td><td class="px-4 py-3 text-sm">AI驱动办公业务高增长，Q1剔除投资收益后利润+21-33%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">4</td><td class="px-4 py-3 font-bold text-blue-900">申通快递</td><td class="px-4 py-3 text-sm">002468</td><td class="px-4 py-3 text-sm">群益证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">8.0</td><td class="px-4 py-3 text-sm">反内卷下单票收入回升，Q1利润+61-112%，PE仅11倍</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">5</td><td class="px-4 py-3 font-bold text-blue-900">海光信息</td><td class="px-4 py-3 text-sm">688041</td><td class="px-4 py-3 text-sm">太平洋证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">8.0</td><td class="px-4 py-3 text-sm">CPU+DCU双芯驱动，25年营收+57%，DCU广泛落地</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">6</td><td class="px-4 py-3 font-bold text-blue-900">众鑫股份</td><td class="px-4 py-3 text-sm">603091</td><td class="px-4 py-3 text-sm">信达证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">7.5</td><td class="px-4 py-3 text-sm">泰国基地净利率40%，26E净利润+126%，PE仅13.5倍</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">7</td><td class="px-4 py-3 font-bold text-blue-900">新天然气</td><td class="px-4 py-3 text-sm">600150</td><td class="px-4 py-3 text-sm">中邮证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">7.5</td><td class="px-4 py-3 text-sm">首次覆盖，天然气产量5年翻倍，UCG项目打开新空间</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">8</td><td class="px-4 py-3 font-bold text-blue-900">神火股份</td><td class="px-4 py-3 text-sm">600550</td><td class="px-4 py-3 text-sm">国金证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">7.5</td><td class="px-4 py-3 text-sm">Q1利润+223%，电解铝盈利弹性释放，26E PE仅8.4倍</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">9</td><td class="px-4 py-3 font-bold text-blue-900">龙源电力</td><td class="px-4 py-3 text-sm">001289</td><td class="px-4 py-3 text-sm">开源证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">7.5</td><td class="px-4 py-3 text-sm">首次覆盖，风电龙头，集团4000万千瓦资产注入可期</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3">10</td><td class="px-4 py-3 font-bold text-blue-900">川恒股份</td><td class="px-4 py-3 text-sm">002895</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">A</span></td><td class="px-4 py-3 text-center font-bold">7.0</td><td class="px-4 py-3 text-sm">业绩超预期，磷化工景气+新能源材料布局</td></tr>
      <!-- B级精选 -->
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">11</td><td class="px-4 py-3 font-semibold">国能日新</td><td class="px-4 py-3 text-sm">301162</td><td class="px-4 py-3 text-sm">信达证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">功率预测主业稳健，虚拟电厂打开第二曲线</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">12</td><td class="px-4 py-3 font-semibold">中国西电</td><td class="px-4 py-3 text-sm">601179</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">特高压建设受益者，SST固态变压器产业化加速</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">13</td><td class="px-4 py-3 font-semibold">优优绿能</td><td class="px-4 py-3 text-sm">301590</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">充电桩海外拐点将至，HVDC数据中心业务新增长极</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">14</td><td class="px-4 py-3 font-semibold">博众精工</td><td class="px-4 py-3 text-sm">688097</td><td class="px-4 py-3 text-sm">中邮证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">在手订单+164%，3C+新能源+半导体三轮驱动</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">15</td><td class="px-4 py-3 font-semibold">伟创电气</td><td class="px-4 py-3 text-sm">688698</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">业绩符合预期，打造工业自动化平台</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">16</td><td class="px-4 py-3 font-semibold">招商银行</td><td class="px-4 py-3 text-sm">600036</td><td class="px-4 py-3 text-sm">中金公司</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">金股推荐，息差单季回升，资产质量平稳</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">17</td><td class="px-4 py-3 font-semibold">蔚蓝锂芯</td><td class="px-4 py-3 text-sm">002245</td><td class="px-4 py-3 text-sm">国金证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">业绩超市场预期，全极耳电池放量，目标价26元</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">18</td><td class="px-4 py-3 font-semibold">恒力石化</td><td class="px-4 py-3 text-sm">600346</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.5</td><td class="px-4 py-3 text-sm">炼化龙头行稳致远，地缘冲突下展现韧性</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">19</td><td class="px-4 py-3 font-semibold">澜起科技</td><td class="px-4 py-3 text-sm">688008</td><td class="px-4 py-3 text-sm">开源证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.0</td><td class="px-4 py-3 text-sm">内存接口芯片龙头，AI服务器需求拉动</td></tr>
      <tr class="bg-slate-50 hover:bg-slate-100 transition-colors"><td class="px-4 py-3">20</td><td class="px-4 py-3 font-semibold">中科曙光</td><td class="px-4 py-3 text-sm">603019</td><td class="px-4 py-3 text-sm">东吴证券</td><td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">B</span></td><td class="px-4 py-3 text-center font-semibold">6.0</td><td class="px-4 py-3 text-sm">扣非净利润高增，落地6万卡AI4S集群</td></tr>
    </tbody>
  </table>
</div>

<p class="text-slate-500 text-sm mt-4 italic">注：上表展示S级2只、A级8只及B级精选10只，共20只。完整B级75只和C级15只标的详见下方分类汇总。</p>

<!-- B级汇总 -->
<h3 id="s_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">B级标的汇总（75只）</h3>

<p class="text-slate-700 mb-4">共 <strong>75</strong> 只B级标的，基本面稳定但缺乏突出亮点，建议标配。按评分降序排列：</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <thead class="bg-slate-100 text-slate-700">
      <tr>
        <th class="px-3 py-2 text-left text-sm font-semibold">股票</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">代码</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">机构</th>
        <th class="px-3 py-2 text-center text-sm font-semibold">评级</th>
        <th class="px-3 py-2 text-center text-sm font-semibold">总分</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">核心逻辑</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-50">
      <tr><td class="px-3 py-2 text-sm">国能日新</td><td class="px-3 py-2 text-sm">301162</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">功率预测主业稳健，虚拟电厂打开第二曲线</td></tr>
      <tr><td class="px-3 py-2 text-sm">中国西电</td><td class="px-3 py-2 text-sm">601179</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">特高压建设受益者，SST固态变压器产业化加速</td></tr>
      <tr><td class="px-3 py-2 text-sm">优优绿能</td><td class="px-3 py-2 text-sm">301590</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">充电桩海外拐点将至，HVDC数据中心业务新增长极</td></tr>
      <tr><td class="px-3 py-2 text-sm">伟创电气</td><td class="px-3 py-2 text-sm">688698</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">业绩符合预期，打造工业自动化平台</td></tr>
      <tr><td class="px-3 py-2 text-sm">恒力石化</td><td class="px-3 py-2 text-sm">600346</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">炼化龙头行稳致远，地缘冲突下展现韧性</td></tr>
      <tr><td class="px-3 py-2 text-sm">皖维高新</td><td class="px-3 py-2 text-sm">600063</td><td class="px-3 py-2 text-sm">太平洋证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">PVA周期底部韧性凸显，新材料光学膜放量在即</td></tr>
      <tr><td class="px-3 py-2 text-sm">开特股份</td><td class="px-3 py-2 text-sm">920978</td><td class="px-3 py-2 text-sm">东莞证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">汽车传感器快速增长，储能/数据中心新业务拓展</td></tr>
      <tr><td class="px-3 py-2 text-sm">博众精工</td><td class="px-3 py-2 text-sm">688097</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">在手订单+164%，3C+新能源+半导体三轮驱动</td></tr>
      <tr><td class="px-3 py-2 text-sm">冰轮环境</td><td class="px-3 py-2 text-sm">000811</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">首次覆盖，冷链+氢能双轮驱动</td></tr>
      <tr><td class="px-3 py-2 text-sm">精测电子</td><td class="px-3 py-2 text-sm">300567</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">首次覆盖，半导体检测设备国产替代</td></tr>
      <tr><td class="px-3 py-2 text-sm">上海家化</td><td class="px-3 py-2 text-sm">600315</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">首次覆盖，国货美妆龙头品牌焕新</td></tr>
      <tr><td class="px-3 py-2 text-sm">杰普特</td><td class="px-3 py-2 text-sm">688025</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">盈利预测上调，激光器+检测业务协同</td></tr>
      <tr><td class="px-3 py-2 text-sm">招金黄金</td><td class="px-3 py-2 text-sm">000506</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">业绩超预期，金价高位运行受益</td></tr>
      <tr><td class="px-3 py-2 text-sm">周大生</td><td class="px-3 py-2 text-sm">002867</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">品牌使用费翻倍提价落地，利润增量可观</td></tr>
      <tr><td class="px-3 py-2 text-sm">行动教育</td><td class="px-3 py-2 text-sm">605098</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">企业管理培训龙头，百校计划驱动长期成长</td></tr>
      <tr><td class="px-3 py-2 text-sm">招商银行</td><td class="px-3 py-2 text-sm">600036</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">金股推荐，息差单季回升，资产质量平稳</td></tr>
      <tr><td class="px-3 py-2 text-sm">蔚蓝锂芯</td><td class="px-3 py-2 text-sm">002245</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">业绩超市场预期，全极耳电池放量，目标价26元</td></tr>
      <tr><td class="px-3 py-2 text-sm">西麦食品</td><td class="px-3 py-2 text-sm">002956</td><td class="px-3 py-2 text-sm">太平洋证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">业绩超预期，燕麦健康食品赛道持续扩容</td></tr>
      <tr><td class="px-3 py-2 text-sm">钧达股份</td><td class="px-3 py-2 text-sm">002865</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">Q1业绩转正超预期，TOPCon电池积极布局</td></tr>
      <tr><td class="px-3 py-2 text-sm">广电运通</td><td class="px-3 py-2 text-sm">002152</td><td class="px-3 py-2 text-sm">广发证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">数字人民币+AI双主线，金融科技转型加速</td></tr>
      <tr><td class="px-3 py-2 text-sm">燕京啤酒</td><td class="px-3 py-2 text-sm">000729</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">十四五强势收官，产品结构持续升级</td></tr>
      <tr><td class="px-3 py-2 text-sm">龙迅股份</td><td class="px-3 py-2 text-sm">688486</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">一季报利润增速亮眼，芯片设计持续突破</td></tr>
      <tr><td class="px-3 py-2 text-sm">华利集团</td><td class="px-3 py-2 text-sm">300979</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">增持</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">业绩短期承压，持续推进客户多元化</td></tr>
      <tr><td class="px-3 py-2 text-sm">长安汽车</td><td class="px-3 py-2 text-sm">000625</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">业绩符合预期，三大计划稳步推进</td></tr>
      <tr><td class="px-3 py-2 text-sm">新和成</td><td class="px-3 py-2 text-sm">002001</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">营养品板块韧性十足，香精香料稳步增长</td></tr>
      <tr><td class="px-3 py-2 text-sm">宁波精达</td><td class="px-3 py-2 text-sm">603088</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">四季度确收改善，布局液冷新兴方向</td></tr>
      <tr><td class="px-3 py-2 text-sm">浙江龙盛</td><td class="px-3 py-2 text-sm">600352</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">染料龙头，周期底部等待景气回升</td></tr>
      <tr><td class="px-3 py-2 text-sm">亚普股份</td><td class="px-3 py-2 text-sm">603013</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">汽车油箱系统稳健，新能源转型推进</td></tr>
      <tr><td class="px-3 py-2 text-sm">中集环科</td><td class="px-3 py-2 text-sm">301559</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">罐式集装箱龙头，受益于全球贸易复苏</td></tr>
      <tr><td class="px-3 py-2 text-sm">海思科</td><td class="px-3 py-2 text-sm">002653</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">创新药快速增长，出海进入快车道（下调盈利）</td></tr>
      <tr><td class="px-3 py-2 text-sm">科伦药业</td><td class="px-3 py-2 text-sm">002422</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">创新药管线推进，大输液基本盘稳健</td></tr>
      <tr><td class="px-3 py-2 text-sm">利尔化学</td><td class="px-3 py-2 text-sm">002258</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">以量补价驱动业绩复苏，草铵膦景气回升</td></tr>
      <tr><td class="px-3 py-2 text-sm">海尔生物</td><td class="px-3 py-2 text-sm">688139</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">生物医疗低温存储龙头（下调盈利预测）</td></tr>
      <tr><td class="px-3 py-2 text-sm">美格智能</td><td class="px-3 py-2 text-sm">002881</td><td class="px-3 py-2 text-sm">西南证券</td><td class="px-3 py-2 text-center text-sm">持有</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">首次覆盖，物联网模组+AIoT双轮驱动</td></tr>
      <tr><td class="px-3 py-2 text-sm">苏轴股份</td><td class="px-3 py-2 text-sm">920418</td><td class="px-3 py-2 text-sm">西南证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">轴承行业龙头，高端产品国产替代，目标价35元</td></tr>
      <tr><td class="px-3 py-2 text-sm">澜起科技</td><td class="px-3 py-2 text-sm">688008</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">内存接口芯片龙头，AI服务器需求拉动</td></tr>
      <tr><td class="px-3 py-2 text-sm">平高电气</td><td class="px-3 py-2 text-sm">600312</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">在手订单充裕，特高压建设有望提速</td></tr>
      <tr><td class="px-3 py-2 text-sm">林泰新材</td><td class="px-3 py-2 text-sm">920106</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">ELSD获下游多家定点，25年利润+74%</td></tr>
      <tr><td class="px-3 py-2 text-sm">卓兆点胶</td><td class="px-3 py-2 text-sm">920026</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">受益消费电子新品迭代，点胶设备放量</td></tr>
      <tr><td class="px-3 py-2 text-sm">中顺洁柔</td><td class="px-3 py-2 text-sm">002511</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">业绩超预期，生活用纸龙头份额提升</td></tr>
      <tr><td class="px-3 py-2 text-sm">民士达</td><td class="px-3 py-2 text-sm">920394</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">Q1营收与扣非业绩稳健增长</td></tr>
      <tr><td class="px-3 py-2 text-sm">燕麦科技</td><td class="px-3 py-2 text-sm">688312</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">PCB检测设备，受益AI服务器需求</td></tr>
      <tr><td class="px-3 py-2 text-sm">圣农发展</td><td class="px-3 py-2 text-sm">002299</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">鸡肉主业稳健，食品业务放量，高分红</td></tr>
      <tr><td class="px-3 py-2 text-sm">正泰电源</td><td class="px-3 py-2 text-sm">002150</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">汇兑影响+关税扰动，盈利预测上调</td></tr>
      <tr><td class="px-3 py-2 text-sm">国药一致</td><td class="px-3 py-2 text-sm">000028</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">分销业务稳健，期待国大药房盈利改善</td></tr>
      <tr><td class="px-3 py-2 text-sm">哈尔滨</td><td class="px-3 py-2 text-sm">600352</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">25年收入32.38亿，业绩超预期</td></tr>
      <tr><td class="px-3 py-2 text-sm">国电电力</td><td class="px-3 py-2 text-sm">600795</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">达成"增长、增效、增值"目标</td></tr>
      <tr><td class="px-3 py-2 text-sm">航发动力</td><td class="px-3 py-2 text-sm">600893</td><td class="px-3 py-2 text-sm">国信证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">首次覆盖，航改燃+大飞机+军品后装三轮驱动，目标价55-59元</td></tr>
      <tr><td class="px-3 py-2 text-sm">中科曙光</td><td class="px-3 py-2 text-sm">603019</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">扣非净利润高增，落地6万卡AI4S集群</td></tr>
      <tr><td class="px-3 py-2 text-sm">萤石网络</td><td class="px-3 py-2 text-sm">688475</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">Q1利润超预期+32%，智能家居AI赋能</td></tr>
      <tr><td class="px-3 py-2 text-sm">美登科技</td><td class="px-3 py-2 text-sm">920227</td><td class="px-3 py-2 text-sm">华源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">电商SaaS龙头，AI商业化加速</td></tr>
      <!-- 重复覆盖但B级 -->
      <tr><td class="px-3 py-2 text-sm">新天然气(2)</td><td class="px-3 py-2 text-sm">600150</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">UCG项目落地催化</td></tr>
      <tr><td class="px-3 py-2 text-sm">龙源电力(2)</td><td class="px-3 py-2 text-sm">001289</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">风电政策底已现</td></tr>
      <tr><td class="px-3 py-2 text-sm">海光信息(2)</td><td class="px-3 py-2 text-sm">688041</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">国产算力核心标的</td></tr>
      <tr><td class="px-3 py-2 text-sm">圣农发展(2)</td><td class="px-3 py-2 text-sm">002299</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">鸡肉周期底部布局</td></tr>
      <tr><td class="px-3 py-2 text-sm">国能日新(2)</td><td class="px-3 py-2 text-sm">301162</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">电力市场化改革受益</td></tr>
      <tr><td class="px-3 py-2 text-sm">澜起科技(2)</td><td class="px-3 py-2 text-sm">688008</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">AI算力芯片受益</td></tr>
      <tr><td class="px-3 py-2 text-sm">平高电气(2)</td><td class="px-3 py-2 text-sm">600312</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">特高压景气持续</td></tr>
      <tr><td class="px-3 py-2 text-sm">华利集团(2)</td><td class="px-3 py-2 text-sm">300979</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">增持</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">鞋制造龙头</td></tr>
      <tr><td class="px-3 py-2 text-sm">长安汽车(3)</td><td class="px-3 py-2 text-sm">000625</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.0</td><td class="px-3 py-2 text-sm">自主品牌发力</td></tr>
      <tr><td class="px-3 py-2 text-sm">蔚蓝锂芯(2)</td><td class="px-3 py-2 text-sm">002245</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">锂电池弹性标的</td></tr>
      <tr><td class="px-3 py-2 text-sm">西麦食品(2)</td><td class="px-3 py-2 text-sm">002956</td><td class="px-3 py-2 text-sm">太平洋证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">健康食品消费</td></tr>
      <tr><td class="px-3 py-2 text-sm">钧达股份(2)</td><td class="px-3 py-2 text-sm">002865</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">光伏电池片龙头</td></tr>
      <tr><td class="px-3 py-2 text-sm">广电运通(2)</td><td class="px-3 py-2 text-sm">002152</td><td class="px-3 py-2 text-sm">广发证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">金融科技转型</td></tr>
      <tr><td class="px-3 py-2 text-sm">燕京啤酒(2)</td><td class="px-3 py-2 text-sm">000729</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">啤酒高端化</td></tr>
      <tr><td class="px-3 py-2 text-sm">龙迅股份(2)</td><td class="px-3 py-2 text-sm">688486</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">高速接口芯片</td></tr>
      <tr><td class="px-3 py-2 text-sm">周大生(2)</td><td class="px-3 py-2 text-sm">002867</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">黄金珠宝龙头</td></tr>
      <tr><td class="px-3 py-2 text-sm">川恒股份(2)</td><td class="px-3 py-2 text-sm">002895</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">磷化工景气</td></tr>
      <tr><td class="px-3 py-2 text-sm">冰轮环境(2)</td><td class="px-3 py-2 text-sm">000811</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">冷链设备龙头</td></tr>
      <tr><td class="px-3 py-2 text-sm">杰普特(2)</td><td class="px-3 py-2 text-sm">688025</td><td class="px-3 py-2 text-sm">中邮证券</td><td class="px-3 py-2 text-center text-sm">买入</td><td class="px-3 py-2 text-center text-sm">6.5</td><td class="px-3 py-2 text-sm">激光设备+半导体检测</td></tr>
    </tbody>
  </table>
</div>

<!-- C级汇总 -->
<h3 id="s_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">C级标的汇总（15只）</h3>

<p class="text-slate-700 mb-4">共 <strong>15</strong> 只C级标的，评级偏低或基本面存在一定压力，建议谨慎对待。主要原因包括：持有/中性评级、盈利预测下调、增速一般或承压。</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <thead class="bg-slate-100 text-slate-700">
      <tr>
        <th class="px-3 py-2 text-left text-sm font-semibold">股票</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">代码</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">机构</th>
        <th class="px-3 py-2 text-center text-sm font-semibold">总分</th>
        <th class="px-3 py-2 text-left text-sm font-semibold">核心逻辑/下调原因</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-50">
      <tr><td class="px-3 py-2 text-sm">九号公司</td><td class="px-3 py-2 text-sm">689009</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调，短期业绩承压</td></tr>
      <tr><td class="px-3 py-2 text-sm">中航西飞</td><td class="px-3 py-2 text-sm">000768</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">增持评级，估值偏高，增速一般</td></tr>
      <tr><td class="px-3 py-2 text-sm">国博电子</td><td class="px-3 py-2 text-sm">688375</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">增持评级，军工电子竞争加剧</td></tr>
      <tr><td class="px-3 py-2 text-sm">航天电器</td><td class="px-3 py-2 text-sm">002025</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">增持评级，连接器行业增速放缓</td></tr>
      <tr><td class="px-3 py-2 text-sm">浪潮信息</td><td class="px-3 py-2 text-sm">000977</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">收入高增长但利润率承压</td></tr>
      <tr><td class="px-3 py-2 text-sm">金钼股份</td><td class="px-3 py-2 text-sm">601958</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">持有评级，钼价高位震荡</td></tr>
      <tr><td class="px-3 py-2 text-sm">行动教育(2)</td><td class="px-3 py-2 text-sm">605098</td><td class="px-3 py-2 text-sm">中金公司</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">教育板块政策风险</td></tr>
      <tr><td class="px-3 py-2 text-sm">恒力石化(2)</td><td class="px-3 py-2 text-sm">600346</td><td class="px-3 py-2 text-sm">开源证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">伟创电气(2)</td><td class="px-3 py-2 text-sm">688698</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">科伦药业(2)</td><td class="px-3 py-2 text-sm">002422</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">长安汽车(2)</td><td class="px-3 py-2 text-sm">000625</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">中顺洁柔(2)</td><td class="px-3 py-2 text-sm">002511</td><td class="px-3 py-2 text-sm">信达证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">原材料成本压力</td></tr>
      <tr><td class="px-3 py-2 text-sm">优优绿能(2)</td><td class="px-3 py-2 text-sm">301590</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">海尔生物(2)</td><td class="px-3 py-2 text-sm">688139</td><td class="px-3 py-2 text-sm">国金证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
      <tr><td class="px-3 py-2 text-sm">中国西电(2)</td><td class="px-3 py-2 text-sm">601179</td><td class="px-3 py-2 text-sm">东吴证券</td><td class="px-3 py-2 text-center text-sm">4.5</td><td class="px-3 py-2 text-sm">盈利预测下调</td></tr>
    </tbody>
  </table>
</div>

<p class="text-slate-500 text-sm mt-4 italic">注：C级共15只，另有：林泰新材(2) 4.5、九号公司(2) 4.5、皖维高新(2) 4.5、恒力石化(3) 4.5、美登科技(2) 4.5。</p>

<!-- ====== 行业分析 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>行业分布热力图</h2>

<h3 id="s_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业分布热力图</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left text-sm">行业</th>
        <th class="px-4 py-3 text-center text-sm">S级</th>
        <th class="px-4 py-3 text-center text-sm">A级</th>
        <th class="px-4 py-3 text-center text-sm">B级</th>
        <th class="px-4 py-3 text-center text-sm">C级</th>
        <th class="px-4 py-3 text-center text-sm">资金关注度</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100">
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">电力设备/新能源</td><td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">1</span></td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">2</span></td><td class="px-4 py-3 text-center">15</td><td class="px-4 py-3 text-center">3</td><td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-bold">高</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">半导体/芯片</td><td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">1</span></td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">1</span></td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">1</td><td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-bold">高</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">计算机/软件</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">2</span></td><td class="px-4 py-3 text-center">10</td><td class="px-4 py-3 text-center">2</td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold">中高</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">化工/材料</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">2</span></td><td class="px-4 py-3 text-center">12</td><td class="px-4 py-3 text-center">3</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">中</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">军工/航空</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">1</span></td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">4</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">中</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">医药生物</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">5</td><td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-bold">中低</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">食品饮料</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">1</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">中</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">公用事业/电力</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">2</span></td><td class="px-4 py-3 text-center">6</td><td class="px-4 py-3 text-center">1</td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold">中高</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">汽车/零部件</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">2</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">中</span></td></tr>
      <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">机械/设备</td><td class="px-4 py-3 text-center">0</td><td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">1</span></td><td class="px-4 py-3 text-center">8</td><td class="px-4 py-3 text-center">1</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">中</span></td></tr>
    </tbody>
  </table>
</div>

<!-- ====== 投资风险提示 ====== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>投资风险提示</h2>

<h3 id="s_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">风险提示与应对建议</h3>

<div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-red-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">&#x26A0;&#xFE0F;</span>投资风险提示</h4>
  <div class="space-y-4 text-red-900">
    <div class="bg-white/60 rounded-lg p-4">
      <p class="font-bold text-red-800 mb-1">1. 宏观风险</p>
      <p class="text-sm"><strong>触发条件：</strong>中美贸易摩擦升级</p>
      <p class="text-sm"><strong>影响标的：</strong>众鑫股份（泰国出口）、新锐股份（海外并购）等出海逻辑标的</p>
      <p class="text-sm"><strong>应对建议：</strong>关注贸易政策变化，适当控制出海标的仓位比例。</p>
    </div>
    <div class="bg-white/60 rounded-lg p-4">
      <p class="font-bold text-red-800 mb-1">2. 行业风险</p>
      <p class="text-sm"><strong>新能源车销量不及预期：</strong>直接影响宁德时代产业链上下游需求。</p>
      <p class="text-sm"><strong>电力投资不及预期：</strong>影响中国西电、平高电气等特高压建设受益标的订单。</p>
      <p class="text-sm"><strong>应对建议：</strong>密切跟踪新能源车月度销量数据和电网投资完成情况。</p>
    </div>
    <div class="bg-white/60 rounded-lg p-4">
      <p class="font-bold text-red-800 mb-1">3. 个股风险</p>
      <p class="text-sm"><strong>并购整合不及预期：</strong>新锐股份5起并购待消化，存在商誉减值风险。</p>
      <p class="text-sm"><strong>应对建议：</strong>关注新锐股份各季度并购整合进展和商誉减值测试结果。</p>
    </div>
    <div class="bg-white/60 rounded-lg p-4">
      <p class="font-bold text-red-800 mb-1">4. 政策风险</p>
      <p class="text-sm"><strong>风电补贴退坡：</strong>影响龙源电力等风电运营企业盈利能力。</p>
      <p class="text-sm"><strong>集采降价压力：</strong>医药板块（海思科、科伦药业等）面临持续降价压力。</p>
      <p class="text-sm"><strong>应对建议：</strong>关注政策动向，优先选择具备成本优势和创新能力的标的。</p>
    </div>
  </div>
</div>

<div class="bg-slate-50 rounded-xl p-5 my-6">
  <h4 class="font-bold text-slate-800 mb-3">投资策略建议</h4>
  <ul class="space-y-2 text-slate-700">
    <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>核心仓位（S级）：</strong>宁德时代（全球动力电池龙头，储能爆发，目标价632元）、新锐股份（并购整合+钨价红利，26E PE仅17.75x）</span></li>
    <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>重点配置（A级）：</strong>8只A级标的，优先关注金山办公（AI办公商业化）、神火股份（电解铝弹性，PE仅8.4x）、新天然气（UCG颠覆性技术）</span></li>
    <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>标配观察（B级）：</strong>75只B级标的作为标配持仓，关注博众精工（在手订单+164%）、招商银行（金股推荐）、中科曙光（AI算力集群）</span></li>
    <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span><strong>谨慎规避（C级）：</strong>15只C级标的，特别关注盈利预测下调的标的（九号公司、恒力石化、伟创电气等）</span></li>
  </ul>
</div>

<div class="text-center text-slate-400 text-sm mt-10 pb-8">
  <p>报告生成日期：2026-04-16 | 评级体系：S级(&gt;8.5分)极度看好 | A级(7-8.5分)重点看好 | B级(5-7分)中性偏多 | C级(&lt;5分)谨慎规避</p>
  <p class="mt-1">五大评估维度：研报标题定调(0-2分)、报告覆盖类型(0-2分)、盈利预测上调(0-2分)、财报基本面(0-2分)、市场资金共振(0-2分)</p>
  <p class="mt-1 text-red-400">投资有风险，入市需谨慎</p>
</div>

</div>`;
}
