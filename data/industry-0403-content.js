// ==========================================
// 行业研究内容配置 - 2026-04-03
// 深度融合：全市场行业汇总 + 宏观 CIO 分析
// ==========================================

function renderIndustryContent_0403() {
  return `
<div class="prose prose-slate max-w-none">

<!-- 顶部日期标签 -->
<div class="mb-8">
  <div class="flex items-center space-x-3 mb-2">
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm">
      行业研究
    </span>
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
      2026 年 4 月 3 日
    </span>
  </div>
  <p class="text-sm text-slate-500">数据来源：135 份东方财富研报 + 260 份新浪财经研报 + 20+ 宏观策略研报</p>
</div>

<!-- ==================== 一、宏观经济 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>宏观经济：温和修复中的结构性亮点</h2>

<div id="i_sec1">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3 月 PMI 重回荣枯线，工企利润大幅反弹</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">指标</th>
          <th class="px-4 py-3 text-center">数据</th>
          <th class="px-4 py-3 text-left">变化 / 信号</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr><td class="px-4 py-2.5 text-sm font-semibold">制造业 PMI（3 月）</td><td class="px-4 py-2.5 text-sm text-center font-bold text-green-600">50.4%</td><td class="px-4 py-2.5 text-sm">+1.4pp，重回荣枯线上</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">非制造业 PMI</td><td class="px-4 py-2.5 text-sm text-center">50.1%</td><td class="px-4 py-2.5 text-sm">+0.6pp</td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">新订单指数</td><td class="px-4 py-2.5 text-sm text-center font-bold text-green-600">51.6%</td><td class="px-4 py-2.5 text-sm">+3.0pp，需求回暖</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">原材料购进价格</td><td class="px-4 py-2.5 text-sm text-center font-bold text-red-600">63.9%</td><td class="px-4 py-2.5 text-sm"><strong>+9.1pp（极端值）</strong></td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">出厂价格指数</td><td class="px-4 py-2.5 text-sm text-center">55.4%</td><td class="px-4 py-2.5 text-sm">+4.8pp，传导滞后</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">工企利润 1-2 月</td><td class="px-4 py-2.5 text-sm text-center font-bold text-green-600">+15.2%</td><td class="px-4 py-2.5 text-sm">vs. 2025 全年 ≈ 0%</td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">工业增加值 1-2 月</td><td class="px-4 py-2.5 text-sm text-center">+6.3%</td><td class="px-4 py-2.5 text-sm">+0.4pp vs. 2025</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">PPI 1-2 月</td><td class="px-4 py-2.5 text-sm text-center">-1.2%</td><td class="px-4 py-2.5 text-sm">降幅收窄 1.4pp</td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">Q1 GDP 预估</td><td class="px-4 py-2.5 text-sm text-center font-bold">~5%</td><td class="px-4 py-2.5 text-sm">接近增速目标上沿</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">📊</span>供需驱动的成本通胀
    </h4>
    <p class="text-blue-900 text-sm">原材料价格极端飙升（+9.1pp）完全由能源地缘冲击驱动，出厂价格传导仅 +4.8pp，中游制造业利润空间被压缩。小企 PMI 仍处 49.3% 收缩区间，原材料库存处于历史 30% 分位水平，企业补库意愿极弱。</p>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🔍</span>工企利润反弹的结构性特征
    </h4>
    <p class="text-green-900 text-sm">利润反弹高度集中于两条主线：（1）上游资源品（采矿、有色），受益于油价飙升带来的价格弹性；（2）高技术制造（电子、AI 硬件），增速超 100%。其余中下游行业利润仍在低位徘徊。</p>
  </div>
</div>

<!-- 策略配置 -->
<div id="i_sec2">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">策略配置：哑铃结构为主</h3>

  <p class="text-slate-700">当前 A 股处于<strong>地缘冲击与基本面修复的博弈期</strong>，市场在"防御性高股息"与"成长性 AI 算力"之间反复切换。</p>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">端</th>
          <th class="px-4 py-3 text-left">方向</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-green-50"><td class="px-4 py-3 font-bold text-green-900">防御端</td><td class="px-4 py-3 text-sm">煤炭、银行、公用事业、食品饮料、家电</td><td class="px-4 py-3 text-sm">"安全偏好"资金流入 + 股息率优势</td></tr>
        <tr class="bg-blue-50"><td class="px-4 py-3 font-bold text-blue-900">进攻端</td><td class="px-4 py-3 text-sm">AI 算力 + 电力基础设施、硬科技</td><td class="px-4 py-3 text-sm">Token 经济爆发，算电协同成为新叙事</td></tr>
      </tbody>
    </table>
  </div>

  <h4 class="text-slate-900 font-bold mt-6 mb-3">三大结构性主线</h4>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>算电协同：</strong>政府工作报告首次提及，绿电、储更具短期支撑</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>反内卷政策：</strong>能源成本上行倒逼上游定价权，化工、光伏、新能源车受益</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>高股息防御：</strong>地缘不确定性持续，资金偏好金融、公用事业、消费龙头</span></li>
  </ul>
</div>

<!-- 港股与海外市场 -->
<div id="i_sec3">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">港股与海外市场观察</h3>

  <p class="text-slate-700 mb-4">港股同样适用哑铃策略：防御端为高股息央国企（中特估），进攻端为半导体设备、AI 算力、电网设备、互联网平台及有色金属（弱美元逻辑）。A 股 3 月回落：上证 -1.09%、沪深 300 -1.68%、创业板 -1.68%，成交额缩至 1.86 万亿元。</p>

  <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-400 p-5 my-5 rounded-r-xl">
    <h4 class="text-slate-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🌐</span>美债与美股环境
    </h4>
    <p class="text-slate-900 text-sm">10Y 美债收益率维持高位，CME 模型定价 2027 年 9 月才降息。标普和纳指已跌破日线支撑位。但若 AI 趋势转化为盈利增长，科技股可能在滞胀环境中展现韧性（可参考 1978-1980 年先例）。大宗商品可能正处于新一轮超级周期的早期阶段。</p>
  </div>
</div>

<!-- ==================== 二、AI 算力与芯片 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>AI 算力与芯片</h2>

<div id="i_sec4">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">AI 算力：Token 经济加速爆发</h3>

  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-purple-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🚀</span>核心数据
    </h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-purple-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Token 调用量：</strong>1000 亿（2024 年初） → 100 万亿（2025 年底） → 140 万亿（2026 年 3 月），两年增长超千倍</span></li>
      <li class="py-1.5 border-b border-purple-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>IDC 预测：</strong>全球 2000 强公司到 2027 年 Agent 使用量增长 10 倍，Token 调用量增长 1000 倍</span></li>
      <li class="py-1.5 border-b border-purple-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>阿里玄铁 C950：</strong>全球性能最高 RISC-V CPU，SPEC 单核成绩 &gt;70 分</span></li>
      <li class="py-1.5 border-b border-purple-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>华为昇腾 950PR：</strong>算力为英伟达 H20 的 2.87 倍，HBM 112GB</span></li>
    </ul>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察</h4>
    <p class="text-red-900 text-sm">当前算力需求呈现"需求确定性 &gt; 技术路线确定性"的特征。无论哪种 AI 框架胜出，算力基础设施（芯片、服务器、光通信、液冷、电力）都是确定性受益者。关注三个交叉验证标：Token 调用量增速是否见顶、国产替代（昇腾 950PR 等）出货节奏、以及算力补贴政策落地进展。</p>
  </div>

  <p class="text-slate-700 mt-4"><strong>关注标的：</strong>寒武纪、海光信息、中科曙光、华丰科技、润建股份、润泽科技、数据港；金山办公、科大讯飞、万兴科技</p>
</div>

<!-- 光通信 -->
<div id="i_sec5">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">光通信：OFC 2026 乐观指引</h3>

  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 my-5 rounded-r-xl">
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-cyan-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Lumentum 指引：</strong>光通信行业 2025 年 $180B → 2030 年 $900B，CAGR 40%</span></li>
      <li class="py-1.5 border-b border-cyan-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>InP 芯片：</strong>2026-2030 年年增 85%</span></li>
      <li class="py-1.5 border-b border-cyan-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>CPO 商用元年：</strong>Coherent 预计 2030 年 CPO 规模达 $150B</span></li>
      <li class="py-1.5 border-b border-cyan-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>OCS：</strong>上修至 $40B 规模，2025-2028 年 CAGR 达 150%+</span></li>
    </ul>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察</h4>
    <p class="text-red-900 text-sm">光通信板块的供需紧张状态将持续 2-3 年以上。核心看点不是"概念"，而是订单和产能释放节奏。CPO（共封装光学）从概念走向商用是 2026 年最重要的产业趋势之一。关注长飞光纤（+26.46%）、光库科技（+18.72%）、德科立（+16.38%）的涨幅表现，验证产业逻辑。</p>
  </div>
</div>

<!-- 半导体 -->
<div id="i_sec6">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">半导体：设备国产化 + 存储景气周期</h3>

  <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5 my-4">
    <h4 class="font-bold text-slate-900 mb-3">SEMICON CHINA 2026 要点</h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>平台型公司崛起：</strong>北方华创发布 12 英寸 ICP 刻蚀、混合键合、TSV 电镀设备</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国产化率：</strong>刻蚀机、薄膜沉积、清洗 30-40%；光刻机、量检测、离子注入仍高度依赖进口</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>&lt;7nm 先进制程核心零部件：</strong>国产化率 &lt;10%，严重供不应求</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>存储芯片：</strong>Micron/Samsung/SK Hynix 上调 DRAM/NAND 合约价，景气周期持续</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>全球销售：</strong>2025 年达 $7670B，同比 +23.58%</span></li>
    </ul>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>北方华创（买入）、中微公司（买入）、江波龙、蓝思科技</p>
</div>

<!-- 人形机器人 -->
<div id="i_sec7">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">人形机器人：十年百倍增长的产业化初期</h3>

  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-5 my-5 rounded-r-xl">
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>2025 年全球出货量：</strong>约 1.7 万台</span></li>
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Counterpoint 预测 2030 年：</strong>25.6 万台，CAGR 69.7%</span></li>
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>Omdia 预测 2035 年：</strong>260 万台，约为 2025 年的 150 倍</span></li>
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>量产阶段：</strong>当前相当于新能源汽车 2018-2020 年阶段</span></li>
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中国企业占比：</strong>全球 84.7%，整机企业超 140 家</span></li>
      <li class="py-1.5 border-b border-teal-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>成本趋势：</strong>当前 30-60 万元/台，Optimus 量产后目标 $2 万美元</span></li>
    </ul>

    <p class="text-teal-900 text-sm mt-4 font-semibold"><strong>落地顺序：</strong>工厂（当前主战场） → 商业场景 → 家庭（终极场景，占 50%+）</p>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>宇树科技（全球出货量第一）、优必选、智元机器人、乐聚机器人</p>
</div>

<!-- ==================== 三、医药生物 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>医药生物：支柱产业定位</h2>

<div id="i_sec8">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">创新药出海爆发期</h3>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察</h4>
    <p class="text-red-900 text-sm">首次将生物医药定位为<span class="font-bold">"新兴产业支柱产业"</span>，与集成电路、航空航天并列，这是政策定位的重大跃升。2026 年 1-2 月 BD 交易额已达 $533 亿（超越 2025 年任何季度），趋势极强且持续确认。核心变量在于：后续 BD 首付款比例能否维持高位，及临床管线出海进度是否加速。</p>
  </div>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">指标</th>
          <th class="px-4 py-3 text-center">数据</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr><td class="px-4 py-2.5 text-sm font-semibold">2025 年 BD 出海交易总额</td><td class="px-4 py-2.5 text-sm">$1356.55 亿（2024 年为 $519 亿）</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">2025 年 BD 交易笔数</td><td class="px-4 py-2.5 text-sm">157 起，首付款 $70 亿</td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">最大单笔交易</td><td class="px-4 py-2.5 text-sm">信达生物 x 武田制药：$114 亿</td></tr>
        <tr class="bg-slate-50"><td class="px-4 py-2.5 text-sm font-semibold">石药集团最大交易</td><td class="px-4 py-2.5 text-sm">x 阿斯利康：最高 $185 亿</td></tr>
        <tr><td class="px-4 py-2.5 text-sm font-semibold">2026 年 1-2 月 BD 交易额</td><td class="px-4 py-2.5 text-sm font-bold text-green-600">$532.76 亿</td></tr>
      </tbody>
    </table>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>恒瑞医药、百济神州、信达生物、三生制药、康方生物</p>
</div>

<div id="i_sec9">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">维生素全线涨价周期</h3>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">📈</span>维生素涨价驱动因素
    </h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span>VE、烟酸、叶酸率先启动，VA、泛酸钙跟进，全线停报停签</span></li>
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span>成本端：上游化工原料涨价 + 油运价格上涨 + 业内控产涨价意愿</span></li>
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span>下游饲料添加剂对价格不敏感，提价顺畅传导</span></li>
    </ul>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>亿帆医药（泛酸钙龙头）、浙江医药（多品种 VE/VA）、兄弟科技</p>
</div>

<!-- ==================== 四、新能源与电池 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>新能源与电池</h2>

<div id="i_sec10">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">固态电池：2026 中试验证关键年</h3>

  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国标实施：</strong>2026 年 7 月实施（含"不起火、不爆炸"要求）</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>产业化节奏：</strong>半固态已小规模量产，全固态进入中试验证窗口期</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>2026 年红旗、广汽、吉利、奇瑞密集启动全固态装车验证</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>2027 年预期小规模量产，硫化物电解质为头部企业首选路线</span></li>
  </ul>

  <p class="text-slate-700 mt-3"><strong>受益环节：</strong>设备（2030 年千亿级市场）；材料（硫化锂、硅基负极、超高镍正极、单壁碳纳米管）</p>
</div>

<div id="i_sec11">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">光伏与储能</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>反内卷政策对光伏板块形成价格托底</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>绿电和储能受益"算电协同"基础设施投资</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>储能出口爆发：</strong>1-2 月新装机 9.51GW/24.18GWh，同比 +182%/+472%，电池出口 +192%（拉美 +327%、中东 +285%、东南亚 +216%）</span></li>
  </ul>
</div>

<div id="i_sec12">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">锂电产业链：供应担忧 + 需求高增</h3>

  <div class="bg-gradient-to-r from-green-50 to-lime-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🔋</span>核心数据
    </h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-green-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>碳酸锂价格：</strong>158,100 元/吨，YTD +32.3%，同比 +112.6%</span></li>
      <li class="py-1.5 border-b border-green-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>NEV 出口：</strong>1-2 月出口 58.3 万辆，同比 +110%</span></li>
      <li class="py-1.5 border-b border-green-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>全球锂电池产量（2 月）：</strong>202.6 GWh，同比 +42.2%</span></li>
      <li class="py-1.5 border-b border-green-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>3 月排产环比：</strong>电池样品 +22%，正极 -23%，负极 +16%，电解液 +19%</span></li>
    </ul>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>宁德时代、亿纬锂能、湖南裕能、恩捷股份、璞泰来</p>
</div>

<!-- ==================== 五、能源与资源品 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>能源与资源品</h2>

<!-- 石油 & 油运 -->
<div id="i_sec13">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">石油 & 油运：地缘冲击下的确定性受益</h3>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🛢️</span>油价高位运行
    </h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>布伦特原油：</strong>$108.35/桶（4 月 2 日），WTI $106.57/桶</span></li>
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>霍尔木兹海峡：</strong>自 3 月 27 日起事实性封锁</span></li>
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>沙特出口量：</strong>333 万桶/日（环比 -50%），约 5500 万桶滞留</span></li>
      <li class="py-1.5 border-b border-orange-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美财政部基准情景：</strong>$100+ 美元，不排除 $200 可能</span></li>
    </ul>
  </div>

  <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🚢</span>油运：超级周期开启
    </h4>
    <ul class="space-y-0">
      <li class="py-1.5 border-b border-red-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>BDTI：</strong>3,507 点（+23% 周环比）</span></li>
      <li class="py-1.5 border-b border-red-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>苏伊士型 TCE：</strong>+41% 周环比</span></li>
      <li class="py-1.5 border-b border-red-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>阿芙拉型 TCE：</strong>+93% 周环比</span></li>
      <li class="py-1.5 border-b border-red-200 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>若曼德海峡也封锁，需额外 118 艘 VLCC 绕行好望角</span></li>
    </ul>
  </div>

  <p class="text-slate-700"><strong>关注标的：</strong>招商轮船、中远海能、招商南油</p>
</div>

<!-- 煤炭 -->
<div id="i_sec14">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">煤炭：油煤替代 + 价格中枢上移</h3>

  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span>油气价格高位推动国内煤价中枢上升</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span>煤化工路线受益：煤制乙二醇开工率逆势上升</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span>地缘因素推升化工等行业对原料煤采购积极性</span></li>
  </ul>

  <p class="text-slate-700"><strong>关注标的：</strong>淮北矿业、山西焦煤、潞安环能</p>
</div>

<!-- 有色金属 -->
<div id="i_sec15">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">有色金属：中东供应扰动 + 弱美元逻辑</h3>

  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>铝：</strong>中东铝受损减产，支撑全球铝价</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>能源金属（锂、电池材料）：</strong>周涨幅 +13.38%</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>非金属板块：</strong>YTD 年涨幅 +2.78%（少数逆势正收益板块）</span></li>
  </ul>

  <p class="text-slate-700"><strong>关注标的：</strong>天山铝业、洛阳钼业</p>
</div>

<!-- 黄金 -->
<div id="i_sec16">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">黄金：短期回调中的中长期买入机会</h3>

  <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-yellow-800 font-bold mb-2 flex items-center">
      <span class="text-lg mr-2">🥇</span>3 月金价回调原因
    </h4>
    <p class="text-yellow-900 text-sm">上海金 -14.79%、伦敦金从 $5,500/oz 跌至 ~$4,463/oz。原因包括：油价飙升推通胀预期 → 美联储鹰派 → 降息推迟；美元虹吸效应；流动性危机下的黄金抛售；土耳其央行抛售；拥挤多头仓位触发程序化止损。</p>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察</h4>
    <p class="text-red-900 text-sm">3 月黄金的调整本质上是<strong>流动性冲击</strong>而非<strong>趋势性终结</strong>。中长期支撑逻辑依然完整：95% 的央行计划在 2026 年增持黄金（中国连续 16 个月增持至 2,308.5 吨）；美国债务/GDP 超 125% 使高利率不可持续；去美元化叙事强化（美元占全球储备降至 56.92%）。</p>
  </div>
</div>

<!-- ==================== 六、消费板块 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-pink-600 rounded-full mr-3"></span>消费板块</h2>

<div id="i_sec17">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">食品饮料：白酒底部调整，休闲食品景气</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>春糖会反馈：</strong>白酒展会冷清，行业处于底部调整期</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>分化加剧：</strong>茅台批价企稳，次高端和地产酒表现参差</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0"></span><span>油价上涨带来成本压力，企业已开始锁价应对</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0"></span><span>休闲食品景气度延续，新渠道红利持续</span></li>
  </ul>
  <p class="text-slate-700 mt-3"><strong>关注标的：</strong>盐津铺子、甘源食品、安井食品</p>
</div>

<div id="i_sec18">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">汽车行业：新能源市占率持续提升</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>Q1 新能源车市占率持续提升</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>比亚迪 2025 年业绩符合预期，看好新技术 + 出海新周期</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>AI 智能驾驶：小鹏第二代 VLA 上车，看好智能化赛道</span></li>
  </ul>
</div>

<!-- ==================== 七、金融地产 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>金融地产</h2>

<div id="i_sec19">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">房地产：库存消化与核心城市分化</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>1-2 月数据：</strong>住宅销售 -20.2%，新开工 -23.1%，土地成交 -45%</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>核心城市亮点：</strong>北京、上海二手房价环比自 2025 年 3 月以来首次转正</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>政策方向：</strong>"以存定增"原则控制增量，新增商业用地原则上不再分配</span></li>
  </ul>
  <p class="text-slate-700 mt-3"><strong>关注标的：</strong>绿城中国、华润置地、建发国际</p>
</div>

<div id="i_sec20">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">银行：净息差见底，高股息防御逻辑</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>工商银行 2025：</strong>总资产 53+ 万亿（+9.5%），NIM 1.28%（稳定），PE 7.2x，派息率 31%</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>净息差有望于 2026 年收窄幅度缩小，非息收入恢复增长</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>股息率 6-8%，隐含收益率极具吸引力</span></li>
  </ul>
</div>

<div id="i_sec21">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">证券 & 保险：利润大幅增长，历史低估值</h3>
  <ul class="space-y-0">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>券商：</strong>18 家上市券商合计净利润 1240 亿（+51%），平均 ROE 7.3%；2026E PB ~1.1x</span></li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>保险：</strong>五家 A 股险企净利润 4252 亿（+22%），NBV 强劲增长；2026E P/EV 0.54-0.77x，历史低位</span></li>
  </ul>
  <p class="text-slate-700 mt-3"><strong>关注标的：</strong>中信证券、国泰海通、中国平安、中国太保、中国人寿</p>
</div>

<!-- ==================== 八、配置建议 ==================== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>配置建议汇总</h2>

<div id="i_sec22">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">优先级配置表</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">优先级</th>
          <th class="px-4 py-3 text-left">方向</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-purple-500 text-white rounded-full text-xs font-bold">S</span></td>
          <td class="px-4 py-3 font-bold text-purple-900">AI 算力基础设施</td>
          <td class="px-4 py-3 text-sm">算力景气加速，Token 经济爆发，昇腾 950PR 等国产替代突破</td>
        </tr>
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-purple-500 text-white rounded-full text-xs font-bold">S</span></td>
          <td class="px-4 py-3 font-bold text-purple-900">光通信</td>
          <td class="px-4 py-3 text-sm">OFC2026 乐观指引，2030 年规模 $900B，CPO 商用元年在即</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">A</span></td>
          <td class="px-4 py-3 font-bold text-blue-900">医药生物</td>
          <td class="px-4 py-3 text-sm">首次定位为支柱产业，创新药 BD 爆发，维生素涨价周期启动</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">A</span></td>
          <td class="px-4 py-3 font-bold text-blue-900">固态电池</td>
          <td class="px-4 py-3 text-sm">2026 中试验证年，国标即将实施，千亿设备市场空间</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">A</span></td>
          <td class="px-4 py-3 font-bold text-blue-900">人形机器人</td>
          <td class="px-4 py-3 text-sm">出货量十年百倍增长，中国量产优势明显</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">A</span></td>
          <td class="px-4 py-3 font-bold text-blue-900">能源资源品</td>
          <td class="px-4 py-3 text-sm">地缘冲击下价格中枢上移，油运、煤炭、铝、锂、维生素</td>
        </tr>
        <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">B</span></td>
          <td class="px-4 py-3 font-bold"><semiconductor>半导体设备</semiconductor></td>
          <td class="px-4 py-3 text-sm">国产化率提升空间大，半导体销售周期向上</td>
        </tr>
        <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">B</span></td>
          <td class="px-4 py-3 font-bold"><semiconductor>高股息防御</semiconductor></td>
          <td class="px-4 py-3 text-sm">地缘不确定下避风港，银行、公用事、煤炭</td>
        </tr>
        <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">B</span></td>
          <td class="px-4 py-3 font-bold"><semiconductor>食品饮料</semiconductor></td>
          <td class="px-4 py-3 text-sm">白酒底部调整期，休闲食品/速冻赛道确定性高</td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3"><span class="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">C</span></td>
          <td class="px-4 py-3 font-bold text-red-900"><semiconductor>消费电子</semiconductor></td>
          <td class="px-4 py-3 text-sm">关税与出不确定性长期存在</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- 风险提示 -->
<div id="i_sec23">
  <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">风险提示</h3>

  <div class="space-y-3 my-4">
    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
      <p class="text-red-900 font-semibold text-sm"><strong>地缘风险外溢：</strong>霍尔木兹海峡冲突升级，油价进一步飙升，可能冲击 $200</p>
    </div>
    <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
      <p class="text-orange-900 font-semibold text-sm"><strong>输入性通胀：</strong>成本压力向消费端传导，压制内需</p>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
      <p class="text-yellow-900 font-semibold text-sm"><strong>美联储政策：</strong>通胀粘性可能推迟降息至 2027 年</p>
    </div>
    <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
      <p class="text-slate-900 font-semibold text-sm"><strong>中美关税：</strong>进一步升级可能冲击出口链估值</p>
    </div>
    <div class="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl">
      <p class="text-slate-900 font-semibold text-sm"><strong>下游需求不及预期：</strong>中游制造业被成本端挤压</p>
    </div>
  </div>
</div>

</div>`;
}
