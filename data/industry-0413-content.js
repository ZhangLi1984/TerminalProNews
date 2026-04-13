// ==========================================
// 行业研究模块内容 - 2026-04-13（行研总监 + CIO 深度融合）
// ==========================================

function renderIndustryContent_0413() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 核心总览 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、核心总览</h2>

    <h3 id="i_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宏观叙事主轴：能源危机与AI军备竞赛的"双螺旋"</h3>

    <p class="text-slate-800 leading-relaxed mb-4">当前市场的宏观驱动呈现罕见的<strong>"双螺旋"结构</strong>，两条主线看似独立但底层逻辑统一——<strong>全球供应链的不可逆重构</strong>。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
        <h4 class="text-orange-800 font-bold mb-2 flex items-center"><span class="mr-2">⛽</span>第一条螺旋：地缘驱动的能源危机链</h4>
        <p class="text-orange-900 text-sm">中东冲突持续升级 → 霍尔木兹海峡航运实质性停滞 → 布伦特原油132.45美元/桶 → 卡塔尔LNG综合体停产（不可抗力） → 亚洲LNG价格暴涨70% → "气转煤"燃料切换 → 国内煤价上行（秦港Q5500 761元，目标800-860元）</p>
      </div>
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-2 flex items-center"><span class="mr-2">💻</span>第二条螺旋：AI算力军备竞赛</h4>
        <p class="text-blue-900 text-sm">英伟达GTC 2026发布Vera Rubin → 2026年全球AI基础设施支出4500亿美元 → 推理算力占比首超70% → Lumentum CEO确认产能至2028年售罄 → 中国AI大模型周调用量12.96万亿Token（环比+31.48%）</p>
      </div>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察：市场定位判断</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>市场不在牛熊的任一端，而在"旧范式崩塌、新范式未确立"的过渡期。</strong> 沪深300本周+4.41%，但半导体板块-14.87%、电子-13.51%，资金在高估值成长与低估值价值之间剧烈切换。这不是牛市也不是熊市，而是<strong>结构性资金大迁徙</strong>。在这个阶段，最大的错误是线性外推——能源危机不会短期结束，AI军备竞赛不会突然刹车。投资策略必须以"结构性、非对称"为核心。</p>
    </div>

    <h3 id="i_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业景气度排序</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">排序</th>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">景气度</th>
            <th class="px-4 py-3 text-left">核心驱动</th>
            <th class="px-4 py-3 text-center">拥挤度</th>
            <th class="px-4 py-3 text-center">推荐策略</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">1</td>
            <td class="px-4 py-3 font-bold text-red-900">储能/锂电</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">极高</span></td>
            <td class="px-4 py-3 text-sm">全球储能2026年+60%至1024GWh，产能利用率90%</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">中</span></td>
            <td class="px-4 py-3 text-center font-bold text-red-900">超配</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold">2</td>
            <td class="px-4 py-3 font-bold text-orange-900">光模块/AI通信</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">极高</span></td>
            <td class="px-4 py-3 text-sm">Lumentum产能售罄至2028年，Token调用量+31%/周</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">高</span></td>
            <td class="px-4 py-3 text-center font-bold text-orange-900">逢低加仓</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">3</td>
            <td class="px-4 py-3 font-bold text-green-900">煤炭</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">高</span></td>
            <td class="px-4 py-3 text-sm">秦港Q5500 761元，目标800-860元，进口煤倒挂</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">极低</span></td>
            <td class="px-4 py-3 text-center font-bold text-green-900">底部布局</td>
          </tr>
          <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
            <td class="px-4 py-3 font-bold">4</td>
            <td class="px-4 py-3 font-bold text-teal-900">CXO/医药</td>
            <td class="px-4 py-3 text-center"><span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded-full">中高</span></td>
            <td class="px-4 py-3 text-sm">2026Q1中国医疗投融资+81.5%，地缘风险出清</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">低</span></td>
            <td class="px-4 py-3 text-center font-bold text-teal-900">左侧配置</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold">5</td>
            <td class="px-4 py-3 font-bold text-blue-900">半导体</td>
            <td class="px-4 py-3 text-center"><span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded-full">中高</span></td>
            <td class="px-4 py-3 text-sm">全球销售+61.74%，但估值PE 83.97%分位偏高</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">极高</span></td>
            <td class="px-4 py-3 text-center font-bold text-blue-900">结构性精选</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 核心高胜率赛道 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、核心高胜率赛道：共识与验证</h2>

    <h3 id="i_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">赛道一：储能/锂电 —— 全球能源危机下刚性需求爆发</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>硬核数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>2026年全球储能出货量预计1024GWh，同比+60%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>中国大储装机265GWh+（+63%），美国191GWh（+27%），欧洲157GWh（+70%）</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>储能产能利用率高达90%（宁德时代91%、亿纬锂能100%、海辰93%）</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>280Ah储能电芯价格由0.35元/Wh上涨至0.39元/Wh+，价格底部抬升</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>龙头储能电芯IRR高出小厂8-10pct（龙头18% vs 小厂10%），加速市占率集中</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>固态电池2027年小批量装车，2030年突破100GWh，电解质市场空间2030年达750亿元</span></li>
      </ul>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察：储能暗线——固态电池材料链的从0到1</h4>
      <p class="text-red-900 text-sm leading-relaxed">市场共识是买储能电池龙头（宁德时代、亿纬锂能），但<strong>更大的机会在固态电池</strong>：2027年小批量装车，2030年硫化物电解质市场750亿元，配套设备端1275亿元。这是从0到1的市场，估值无法用PE锚定，应该用"渗透率x市场空间"的框架。在储能确定性的基础上，提前布局固态电池新材料链，享受从主题到产业化的估值跃迁。</p>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-blue-800 font-bold mb-2 flex items-center">📅 证伪/跟踪指标</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>每月储能招标/并网数据（1月并网10.9GWh，同比+95%）</span></li>
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>碳酸锂价格走势（涨价2万影响1分/Wh）</span></li>
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>美国OBBA法案落地后储能需求增速是否如预期放缓</span></li>
      </ul>
    </div>

    <p class="text-slate-800 font-semibold">重点推荐标的：宁德时代（动力605GWh+储能175GWh）、阳光电源（逆变器权重10.39%）、亿纬锂能（储能115GWh，"Mr.Big" 628Ah大电芯率先量产）</p>

    <h3 id="i_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">赛道二：AI光互联/算力 —— 军备竞赛的"卖水人"</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>硬核数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>Lumentum CEO确认产能到2028年售罄，订单为不可取消协议；过去两年日本工厂产能扩大12倍，计划追加1-2.5亿美元扩产</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>中国AI大模型周调用量12.96万亿Token，环比+31.48%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>四大云厂商2025全年资本开支：亚马逊+66%、谷歌+74%、微软+50%、Meta+86%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>腾讯云宣布5月9日起AI算力相关产品涨价5%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span>阿里HappyHorse-1.0登顶视频模型盲测，智谱GLM-5.1超越Claude Opus 4.6</span></li>
      </ul>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察：光芯片国产替代的"时间窗口"</h4>
      <p class="text-red-900 text-sm leading-relaxed">市场共识是买光模块龙头（中际旭创、新易盛），但<strong>二阶推演指向光芯片和半导体材料</strong>。Lumentum的产能瓶颈不是技术问题，是制造产能的物理限制，这意味着国产光芯片厂商有2-3年的追赶窗口。源杰科技公募持仓超100亿元说明机构已经注意到，但共识度仍然不够。鼎龙股份300吨光刻胶投产，填补ArF/KrF国内空白，这是AI算力+地缘政治双重催化下"不得不替"的逻辑。<strong>光芯片和半导体材料的国产替代，是AI算力主线中弹性最大、共识最低的方向。</strong></p>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-blue-800 font-bold mb-2 flex items-center">📅 证伪/跟踪指标</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>Lumentum季度财报及产能扩充进度</span></li>
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>中国AI大模型Token调用量周度增速</span></li>
        <li class="py-1.5 flex items-start text-blue-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>云厂商资本开支指引变化</span></li>
      </ul>
    </div>

    <p class="text-slate-800 font-semibold">重点推荐标的：中际旭创（全球光模块龙头）、新易盛（800G核心供应商）、天孚通信（光器件精密制造）、源杰科技（光芯片国产龙头，公募持仓超100亿元）</p>

    <h3 id="i_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">赛道三：半导体（结构性机会）—— AI驱动但拥挤度极高</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>硬核数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span>2026年2月全球半导体销售额同比+61.74%，1-2月累计+53.79%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span>2025年全球晶圆代工产值+26.3%创新高，前十大代工厂合计1695亿美元</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span>公募基金2025Q4持仓半导体市值占比13.18%，TOP20持仓占比87.76%，拥挤度极高</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span>估值PE处于历史5年83.97%分位、PS 89.01%、PB 71.57%</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>风险信号</strong>：IDC预测2026年手机销量-12.9%、PC-11.3%；全球智能面板出货-7.3%</span></li>
      </ul>
    </div>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-amber-800 font-bold mb-2 flex items-center">⚠️ 拥挤度警报</h4>
      <p class="text-amber-900 text-sm leading-relaxed">半导体板块本周-14.87%，电子-13.51%，显示资金在高估值成长与低估值价值之间剧烈切换。寒武纪公募持仓804亿元拥挤度极高，建议逢高减仓至1%。结构性机会在于：<strong>AI算力芯片（海光信息）、存储（德明利、江波龙）、设备/材料国产替代（北方华创、中微公司）</strong>。消费电子承压，需回避手机/PC产业链。</p>
    </div>

    <p class="text-slate-800 font-semibold">推荐标的：AI算力芯片（寒武纪804亿、海光信息465亿）、存储（江波龙、德明利3月涨幅+48.51%、佰维存储）、设备/材料（北方华创284亿、中微公司324亿）</p>

    <h3 id="i_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">赛道四：煤炭/煤化工 —— 周期与红利双逻辑的"被遗忘的阿尔法"</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>硬核数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>秦港Q5500 761元/吨（已修复至煤电盈利均分线750元附近），目标800-860元</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>进口煤价格倒挂加剧（国内-进口价差-49.1元/吨），大秦线春检导致北方港口去库</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>煤炭PE仅18.4倍（全行业倒数第6）、PB 1.48倍（倒数第8），持仓处于历史低位</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span>中报6家上市煤企发布中期分红方案——周期弹性+红利逻辑双重属性</span></li>
      </ul>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察：煤化工全面重估——市场只看到了"煤"，没看到"化"</h4>
      <p class="text-red-900 text-sm leading-relaxed">市场共识是买煤炭股赌煤价上涨，但<strong>当油价132美元时，煤化工的经济性被严重低估</strong>。煤制甲醇、煤制烯烃、煤制乙二醇的成本优势急剧放大。甲醇价格指数3146（周+116点），醋酸4761（周+1116点！）——醋酸一周涨1116点，这是供需极度失衡的信号。新疆煤化工企业满负荷生产，"富煤贫油少气"的能源禀赋在极端油价下被重新定价。<strong>煤化工企业的利润弹性远大于纯煤炭企业。</strong>市场给煤炭18倍PE，但煤化工的利润增速可能远超煤炭本身。</p>
    </div>

    <p class="text-slate-800 font-semibold">推荐标的：纯煤炭（中国神华、陕西煤业、晋控煤业、兖矿能源）；煤化工（广汇能源-煤制气+煤制油双轮驱动、宝丰能源-煤制烯烃龙头、神火股份-铝+煤双主业）</p>

    <!-- 预期差与困境反转 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>三、预期差与困境反转</h2>

    <h3 id="i_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">CXO/医药外包 —— 被严重低估的景气反转</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>2026Q1中国医疗健康投融资338.63亿元（同比+81.5%），全球1708.94亿元（+15.2%）</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>2025年前三季度CXO板块收入695.7亿元（+13.0%），归母净利润165.4亿元（+60.0%）</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>2025年北美及欧洲新开临床试验4297项（达2021年历史高水平）</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>FY2026 NDAA已颁布，从直接影响范围和实际影响周期来看"影响有限"</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span><span>美联储降息周期：联邦基金利率预测中值3.4%（2026年），进一步降息预期利好医药投融资</span></li>
      </ul>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察：恐惧定价 vs 基本面回暖</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>第一性原理</strong>：CXO的需求来自药企的研发活动，研发活动来自资金。资金在涌入（投融资+81.5%），需求在恢复，这是最底层的逻辑。<strong>市场仍被2024年生物安全法案的阴影笼罩，对地缘政治风险过度定价。</strong>但基本面已全面回暖：药明康德贡献76%的利润，龙头与CDMO业绩高增，临床CRO企稳。这是典型的"恐惧定价+基本面回暖"预期差，CXO板块处于"风险出清+双轮驱动"的景气上行周期起点。</p>
    </div>

    <p class="text-slate-800 font-semibold">推荐标的：药明康德、凯莱英、康龙化成、泰格医药</p>

    <h3 id="i_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">光伏 —— 供给侧出清拐点已至，但市场仍在绝望</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">📊</span>数据支撑</h4>
      <ul class="space-y-1.5">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>硅料开工率已降至37%低位，各环节产能扩张全面停止</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>能耗标准趋严（新标三氯氢硅法3级要求6.4kgce/kg vs 行业当前7.1kgce/kg），约30%产能面临退出压力</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>2026Q1晶科、隆基、天合、晶澳等头部厂商接连上调报价，主流组件价格较前期低点涨幅15%-20%，TOPCon主流成交价升至约0.84元/W</span></li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span><span>工信部遏制低价无序竞争，国电投调整"最低价满分"评分方式，行业秩序正在修复</span></li>
      </ul>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🧠 CIO 深度洞察</h4>
      <p class="text-red-900 text-sm leading-relaxed">光伏处于"供给出清+价格触底+政策托底"三底共振的拐点右侧。但需注意：<strong>市场在极度悲观中忽视了供给侧改善的确定性和新需求空间的弹性</strong>（太空光伏带来千亿级太阳翼市场弹性，远期50GW场景下太阳翼市场超7万亿元）。配置建议：5%观察仓，等待确认信号（头部厂商连续两月涨价）。</p>
    </div>

    <p class="text-slate-800 font-semibold">推荐标的：隆基绿能（组件龙头，率先涨价）、晶科能源（TOPCon领先）、阳光电源（逆变器+储能双轮驱动）</p>

    <!-- 高确定性底仓 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、高确定性底仓资产</h2>

    <h3 id="i_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">证券 —— 高景气遇到深转型</h3>

    <p class="text-slate-800 leading-relaxed mb-4">25家上市券商2025年营收4413亿元（+31%），归母净利润1741亿元（+45.5%），ROE提升至7.31%。更关键的是商业模式正在发生质变：自营投资从方向性博弈转向OCI账户配置+多资产策略，有效平滑了周期性波动。财富管理（FOF、"固收+"买方投顾）、跨境业务（投行引领全球布局）、AI赋能组织重构，三大转型方向构筑长期竞争壁垒。中信证券、国泰海通总资产率先突破2万亿元。</p>

    <p class="text-slate-800 font-semibold">推荐标的：华泰证券（PE 7.57x）、中信证券（PE 11.01x）、东方财富（流量变现龙头）</p>

    <h3 id="i_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">海风产业链 + 电车出海</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">🌊</span>海风产业链</h4>
        <p class="text-slate-700 text-sm leading-relaxed">2026年海风装机11-13GW（同比+30%+），深远海规划推进约100GW。欧洲海风2025-2030年年均装机18.9GW，英国自2026年4月1日起取消33项风电零部件进口关税，中国海缆/塔筒企业直接受益。超高压/柔直海缆毛利率45-55%，大金重工出海单吨净利超4000元/吨（国内约1500元）。</p>
        <p class="text-slate-700 text-sm mt-2 font-semibold">推荐：大金重工、东方电缆、海力风电</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h4 class="text-slate-800 font-bold mb-3 flex items-center"><span class="text-lg mr-2">🚗</span>电车出海</h4>
        <p class="text-slate-700 text-sm leading-relaxed">1-2月新能源车出口58.3万辆（同比+107%），比亚迪2月出口9.9万辆（+47%），吉利4.1万辆（+697%）。高油价加速海外"油转电"决策曲线。比亚迪出海利润占比已超50%，海外单车利润是国内3-4倍。类比1970年代石油危机助推丰田全球化。</p>
        <p class="text-slate-700 text-sm mt-2 font-semibold">推荐：比亚迪（出海利润占比超50%）、吉利汽车（弹性最大）</p>
      </div>
    </div>

    <!-- 暗线与二阶博弈 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、跨赛道暗线与产业链二阶博弈</h2>

    <h3 id="i_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线1：中东能源危机 → "气转煤" → 煤化工全面受益</h3>

    <p class="text-slate-800 leading-relaxed mb-4">霍尔木兹海峡航运停滞 + 卡塔尔LNG停产 → 亚洲LNG价格暴涨70%。与LNG暴涨70%相比，煤炭价格仅上涨约14%，成本优势极为显著。新疆煤化工企业满负荷生产，甲醇、烯烃等化工产品跟随国际油价普涨。中国"富煤贫油少气"的能源禀赋在油价132美元背景下被重新定价。</p>

    <h3 id="i_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线2：Lumentum产能售罄 → 光芯片国产替代加速 → 半导体设备/材料受益</h3>

    <p class="text-slate-800 leading-relaxed mb-4">全球光模块供应链出现结构性瓶颈，泵浦激光器、CW光源等核心器件交期延长。Lumentum的产能约束不是技术问题，而是制造产能的物理限制，这给了国产厂商2-3年的追赶时间。鼎龙股份300吨光刻胶项目投产，填补ArF/KrF品类国内空白。半导体材料的国产替代在AI算力需求和地缘政治双重催化下进入"不得不替"的阶段。</p>

    <h3 id="i_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线3：储能爆发 → 大电芯化 → 固态电池新材料产业链</h3>

    <p class="text-slate-800 leading-relaxed mb-4">大电芯化（314Ah → 587Ah/628Ah）降低系统集成成本，龙头性能优势（年利用330天 vs 小厂270天，IRR高8-10pct）加速市占率集中。固态电池2027年小批量装车节点明确。硫化物电解质为核心增量，2030年固态电解质市场空间750亿元，硫化锂516亿元，硅碳负极78.8亿元，锂金属负极45亿元。干电极工艺、蒸镀锂金属、骨架支撑膜等配套工艺/设备厂商将迎来从0到1的爆发，设备端2030年市场空间1275亿元。</p>

    <!-- 数据监测表 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>六、数据监测表</h2>

    <h3 id="i_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">大宗商品与周期资源量价监测表</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">商品/资源</th>
            <th class="px-4 py-3 text-left">最新价及趋势</th>
            <th class="px-4 py-3 text-left">库存周期</th>
            <th class="px-4 py-3 text-left">核心矛盾</th>
            <th class="px-4 py-3 text-left">关联标的</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">布伦特原油</td>
            <td class="px-4 py-3 text-sm">132.45美元/桶（周+2.92%），高位震荡</td>
            <td class="px-4 py-3 text-sm">供给紧缺</td>
            <td class="px-4 py-3 text-sm">霍尔木兹海峡停滞，卡塔尔LNG停产</td>
            <td class="px-4 py-3 text-sm">中国石油、中国海油</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">动力煤(Q5500)</td>
            <td class="px-4 py-3 text-sm">秦港761元/吨，目标800-860元</td>
            <td class="px-4 py-3 text-sm">主动去库</td>
            <td class="px-4 py-3 text-sm">进口煤倒挂-49元/吨，"气转煤"需求增加</td>
            <td class="px-4 py-3 text-sm">中国神华、晋控煤业</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">氧化镨钕(稀土)</td>
            <td class="px-4 py-3 text-sm">75.75万元/吨（周+6.32%）</td>
            <td class="px-4 py-3 text-sm">底部反弹</td>
            <td class="px-4 py-3 text-sm">北方稀土Q2精矿交易价格环比大增</td>
            <td class="px-4 py-3 text-sm">北方稀土、金力永磁</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">碳酸锂</td>
            <td class="px-4 py-3 text-sm">涨价中，2万元/吨的涨幅影响电芯成本1分/Wh</td>
            <td class="px-4 py-3 text-sm">供需紧平衡</td>
            <td class="px-4 py-3 text-sm">储能需求+60%拉动</td>
            <td class="px-4 py-3 text-sm">赣锋锂业、天齐锂业</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">天然气(IPE)</td>
            <td class="px-4 py-3 text-sm">112.47便士/色姆（周-6.03%）</td>
            <td class="px-4 py-3 text-sm">波动剧烈</td>
            <td class="px-4 py-3 text-sm">卡塔尔停产推高现货，欧洲库存尚充裕</td>
            <td class="px-4 py-3 text-sm">新奥股份</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="i_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">关键产业链周期与估值监测表</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">产业链</th>
            <th class="px-4 py-3 text-left">核心边际变化</th>
            <th class="px-4 py-3 text-left">周期位置</th>
            <th class="px-4 py-3 text-left">估值分位及拥挤度</th>
            <th class="px-4 py-3 text-left">核心受益标的</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">储能电池</td>
            <td class="px-4 py-3 text-sm">2026全球出货1024GWh(+60%)，280电芯涨价至0.39元/Wh</td>
            <td class="px-4 py-3 text-sm">景气加速期</td>
            <td class="px-4 py-3 text-sm">PE-TTM 48.81倍，中等偏高</td>
            <td class="px-4 py-3 text-sm font-semibold">宁德时代、亿纬锂能、阳光电源</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">AI光互联</td>
            <td class="px-4 py-3 text-sm">Lumentum产能售罄至2028年，中国Token调用+31%/周</td>
            <td class="px-4 py-3 text-sm">景气爆发期</td>
            <td class="px-4 py-3 text-sm">拥挤度极高，公募电子持仓第一(6736亿)</td>
            <td class="px-4 py-3 text-sm font-semibold">中际旭创、新易盛、天孚通信、源杰科技</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">煤炭</td>
            <td class="px-4 py-3 text-sm">秦港761元/吨，进口煤倒挂-49元/吨</td>
            <td class="px-4 py-3 text-sm">拐点右侧上行</td>
            <td class="px-4 py-3 text-sm">PE 18.4倍（倒数第6），极低拥挤度</td>
            <td class="px-4 py-3 text-sm font-semibold">中国神华、陕西煤业、广汇能源</td>
          </tr>
          <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
            <td class="px-4 py-3 font-bold text-teal-900">CXO/医药</td>
            <td class="px-4 py-3 text-sm">2026Q1中国医疗投融资+81.5%，板块收入+13%/利润+60%</td>
            <td class="px-4 py-3 text-sm">景气反转起点</td>
            <td class="px-4 py-3 text-sm">估值历史底部，持仓低位</td>
            <td class="px-4 py-3 text-sm font-semibold">药明康德、凯莱英、康龙化成</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">半导体存储</td>
            <td class="px-4 py-3 text-sm">全球销售+61.74%，晶合集成6月涨价10%</td>
            <td class="px-4 py-3 text-sm">上行周期中段</td>
            <td class="px-4 py-3 text-sm">PE 83.97%历史分位，极度拥挤</td>
            <td class="px-4 py-3 text-sm font-semibold">德明利、江波龙、兆易创新</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">新能源车出海</td>
            <td class="px-4 py-3 text-sm">1-2月出口+107%，比亚迪出海利润占比超50%</td>
            <td class="px-4 py-3 text-sm">景气加速期</td>
            <td class="px-4 py-3 text-sm">中等拥挤</td>
            <td class="px-4 py-3 text-sm font-semibold">比亚迪、吉利汽车</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CIO 仓位与策略 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>七、CIO 战略配置与下周操作计划</h2>

    <h3 id="i_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">建议仓位配置</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">仓位</th>
            <th class="px-4 py-3 text-left">方向</th>
            <th class="px-4 py-3 text-center">权重</th>
            <th class="px-4 py-3 text-left">标的代表</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
            <th class="px-4 py-3 text-left">加减仓信号</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold">进攻仓</td>
            <td class="px-4 py-3">储能/锂电</td>
            <td class="px-4 py-3 text-center font-bold text-red-900">25%</td>
            <td class="px-4 py-3 text-sm">宁德时代、亿纬锂能、阳光电源</td>
            <td class="px-4 py-3 text-sm">全球储能+60%，产能利用率90%+，280电芯涨价确认</td>
            <td class="px-4 py-3 text-sm">加仓：每月并网数据超预期 / 减仓：碳酸锂突破18万</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold">进攻仓</td>
            <td class="px-4 py-3">AI光互联</td>
            <td class="px-4 py-3 text-center font-bold text-orange-900">15%</td>
            <td class="px-4 py-3 text-sm">中际旭创、新易盛、天孚通信</td>
            <td class="px-4 py-3 text-sm">Lumentum售罄至2028年，Token调用+31%/周</td>
            <td class="px-4 py-3 text-sm">加仓：回调至均线支撑 / 减仓：云厂商capex增速&lt;30%</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold">核心仓</td>
            <td class="px-4 py-3">煤炭/煤化工</td>
            <td class="px-4 py-3 text-center font-bold text-green-900">20%</td>
            <td class="px-4 py-3 text-sm">中国神华、广汇能源、宝丰能源</td>
            <td class="px-4 py-3 text-sm">能源危机结构性受益+低估值红利+煤化工三重逻辑</td>
            <td class="px-4 py-3 text-sm">加仓：中东冲突升级 / 减仓：实质性停火协议</td>
          </tr>
          <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
            <td class="px-4 py-3 font-bold">左侧仓</td>
            <td class="px-4 py-3">CXO/医药</td>
            <td class="px-4 py-3 text-center font-bold text-teal-900">15%</td>
            <td class="px-4 py-3 text-sm">药明康德、凯莱英、康龙化成</td>
            <td class="px-4 py-3 text-sm">风险出清+投融资+81.5%，市场预期极度悲观</td>
            <td class="px-4 py-3 text-sm">加仓：1260H清单落地 / 减仓：法案超预期升级</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold">弹性仓</td>
            <td class="px-4 py-3">电车出海</td>
            <td class="px-4 py-3 text-center font-bold text-blue-900">10%</td>
            <td class="px-4 py-3 text-sm">比亚迪、吉利汽车</td>
            <td class="px-4 py-3 text-sm">海外利润占比超50%，叙事拐点已至</td>
            <td class="px-4 py-3 text-sm">加仓：月度出口超预期 / 减仓：欧洲关税升级</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold">底仓</td>
            <td class="px-4 py-3">证券</td>
            <td class="px-4 py-3 text-center font-bold text-purple-900">10%</td>
            <td class="px-4 py-3 text-sm">华泰证券、东方财富</td>
            <td class="px-4 py-3 text-sm">营收+31%/利润+45.5%，OCI策略降低周期性</td>
            <td class="px-4 py-3 text-sm">加仓：日成交额突破3万亿 / 减仓：跌破1.5万亿</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold">观察仓</td>
            <td class="px-4 py-3">光伏</td>
            <td class="px-4 py-3 text-center font-bold text-amber-900">5%</td>
            <td class="px-4 py-3 text-sm">隆基绿能、晶科能源</td>
            <td class="px-4 py-3 text-sm">供给出清拐点，但需等待确认</td>
            <td class="px-4 py-3 text-sm">加仓：连续两月涨价 / 减仓：价格反弹夭折</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="i_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">加减仓信号矩阵</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">信号类型</th>
            <th class="px-4 py-3 text-left">触发条件</th>
            <th class="px-4 py-3 text-left">动作</th>
            <th class="px-4 py-3 text-left">影响方向</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">能源危机升级</td>
            <td class="px-4 py-3 text-sm">霍尔木兹海峡军事冲突扩大/更多LNG设施停产</td>
            <td class="px-4 py-3 text-sm font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 text-sm">+煤炭 +化工 +石油</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">能源危机缓和</td>
            <td class="px-4 py-3 text-sm">实质性停火协议/海峡恢复通航</td>
            <td class="px-4 py-3 text-sm font-bold text-red-900">减仓能源链</td>
            <td class="px-4 py-3 text-sm">-煤炭 -化工 +AI +医药</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">AI capex超预期</td>
            <td class="px-4 py-3 text-sm">云厂商Q1财报capex指引上调</td>
            <td class="px-4 py-3 text-sm font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 text-sm">+光互联 +半导体</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">AI capex低于预期</td>
            <td class="px-4 py-3 text-sm">云厂商削减capex/项目延期</td>
            <td class="px-4 py-3 text-sm font-bold text-red-900">减仓</td>
            <td class="px-4 py-3 text-sm">-光互联 -AI算力</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">储能数据超预期</td>
            <td class="px-4 py-3 text-sm">月并网数据&gt;15GWh / 电芯继续涨价</td>
            <td class="px-4 py-3 text-sm font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 text-sm">+储能 +锂电</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">CXO地缘风险出清</td>
            <td class="px-4 py-3 text-sm">1260H清单最终版本范围符合预期</td>
            <td class="px-4 py-3 text-sm font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 text-sm">+CXO +医药</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="i_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">下周操作计划（4/14 - 4/18）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">操作</th>
            <th class="px-4 py-3 text-left">标的</th>
            <th class="px-4 py-3 text-center">方向</th>
            <th class="px-4 py-3 text-center">仓位变动</th>
            <th class="px-4 py-3 text-left">逻辑</th>
            <th class="px-4 py-3 text-left">执行条件</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">新建仓</td>
            <td class="px-4 py-3 font-bold">宝丰能源</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">买入</span></td>
            <td class="px-4 py-3 text-center font-bold">3%</td>
            <td class="px-4 py-3 text-sm">煤化工暗线，醋酸周涨1116点验证供需失衡</td>
            <td class="px-4 py-3 text-sm">开盘30分钟内分批建仓</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">新建仓</td>
            <td class="px-4 py-3 font-bold">源杰科技</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">买入</span></td>
            <td class="px-4 py-3 text-center font-bold">2%</td>
            <td class="px-4 py-3 text-sm">光芯片国产替代，Lumentum产能瓶颈窗口期</td>
            <td class="px-4 py-3 text-sm">回调至5日均线附近</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 font-bold">中国神华</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">买入</span></td>
            <td class="px-4 py-3 text-center font-bold">3%→5%</td>
            <td class="px-4 py-3 text-sm">大秦线春检去库+进口煤倒挂加剧，煤价上行趋势确认</td>
            <td class="px-4 py-3 text-sm">当前价位直接买入</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 font-bold">药明康德</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">买入</span></td>
            <td class="px-4 py-3 text-center font-bold">3%→5%</td>
            <td class="px-4 py-3 text-sm">左侧布局CXO反转，Q1投融资+81.5%验证需求恢复</td>
            <td class="px-4 py-3 text-sm">分批建仓，不追高</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">加仓</td>
            <td class="px-4 py-3 font-bold">比亚迪</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">买入</span></td>
            <td class="px-4 py-3 text-center font-bold">3%→4%</td>
            <td class="px-4 py-3 text-sm">出海利润占比超50%，4月北京车展催化剂密集</td>
            <td class="px-4 py-3 text-sm">车展前布局</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">持有</td>
            <td class="px-4 py-3 font-bold">宁德时代</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">持有</span></td>
            <td class="px-4 py-3 text-center font-bold">8%不变</td>
            <td class="px-4 py-3 text-sm">核心仓位，储能景气延续，等待4月排产数据</td>
            <td class="px-4 py-3 text-sm">不动</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">持有</td>
            <td class="px-4 py-3 font-bold">中际旭创</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">持有</span></td>
            <td class="px-4 py-3 text-center font-bold">5%不变</td>
            <td class="px-4 py-3 text-sm">光模块核心标的，但估值拥挤，不加不减</td>
            <td class="px-4 py-3 text-sm">等待回调加仓机会</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">减仓</td>
            <td class="px-4 py-3 font-bold">寒武纪</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">卖出</span></td>
            <td class="px-4 py-3 text-center font-bold">3%→1%</td>
            <td class="px-4 py-3 text-sm">公募持仓804亿，拥挤度极高，PE 83.97%分位</td>
            <td class="px-4 py-3 text-sm">逢高减仓</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 风险管理 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>八、风险管理：灰犀牛与黑天鹅</h2>

    <h3 id="i_sec19" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">灰犀牛（高概率、大影响）</h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ 中东停火协议</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：中 | 影响：极高</strong>。能源链全面回落。对冲：若持仓煤炭/煤化工&gt;25%，应保留10%现金缓冲。停火后快速切换至AI成长和医药。</p>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ AI投资过热/云厂商capex增速放缓</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：中 | 影响：高</strong>。光模块/半导体估值面临戴维斯双杀。对冲：光模块仓位控制在15%以内，设置15%止损线。</p>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ 国内经济Q2数据不及预期</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：中 | 影响：中高</strong>。煤炭周期逻辑和证券业绩弹性受冲击。对冲：增配CXO（内需关联度低）和出海链（海外利润占比高）。</p>
    </div>

    <h3 id="i_sec19b" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">黑天鹅（低概率、毁灭性影响）</h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🚨 美国生物安全法案1260H超预期升级</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：低 | 影响：高</strong>。CXO板块重新定价。对冲：CXO仓位不超过15%，分散持仓至凯莱英/康龙化成（对美依赖度低于药明）。</p>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🚨 霍尔木兹海峡军事冲突扩大至全面战争</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：低 | 影响：极高</strong>。全球能源价格失控，滞胀风险。对冲：增加石油/黄金配置，减仓高估值成长。</p>
    </div>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">🚨 AI大模型出现"能力 plateau"导致capex砍单</h4>
      <p class="text-red-900 text-sm leading-relaxed"><strong>概率：低 | 影响：高</strong>。光模块/半导体遭遇订单悬崖。跟踪指标：Token调用量增速从+31%骤降至&lt;10%。</p>
    </div>

    <h3 id="i_sec20" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">关键证伪指标（必须每日跟踪）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-left">关注内容</th>
            <th class="px-4 py-3 text-left">影响方向</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中东局势</td>
            <td class="px-4 py-3 text-sm">霍尔木兹海峡通航状态、卡塔尔LNG复产时间表</td>
            <td class="px-4 py-3 text-sm">能源链、电车出海</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">AI算力</td>
            <td class="px-4 py-3 text-sm">Lumentum季度财报及扩产进度、中国Token调用量周度增速</td>
            <td class="px-4 py-3 text-sm">光模块、半导体</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">储能</td>
            <td class="px-4 py-3 text-sm">每月并网数据、碳酸锂价格走势</td>
            <td class="px-4 py-3 text-sm">储能/锂电</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">煤炭</td>
            <td class="px-4 py-3 text-sm">秦港库存变化、进口煤价差</td>
            <td class="px-4 py-3 text-sm">煤炭/煤化工</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">CXO</td>
            <td class="px-4 py-3 text-sm">1260H清单更新内容、医疗投融资月度数据</td>
            <td class="px-4 py-3 text-sm">CXO/医药</td>
          </tr>
        </tbody>
      </table>
    </div>

    <blockquote class="border-l-4 border-red-500 bg-slate-50 rounded-r-xl p-4 my-4 text-slate-700">
      <strong>CIO 核心结论：</strong>当前不是"选赛道"的问题，而是"选逻辑"的问题。能源危机和AI军备竞赛是两条确定性最高的宏观主线，但市场已经充分定价第一层逻辑。<strong>超额收益来自第二层、第三层推演——煤化工、光芯片、固态电池材料。</strong>在众人贪婪时恐惧（半导体PE 83.97%分位），在众人恐惧时贪婪（CXO估值历史底部）。最大的风险不是选错方向，而是在高拥挤度的方向上加了过重的仓位。控制单一行业仓位上限（25%），保留机动弹药，是穿越当前混沌期的核心纪律。
    </blockquote>

    <p class="text-slate-500 text-xs mt-12 pt-4 border-t border-slate-200">本报告基于2026年4月13日250份行业研报与CIO战略内参的深度整合，覆盖能源危机受益链、AI算力军备竞赛、困境反转链和跨赛道暗线四大投资主线。仅供内部投研参考，不构成投资建议。</p>

  </div>`;
}
