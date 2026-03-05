// ==========================================
// 文档一：投资决策内参 - 内容渲染
// ==========================================

/**
 * 渲染核心摘要部分
 */
function renderCoreSummary() {
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
                <span class="text-red-600 font-black border-b-2 border-red-200 pb-0.5">中东地缘危机引爆全球重定价</span>
                + <span class="text-blue-600 font-black border-b-2 border-blue-200 pb-0.5">两会政策预期</span> 双主线博弈。<br/>
                <span class="text-slate-600 font-bold mt-2 block">
                  资金从避险资产大幅撤出转向美元，避险情绪推升
                  <span class="text-red-700 font-black px-1">油气与军工板块</span>。
                </span>
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div class="text-sm text-slate-500 font-black mb-3 uppercase tracking-widest">仓位建议</div>
                <div class="text-3xl font-black text-red-600 mb-2">5-6 成</div>
                <p class="text-sm font-black text-slate-700 bg-slate-100 py-1 px-3 rounded w-fit mb-2">中性偏防守</p>
                <p class="text-sm text-slate-600 leading-snug font-bold">规避高估值科技股，增配资源/油气/电网。</p>
              </div>
              <div class="bg-red-50 rounded-xl p-5 border border-red-100 shadow-sm">
                <div class="text-sm text-red-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('Crosshair', 'w-4 h-4 mr-1.5')} 进攻方向
                </div>
                <ul class="space-y-3 text-base font-black text-red-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 油气产业链</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 电网设备出口</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-red-600')} 军工无人机</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm">
                <div class="text-sm text-blue-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('ShieldAlert', 'w-4 h-4 mr-1.5')} 防守方向
                </div>
                <ul class="space-y-3 text-base font-black text-blue-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 黄金逢低布局</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 农业种业</li>
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
 * 渲染 S 级重大事件部分
 */
function renderSMajorEvents() {
  return `
    <section class="space-y-6">
      ${SectionHeader({
        title: '二、S 级重大事件：深度推理与沙盘',
        icon: createIcon('Flame', 'w-5 h-5 text-red-600')
      })}

      <!-- S1: 中东冲突升级 -->
      ${InteractiveCard({
        id: 'sec2_s1',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-red-200 flex justify-between items-center bg-red-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-red-800">S1</span>
              <h4 class="font-black text-base text-slate-900">中东冲突升级：霍尔木兹海峡面临封锁</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-red-600 text-white rounded">严重超预期</span>
          </div>
          <div class="p-6 space-y-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm leading-relaxed">
              <p class="mb-2 text-slate-800 font-bold">
                <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">事件穿透</span>
                伊朗宣布打击以色列中部及北部多处军事目标，法国部署航母，海峡运输受阻传闻发酵，沙特阿美拟改走红海口岸。
              </p>
              <p class="text-red-800 font-bold">
                <span class="font-black text-white bg-red-700 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心信号</span>
                冲突烈度远超"有限报复"预期，海峡封锁若成真将切断全球约 20% 原油运输通道。
              </p>
            </div>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">后续验证点</h5>
                <ul class="space-y-1.5 text-sm text-slate-800 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <li><span class="font-black text-slate-900">3 月 5-7 日：</span>关注海峡通航、OPEC 会议</li>
                  <li><span class="font-black text-slate-900">3 月中旬：</span>美是否增兵、伊朗是否升级</li>
                </ul>
              </div>
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">映射标的</h5>
                <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden hidden md:table">
                  <thead class="bg-slate-100 text-slate-800">
                    <tr><th class="p-2 font-black">方向</th><th class="p-2 font-black">逻辑与标的</th></tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 font-bold text-slate-800">
                    <tr><td class="p-2 text-red-800 bg-red-50">油气</td><td class="p-2">受益油价 (中国海油，中曼石油)</td></tr>
                    <tr><td class="p-2 text-blue-800 bg-blue-50">油运</td><td class="p-2">运价弹性 (中远海能，招商轮船)</td></tr>
                    <tr><td class="p-2 text-green-800 bg-emerald-50">化工</td><td class="p-2">成本推升 (巨化，合盛硅业)</td></tr>
                    <tr><td class="p-2 text-purple-800 bg-purple-50">军工</td><td class="p-2">地缘催化 (中无人机，晟楠科技)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S2: 全球资产巨震 -->
      ${InteractiveCard({
        id: 'sec2_s2',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-orange-200 flex justify-between items-center bg-orange-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-orange-800">S2</span>
              <h4 class="font-black text-base text-slate-900">全球资产巨震：美股暴跌，贵金属遭质疑</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-orange-500 text-white rounded">预期差极大</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心穿透</span>
              道指跌超 1200 点，现货黄金失守大关。市场预期"战争=避险"，但实际盘面揭示交易核心是：
              <span class="font-black text-red-700 underline underline-offset-2 decoration-red-300">"通胀再起 → 降息受阻 → 美元走强"</span>，
              流动性收紧压过避险。
            </p>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1 border border-red-300 bg-red-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-red-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('TrendingDown', 'w-3.5 h-3.5 mr-1')} 回避方向
                </div>
                <div class="text-sm font-black text-slate-900">高估值科技股 / AI 概念</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">黄金白银短线追高</div>
              </div>
              <div class="flex-1 border border-emerald-300 bg-emerald-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('TrendingUp', 'w-3.5 h-3.5 mr-1')} 关注方向
                </div>
                <div class="text-sm font-black text-slate-900">资源股（铜/铝/锡）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">稳定的红利资产</div>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S3: 全国两会开幕 -->
      ${InteractiveCard({
        id: 'sec2_s3',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-blue-200 flex justify-between items-center bg-blue-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-blue-800">S3</span>
              <h4 class="font-black text-base text-slate-900">全国两会开幕：政策定调与产业方向</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-blue-600 text-white rounded">符合预期</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 mb-5 font-bold">
              会期 8 天，"十五五"规划纲要草案提请审查。处于政策真空期，市场博弈转向具体政策落地。
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${PolicyCard({ category: '科技创新', title: '光电子信息', stocks: '华工科技、光迅' })}
              ${PolicyCard({ category: '扩大内需', title: '以旧换新', stocks: '家电龙头、汽车' })}
              ${PolicyCard({ category: '新能源', title: '光伏回收', stocks: '格林美、宁德时代' })}
              ${PolicyCard({ category: '民营经济', title: '基本方针不变', stocks: '预期修复' })}
            </div>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染 A 级重要新闻部分
 */
function renderANews() {
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
              ${NewsItem({ text: '800G 光模块需求将继续高速增长', impact: '利好', focus: '光模块龙头' })}
              ${NewsItem({ text: '先进制程推动电子气体市场扩张', impact: '利好', focus: '雅克、华特气体' })}
              ${NewsItem({ text: '半导体设备国产化迎新机遇', impact: '利好', focus: '北方华创、中微' })}
              ${NewsItem({ text: 'OpenAI 发布 GPT-5.3 Instant', impact: '偏空', focus: 'A 股 AI 估值承压', isNegative: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-indigo-100/50 rounded-lg text-xs text-indigo-900 border border-indigo-200">
                <span class="font-black">二阶思维：</span>AI 需求→电力激增→绿电/电网受益
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-emerald-200 uppercase tracking-widest bg-emerald-50 text-emerald-900">
              能源 / 电网设备
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '美国电网将迎史诗级扩建', impact: '重大利好', focus: '变压器、开关出口' })}
              ${NewsItem({ text: '全球天然气价格飙升', impact: '利好', focus: '气源端、长协资源' })}
              ${NewsItem({ text: '垃圾焚烧迎价值重估 (稳定绿电)', impact: '利好', focus: '伟明环保、三峰环境' })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-emerald-100/50 rounded-lg text-xs text-emerald-900 border border-emerald-200">
                <span class="font-black">映射标的：</span>安靠智电、思源电气、许继电气
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-orange-200 uppercase tracking-widest bg-orange-50 text-orange-900">
              周期 / 资源品
            </h4>
            <div class="p-1.5 space-y-0.5 pb-2.5">
              ${NewsItem({ text: 'LME 期铜 25 年涨 41%，期锡涨 39%', impact: '利好', focus: '供给侧逻辑延续' })}
              ${NewsItem({ text: '有机硅产量实质性压缩，旺季来临', impact: '利好', focus: '合盛硅业' })}
              ${NewsItem({ text: '三代制冷剂再涨价，超长景气周期', impact: '利好', focus: '巨化股份、三美' })}
              ${NewsItem({ text: '出口受限 + 能源飙升，看好年内铝价', impact: '利好', focus: '中国铝业、南山' })}
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-lime-200 uppercase tracking-widest bg-lime-50 text-lime-900">
              农业 / 养殖
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '生猪均价创新低，能繁母猪去化加速', impact: '中性', focus: '等待产能出清', isNeutral: true })}
              ${NewsItem({ text: "'原油→化肥农药→农产品' 涨价传导", impact: '利好', focus: '种植业、钾肥企业' })}
              ${NewsItem({ text: '相关部门强化生猪产能综合调控', impact: '政策底', focus: '关注收储预期' })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-lime-100/50 rounded-lg text-xs text-lime-900 border border-lime-200">
                <span class="font-black">映射标的：</span>神农种业、秋乐种业
              </div>
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染热点赛道追踪部分
 */
function renderHotTracks() {
  return `
    <section id="sec4" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '四、热点赛道追踪',
        icon: createIcon('Activity', 'w-5 h-5 text-teal-600')
      })}

      <div class="grid grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-blue-600',
          children: `
            <div class="text-sm font-black text-slate-900 mb-2.5">AI / 算力 / 机器人</div>
            <ul class="text-sm text-slate-800 space-y-2 font-medium">
              <li><span class="font-black text-slate-900">800G 光模块:</span> 中际旭创、新易盛需求高增</li>
              <li><span class="font-black text-slate-900">Token 爆发:</span> 海光信息、寒武纪</li>
              <li><span class="font-black text-slate-900">智能体:</span> 应用端落地加速</li>
            </ul>
          `
        })}

        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-indigo-600',
          children: `
            <div class="text-sm font-black text-slate-900 mb-2.5">半导体设备与材料</div>
            <ul class="text-sm text-slate-800 space-y-2 font-medium">
              <li><span class="font-black text-slate-900">设备国产化:</span> 存储&先进逻辑扩产新机遇</li>
              <li><span class="font-black text-slate-900">电子特气:</span> 先进制程推动需求</li>
              <li><span class="font-black text-red-700">风险:</span> 海外制裁升级扰动供应链</li>
            </ul>
          `
        })}

        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <div class="text-sm font-black text-slate-900 mb-2.5">新能源与环保</div>
            <ul class="text-sm text-slate-800 space-y-2 font-medium">
              <li><span class="font-black text-slate-900">光伏回收:</span> 六部门发文，退役潮将至</li>
              <li><span class="font-black text-slate-900">绿电重估:</span> 垃圾焚烧引来价值发现</li>
              <li><span class="font-black text-red-700">风险:</span> 光伏产能过剩仍待出清</li>
            </ul>
          `
        })}

        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-red-600',
          children: `
            <div class="text-sm font-black text-slate-900 mb-2.5">军工与航空航天</div>
            <ul class="text-sm text-slate-800 space-y-2 font-medium">
              <li><span class="font-black text-slate-900">地缘催化:</span> 中无人机 (+15%)、晟楠科技 (+10%)</li>
              <li><span class="font-black text-slate-900">商业航天:</span> 3 月 17-18 日深圳大会催化临近</li>
            </ul>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染跨赛道沙盘推演部分
 */
