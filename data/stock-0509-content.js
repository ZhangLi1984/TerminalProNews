// ==========================================
// 个股研报内容渲染 - 2026-05-09
// ==========================================

function renderStockContent_0509() {
  return `
<div class="prose prose-slate max-w-none">

<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、评级分布总览</h2>

<h3 id="s_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">评级总览（100篇研报）</h3>

<div class="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 my-5">
  <p class="text-slate-800 text-base mb-3">本日共分析 <strong class="text-red-600">100篇</strong> 个股研报，整体情绪偏 <strong class="text-green-600">乐观</strong>。资金主攻方向集中在：半导体设备国产替代、医药创新、新能源车出海、氟化工景气、消费电子复苏等赛道。</p>
  <div class="grid grid-cols-4 gap-3 mt-4">
    <div class="bg-purple-100 rounded-lg p-3 text-center"><span class="text-2xl font-black text-purple-700">2</span><span class="text-xs text-purple-600 block mt-1">S级</span></div>
    <div class="bg-blue-100 rounded-lg p-3 text-center"><span class="text-2xl font-black text-blue-700">10</span><span class="text-xs text-blue-600 block mt-1">A级</span></div>
    <div class="bg-slate-100 rounded-lg p-3 text-center"><span class="text-2xl font-black text-slate-700">76</span><span class="text-xs text-slate-600 block mt-1">B级</span></div>
    <div class="bg-red-100 rounded-lg p-3 text-center"><span class="text-2xl font-black text-red-700">2</span><span class="text-xs text-red-600 block mt-1">C级</span></div>
  </div>
</div>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left">评级</th>
        <th class="px-4 py-3 text-center">数量</th>
        <th class="px-4 py-3 text-center">占比</th>
        <th class="px-4 py-3 text-left">说明</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100">
      <tr class="bg-purple-50"><td class="px-4 py-3 font-black text-purple-900 text-lg">S (核心仓位)</td><td class="px-4 py-3 text-center font-black text-purple-700 text-lg">2</td><td class="px-4 py-3 text-center font-bold text-purple-700">2%</td><td class="px-4 py-3 text-sm">首次覆盖+深度研究+基本面优异，市场认知差大</td></tr>
      <tr class="bg-blue-50"><td class="px-4 py-3 font-bold text-blue-900">A (主要仓位)</td><td class="px-4 py-3 text-center font-bold text-blue-700">10</td><td class="px-4 py-3 text-center font-bold text-blue-700">10%</td><td class="px-4 py-3 text-sm">业绩确定性强的细分龙头</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">B (中性偏多)</td><td class="px-4 py-3 text-center font-bold">76</td><td class="px-4 py-3 text-center">76%</td><td class="px-4 py-3 text-sm">常规维持评级，基本面稳定但缺乏突出亮点</td></tr>
      <tr class="bg-red-50"><td class="px-4 py-3 font-bold text-red-800">C (谨慎规避)</td><td class="px-4 py-3 text-center font-bold text-red-700">2</td><td class="px-4 py-3 text-center text-red-700">2%</td><td class="px-4 py-3 text-sm">九洲药业、索菲亚——业绩明显恶化</td></tr>
      <tr class="bg-slate-50"><td class="px-4 py-3 font-bold text-slate-600">数据缺失</td><td class="px-4 py-3 text-center font-bold text-slate-600">10</td><td class="px-4 py-3 text-center text-slate-600">10%</td><td class="px-4 py-3 text-sm">按中性处理，需进一步跟踪</td></tr>
    </tbody>
  </table>
</div>

<!-- ===== S级标的 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>二、S级标的深度解读（2只）</h2>

<h3 id="s_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1. 百奥赛图 (688796) — 中邮证券</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 百奥赛图 · 评分9.0</h4>
  <p class="text-purple-900 text-sm mb-3"><strong>研报标题：</strong>模式动物+临床前业务稳健高增，抗体开发平台加速兑现</p>
  <p class="text-purple-900 text-sm mb-2"><strong>核心投资逻辑：</strong>从第一性原理出发，百奥赛图的商业本质是"人源化动物模型+抗体发现平台"的卖水人模式。公司拥有全球领先的RenMice人源化小鼠平台，通过"千鼠万抗"商业模式将抗体发现能力产品化，本质上是在卖"研发基础设施"而非单一产品。这种模式具有极强的网络效应——每发现一个新抗体，就为公司积累了更多的生物数据和研发经验，形成正向循环。</p>
  <div class="bg-white/60 rounded-lg p-3 my-3">
    <p class="text-purple-800 text-sm"><strong>核心数据：</strong>2025年营收13.79亿元（+40.6%），归母净利润1.73亿元（+416%），26Q1营收4.33亿元（+73.7%）。海外收入占比近70%，净利率从3.4%跃升至12.6%。截至2025年底，已签署超350项药物合作协议，5个项目进入临床阶段。ROE从8.0%提升至21.9%，毛利率75.8%-78.8%。</p>
  </div>
  <p class="text-purple-900 text-sm mb-2"><strong>预期差与催化剂：</strong>市场共识CXO板块受全球生物医药融资寒冬影响，但百奥赛图实际数据表明其已穿越周期。(1) "千鼠万抗"授权收入爆发式增长未被充分定价；(2) AI+自动化带来的研发效率提升可能进一步加速盈利释放；(3) 与默克、吉利德、强生等全球顶级药企的合作背书价值被低估。</p>
  <p class="text-purple-700 text-sm mt-2"><strong>潜在风险：</strong>下游研发需求变动（全球融资环境不确定）；市场竞争加剧（ModeX、Regeneron等）；地缘政治风险（海外收入70%）；PE估值偏高（127x 2026E，2028年降至50x）。</p>
  <p class="text-purple-600 text-xs mt-2">评分维度：标题定调2分 | 首次覆盖2分 | 盈利预测上调2分 | 财报支撑2分 | 资金共振1分</p>
</div>

<h3 id="s_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2. 华海清科 (688120) — 东海证券</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 华海清科 · 评分8.8</h4>
  <p class="text-purple-900 text-sm mb-3"><strong>研报标题：</strong>先进CMP设备放量突破，平台化战略引领协同发展</p>
  <p class="text-purple-900 text-sm mb-2"><strong>核心投资逻辑：</strong>从第一性原理分析，CMP（化学机械抛光）是芯片制造中实现晶圆表面纳米级平坦化的唯一技术路线，随着制程微缩，每颗芯片需要的CMP步骤从65nm的约12道增至7nm的30+道。华海清科作为国内CMP设备绝对龙头，占据国产CMP设备销售90%以上份额，已出机超1000台，深度绑定中芯国际、长江存储、华虹半导体等头部晶圆厂。商业模式已从单一设备销售进化为"装备+服务"平台。</p>
  <div class="bg-white/60 rounded-lg p-3 my-3">
    <p class="text-purple-800 text-sm"><strong>核心数据：</strong>2025年营收46.48亿元（+36.46%），归母净利润10.84亿元。全球CMP市场规模2027年将突破40亿美元，中国占40%份额。存货39.89亿反映在手订单充裕。ROE 16.3%→19.3%，毛利率42%+。天津基地20万片/月晶圆再生产能已满产，昆山扩产规划40万片/月。</p>
  </div>
  <p class="text-purple-900 text-sm mb-2"><strong>预期差与催化剂：</strong>市场尚未充分定价：(1) 耗材+维保服务类业务的高粘性+高毛利特性，随存量设备增加将进入加速增长期；(2) 离子注入设备（276亿全球市场）商业化突破带来的第二增长曲线；(3) 先进制程CMP订单占比提升带来的量价齐升。</p>
  <p class="text-purple-700 text-sm mt-2"><strong>潜在风险：</strong>产品研发及验证进度不及预期；地缘政治风险（中美半导体博弈加剧）；下游晶圆厂扩产不及预期；PE 50x对增速敏感度较高。</p>
  <p class="text-purple-600 text-xs mt-2">评分维度：标题定调2分 | 首次+深度2分 | 盈利预测上调1分 | 财报支撑2分 | 资金共振1分 | 现价200.63，52周高点207.99</p>
</div>

<!-- ===== A级标的 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>三、A级标的精选（10只）</h2>

<h3 id="s_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">巨化股份 (600160) · 评分8.0 · 中银证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 巨化股份</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>2025年营收269.91亿（+10.33%），净利润37.83亿（+94.29%），26Q1净利润11.73亿（+45.93%）。制冷剂行业延续高景气，公司作为氟化工龙头受益第二/三代制冷剂配额制度。毛利率56.7%，净利率31.3%。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价36.16元，PE约14x（2026E），具备估值修复空间。</p>
</div>

<h3 id="s_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">安集科技 (688019) · 评分7.8 · 中银证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 安集科技</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>2025年营收25.04亿（+36.47%），净利润7.84亿（+46.85%）。CMP抛光液全球市占率从8%→11%→13%稳步提升，跻身全球主流供应商。毛利率56.72%，净利率31.29%。电镀液及添加剂板块有序推进。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价266.01元，PE约24x（2026E）。</p>
</div>

<h3 id="s_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">比亚迪 (002594) · 评分7.8 · 华金证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 比亚迪</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>26Q1海外销量占比升至46%（出口+55%），闪充技术（10%-97%仅9分钟）带动产品矩阵升级。2026E净利润411亿（+26.1%），ROE 14.1%。全球研发+制造+运输+销售全链条运营生态成型。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价100.75元，PE 22x（2026E）。</p>
</div>

<h3 id="s_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">华勤技术 (603296) · 评分7.6 · 东吴证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 华勤技术</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>2025年营收1714亿（+56.02%），净利润40.54亿（+38.55%）。数据中心放量驱动全年高增，2026E净利润52.55亿（+29.62%）。消费电子ODM龙头向数据中心IDC延伸。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>PE 24x（2026E），低于行业均值。</p>
</div>

<h3 id="s_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新产业 (300832) · 评分7.5 · 太平洋证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 新产业</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>2025年海外收入20.07亿（+19.16%），海外发光试剂销量+43.57%。国内业务V型复苏，26Q1试剂收入+9.64%。ROE 18.52%（2026E），毛利率69%+。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价48.25元，PE 20x（2026E）。</p>
</div>

<h3 id="s_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">恒瑞医药 (600276) · 评分7.5 · 中邮证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 恒瑞医药</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>25年收入316.3亿，创新药占比持续提升。国内创新药龙头，研发管线丰富，国际化推进中。业绩稳健增长。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价约50元区间。</p>
</div>

<h3 id="s_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">山西汾酒 (600809) · 评分7.3 · 西南证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 山西汾酒</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>25年收入387.2亿，消费韧性凸显。白酒高端化趋势延续，品牌势能强劲。ROE优秀，现金流充沛。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价140.92元。</p>
</div>

<h3 id="s_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">中润光学 (688307) · 评分7.3 · 山西证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 中润光学</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>首次覆盖+深度分析。精密光学镜头龙头，无人机/智能影像/智能家居多赛道驱动。收购戴斯构筑垂直一体化优势。买入-A评级。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价98.72元。</p>
</div>

<h3 id="s_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">鲁西化工 (000830) · 评分7.2 · 中邮证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 鲁西化工</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>首次覆盖。26Q1净利润增速转正（+6.07%），2026E净利润19.81亿（+118.49%），PE仅16x。有机硅、己内酰胺等产品进入行业修复周期。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价17.06元，PE 16x（2026E）低估。</p>
</div>

<h3 id="s_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">雅克科技 (002409) · 评分7.2 · 中银证券</h3>
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-blue-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>A级 · 雅克科技</h4>
  <p class="text-blue-900 text-sm mb-2"><strong>核心看点：</strong>2025年营收86.11亿（+25.49%），净利润10亿（+14.77%）。电子材料持续放量，前驱体收入提升，LNG保温板材业务稳健。</p>
  <p class="text-blue-700 text-sm"><strong>估值参考：</strong>现价92.08元。</p>
</div>

<!-- ===== B级概览 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-slate-500 rounded-full mr-3"></span>四、B级标的概览（76只）</h2>

<h3 id="s_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">B级标的按行业分类</h3>

<div class="space-y-4">
  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">💊 医药生物（19只B级）</h4>
    <p class="text-slate-700 text-sm">联影医疗、华大智造、澳华内镜、普蕊斯、金河生物、山外山、三生国健、南微医学、华厦眼科、百洋医药、国际医学、成都先导、迪哲医药-U、爱舍伦、山外山、千红制药、健友股份、振德医疗、伟思医疗</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>三生国健25年营收41.99亿（+251.81%），抗体药爆发；山外山营收8.07亿（+42.24%），血液净化设备高增长；迪哲医药26E营收14亿（+75%）。</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">💻 电子/半导体（8只B级）</h4>
    <p class="text-slate-700 text-sm">汇顶科技、弘景光电、斯瑞新材、同惠电子、天岳先进、珂玛科技</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>汇顶科技25年营收47.36亿（+8.2%），指纹/触控芯片复苏；天岳先进8英寸SiC衬底全球份额27.6%第一。</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">🚗 汽车/零部件（5只B级）</h4>
    <p class="text-slate-700 text-sm">川环科技、华洋赛车、易实精密、中原内配</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>华洋赛车双品牌运营，电动化+越野+海外共振。</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">🛒 消费/制造（6只B级）</h4>
    <p class="text-slate-700 text-sm">海天味业、新澳股份、桐昆股份、三夫户外、格力电器（持有）、仙鹤股份（持有）、匠心家居、顾家家居、德尔玛</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>海天味业26Q1收入90.3亿（+8.6%），调味品龙头稳健；桐昆股份长丝景气改善；匠心家居Q1毛利率38.13%逆势提升。</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">⛏️ 周期/资源（6只B级）</h4>
    <p class="text-slate-700 text-sm">山金国际、中金黄金、赤峰黄金、厦门钨业、新希望、隆平高科</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>山金国际26Q1归母净利润13.94亿；赤峰黄金26Q1营收35.5亿（+47.7%），净利+104%；中金黄金26Q1归母净利23.81亿。</p>
  </div>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-4 my-4 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2">🔧 其他板块（30+只B级）</h4>
    <p class="text-slate-700 text-sm">用友网络、新华保险、厦门国贸、中国船舶（推荐）、招商蛇口、博彦科技、科大讯飞、山推股份、航宇科技、崇德科技、汉钟精机、捷佳伟创、奥特维、艾罗能源、灵鸽科技、广信科技、华荣股份、景津装备、力盛体育、华资实业、蔚蓝生物、立华股份、安达科技、康比特、朗鸿科技、珠海港、长虹能源、斯瑞新材、运机集团、上海港湾、华设集团、苏交科</p>
    <p class="text-slate-600 text-sm mt-1"><strong>亮点：</strong>中国船舶造船大周期推荐；科大讯飞25年营收271亿（+16.12%），AI大模型；山推股份营收146.2亿，推土机龙头出海。</p>
  </div>
</div>

<!-- ===== C级规避 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-500 rounded-full mr-3"></span>五、C级规避标的（2只）</h2>

<h3 id="s_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">C级规避标的</h3>

<div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-red-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">⚠️</span>C级 · 九洲药业 (603456)</h4>
  <p class="text-red-900 text-sm"><strong>规避理由：</strong>评级下调！26Q1营收-19.43%，净利润-31.22%，经营明显恶化。华创证券给出评级下调，CXO行业景气度承压。</p>
</div>

<div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
  <h4 class="text-red-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">⚠️</span>C级 · 索菲亚 (002572)</h4>
  <p class="text-red-900 text-sm"><strong>规避理由：</strong>26Q1营收-25.46%，归母净利润亏损，家具行业深度调整期。国金证券给出C级评价，需等待行业企稳信号。</p>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-xl">
  <h4 class="text-yellow-800 font-bold mb-2">📋 数据缺失/评级不明（10只，按中性处理）</h4>
  <p class="text-yellow-900 text-sm">林洋能源、正川股份、振德医疗、华旺科技、伟思医疗、健友股份、苏交科、上海港湾、运机集团、珀莱雅（待确认）。需进一步跟踪验证。</p>
</div>

<!-- ===== 行业分布 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-emerald-500 rounded-full mr-3"></span>六、行业分布统计</h2>

<h3 id="s_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业分布</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left">行业</th>
        <th class="px-4 py-3 text-center">数量</th>
        <th class="px-4 py-3 text-center">占比</th>
        <th class="px-4 py-3 text-left">主要评级分布</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100">
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">医药生物</td><td class="px-4 py-3 text-center font-bold">22</td><td class="px-4 py-3 text-center">22%</td><td class="px-4 py-3 text-sm"><span class="text-purple-600 font-bold">S(1)</span>、<span class="text-blue-600 font-bold">A(1)</span>、B(19)、C(1)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">电子/半导体</td><td class="px-4 py-3 text-center font-bold">12</td><td class="px-4 py-3 text-center">12%</td><td class="px-4 py-3 text-sm"><span class="text-purple-600 font-bold">S(1)</span>、<span class="text-blue-600 font-bold">A(3)</span>、B(8)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">机械设备</td><td class="px-4 py-3 text-center font-bold">10</td><td class="px-4 py-3 text-center">10%</td><td class="px-4 py-3 text-sm"><span class="text-blue-600 font-bold">A(1)</span>、B(9)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">电力设备/新能源</td><td class="px-4 py-3 text-center font-bold">8</td><td class="px-4 py-3 text-center">8%</td><td class="px-4 py-3 text-sm"><span class="text-blue-600 font-bold">A(1)</span>、B(7)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">农林牧渔</td><td class="px-4 py-3 text-center font-bold">6</td><td class="px-4 py-3 text-center">6%</td><td class="px-4 py-3 text-sm">B(5)、C(1)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">汽车</td><td class="px-4 py-3 text-center font-bold">6</td><td class="px-4 py-3 text-center">6%</td><td class="px-4 py-3 text-sm"><span class="text-blue-600 font-bold">A(1)</span>、B(5)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">有色金属</td><td class="px-4 py-3 text-center font-bold">6</td><td class="px-4 py-3 text-center">6%</td><td class="px-4 py-3 text-sm">B(6)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">轻工制造</td><td class="px-4 py-3 text-center font-bold">6</td><td class="px-4 py-3 text-center">6%</td><td class="px-4 py-3 text-sm">B(5)、C(1)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">基础化工</td><td class="px-4 py-3 text-center font-bold">5</td><td class="px-4 py-3 text-center">5%</td><td class="px-4 py-3 text-sm"><span class="text-blue-600 font-bold">A(2)</span>、B(3)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">食品饮料</td><td class="px-4 py-3 text-center font-bold">4</td><td class="px-4 py-3 text-center">4%</td><td class="px-4 py-3 text-sm"><span class="text-blue-600 font-bold">A(1)</span>、B(3)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">计算机</td><td class="px-4 py-3 text-center font-bold">4</td><td class="px-4 py-3 text-center">4%</td><td class="px-4 py-3 text-sm">B(4)</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">其他</td><td class="px-4 py-3 text-center font-bold">11</td><td class="px-4 py-3 text-center">11%</td><td class="px-4 py-3 text-sm">分散分布</td></tr>
    </tbody>
  </table>
</div>

<!-- ===== 全量清单 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>七、全量100篇评级汇总</h2>

<h3 id="s_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">100篇研报汇总清单</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-3 py-3 text-left text-xs">#</th>
        <th class="px-3 py-3 text-left text-xs">股票</th>
        <th class="px-3 py-3 text-left text-xs">代码</th>
        <th class="px-3 py-3 text-left text-xs">机构</th>
        <th class="px-3 py-3 text-center text-xs">评级</th>
        <th class="px-3 py-3 text-center text-xs">总分</th>
        <th class="px-3 py-3 text-left text-xs">核心逻辑</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100 text-xs">
      <tr class="bg-purple-50"><td class="px-3 py-2">1</td><td class="px-3 py-2 font-bold text-purple-900">百奥赛图</td><td class="px-3 py-2 font-mono">688796</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center font-bold text-purple-700">S</td><td class="px-3 py-2 text-center font-bold text-purple-700">9.0</td><td class="px-3 py-2">首次覆盖，"千鼠万抗"模式收获期，收入+40.6%，净利+416%</td></tr>
      <tr class="bg-purple-50"><td class="px-3 py-2">2</td><td class="px-3 py-2 font-bold text-purple-900">华海清科</td><td class="px-3 py-2 font-mono">688120</td><td class="px-3 py-2">东海证券</td><td class="px-3 py-2 text-center font-bold text-purple-700">S</td><td class="px-3 py-2 text-center font-bold text-purple-700">8.8</td><td class="px-3 py-2">首次+深度，CMP设备龙头国产替代90%份额</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">3</td><td class="px-3 py-2 font-bold text-blue-900">巨化股份</td><td class="px-3 py-2 font-mono">600160</td><td class="px-3 py-2">中银证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">8.0</td><td class="px-3 py-2">25年净利37.83亿(+94.29%)，制冷剂高景气</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">4</td><td class="px-3 py-2 font-bold text-blue-900">安集科技</td><td class="px-3 py-2 font-mono">688019</td><td class="px-3 py-2">中银证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.8</td><td class="px-3 py-2">CMP抛光液全球市占率13%，营收+36.47%</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">5</td><td class="px-3 py-2 font-bold text-blue-900">比亚迪</td><td class="px-3 py-2 font-mono">002594</td><td class="px-3 py-2">华金证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.8</td><td class="px-3 py-2">海外销量+55%占比46%，闪充技术驱动升级</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">6</td><td class="px-3 py-2 font-bold text-blue-900">华勤技术</td><td class="px-3 py-2 font-mono">603296</td><td class="px-3 py-2">东吴证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.6</td><td class="px-3 py-2">25年营收1714亿(+56%)，数据中心驱动高增</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">7</td><td class="px-3 py-2 font-bold text-blue-900">新产业</td><td class="px-3 py-2 font-mono">300832</td><td class="px-3 py-2">太平洋证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.5</td><td class="px-3 py-2">海外试剂高增长+国内V型复苏，化学发光龙头</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">8</td><td class="px-3 py-2 font-bold text-blue-900">恒瑞医药</td><td class="px-3 py-2 font-mono">600276</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.5</td><td class="px-3 py-2">25年收入316.3亿，创新药龙头研发管线丰富</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">9</td><td class="px-3 py-2 font-bold text-blue-900">山西汾酒</td><td class="px-3 py-2 font-mono">600809</td><td class="px-3 py-2">西南证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.3</td><td class="px-3 py-2">25年收入387.2亿，白酒高端化龙头</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">10</td><td class="px-3 py-2 font-bold text-blue-900">中润光学</td><td class="px-3 py-2 font-mono">688307</td><td class="px-3 py-2">山西证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.3</td><td class="px-3 py-2">首次+深度，精密光学镜头，多赛道驱动</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">11</td><td class="px-3 py-2 font-bold text-blue-900">鲁西化工</td><td class="px-3 py-2 font-mono">000830</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.2</td><td class="px-3 py-2">首次覆盖，26Q1净利增速转正，PE仅16x</td></tr>
      <tr class="bg-blue-50"><td class="px-3 py-2">12</td><td class="px-3 py-2 font-bold text-blue-900">雅克科技</td><td class="px-3 py-2 font-mono">002409</td><td class="px-3 py-2">中银证券</td><td class="px-3 py-2 text-center font-bold text-blue-700">A</td><td class="px-3 py-2 text-center font-bold text-blue-700">7.2</td><td class="px-3 py-2">25年营收86.11亿(+25.49%)，电子材料放量</td></tr>
      <tr class="bg-slate-50"><td class="px-3 py-2 text-center text-slate-500 font-semibold" colspan="7">—— 以下为B级和C级标的（共90只），详见完整数据 ——</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">13</td><td class="px-3 py-2">海天味业</td><td class="px-3 py-2 font-mono">603288</td><td class="px-3 py-2">西南证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">26Q1收入90.3亿(+8.6%)，调味品龙头稳健</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">14</td><td class="px-3 py-2">山金国际</td><td class="px-3 py-2 font-mono">000975</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">26Q1归母净利润13.94亿，黄金龙头受益金价</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">15</td><td class="px-3 py-2">赤峰黄金</td><td class="px-3 py-2 font-mono">600988</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">26Q1营收35.5亿(+47.7%)，归母净利润+104%</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">16</td><td class="px-3 py-2">桐昆股份</td><td class="px-3 py-2 font-mono">601233</td><td class="px-3 py-2">国金证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">长丝景气改善，涤纶长丝龙头</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">17</td><td class="px-3 py-2">匠心家居</td><td class="px-3 py-2 font-mono">300993</td><td class="px-3 py-2">国金证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">Q1收入跑赢行业，毛利率38.13%逆势提升</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">18</td><td class="px-3 py-2">汇顶科技</td><td class="px-3 py-2 font-mono">603160</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">25年营收47.36亿(+8.2%)，指纹/触控芯片</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">19</td><td class="px-3 py-2">亿纬锂能</td><td class="px-3 py-2 font-mono">300014</td><td class="px-3 py-2">国信证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">25年营收614.7亿(+26%)，锂电池龙头稳健</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">20</td><td class="px-3 py-2">三生国健</td><td class="px-3 py-2 font-mono">688336</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">25年营收41.99亿(+251.81%)，抗体药爆发</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">21</td><td class="px-3 py-2">联影医疗</td><td class="px-3 py-2 font-mono">688271</td><td class="px-3 py-2">太平洋证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">医疗影像设备龙头</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">22</td><td class="px-3 py-2">新澳股份</td><td class="px-3 py-2 font-mono">603889</td><td class="px-3 py-2">信达证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">定增践行宽带战略，全球化+高端化加速</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">23</td><td class="px-3 py-2">厦门钨业</td><td class="px-3 py-2 font-mono">600549</td><td class="px-3 py-2">国信证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">钨全产业链龙头，钨钼+稀土+能源新材料</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">24</td><td class="px-3 py-2">中金黄金</td><td class="px-3 py-2 font-mono">600489</td><td class="px-3 py-2">中邮证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">26Q1归母净利23.81亿，黄金龙头受益金价</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">25</td><td class="px-3 py-2">隆平高科</td><td class="px-3 py-2 font-mono">000998</td><td class="px-3 py-2">开源证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">生物育种+转基因种子，种业龙头</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">26</td><td class="px-3 py-2">山推股份</td><td class="px-3 py-2 font-mono">000680</td><td class="px-3 py-2">中银证券</td><td class="px-3 py-2 text-center">B</td><td class="px-3 py-2 text-center">7.0</td><td class="px-3 py-2">25年营收146.2亿(+2.82%)，推土机龙头出海</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">27</td><td class="px-3 py-2 font-bold text-red-700">九洲药业</td><td class="px-3 py-2 font-mono">603456</td><td class="px-3 py-2">华创证券</td><td class="px-3 py-2 text-center font-bold text-red-700">C</td><td class="px-3 py-2 text-center font-bold text-red-700">4.0</td><td class="px-3 py-2 font-bold text-red-700">评级下调！26Q1营收-19.43%，利润-31.22%</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-3 py-2">28</td><td class="px-3 py-2 font-bold text-red-700">索菲亚</td><td class="px-3 py-2 font-mono">002572</td><td class="px-3 py-2">国金证券</td><td class="px-3 py-2 text-center font-bold text-red-700">C</td><td class="px-3 py-2 text-center font-bold text-red-700">4.0</td><td class="px-3 py-2 font-bold text-red-700">26Q1营收-25.46%，亏损，家具行业深度调整</td></tr>
    </tbody>
  </table>
</div>

<div class="bg-slate-50 rounded-xl p-4 my-5">
  <p class="text-slate-600 text-sm text-center">完整清单包含全部100篇研报，以上为S级、A级及部分B/C级代表性标的。其余60+只B级标的详见数据源。</p>
</div>

<p class="text-slate-500 text-sm mt-8">报告生成时间：2026-05-09 | 数据来源：东方财富个股研报（100篇） | 评级体系：S级(&gt;8.5分) / A级(7-8.5分) / B级(5-7分) / C级(&lt;5分)</p>

</div>`;
}
