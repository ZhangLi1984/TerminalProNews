// ==========================================
// 个股研报内容渲染 - 2026-05-08
// ==========================================

function renderStockContent_0508() {
  return `
<div class="prose prose-slate max-w-none">

<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、评级分布总览</h2>

<h3 id="sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">评级总览（100篇研报）</h3>

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
      <tr class="bg-purple-50"><td class="px-4 py-3 font-black text-purple-900 text-lg">S (强烈推荐)</td><td class="px-4 py-3 text-center font-black text-purple-700 text-lg">14</td><td class="px-4 py-3 text-center font-bold text-purple-700">14%</td><td class="px-4 py-3 text-sm">基本面卓越 + 明确催化剂 + 显著上涨空间</td></tr>
      <tr class="bg-blue-50"><td class="px-4 py-3 font-bold text-blue-900">A (买入)</td><td class="px-4 py-3 text-center font-bold text-blue-700">61</td><td class="px-4 py-3 text-center font-bold text-blue-700">61%</td><td class="px-4 py-3 text-sm">基本面稳健 + 正向增长预期</td></tr>
      <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-bold">B (持有)</td><td class="px-4 py-3 text-center font-bold">24</td><td class="px-4 py-3 text-center">24%</td><td class="px-4 py-3 text-sm">短期承压或估值偏高</td></tr>
      <tr class="bg-red-50"><td class="px-4 py-3 font-bold text-red-800">C (卖出/回避)</td><td class="px-4 py-3 text-center font-bold text-red-700">1</td><td class="px-4 py-3 text-center text-red-700">1%</td><td class="px-4 py-3 text-sm">龙芯中科 - 持续亏损，估值极高</td></tr>
    </tbody>
  </table>
</div>

<!-- ===== S级标的 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>二、S级标的深度解读（14只）</h2>

<h3 id="sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1. 海光信息 (688041) — AI芯片国产替代龙头</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 海光信息</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>国内唯一"C86+GPGPU"双芯片平台，2025年营收首破百亿（+57%），直接受益于AI算力需求爆发与国产替代浪潮。云厂商资本开支超千亿，拉动国产AI芯片增量需求。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>供应链外部不确定性，数据中心过热风险，研发迭代风险。</p>
  <p class="text-purple-600 text-sm mt-1">来源：诚通证券</p>
</div>

<h3 id="sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2. 鼎胜新材 (603876) — 锂电铝箔龙头，钠电双击</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 鼎胜新材</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>锂电铝箔毛利率拐点明确（Q4 2025吨净利0.28万），钠电池商业化带动铝箔单电池用量翻倍。2026年预期利润增速116%。目标价49.1元（对应30x 2027E PE）。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>销量不及预期，市场竞争加剧。</p>
  <p class="text-purple-600 text-sm mt-1">来源：东吴证券</p>
</div>

<h3 id="sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3. 恒瑞医药 (600276) — 创新药绝对龙头</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 恒瑞医药</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>创新药收入占比已达58%（+26%），2025年获批7个一类新药，2026-2028年预计53个批件。与GSK、MSD、Merck达成重大BD授权。2026年创新药收入目标增长&gt;30%。利润复合增长25%+。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>竞争格局恶化，销售不及预期，行业政策风险。</p>
  <p class="text-purple-600 text-sm mt-1">来源：华源证券 / 中国邮储证券（多篇覆盖）</p>
</div>

<h3 id="sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4. 金晶科技 (600586) — 钙钛矿TCO玻璃标准制定者</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 金晶科技</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>钙钛矿太阳能电池TCO玻璃是颠覆性催化剂。2025年亏损58.5亿，预期2028年扭亏至77.3亿利润。与头部钙钛矿企业合作，实质TCO标准制定者，淄博/滕州/马来西亚产能随时放量。目标价7.00元。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>宏观经济波动，贸易摩擦，业务拓展不及预期。</p>
  <p class="text-purple-600 text-sm mt-1">来源：西南证券</p>
</div>

<h3 id="sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5. 山外山 (688410) — 血液透析设备国产第一</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 山外山</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2025年营收+42.2%至8.1亿，净利润+105.8%至1.46亿。血透机国产品牌市占率第一（21.4%），CRRT设备全国第一（20.8%）。自产耗材收入+92.6%。覆盖100+国家，海外+34.3%。2026-28年利润复合增长~35%。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>新产品研发失败，设备市场竞争，核心原材料依赖进口。</p>
  <p class="text-purple-600 text-sm mt-1">来源：开源证券（建议关注）</p>
</div>

<h3 id="sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6. 万辰集团 (300972) — 量贩零食爆发式增长</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 万辰集团</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2025年营收+59.2%至515亿，净利润+358%至13.5亿。2026Q1营收+53.7%至166亿。门店数约2万家，同店增长强劲。规模效应驱动毛利率+1.9pp，净利率+1.8pp。行业竞争理性，双龙头格局。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>行业竞争导致分流，扩张受阻，新门店业态迭代不及预期。</p>
  <p class="text-purple-600 text-sm mt-1">来源：华泰证券（优于大市）</p>
</div>

<h3 id="sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">7. 赤峰黄金 (600988) — 紫金矿业入主，铜金双引擎</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 赤峰黄金</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2026Q1净利润+104%至9.88亿（营收+47.7%）。紫金矿业拟成控股股东（股份转让+H股发行获批），运营能力将显著提升。2026-28年净利润复合增速~31%至49.7/56.8/69.4亿。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>黄金、铜价格超预期下跌。</p>
  <p class="text-purple-600 text-sm mt-1">来源：开源证券</p>
</div>

<h3 id="sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">8. 毕得医药 (688073) — 药物分子砌块加速增长</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 毕得医药</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2025年营收+20.1%至13.2亿，净利润+29.2%至1.52亿。2026Q1净利润+52.6%。产品库逼近100万分子砌块，库存14万+。毛利率提升4.7pp至44.5%。覆盖PROTAC、GLP-1、XDC等热门研发领域。2026-28年利润复合增速~30%。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>汇率波动，研发服务需求下降，投资收益波动。</p>
  <p class="text-purple-600 text-sm mt-1">来源：开源证券</p>
</div>

<h3 id="sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">9. 伊利股份 (600887) — 乳业龙头，底部确认</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 伊利股份</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2025年净利润+37%至116亿，净利率创历史10%纪录。2026Q1液态奶重回增长（+2.3%）。承诺2027年前75%+分红比例，股息收益率~4.8%。基本面底部已确认，稳健复苏中。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>需求恢复不及预期，原奶价格下跌，行业竞争加剧。</p>
  <p class="text-purple-600 text-sm mt-1">来源：开源证券 / 华源证券（多篇覆盖）</p>
</div>

<h3 id="sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">10. 江波龙 (301308) — 存储模组龙头，业绩爆发</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 江波龙</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2025年营收+30%至228亿，净利润+185%至142亿。2026Q1营收暴增133%，净利润暴增2644%（AI需求+存储周期驱动）。企业级存储收入+93%。自研5nm UFS 4.1芯片已部署至头部手机厂商。PE仅10x。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>客户集中风险，新业务商业化不及预期，下游需求不及预期。</p>
  <p class="text-purple-600 text-sm mt-1">来源：爱建证券 / 国信证券（多篇覆盖）</p>
</div>

<h3 id="sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">11. 美的集团 (000333) — 全球家电王者，ToB高增长</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 美的集团</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2026Q1营收1316亿（+2.6%），净利润127亿（+2.0%）在高基数下稳健增长。ToB业务爆发：楼宇科技+10%，机器人+12%。承诺65-130亿回购注销。ROE 19%+，股息+回购收益率7%+。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>竞争加剧，原材料价格风险，海外自主品牌拓展不及预期。</p>
  <p class="text-purple-600 text-sm mt-1">来源：开源证券</p>
</div>

<h3 id="sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">12. 天味食品 (603317) — 调味品高增长+员工持股</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 天味食品</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2026Q1营收+76.2%，净利润+234.7%（春节错期+低基数）。毛利率扩张4.3pp至45%。员工持股计划绑定管理层利益（2026/27年收入增长目标16%/12%）。并购平台战略提供增量增长。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>原材料成本上涨，市场竞争加剧。</p>
  <p class="text-purple-600 text-sm mt-1">来源：西南证券</p>
</div>

<h3 id="sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">13. 匠心家居 (603180) — 家居出口龙头</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 匠心家居</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>Q1营收仅-3.58%（远优于家具行业-9.6%），毛利率+0.92pp至38.13%。美国零售商客户占收入87.25%，前十大客户半数增长9-157%。柬埔寨生产基地分散供应链风险。2026-28年利润增长17%/26%/18%，PE仅14x。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>汇率波动，全球贸易摩擦，原材料价格波动。</p>
  <p class="text-purple-600 text-sm mt-1">来源：国金证券</p>
</div>

<h3 id="sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">14. 山金国际 (000975) — 金矿利润创纪录</h3>
<div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
  <h4 class="text-purple-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🏆</span>S级 · 山金国际</h4>
  <p class="text-purple-900 text-sm mb-2"><strong>核心逻辑：</strong>2026Q1利润创纪录13.9亿（+100.9%），受益于金价上行和库存释放。经营现金流+153.7%。每克成本行业最低。纳米比亚Osino项目预计2027H1投产为重大增长驱动力。2026年利润预期暴增84.5%至54.8亿，PE仅14x。</p>
  <p class="text-purple-700 text-sm"><strong>风险：</strong>金价意外下跌。</p>
  <p class="text-purple-600 text-sm mt-1">来源：中国邮储证券</p>
</div>

<!-- ===== A级标的 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>三、重点A级标的精选（61只中精选20只）</h2>

<h3 id="sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">A级标的TOP20</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left">股票</th>
        <th class="px-4 py-3 text-left">代码</th>
        <th class="px-4 py-3 text-left">核心亮点</th>
        <th class="px-4 py-3 text-center">2026E利润增速</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100">
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">安集科技</td><td class="px-4 py-3 text-sm font-mono">688019</td><td class="px-4 py-3 text-sm">CMP抛光液全球份额升至13%，电镀液量产</td><td class="px-4 py-3 text-center font-bold text-green-600">+36.3%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">比亚迪</td><td class="px-4 py-3 text-sm font-mono">002594</td><td class="px-4 py-3 text-sm">出口+55%，闪充技术全品牌铺开</td><td class="px-4 py-3 text-center font-bold text-green-600">+26.1%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">百奥赛图</td><td class="px-4 py-3 text-sm font-mono">688799</td><td class="px-4 py-3 text-sm">人源化动物模型龙头，海外收入占70%</td><td class="px-4 py-3 text-center font-bold text-green-600">+416%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">广信科技</td><td class="px-4 py-3 text-sm font-mono">920037</td><td class="px-4 py-3 text-sm">绝缘材料，Q1收入+29.6%，ROE &gt;23%</td><td class="px-4 py-3 text-center font-bold text-green-600">+44%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">海天味业</td><td class="px-4 py-3 text-sm font-mono">603288</td><td class="px-4 py-3 text-sm">调味品绝对龙头，Q1收入+8.6%</td><td class="px-4 py-3 text-center text-green-600">稳健中个位数</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">鸿路钢构</td><td class="px-4 py-3 text-sm font-mono">002541</td><td class="px-4 py-3 text-sm">钢结构制造龙头，产量创纪录502万吨</td><td class="px-4 py-3 text-center font-bold text-green-600">+26%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">华荣股份</td><td class="px-4 py-3 text-sm font-mono">603855</td><td class="px-4 py-3 text-sm">防爆设备出口+26.2%，高压开关全球领先</td><td class="px-4 py-3 text-center font-bold text-green-600">+23%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">金河生物</td><td class="px-4 py-3 text-sm font-mono">002688</td><td class="px-4 py-3 text-sm">金霉素量价齐升，虾青素商业化</td><td class="px-4 py-3 text-center text-green-600">恢复至2.06亿</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">凯赛生物</td><td class="px-4 py-3 text-sm font-mono">688065</td><td class="px-4 py-3 text-sm">生物基长链二元酸全球龙头，50万吨项目在建</td><td class="px-4 py-3 text-center font-bold text-green-600">+43%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">柳工</td><td class="px-4 py-3 text-sm font-mono">000528</td><td class="px-4 py-3 text-sm">海外收入占比47.65%，电动装载机+130%</td><td class="px-4 py-3 text-center font-bold text-green-600">+23.3%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">洛阳钼业</td><td class="px-4 py-3 text-sm font-mono">603993</td><td class="px-4 py-3 text-sm">铜金双引擎，Q1经营现金流+762%</td><td class="px-4 py-3 text-center font-bold text-green-600">+25%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">普蕊斯</td><td class="px-4 py-3 text-sm font-mono">301257</td><td class="px-4 py-3 text-sm">SMO龙头，AI赋能临床试验，现金流改善34倍</td><td class="px-4 py-3 text-center font-bold text-green-600">+30%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">盐津铺子</td><td class="px-4 py-3 text-sm font-mono">002847</td><td class="px-4 py-3 text-sm">零食渠道驱动，Q1利润+29.5%</td><td class="px-4 py-3 text-center text-green-600">稳健增长</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">新产业</td><td class="px-4 py-3 text-sm font-mono">300832</td><td class="px-4 py-3 text-sm">海外化学发光+35%，国内V型底部恢复</td><td class="px-4 py-3 text-center font-bold text-green-600">+14.8%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">阳光电源</td><td class="px-4 py-3 text-sm font-mono">300274</td><td class="px-4 py-3 text-sm">光伏逆变器+储能双龙头，储能+54%</td><td class="px-4 py-3 text-center text-green-600">稳健增长</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">云图控股</td><td class="px-4 py-3 text-sm font-mono">002539</td><td class="px-4 py-3 text-sm">磷化工一体化，磷酸铁锂扩产</td><td class="px-4 py-3 text-center font-bold text-green-600">+50.8%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">中矿资源</td><td class="px-4 py-3 text-sm font-mono">002738</td><td class="px-4 py-3 text-sm">锂盐价格+108%，Q1利润+277%</td><td class="px-4 py-3 text-center font-bold text-green-600">高增长</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">长电科技</td><td class="px-4 py-3 text-sm font-mono">600584</td><td class="px-4 py-3 text-sm">半导体封测龙头，产品升级</td><td class="px-4 py-3 text-center font-bold text-green-600">+25%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">东方证券</td><td class="px-4 py-3 text-sm font-mono">600958</td><td class="px-4 py-3 text-sm">财富管理驱动，PB 0.93x安全边际</td><td class="px-4 py-3 text-center font-bold text-green-600">+10%</td></tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">咸亨国际</td><td class="px-4 py-3 text-sm font-mono">605056</td><td class="px-4 py-3 text-sm">非电战略部门+69.1%，人形机器人布局</td><td class="px-4 py-3 text-center font-bold text-green-600">+28%</td></tr>
    </tbody>
  </table>
</div>

<!-- ===== 投资主题 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、核心投资主题</h2>

<h3 id="sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">六大核心主题</h3>

<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-purple-800 font-bold mb-2">🔬 主题1：AI/半导体国产替代</h4>
    <p class="text-purple-900 text-sm mb-1"><strong>标的：</strong>海光信息（唯一双芯片平台）、安集科技（CMP抛光液）、彤程新材（光刻胶800%突破）、长电科技（先进封装）、强达电路（AI服务器PCB）、凯格精机（先进封装方案）</p>
    <p class="text-purple-700 text-sm"><strong>逻辑：</strong>云厂商资本开支超千亿，国产替代进入加速期</p>
  </div>

  <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-yellow-800 font-bold mb-2">🥇 主题2：贵金属/矿业高景气</h4>
    <p class="text-yellow-900 text-sm mb-1"><strong>标的：</strong>山金国际、赤峰黄金、洛阳钼业、中矿资源</p>
    <p class="text-yellow-700 text-sm"><strong>逻辑：</strong>金价持续高位，铜锂等战略金属供需偏紧，矿企利润弹性极大</p>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-green-800 font-bold mb-2">💊 主题3：创新药与医疗科技</h4>
    <p class="text-green-900 text-sm mb-1"><strong>标的：</strong>恒瑞医药（BD授权爆发）、毕得医药（分子砌块）、山外山（血透设备第一）、百奥赛图（人源化模型）、普蕊斯（AI+临床）</p>
    <p class="text-green-700 text-sm"><strong>逻辑：</strong>创新药审批加速，BD出海放量，AI赋能研发效率</p>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2">⚡ 主题4：储能与新能源转型</h4>
    <p class="text-blue-900 text-sm mb-1"><strong>标的：</strong>江波龙（存储爆发）、鼎胜新材（钠电铝箔）、阳光电源（储能+54%）、昱能科技（微逆+储能）、福斯特（光伏胶膜50%份额）</p>
    <p class="text-blue-700 text-sm"><strong>逻辑：</strong>AI拉动存储需求，储能成为光伏企业第二增长曲线</p>
  </div>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-orange-800 font-bold mb-2">🛒 主题5：消费复苏与龙头集中度提升</h4>
    <p class="text-orange-900 text-sm mb-1"><strong>标的：</strong>万辰集团（量贩零食爆发）、天味食品（调味品高增长）、匠心家居（出口龙头）、伊利股份（乳业底部反转）、海天味业（调味品稳健增长）</p>
    <p class="text-orange-700 text-sm"><strong>逻辑：</strong>消费分层，龙头以性价比和渠道优势持续抢占份额</p>
  </div>

  <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-emerald-800 font-bold mb-2">💰 主题6：高股息+回购回报</h4>
    <p class="text-emerald-900 text-sm mb-1"><strong>标的：</strong>美的集团（7%+收益率）、华荣股份（5.38%股息率）、伊利股份（75%+分红）、四川路桥（60%+分红承诺）</p>
    <p class="text-emerald-700 text-sm"><strong>逻辑：</strong>低利率环境下，高分红+回购提供确定性回报</p>
  </div>
</div>

<!-- ===== 全量清单 ===== -->
<h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、全量100篇研报清单</h2>

<h3 id="sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">100篇研报清单</h3>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="px-4 py-3 text-left">#</th>
        <th class="px-4 py-3 text-left">股票名称</th>
        <th class="px-4 py-3 text-left">代码</th>
        <th class="px-4 py-3 text-center">本方评级</th>
        <th class="px-4 py-3 text-left">券商评级</th>
        <th class="px-4 py-3 text-center">当前价</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-100 text-sm">
      <tr class="bg-purple-50"><td class="px-4 py-2">5</td><td class="px-4 py-2 font-bold">山外山</td><td class="px-4 py-2 font-mono">688410</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">关注</td><td class="px-4 py-2 text-center">16.31</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">7</td><td class="px-4 py-2 font-bold">万辰集团</td><td class="px-4 py-2 font-mono">300972</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">优于大市</td><td class="px-4 py-2 text-center">226.81</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">8</td><td class="px-4 py-2 font-bold">赤峰黄金</td><td class="px-4 py-2 font-mono">600988</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">38.00</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">17</td><td class="px-4 py-2 font-bold">毕得医药</td><td class="px-4 py-2 font-mono">688073</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">61.61</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">27</td><td class="px-4 py-2 font-bold">海光信息</td><td class="px-4 py-2 font-mono">688041</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">推荐</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">28</td><td class="px-4 py-2 font-bold">鼎胜新材</td><td class="px-4 py-2 font-mono">603876</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">32</td><td class="px-4 py-2 font-bold">恒瑞医药</td><td class="px-4 py-2 font-mono">600276</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">37</td><td class="px-4 py-2 font-bold">金晶科技</td><td class="px-4 py-2 font-mono">600586</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">61</td><td class="px-4 py-2 font-bold">江波龙</td><td class="px-4 py-2 font-mono">301308</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">73</td><td class="px-4 py-2 font-bold">美的集团</td><td class="px-4 py-2 font-mono">000333</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">-</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">79</td><td class="px-4 py-2 font-bold">天味食品</td><td class="px-4 py-2 font-mono">603317</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">17.13</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">86</td><td class="px-4 py-2 font-bold">匠心家居</td><td class="px-4 py-2 font-mono">603180</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">62.81</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">94</td><td class="px-4 py-2 font-bold">山金国际</td><td class="px-4 py-2 font-mono">000975</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">27.58</td></tr>
      <tr class="bg-purple-50"><td class="px-4 py-2">9</td><td class="px-4 py-2 font-bold">伊利股份</td><td class="px-4 py-2 font-mono">600887</td><td class="px-4 py-2 text-center font-bold text-purple-700">S</td><td class="px-4 py-2">买入</td><td class="px-4 py-2 text-center">27.46</td></tr>
      <tr class="bg-slate-50"><td class="px-4 py-2" colspan="6" class="text-center text-slate-500 font-semibold">... 其余86只标的（61只A级、24只B级、1只C级）详见完整清单 ...</td></tr>
      <tr class="bg-red-50"><td class="px-4 py-2">46</td><td class="px-4 py-2 font-bold text-red-700">龙芯中科</td><td class="px-4 py-2 font-mono">688047</td><td class="px-4 py-2 text-center font-bold text-red-700">C</td><td class="px-4 py-2">增持(下调)</td><td class="px-4 py-2 text-center">-</td></tr>
    </tbody>
  </table>
</div>

</div>`;
}
