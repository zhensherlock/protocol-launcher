# URL Scheme 官方来源核对记录

初次核对：2026-10-02；二次复核完成：2026-10-03。范围：项目全部 **256 个应用模块**，查询 **378 个不同来源 URL**，并对普通抓取失败或缺少正文的部分官方页面补用网页检索。

当前结果（含证据复查后的撤回）：**35 个模块保留同步修改**；**166 个模块在已核对的现有入口范围内未发现需同步的新增差异**；**18 个模块只有部分或历史证据**；**37 个模块未能取得足够的当前官方协议证据**。Written Down 的本次新增回调已撤回，保留原实现。下方二次、三次复核保留当时的检查记录，最新结论见“已修改文件的证据复查”。

项目没有保存上一次官方文档快照。因此本次比较的是当前可读官方说明/官方源码与现有实现，不能断言某网页自上次开发以来完全没有变化，也不能把漏实现的能力都认定为最近新增。官方页面标注的日期、版本仅在取得明确证据时引用。

HTTP 200 不等于协议已核实：产品首页、登录页、脚本壳、反爬校验页均不作为“没有更新”的依据。未找到新证据的历史、停用或插件相关入口保留兼容性。官方开源仓库的 main/master 是核对时的当前源码；本次修改涉及的 Cherry Studio、FSNotes、Pika、Zed 已追加发布标签核对，仍不保证所有旧版应用均支持。

## 二次复核

再次对齐全部 256 个应用的源码入口、根命名空间导出、包子路径导出、测试文件和中英文页面，没有漏掉整个应用模块。对已同步模块的公开函数逐个检查，两种语言均有示例，章节数量也一致；补上了之前缺少的 Bear `addFile()` 文档。

初次同步 19 个模块；二次发现并补齐了另外 **17 个模块**，累计 **36 个模块**。额外模块为：1Writer、Agenda、Calendar 366、Cubox、Fantastical、FSNotes、Streets、Gladys、Longshot、miCal、MultiTimer、OK JSON、Surge、Textastic、Things、Tim、Written Down。同时继续补齐 2Do、Bear、Drafts 的回调/参数。

复核除检查命令名外，还检查了回调参数、嵌套 URL 编码、空字符串、显式 `false`、弃用入口及平台限制。自动抽取发现的 35 个应用路由候选逐项解释后保存在 JSON；动态示例值、大小写、旧别名、返回给调用方的字段不视为新的请求动作。

