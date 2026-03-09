// ==========================================
// 券商晨报内容模块 - 2026 年 3 月 9 日
// 基于 12 家券商晨报深度汇总
// ==========================================

function renderBrokerContent_0309() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部信息 -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
      <h1 class="text-2xl font-black text-slate-900 mb-4">2026-03-09 券商晨报买方汇总内参</h1>
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
          </svg>
          <span>报告日期：2026 年 03 月 09 日</span>
        </div>
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>覆盖券商：第一创业、万联、山西、东海、国信、金元、东吴、开源、中银、英大、东兴、华源等 12 家</span>
        </div>
      </div>
    </div>

    <!-- ==================== 核心摘要 ==================== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>核心摘要（3 分钟速读）</h2>

    <!-- 市场共识 -->
    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">市场共识</h3>
    <p class="text-slate-700 leading-relaxed my-4">
      各券商普遍认为 A 股短期震荡概率较大，但中期慢牛格局不改。中东地缘冲突推升油价和避险情绪，压制新兴市场风险偏好；国内两会政策定调符合预期，GDP 目标 4.5%-5% 为调结构留出空间。
    </p>

    <!-- 仓位建议 -->
    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">仓位建议</h3>
    <p class="text-slate-700 leading-relaxed my-4">
      多数券商建议保持中等偏上仓位（<strong>6-8 成</strong>），稳健型投资者可观望等待趋势明朗，激进型投资者可参与超跌科技股反弹，聚焦 AI 算力、半导体、人形机器人等政策支持方向。
    </p>

    <!-- 热门赛道 TOP5 -->
    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">热门赛道 TOP5</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">排名</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">行业</th>
            <th class="border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">推荐次数</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 font-black px-2 py-1 rounded">1</span></td>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">AI/算力/云计算</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">9 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">OpenClaw 带动算力需求激增，云厂商涨价验证需求旺盛</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 font-black px-2 py-1 rounded">2</span></td>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">半导体/集成电路</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-600">8 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">自主可控政策加持，存储涨价周期持续至 2028 年</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 font-black px-2 py-1 rounded">3</span></td>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">人形机器人</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">7 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">特斯拉 V3 即将发布，产业迈入"1-10"量产阶段</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 font-black px-2 py-1 rounded">4</span></td>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">石油石化/能源</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">6 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中东冲突推升油价，霍尔木兹海峡通航受阻</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 font-black px-2 py-1 rounded">5</span></td>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">低空经济/商业航天</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">5 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">首次写入政府工作报告，卫星互联网建设加速</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 金股 TOP10 -->
    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金股 TOP10（被多家券商同时推荐）</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">股票</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">代码</th>
            <th class="border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">推荐次数</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">推荐券商</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">中际旭创</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">300308</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">3 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东吴、中银、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">光模块龙头，AI 算力核心受益</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">寒武纪</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">688256</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">3 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源、东吴</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">国产 AI 芯片龙头</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">长川科技</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">300604</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东吴、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">半导体测试机，去日化受益</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">亨通光电</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">600487</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">光纤涨价超预期，量价齐升</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">迈瑞医疗</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">300760</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">医疗器械龙头，业绩稳健</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">璞泰来</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">603659</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东吴、第一创业</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">负极龙头，锂电排产大幅提升</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">贵州茅台</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">600519</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、中银</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">白酒龙头，估值修复</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">中国太保</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">601601</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、中银</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">保险负债端高景气</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">中兴通讯</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">000063</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、中银</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">5G+ 算力基础设施</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">拓普集团</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">601689</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2 次</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">华源、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">机器人关节总成核心供应商</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 宏观策略汇总 ==================== -->
    <h2 id="b_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>宏观策略汇总</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">券商</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">大盘判断</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">仓位建议</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">风格偏好</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">第一创业</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">震荡蓄势</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中等</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">科技成长</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">国内算力网投资超 7 万亿</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">万联证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">结构性慢牛</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">6-7 成</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">价值 + 成长</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">TV 面板涨价延续</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">山西证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">高质量发展</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中等偏上</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">新质生产力</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">GDP 目标 4.5-5% 为调结构留空间</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">东海证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">价值重估</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">7 成</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">周期 + 科技</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中东冲突推升油价</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">国信证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">慢牛格局</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">6-8 成</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">科技 + 周期</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">大类资产：股票&gt;大宗&gt;债券&gt;货币</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">开源证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">慢牛可期</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">7 成</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">科技 + 消费</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">A 股流动性冲击缓和</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">中银证券</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">结构性慢牛</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">6-7 成</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">科技 + 周期</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">科技 + 周期资源双主线</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 热门行业推荐榜 ==================== -->
    <h2 id="b_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>热门行业推荐榜</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">行业</th>
            <th class="border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">推荐次数</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">主要逻辑</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">推荐券商</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">AI/算力/云计算</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">9</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">OpenClaw 带动 Token 消耗量级跃迁；云厂商涨价验证需求</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">第一创业、东吴、开源、中银、英大、东兴</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">半导体/集成电路</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-600">8</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">自主可控政策加持；存储价格翻倍涨至 2028 年</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">万联、东吴、开源、中银、华源</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">人形机器人</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">7</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">特斯拉 V3 即将发布；产业迈入量产阶段</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、中银、英大、东兴、华源</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">石油石化/能源</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">6</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中东冲突推升油价；霍尔木兹海峡通航受阻</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东海、开源、中银、英大</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">低空经济/商业航天</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">5</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">首次写入政府工作报告；卫星互联网建设</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">山西、东吴、开源、中银、东兴</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">光纤/光通信</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-orange-600">5</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">光纤涨价超 650%；AIDC 建设驱动</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源、东吴</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">锂电/储能</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">4</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">3 月排产同比增 37-50%；璞泰来业绩恢复</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">第一创业、东吴、东兴</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 多家推荐个股 ==================== -->
    <h2 id="b_sec7" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>被多家券商同时推荐的个股</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">股票</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">代码</th>
            <th class="border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">推荐次数</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">推荐券商</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">中际旭创</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">300308</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">3</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东吴、中银、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">光模块龙头，800G 需求旺盛</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">寒武纪</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">688256</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold text-amber-600">3</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源、东吴</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">国产 AI 芯片龙头</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">长川科技</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">300604</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东吴、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">SoC 测试机龙头，去日化份额提升</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">亨通光电</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">600487</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银、开源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">光纤涨价超预期</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">绿的谐波</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">688017</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、华源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">机器人减速器核心供应商</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">五洲新春</td>
            <td class="border border-slate-200 px-4 py-3 text-sm text-slate-600">603667</td>
            <td class="border border-slate-200 px-4 py-3 text-center text-sm font-bold">2</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、华源</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">丝杠 + 轴承，机器人核心零部件</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 各券商金股组合 ==================== -->
    <h2 id="b_sec8" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>各券商 3 月金股组合</h2>

    <div class="grid gap-4 my-6">
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 class="font-bold text-slate-800 mb-2">中银证券</h4>
        <p class="text-sm text-slate-600">保利置业集团、中信海直、招商轮船、浙江龙盛、雅克科技、天赐材料、迈瑞医疗、巴比食品、颐海国际、中国中免、九号公司、芯碁微装</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 class="font-bold text-slate-800 mb-2">东兴证券</h4>
        <p class="text-sm text-slate-600">宁波银行、北京利尔、兴森科技、牧原股份、中矿资源、甘源食品、华测导航、中科海讯</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 class="font-bold text-slate-800 mb-2">开源证券</h4>
        <p class="text-sm text-slate-600">贵州茅台、山西汾酒、西麦食品、卫龙美味、甘源食品、中国太保、中国人寿、中国平安、华泰证券、国泰海通</p>
      </div>
    </div>

    <!-- ==================== 各行业详细观点 ==================== -->
    <h2 id="b_sec9" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>AI/算力/云计算</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>第一创业：</strong>Kimi 个人订阅订单爆发式增长，1 月环比增 8280%，2 月再增 123.8%</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>AI 应用从 Chat 向 Agent 进化，Token 消耗量级跃迁</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>OpenClaw 登顶 GitHub，腾讯云楼下千人排队安装</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>智算集群和卫星互联网建设大潮将至；推荐寒武纪、海光信息、中际旭创、新易盛</span></li>
    </ul>

    <h2 id="b_sec10" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>半导体/集成电路</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>万联证券：</strong>TV 面板价格延续涨势，2 月 32-75 英寸上涨 1-3 美元</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>长川科技作为 SoC 测试机龙头受益去日化</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>存储高景气度向上游扩散；三星 DRAM 合约价单季翻倍</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>"十五五"研发经费年均增 7% 以上；推荐北方华创、中微公司、拓荆科技</span></li>
    </ul>

    <h2 id="b_sec11" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>人形机器人</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>春晚后机器人板块调整，但特斯拉 V3 发布前是最佳布局时机</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>具身智能连续两年写入政府工作报告；2026 年是"1-10"关键跨越期</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券：</strong>春晚开播两小时京东机器人搜索量增 300%，订单量增 150%</span></li>
    </ul>

    <h2 id="b_sec12" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>石油石化/能源</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东海证券：</strong>中东事件升级，油价大幅上涨；关注油气资源储量价值标的</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>美以伊战事扰动全球能源化工供应链</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>油价冲击下滞胀预期抬头；周期资源品配置比例有望提升</span></li>
    </ul>

    <h2 id="b_sec13" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>低空经济/商业航天</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券：</strong>低空基础设施全链条推动；六大新兴支柱产业包括航空航天</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>卫星频轨资源争夺白热化；商业航天转变关键阶段</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>打造航空航天新兴支柱产业；关注火箭卫星零部件及 3D 打印</span></li>
    </ul>

    <h2 id="b_sec14" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>光纤/光通信</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券：</strong>G.652.D 光纤价格从 18 元/公里涨至 85-120 元/公里，涨幅近 650%</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>光纤和算力租赁涨价超预期；推荐亨通光电、中天科技</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>AI 算力需求激增驱动光模块；推荐中际旭创、新易盛、天孚通信</span></li>
    </ul>

    <h2 id="b_sec15" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>锂电/储能</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>第一创业：</strong>3 月锂电全产业链排产同环比大幅攀升，同比涨幅 37-50%</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券：</strong>璞泰来 2025 年报符合预期，目标价 39 元</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东兴证券：</strong>比亚迪发布第二代刀片电池，10% 充至 70% 仅需 5 分钟</span></li>
    </ul>

    <!-- ==================== 风险提示与分歧 ==================== -->
    <h2 id="b_sec16" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示与分歧点</h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">主要分歧</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">分歧点</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">多方观点</th>
            <th class="border border-slate-200 px-4 py-3 text-left text-sm font-black text-slate-700">空方观点</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">美联储降息时点</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">开源、第一创业：5 月新主席上任后或降息</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东海、中银：上半年不降息，通胀担忧仍存</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">油价走势</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东海、开源：中东冲突或致油价进一步飙升</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">中银：脉冲式影响可能性高，冲突或提前结束</td>
          </tr>
          <tr>
            <td class="border border-slate-200 px-4 py-3 text-sm font-bold">A 股节奏</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">东兴、国信：结构性慢牛，盈利修复驱动</td>
            <td class="border border-slate-200 px-4 py-3 text-sm">金元、英大：短期震荡概率大，量能不足是隐忧</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">共同风险提示</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>地缘政治风险：</strong>中东冲突局势发展超预期，霍尔木兹海峡长期封锁风险</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>通胀超预期：</strong>油价上涨引发全球再通胀，美联储政策收紧</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>政策落地不及预期：</strong>国内财政货币政策执行力度不足</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>技术进展不及预期：</strong>AI、机器人等新技术商业化进度放缓</span></li>
    </ul>

    <!-- ==================== 重点财经要闻 ==================== -->
    <h2 id="b_sec17" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>重点财经要闻汇总</h2>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>证监会两项新政：</strong>深化创业板改革，增设更精准包容上市标准；优化再融资机制，扶优扶科</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>央行货币政策：</strong>实施适度宽松货币政策，灵活高效运用降准降息工具</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>发改委六张网：</strong>水网、电网、算力网、新型通信网、城市地下管网、物流网，投资超 7 万亿</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>外汇储备：</strong>连续 7 个月增长，黄金储备连续 16 个月增加</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中美关系：</strong>外交部长王毅表示 2026 年是中美关系"大年"</span></li>
    </ul>

    <!-- 免责声明 -->
    <div class="bg-slate-100 rounded-xl p-4 my-6 text-center">
      <p class="text-xs text-slate-500">本报告基于各券商公开晨报整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
    </div>

  </div>`;
}
