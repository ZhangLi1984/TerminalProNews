// ==========================================
// 文档一：投资决策内参 - 内容渲染 (3 月 5 日版)
// ==========================================

/**
 * 渲染核心摘要部分 (3 月 5 日)
 */
function renderCoreSummary_0305() {
  return `
    <section id="sec1" class="scroll-mt-24">
      ${InteractiveCard({
        className: '!p-6 md:!p-8 relative overflow-hidden bg-white border-slate-200',
        children: `
          <div class="absolute -top-16 -right-16 opacity-[0.03] pointer-events-none text-slate-900">
            ${createIcon('Target', 'w-64 h-64')}
          </div>

          <div class="relative z-10">
            <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
              一、核心摘要与全局叙事
              <span class="ml-4 text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-full shadow-sm">3 分钟速读</span>
            </h3>

            <div class="mb-6 bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
              <div class="text-sm text-slate-600 font-black mb-3 uppercase tracking-widest flex items-center">
                ${createIcon('Activity', 'w-4 h-4 mr-2 text-red-600')} 市场核心主线
              </div>
              <p class="text-base font-bold leading-relaxed text-slate-800">
                今日资金围绕 <span class="text-red-600 font-black border-b-2 border-red-200 pb-0.5">"中东局势缓和 + 美联储人事落地 + AI 算力通胀"</span> 三条主线博弈。
                早盘地缘恐慌情绪修复，亚太股市暴力反弹（韩国 KOSPI 一度暴涨 12%），午后回归两会政策预期与算力产业链。
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div class="text-sm text-slate-500 font-black mb-3 uppercase tracking-widest">整体仓位</div>
                <div class="text-3xl font-black text-red-600 mb-2">6-7 成</div>
                <p class="text-sm font-black text-slate-700 bg-slate-100 py-1 px-3 rounded w-fit mb-2">地缘扰动减弱，可适度进攻</p>
                <p class="text-sm text-slate-600 leading-snug font-bold">规避纯地缘炒作题材、业绩证伪的高位股。</p>
              </div>
              <div class="bg-red-50 rounded-xl p-5 border border-red-100 shadow-sm">
                <div class="text-sm text-red-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('Crosshair', 'w-4 h-4 mr-1.5')} 进攻方向
                </div>
                <ul class="space-y-2 text-base font-black text-red-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 算力硬件（光模块/液冷）</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 化工品涨价（制冷剂/铝）</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 电网设备</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm">
                <div class="text-sm text-blue-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('ShieldAlert', 'w-4 h-4 mr-1.5')} 防守方向
                </div>
                <ul class="space-y-2 text-base font-black text-blue-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 油气资源</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 黄金</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 高股息红利</li>
                </ul>
              </div>
            </div>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染 S 级重大事件 (3 月 5 日)
 */
function renderSMajorEvents_0305() {
  return `
    <section class="space-y-6">
      ${SectionHeader({
        title: '二、S 级重大事件：深度推理与沙盘',
        icon: createIcon('Flame', 'w-5 h-5 text-red-600')
      })}

      <!-- S1: 中东局势缓和 -->
      ${InteractiveCard({
        id: 'sec2_s1',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-emerald-200 flex justify-between items-center bg-emerald-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-emerald-800">S1</span>
              <h4 class="font-black text-base text-slate-900">中东局势"雷声大雨点小"，亚太股市暴力反弹</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-emerald-600 text-white rounded">超预期修复</span>
          </div>
          <div class="p-6 space-y-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm leading-relaxed">
              <p class="mb-2 text-slate-800 font-bold">
                <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">事件穿透</span>
                霍尔木兹海峡封锁担忧推动原油涨超 10%，但白宫迅速表态"油市供应充足"，美财长贝森特抛出保险与护航方案。
              </p>
              <p class="text-emerald-800 font-bold">
                <span class="font-black text-white bg-emerald-700 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心信号</span>
                市场定价从"战争溢价"转向"可控扰动"。韩国 KOSPI 从暴跌转为触发买方熔断（暴涨 12%），情绪反转力度极强。
              </p>
            </div>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">后续验证点</h5>
                <ul class="space-y-1.5 text-sm text-slate-800 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <li><span class="font-black text-slate-900">3 月 7-8 日：</span>OPEC+ 会议是否调整产量政策</li>
                  <li><span class="font-black text-slate-900">持续关注：</span>霍尔木兹海峡实际通航情况</li>
                </ul>
              </div>
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">映射标的</h5>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center justify-between p-2 bg-emerald-50 rounded border border-emerald-100">
                    <span class="font-bold text-emerald-800">利好</span>
                    <span class="font-black text-slate-900">万华化学、华鲁恒升（化工成本缓解）</span>
                  </div>
                  <div class="flex items-center justify-between p-2 bg-red-50 rounded border border-red-100">
                    <span class="font-bold text-red-800">利空</span>
                    <span class="font-black text-slate-900">中国海油、中曼石油（短期情绪回落）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S2: 美联储人事落地 -->
      ${InteractiveCard({
        id: 'sec2_s2',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-blue-200 flex justify-between items-center bg-blue-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-blue-800">S2</span>
              <h4 class="font-black text-base text-slate-900">特朗普提名凯文·沃什出任美联储主席</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-blue-600 text-white rounded">符合预期</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心穿透</span>
              白宫正式提交美联储主席提名，凯文·沃什被解读为"相对鸽派"，曾在 2020 年支持大规模 QE，对通胀容忍度较高。
              美债收益率应声下行，科技股估值压力缓解。
            </p>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1 border border-emerald-300 bg-emerald-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('TrendingUp', 'w-3.5 h-3.5 mr-1')} 利好方向
                </div>
                <div class="text-sm font-black text-slate-900">恒生科技 ETF、科创 50ETF（估值修复）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">紫金矿业、山东黄金（美元走弱）</div>
              </div>
              <div class="flex-1 border border-slate-300 bg-slate-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('Info', 'w-3.5 h-3.5 mr-1')} 中性方向
                </div>
                <div class="text-sm font-black text-slate-900">银行/保险（息差压力 vs 资产质量改善）</div>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S3: 天然气价格暴涨 -->
      ${InteractiveCard({
        id: 'sec2_s3',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-orange-200 flex justify-between items-center bg-orange-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-orange-800">S3</span>
              <h4 class="font-black text-base text-slate-900">天然气价格暴涨，欧洲化工竞争力重塑</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-orange-500 text-white rounded">超预期</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心穿透</span>
              全球天然气价格进入飙升状态，欧洲化工行业成本大幅上升，韩国石化巨头 YNCC 因中东石脑油原料供应中断宣布不可抗力。
              欧洲玻纤正在被天然气"挤出"，国内玻纤出口预期放大。
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="border border-emerald-300 bg-emerald-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-1.5">核心受益</div>
                <div class="text-sm font-black text-slate-900">巨化股份、三美股份（制冷剂）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">中国巨石、中材科技（玻纤）</div>
              </div>
              <div class="border border-blue-300 bg-blue-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-blue-700 uppercase tracking-widest mb-1.5">间接受益</div>
                <div class="text-sm font-black text-slate-900">万华化学、华鲁恒升（成本优势）</div>
              </div>
            </div>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染 A 级新闻 (3 月 5 日)
 */
function renderANews_0305() {
  return `
    <section id="sec3" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '三、A 级重要新闻：行业催化与博弈',
        icon: createIcon('List', 'w-5 h-5 text-indigo-600')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-indigo-200 uppercase tracking-widest bg-indigo-50 text-indigo-900">
              科技 / AI / 半导体
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '英伟达 GTC 大会即将举办（3 月 17-18 日）', impact: '利好', focus: '800G 光模块需求高增' })}
              ${NewsItem({ text: 'Token 推理大爆发，国产算力受益', impact: '利好', focus: '海光信息、寒武纪' })}
              ${NewsItem({ text: '中信证券：聚焦算力链通胀主线', impact: '利好', focus: '液冷/光互联/先进封装' })}
              ${NewsItem({ text: '华为 896 线激光雷达发布', impact: '利好', focus: '禾赛科技、速腾聚创', isNeutral: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-indigo-100/50 rounded-lg text-xs text-indigo-900 border border-indigo-200">
                <span class="font-black">资金博弈：</span>算力链从"炒预期"进入"炒业绩"阶段，光模块龙头 2025 年订单已排满。
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-emerald-200 uppercase tracking-widest bg-emerald-50 text-emerald-900">
              新能源/汽车
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '比亚迪登顶全球第四，起诉美国', impact: '中性', focus: '贸易摩擦风险', isNeutral: true })}
              ${NewsItem({ text: '雷军谈小米汽车：二排要系安全带', impact: '偏空', focus: '安全关注提升', isNegative: true })}
              ${NewsItem({ text: '7 年车贷狂飙，车企抢跑银行按兵不动', impact: '偏空', focus: '消费信贷或收紧', isNegative: true })}
              ${NewsItem({ text: '代表建议加快智能驾驶法规修订', impact: '利好', focus: '智驾险补位', isNeutral: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-emerald-100/50 rounded-lg text-xs text-emerald-900 border border-emerald-200">
                <span class="font-black">资金博弈：</span>新能源车板块分化加剧，龙头业绩确定性强，小市值零部件商面临估值压力。
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-orange-200 uppercase tracking-widest bg-orange-50 text-orange-900">
              周期/资源品
            </h4>
            <div class="p-1.5 space-y-0.5 pb-2.5">
              ${NewsItem({ text: '中东局势催化铝价大涨', impact: '利好', focus: '花旗上调目标至 3600 美元' })}
              ${NewsItem({ text: 'LME 期铜 2025 年累涨超 41%', impact: '利好', focus: '供需紧平衡延续' })}
              ${NewsItem({ text: '全球显性库存仅能支撑 8 天', impact: '利好', focus: '铝产业链库存极低' })}
              ${NewsItem({ text: '生猪均价再创阶段新低', impact: '偏空', focus: '行业亏损扩大', isNegative: true })}
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-lime-200 uppercase tracking-widest bg-lime-50 text-lime-900">
              政策/两会
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '十四届全国人大四次会议开幕', impact: '中性', focus: 'GDP 目标预计 5%', isNeutral: true })}
              ${NewsItem({ text: '人大发言人：大力提振消费', impact: '利好', focus: '消费刺激政策可期' })}
              ${NewsItem({ text: '代表建议设立独立董事协会', impact: '中性', focus: '公司治理改革', isNeutral: true })}
              ${NewsItem({ text: '上海全球投资促进大会 3/14 开幕', impact: '利好', focus: '地方招商引资加码' })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-lime-100/50 rounded-lg text-xs text-lime-900 border border-lime-200">
                <span class="font-black">资金博弈：</span>两会政策预期从"总量刺激"转向"结构性支持"，科技创新/先进制造是重点。
              </div>
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染热点赛道追踪 (3 月 5 日)
 */
function renderHotTracks_0305() {
  return `
    <section id="sec4" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '四、热点赛道追踪',
        icon: createIcon('Activity', 'w-5 h-5 text-teal-600')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">AI/算力产业链</div>
              <span class="text-xs font-black bg-red-100 text-red-700 px-2 py-0.5 rounded">★★★★★</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">Token 推理需求爆发，训练端需求向推理端转移。800G 光模块 2026 年需求继续高速增长。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">光模块</span>
                <span class="font-black text-slate-900">持有</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">液冷</span>
                <span class="font-black text-emerald-700">增持</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">先进封装</span>
                <span class="font-black text-orange-700">观望</span>
              </div>
            </div>
            <div class="mt-4 text-xs font-black text-slate-900 bg-slate-100 p-2 rounded border border-slate-300">
              核心标的：中际旭创、新易盛、天孚通信、英维克
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">机器人/智能驾驶</div>
              <span class="text-xs font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded">★★★★☆</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">2026 商业航天展（3 月 17-18 日深圳）、华为激光雷达发布催化临近。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">减速器</span>
                <span class="font-black text-slate-900">绿的谐波</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">伺服系统</span>
                <span class="font-black text-slate-900">汇川技术</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">传感器</span>
                <span class="font-black text-slate-900">奥比中光</span>
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">半导体/芯片</div>
              <span class="text-xs font-black bg-blue-100 text-blue-700 px-2 py-0.5 rounded">★★★★☆</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">存储&先进逻辑扩产，国产化迎新机遇。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">半导体设备</span>
                <span class="font-black text-slate-900">北方华创、中微</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">存储芯片</span>
                <span class="font-black text-slate-900">兆易创新、佰维</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">氧化镓</span>
                <span class="font-black text-slate-900">中瓷电子</span>
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">周期/资源品</div>
              <span class="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded">★★★☆☆</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">资源品从"地缘炒作"转向"供需基本面"，铝/铜库存数据是核心验证指标。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">铝</span>
                <span class="font-black text-slate-900">中国铝业、云铝</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">铜</span>
                <span class="font-black text-slate-900">紫金矿业、洛钼</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">黄金</span>
                <span class="font-black text-slate-900">山东黄金、中金</span>
              </div>
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染跨赛道沙盘推演 (3 月 5 日)
 */
function renderCrossTrackAnalysis_0305() {
  return `
    <section id="sec5" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '五、跨赛道传导分析 (二阶思维)',
        icon: createIcon('ArrowRightLeft', 'w-5 h-5 text-purple-700')
      })}

      <div class="space-y-4">
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-red-600',
          children: `
            <div class="text-xs font-black text-slate-600 mb-3 uppercase tracking-widest">传导链 1：中东局势 → 能源价格 → 化工成本 → 产业迁移</div>
            <div class="flex items-center space-x-2 text-sm flex-wrap">
              <span class="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md font-black border border-slate-300">霍尔木兹封锁担忧</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-red-100 text-red-900 px-2.5 py-1 rounded-md font-black border border-red-300">原油/天然气上涨</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-orange-100 text-orange-900 px-2.5 py-1 rounded-md font-black border border-orange-300">欧洲化工成本飙升</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md font-black border border-emerald-300">国内化工竞争力提升</span>
            </div>
            <div class="mt-3 text-xs font-black text-slate-900 bg-slate-100 p-2 rounded border border-slate-300">
              利好：万华化学、华鲁恒升、中国巨石
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-blue-600',
          children: `
            <div class="text-xs font-black text-slate-600 mb-3 uppercase tracking-widest">传导链 2：美联储人事 → 美债收益率 → 科技估值 → 资金流向</div>
            <div class="flex items-center space-x-2 text-sm flex-wrap">
              <span class="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md font-black border border-slate-300">沃什提名 (鸽派)</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md font-black border border-blue-300">美债收益率下行</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-purple-100 text-purple-900 px-2.5 py-1 rounded-md font-black border border-purple-300">科技股估值修复</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md font-black border border-emerald-300">外资回流新兴市场</span>
            </div>
            <div class="mt-3 text-xs font-black text-slate-900 bg-slate-100 p-2 rounded border border-slate-300">
              利好：恒生科技 ETF、科创 50ETF、中际旭创
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-indigo-600',
          children: `
            <div class="text-xs font-black text-slate-600 mb-3 uppercase tracking-widest">传导链 3：AI 推理需求 → 算力硬件 → 上游材料 → 设备订单</div>
            <div class="flex items-center space-x-2 text-sm flex-wrap">
              <span class="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md font-black border border-slate-300">Token 推理爆发</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-black border border-indigo-300">800G/1.6T 需求增长</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-purple-100 text-purple-900 px-2.5 py-1 rounded-md font-black border border-purple-300">光芯片供应紧张</span>
              ${createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')}
              <span class="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md font-black border border-emerald-300">封装设备需求增</span>
            </div>
            <div class="mt-3 text-xs font-black text-slate-900 bg-slate-100 p-2 rounded border border-slate-300">
              利好：中际旭创、源杰科技、罗博特科
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染明日关注与风险提示 (3 月 5 日)
 */
function renderRiskControl_0305() {
  return `
    <section id="sec6" class="space-y-6 scroll-mt-24">
      ${SectionHeader({
        title: '六、明日关注与风险提示',
        icon: createIcon('ShieldAlert', 'w-5 h-5 text-slate-800')
      })}

      <div class="grid md:grid-cols-2 gap-6">
        ${InteractiveCard({
          className: '!p-6',
          children: `
            <h4 class="font-black text-slate-900 mb-5 flex items-center text-base">
              ${createIcon('Clock', 'w-4 h-4 mr-2 text-slate-700')} 3 月 6 日 日程追踪
            </h4>
            <ul class="space-y-3">
              <li class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <div class="text-xs font-black text-slate-600">09:00</div>
                  <div class="text-sm font-bold text-slate-900">中国 2 月贸易数据</div>
                </div>
                <span class="text-xs font-black bg-red-100 text-red-700 px-2 py-0.5 rounded">★★★</span>
              </li>
              <li class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <div class="text-xs font-black text-slate-600">14:00</div>
                  <div class="text-sm font-bold text-slate-900">两会记者会 (经济主题)</div>
                </div>
                <span class="text-xs font-black bg-red-100 text-red-700 px-2 py-0.5 rounded">★★★</span>
              </li>
              <li class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <div class="text-xs font-black text-slate-600">20:30</div>
                  <div class="text-sm font-bold text-slate-900">美国初请失业金人数</div>
                </div>
                <span class="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded">★★☆</span>
              </li>
              <li class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <div class="text-xs font-black text-slate-600">22:00</div>
                  <div class="text-sm font-bold text-slate-900">美国 EIA 原油库存</div>
                </div>
                <span class="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded">★★☆</span>
              </li>
            </ul>
          `
        })}

        <div id="sec7" class="space-y-5">
          ${InteractiveCard({
            className: '!p-5 !border-red-200 !bg-red-50/80',
            children: `
              <h4 class="font-black text-red-900 mb-3 flex items-center text-sm">
                ${createIcon('AlertTriangle', 'w-4 h-4 mr-2')} 逻辑证伪区
              </h4>
              <div class="space-y-2 text-sm">
                <div class="flex items-start p-2 bg-white rounded border border-red-100">
                  <span class="text-xs font-black text-red-600 mr-2">1.</span>
                  <div>
                    <div class="font-bold text-slate-900">中东持续断供</div>
                    <div class="text-slate-600">美国护航方案落地，通航逐步恢复</div>
                  </div>
                  <span class="text-xs font-black bg-red-100 text-red-700 px-1.5 py-0.5 rounded ml-auto">高</span>
                </div>
                <div class="flex items-start p-2 bg-white rounded border border-red-100">
                  <span class="text-xs font-black text-red-600 mr-2">2.</span>
                  <div>
                    <div class="font-bold text-slate-900">AI 应用爆发</div>
                    <div class="text-slate-600">Token 成本下降但商业化仍早期</div>
                  </div>
                  <span class="text-xs font-black bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded ml-auto">中</span>
                </div>
                <div class="flex items-start p-2 bg-white rounded border border-red-100">
                  <span class="text-xs font-black text-red-600 mr-2">3.</span>
                  <div>
                    <div class="font-bold text-slate-900">猪肉价格反弹</div>
                    <div class="text-slate-600">能繁去化速度低于预期</div>
                  </div>
                  <span class="text-xs font-black bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded ml-auto">中</span>
                </div>
              </div>
            `
          })}

          ${InteractiveCard({
            className: '!p-5 !border-orange-200 !bg-orange-50/80',
            children: `
              <h4 class="font-black text-orange-900 mb-3 flex items-center text-sm">
                ${createIcon('Info', 'w-4 h-4 mr-2')} 传闻预警
              </h4>
              <div class="space-y-2 text-sm">
                <div class="flex items-center justify-between p-2 bg-white rounded border border-orange-100">
                  <span class="font-bold text-slate-900">某光伏龙头海外订单取消</span>
                  <span class="text-xs font-black bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">未证实</span>
                </div>
                <div class="flex items-center justify-between p-2 bg-white rounded border border-orange-100">
                  <span class="font-bold text-slate-900">某芯片公司被加制裁</span>
                  <span class="text-xs font-black bg-red-100 text-red-700 px-1.5 py-0.5 rounded">高杀伤</span>
                </div>
                <div class="flex items-center justify-between p-2 bg-white rounded border border-orange-100">
                  <span class="font-bold text-slate-900">万科郁亮失联</span>
                  <span class="text-xs font-black bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">未证实</span>
                </div>
              </div>
            `
          })}
        </div>
      </div>
    </section>
  `;
}

/**
 * 渲染投资决策内参完整内容 (3 月 5 日)
 */
function renderDecisionContent_0305() {
  return `
    ${DateSeparator({ date: '2026-03-05', isLatest: true })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        投资决策内参 <span class="text-slate-400 mx-2">|</span> <span class="text-red-700">全局新闻深度推演</span>
      </h1>
      <p class="text-base font-bold text-slate-700">数据来源：财联社/选股宝/新浪财经/证券时报/格隆汇/东方财富</p>
    </div>

    <div class="space-y-8">
      ${renderCoreSummary_0305()}
      ${renderSMajorEvents_0305()}
      ${renderANews_0305()}
      ${renderHotTracks_0305()}
      ${renderCrossTrackAnalysis_0305()}
      ${renderRiskControl_0305()}
    </div>
  `;
}