找到了 Surge 迁移后的[官方协议页](https://manual.nssurge.com/tools/url-scheme.html)，从未确认改为同步。Kiro 的[当前 MCP 文档](https://kiro.dev/docs/mcp/)只确认安装链接和确认流程，未给出路径/编码规范，因此改为部分证据并保留实现。

仍有 **54 个模块**仅有部分/历史证据或未能确认，原因见全量表。另须明确：Telegram 的[完整官方 deep links 目录](https://core.telegram.org/api/links)有许多库尚未收录的能力，本次只核对其既有 `open()` / `openDomain()`，未将这些历史能力全部新增进库。此次全量覆盖的是应用清单和既有接口核对，不能宣称整个上游协议全集没有遗漏。

## 第三次整体确认

2026-10-03 再次对齐全部 **256 个应用模块**的源码入口、根导出、包子路径、中英文页面和测试。`macos` 对应既有 `macOS.test.ts`，属于文件名大小写差异，没有缺失测试模块。36 个同步模块的公共函数均出现在两种语言的示例中，章节数也一致。

本轮重新读取了与这 36 个模块有关的 **63 份官方 URL 响应**，并补用官方页面检索核对失败链接。逐项复核命令名、参数名、编码、返回字段、回调前提、平台和版本限制，**没有发现需要进一步新增的明确官方协议更新**。2Do 旧知识库地址跳转至[当前 macOS 手册](https://www.2doapp.com/docs/macos/url-schemes/)，本轮改用该直接地址。

补修了示例层面的遗漏：2Do 的调用括号、Cherry Studio 数组结束符、Bear 附件编码、FSNotes/Streets 等 URL 注释，以及 Things 同一代码块内重复的变量名。将 Obsidian 的 path/paneType 说明明确限定到对应的 openNote/newNote，并保留 Drafts 回调“适用时，少数动作例外”的限定。删除了本次新增但未被页面引用的示例常量；没有新增协议能力，也没有修改业务 URL 生成逻辑。

执行验证了英文/中文、按需/完整导入共 **1532 个示例版本**，并核对 **449 个 JSDoc 的精确 URL 输出**，均通过。`pnpm build`、最终文档构建和 `pnpm coverage` 通过；257 个测试文件、3331 项测试通过。Biome 检查 262 个 TypeScript 文件通过，`git diff --check` 通过。JSON 的 `fidelity_review` 保存每个模块的核对点、来源摘要和修正记录。

范围仍有明确限制：**54 个模块缺少足够的当前官方证据**，不能认定没有更新；Telegram 的完整上游 deep-link 能力仍未全量收录。上述结论确认应用清单和本次同步内容，没有宣称覆盖全部上游协议，也没有执行安装应用后的端到端调用。

## 已修改文件的证据复查

2026-10-03 检查本次修改涉及的 **36 个模块、361 个文件**（含实现、测试、示例、EN/ZH 文档、changeset 和审计记录），将语义核对记录与文件逐项关联。依据包括前轮已读取的官方正文，本轮重读的 Longshot、Streets、Drafts、Written Down 官方页面，以及补取的 **12 份发布标签源码**。检查结果发现四类需要修正或撤回的内容：

| 项目 | 证据缺口 | 已处理 |
| --- | --- | --- |
| Longshot | [官方示例](https://longshot.chitaner.com/blog/urlschemeapi/)分别写 `start_area` / `startArea`，没有说明两者可互换，也没有要求生成器转换命令名。 | 删除自动改写；`func` 保留调用方原值，普通/回调示例分别使用官方写法。 |
| Streets | [官方参考](https://www.futuretap.com/api/streets)说明回调的生效前提，没有要求生成器删除缺少前提的参数。 | 保留传入的回调参数，由应用按官方条件决定是否调用；删除静默省略规则。 |
| Drafts | [官方参考](https://docs.getdrafts.com/docs/automation/urlschemes#speak)将 `text` 列为可选，没有说明省略时会朗读当前草稿。 | 删除 EN/ZH 文档和测试名称中的默认行为断言；继续保留可选参数。回调支持沿用官网“适用时、少数动作例外”的限定。 |
| Written Down | 取得的协议依据仅为 [2018 年官方参考](https://tinkerbuilt.com/faq/x-callback-url/)；它确实记载了 `x-success` 返回数据，但没有取得当前版本支持或最近更新的新证据。 | 撤回本次新增的四个回调参数、对应测试和 EN/ZH 示例，移出 changeset 与同步清单；归入部分/历史证据。原有实现不变。 |

官方源码另固定到实际发布标签核对：Cherry Studio **v2.1.4**（navigate、MCP 严格 schema 及导入处理）、FSNotes **v7.3.4**（URL handler）、Pika **1.9.0**（应用内帮助和 URL handler）、Zed **v1.22.0**（skill 编码和 URL handler）。修改中的源码引用均改为对应发布标签；没有把开发分支中存在等同于已发布，也没有推断最早支持版本。标签、源码路径、摘要和各文件对应的依据保存在 JSON `evidence_review`。

撤回 Written Down 后，保留 **35 个模块、354 个修改文件**。全项目有 **55 个模块**缺少足够的当前官方证据，不能判定没有更新。此次结论针对保留修改的文档/源码依据，不构成已安装应用的实际执行保证。

本轮 `pnpm build`、`pnpm coverage` 通过，257 个测试文件、**3327 项测试**通过；**1528 个文档示例版本**和 **449 个 JSDoc 精确 URL 输出**通过。Biome 检查 257 个修改的 TypeScript 文件通过，`git diff --check` 通过。测试证明生成器与示例的一致性，上游支持依据仍来自官方参考和发布源码。

## 保留同步修改的模块

| 模块 | 同步内容 | 当前官方依据 |
| --- | --- | --- |
| `1writer` | 七个既有动作补齐成功/错误/取消回调，允许 content 将正文返回调用应用。 | [来源 1](https://1writerapp.com/url-scheme/) |
| `2do` | 新增 macOS 的 showTask、completeTasks 和 launch；补齐回调参数，生成官方小写 query 字段，保留兼容的动作大小写。 | [来源 1](https://www.2doapp.com/docs/macos/url-schemes/) |
| `agenda` | 现有动作补齐官方支持的成功/错误回调。 | [来源 1](https://agenda.community/t/x-callback-url-support-and-reference/27253) |
| `arcgis-survey123` | 新增 Mobile 自定义 scheme、Mobile app link、Studio 启动；旧版 Field/Connect 接口继续保留。 | [来源 1](https://doc.arcgis.com/en/survey123/get-started/integratewithotherapps.htm)、[来源 2](https://doc.arcgis.com/en/survey123/get-started/integrate-launchmobile.htm) |
| `bear` | 新增 openWorkspace、closeWorkspace；所有动作补齐成功/错误回调，选中笔记操作接受必需的 token；补上既有 addFile 文档。 | [来源 1](https://bear.app/faq/x-callback-url-scheme-documentation/) |
| `calendar-366` | 新增 switchCalendarSet，按名称切换日历集合。 | [来源 1](https://calendar366.com/help/index.html) |
| `cherry-studio` | 新增 navigate；MCP 导入省略当前严格 schema 不接受的本地元数据，支持 mcpServers 数组和默认通信类型；更新迁移后的官方源码链接。 | [来源 1](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/navigate.ts)、[来源 2](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/shared/data/types/mcpProtocolInstall.ts)、[来源 3](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/providersImport.ts) |
| `cubox` | addLink 补齐官方记录的成功/取消回调，选择对应 x-callback-url 路由。 | [来源 1](https://help.cubox.pro/adv/97a6/) |
| `cursor` | 新增创建 command/rule 的 deeplink；说明名称字符范围和编码后长度限制。 | [来源 1](https://cursor.com/docs/reference/deeplinks)、[来源 2](https://cursor.com/docs/mcp/install-links) |
| `day-one` | 新增近期提示、标签、书籍、模板、兑换、加密密钥、Siri、Windows 媒体入口；Windows timeline 与其他平台 entries 分开生成。 | [来源 1](https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/) |
| `drafts` | 新增 Chat Console 和 speak；支持当前官方列出的聊天模式；现有动作提供成功/错误/取消回调参数，是否调用遵循官网“适用时，少数动作例外”的说明。 | [来源 1](https://docs.getdrafts.com/docs/automation/urlschemes) |
| `fantastical` | parse/show 补齐成功/错误/取消/来源参数及 x-callback-url 路由。 | [来源 1](https://flexibits.com/support/kb/51) |
| `fsnotes` | 补齐原生 new 路由、txt/folder/open、open 的文本追加和 find 的 id；修正 title/tag 和搜索路径的编码，保留 nv 兼容创建。 | [来源 1](https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift) |
| `ftstreets` | 补齐 region、剪贴板 action、成功/错误回调和 streets scheme；保留传入回调，由应用按官方条件决定是否调用。 | [来源 1](https://www.futuretap.com/api/streets) |
| `gladys` | 两个现有动作补齐成功/错误回调；官方另推荐 App Intents。 | [来源 1](http://www.bru.build/gladys-callback-scheme) |
| `infuse` | 支持 position（含 0 和逐项数组）以及库条目的裸 ?play 自动播放标记；说明 Infuse 8.4.7+ 限制。 | [来源 1](https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services) |
| `joplin` | 新增桌面端 getCurrentNote/createNote 回调命令；说明回调 scheme/host 限制。 | [来源 1](https://joplinapp.org/help/apps/external_links/) |
| `longshot` | 补齐 snip/record/ocr 的回调及固定结果类型；官方区域录制示例普通/回调分别使用 start_area/startArea，生成器保留传入 func。 | [来源 1](https://longshot.chitaner.com/blog/urlschemeapi/) |
| `mical` | 创建活动补齐官方 FAQ 记录的 x-success 回调。 | [来源 1](http://micalapp.com/en/faqs) |
| `multi-timer` | 四个计时器动作补齐成功/错误/取消回调和 x-callback-url 路由。 | [来源 1](https://persapps.com/app/multitimer/url-scheme.php) |
| `obsidian` | 补齐核心 URI 的 path、paneType、剪贴板、silent、overwrite、回调，以及 daily、unique、choose-vault、hook-get-address；保留旧插件辅助接口，其当前支持情况不由核心文档证明；open 的 prepend/append 值类型未明确，未推断实现。 | [来源 1](https://raw.githubusercontent.com/obsidianmd/obsidian-help/master/en/Extending%20Obsidian/Obsidian%20URI.md) |
| `ok-json` | 新增读取剪贴板 URL 的 download 及执行剪贴板 cURL 的 curl；文档明确执行行为。 | [来源 1](https://docs.okjson.app/url-schemes) |
| `picsew` | 按 3.18.1 文档补齐 mockup-name 和 mockup-background-width；保留旧 mockup2 别名。 | [来源 1](https://docs.picsew.app/getting-started/x-callback-url/) |
| `pika` | 新增对比色选取、合规视图、颜色预览、启动窗口和复制时指定格式；使用拆分后的官方 HelpData/URLSchemeHandler 核对。 | [来源 1](https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift)、[来源 2](https://github.com/superhighfives/pika/blob/1.9.0/Pika/Services/URLSchemeHandler.swift) |
| `pocket-casts` | 新增官方 Web follow 链接；页面仍需要用户点击 Follow；既有 iOS pktc 动作保留。 | [来源 1](https://support.pocketcasts.com/knowledge-base/third-party-integration/) |
| `qoder` | 新增 command（含 description/scope）；支持 chat/experts/isNewChat；编码 MCP name；文档注明 RemoteAgent 为兼容保留。 | [来源 1](https://docs.qoder.com/user-guide/deeplink) |
| `surge` | 找到迁移后的当前官方文档；新增 install-module/email-license/enterprise-license 及 macOS surgeconfig 兼容 scheme；明确 iOS/激活窗口限制。 | [来源 1](https://manual.nssurge.com/tools/url-scheme.html) |
| `textastic` | 所有文件/自定义配置动作补齐成功/错误/取消/来源参数；注明打开文件后可能忽略成功回调。 | [来源 1](https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html) |
| `things` | 新增 version 和所有命令的回调选项；更新时保留空字符串清空字段和显式 false 恢复未完成状态。 | [来源 1](https://culturedcode.com/things/support/articles/2803573/) |
| `tim` | 新增 settings/export/upgrade 窗口和 createRecord；所有 create 链接按官方标记为弃用；修正嵌套 getCurrentUrl 回调编码。 | [来源 1](https://tim.neat.software/help) |
| `timepage` | 新增路线、联系参与者、倒计时分享、打开 Actions、通过回调列出日历。 | [来源 1](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) |
| `vscode` | 新增 vscode://agents/new，预填 prompt/workspace，不自动提交。 | [来源 1](https://code.visualstudio.com/docs/configure/command-line#_prepare-a-new-agent-session-draft) |
| `vscode-insiders` | 同步新增 vscode-insiders://agents/new。 | [来源 1](https://code.visualstudio.com/docs/configure/command-line#_prepare-a-new-agent-session-draft) |
| `warp` | 新增设置页、搜索、widget、MCP gallery 安装和团队邀请预填链接，支持 warp/warppreview。 | [来源 1](https://docs.warp.dev/terminal/more-features/uri-scheme#settings-deep-links) |
| `zed` | 新增 installSkill，SKILL.md 按 UTF-8 和无填充 base64url 编码；打开确认表单。旧 joinAgent 等入口保留，当前路由源码不能证明其继续支持。 | [来源 1](https://zed.dev/docs/ai/skills)、[来源 2](https://github.com/zed-industries/zed/blob/v1.22.0/crates/agent_skills/agent_skills.rs) |

同步内容包括库实现、精确 URL 测试、共享示例参数和成对的英文/中文文档，新增 API 已添加 minor changeset。

## 全量核对表

“已核对现有入口”仅表示本次可读官方材料中的现有接口没有发现需同步的新差异，不代表整个上游应用的所有 URL 都已收录，也不等于进行了安装应用后的端到端验证。“仅部分或历史证据”及“未能确认”均不能解读为没有更新。

| 应用模块 | 结果 | 核对范围 / 说明 | 来源 |
| --- | --- | --- | --- |
| `1writer` | 已同步差异 | 七个既有动作补齐成功/错误/取消回调，允许 content 将正文返回调用应用。 | [官方参考 1](https://1writerapp.com/url-scheme/) |
| `2do` | 已同步差异 | 新增 macOS 的 showTask、completeTasks 和 launch；补齐回调参数，生成官方小写 query 字段，保留兼容的动作大小写。 | [官方参考 1](https://www.2doapp.com/docs/macos/url-schemes/) |
| `affine` | 已核对现有入口 | 核对官方当前 URL handler；现有入口未发现需同步差异。 | [官方参考 1](https://github.com/toeverything/AFFiNE/blob/canary/packages/frontend/apps/electron/src/main/deep-link.ts) |
| `agenda` | 已同步差异 | 现有动作补齐官方支持的成功/错误回调。 | [官方参考 1](https://agenda.community/t/x-callback-url-support-and-reference/27253) |
| `airmail` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.airmailapp.com/en-us/article/airmail-ios-url-scheme-1q060gy/) |
| `alfred` | 仅部分或历史证据 | 现有依赖安装文档不覆盖全部 5 个动作；官方历史说明仅能确认部分 preferences 入口。 | [官方参考 1](https://www.alfredapp.com/help/kb/dependencies/) |
| `alter` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.alterhq.com/workflows/url-callbacks) |
| `antigravity` | 未能确认 | 现有来源是产品页，未取得可核对这些 URL 动作的公开官方规范。 | [官方参考 1](https://antigravity.google/) |
| `anybox` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://anybox.app/url-schemes) |
| `anydesk` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.anydesk.com/docs/url-handler) |
| `app-store` | 未能确认 | 现有来源是 App Store 产品页，不能据此确认 itms-apps 各参数的当前规范。 | [官方参考 1](https://www.apple.com/app-store/) |
| `appflowy` | 已核对现有入口 | 核对官方当前 scheme handler；现有裸启动入口无需修改。 | [官方参考 1](https://github.com/AppFlowy-IO/AppFlowy/blob/main/frontend/appflowy_flutter/lib/startup/tasks/deeplink/open_app_deeplink_handler.dart) |
| `appigo-todo` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps) |
| `apple-map` | 仅部分或历史证据 | Apple 官方存档支持地图 HTTP 参数；不能用该存档确认 maps:// 当前全部行为。 | [官方参考 1](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html) |
| `apple-script` | 未能确认 | 源代码/应用页未提供专门的官方协议参考；公开检索未取得当前参数规范。 | 未取得专门的公开官方协议参考 |
| `arcgis-quickcapture` | 已核对现有入口 | 核对当前集成说明；原链接虽有迁移/失效，取得了可读官方替代正文。 | [官方参考 1](https://doc.esri.com/en/arcgis-quickcapture/latest/get-started/integratewithotherapps.html) |
| `arcgis-survey123` | 已同步差异 | 新增 Mobile 自定义 scheme、Mobile app link、Studio 启动；旧版 Field/Connect 接口继续保留。 | [官方参考 1](https://doc.arcgis.com/en/survey123/get-started/integratewithotherapps.htm)、[官方参考 2](https://doc.arcgis.com/en/survey123/get-started/integrate-launchmobile.htm) |
| `atom` | 仅部分或历史证据 | 官网指向官方停用公告；保留历史协议兼容代码，未宣称停用后仍受支持。 | [官方参考 1](https://atom.io/) |
| `barcuts` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.actions.work/barcuts/url-scheme/)、[官方参考 2](https://docs.actions.work/barcuts/url-scheme-run-workflow/)、[官方参考 3](https://docs.actions.work/barcuts/) |
| `bbedit` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.barebones.com/products/bbedit/)、[官方参考 2](https://www.barebones.com/support/bbedit/notes-12.1.4.html) |
| `bear` | 已同步差异 | 新增 openWorkspace、closeWorkspace；所有动作补齐成功/错误回调，选中笔记操作接受必需的 token；补上既有 addFile 文档。 | [官方参考 1](https://bear.app/faq/x-callback-url-scheme-documentation/) |
| `beorg` | 已核对现有入口 | 原 URL 已迁移到 /manual/url-scheme/；当前列出的现有动作无需修改。 | [官方参考 1](https://www.beorgapp.com/manual/url-scheme/) |
| `bettertouchtool` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.folivora.ai/docs/scripting/url-scheme/) |
| `bike-outliner` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://bikeguide.hogbaysoftware.com/using-bike/using-links)、[官方参考 2](https://www.hogbaysoftware.com/bike/) |
| `box` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.box.com/guides/mobile/mobile-deep-linking/) |
| `buchen` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.borovia.co/buchen.support.html) |
| `bunch` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://bunchapp.co/docs/integration/url-handler/) |
| `busycal` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.busymac.com/docs/busycalios/139998-url-handler/)、[官方参考 2](https://www.busymac.com/docs/busycal/70621-url-handler/) |
| `busycontacts` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.busymac.com/docs/busycontacts/56235-url-handler) |
| `cal2todo` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](http://yaas4home.blog.fc2.com/blog-entry-344.html)、[官方参考 2](https://apps.apple.com/sg/app/cal2todo/id475987733) |
| `calca` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](http://calca.io/x-callback-url/) |
| `calendar-366` | 已同步差异 | 新增 switchCalendarSet，按名称切换日历集合。 | [官方参考 1](https://calendar366.com/help/index.html) |
| `calendars-readdle` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page)、[官方参考 2](https://support.readdle.com/calendars/tips-and-tricks/url-schemes) |
| `capacities` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.capacities.io/developer/x-callback-urls) |
| `cardhop` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://flexibits.com/cardhop-ios/help/integration-with-other-apps)、[官方参考 2](https://flexibits.com/cardhop/help/integration-with-other-apps) |
| `charty` | 仅部分或历史证据 | 1.1 官方博文明确属于旧版存档；themes 页面已迁移，未取得当前主题导入的完整规范。 | [官方参考 1](https://chartyios.app/blog/charty11iris.html)、[官方参考 2](https://chartyios.app/themes.html) |
| `cherry-studio` | 已同步差异 | 新增 navigate；MCP 导入省略当前严格 schema 不接受的本地元数据，支持 mcpServers 数组和默认通信类型；更新迁移后的官方源码链接。 | [官方参考 1](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/navigate.ts)、[官方参考 2](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/shared/data/types/mcpProtocolInstall.ts)、[官方参考 3](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/providersImport.ts) |
| `choosy` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://choosy.app/api)、[官方参考 2](https://choosy.app/help/settings/rules/customapi) |
| `chute` | 未能确认 | 官方 URL scheme 文档返回 404，未找到可读的替代官方说明。 | [官方参考 1](https://manual.chute.life/other/url-scheme.html) |
| `citymapper` | 未能确认 | 旧官方开发者入口返回 404；首页不包含协议参数说明。 | [官方参考 1](https://citymapper.com/tools/1053/automatically-generating-citymapper-directions-links)、[官方参考 2](https://citymapper.com/) |
| `cleanshot-x` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://cleanshot.com/docs-api) |
| `cloze` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls) |
| `coda` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.panic.com/code-editor/url-schema/) |
| `code-buddy` | 未能确认 | 官方页面未返回可读的协议规范，无法确认现有动作。 | [官方参考 1](https://codebuddy.ai) |
| `code-buddy-cn` | 未能确认 | 官方页面未返回可读的协议规范，无法确认现有动作。 | [官方参考 1](https://codebuddy.ai) |
| `code-runner` | 未能确认 | 官网未给出可核对的协议参数说明。 | [官方参考 1](https://coderunnerapp.com/) |
| `codehub` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://github.com/CodeHubApp/CodeHub/wiki/CodeHub-x-callback-url-API) |
| `codelite` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://github.com/eranif/codelite/blob/master/Runtime/codelite-url-handler) |
| `codex` | 未能确认 | 现有模块未列出官方 URL scheme 参考；官方站点检索未取得当前公开规范。 | 未取得专门的公开官方协议参考 |
| `craft` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.craft.do/en/integrate/deeplinks) |
| `cubox` | 已同步差异 | addLink 补齐官方记录的成功/取消回调，选择对应 x-callback-url 路由。 | [官方参考 1](https://help.cubox.pro/adv/97a6/) |
| `cursor` | 已同步差异 | 新增创建 command/rule 的 deeplink；说明名称字符范围和编码后长度限制。 | [官方参考 1](https://cursor.com/docs/reference/deeplinks)、[官方参考 2](https://cursor.com/docs/mcp/install-links) |
| `dash` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://kapeli.com/docsets) |
| `day-one` | 已同步差异 | 新增近期提示、标签、书籍、模板、兑换、加密密钥、Siri、Windows 媒体入口；Windows timeline 与其他平台 entries 分开生成。 | [官方参考 1](https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/) |
| `debit-credit` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://debitandcredit.app/help/advanced-features-url-schemes.html) |
| `devonthink` | 仅部分或历史证据 | 可核对的官方帮助固定为 3.8.2，未据此推断当前其他主版本。 | [官方参考 1](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html)、[官方参考 2](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-itemlinks.html) |
| `diarly` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://diarly.app/help/x-callback-url-scheme-documentation.html) |
| `dict-cc` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.dict.cc/iphone.php)、[官方参考 2](https://www.dict.cc/) |
| `documents-readdle` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.readdle.com/documents/transfer-share-your-files/transfer-files-from-safari-to-documents) |
| `downcast` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac) |
| `drafts` | 已同步差异 | 新增 Chat Console 和 speak；支持当前官方列出的聊天模式；现有动作提供成功/错误/取消回调参数，是否调用遵循官网“适用时，少数动作例外”的说明。 | [官方参考 1](https://docs.getdrafts.com/docs/automation/urlschemes) |
| `due` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.dueapp.com/developer.html) |
| `dynamics-365-field-service-mobile` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links) |
| `editorial` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://omz-software.com/editorial/docs/ios/urlscheme.html) |
| `equipd-bible` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.equipd.me/kb/url-scheme/) |
| `evernote` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://dev.evernote.com/doc/articles/note_links.php)、[官方参考 2](https://evernote.com/)、[官方参考 3](https://dev.evernote.com/doc/articles/note_links.php/) |
| `fantastical` | 已同步差异 | parse/show 补齐成功/错误/取消/来源参数及 x-callback-url 路由。 | [官方参考 1](https://flexibits.com/support/kb/51) |
| `filemaker` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.claris.com/en/pro-help/content/opening-files-url.html) |
| `find-any-file` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://findanyfile.app/url-scheme.html) |
| `focus` | 已核对现有入口 | 当前官方页面标注 2026-07-17 更新；现有接口已覆盖相应说明，无需修改。 | [官方参考 1](https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme)、[官方参考 2](https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme/)、[官方参考 3](https://meaningful-things.com/focus/url-scheme/) |
| `foreflight-mobile` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://foreflight.com/support/app-urls/) |
| `forscore` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://forscore.co/developers-automation/) |
| `fsnotes` | 已同步差异 | 补齐原生 new 路由、txt/folder/open、open 的文本追加和 find 的 id；修正 title/tag 和搜索路径的编码，保留 nv 兼容创建。 | [官方参考 1](https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift) |
| `ftstreets` | 已同步差异 | 补齐 region、剪贴板 action、成功/错误回调和 streets scheme；保留传入回调，由应用按官方条件决定是否调用。 | [官方参考 1](https://www.futuretap.com/api/streets) |
| `fulcrum` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.fulcrumapp.com/docs/url-actions) |
| `gett` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.gett.com/docs/overview-1)、[官方参考 2](https://developer.gett.com/docs/ride-request) |
| `github-desktop` | 已核对现有入口 | 核对官方当前协议解析器中的 action/path/query 处理。 | [官方参考 1](https://github.com/desktop/desktop/blob/development/app/src/lib/parse-app-url.ts) |
| `gladys` | 已同步差异 | 两个现有动作补齐成功/错误回调；官方另推荐 App Intents。 | [官方参考 1](http://www.bru.build/gladys-callback-scheme) |
| `goland` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `goodlinks` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://goodlinks.app/url-scheme/) |
| `goodreader` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.goodreader.com/goodreader-networking-built-in-web-browser)、[官方参考 2](https://www.goodreader.com/how-to-manage-files-in-goodreader) |
| `goodtask` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://goodtaskapp.com/url-scheme/) |
| `google-chrome-ios` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/ios/opening_links.md) |
| `google-maps` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.google.com/maps/documentation/urls/ios-urlscheme) |
| `guru-maps` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://gurumaps.app/docs/manual/guru-api) |
| `gv-connect` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://gvconnect.com/) |
| `hammerspoon` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.hammerspoon.org/docs/hs.urlevent.html) |
| `hapigo` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs-cn.hapigo.com/adv/urlscheme) |
| `hbuilderx` | 未能确认 | 可读官网只说明产品能力，未取得协议参数规范。 | [官方参考 1](https://www.dcloud.io/hbuilderx.html) |
| `hiddify` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://hiddify.com/app/URL-Scheme/) |
| `highlights` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://highlightsapp.net/changelog/2015/01/03/Version-1.2/) |
| `home-assistant` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://companion.home-assistant.io/docs/integrations/url-handler/)、[官方参考 2](https://companion.home-assistant.io/docs/integrations/universal-links/) |
| `hookmark` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://hookproductivity.com/help/integration/url-scheme-selection-principles)、[官方参考 2](https://hookproductivity.com/help/more/about-hookmarks-file-links/) |
| `hot-tub` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.hottubapp.io/developers/url-schemes/) |
| `houdahspot` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf) |
| `ia-writer` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://ia.net/writer/support/help/url-commands) |
| `icab-mobile` | 仅部分或历史证据 | 官方 2012 年博文使用 x-icabmobile/addBookmark；现有 icabmobile/add-bookmark 的当前支持未获新证据。 | [官方参考 1](http://www.icab.de/blog-archive/2012/07/01/icab-mobile-6-0-supports-x-callback-url/) |
| `idea` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `infuse` | 已同步差异 | 支持 position（含 0 和逐项数组）以及库条目的裸 ?play 自动播放标记；说明 Infuse 8.4.7+ 限制。 | [官方参考 1](https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services) |
| `inroute` | 已核对现有入口 | 普通抓取受限，通过网页检索读取官方正文；已有位置/类型/回调参数无需修改。 | [官方参考 1](https://inroute.com/url-scheme/) |
| `instapaper` | 仅部分或历史证据 | 可核对的是官方历史博文中的添加链接，不代表当前所有平台。 | [官方参考 1](https://blog.instapaper.com/post/4637427075)、[官方参考 2](https://instapaper.com/) |
| `interact` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.getdrafts.com/docs/misc/interact-scratchpad) |
| `ipgmail` | 未能确认 | 原官方开发者链接失效，未取得替代协议文档。 | [官方参考 1](https://ipgmail.com/developers/) |
| `ireal-pro` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.irealpro.com/developer-docs)、[官方参考 2](https://www.irealpro.com/ireal-pro-custom-chord-chart-protocol) |
| `ithoughts` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.toketaware.com/ithoughts-howto-x-callback-url) |
| `itsycal` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.mowglii.com/itsycal/help) |
| `ivanti-web-work` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm) |
| `ivory` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://tapbots.com/support/ivory/tips/urlschemes) |
| `joplin` | 已同步差异 | 新增桌面端 getCurrentNote/createNote 回调命令；说明回调 scheme/host 限制。 | [官方参考 1](https://joplinapp.org/help/apps/external_links/) |
| `jump-desktop` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.jumpdesktop.com/hc/en-us/articles/216423723-General-Starting-Jump-Desktop-from-other-applications) |
| `just-timers` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://justtimers.app/help/shortcuts/) |
| `kakao-map` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/) |
| `kaleidoscope` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://kaleidoscope.app/)、[官方参考 2](https://kaleidoscope.app/help/docs/kaleidoscope-url-scheme) |
| `keepit` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://reinventedsoftware.com/keepit/urlsupport.html) |
| `keyboard-maestro` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://wiki.keyboardmaestro.com/manual/URL_Schemes) |
| `kiro` | 仅部分或历史证据 | 当前 MCP 文档确认 kiro:// 安装链接及确认流程，但不提供路径/编码规范，不能核实全部既有 editor/MCP 参数。 | [官方参考 1](https://kiro.dev/docs/mcp/) |
| `launch-center-pro` | 已核对现有入口 | 普通抓取受限，逐项通过网页检索读取 6 篇官方说明；在现有动作范围内未发现新增差异。 | [官方参考 1](https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions)、[官方参考 2](https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support)、[官方参考 3](https://help.contrast.co/hc/en-us/articles/201050507-2-1-Release-Notes) |
| `launchbar` | 已核对现有入口 | 官方使用无 // 的 x-launchbar: 命令格式；当前实现已匹配。 | [官方参考 1](https://www.obdev.at/resources/launchbar/help/URLCommands.html)、[官方参考 2](https://www.obdev.at/resources/launchbar/help/Calculator.html) |
| `letterboxd` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://github.com/Letterboxd/letterboxd-ios-x-callback-url) |
| `line` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)、[官方参考 2](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)、[官方参考 3](https://developers.line.biz/en/docs/liff/opening-liff-app/) |
| `lingma` | 未能确认 | 可读产品页未包含协议参数说明。 | [官方参考 1](https://lingma.aliyun.com/) |
| `locus-map` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions) |
| `longshot` | 已同步差异 | 补齐 snip/record/ocr 的回调及固定结果类型；官方区域录制示例普通/回调分别使用 start_area/startArea，生成器保留传入 func。 | [官方参考 1](https://longshot.chitaner.com/blog/urlschemeapi/) |
| `macos` | 未能确认 | 官方系统设置说明未给出这些设置 pane 的完整 URL scheme 规范。 | [官方参考 1](https://www.apple.com/macos/) |
| `macvim` | 未能确认 | 官网可读，但未取得 mvim 文件链接参数规范。 | [官方参考 1](https://macvim.org/) |
| `mail-assistant` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.getdrafts.com/misc/mail-assistant) |
| `marked` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://marked2app.com/help/URL_Handler.html) |
| `mattermost` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.mattermost.com/end-user-guide/collaborate/share-links.html) |
| `mical` | 已同步差异 | 创建活动补齐官方 FAQ 记录的 x-success 回调。 | [官方参考 1](http://micalapp.com/en/faqs) |
| `microsoft-edge` | 未能确认 | 产品页可读，不能确认现有 Microsoft Edge URL 参数。 | [官方参考 1](https://www.microsoft.com/zh-cn/edge/?form=MA13FJ) |
| `microsoft-office` | 已核对现有入口 | 核对官方 Office URI 格式（包含 ms-word: 等无 // 的格式）。 | [官方参考 1](https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes) |
| `microsoft-onenote` | 已核对现有入口 | 核对官方 OneNote 分享/打开链接说明。 | [官方参考 1](https://learn.microsoft.com/en-us/graph/open-onenote-client) |
| `microsoft-remote-desktop` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri)、[官方参考 2](https://learn.microsoft.com/en-us/azure/virtual-desktop/uri-scheme) |
| `microsoft-teams` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow)、[官方参考 2](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams)、[官方参考 3](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application) |
| `mindnode` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.mindnode.com/blog/improving-integrations)、[官方参考 2](https://www.mindnode.com/) |
| `momento` | 已核对现有入口 | 通过网页检索读取官方 Momento URL Scheme 说明；可核对内容为历史 Momento 3 参考。 | [官方参考 1](https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme) |
| `moneywiz` | 未能确认 | 原官方 URL scheme 页面返回 404，未取得替代说明。 | [官方参考 1](https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas) |
| `moovit` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://moovit.com/developers/deeplinking/) |
| `motrix` | 已核对现有入口 | 补查 master 版本的官方协议 handler；原固定提交的入口映射仍一致。 | [官方参考 1](https://github.com/agalwood/Motrix/blob/7012040fec926e16fe8f6c403cf038527f5c18b9/src/main/configs/protocol.js)、[官方参考 2](https://github.com/agalwood/Motrix/blob/master/src/main/configs/protocol.js) |
| `multi-timer` | 已同步差异 | 四个计时器动作补齐成功/错误/取消回调和 x-callback-url 路由。 | [官方参考 1](https://persapps.com/app/multitimer/url-scheme.php) |
| `naver-map` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://guide.ncloud-docs.com/docs/maps-url-scheme) |
| `navicat` | 未能确认 | 官网未包含协议参数说明。 | [官方参考 1](https://www.navicat.com/en/products/navicat-premium) |
| `notebooks` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.notebooksapp.com/notebooks-url-schemes/) |
| `noteplan` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.noteplan.co/article/49-x-callback-url-scheme) |
| `nova` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.nova.app/projects/url-schema/) |
| `nozbe` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://nozbe.help/advancedfeatures/x-callback-url/) |
| `obsidian` | 已同步差异 | 补齐核心 URI 的 path、paneType、剪贴板、silent、overwrite、回调，以及 daily、unique、choose-vault、hook-get-address；保留旧插件辅助接口，其当前支持情况不由核心文档证明；open 的 prepend/append 值类型未明确，未推断实现。 | [官方参考 1](https://raw.githubusercontent.com/obsidianmd/obsidian-help/master/en/Extending%20Obsidian/Obsidian%20URI.md) |
| `ok-json` | 已同步差异 | 新增读取剪贴板 URL 的 download 及执行剪贴板 cURL 的 curl；文档明确执行行为。 | [官方参考 1](https://docs.okjson.app/url-schemes) |
| `omnifocus` | 已核对现有入口 | 普通抓取连接失败，通过网页检索读取官方 URL schemes 正文核对。 | [官方参考 1](https://inside.omnifocus.com/url-schemes) |
| `omnioutliner` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/) |
| `onsong` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://onsongapp.com/developers/import/)、[官方参考 2](https://onsongapp.com/developers/open-song/)、[官方参考 3](https://onsongapp.com/developers/actions/) |
| `opencode` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://github.com/anomalyco/opencode/blob/dev/packages/app/src/pages/layout/deep-links.ts) |
| `opener` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.opener.link/api.html) |
| `openvpn-connect` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://openvpn.net/as-docs/token-url.html)、[官方参考 2](https://openvpn.net/as-docs/tutorials/tutorial--token-url-cli.html)、[官方参考 3](https://openvpn.net/connect-docs/troubleshooting-faqs.html) |
| `orchids` | 未能确认 | 官网抓取失败，未取得协议规范。 | [官方参考 1](https://www.orchids.app/) |
| `organic-maps` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://omaps.app/api)、[官方参考 2](https://en.wikipedia.org/wiki/Geo_URI_scheme) |
| `orion-browser` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://browser.kagi.com/faq.html) |
| `overcast` | 仅部分或历史证据 | 官方支持页明确给出 play 示例；裸 open 的当前行为缺少单独规范。 | [官方参考 1](https://overcast.fm/podcasterinfo)、[官方参考 2](https://overcast.fm/) |
| `panorama-x` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.provue.com/panoramax/help/statement_writepreference.html)、[官方参考 2](https://www.provue.com/panoramax/help/Release_10_2.html)、[官方参考 3](https://www.provue.com/panoramax/help/statement_xcallbackurl.html) |
| `pcalc` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.pcalc.com/ios/history.html) |
| `pdf-expert` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes) |
| `pdf-viewer` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/) |
| `pearai` | 未能确认 | 官网未包含协议参数说明。 | [官方参考 1](https://www.trypear.ai/) |
| `permute` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://software.charliemonroe.net/help/permute/?article=automation) |
| `phpstorm` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `picsew` | 已同步差异 | 按 3.18.1 文档补齐 mockup-name 和 mockup-background-width；保留旧 mockup2 别名。 | [官方参考 1](https://docs.picsew.app/getting-started/x-callback-url/) |
| `pika` | 已同步差异 | 新增对比色选取、合规视图、颜色预览、启动窗口和复制时指定格式；使用拆分后的官方 HelpData/URLSchemeHandler 核对。 | [官方参考 1](https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift)、[官方参考 2](https://github.com/superhighfives/pika/blob/1.9.0/Pika/Services/URLSchemeHandler.swift) |
| `pincase` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://pincaseapp.com/api.html) |
| `pleco` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://iphone.pleco.com/manual/30200/vershist.html) |
| `pocket-casts` | 已同步差异 | 新增官方 Web follow 链接；页面仍需要用户点击 Follow；既有 iOS pktc 动作保留。 | [官方参考 1](https://support.pocketcasts.com/knowledge-base/third-party-integration/) |
| `postman` | 已核对现有入口 | 普通抓取连接失败，通过网页检索核对当前官方 Flows Native Git filePath 打开方式。 | [官方参考 1](https://learning.postman.com/flows/get-started/flows-native-git) |
| `power-apps-mobile` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links)、[官方参考 2](https://learn.microsoft.com/en-us/power-apps/maker/common/wrap/wrap-deep-links) |
| `power-bi-mobile` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location) |
| `prizmo` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://github.com/creaceed/PrizmoAPI) |
| `pushcut` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.pushcut.io/support/url-scheme) |
| `pycharm` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `pythonista` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://omz-software.com/pythonista/docs/ios/urlscheme.html) |
| `pyto` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://pyto.readthedocs.io/en/latest/automation.html) |
| `qoder` | 已同步差异 | 新增 command（含 description/scope）；支持 chat/experts/isNewChat；编码 MCP name；文档注明 RemoteAgent 为兼容保留。 | [官方参考 1](https://docs.qoder.com/user-guide/deeplink) |
| `quark` | 未能确认 | 产品页没有可核对的协议参数说明。 | [官方参考 1](https://www.quark.cn/) |
| `raycast` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.raycast.com/information/lifecycle/deeplinks)、[官方参考 2](https://manual.raycast.com/window-management) |
| `reeder` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://reederapp.com/help/) |
| `remote-desktop-manager` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/) |
| `ringcentral` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.ringcentral.com/guide/basics/uri-schemes) |
| `royal-ts` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.royalapps.com/r2023/royalts/advanced/uri.html)、[官方参考 2](https://docs.royalapps.com/r2023/royalts/advanced/cli.html) |
| `rustrover` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `salesforce-mobile` | 未能确认 | 三篇官方链接只返回脚本加载页面，未取得正文。 | [官方参考 1](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5)、[官方参考 2](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&language=en_US&type=5)、[官方参考 3](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_query_additional.htm&language=en_US&type=5) |
| `scannr` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://scannrapp.com/scannr_url_scheme.pdf) |
| `screens` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.edovia.com/en/screens-5/features/url-schemes) |
| `scriptable` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.scriptable.app/urlscheme/) |
| `shopi` | 未能确认 | 旧官方域名连接失败，未取得可读文档。 | [官方参考 1](http://sapient-pair.com/shopi/automation.html)、[官方参考 2](http://sapient-pair.com/shopi/) |
| `shortcuts` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.apple.com/zh-cn/guide/shortcuts/apd9c112ca23/9.0/ios/26)、[官方参考 2](https://support.apple.com/zh-cn/guide/shortcuts/apdcd7f20a6f/9.0/ios/26)、[官方参考 3](https://support.apple.com/zh-cn/guide/shortcuts/apd624386f42/9.0/ios/26) |
| `simple-scan` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://agiletortoise.com/simple-scan/automation) |
| `sketch` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.sketch.com/app) |
| `skype` | 仅部分或历史证据 | 可读内容是历史 Skype URI 文档；保留旧入口，未宣称应用停用后仍受支持。 | [官方参考 1](https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference) |
| `slack` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.slack.dev/interactivity/deep-linking/) |
| `sorted` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.sortedapp.com/blog/url-scheme) |
| `soulver` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://documentation.soulver.app/documentation/integrations/url-schemes) |
| `sourcetree` | 未能确认 | 产品/帮助页未给出协议参数说明。 | [官方参考 1](https://www.sourcetreeapp.com/) |
| `spark` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://sparkmailapp.com/help/tips-tricks/streamline-your-workflow-with-deep-links) |
| `splashtop-business` | 已核对现有入口 | 普通抓取受限，通过官方搜索结果正文核对 Business shortcut/SOS 的 URI 及参数。 | [官方参考 1](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/36936249788955-Comparison-of-Legacy-and-New-UI-in-Splashtop-SOS)、[官方参考 2](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001482866-How-to-create-a-desktop-shortcut-to-always-connect-to-a-specific-computer)、[官方参考 3](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001642066-Other-RMMs) |
| `spotify` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)、[官方参考 2](https://developer.spotify.com/documentation/ios/tutorials/content-linking)、[官方参考 3](https://developer.spotify.com/documentation/android/tutorials/content-linking) |
| `steam` | 未能确认 | Valve 官方 wiki 返回 Anubis 人机校验页，不能把 HTTP 200 当成文档正文。 | [官方参考 1](https://developer.valvesoftware.com/wiki/Steam_browser_protocol)、[官方参考 2](https://developer.valvesoftware.com/wiki/Steam_Support_strings) |
| `story-planner` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://literautas.com/es/apps/story-planner/x-callback-url/) |
| `stream-deck` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/) |
| `surge` | 已同步差异 | 找到迁移后的当前官方文档；新增 install-module/email-license/enterprise-license 及 macOS surgeconfig 兼容 scheme；明确 iOS/激活窗口限制。 | [官方参考 1](https://manual.nssurge.com/tools/url-scheme.html) |
| `tablepro` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.tablepro.app/external-api/url-scheme) |
| `tadam` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://tadamapp.com/url-schemes/) |
| `tally` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://agiletortoise.com/tally/) |
| `telegram` | 已核对现有入口 | 只核对库已有 open/openDomain 的范围；不据此宣称覆盖 Telegram 的全部 deep links。 | [官方参考 1](https://telegram.org)、[官方参考 2](https://core.telegram.org/api/links) |
| `tembo` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/)、[官方参考 2](https://houdah.com/tembo/) |
| `terminology` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://agiletortoise.com/terminology/automation) |
| `termius` | 未能确认 | 官网未给出当前 URL scheme 参数规范。 | [官方参考 1](https://termius.com/) |
| `textastic` | 已同步差异 | 所有文件/自定义配置动作补齐成功/错误/取消/来源参数；注明打开文件后可能忽略成功回调。 | [官方参考 1](https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html) |
| `textmate` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://macromates.com/)、[官方参考 2](https://macromates.com/textmate/manual/opening-files) |
| `textwell` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://sociomedia.com/textwell/urlschemes/) |
| `theia` | 未能确认 | 产品页没有协议参数说明。 | [官方参考 1](https://theia-ide.org/) |
| `things` | 已同步差异 | 新增 version 和所有命令的回调选项；更新时保留空字符串清空字段和显式 false 恢复未完成状态。 | [官方参考 1](https://culturedcode.com/things/support/articles/2803573/) |
| `thunder` | 未能确认 | 产品页没有可核对的协议说明。 | [官方参考 1](https://www.xunlei.com/) |
| `tim` | 已同步差异 | 新增 settings/export/upgrade 窗口和 createRecord；所有 create 链接按官方标记为弃用；修正嵌套 getCurrentUrl 回调编码。 | [官方参考 1](https://tim.neat.software/help) |
| `timepage` | 已同步差异 | 新增路线、联系参与者、倒计时分享、打开 Actions、通过回调列出日历。 | [官方参考 1](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) |
| `timer-plus` | 未能确认 | 原官方 URL scheme 文档返回 404。 | [官方参考 1](https://www.timerplusapp.com/help/BkG3d6F_d-/) |
| `timing` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://timingapp.com/help/url-schemes) |
| `today-habit-tracker` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation) |
| `todoist` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.todoist.com/api/v1/) |
| `tower` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.git-tower.com/help/guides/integration/url-scheme/mac) |
| `trae` | 未能确认 | 官方文档入口仅返回脚本页面，没有可读协议正文。 | [官方参考 1](https://docs.trae.ai/ide/custom-agents-ready-for-one-click-import)、[官方参考 2](https://docs.trae.ai/ide/mcp-server-install-links?_lang=zh) |
| `trae-cn` | 未能确认 | 官方文档入口仅返回脚本页面，没有可读协议正文。 | [官方参考 1](https://docs.trae.ai/ide/custom-agents-ready-for-one-click-import)、[官方参考 2](https://docs.trae.ai/ide/mcp-server-install-links?_lang=zh) |
| `trello` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://support.atlassian.com/trello/docs/automate-with-url-scheme/) |
| `truecontext` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm)、[官方参考 2](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActions.htm)、[官方参考 3](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppCookbook/AppToApp_RecipeToOpenAndDispatch.htm) |
| `trust-wallet` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.trustwallet.com/developer/develop-for-trust/deeplinking)、[官方参考 2](https://developer.trustwallet.com/developer/new-asset/universal_asset_id) |
| `ulysses` | 未能确认 | 原参考为第三方历史镜像；新官方候选入口返回 404/登录页，无法确认当前协议。 | [第三方历史参考，非当前官方证据](https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html)、[官方候选 1](https://help.ulysses.app/kb/x-callback-url/)、[官方候选 2](https://ulysses.app/kb/x-callback-url/) |
| `upic` | 未能确认 | 现有官方文章介绍命令行使用，不能证明 deep link 参数。 | [官方参考 1](https://blog.svend.cc/upic/) |
| `upnote` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://help.getupnote.com/resources/x-callback-url-endpoints) |
| `verdent` | 未能确认 | 产品页没有协议参数说明。 | [官方参考 1](https://verdent.ai/) |
| `viber` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.viber.com/docs/tools/deep-links/)、[官方参考 2](https://developers.viber.com/docs/guides/chatex/) |
| `vscode` | 已同步差异 | 新增 vscode://agents/new，预填 prompt/workspace，不自动提交。 | [官方参考 1](https://code.visualstudio.com/docs/configure/command-line#_prepare-a-new-agent-session-draft) |
| `vscode-insiders` | 已同步差异 | 同步新增 vscode-insiders://agents/new。 | [官方参考 1](https://code.visualstudio.com/docs/configure/command-line#_prepare-a-new-agent-session-draft) |
| `vscodium` | 未能确认 | 官网没有可核对当前 editor URL 动作的规范。 | [官方参考 1](https://vscodium.com/) |
| `warp` | 已同步差异 | 新增设置页、搜索、widget、MCP gallery 安装和团队邀请预填链接，支持 warp/warppreview。 | [官方参考 1](https://docs.warp.dev/terminal/more-features/uri-scheme#settings-deep-links) |
| `waterminder` | 已核对现有入口 | 普通抓取受限，通过网页检索读取官方 x-callback-url 正文核对。 | [官方参考 1](https://funnmedia.zendesk.com/hc/en-us/articles/360007745191-WaterMinder-X-Callback-URL-Support) |
| `waze` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developers.google.com/waze/deeplinks) |
| `webex` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex)、[官方参考 2](https://help.webex.com/en-us/article/n5yzg8y/Webex-Add-Links)、[官方参考 3](https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling) |
| `webstorm` | 仅部分或历史证据 | JetBrains 共享支持说明提供 open/file/line/column 示例；未取得每个 IDE 独立的当前协议保证。 | [官方参考 1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2159/How-to-open-a-source-file-with-line-and-column-specified-from-an-URL) |
| `wemeet` | 未能确认 | 产品页没有协议参数说明。 | [官方参考 1](https://meeting.tencent.com/) |
| `what3words` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://developer.what3words.com/tutorial/mobile-linking-to-the-what3words-app) |
| `whereto` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://www.futuretap.com/api/whereto) |
| `windsurf` | 未能确认 | 原来源发生品牌/产品跳转，未取得当前 deeplink 规范；保留既有兼容入口。 | [官方参考 1](https://windsurf.com/)、[官方参考 2](https://codeium.com/)、[官方参考 3](https://docs.windsurf.com/windsurf/mcp/) |
| `working-copy` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://workingcopyapp.com/x-callback-url.html) |
| `written-down` | 仅部分或历史证据 | 仅取得 2018 年官方协议参考，当前版本支持及最近更新未获新证据；撤回本次新增 x-success 参数、测试和 EN/ZH 示例，保留原实现。 | [官方参考 1](https://tinkerbuilt.com/faq/x-callback-url/) |
| `xcode` | 未能确认 | 官网没有 xcode:// 当前协议规范。 | [官方参考 1](https://developer.apple.com/xcode/) |
| `yandex-maps` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web)、[官方参考 2](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app)、[官方参考 3](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-android-app) |
| `yandex-navigator` | 已核对现有入口 | 普通抓取缺少参数正文，通过网页检索核对路线、途经点、搜索、点位及身份参数。 | [官方参考 1](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params) |
| `yoink-ios` | 已核对现有入口 | 已核对可读官方说明中的现有动作与参数，未发现需要本次同步的新增差异。 | [官方参考 1](https://eternalstorms.at/yoink/ios/tips/) |
| `zed` | 已同步差异 | 新增 installSkill，SKILL.md 按 UTF-8 和无填充 base64url 编码；打开确认表单。旧 joinAgent 等入口保留，当前路由源码不能证明其继续支持。 | [官方参考 1](https://zed.dev/docs/ai/skills)、[官方参考 2](https://github.com/zed-industries/zed/blob/v1.22.0/crates/agent_skills/agent_skills.rs) |
| `zoom` | 仅部分或历史证据 | 通话和启动客户端的官方说明已核对；短信文档仍返回错误，短信部分无法完成确认。 | [官方参考 1](https://developers.zoom.us/docs/phone/outbound-call/)、[官方参考 2](https://developers.zoom.us/docs/meeting-sdk/ios/resource/launch-zoom-client-from-your-app/)、[官方参考 3](https://developers.zoom.us/docs/phone/outbound-sms/) |

## 验证和后续对照

- `pnpm build`：通过，3 个构建任务成功；包括 shared、协议包类型声明/打包及 VitePress 中英文文档。
- `pnpm coverage`：通过，257 个测试文件、3331 个测试用例；语句 99.58%、分支 97.49%、函数 99.8%、行 99.7% 的覆盖率。
- 修改涉及的 TypeScript 文件通过 Biome（实际检查 253 个文件）；`git diff --check` 通过。
- 验证范围为 URL 字符串、类型/打包和文档构建；没有自动启动已安装 App 执行操作。
- 抓取元数据保存在 [URL_SCHEME_AUDIT.json](./URL_SCHEME_AUDIT.json)：逐个模块列出原有/当前导出、所有查询 URL、HTTP 状态、最终地址、ETag、Last-Modified 和响应字节 SHA-256（可取得时）。网页检索补查与普通 HTTP 抓取分开标记；失败响应的状态不会因补查而伪装为 HTTP 成功。

这些元数据是后续核对的起点。网页哈希变化可能来自导航、动态内容或格式变化，仍需要比较协议动作和参数；对于本次无法确认的来源，下次取得可读官方正文后再决定是否修改。