function renderCrossTrackAnalysis() {
  return `
    <section id="sec5" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '五、跨赛道传导分析 (二阶思维)',
        icon: createIcon('ArrowRightLeft', 'w-5 h-5 text-purple-700')
      })}

      <div class="space-y-3.5">
        ${LogicFlowCard({
          title: '地缘冲突传导链',
          steps: ['中东冲突升级', '原油飙升', '化工成本推动', '化肥农药跟涨'],
          result: '种业受益 (涨价预期)',
          color: 'red'
        })}
        ${LogicFlowCard({
          title: 'AI 爆发传导链',
          steps: ['推理需求井喷', '数据中心耗电激增', '电力缺口凸显'],
          result: '电网出海 / 绿电重估',
          color: 'blue'
        })}
        ${LogicFlowCard({
          title: '通胀再起传导链',
          steps: ['原油推升通胀', '美降息受阻', '美元走强'],
          result: '贵金属回调 / 买价值股',
          color: 'yellow'
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染明日关注与风险提示部分
 */
function renderRiskControl() {
  return `
    <section id="sec6" class="space-y-6 scroll-mt-24">
      ${SectionHeader({
        title: '六/七、明日关注与风险提示',
        icon: createIcon('ShieldAlert', 'w-5 h-5 text-slate-800')
      })}

      <div class="grid md:grid-cols-2 gap-6">
        ${InteractiveCard({
          className: '!p-6',
          children: `
            <h4 class="font-black text-slate-900 mb-5 flex items-center text-base">
              ${createIcon('Clock', 'w-4 h-4 mr-2 text-slate-700')} 3 月 5 日 日程追踪
            </h4>
            <ul class="space-y-4 relative before:absolute before:inset-y-0 before:left-1.5 before:w-0.5 before:bg-slate-200">
              ${TimelineItem({ time: '09:00', event: '全国人大四次会议开幕', level: 'S' })}
              ${TimelineItem({ time: '盘中', event: '政府工作报告 (GDP/赤字率)', level: 'S' })}
              ${TimelineItem({ time: '实时', event: '霍尔木兹海峡通航验证', level: 'S' })}
              ${TimelineItem({ time: '盘中', event: '国际原油价格走向', level: 'A' })}
              ${TimelineItem({ time: '盘后', event: '北向资金流向监测', level: 'A' })}
            </ul>
          `
        })}

        <div id="sec7" class="space-y-5">
          ${InteractiveCard({
            className: '!p-5 !border-red-200 !bg-red-50/80',
            children: `
              <h4 class="font-black text-red-900 mb-3 flex items-center text-sm">
                ${createIcon('AlertTriangle', 'w-4 h-4 mr-2')} 逻辑证伪避雷针
              </h4>
              <ul class="space-y-2.5 text-sm text-red-900 font-bold">
                <li class="flex items-start">
                  <span class="text-red-600 mr-1.5 font-black">1.</span>
                  避险逻辑被证伪：若美元强，追高风险大。
                </li>
                <li class="flex items-start">
                  <span class="text-red-600 mr-1.5 font-black">2.</span>
                  AI 估值压力：海外超预期，A 股估值压缩。
                </li>
                <li class="flex items-start">
                  <span class="text-red-600 mr-1.5 font-black">3.</span>
                  两会预期落空：若政策不及预期题材回调。
                </li>
              </ul>
            `
          })}

          ${InteractiveCard({
            className: '!p-0 overflow-hidden border-slate-300',
            children: `
              <div class="bg-slate-100 border-b border-slate-200 text-slate-900 px-4 py-3 text-sm font-black flex items-center">
                ${createIcon('Info', 'w-4 h-4 mr-1.5 text-blue-600')} 传闻预警核实
              </div>
              <table class="w-full text-left text-sm">
                <thead class="bg-slate-100 text-slate-800">
                  <tr>
                    <th class="p-3 font-black">传闻内容</th>
                    <th class="p-3 font-black">状态</th>
                    <th class="p-3 font-black">潜在影响</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 font-bold text-slate-800">
                  <tr>
                    <td class="p-3">海峡完全封锁</td>
                    <td class="p-3 text-orange-800 bg-orange-100 rounded-sm">未证实</td>
                    <td class="p-3">油价或破 120</td>
                  </tr>
                  <tr>
                    <td class="p-3">万科郁亮失联</td>
                    <td class="p-3 text-orange-800 bg-orange-100 rounded-sm">未证实</td>
                    <td class="p-3">地产情绪冲击</td>
                  </tr>
                  <tr>
                    <td class="p-3">智飞预亏百亿</td>
                    <td class="p-3 text-emerald-800 bg-emerald-100 rounded-sm">已公告</td>
                    <td class="p-3">疫苗板块承压</td>
                  </tr>
                </tbody>
              </table>
            `
          })}
        </div>
      </div>
    </section>
  `;
}

/**
 * 渲染投资决策内参完整内容
 */
function renderDecisionContent() {
  return `
    ${DateSeparator({ date: '2026-03-04', isLatest: true })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        投资决策内参 <span class="text-slate-400 mx-2">|</span> <span class="text-red-700">全局新闻推演</span>
      </h1>
      <p class="text-base font-bold text-slate-700">基于全网数据提纯的买方视角沙盘</p>
    </div>

    <div class="space-y-8">
      ${renderCoreSummary()}
      ${renderSMajorEvents()}
      ${renderANews()}
      ${renderHotTracks()}
      ${renderCrossTrackAnalysis()}
      ${renderRiskControl()}
    </div>
  `;
}
