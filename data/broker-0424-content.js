// ==========================================
// 券商晨报内容模块 - 2026 年 4 月 24 日
// 基于 11 家券商晨会纪要（4 月 23 日数据）
// ==========================================

function renderBrokerContent_0424() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部信息 -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
      <h1 class="text-2xl font-black text-slate-900 mb-4">2026-04-24 券商晨报买方汇总内参</h1>
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
          </svg>
          <span>报告日期：2026 年 04 月 24 日</span>
        </div>
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>覆盖券商：华源、开源、中银、东兴、国信、第一创业、东海、英大、山西、万联等 11 家</span>
        </div>
      </div>
    </div>

    <!-- ==================== 市场核心观点 ==================== -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>市场核心观点</h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">大盘走势与科技主线</h3>
    <p class="text-slate-700 leading-relaxed my-4">
      大盘走出<strong>五连阳</strong>，沪指收复 <strong>4100</strong> 点收于 4106.26（+0.52%），深成指 +1.30%，创业板指 +1.73%，两市成交 <strong>2.56 万亿</strong>。科技赛道全面领涨，通信、电子、半导体板块涨幅居前，CPO/光模块概念受北美 AI 资本开支激增催化持续走强。
    </p>

    <blockquote class="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl p-4 my-4 text-slate-700">
      <strong>券商共识：</strong>科技主线（AI 算力 + 半导体）确定性最高，短期警惕 4100 上方压力位及业绩披露尾声的个股风险，结构上聚焦业绩确定性强的低估值板块和高景气赛道。
    </blockquote>

    <!-- ==================== 行业推荐共识榜 ==================== -->
    <h2 id="b_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>行业推荐共识榜 TOP10</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-center text-sm font-black">排名</th>
            <th class="px-4 py-3 text-left text-sm font-black">行业方向</th>
            <th class="px-4 py-3 text-center text-sm font-black">推荐券商</th>
            <th class="px-4 py-3 text-left text-sm font-black">主要逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white font-black px-2 py-1 rounded-full text-xs">1</span></td>
            <td class="px-4 py-3 text-sm font-bold text-amber-900">半导体/芯片</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-amber-600">7 家</td>
            <td class="px-4 py-3 text-sm">国产替代不可逆 + 大基金三期催化 + 存储涨价 + 硅片周期筑底</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white font-black px-2 py-1 rounded-full text-xs">2</span></td>
            <td class="px-4 py-3 text-sm font-bold text-amber-900">AI 算力/光通信</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-amber-600">6 家</td>
            <td class="px-4 py-3 text-sm">北美 AI 资本开支激增，光模块订单排至 2028 年，CPO 技术升级</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white font-black px-2 py-1 rounded-full text-xs">3</span></td>
            <td class="px-4 py-3 text-sm font-bold text-orange-900">液冷/温控</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-orange-600">4 家</td>
            <td class="px-4 py-3 text-sm">高功率算力芯片及超节点机柜放量，液冷替代风冷成产业趋势</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white font-black px-2 py-1 rounded-full text-xs">4</span></td>
            <td class="px-4 py-3 text-sm font-bold text-orange-900">新能源/储能</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-orange-600">4 家</td>
            <td class="px-4 py-3 text-sm">节能降碳政策强化，新型电力系统建设加速，储能需求景气</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">5</span></td>
            <td class="px-4 py-3 text-sm font-bold">消费电子/元件</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">AI 赋能新硬件，覆铜板及上游材料全面涨价</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">6</span></td>
            <td class="px-4 py-3 text-sm font-bold">医药生物/医疗器械</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">Q1 业绩快速增长，CMEF 展会显示 AI 赋能全流程</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">7</span></td>
            <td class="px-4 py-3 text-sm font-bold">化工</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">氨纶/己二酸/聚氨酯景气修复，万华化学业绩超预期</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">8</span></td>
            <td class="px-4 py-3 text-sm font-bold">券商/非银金融</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">头部券商估值底部（PE~10x），Q1 业绩超预期</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">9</span></td>
            <td class="px-4 py-3 text-sm font-bold">游戏传媒/AI 应用</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">Q1 游戏市场收入同比+13%，国产模型能力跃升</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">10</span></td>
            <td class="px-4 py-3 text-sm font-bold">房地产</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">2 家</td>
            <td class="px-4 py-3 text-sm">成交面积同比转正，"小阳春"行情，政策博弈机会</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 公募 Q1 重仓股 ==================== -->
    <h2 id="b_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>公募基金 Q1 前十大重仓股</h2>

    <p class="text-slate-700 leading-relaxed my-4">
      公募基金一季报 91% 披露率，前十大重仓股（按持仓集中度排序）：
    </p>

    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>公募 Q1 十大重仓
      </h4>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.1</div>
          <div class="font-bold text-purple-900 text-sm mt-1">中际旭创</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.2</div>
          <div class="font-bold text-purple-900 text-sm mt-1">宁德时代</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.3</div>
          <div class="font-bold text-purple-900 text-sm mt-1">新易盛</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.4</div>
          <div class="font-bold text-purple-900 text-sm mt-1">腾讯控股</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.5</div>
          <div class="font-bold text-purple-900 text-sm mt-1">贵州茅台</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.6</div>
          <div class="font-bold text-purple-900 text-sm mt-1">东山精密</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.7</div>
          <div class="font-bold text-purple-900 text-sm mt-1">紫金矿业</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.8</div>
          <div class="font-bold text-purple-900 text-sm mt-1">阿里巴巴-W</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.9</div>
          <div class="font-bold text-purple-900 text-sm mt-1">药明康德</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <div class="text-xs text-slate-500 font-bold">No.10</div>
          <div class="font-bold text-purple-900 text-sm mt-1">立讯精密</div>
        </div>
      </div>
      <div class="mt-4 bg-purple-100 rounded-lg p-3">
        <p class="text-purple-900 text-sm font-bold">变化：药明康德新进前十大，寒武纪退出前十大</p>
      </div>
    </div>

    <!-- ==================== 券商金股推荐 ==================== -->
    <h2 id="b_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>各券商金股推荐汇总</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-black">股票</th>
            <th class="px-4 py-3 text-left text-sm font-black">代码</th>
            <th class="px-4 py-3 text-center text-sm font-black">推荐次数</th>
            <th class="px-4 py-3 text-left text-sm font-black">推荐来源</th>
            <th class="px-4 py-3 text-left text-sm font-black">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
            <td class="px-4 py-3 text-sm text-slate-600">300750</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">3</td>
            <td class="px-4 py-3 text-sm">中银 4 月金股 + 公募重仓 + 国信快评</td>
            <td class="px-4 py-3 text-sm">产品全面升级，技术创新夯实龙头优势，储能需求景气</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">贵州茅台</td>
            <td class="px-4 py-3 text-sm text-slate-600">600519</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">3</td>
            <td class="px-4 py-3 text-sm">中银 4 月金股 + 公募重仓 + 中银深度</td>
            <td class="px-4 py-3 text-sm">卸下包袱着眼长期，2026 年 i 茅台改革开启新篇章</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">中际旭创</td>
            <td class="px-4 py-3 text-sm text-slate-600">300502</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">3</td>
            <td class="px-4 py-3 text-sm">公募重仓第 1 + 山证重点 + 万联提及</td>
            <td class="px-4 py-3 text-sm">Q1 营收 195 亿(+192%)、净利 57 亿(+262%)，光模块龙头</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中远海特</td>
            <td class="px-4 py-3 text-sm text-slate-600">600428</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">中银 4 月金股 + 东兴金股</td>
            <td class="px-4 py-3 text-sm">特种航运龙头</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">万华化学</td>
            <td class="px-4 py-3 text-sm text-slate-600">600309</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">开源重点推荐 + 国信化工</td>
            <td class="px-4 py-3 text-sm">MDI 巨头，至暗时刻已过，全球稳定供应，26 年 PE 仅 15.6 倍</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">英维克</td>
            <td class="px-4 py-3 text-sm text-slate-600">002837</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">华源液冷推荐 + 开源重点推荐</td>
            <td class="px-4 py-3 text-sm">液冷龙头，沉潜蓄势看好下半年兑现</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">开立医疗</td>
            <td class="px-4 py-3 text-sm text-slate-600">300633</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">东海买入 + 国信财报点评</td>
            <td class="px-4 py-3 text-sm">内镜业务快速增长，业绩企稳向好，市占国内第三</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">华峰化学</td>
            <td class="px-4 py-3 text-sm text-slate-600">002064</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">开源推荐 + 东兴强烈推荐</td>
            <td class="px-4 py-3 text-sm">氨纶/己二酸龙头，景气修复，26 年 PE 仅 24 倍</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">飞荣达</td>
            <td class="px-4 py-3 text-sm text-slate-600">300602</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">2</td>
            <td class="px-4 py-3 text-sm">国信 AI 基建 + 山证液冷</td>
            <td class="px-4 py-3 text-sm">液冷 + 散热 + 机器人多概念</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">卫星化学</td>
            <td class="px-4 py-3 text-sm text-slate-600">002648</td>
            <td class="px-4 py-3 text-center text-sm font-bold">1</td>
            <td class="px-4 py-3 text-sm">中银 4 月金股</td>
            <td class="px-4 py-3 text-sm">轻烃一体化龙头</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">巨人网络</td>
            <td class="px-4 py-3 text-sm text-slate-600">002558</td>
            <td class="px-4 py-3 text-center text-sm font-bold">1</td>
            <td class="px-4 py-3 text-sm">华源首次覆盖买入</td>
            <td class="px-4 py-3 text-sm">《超自然行动组》DAU 破千万，2026-27 年净利预计 44/53 亿</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">恒立液压</td>
            <td class="px-4 py-3 text-sm text-slate-600">601100</td>
            <td class="px-4 py-3 text-center text-sm font-bold">1</td>
            <td class="px-4 py-3 text-sm">国信 4 月金股</td>
            <td class="px-4 py-3 text-sm">工程机械液压龙头，受益出海 + 机器人</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">沪电股份</td>
            <td class="px-4 py-3 text-sm text-slate-600">002463</td>
            <td class="px-4 py-3 text-center text-sm font-bold">1</td>
            <td class="px-4 py-3 text-sm">东兴业绩点评</td>
            <td class="px-4 py-3 text-sm">Q1 净利 12.42 亿(+63%)，AI 服务器 PCB 受益</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 华源证券 ==================== -->
    <h2 id="b_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>华源证券 -- 国产超节点大势所趋</h2>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>核心观点
      </h4>
      <p class="text-amber-900 leading-relaxed">
        国内 AI 大模型进入加速发展期，3 月中国 AI 大模型周调用量 <strong>12.96 万亿 Token</strong>（+31.48%），通义千问 Qwen3.6Plus 以 <strong>4.6 万亿 Token</strong> 周调用量全球第一。超节点凭借高密度集成、高速互联、全局协同优势，有望成为智算中心核心部署形态。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">重点标的推荐</h4>
    <div class="grid gap-3 my-4">
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h5 class="font-bold text-slate-800 mb-1">国产芯片</h5>
        <p class="text-sm text-slate-600">寒武纪、海光信息</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h5 class="font-bold text-slate-800 mb-1">ODM 厂</h5>
        <p class="text-sm text-slate-600">浪潮信息、中科曙光</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h5 class="font-bold text-slate-800 mb-1">IDC</h5>
        <p class="text-sm text-slate-600">润泽科技</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h5 class="font-bold text-slate-800 mb-1">液冷</h5>
        <p class="text-sm text-slate-600">英维克</p>
      </div>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">其他推荐</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>巨人网络：</strong>首次覆盖买入，《超自然行动组》DAU 破千万，2026-27 年净利预计 44/53 亿</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>基建出海：</strong>中国电建、中国能建</span></li>
    </ul>

    <!-- ==================== 开源证券 ==================== -->
    <h2 id="b_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>开源证券 -- 重点推荐头部券商超额机会</h2>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>券商板块核心逻辑
      </h4>
      <p class="text-emerald-900 leading-relaxed">
        券商板块动态 PE 仅 <strong>10 倍</strong>处于历史底部，2026Q1 业绩超预期有望催化估值修复，预计 2026 年扣非净利润同比 <strong>+16%</strong>。财富管理、海外扩表、科创投行三大叙事带来 <strong>15% 以上 CAGR</strong> 长期增长。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">重点推荐</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中信证券、中金公司 H、华泰证券、广发证券、国信证券、同花顺</strong></span></li>
    </ul>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">其他亮点</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>万华化学：</strong>买入，26 年 PE 仅 15.6 倍，MDI 全球龙头</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>英维克：</strong>液冷龙头买入评级，沉潜蓄势看好下半年兑现</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>生猪养殖：</strong>能繁边际回落去化确立</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>保险：</strong>推荐中国太保、中国平安</span></li>
    </ul>

    <!-- ==================== 中银证券 ==================== -->
    <h2 id="b_sec7" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>中银证券 -- 4 月金股组合 + 改革主题</h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4 月金股</h3>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 my-4">
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">保利置业</div>
        <div class="font-bold text-sm text-slate-800 mt-1">0119.HK</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">中远海特</div>
        <div class="font-bold text-sm text-slate-800 mt-1">600428</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">极兔速递</div>
        <div class="font-bold text-sm text-slate-800 mt-1">1519.HK</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">卫星化学</div>
        <div class="font-bold text-sm text-slate-800 mt-1">002648</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">宁德时代</div>
        <div class="font-bold text-sm text-slate-800 mt-1">300750</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">贵州茅台</div>
        <div class="font-bold text-sm text-slate-800 mt-1">600519</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">雅克科技</div>
        <div class="font-bold text-sm text-slate-800 mt-1">002409</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">天士力</div>
        <div class="font-bold text-sm text-slate-800 mt-1">600535</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">科锐国际</div>
        <div class="font-bold text-sm text-slate-800 mt-1">300662</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center">
        <div class="text-xs text-slate-500">海星股份</div>
        <div class="font-bold text-sm text-slate-800 mt-1">603115</div>
      </div>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">贵州茅台深度分析</h3>
    <p class="text-slate-700 leading-relaxed my-4">
      2025 年营收 1688 亿（-1.2%），上市以来首次年度负增长；卸下包袱主动调整，2026 年 i 茅台改革开启新篇章，维持买入评级。
    </p>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宏观视角与房地产</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>居民时间利用调查：</strong>揭示"投资于人"逻辑，关注财产性收入提升和服务消费释放</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>房地产：</strong>新房/二手房成交同比转正，关注"4 月底政治局-5 月部委细则"政策博弈机会</span></li>
    </ul>

    <!-- ==================== 东兴证券 ==================== -->
    <h2 id="b_sec8" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>东兴证券 -- 4 月金股 + 科技主线</h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4 月金股</h3>
    <p class="text-slate-700 leading-relaxed my-4">
      北京利尔、中矿资源、甘源食品、江丰电子、华鲁恒升、亨通光电、中国国航、浙江仙通、日联科技
    </p>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新闻聚焦</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>经济日报：</strong>"用好词元优势"，中国模型周调用量首次超过美国</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>财政部：</strong>香港发行 155 亿国债（认购 4.6 倍）</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>广州 GDP：</strong>一季度 +6% 跑赢全国</span></li>
    </ul>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业研报</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>快递行业：</strong>反内卷支撑价格端</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>华峰化学：</strong>景气修复，强烈推荐</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>沪硅产业：</strong>营收逐季攀升</span></li>
    </ul>

    <!-- ==================== 国信证券 ==================== -->
    <h2 id="b_sec9" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>国信证券 -- 基金加仓通信电新化工</h2>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>公募一季报调仓方向
      </h4>
      <p class="text-blue-900 leading-relaxed">
        26Q1 基金集中加仓：<strong>通信（+1.8pct）</strong>、<strong>电力设备（+1.5pct）</strong>、<strong>基础化工（+1.3pct）</strong>；减仓：电子（-2.3pct）、汽车（-1.0pct）。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">机械策略 -- 4 月金股</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      推荐恒立液压、杰瑞股份、万泽股份、优利德、普源精电、鼎阳科技、飞荣达；重点方向：AI 基建（燃气轮机 + 液冷 + 光通信设备）
    </p>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">医药周报</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      CMEF 展会显示 AI 赋能全流程，关注迈瑞医疗、联影医疗、鱼跃医疗
    </p>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">传媒行业</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      把握游戏潮玩及 AI 应用底部机会，完美世界《异环》4/23 公测
    </p>

    <!-- ==================== 山西证券 ==================== -->
    <h2 id="b_sec10" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>山西证券 -- 覆铜板涨价 + 光通信扩散</h2>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥</span>覆铜板涨价潮
      </h4>
      <p class="text-red-900 leading-relaxed">
        覆铜板及上游材料全面涨价：<strong>Resonac 涨 30%</strong>、<strong>三菱涨 30%</strong>、<strong>建滔涨 10%</strong>，供需紧张格局维持到 <strong>2027 年</strong>。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">光通信扩散方向</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      中际旭创 Q1 超预期，Lumentum 订单排至 2028 年；关注"小光"扩散方向：高速光芯片、CPO/NPO 配套、光模块液冷、制造检测设备
    </p>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">国产算力</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      DeepSeek v4 有望原生适配国产算力，关注超节点交换芯片、IOD chiplet、高速网卡
    </p>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">个股点评</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>伟星股份：</strong>买入，全年派息率 91%</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>长虹华意：</strong>买入，Q1 利润大超预期</span></li>
    </ul>

    <!-- ==================== 东海证券 ==================== -->
    <h2 id="b_sec11" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>东海证券 -- 券商并购 + 储能 + 医药</h2>

    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>资本市场：</strong>东方证券收购上海证券 100% 股权，整合后总资产近 6000 亿进前十，冲刺一流投行</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>储能：</strong>双良节能拟定增不超 12 亿加码储能业务</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>医药：</strong>开立医疗买入评级，内镜业务市占国内第三</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>新材料：</strong>华润材料瓶片毛利修复，新材料业务成增长引擎</span></li>
    </ul>

    <!-- ==================== 其他券商 ==================== -->
    <h2 id="b_sec12" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>其他券商晨报精要</h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">英大证券（惠祥凤） -- 五连阳下的结构性隐忧</h3>
    <blockquote class="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl p-4 my-4 text-slate-700">
      大盘五连阳收复 4100 点，科技赛道活跃；但需警惕上涨结构失衡、业绩不达预期个股、4100 上方密集成交区压力。不宜盲目追高，重点关注业绩主线，规避前期涨幅过高题材股。半导体长期向好逻辑不变，国产替代进入不可逆加速通道，逢低关注具备业绩亮点的个股。
    </blockquote>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">第一创业证券（刘笑瑜） -- 存储高景气 + 新能源</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>SK 海力士：</strong>Q3 营业利润率 47%，2026 年全产品 100% 被客户长单锁定，3-5 年长单已达 90%，存储高景气维持</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>节能降碳：</strong>节能降碳意见印发，新能源和电网设备产业链景气度持续提升</span></li>
    </ul>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">万联证券 -- 专精特新并购 + 服务业扩能</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>策略：</strong>专精特新"小巨人"并购重组活跃，电子/机械/半导体/化工为主方向，粤港澳大湾区整合活跃</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>通信：</strong>国务院推进服务业扩能提质，关注生产性服务业数智化升级</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>游戏：</strong>2026Q1 国内游戏市场收入 972 亿（同比+13.4%），跨端产品成增长主引擎</span></li>
    </ul>

    <!-- ==================== 风险提示 ==================== -->
    <h2 id="b_sec13" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示（六大风险）</h2>

    <div class="grid gap-4 my-6">
      <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-xl">
        <h4 class="text-red-800 font-black mb-2 flex items-center"><span class="mr-2">1.</span>地缘政治风险</h4>
        <p class="text-red-900 text-sm">美伊停火前景不确定，霍尔木兹海峡通航风险可能推升油价（布伦特原油已升至 <strong>101.55 美元/桶</strong>）</p>
      </div>
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
        <h4 class="text-orange-800 font-black mb-2 flex items-center"><span class="mr-2">2.</span>业绩披露风险</h4>
        <p class="text-orange-900 text-sm">年报与一季报密集披露进入尾声，业绩不达预期个股可能拖累市场</p>
      </div>
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
        <h4 class="text-orange-800 font-black mb-2 flex items-center"><span class="mr-2">3.</span>结构性失衡风险</h4>
        <p class="text-orange-900 text-sm">权重股拉升指数能否持久存疑，<strong>4100 点上方</strong>为前期密集成交区，短期或有压力</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">4.</span>政策落地不及预期</h4>
        <p class="text-yellow-900 text-sm">房地产政策加力、节能降碳执行效果需持续观察</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">5.</span>科技板块分化风险</h4>
        <p class="text-yellow-900 text-sm">半导体/光通信等板块连续上涨后可能出现分化，需警惕纯概念炒作、缺乏业绩支撑的高位题材股</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">6.</span>海外市场波动</h4>
        <p class="text-yellow-900 text-sm">美联储降息路径不明朗（沃什听证会三条线索待观察），美股科技股估值高位</p>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="bg-slate-100 rounded-xl p-4 my-6 text-center">
      <p class="text-xs text-slate-500">本报告基于 2026 年 4 月 23 日各券商晨会纪要综合整理，仅供参考，不构成投资建议。</p>
    </div>

  </div>`;
}
