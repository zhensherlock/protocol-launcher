# URL Scheme 官方 App 候选清单

> 调研日期：2026-05-30
> 范围：在 2026-05-30 清单只实现部分 App 后继续搜索。
> 当前仓库快照已刷新：已经出现在 `packages/protocol-launcher/src`
> 下的候选项已从本清单移除。
> 追加调研：2026-05-31，基于 10+ 轮全网搜索，重点筛选 App 官网、
> 厂商官方文档、URI API、App Link 和 deep-link 参数参考。
> 追加官方文档复查：2026-05-31，仅采纳厂商自有 App 站点或官方开发者文档中
> 明确记录 URL scheme / deep link 语法的候选。
> 追加官方文档复查：2026-06-01，重新检查 Microsoft、Esri 以及 App/项目
> 官方文档中可构造的移动端 deep link 和 URL handler。
> 追加官方文档复查：2026-06-01，继续筛查 App 厂商浏览器、自动化、通信、
> 截图和企业移动端文档。
> 待实现清单复查：2026-06-01，已将较早官方待实现清单和当前
> `packages/protocol-launcher/src` 及 package exports 对比。
> 下载链接复查：2026-06-10，补充官方 App 下载入口汇总。
> 追加官方文档复查：2026-06-10，继续筛查 API 工具、阅读保存、
> 邮件、影视记录和消息入口；仅采纳官方文档明确给出 URL 格式的候选。
> 追加官方文档复查：2026-06-11，继续筛查支付/POS、钱包、远程桌面、
> 企业安全浏览器、媒体播放、自动化和开发预览 App；只采纳厂商官方文档、
> 官方仓库或官方帮助页明确记录 URL scheme / deep link 格式的候选。
> 下载链接复查：2026-06-11，补充本轮新增官方候选的 App 下载入口。
> 追加官方文档复查：2026-06-11，继续筛查交通导航、Esri 移动端、
> 中文超级 App、时间追踪、文件/资料管理、下载/转换工具和 OAuth 型
> mobile deeplink；只把可打开官方正文并能读到 URL 格式的项目加入候选。
> 追加官方文档复查：2026-07-03，继续筛查官方 App 站点、官方帮助中心、
> 厂商开发者文档和钱包/文件管理/浏览器/密码管理/邮件 App；本轮只新增
> 可在官方正文中读到精确 scheme、universal link 或 deeplink 模板的项目。
> 追加全网调研：2026-10-02 至 2026-10-03，新增及重新采纳 66 个 App / 产品族。
> 本轮按“必须有 App 官网说明”的要求，只用官网、官方帮助中心和正式文档网站；
> 官方 GitHub 仓库、源码注册或社区用户发帖不能单独作为纳入依据。

本文档整理 `protocol-launcher` 可继续添加的 App 候选。只有在 App 厂商、
官方开发者文档、官方帮助中心或厂商可控页面明确记录 URL scheme、
x-callback-url endpoint、URI 格式、universal link 或 App deep link
格式时，才纳入本清单。

## 纳入规则

- App 当前不在 `packages/protocol-launcher/src` 下。
- 来源必须是官方、厂商可控页面，或 App 官方开发文档。
- 仅有官方 GitHub 仓库、源码、社区用户帖子、第三方汇总或商店描述不够；
  必须能在 App 官网、官方帮助中心或正式文档网站找到对应说明。
- 来源必须明确记录可用的 URL scheme、URI scheme、
  x-callback-url endpoint 或 App deep link 格式。
- 优先选择能用精确 URL 字符串测试验证的 helper。

## 本轮新增及重新采纳（2026-10-03）

本轮补充 **66 个 App / 产品族**：**59 个有具体操作 URL 的候选**，以及
**7 个仅确认协议名、基础唤起或存在行为限制的项目**。其中 59 个此前未列出，
7 个从旧排除表转入：Loon、Strongbox、Jitsi Meet、Jamf Self Service、
Workspace ONE Intelligent Hub、Dropshare、MWeb。

所有条目均附 App 官网、厂商官方帮助中心或官方文档网站的直接链接。
仅有第三方整理、社区用户发帖、源码注册、官方 GitHub 仓库或 App Store
描述的项目不纳入本轮；Jitsi 的 `jitsi.github.io/handbook` 是项目正式文档网站，
不是仓库源码。普通/Pro/Lite 版本和同一产品的跨平台客户端合并计数；
有独立产品身份和协议的 App 分开记录。

这里确认的是**官网公开文档支持**，未安装所有 App 实测。P1 表示格式清楚、
适合优先评估 helper；P2 表示企业配置、历史版本、签名或平台等限制较多。
`<...>` 是模板占位符；表格只摘录代表入口，完整必填参数和编码规则以链接正文为准。

### 笔记、任务、计时与记录

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | SnipNotes | `SnipNotes://save?c=<内容>&t=<标题>`；`SnipNotes://search?q=<关键词>`；`SnipNotes://show?i=<索引>` | 创建、搜索和打开笔记。`c` 必填；打开笔记的索引从 0 开始。官网另列剪贴板保存入口。 | [URL scheme](https://www.snipnotes.de/en/url-scheme/) |
| P1 | nvUltra | `x-nvultra://make?txt=<正文>&title=<标题>`；`x-nvultra://find?txt=<关键词>`；`x-nvultra://open?notebook=<路径>&note=<笔记>` | 新建笔记、查找、打开 notebook/文件和导入主题；路径、查询值按文档编码。 | [Advanced Features](https://nvultra.com/help/advanced-features) |
| P2 | MWeb（iOS） | `mwebapp://?p=home`；`mwebapp://?p=lib&name=<名称>`；`mwebapp://?p=cloud` | 打开首页、资料库、云文档和本地文档。依据 iOS 2.3.2 官方发布说明；不据此推断 macOS 的其他协议。 | [MWeb iOS 2.3.2](https://www.mweb.im/14980284096598) |
| P1 | Anecnote | `anecnote://new?title=<标题>&content=<正文>`；`anecnote://open?id=<笔记ID>` | 新建/打开笔记，支持分类、标签、人物、`edit` 和 callback；新建时 title、content 必填。 | [Anecnote Custom URL scheme](https://knowledge.shakingthehabitual.com/en/article/191-anecnote-custom-url-scheme) |
| P1 | Timelined | `timelined://create?title=<标题>&date=<日期>`；`timelined://open?uuid=<事件UUID>` | 创建/打开时间线事件；支持结束日期、分类、人物、标签和 callback；title、date 必填。 | [Timelined URL scheme](https://knowledge.shakingthehabitual.com/en/article/198-timelined-url-scheme) |
| P1 | Scratchpad | `scratchpad:append?text=<文本>`；`scratchpad:prepend?text=<文本>` | 追加/前置文本；macOS 支持 `hide` 参数，官网也确认 iOS 可用。只有一个冒号，不要自行加 `//`。 | [Scripting](https://sindresorhus.com/scratchpad) |
| P1 | One Thing | `one-thing:?text=<文本>` | 设置菜单栏中的文本；单冒号格式。官网明确 URL scheme 不能读取当前文本。 | [Custom URL scheme](https://sindresorhus.com/one-thing) |
| P1 | Session | `session:///start?intent=<意图>&duration=<分钟>`；`session:///pause`；`session:///finish` | 开始、暂停、休息、结束和放弃专注会话。Pro 功能，要求 2.1+；保留三斜杠。 | [Session URL scheme](https://www.stayinsession.com/learn/session-url-scheme) |
| P1 | Clepsydra | `clepsydra://start?index=0`；`clepsydra://new?name=<名称>&minutes=5`；`clepsydra://x-callback-url/<action>?...` | 创建、启停、编辑和展示计时器；可用 name 或 index 定位，index 从 0 开始；支持回调。 | [URL Scheme](https://actproductions.net/clepsydra/url-scheme/) |
| P1 | Timer（PacoLabs） | `timer://?start=1,2`；`timer://?show=0`；`timer://?resumepause=1` | 按屏幕位置控制多个计时器，支持显示、启停、暂停/继续、锁定和 `x-success`。与仓库已有 Timer+ 是不同 App。 | [FAQ / URL scheme](https://pacolabs.com/iOS/Timer/?lang=en) |
| P2 | Fuel Nutrition | `fuel://today`；`fuel://log/meal`；`fuel://log/water`；`fuel://log/weight`；`fuel://fasting` | 打开饮食、饮水、体重、运动和断食等页面；官网记录的是页面跳转，不应宣称 URL 自动写入健康数据。 | [Quick Actions and Shortcuts](https://fuelnutrition.app/help/quick-actions) |
| P1 | Somnus | `somnus://case/<UUID>`；`somnus://patient/<UUID>`；`somnus://timer/start/<UUID>`；`somnus://search?q=<文本>` | v11 起支持病例/患者跳转、搜索和计时器。官网区分前台页面与后台计时操作。 | [Deep Links](https://www.somnusapp.com/deep-links) |

### 阅读、媒体与离线内容

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | Play | `play://add?url=<视频URL>`；`play://open?id=<视频ID>`；`play://open-random-new` | 保存视频、打开记录、随机打开未观看项目，以及打开 channels 页面。 | [Play Help / URL scheme](https://marcosatanaka.com/support/play/play-help.html) |
| P1 | MusicBox | `musicbox://add?url=<音乐URL>`；`musicbox://open?id=<项目ID>`；`musicbox://open-random-new` | 保存音乐链接、打开记录和随机打开新项目；与同一作者的 MusicHarbor 不混计。 | [MusicBox Help / URL scheme](https://marcosatanaka.com/support/musicbox/musicbox-help.html) |
| P1 | Fiery Feeds | `fiery://launch`；`fiery://account/<账号>`；`fiery://x-callback-url/subscribe?url=<URL>` | 打开账号、订阅 feed、添加链接和同步。官网分别列出普通路径及 x-callback-url 格式；二者的动作拼写可能不同。 | [Fiery Feeds URL Scheme](https://voidstern.net/fiery-feeds-url-scheme) |
| P1 | Offline Pages / Offline Pages Pro | `op-action://add?url=<URL>&title=<标题>`；`op-action://view?url=<URL>` | 保存网页、部署离线包和打开已缓存网页；官网给出详细抓取/刷新参数。同一产品的普通/Pro 版合计一项。 | [URL actions](https://codiumlabs.com/docs/urls/) |
| P2 | Offline Kiosk | `op-action-kiosk://deploy?url=<包URL>`；`op-action-kiosk://view?url=<URL>` | 部署离线包和展示网页；官网明确该 App 不支持 Offline Pages 的 `add` 动作。 | [URL actions](https://codiumlabs.com/docs/urls/) |
| P2 | Offline Forms | `op-action-forms://deploy?url=<包URL>`；`op-action-forms://view?url=<URL>` | 部署离线表单包及展示网页；官网明确不支持 `add`。 | [URL actions](https://codiumlabs.com/docs/urls/) |
| P1 | Accordance | `accord://study/topic?<主题>`；`accord://read/<资源>?<章节>`；`accord://search/<资源>?<查询>` | 查经、资源阅读、搜索及地图定位；官方手册确认 Mac、Windows、iOS 支持，并提供 HTTPS 替代形式。 | [Using Links for Common Tasks](https://accordancefiles2.com/helpfiles/14-macOS/mac_14/content/topics/05_dd/using_links_common_tasks.htm) |

### 词典

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | 欧路词典 | `eudic://dict/<单词>?context=<上下文>`；`eudic://recite` | 查词、百科、复习和相机取词；`peek` 仅 Android，同传入口仅 iOS。 | [URL Scheme](https://docs.eudic.net/1/jin-jie-gong-neng/url-scheme) |
| P1 | 法语助手 | `eudic-fr://dict/<单词>`；`eudic-fr://dailyword` | 独立 App/协议；查词及学习页面。平台专属动作按同一官方页区分。 | [URL Scheme](https://docs.eudic.net/1/jin-jie-gong-neng/url-scheme) |
| P1 | 西班牙语助手 | `eudic-es://dict/<单词>`；`eudic-es://recite` | 独立 App/协议；查词及学习页面。 | [URL Scheme](https://docs.eudic.net/1/jin-jie-gong-neng/url-scheme) |
| P1 | 德语助手 | `eudic-de://dict/<单词>`；`eudic-de://camera` | 独立 App/协议；查词及相机取词。 | [URL Scheme](https://docs.eudic.net/1/jin-jie-gong-neng/url-scheme) |

### 桌面、截图、浏览器与自动化

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | Wacdum | `wacdum://capture-area?x=0&y=0&width=1280&height=720&action=copy`；`wacdum://record-screen` | 官网列出截图、OCR、录屏、批注、历史记录等命令；要求 App 已在运行。 | [URL scheme](https://wacdum.com/url-scheme) |
| P1 | Dropshare | `dropshare5:///action/capture-selection`；`dropshare5:///action/upload?file=<路径>` | 截图/录屏后上传、上传文件和缩短链接；上传使用配置的连接，并可设置 callback。保留三斜杠。 | [Integrations / MCP](https://kb.dropshare.app/how-to/how-can-i-enable-dropshare-integrations.html) |
| P1 | MenubarX | `menubarx://open/?xurl=<URL>&xwidth=375&xheight=667&xbar=1` | 打开菜单栏浏览器窗口；xurl 必填，窗口尺寸、工具栏和 user-agent 可配置。 | [URL Scheme (for developer)](https://menubarx.app/faq/) |
| P1 | Velja | `velja:open?url=<编码URL>&prompt` | 选择浏览器打开链接；可重复 url 参数，并支持 app bundle ID、profile；单冒号格式。 | [Custom URL scheme](https://sindresorhus.com/velja) |
| P1 | System Color Picker | `system-color-picker:pick`；`system-color-picker:toggle` | 启动吸管取色或切换取色窗口；单冒号格式。 | [URL scheme](https://sindresorhus.com/system-color-picker) |
| P1 | Default Folder X | `defaultfolderx://Menu`；`defaultfolderx://QuickSearch`；`defaultfolderx://Settings`；`defaultfolderx://Update` | 打开菜单、快速搜索、Finder drawer、设置和检查更新；官网说明各入口加入的版本，大小写按原文保留。 | [Release Notes 6](https://www.stclairsoft.com/DefaultFolderX/release_notes6.html) |
| P1 | Short Run | `shortrun://run-shortcut?name=<名称>`；`shortrun://run-shortcut?name=<名称>&input=text&text=<文本>` | 在后台执行快捷指令；官网明确不支持 `x-callback-url`。 | [URL scheme](https://sindresorhus.com/short-run) |

### 网络与代理客户端

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | Loon | `loon://on`；`loon://off`；`loon://import?sub=<编码URL>`；`loon://flowmodel=filter` | 启停 VPN、切换模式和导入配置/规则/插件；还提供官方 HTTPS 替代入口。本轮从旧排除表转入。 | [URL Scheme](https://nsloon.app/docs/Scheme/) |
| P1 | Stash | `stash://install-config?url=<编码URL>`；`stash://install-override?url=<编码URL>`；`stash://start`；`stash://toggle` | 导入配置、override 和图标集、启停；也支持 clash scheme 与 `link.stash.ws`，不同形式的内嵌 URL 编码规则不同。 | [URL Schema](https://stash.wiki/en/faq/url-schema) |
| P1 | sing-box 官方图形客户端 | `sing-box://import-remote-profile?url=<编码URL>#<编码名称>` | 导入远程 profile；配置名称在 fragment 中。Android/Apple/Desktop 官方客户端作为同一产品族合计一项。 | [Graphical Clients / General](https://sing-box.sagernet.org/clients/general/) |
| P1 | Clash Verge Rev | `clash://install-config?url=<URI编码URL>` | 导入订阅；嵌套 URL 中的参数也须整体编码；只采用项目官网文档。 | [URL Schemes](https://www.clashverge.dev/guide/url_schemes.html) |
| P1 | Clash Party（原 Mihomo Party） | `mihomo://install-config?url=<编码URL>&name=<名称>` | 导入配置；URL 中的 name 优先于响应头文件名。与 Clash Verge Rev 是不同客户端。 | [URL Scheme](https://clashparty.org/docs/guide/urlscheme) |
| P1 | Karing | `karing://install-config?url=<编码URL>&name=<名称>`；`karing://restore-backup?url=<编码URL>`；`karing://connect` | 导入配置、恢复备份、连接/断开/重连；须开启监听系统 scheme；官网也列出 clash 兼容形式。 | [Scheme](https://karing.app/cooperation/scheme) |

### 企业客户端、邮件与文档协作

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P2 | Jamf Self Service Classic（macOS） | `jamfselfservice://content?entity=policy&id=<ID>&action=execute`；`action=view` | 执行/查看 policy、应用、配置和电子书，跳转分类、历史和搜索。可能要求登录；范围仅官网记录的 Self Service Classic。 | [Self Service URL Schemes](https://learn.jamf.com/r/en-US/jamf-pro-documentation-11.24.0/Jamf_Self_Service_for_macOS_URL_Schemes?contentId=7Ojl0FC6DCSez3ZMEfoPEA) |
| P2 | ME MDM（ManageEngine） | `memdm://`；`memdm://appcatalog`；`memdm://appcatalog/updates`；`memdm://updates?bundle=<bundleID>` | iOS 企业设备管理 App：打开目录、查看全部待更新应用或某个应用详情。 | [URL Scheme Support in iOS](https://download.manageengine.com/mobile-device-management/mdm-ios-url-schemes.pdf) |
| P1 | Workspace ONE Intelligent Hub | `wsonehub://favorites`；`wsonehub://apps/view?name=<名称>`；`wsonehub://people`；`wsonehub://support` | 打开收藏、应用目录、人员和支持页。官网按 iOS/Android 分栏列出支持差异，不可默认所有入口跨平台。 | [Deep Links to Intelligent Hub Pages](https://docs.omnissa.com/workspace-one-hub-services/DeepLinkstoWorkspaceONEIntelligentHubPagesSupportedoniOSandAndroidDevices) |
| P1 | Workspace ONE Web | `awb://<host/path>`；`awbs://<host/path>`；`awbf://<host/path>`；`awbfs://<host/path>` | 分别以 HTTP/HTTPS 普通窗口或全屏打开网页；需要企业配置和已激活的客户端。 | [Configure Workspace ONE Web / Custom Schemas](https://docs.omnissa.com/WS1Web/ConfigureWorkspaceONEWebUsingWorkspaceONEUEMConsole) |
| P2 | Ivanti Email+ | `email+app://email`；`email+app://calendar`；`email+app://contacts` | 打开 Email+ iOS 内邮件、日历和联系人；官网另列 `email+launcher://mibrowser?url=mailto:` 配置形式。 | [Configuring Web@Work to open mailto links in Email+](https://help.ivanti.com/mi/help/en_US/EML/4x/gdi/EmailPlusiOSGuide/Configuring_Web_Work_for.htm) |
| P1 | Showpad | `showpad://file/<ID>?page=5&modal=1`；`showpad://profile/<ID>`；`showpad://video` | 打开文件、指定页码、Experience、目录内文件或视频录制；要求有效的组织内容 ID。 | [URL Schemes](https://developer.showpad.com/docs/html5-apps/intro/url-schemes) |
| P2 | MetaMoJi Share for Business | `shareanytimebiz3:///import?data=<Base64URL数据>&name=<文件名>&srcname=<来源>&srcurl=<回调>`；`shareanytimebiz3:///importpb` | 官方 Ver.3 文档：通过 URL 或剪贴板导入文档，并回传数据；剪贴板流程要求客户端 3.9.5+。 | [Custom URL Scheme Specification](https://product.metamoji.com/manual/share_b3/document/snbv3_custom_url_scheme_ja.pdf) |
| P2 | MetaMoJi Note for Business | `noteanytimebiz3:///import?data=<Base64URL数据>&name=<文件名>&srcname=<来源>&srcurl=<回调>`；`noteanytimebiz3:///importpb` | 官方 Ver.3 文档：独立 Note 客户端的导入/回传协议；不能读取 Share 专属 `.btshare` 文件。 | [Custom URL Scheme Specification](https://product.metamoji.com/manual/share_b3/document/snbv3_custom_url_scheme_ja.pdf) |

### 设备控制、测量、打印、POS 与影像

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | CommandFusion iViewer | `iviewer5:///gui/?url=<编码GUI地址>&reloadGUI=1`；`iviewer4:///page/<页面名>` | 加载控制 GUI、切换页面；官网同时记录 iViewer 4/5/Lite，以同一产品族计一项。 | [iViewer URL Scheme and App Links](https://www.commandfusion.com/wiki2/software/gui-designer/url-scheme) |
| P2 | Qvido | `qvido-pro://start-measurement?ref-id=<ID>&callback-uri=<编码HTTPS地址>` | iPad 测量流程；ref-id 与 callback-uri 必填，完成后向 callback-uri 发送 JSON HTTPS PUT；dispatch-uri 为后续跳转。 | [URL scheme documentation](https://qvi.do/de/help-support/3-3-1/url-scheme-documentation) |
| P1 | TerminalWidget | `terminalwidget://update?target=<名称>&text=<文本>` | 更新文本/图表等 widget；须先手动放置 widget，并将 Target name 与 target 参数匹配。 | [URL Scheme Documentation](https://terminalwidget.app/url-scheme) |
| P2 | Luminair | `luminair:///parameters/1/fader?1.0` | 本机 iOS 灯光控制；URL 路径基于 OSC 方法，参数可控制 fader。示例按官方 v4 手册原文保留。 | [Luminair 4 User Manual / URL Scheme](https://support.luminair.app/hc/en-us/article_attachments/4411741402388) |
| P2 | PrintAssist / PrintAssist Lite | `printassist-x-callback-url://x-callback-url/open?...`；`printassist-x-callback-url://x-callback-url/barcode-encode?...` | 打印及生成条码；官网还列语音、通知动作和 x-success。普通/Lite 版合计一项。 | [PrintAssist Parameter Manual](https://iwares.co.jp/download/en/PrintAssistParameterE.pdf) |
| P2 | Star PassPRNT | `starpassprnt://v1/print/nopreview?html=<打印数据>&size=3&back=<回调URL>` | 调用 Star 打印 App，支持 HTML/PDF、打印机、纸宽及 callback 参数；以目标平台官方手册为准。 | [Data Specifications](https://www.star-m.jp/products/s_print/sdk/passprnt/manual/android/en/data_specifications.html) |
| P2 | VeriTrans mPOS2 | `mpos2-x-callback://x-callback-url/payment?...`；`cancel`；`refund` | 官方 iOS 文档明确固定 scheme/host 和付款、取消、退款动作；依赖商户配置、必要交易参数及成功/失败/取消回调。 | [mPOS2 iOS Apps Integration Dev Guide](https://www.veritrans.co.jp/trial/mpos/mPOS2_iOS_Apps_Integration_Dev_Guide.pdf) |
| P2 | OsiriX（macOS） | `osirix://?methodName=displayStudy&PatientID=<ID>`；`osirix://?methodName=downloadURL&URL=<URL>` | 调用本机影像查看器的显示、下载、检索等方法；不能通过 scheme 控制远程电脑，且 URL 不返回查询结果。 | [RIS Integration](https://www.osirix-viewer.com/resources/ris-integration/) |
| P2 | OsiriX HD（iOS） | `osirix://?methodName=downloadURL&URL=<URL>`；`methodName=findObject`；`methodName=retrieve` | 官方移动端手册只列这三个方法；不要复用 macOS 全量动作。它是独立移动 App。 | [OsiriX HD User Manual / URL scheme](https://www.osirix-viewer.com/Manual/) |
| P2 | RadiAnt DICOM Viewer | `radiant://?n=d&v=%22folder1%22`；`radiant://?n=pstv&v=0020000D&v=%22STUDYUID%22` | Windows：把命令行参数名/值按顺序映射到可重复的 n/v query；可打开本地影像和检索 PACS。 | [URL protocol](https://www.radiantviewer.com/dicom-viewer-manual/url-protocol.html) |

### 游戏、会议与中文平台 App

| 优先级 | App | 官网明确记录的 URL | 能力与边界 | 官方文档 |
| --- | --- | --- | --- | --- |
| P1 | Minecraft: Bedrock Edition | `minecraft://openServersTab`；`minecraft://connectToRealm?realmId=<ID>`；`minecraft://?import=<路径>` | 打开服务器页、Realm、导入世界/资源和跳转商城等；不采用官网明确未公开格式的 deeplinkToken。 | [Deep Link Handlers](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/deep-links?view=minecraft-bedrock-stable) |
| P1 | Minecraft Education | `minecraftedu://open`；`minecraftedu://servers?do=add&id=<ID>`；`minecraftedu://?joinworld=<代码>` | 官网在同一文档单独列出 Education 产品的世界、资源和服务器入口；与 Bedrock 分开计数。 | [Education Edition Deep Link Handlers](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/deep-links?view=minecraft-bedrock-stable) |
| P1 | Jitsi Meet | `org.jitsi.meet://<会议host>/<房间>`；Android `intent://<host>/<房间>#Intent;scheme=org.jitsi.meet;package=org.jitsi.meet;end` | 加入移动端会议；官方项目文档网站直接给出 iOS/Android 格式，本轮从旧排除表转入。 | [IFrame API / Opening meetings with the app](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/) |
| P2 | 抖音（H5 分享入口） | `snssdk1128://openplatform/share?...` | 官网 H5 Schema 代码公开分享格式，含 client_key、nonce_str、timestamp、signature 等；依赖开放平台签名和分享资源，不能写成免鉴权通用分享 API。 | [H5 Schema](https://open.douyin.com/platform/resource/docs/develop/common-tools/H5Schema/) |
| P2 | 京东 | `openApp.jdMobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22cartB%22%7D` | JSSDK 官网记录购物车跳转示例及 buildSchema 能力。该页主要描述京东内跳转；外部浏览器兼容性及其他 des 需另行验证，不能套用第三方 action 大全。 | [JD-JSSDK 4.x / 跳转](https://opendoc.jd.com/jd-jssdk/v4/jm-redirect.html) |

### 仅确认协议、基础唤起或行为受限（单独计 7 项）

以下仍有官网依据，但不与上面的完整功能候选混为一谈；只有协议名的条目，
暂不构造未经文档确认的路径或参数。

| App | 官网记录 | 可确认范围 | 官方文档 |
| --- | --- | --- | --- |
| Actions | `actions://` | 官网只确认打开 App；不能把 Shortcuts 内的全部 actions 推断为 URL endpoints。 | [URL Scheme](https://sindresorhus.com/actions) |
| Finalist | `finalist://` | 官网确认协议，但该页没有公布具体路径/参数；只能记录协议支持，暂不设计 addTask 等 helper。 | [Automation](https://www.finalist.works/docs/automation/) |
| Strongbox | scheme 名称 `strongbox` | 官方帮助中心确认 scheme/bundle ID；没有具体数据库/条目动作格式。本轮从旧排除表转入此表。 | [URL Scheme and Bundle ID](https://strongbox.reamaze.com/kb/faqs/what-is-strongboxs-url-scheme-and-bundle-id) |
| Citrix Secure Mail | scheme 名称 `ctxmail` | 官方 SDK 文档说明用它处理其他 App 的 mailto URL；未在该页公布完整邮件参数表。 | [API for iOS](https://docs.citrix.com/en-us/mam-sdk/developer-guide-overview/api-ios.html) |
| BlackBerry Work | `gmmmailto:` / `gwmailto:` | 官方管理手册记录邮件调用前缀；要求启用 Allow 3rd Party App to Send Mail；此处不推断未列出的参数。 | [Administration Guide / Interoperability](https://docs.blackberry.com/content/dam/docs-blackberry-com/release-pdfs/en/blackberry-work-notes-tasks/3_19/BlackBerry-Work-Notes-and-Tasks-Admin-Guide-for-UEM-3-19.pdf) |
| DIVUS VIDEOPHONE | `divusvp4://` | 官方手册记录将 App 拉到前台；当前证据仅支持基础唤起。 | [VIDEOPHONE Manual / URL SCHEME](https://www.divus.eu/media/Intercom/DIVUS_VIDEOPHONE_MANUAL_EN.pdf) |
| NoMachine Client | `nx://` | 官方知识库确认客户端 URL handler，但 macOS 7 的连接参数被忽略问题仍标为 Open；先记录支持事实，完整连接 helper 须再核验版本和语法。 | [URL format on macOS / Trouble Report](https://kb.nomachine.com/TR10S10392) |

### 本轮复查后仍不采纳

| App / 范围 | 原因 |
| --- | --- |
| BlackBerry Access | 搜索索引仍能看到旧官网的 `access://open?url=` 说明，但多个旧 PDF 现为 404，HTML 入口迁移到 3.20 后未能解析到对应正文；不计入本轮 66 项。 |
| Byword、Command-C、Daymate、Textkraft、TextTool、Procraster | 旧索引链接出现 404、关闭、停放、访问失败或转向无关内容；历史协议记录不能替代当前可核对的 App 官方说明。 |
| IINA、HashPhotos、Albums、MusicHarbor、Anytype、Tana、Heptabase、Notesnook | 本轮未找到同时满足“官网正文 + 明确协议格式”的资料；第三方示例、源码或仅提到支持自动化不够。 |
| Logseq、Zotero、Gaia GPS、CalTopo、Remmina | 发现的相关材料主要是社区讨论、第三方资料，或未能读到符合本轮标准的正式文档正文；暂不补入候选。 |
| Firefox iOS、Brave iOS | 原清单依据仅为官方 GitHub open-in-client 仓库；本轮未找到对应官网文档正文，按本轮更严格条件移出待实现候选。 |
| SAP MDK、Simplifier、iAM Smart 的部分 SDK 资料 | 可配置 scheme、示例客户端或 SDK 接入说明不自动等于某个固定 App 的已公开可构造协议；没有补成通用 App 候选。 |

本轮可优先考虑 SnipNotes、nvUltra、Anecnote、Timelined、Play、MusicBox、
Fiery Feeds、欧路词典系列、Velja、Short Run、Session 和代理客户端；
企业、打印、POS 与设备控制条目保留给相应使用场景。旧开发顺序是历史建议，
本轮新增项应结合这些能力与限制重新排期。

## 历史官方候选（2026-05 至 2026-07）

以下保留此前调研的官网来源；本轮重点是补充遗漏 App，并未逐一重新实测这些历史条目。
已实现的 Documents by Readdle 已从候选及开发顺序移除。

| 优先级 | App | 官方 scheme / deep link | 建议 helper | 适合原因 | 官方文档 |
| --- | --- | --- | --- | --- | --- |
| P1 | Uber | `https://m.uber.com/ul/?...` ride request deeplink | `rideRequest()`, `setPickup()` | Uber 官方开发者文档支持用 universal link 低成本进入叫车请求。实现时应使用官方 universal link，而不是未文档化的 `uber://` 形式。 | [Uber Ride Requests](https://developer.uber.com/docs/getting-started), [Uber Ride Request Button](https://developer.uber.com/docs/rides/ride-request-buttons) |
| P1 | Linear | `https://linear.new?...`, `https://linear.app/team/<team>/new?...` | `newIssue()`, `newTeamIssue()`, `issueTemplate()` | Linear 官方开发者文档提供了可构造的预填充 issue 创建链接。实现时应使用 universal link，而不是未文档化的 `linear://`。 | [Create issues using linear.new](https://linear.app/developers/create-issues-using-linear-new), [Linear create issues](https://linear.app/docs/creating-issues) |
| P1 | TablePlus | `postgres://...` / `postgresql://...` 这类 connection URL deeplink，以及 TablePlus query 参数 | `openConnection()`, `openPostgres()`, `openWithFilter()`, `openWithRawQuery()` | TablePlus 官方文档没有提供 `tableplus://` 自定义 scheme 参考。它记录的是 CLI/deeplink 用法：connection URL、`Copy as URL`、`open -a TablePlus "url"`，以及用于 schema、table、filter 和 raw query 的 TablePlus 特有 query 参数。 | [TablePlus Connections & CLI](https://docs.tableplus.com/gui-tools/manage-connections) |
| P1 | Postico | `postgres:`, `postgresql:`, `redshift:`, `postico:`, `postgres+ssh:`, `postgresql+ssh:`, `postico+ssh:` | `openConnection()`, `openPostgres()`, `openRedshift()`, `openSshConnection()` | Postico 2 官方文档明确记录了打开 PostgreSQL/Redshift 连接以及新增或更新 server entry 的 URL schemes，并包含 `postgresql+ssh:` 这个 SSH 变体。 | [Postico 2 Connection URLs](https://eggerapps.at/postico2/documentation/postico-url-scheme.html) |
| P1 | Sequel Ace | `mysql://[user[:password]@][host[:port]][/database]?...` | `openConnection()`, `openTcp()`, `openSocket()`, `openSsh()`, `openAwsIam()` | Sequel Ace 官方文档记录了程序化打开 MySQL/MariaDB 连接的 URL，以及 SSH、AWS IAM 等 query 参数。 | [Sequel Ace Open a Connection via URL](https://sequel-ace.com/get-started/connect-via-url.html), [Sequel Ace connection types](https://sequel-ace.com/get-started/connection-types.html) |
| P1 | Panic Prompt | `ssh://...`, `prompt-ssh://...`, `telnet://...`, `prompt-favorite://...` | `ssh()`, `promptSsh()`, `telnet()`, `promptTelnet()`, `favorite()` | Panic 官方帮助文档记录了启动 Prompt 以及预填 SSH/Telnet 连接信息的 URL 格式。适合补充 Termius/Terminology 这一类终端工具。 | [Prompt URL schema](https://help.panic.com/prompt/url-schema/) |
| P2 | MailMate | 扩展 `mailto:`, `mlmt:`, `message:`, `mid:`, `cid:` | `compose()`, `composeExtended()`, `openMessage()`, `openMessageId()`, `openContentId()` | 官方手册记录了 MailMate 的扩展邮件 URI 支持。它是 macOS-only 且较小众，但很适合 power-user 邮件链接。 | [MailMate URI Schemes](https://manual.mailmate-app.com/extended_url_scheme), [MailMate Preferences](https://manual.mailmate-app.com/preferences) |
| P1 | Rocket.Chat | `https://go.rocket.chat/...`, `rocketchat://...` | `addServer()`, `authenticate()`, `openRoom()`, `openInvite()`, `openConference()` | 官方开发者文档说明 universal link 和 custom protocol 前缀在支持的桌面/移动客户端中可互换。适合自托管协作场景。 | [Rocket.Chat Deep Linking](https://developer.rocket.chat/docs/deep-linking) |
| P1 | WhatsApp | `https://wa.me/<number>?text=...` | `clickToChat()`, `message()`, `shareText()` | WhatsApp 官方帮助中心记录了 click-to-chat link。实现时优先使用官方 `wa.me` universal link，而不是未文档化的 `whatsapp://` 变体。 | [WhatsApp click to chat](https://faq.whatsapp.com/5913398998672934/?locale=en_US) |
| P1 | Threema | `https://threema.id/<id>?text=...`, `https://threema.id/compose?text=...`, legacy `threema://` | `addOrOpenContact()`, `composeToContact()`, `compose()` | 官方支持文档公开了隐私友好的 universal link，并明确建议尽量优先使用这些链接而不是旧的 `threema://` action。 | [Threema URL actions](https://threema.com/en/support) |
| P1 | Cyberduck | Cyberduck 作为默认处理器时可处理 `ftp://...`, `sftp://...`, `webdav://...`, `s3://...` | `openConnection()`, `ftp()`, `sftp()`, `webdav()`, `s3()` | Cyberduck 官方文档记录了通过完整连接 URL 打开连接，并可将 Cyberduck 配置为默认协议处理器。很实用，但 helper 要明确这是标准协议 URL。 | [Cyberduck Opening Connections](https://docs.cyberduck.io/cyberduck/connection/), [Cyberduck CLI URI rules](https://docs.cyberduck.io/cli/) |
| P2 | SAP Fiori Client | `<scheme>://x-callback-url/openFioriUrl?url=...`，默认 `com.sap.fiori.client.xcallbackurl` | `openFioriUrl()`, `openWithPackageScheme()` | SAP 官方文档记录了默认和自定义 client 的 scheme 构造方式。偏企业场景，但可信度高且格式精确。 | [SAP Fiori Client deep links](https://help.sap.com/docs/SAP_MOBILE_PLATFORM_SDK_31/e2ed9b4f3edb4391a7a89b1af84d9606/6e2698619acb462bbadd8f4e40fcfdd3.html) |
| P1 | iTerm2 | `iterm2:/command?c=...`，可选 host/user 和 `d`、`silent` query 参数 | `command()`, `remoteCommand()`, `silentCommand()` | iTerm2 官方文档记录了用于重新运行本地或远程 shell 命令的 command URL，并说明 profile 也可以处理 `ssh` 等任意 scheme。 | [iTerm2 Command URLs](https://iterm2.com/documentation-command-selection.html), [iTerm2 Preferences URL Schemes](https://iterm2.com/3.2/documentation-preferences.html) |
| P1 | ArcGIS Field Maps | `https://fieldmaps.arcgis.app?referenceContext=...&itemID=...` | `openMap()`, `centerMap()`, `searchMap()`, `showFeature()`, `addFeature()` | Esri 官方文档定义了 Field Maps app links，可用于打开地图、居中、搜索、显示 feature、启动采集，以及 task 相关 add/update 流程。 | [Field Maps deploy links](https://doc.arcgis.com/en/field-maps/latest/prepare-maps/deploy-your-map.htm), [Field Maps tasks links](https://doc.arcgis.com/en/field-maps/latest/prepare-maps/configure-tasks.htm) |
| P2 | ArcGIS Workforce | `https://workforce.arcgis.app?portalURL=...`，以及 `/apps/workforce/projects/<project-id>` 下的 web assignment links | `openMobile()`, `openPortal()`, `openAssignment()`, `newAssignment()` | Esri 官方文档记录了 Workforce mobile 与 web app links，可用于部署、打开 assignment，以及预填 dispatcher 创建 assignment。 | [Workforce deployment links](https://doc.arcgis.com/en/workforce/android-phone/help/deploy.htm) |
| P1 | Cisco Jabber | `xmpp:`, `im:`, `tel:`, `ciscotel:`, `sip:`, `clicktocall:` | `chatXmpp()`, `chatIm()`, `callTel()`, `callCiscoTel()`, `callSip()`, `clickToCall()` | Cisco 官方部署文档列出了 Jabber protocol handlers 和支持参数，可用于 click-to-call 与 click-to-IM 集成。实现时要和通用 Apple `tel:` helper 分开。 | [Cisco Jabber protocol handlers](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/jabber/11_5/CJAB_BK_D00D8CBD_00_deployment-installation-guide-cisco-jabber115/CJAB_BK_D00D8CBD_00_deployment-installation-guide-cisco-jabber115_chapter_010011.html), [Cisco Jabber parameters](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/jabber/11_5/CJAB_BK_J06BEF2D_00_jabber-parameters-reference-guide-115/CJAB_BK_J06BEF2D_00_jabber-parameters-reference-guide-115_chapter_0110.html) |
| P2 | OsmAnd | `https://osmand.net/map/?pin=...#zoom/lat/lon`, `https://osmand.net/map/?start=...&finish=...&profile=...` | `showPin()`, `showMap()`, `navigate()`, `geo()` | OsmAnd 官方技术文档列出了 Android geo intents 和 OsmAnd-specific app links，可显示 pin、居中地图并启动导航。 | [OsmAnd intents and app links](https://www.osmand.net/docs/technical/algorithms/osmand-intents/) |
| P1 | AMap / 高德地图 | `iosamap://myLocation?...`, `iosamap://path?...`, `androidamap://navi?...`, `amapuri://route/plan?...`, `https://uri.amap.com/...` | `myLocation()`, `route()`, `navigate()`, `marker()`, `search()`, `webMarker()`, `webNavigation()` | 高德地图官方移动端和 URI API 文档记录了 iOS、Android、HarmonyOS 与 HTTPS 调起格式，覆盖打开 App、当前位置、路线规划、导航、POI 标记和搜索。它是现有地图 helper 之外很重要的中文地图候选。 | [高德地图移动端接入](https://lbs.amap.com/api/amap-mobile/gettingstarted), [高德地图 iOS 路线规划](https://lbs.amap.com/api/amap-mobile/guide/ios/route), [高德 URI API 概览](https://lbs.amap.com/api/uri-api) |
| P1 | Baidu Maps / 百度地图 | `baidumap://map`, `baidumap://map/marker?...`, `baidumap://map/direction?...`, `https://api.map.baidu.com/...` | `openMap()`, `marker()`, `direction()`, `navigation()`, `search()`, `webDirection()` | 百度地图官方 URI API 文档记录了调起百度 Web 地图和百度地图移动客户端的方式，可用于地图展示、搜索、路线规划和导航。HarmonyOS 文档也给出了 `baidumap://map` 这类原生 App 链接。 | [百度地图 URI API 概览](https://api.map.baidu.com/lbsapi/cloud/uri.htm), [百度地图 URI API 指南](https://api.map.baidu.com/lbsapi/cloud/uri-developer.htm), [百度地图 Harmony App 调起](https://lbs.baidu.com/docs/harmony?title=harmonynextsdk%2Fguide%2Ftool%2Fbaiduapi) |
| P1 | Tencent Map / 腾讯地图 | `https://apis.map.qq.com/uri/v1/search?...`, `https://apis.map.qq.com/uri/v1/routeplan?...`, `marker`, `geocoder`, mobile `qqmap://map/...` routes | `search()`, `routePlan()`, `marker()`, `geocoder()`, `nearby()`, `webUri()` | 腾讯位置服务官方 URI API 记录了地图调起方法和参数，覆盖搜索、路线规划、逆地理解析、街景和 marker。实现时优先提供浏览器安全的 HTTPS URI API helper，只在 Android/iOS 章节明确记录时再加入移动端 scheme helper。 | [腾讯地图 URI API 概览](https://lbs.qq.com/webApi/uriV1/uriGuide/uriWebGuide), [腾讯地图 marker/geocoder URI API](https://lbs.qq.com/webApi/uriV1/uriGuide/uriWebMarker) |
| P1 | Feishu / Lark AppLink | `https://applink.feishu.cn/client/web_url/open?...`, `lark://msgcard/unsupported_action` | `openWebUrl()`, `openWebUrlInSidebar()`, `unsupportedAction()` | 飞书开放平台官方 AppLink 文档记录了在飞书/Lark 容器中打开指定网页的 client AppLink URL，消息卡片 URL 元素文档也记录了各平台 URL 行为和 `lark://msgcard/unsupported_action` 哨兵链接。实现时使用 HTTPS AppLink helper，不要发明未文档化的 `feishu://` 路由。 | [飞书打开 WebView AppLink](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-the-web-view-in-feishu-to-access-the-specified-url), [飞书 Android AppLink 能力](https://open.feishu.cn/document/native-integration/open-capability/capability-components/applink-capability/android/android), [飞书 URL 元素](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements) |
| P1 | WeChat Mini Programs / 微信小程序 | `weixin://dl/business/?t=...`，以及生成的 URL Link / Short Link | `openGeneratedScheme()`, `openGeneratedUrlLink()`, `openGeneratedShortLink()` | 微信小程序官方后端 API 可生成从微信外打开已发布小程序的 URL Scheme 和 URL Link。实现时应做已生成官方链接的透传 helper，不要在客户端伪造 ticket。 | [微信 URL Scheme 生成](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html), [微信 URL Link 生成](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-link/urllink.generate.html), [微信 Short Link 生成](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/short-link/shortlink.generate.html) |
| P2 | OmniPlan | `omniplan:///task/<task-id>`, `omniplan://localhost/omnijs-run?script=...` | `openTask()`, `runScript()` | Omni Automation 的 OmniPlan 官方文档展示了 task link 和 Omni Automation script URL，用于 App-to-App 工作流。它适合做一个聚焦的 task-link/script-runner helper，并和现有 Omni 系列包保持一致。 | [OmniPlan App-to-App](https://www.omni-automation.com/omniplan/app-to-app.html), [OmniPlan scenarios](https://www.omni-automation.com/omniplan/scenarios.html) |
| P2 | OmniGraffle | `omnigraffle://localhost/omnijs-run?script=...`, `omnigraffle:///omnijs-run?script=...` | `runScript()`, `runFunction()` | Omni Automation 的 OmniGraffle 官方文档展示了 script URL 和 App-to-App 自动化示例。它可以补齐当前缺少的 Omni App 目标，和 OmniFocus、OmniOutliner、OmniPlan 保持同一族能力。 | [Omni Automation App-to-App](https://omni-automation.com/actions/action-02.html), [OmniGraffle layers automation](https://omni-automation.com/omnigraffle/layers.html) |
| P1 | ArcGIS Navigator | `https://navigator.arcgis.app?itemID=...`, `routeItemID=...`、可重复 `stop=...`、`navigate=true`、`callback=...` | `openMap()`, `openRoute()`, `routeToStop()`, `routeToStops()`, `startNavigation()`, `withCallback()` | Esri 官方 Navigator deploy 文档提供了完整 Navigator links 章节，记录了下载/打开地图、打开 shared route、按 stop 规划路线、优化路线、选择 travel mode、开始导航以及完成后回调到来源 App 的参数。 | [ArcGIS Navigator deploy links](https://doc.arcgis.com/en/navigator/android-phone/help/deploy.htm) |
| P2 | ArcGIS Explorer | `https://explorer.arcgis.app?itemID=...`, `portalURL=...`, `center=...`, `scale=...`, `bookmark=...`, `search=...` | `openMap()`, `openPortalMap()`, `centerMap()`, `openBookmark()`, `searchMap()` | Esri 官方 Explorer deploy 文档记录了 Explorer links，可打开 web map 或 MMPK、连接 portal、居中和缩放地图、打开 bookmark、进入 markup mode 和执行搜索。 | [ArcGIS Explorer deploy links](https://doc.arcgis.com/en/explorer/android-phone/help/deploy.htm) |
| P2 | Emacs Org Protocol | `org-protocol://capture?...`, `org-protocol://store-link?...`, `org-protocol://open-source?...` | `capture()`, `storeLink()`, `openSource()` | Org Mode 官方 Worg 文档将 `org-protocol.el` 描述为可从外部应用触发 Emacs/Org action 的 custom URL scheme。它不是移动端 App，但很适合开发者/自动化 URL 生成，并且 URL 形态明确。 | [Org Protocol documentation](https://orgmode.org/worg/org-contrib/org-protocol.html) |
| P2 | Bruno | `bruno://app/oauth2/callback` | `oauth2Callback()` | Bruno 官方 OAuth2 System Browser 文档记录了 App 接收 OAuth 回调的 custom URL scheme。它只适合 OAuth callback/server 集成，不应扩展成通用 Bruno launcher。 | [Bruno System Browser OAuth2](https://docs.usebruno.com/auth/oauth2-2.0/system-browser) |
| P2 | Readwise Reader | `https://wise.readwise.io/save?url=...` | `saveUrl()` | Readwise Reader 官方文档公开了 URL-based save format，可通过 HTTPS 链接将公开文章保存到 Reader inbox。它不是 custom scheme，但属于官方可构造的 Reader workflow link。 | [Readwise Reader adding content](https://docs.readwise.io/reader/docs/faqs/adding-new-content) |
| P2 | Messenger | `http://m.me/PAGE-NAME`，可带官方 referral 参数 | `openPage()`, `openPageWithRef()` | Meta 官方 Messenger Platform 文档记录了 m.me links，可打开与 Facebook Page 关联的 Messenger 对话。实现时使用官方 HTTPS/HTTP link，不要使用未文档化的 `fb-messenger://`。 | [Messenger m.me links](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/m-me-links) |
| P2 | Instagram Messaging | `https://ig.me/m/<IG_USERNAME>` | `openBusinessChat()` | Meta 官方 Instagram Messaging 文档记录了 ig.me links，用于让用户联系 Instagram Professional account。它适合作为 business messaging 入口 helper，而不是通用 Instagram scheme。 | [Instagram ig.me links](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links) |
| P1 | Square Point of Sale | `square-commerce-v1://payment/create?data=...` | `createPayment()`, `paymentRequest()` | Square 官方 POS API 文档明确记录 Point of Sale app 接收 `square-commerce-v1` scheme，`data` 是 percent-encoded JSON 请求对象。适合做严格的支付请求 URL 生成，但示例必须使用测试金额和假 callback。 | [Square POS API how it works](https://developer.squareup.com/docs/pos-api/how-it-works), [Square POS mobile web technical reference](https://developer.squareup.com/docs/pos-api/web-technical-reference) |
| P1 | SumUp | `sumupmerchant://pay/1.0?...` | `paymentSwitch()`, `checkout()` | SumUp 官方 Payment Switch 文档链接到官方 iOS/Android URL scheme 仓库，仓库明确记录 launch URL、必填 query 参数和 callback 参数。适合轻量 POS app handoff。 | [SumUp Payment Switch](https://developer.sumup.com/terminal-payments/payment-switch/), [SumUp iOS URL scheme](https://github.com/sumup/sumup-ios-url-scheme), [SumUp Android URL scheme](https://github.com/sumup/sumup-android-url-scheme) |
| P1 | Lyft | `lyft://ridetype?...`, `https://ride.lyft.com/u?...` | `requestRide()`, `nativeRideRequest()`, `webRideRequest()` | Lyft 官方 iOS/Android SDK README 记录了 deeplinking 能力，并在 iOS SDK 中区分 native Lyft app 与 mobile web experience。实现时保留 client ID、ride type、pickup/dropoff 坐标等官方参数，不要使用真实行程数据。 | [Lyft iOS SDK Deeplinking](https://github.com/lyft/Lyft-iOS-sdk), [Lyft Android SDK Deeplinking](https://github.com/lyft/lyft-android-sdk) |
| P1 | Parallels Client | `tuxclient:///?Command=...`, `prlclient:///?Command=...` | `launchApp()`, `get2xa()`, `getVersion()`, `logOff()` | Parallels 官方 RAS Client Integration Guide 记录了 Client URL Scheme，支持 `LaunchApp`、`Get2xa`、`GetVersion` 和 `LogOff` 等命令。它面向企业远程应用启动，参数里可能出现 server、session 和加密密码，示例必须全部使用占位值。 | [Parallels Client URL Scheme](https://docs.parallels.com/landing/ras-client-integration-guide/parallels-client-url-scheme), [Parallels URL Format](https://docs.parallels.com/landing/ras-client-integration-guide/parallels-client-url-scheme/url-format), [Parallels LaunchApp](https://docs.parallels.com/landing/ras-client-integration-guide/parallels-client-url-scheme/commands-and-options/launch-published-resources-launchapp) |
| P1 | Omnissa Horizon Client | `vmware-view://...` | `openServer()`, `startSession()`, `launchDesktopOrApp()` | Omnissa 官方 Horizon Client 文档有 `vmware-view` URI syntax 和 examples 页面，可用于创建打开 Horizon Client、连接 server、启动 desktop/app 的 URI。实现前要以当前 Omnissa 页面复核参数名。 | [Syntax for Creating vmware-view URIs](https://docs.omnissa.com/bundle/HorizonClient-MacGuideV2206/page/SyntaxforCreatingvmware-viewURIs.html), [Examples of vmware-view URIs](https://docs.omnissa.com/bundle/HorizonClient-MacGuideV2206/page/Examplesofvmware-viewURIs.html) |
| P2 | Citrix Secure Web | `ctxmobilebrowser://...`, `ctxmobilebrowsers://...` | `openHttp()`, `openHttps()` | Citrix 官方 Secure Web 文档说明 Secure Web 会把 `ctxmobilebrowser://` 转换为 `http://`，把 `ctxmobilebrowsers://` 转换为 `https://`，用于在受管容器内打开内部链接。 | [Citrix Secure Web PDF](https://docs.citrix.com/en-us/citrix-secure-web/secure-web.pdf) |
| P3 | Citrix Workspace Launcher | `receiver://...` | `openReceiverLauncher()` | Citrix 官方 Workspace User Access 文档说明 Workspace 网站会用 `receiver://` 调起 Citrix Workspace Launcher 来检测和启动本机 Workspace app。它不是通用资源 URL grammar，适合低优先级透传 helper。 | [Citrix Workspace user access](https://docs.citrix.com/en-us/citrix-workspace/get-started/user-access.html) |
| P2 | VLC for iOS | `vlc://`, `vlc-x-callback://x-callback-url/stream?url=...`, `download?url=...` | `open()`, `stream()`, `download()` | VideoLAN 官方 wiki 明确记录 VLC for iOS 的 custom `vlc://` protocol 和 `vlc-x-callback://` 的 stream/download actions。实现时只使用公开媒体 URL 示例，不写私有流地址。 | [VideoLAN VLC for iOS x-callback-url](https://wiki.videolan.org/Documentation:IOS/#x-callback-url) |
| P1 | Phantom | `https://phantom.app/ul/<version>/<method>`, `phantom://<version>/<method>` | `connect()`, `signAndSendTransaction()`, `signMessage()`, `browse()` | Phantom 官方 deeplinks 文档记录了 Solana provider methods 的 universal link 格式，并说明 `phantom://` custom protocol 也可用但不推荐。实现时优先使用 HTTPS universal link。 | [Phantom deeplinks](https://docs.phantom.com/phantom-deeplinks/deeplinks-ios-and-android) |
| P1 | Solflare | `https://solflare.com/ul/<version>/<method>` | `connect()`, `signAndSendTransaction()`, `signTransaction()`, `signMessage()` | Solflare 官方文档记录 iOS/Android 可通过 universal links/deeplinks 与 Solflare 交互，provider methods 使用 `https://solflare.com/ul/<version>/<method>` 格式。 | [Solflare Deeplinks](https://docs.solflare.com/solflare/technical/deeplinks), [Solflare Provider Methods](https://docs.solflare.com/solflare/technical/deeplinks/provider-methods) |
| P1 | Backpack Wallet | `https://backpack.app/ul/v1/connect`, `https://backpack.app/ul/v1/signAndSendTransaction` 等 | `connect()`, `signAndSendTransaction()`, `signTransaction()`, `signMessage()` | Backpack Wallet 官方文档记录了 deeplink provider methods，并在各 method 页给出 Base URL 和 query 参数。实现时需要把 session、nonce、payload 视为不透明敏感值。 | [Backpack Connect deeplink](https://docs.backpack.app/deeplinks/provider-methods/connect), [Backpack SignAndSendTransaction deeplink](https://docs.backpack.app/deeplinks/provider-methods/signandsendtransaction) |
| P1 | Tonkeeper | `ton://transfer/<address>?amount=...&text=...`, `tonkeeper://transfer/...`, `https://app.tonkeeper.com/transfer/...`, `https://app.tonkeeper.com/v1/txrequest-inline/<payload>` | `transfer()`, `transferJetton()`, `txRequestInline()`, `txRequestUrl()` | Tonkeeper / TON 官方文档记录了 `ton://`、`tonkeeper://` 和 `app.tonkeeper.com` 三类可互换深链，覆盖 TON/Jetton 转账、过期时间和 transaction request。适合做严格的钱包链接生成器。 | [Tonkeeper deep linking](https://docs.tonconsole.com/tonkeeper/deep-linking), [TON deep links](https://docs.ton.org/onboarding/wallet-apps/deep-links), [Tonkeeper wallet API](https://github.com/tonkeeper/wallet-api) |
| P1 | imToken | `imtokenv2://navigate/<route>`, `imtokenv2://navigate/DappView?url=...`, `imtokenv2://wc?uri=...` | `navigate()`, `openDapp()`, `walletConnect()`, `openTokenlon()` | imToken 官方开发者文档给出固定前缀、路由表、DApp URL 编码规则和 WalletConnect 调起格式。实现时可从低风险的 `navigate()` / `openDapp()` 开始。 | [imToken Deep Linking](https://imtoken.gitbook.io/developers/products/deep-linking) |
| P1 | TokenPocket | `tpoutside://pull.activity?param=...`, `tpdapp://open?params=...` | `login()`, `transfer()`, `pushTransaction()`, `sign()`, `openDapp()` | TokenPocket 官方开发者帮助页记录了用 encoded JSON `param` 调起授权、转账、签名、交易发送和 DApp 浏览器，并说明 H5 场景回调方式。适合做 encoded payload helper。 | [TokenPocket pull up wallet with DeepLink](https://help.tokenpocket.pro/developer-en/wallet/pull-up-wallet-with-deeplink) |
| P2 | MathWallet | `mathwallet://mathwallet.org?action=link&value=...`, `mathwallet://mathwallet.org?param=...` | `openDapp()`, `openUrlWithCallback()` | MathWallet 官方教程记录了用 deeplink 打开钱包内 DApp 浏览器，以及带 `param` JSON 和 callback 的 SimpleWallet 风格调用。功能面较窄，但格式清晰。 | [MathWallet deeplink connect](https://blog.mathwallet.org/?p=3389), [MathWallet deeplink guide](https://blog.mathwallet.org/?p=1618) |
| P2 | Keplr Mobile | `https://deeplink.keplr.app/<path>?...`, `keplrwallet://<path>?...`, Android `intent://...#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;` | `openWebBrowser()`, `showAddress()`, `androidIntent()` | Keplr 官方移动端文档记录 universal/app link、Android intent 和 iOS custom scheme，并列出 `web-browser`、`show-address` 两个路径。适合做小而清晰的 mobile helper。 | [Keplr Mobile Deeplinking](https://docs.keplr.app/api/mobile/deeplink) |
| P1 | Bitget Wallet | `bitkeep://bkconnect?{params}`, `https://bkcode.vip?{params}` | `openDapp()`, `getAccount()`, `addAsset()`, `send()`, `sign()` | Bitget Wallet 官方开发者文档记录 BKConnect deeplink，包含打开 DApp、切链、获取账号、添加资产、发交易和签名。文档提示 Android 只支持 `https://bkcode.vip?...`，实现时应按平台区分。 | [Bitget Wallet Deeplink](https://web3.bitget.com/en/docs/configuration/deeplink) |
| P2 | Expo Go | `exp://host:port/--/path?...`, `exps://...` | `openProject()`, `openPath()` | Expo 官方 linking 文档说明 Expo Go 默认使用 `exp://` scheme，开发 URL 可带 `/--/` 分隔应用内 deep link path，并说明 `exps://` 对应 HTTPS URL。适合开发预览和测试链接 helper。 | [Expo linking into your app](https://docs.expo.dev/linking/into-your-app/), [Expo CLI URLs](https://docs.expo.dev/more/expo-cli/) |
| P1 | Transit | `transit://directions?from=...&to=...`, `transit://routes?q=...` | `directions()`, `nearbyRoutes()` | Transit 官方 partners/API 页面公开了 URL scheme，可用地址字符串或经纬度打开公交换乘方向，或显示某位置附近线路。 | [Transit APIs](https://transitapp.com/partners/apis) |
| P1 | Sygic Professional Navigation | `com.sygic.aura://coordinate\|lon\|lat\|show`, `drive` 等 custom URL | `showCoordinate()`, `driveToCoordinate()`, `customAction()` | Sygic 当前开发者站的 Professional Navigation SDK 文档有 Android 和 iOS Custom URL 页面，列出 `coordinate`、路线下载等 URL scheme 示例。 | [Sygic Android Custom URL](https://www.sygic.com/developers/professional-navigation-sdk/android/api-examples/custom-url), [Sygic iOS Custom URL](https://www.sygic.com/developers/professional-navigation-sdk/ios/custom-url) |
| P1 | ArcGIS Earth | `https://earth.arcgis.app?viewpoint=...&urls=...&basemapUrl=...` | `openViewpoint()`, `openUrls()`, `openBasemap()` | Esri 官方 ArcGIS Earth app integration 文档定义了 `earth.arcgis.app` app link，可传 camera/extent/center viewpoint、数据 URL 和 basemap。 | [ArcGIS Earth app integration](https://doc.arcgis.com/en/arcgis-earth/use/app-integration.htm) |
| P1 | ArcGIS Indoors | `https://indoors.arcgis.app?portalURL=...&itemID=...`, `action=locate`, `action=route` | `openMap()`, `locate()`, `selectFeature()`, `route()` | Esri 官方 Indoors Mobile 文档记录 smart launch URLs，要求 `portalURL` 和 `itemID`，并支持定位楼层/要素和生成室内路线。 | [Launch Indoors from other apps](https://doc.arcgis.com/en/indoors/latest/mobile/launch-indoors-from-other-apps.htm) |
| P1 | 2GIS | `dgis://`, `dgis://2gis.ru/routeSearch/rsType/<type>/from/<lon>,<lat>/to/<lon>,<lat>` | `open()`, `routeSearch()` | 2GIS 官方帮助页说明从其他 App 或网页用 `dgis://` 启动 2GIS，并给出路线规划 deeplink 参数。 | [2GIS deeplink navigation](https://help.2gis.com/question/developers-launching-2gis-navigation-using-deeplink) |
| P1 | CoPilot Navigation | `copilot://options?type=CONFIG...`, `type=TRIP...` 等 | `configureLicense()`, `setVehicle()`, `setConfig()`, `sendStops()` | Trimble Maps 官方 CoPilot Navigation 开发者文档记录 URL Launch，覆盖激活 license、车辆/司机、配置、routing profile 和 stops。 | [CoPilot URL Launch](https://developer.trimblemaps.com/copilot-navigation/feature-guide/advanced-features/url-launch/) |
| P2 | Raindrop.io | `https://app.raindrop.io/add?link=...&title=...` | `addBookmark()` | Raindrop.io 官方帮助页的 bookmarklet 使用 `app.raindrop.io/add` 保存当前页面。它是 HTTPS 保存入口，不是自定义 scheme。 | [Raindrop.io browser extension / bookmarklet](https://help.raindrop.io/browser-extension/) |
| P2 | Curio | `curio://...` project hyperlinks, `curio://search?query=...` | `openProjectLink()`, `search()` | Zengobi 官方 Curio 文档说明 project hyperlinks 都以 `curio://` 开头，Search 文档还记录 Quick Find 的 `curio://search?query=...`。 | [Curio project hyperlinks](https://www.zengobi.com/curio/docs/33/figures/), [Curio search URL scheme](https://www.zengobi.com/curio/docs/33/search/) |
| P2 | EagleFiler | `x-eaglefiler://...` copied record links | `openRecordLink()` | C-Command 官方 EagleFiler 手册说明 Copy Record Link 会复制 `x-eaglefiler` URL，打开后会启动 EagleFiler、打开 library 并选中 record。 | [EagleFiler Copy Record Link](https://c-command.com/eaglefiler/help/copy-record-link) |
| P2 | SecureCRT | 标准 `ssh://...`, `telnet://...` 等 URI handler | `ssh()`, `telnet()`, `openStandardUri()` | VanDyke 官方 SecureCRT 9.7 history 说明 macOS 可把 SecureCRT 配置为 `ssh://`、`telnet://` 等 URI 的默认 URL handler。实现时应像 Cyberduck 一样标明这是标准 URI handler。 | [SecureCRT history](https://www.vandyke.com/products/securecrt/history.txt) |
| P2 | Shopify POS | `com.shopify.pos://pos-ui-extensions?url=...` | `openPosUiExtension()` | Shopify 官方 POS UI extensions troubleshooting 文档给出 Android 调试 deep link 命令，用 `com.shopify.pos://pos-ui-extensions?url=` 打开 POS UI extension。 | [Shopify POS UI extensions troubleshooting](https://shopify.dev/docs/api/pos-ui-extensions/troubleshooting) |
| P2 | Downie | `downie://XUOpenURL?url=...&postprocessing=...` | `openUrl()` | Charlie Monroe 官方 Downie Automation 文档记录 `downie://XUOpenURL`，可传要下载的 URL 和 postprocessing 等选项。 | [Downie automation](https://software.charliemonroe.net/help/downie/?article=automation) |
| P1 | The Archive | `thearchive://match/TERM`, `search/TERM`, `matchOrCreate/TERM`, `plugin/<id>/run?...` | `match()`, `search()`, `matchOrCreate()`, `runPlugin()` | The Archive 官方帮助页记录外部链接 URL scheme，插件页记录可从外部 App 运行 plug-in 的 `thearchive://plugin/.../run`。 | [The Archive help](https://zettelkasten.de/the-archive/help/), [The Archive plug-ins](https://zettelkasten.de/the-archive/plug-ins/) |
| P2 | Strava | `https://www.strava.com/oauth/mobile/authorize?...` | `mobileAuthorize()` | Strava 官方开发者认证文档记录 Mobile OAuth endpoint，安装 Strava App 且版本满足时会打开 App，否则回退移动网页授权。 | [Strava authentication](https://developers.strava.com/docs/authentication/) |
| P1 | DingTalk / 钉钉 AppLink | `https://applink.dingtalk.com/...`, `https://applink.dingtalk.com/action/open_mini_app?...` | `openNormalPage()`, `openMiniApp()`, `createGroup()`, `openPersonalDetails()` | 钉钉开放平台 AppLink 文档说明 AppLink 是基于 HTTPS 的 URL 协议，可在移动端和桌面端唤起钉钉并跳转功能页。 | [钉钉 AppLink 结构](https://open.dingtalk.com/document/development/structure-of-applink), [打开普通页面](https://open.dingtalk.com/document/development/open-normal-page), [打开小程序](https://open.dingtalk.com/document/development/open-applet) |
| P1 | Alipay / 支付宝小程序 | `alipays://platformapi/startapp?appId=...&page=...&query=...` | `startMiniProgram()` | 支付宝开放文档和支持中心公开小程序 scheme 链接格式，可从外部 App/浏览器唤起支付宝小程序并传 page/query。 | [支付宝小程序外跳能力导航](https://opendocs.alipay.com/mini/0090ty), [小程序 scheme 链接介绍](https://opensupport.alipay.com/support/h5/helpcenter/142/201602496413) |
| P1 | Baidu Smart Program / 百度智能小程序 | `baiduboxapp://...` URL Scheme | `openSmartProgram()` | 百度智能小程序官方文档说明 URL Scheme 是 App 间调起协议，Scheme 为 `baiduboxapp`，用于打开百度 App 中的小程序。 | [百度智能小程序打开小程序](https://smartprogram.baidu.com/docss/docs/develop/function/opensmartprogram/) |

## App 下载链接复查（2026-06-10）

以下只记录厂商官方下载页、官方帮助/产品页中指向的下载入口，或 Apple App Store、
Google Play、Microsoft Store 等官方商店页。第三方镜像站不作为下载来源。

| App | 下载链接 | 备注 |
| --- | --- | --- |
| Uber | [Uber download](https://www.uber.com/us/en/download/), [App Store](https://apps.apple.com/us/app/uber-request-a-ride/id368677368), [Google Play](https://play.google.com/store/apps/details?id=com.ubercab) | 乘客端 App；不含 Driver App。 |
| Linear | [Download Linear](https://linear.app/download) | 官方下载页覆盖 Web、macOS、Windows、iOS 和 Android。 |
| TablePlus | [TablePlus download](https://tableplus.com/download/) | 官方下载页覆盖 macOS、iOS、Windows 和 Linux。 |
| Postico | [Postico downloads](https://releases.eggerapps.at/postico2/downloads), [Mac App Store](https://apps.apple.com/us/app/postico-2/id6446933691?mt=12) | 官方下载页同时说明可通过 Mac App Store 获取。 |
| Sequel Ace | [Sequel Ace install](https://sequel-ace.com/), [Mac App Store](https://apps.apple.com/us/app/sequel-ace/id1518036000) | 官方站推荐从 macOS App Store 安装。 |
| Panic Prompt | [Prompt](https://panic.com/prompt/), [App Store](https://apps.apple.com/us/app/prompt-3/id1594420480) | Prompt 3 覆盖 Mac、iPhone、iPad 和 visionOS。 |
| MailMate | [MailMate download](https://freron.com/download/) | 官方下载页建议新用户使用最新 beta。 |
| Rocket.Chat | [Rocket.Chat download apps](https://www.rocket.chat/download-apps), [Desktop and mobile apps docs](https://docs.rocket.chat/docs/desktop-mobile-apps) | 覆盖桌面端和移动端。 |
| WhatsApp | [WhatsApp download](https://www.whatsapp.com/download), [App Store](https://apps.apple.com/us/app/whatsapp-messenger/id310633997), [Google Play](https://play.google.com/store/apps/details?id=com.whatsapp) | 官方下载页覆盖 mobile、tablet 和 desktop。 |
| Threema | [Threema downloads](https://threema.com/en/download), [Threema Private](https://threema.com/en/download/threema-private), [App Store](https://apps.apple.com/us/app/threema-the-secure-messenger/id578665578), [Google Play](https://play.google.com/store/apps/details?id=ch.threema.app) | 官方下载页区分 Private、Work 和 OnPrem。 |
| Cyberduck | [Cyberduck download](https://cyberduck.io/download/) | 官方页提供 macOS、Windows 下载，并链接商店版本。 |
| Documents by Readdle | [Documents](https://readdle.com/documents), [App Store](https://apps.apple.com/us/app/documents-file-manager-docs/id364901807) | 当前已有 `documents-readdle` 实现；下载链接保留作参考，不再计入待实现候选。 |
| SAP Fiori Client | [SAP Fiori Client help](https://help.sap.com/docs/SAP_FIORI_CLIENT), [legacy Fiori Client download note](https://www.sap.com/design-system/fiori-design-web/v1-38/foundations/integration-and-services/sap-fiori-launchpad/fiori-client) | SAP Help Portal 记录该 App 已于 2022-03-31 从 Apple App Store 和 Google Play 移除；当前没有公开商店下载入口。 |
| iTerm2 | [iTerm2 downloads](https://iterm2.com/downloads.html) | 官方下载页列出稳定版、测试版和历史版本。 |
| ArcGIS Field Maps | [fieldmaps.arcgis.app](https://fieldmaps.arcgis.app/), [Esri downloads](https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/downloads), [App Store](https://apps.apple.com/us/app/arcgis-field-maps/id1515671684), [Google Play](https://play.google.com/store/apps/details?id=com.esri.fieldmaps) | Esri 提供商店入口和 Android 无 Google Play 场景的安装说明。 |
| ArcGIS Workforce | [App Store](https://apps.apple.com/us/app/arcgis-workforce/id1485598093), [Google Play](https://play.google.com/store/apps/details?id=com.esri.katahdin), [Android availability note](https://support.esri.com/en-us/knowledge-base/arcgis-workforce-is-not-available-in-google-play-store--000038012) | Esri 说明 Android 13+ 设备上 Google Play 可见性有限，必要时需走组织部署。 |
| Cisco Jabber | [Cisco Jabber download](https://www.webex.com/downloads/jabber.html), [Cisco Jabber support](https://www.cisco.com/c/en/us/support/unified-communications/jabber/series.html), [App Store](https://apps.apple.com/us/app/cisco-jabber/id467192391), [Google Play](https://play.google.com/store/apps/details?id=com.cisco.im) | Webex 下载页仍提供 Jabber 下载入口。 |
| OsmAnd | [OsmAnd](https://osmand.net/), [free Android releases](https://osmand.net/docs/versions/free-versions/), [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257), [Google Play](https://play.google.com/store/apps/details?id=net.osmand) | 官方 Android 文档还列出 F-Droid 等自由版本来源。 |
| AMap / 高德地图 | [高德地图官网](https://wap.amap.com/), [App Store](https://apps.apple.com/cn/app/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE-%E9%AB%98%E5%BE%B7%E6%89%93%E8%BD%A6-%E5%AF%BC%E8%88%AA%E5%85%AC%E4%BA%A4%E5%9C%B0%E9%93%81%E5%87%BA%E8%A1%8C/id461703208), [Google Play](https://play.google.com/store/apps/details?id=com.autonavi.minimap) | 官网可按设备分发下载。 |
| Baidu Maps / 百度地图 | [百度手机地图官网](https://map.baidu.com/zt/client/index/), [App Store](https://apps.apple.com/us/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92-%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87/id452186370), [Google Play](https://play.google.com/store/apps/details?id=com.baidu.BaiduMap) | 官方移动页覆盖多端下载。 |
| Tencent Map / 腾讯地图 | [腾讯地图移动端下载说明](https://lbs.qq.com/uri_v1/guide-mobile.html), [App Store](https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE-ai%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92-%E5%AF%BC%E8%88%AA%E5%85%AC%E4%BA%A4%E6%89%93%E8%BD%A6%E5%9C%B0%E9%93%81%E5%87%BA%E8%A1%8C/id481623196), [Microsoft Store](https://apps.microsoft.com/detail/xpffvncsknnwr9) | 腾讯位置服务文档给出未安装 App 时的下载页格式，需要开发者 key。 |
| Feishu / Lark AppLink | [飞书下载](https://www.feishu.cn/download), [Lark download](https://www.larksuite.com/en_us/download) | 根据目标市场选择 Feishu 或 Lark。 |
| WeChat Mini Programs / 微信小程序 | [微信 App Store](https://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124), [WeChat Google Play](https://play.google.com/store/apps/details?id=com.tencent.mm), [WeChat Microsoft Store](https://apps.microsoft.com/detail/xpfckbrnfzq62g) | 候选是小程序打开能力，下载入口对应微信/WeChat 客户端。 |
| OmniPlan | [OmniPlan](https://www.omnigroup.com/omniplan/), [Omni downloads](https://www.omnigroup.com/download/), [App Store](https://apps.apple.com/jp/app/omniplan-4/id1460319993?l=en-US&platform=mac) | 官方产品页提供 14 天试用和下载入口。 |
| OmniGraffle | [OmniGraffle](https://www.omnigroup.com/omnigraffle), [Omni downloads](https://www.omnigroup.com/download/), [App Store](https://apps.apple.com/us/app/omnigraffle-7/id1142578753) | 官方产品页提供 14 天试用和下载入口。 |
| ArcGIS Navigator | [navigator.arcgis.app](https://navigator.arcgis.app/), [Prepare Navigator](https://doc.arcgis.com/en/navigator/android-phone/help/prepare-navigator.htm), [App Store](https://apps.apple.com/us/app/arcgis-navigator/id980973560), [Google Play](https://play.google.com/store/apps/details?id=com.esri.navigator) | Esri 说明 Android 14+ 设备上 Google Play 可见性存在临时限制。 |
| ArcGIS Explorer | [explorer.arcgis.app](https://explorer.arcgis.app/), [ArcGIS Explorer FAQ](https://doc.arcgis.com/en/explorer/faqs/faqs.htm) | 官方 app link 页列出 Apple、Google Play 和 Microsoft 商店入口。 |
| Emacs Org Protocol | [GNU Emacs download](https://www.gnu.org/software/emacs/download.html), [Org Mode](https://orgmode.org/), [Org Protocol docs](https://orgmode.org/worg/org-contrib/org-protocol.html) | `org-protocol` 是 Emacs/Org Mode 能力，没有独立 App 下载地址；实际入口是安装 GNU Emacs / Org Mode 后配置 `org-protocol://` scheme handler。 |
| LaunchCuts | 未找到可验证的当前官方下载入口。 | 此项已在“当前无法验证”中；公开资料显示 App Store 可用性不稳定，不建议补实现前依赖下载链接。 |
| Avenza Maps | [Avenza Maps](https://www.avenza.com/avenza-maps/), [Avenza app features](https://store.avenza.com/pages/app-features), [App Store](https://apps.apple.com/us/app/avenza-maps-offline-mapping/id388424049), [Google Play](https://play.google.com/store/apps/details?id=com.Avenza) | 下载入口可确认，但 URL scheme 文档仍因访问限制留在“当前无法验证”。 |
| Outlinely | 未找到可验证的当前官方下载入口。 | 旧官网当前匿名访问超时；没有采用第三方下载镜像。 |
| AnkiMobile | [Anki](https://apps.ankiweb.net/), [App Store](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) | AnkiMobile 是官方 iOS/iPadOS companion App；Android 对应社区维护的 AnkiDroid，不是本候选。 |
| TickTick | [TickTick download](https://ticktick.com/download?language=en_US), [App Store](https://apps.apple.com/us/app/ticktick-to-do-list-calendar/id626144601), [Google Play](https://play.google.com/store/apps/details?id=com.ticktick.task) | 官方下载页覆盖 iOS、Android、Windows、macOS、Linux 和扩展。 |
| Firefox iOS | [Firefox for iOS](https://www.firefox.com/en-US/download/ios/), [App Store](https://apps.apple.com/us/app/firefox-private-web-browser/id989804926) | 该候选仅针对 iOS `firefox://open-url`。 |
| Brave iOS | [Brave download](https://brave.com/download/), [App Store](https://apps.apple.com/us/app/brave-browser-search-engine/id1052879175) | 该候选仅针对 iOS `brave://open-url`。 |
| Bruno | [Bruno downloads](https://www.usebruno.com/downloads), [Bruno download docs](https://docs.usebruno.com/get-started/bruno-basics/download) | OAuth callback scheme 依赖 Bruno desktop app。 |
| Readwise Reader | [Readwise Reader](https://readwise.io/read), [App Store](https://apps.apple.com/us/app/readwise-reader/id1567599761), [Google Play](https://play.google.com/store/apps/details?id=com.readermobile) | 候选是官方 HTTPS save link，移动端 App 可作为 Reader 客户端入口。 |
| Messenger | [Messenger](https://www.messenger.com/), [Messenger desktop](https://www.messenger.com/desktop), [App Store](https://apps.apple.com/us/app/messenger/id454638411), [Google Play](https://play.google.com/store/apps/details?id=com.facebook.orca) | m.me links 面向 Messenger Platform / Facebook Page 对话入口。 |
| Instagram Messaging | [Instagram](https://www.instagram.com/), [App Store](https://apps.apple.com/us/app/instagram/id389801252), [Google Play](https://play.google.com/store/apps/details?id=com.instagram.android) | ig.me links 面向 Instagram Professional account 消息入口。 |
| Square Point of Sale | [Download Square Point of Sale](https://squareup.com/us/en/app), [App Store](https://apps.apple.com/us/app/square-point-of-sale-pos/id335393788), [Google Play](https://play.google.com/store/apps/details?id=com.squareup) | 官方下载页覆盖手机和平板；候选对应 Square Point of Sale app，不是 Square Dashboard。 |
| SumUp | [SumUp](https://www.sumup.com/en-us/), [SumUp download help](https://help.sumup.com/en-US/articles/7mfghXVvILv2QJW3RyJlF9-download-app), [App Store](https://itunes.apple.com/app/sumup/id514879214?ls=1&mt=8), [Google Play](https://play.google.com/store/apps/details?id=com.kaching.merchant) | 官方帮助中心明确给出 iOS/Android 下载入口；候选对应商户端 SumUp Business app。 |
| Lyft | [Download the Lyft App](https://www.lyft.com/app), [App Store](https://apps.apple.com/us/app/lyft/id529379082), [Google Play](https://play.google.com/store/apps/details?id=me.lyft.android) | 候选是乘客端 ride request deeplink，不含 Lyft Driver。 |
| Parallels Client | [Parallels RAS Client Download](https://www.parallels.com/products/ras/download/client/), [App Store](https://apps.apple.com/us/app/parallels-client/id600925318), [Google Play](https://play.google.com/store/apps/details?id=com.parallels.client), [Microsoft Store](https://apps.microsoft.com/detail/xp8k17kfmtbrgf) | 官方下载页覆盖 Windows、macOS、Linux、iOS、Android 和 Chrome client。 |
| Omnissa Horizon Client | [Horizon iOS install docs](https://docs.omnissa.com/bundle/HorizonClient-iOSGuideV2306/page/InstallorUpgradeHorizonClientonaniOSDevice.html), [Horizon Android install docs](https://docs.omnissa.com/bundle/HorizonClientAndroidGuideV2212/page/InstallorUpgradeHorizonClient.html), [App Store](https://apps.apple.com/us/app/omnissa-horizon-client/id6737089391), [Google Play](https://play.google.com/store/apps/details?id=com.omnissa.horizon.client.android) | Omnissa 文档说明可从 Omnissa Downloads、App Store、Google Play 或 Amazon Appstore 获取，具体取决于平台。 |
| Citrix Secure Web | [Citrix Secure Web docs](https://docs.citrix.com/en-us/citrix-secure-web/secure-web.pdf), [App Store](https://apps.apple.com/us/app/citrix-secure-web/id1155250676), [Google Play](https://play.google.com/store/apps/details?id=com.citrix.browser.droid) | 当前可验证下载入口主要是官方商店页；Secure Web 通常通过 Citrix Endpoint Management/MDM 部署。 |
| Citrix Workspace Launcher | [Citrix Workspace app downloads](https://www.citrix.com/downloads/workspace-app/), [App Store](https://apps.apple.com/us/app/citrix-workspace/id363501921), [Google Play](https://play.google.com/store/apps/details?id=com.citrix.Receiver), [Android availability note](https://support.citrix.com/external/article/CTX696570/citrix-workspace-android-app-unavailable.html) | 官方下载页覆盖桌面和移动端；Android Google Play 可见性近期可能波动，以 Citrix 支持说明为准。 |
| VLC for iOS | [VideoLAN iOS download](https://www.videolan.org/vlc/download-ios.html), [App Store](https://apps.apple.com/us/app/vlc-media-player/id650377962) | 候选仅针对 VLC for iOS 的 `vlc://` / x-callback-url。 |
| Phantom | [Phantom download](https://phantom.com/download), [App Store](https://apps.apple.com/us/app/phantom-trade-markets/id1598432977), [Google Play](https://play.google.com/store/apps/details?id=app.phantom) | 官方下载页覆盖 Chrome、Brave、Firefox、iOS 和 Android。 |
| Solflare | [Solflare download](https://www.solflare.com/download/), [App Store](https://apps.apple.com/us/app/solflare-solana-crypto-wallet/id1580902717), [Google Play](https://play.google.com/store/apps/details?id=com.solflare.mobile), [Chrome Web Store](https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic) | 官方下载页覆盖浏览器扩展和移动 App。 |
| Backpack Wallet | [Backpack download](https://backpack.app/download), [Backpack support downloads](https://support.backpack.exchange/start-here/downloads), [App Store](https://apps.apple.com/us/app/backpack-buy-sol-btc-crypto/id6445964121), [Google Play](https://play.google.com/store/apps/details?id=app.backpack.mobile) | 官方下载页覆盖 iOS、Android、Android APK 和浏览器扩展。 |
| Tonkeeper | [Tonkeeper](https://tonkeeper.com/), [Google Play](https://play.google.com/store/apps/details?id=com.ton_keeper) | 官方站按平台引导下载；候选覆盖 mobile wallet deeplink 和 TON 标准转账链接。 |
| imToken | [imToken](https://token.im/?locale=en-us), [App Store](https://apps.apple.com/us/app/imtoken-btc-eth-wallet/id1384798940), [Google Play](https://play.google.com/store/apps/details?id=im.token.app) | 官方安全说明也强调只从官网、App Store 或 Google Play 下载。 |
| TokenPocket | [TokenPocket](https://www.tokenpocket.pro/), [download center](https://www.tokenpocket.pro/en/download/app), [App Store](https://apps.apple.com/us/app/tokenpocket-crypto-bitcoin/id6444625622), [Google Play](https://play.google.com/store/apps/details?id=vip.mytokenpocket) | 官方下载中心覆盖 iOS、Android、Android APK 和扩展入口。 |
| MathWallet | [MathWallet](https://mathwallet.org/), [App Store](https://apps.apple.com/us/app/mathwallet-web3-wallet/id1582612388), [Google Play](https://play.google.com/store/apps/details?id=com.mathwallet.android) | 官方站覆盖移动端、扩展、Web Wallet 和硬件钱包入口。 |
| Keplr Mobile | [Keplr](https://www.keplr.app/), [App Store](https://apps.apple.com/us/app/keplr-crypto-wallet/id1567851089), [Google Play](https://play.google.com/store/apps/details?id=com.chainapsis.keplr) | 官方移动 deeplink 文档也直接列出 iOS / Android 下载入口。 |
| Bitget Wallet | [Bitget Wallet](https://web3.bitget.com/), [Google Play](https://play.google.com/store/apps/details?id=com.bitkeep.wallet) | 官方开发者文档称 Bitget Mobile Apps 支持 BKConnect deeplink；App Store 入口建议实现前从官网下载页复核。 |
| Expo Go | [Expo Go](https://expo.dev/go), [App Store](https://apps.apple.com/us/app/expo-go/id982107779), [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) | 官方 Expo Go 页提供 Android、iOS、Android Emulator 和 iOS Simulator 安装入口。 |
| Transit | [Transit](https://transitapp.com/), [App Store](https://apps.apple.com/us/app/transit-subway-bus-times/id498151501), [Google Play](https://play.google.com/store/apps/details?id=com.thetransitapp.droid) | 官方站按城市/平台引导下载；候选对应 Transit 乘客端 App。 |
| Sygic Professional Navigation | [Sygic Professional Navigation for Fleets](https://www.sygic.com/developers/professional-navigation-sdk), [Android downloads](https://www.sygic.com/developers/professional-navigation-sdk/android/downloads) | 候选对应 Sygic Professional/Truck/Fleet 类导航能力；商店包名随产品线和企业授权变化，优先以 Sygic 开发者下载页为准。 |
| ArcGIS Earth | [ArcGIS Earth downloads](https://www.esri.com/en-us/arcgis/products/arcgis-earth/downloads), [App Store](https://apps.apple.com/us/app/arcgis-earth/id1442724282), [Google Play](https://play.google.com/store/apps/details?id=com.esri.earth.phone) | 官方下载页覆盖 Windows、iOS 和 Android。 |
| ArcGIS Indoors | [indoors.arcgis.app](https://indoors.arcgis.app/), [App Store](https://apps.apple.com/us/app/arcgis-indoors/id6741082549), [Classic App Store](https://apps.apple.com/us/app/arcgis-indoors-classic/id1322110701) | 当前 App Store 同时有 ArcGIS Indoors 新版和 Classic；实现前确认目标文档对应的客户端版本。 |
| 2GIS | [2GIS](https://2gis.com/), [App Store](https://apps.apple.com/cn/app/2gis-map-navigation-tracker/id481627348), [Google Play](https://play.google.com/store/apps/details?id=ru.dublgis.dgismobile) | 2GIS 在不同地区的商店可用性可能不同；官方帮助页给出 iOS 未安装时跳转 App Store 的说明。 |
| CoPilot Navigation | [CoPilot Navigation](https://developer.trimblemaps.com/copilot-navigation/), [CoPilot GPS App Store](https://apps.apple.com/us/app/copilot-gps-navigation/id504677517) | URL Launch 属于 Trimble CoPilot Navigation 产品线；实际下载和授权可能依赖企业账户。 |
| Raindrop.io | [Raindrop.io](https://raindrop.io/), [download](https://raindrop.io/download), [App Store](https://apps.apple.com/us/app/raindrop-io/id1021913807), [Google Play](https://play.google.com/store/apps/details?id=io.raindrop.raindropio) | 官方下载页覆盖移动端、桌面端和浏览器扩展。 |
| Curio | [Curio](https://www.zengobi.com/curio/), [download](https://www.zengobi.com/curio/download/) | macOS App；官方页提供试用下载。 |
| EagleFiler | [EagleFiler](https://c-command.com/eaglefiler/), [download](https://c-command.com/eaglefiler/download) | macOS App；官方页提供直接下载和购买入口。 |
| SecureCRT | [SecureCRT download](https://www.vandyke.com/download/securecrt/download.html) | 商业桌面客户端；标准 URI handler 需用户把 SecureCRT 配置为默认处理器。 |
| Shopify POS | [Shopify POS](https://www.shopify.com/pos), [App Store](https://apps.apple.com/us/app/shopify-point-of-sale-pos/id686830644), [Google Play](https://play.google.com/store/apps/details?id=com.shopify.pos) | 候选仅覆盖 POS UI extension deep link，不是 Shopify Admin App。 |
| Downie | [Downie](https://software.charliemonroe.net/downie/) | macOS 下载工具；官方站提供试用和购买入口。 |
| The Archive | [The Archive](https://zettelkasten.de/the-archive/) | macOS App；官方产品页提供下载、更新日志和 plug-in 文档。 |
| Strava | [Strava mobile apps](https://www.strava.com/mobile), [App Store](https://apps.apple.com/us/app/strava-run-bike-walk/id426826309), [Google Play](https://play.google.com/store/apps/details?id=com.strava) | 候选是 Strava Mobile OAuth deeplink；下载入口对应 Strava 运动 App。 |
| DingTalk / 钉钉 | [钉钉下载](https://www.dingtalk.com/download), [App Store](https://apps.apple.com/cn/app/%E9%92%89%E9%92%89/id930368978), [Google Play](https://play.google.com/store/apps/details?id=com.alibaba.android.rimet) | 中国区商店主 App 为钉钉；海外区可能出现 DingTalk Lite。 |
| Alipay / 支付宝 | [支付宝下载](https://render.alipay.com/p/f/fd-jblxfp45/index.html), [App Store](https://apps.apple.com/cn/app/%E6%94%AF%E4%BB%98%E5%AE%9D-%E4%BE%BF%E6%8D%B7%E7%94%9F%E6%B4%BB-%E4%B8%80%E7%82%B9%E5%B0%B1%E5%A5%BD/id333206289), [Google Play](https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone) | 候选对应支付宝客户端打开小程序能力。 |
| Baidu Smart Program / 百度智能小程序 | [百度 App 官网](https://mo.baidu.com/), [App Store](https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6-ai%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2/id382201985), [Google Play](https://play.google.com/store/apps/details?id=com.baidu.searchbox) | 候选对应百度 App 承载的智能小程序打开能力。 |

## 当前无法验证

以下候选来自较早发现的疑似官方来源，但当前官方文档链接无法解析到预期的
厂商文档。在厂商页面恢复可访问或找到等价官方来源前，不要实现这些候选。

| 优先级 | App | 声称的 scheme / deep link | 建议 helper | 之前文档 |
| --- | --- | --- | --- | --- |
| P2 | LaunchCuts | `launchcuts:open-folder?result=<UUID>` | `openFolder()` | `https://launchcuts.com/docs/1/` 当前会跳转离开 LaunchCuts 文档 |
| P2 | Avenza Maps | `avenzamaps://www.example.com/maps/file.pdf` | `importMap()`, `importMapUrl()` | `https://support.avenzamaps.com/hc/en-us/articles/5051442605460-Importing-maps-from-custom-locations` 当前匿名访问需要登录或机器人验证 |
| P0 | Outlinely | `outlinely://x-callback-url/open?...`, `new?...`, `insert?...` | `open()`, `newOutline()`, `insert()` | `https://glamdevelopment.com/outlinely/learn/x-callback-url` 当前匿名检查超时 |

## 之前官方清单中待实现

以下候选在当前 workspace 快照中仍未出现在 `packages/protocol-launcher/src`
下。

| 优先级 | App | 官方 scheme / deep link | 建议 helper | 官方文档 |
| --- | --- | --- | --- | --- |
| P0 | AnkiMobile | `anki://`, `anki://x-callback-url/addnote?...`, `infoForAdding`, `search`, `sync` | `open()`, `addNote()`, `infoForAdding()`, `search()`, `sync()` | [AnkiMobile URL Schemes](https://docs.ankimobile.net/url-schemes.html) |
| P0 | TickTick | `ticktick://x-callback-url/v1/add_task?...`, `ticktick://v1/show?...`, `ticktick://v1/search?...` | `addTask()`, `show()`, `showSmartList()`, `search()` | [TickTick iOS URL Scheme](https://blog.ticktick.com/2018/07/16/ticktick-ios-url-scheme/) |

### 待实现清单复查（2026-06-01）

已实现项已从当前候选表和开发顺序中移除。实现前请以这张状态覆盖表为准。

| 状态 | App | 检查结果 |
| --- | --- | --- |
| 仍未实现，且官网文档有明确格式 | AnkiMobile, TickTick | 当前没有对应的 `packages/protocol-launcher/src/<slug>` 目录或 package export，可继续作为待实现候选。 |
| 2026-10-03 按更严格来源条件移出 | Firefox iOS, Brave iOS | 旧依据是官方 GitHub 仓库，本轮未找到对应官网正文；不继续作为已满足官网条件的候选。 |

## 建议开发顺序（历史候选）

1. `anki-mobile`
2. `ticktick`
3. `uber`
4. `linear`
5. `tableplus`
6. `postico`
7. `sequel-ace`
8. `panic-prompt`
9. `rocket-chat`
10. `whatsapp`
11. `threema`
12. `cyberduck`
13. `sap-fiori-client`
14. `iterm2`
15. `arcgis-field-maps`
16. `arcgis-workforce`
17. `cisco-jabber`
18. `osmand`
19. `amap`
20. `baidu-map`
21. `tencent-map`
22. `feishu-lark`
23. `wechat-mini-programs`
24. `omniplan`
25. `omnigraffle`
26. `arcgis-navigator`
27. `arcgis-explorer`
28. `emacs-org-protocol`
29. `readwise-reader`
30. `bruno`
31. `messenger`
32. `instagram-messaging`
33. `square-point-of-sale`
34. `sumup`
35. `phantom`
36. `solflare`
37. `backpack-wallet`
38. `lyft`
39. `parallels-client`
40. `vmware-horizon-client`
41. `citrix-secure-web`
42. `vlc-ios`
43. `expo-go`
44. `citrix-workspace-launcher`
45. `transit`
46. `2gis`
47. `sygic-professional-navigation`
48. `arcgis-earth`
49. `arcgis-indoors`
50. `copilot-navigation`
51. `dingtalk`
52. `alipay`
53. `baidu-smart-program`
54. `shopify-pos`
55. `the-archive`
56. `raindrop`
57. `strava`
58. `curio`
59. `eaglefiler`
60. `downie`
61. `securecrt`
62. `tonkeeper`
63. `imtoken`
64. `tokenpocket`
65. `mathwallet`
66. `keplr-mobile`
67. `bitget-wallet`

## 实现注意事项

- Query string 类型的 URL 继续使用 `@protocol-launcher/shared` 的 `qs()`。
- 测试中要保留官方非标准 URI 形态。重要示例包括：
  `PDFE...`、`pdfefile:///...`、
  `rdocs:///...`、
  `gropen://...`、`ghttp://...`、`ghttps://...`、
  `reed://feed-url.com`、`textwell:///replace?...`、
  `tonkeeper://...`、`tpoutside://...`、`keplrwallet://...`
  和 `mlmt:`。
- 对 Uber 和类似 Mimestream 这种偏向 universal link 的 App，只有当官方文档
  提供可构造 URL 格式时，才纳入 helper。
- 文件类 App 的示例和测试不要暴露本机私有路径或凭据，使用合成文件名和路径。
- Documents by Readdle 只实现当前官方帮助页可复核的 `rdocs:///` 文件打开 helper。
  不要从旧 PDF 或社区帖子补 `rhttp://`、`rhttps://` 或 `rdocs://` 以外的行为。
- 对 TablePlus、Postico、Sequel Ace 这类数据库客户端，示例和测试不要包含真实
  凭据。优先使用不带密码的 localhost URL 或合成 host，并单独测试保留字符的
  percent-encoding。
- 对 Prompt 这类远程访问 App，文档和测试不要出现真实密码或私有 host。优先
  使用 `example.com`、`server.local` 或 RFC 保留示例 IP 段。
- 对 Rocket.Chat 和 SAP Fiori Client，示例和测试不要包含真实 host、token 或凭据。
- 当厂商推荐官方 HTTPS universal link 时，优先使用它，不要使用未文档化的
  custom scheme。当前例子包括 WhatsApp、Threema、Rocket.Chat、Linear 和 Uber。
- Cyberduck helper 要明确说明它们生成的是标准协议 URL，只有在 Cyberduck 被配置
  为默认处理器时才会进入 Cyberduck。
- 对 iTerm2，helper 命名尽量贴近官方 action 名称，并使用合成 shell command、host、
  user 和 path。示例/测试里不要使用真实本地路径，或会修改用户状态的命令。
- 对 ArcGIS 系列 App，使用 Esri 风格的占位 item ID、portal URL、feature service
  URL 和字段名。文档/测试不要包含真实组织 portal、project ID、assignment ID 或
  feature service URL。
- 对 Cisco Jabber，不要写入真实 host、账号邮箱、session ID、MAC address、凭据或 license key。
  使用保留 host、合成 GUID 和明确假的 ID。
- 对 OsmAnd，使用占位坐标和地图项目名称。不要包含真实 track、私有 map source、
  个人 marker 或可能暴露位置历史的托管文件。
- 对 AMap / 高德地图、Baidu Maps / 百度地图和 Tencent Map / 腾讯地图，要严格保留
  各官方文档的坐标顺序。高德 URI 链接常用 `lon,lat`。示例只使用合成坐标和占位
  app name / referer。
- 对 Feishu/Lark AppLink 和 WeChat Mini Programs / 微信小程序，优先做已生成或平台托管
  链接的透传 helper。不要在示例和测试里伪造真实 tenant ID、app ID、小程序 ticket、
  short link 或生产 callback target。
- 对 OmniPlan，测试使用假的 task ID 和短占位脚本。不要在示例中修改真实项目日程、
  任务、资源或依赖关系。
- 对 OmniGraffle，测试中使用极小的 no-op 或日志型 OmniJS 示例。不要在示例中创建、
  重排、删除或重设真实 canvas、layer、graphic 或 stencil 的样式。
- 对 ArcGIS Navigator，使用假的 item ID、route ID、stop、travel mode 和 callback URL。
  保留 Esri 文档中的可重复 `stop` / `stopname` 参数行为，并在测试坐标字符串时避免
  暴露真实工作地点。
- 对 ArcGIS Explorer，使用占位 web map / MMPK item ID、portal URL、坐标、scale、
  bookmark 和 search term。保留文档中的 `center` 坐标顺序，以及 viewpoint helper
  对 `itemID` 的依赖。
- 对 Emacs Org Protocol，示例使用合成 URL、title、body 和文件路径。把
  `org-protocol://` 链接视为本地自动化触发器，避免示例捕获私密浏览内容或源码上下文。
- 对 Bruno，只封装官方 OAuth callback URL。示例中使用假的 `code`、`state`，
  不要写入真实 token、client ID 或 provider 回调域名。
- 对 Readwise Reader，helper 生成 `wise.readwise.io/save` HTTPS 链接；被保存 URL 使用
  `https://www.example.com/article` 这类公开示例，避免保存私有文档、内网链接或带 token URL。
- 对 Messenger 和 Instagram Messaging，只实现官方 m.me / ig.me HTTPS/HTTP link。
  使用占位 Page name、ref 和 Professional account username，不要添加未文档化的
  `fb-messenger://` 或 `instagram://` helper。
- 对 Square Point of Sale 和 SumUp，示例只使用测试金额、合成 order/reference ID、
  假 callback URL 和官方 sandbox/占位 credential。不要写真实 merchant、location、
  affiliate key、callback scheme 或订单信息。Square 的 `data` 参数是 encoded JSON，
  SumUp 的 `sumupmerchant://pay/1.0` 参数需要保留官方大小写和连字符。
- 对 Lyft，使用合成 client ID、ride type 和示例坐标。不要在测试或文档中写真实
  pickup/dropoff、用户位置、行程 ID 或乘客信息。
- 对 Parallels Client、Omnissa Horizon Client、Citrix Secure Web 和 Citrix Workspace
  Launcher，所有 server、portal、AppID、desktop ID、session、encrypted password、
  internal URL 和 callback 都必须使用占位值。远程桌面 helper 不应鼓励保存真实凭据。
- 对 VLC for iOS，只使用公开视频/音频 URL、合成 filename 和无副作用 callback。
  不要写私有媒体库、内网流、带 token 的 CDN URL 或受版权限制内容。
- 对 Phantom、Solflare 和 Backpack Wallet，优先使用官方 HTTPS
  universal link。示例使用 fake public key、nonce、session、payload、asset、amount
  和 redirect link；不要写真实钱包地址、签名 payload、交易、memo、seed phrase、
  token 合约或生产 dApp callback。
- 对 Tonkeeper、imToken、TokenPocket、MathWallet、Keplr Mobile 和 Bitget Wallet，
  示例只使用官方占位地址、假的 chain/account/action ID、假的 encoded JSON payload、
  假 WalletConnect URI、假 callback 和公开示例 DApp URL。不要写真实钱包地址、交易、
  签名消息、私钥、seed phrase、nonce、session、生产 dApp callback 或真实链上订单。
  TokenPocket、MathWallet 和 Bitget Wallet 的 JSON / query payload 要单独测试编码。
- 对 Expo Go，示例使用 `127.0.0.1`、RFC 保留 host 或 Expo 文档中的占位 path。
  不要写真实 tunnel URL、团队项目 URL 或暴露本机开发环境的路径。
- 对 Transit、2GIS、Sygic 和 CoPilot，严格保留官方坐标顺序。
  示例只用合成地点、保留坐标和假路线；不要写真实家庭/工作地址、司机、车辆或 fleet 账号。
- 对 ArcGIS Earth 和 ArcGIS Indoors，使用假的 item ID、portal URL、viewpoint、floor、
  layer、featureID、route point 和服务 URL。不要暴露真实室内地图、组织 portal 或工单位置。
- 对 DingTalk、Alipay 和 Baidu Smart Program，优先做官方 AppLink / 小程序 scheme 的
  参数生成或已生成链接透传；不要伪造真实 corpId、appId、小程序 path、ticket、token、
  支付订单或生产回调。
- 对 Shopify POS，helper 只覆盖 POS UI extension deep link。示例使用 localhost 或
  `example.com` extension URL，不要写真实店铺、staff、session、cart 或订单信息。
- 对 The Archive、Curio 和 EagleFiler，item/list/project/library/record link
  示例使用假的 identifier。不要写真实库路径、笔记内容、文件名、Spotlight identifier
  或插件 ID。
- 对 Downie，示例使用公开测试 URL 和合成文件路径；不要写私有下载链接、
  受版权限制内容、带 token URL 或真实本机路径。
- 对 Raindrop.io 和 Strava，示例使用公开 `example.com` URL、假的 title、client ID、
  scope 和 redirect URI。不要写真实 OAuth client、refresh token、活动数据或私有网页。
- 对 SecureCRT，要像 Cyberduck 一样明确 helper 生成的是标准 `ssh://` / `telnet://`
  URI，只有在 SecureCRT 配置为默认处理器时才会进入 SecureCRT；示例不要包含真实 host、
  用户名、端口或凭据。
- 每个协议包都需要三处注册：
  `packages/protocol-launcher/src/<name>/index.ts`、
  `packages/protocol-launcher/src/index.ts` 里的 namespace export、
  以及 `packages/protocol-launcher/package.json` 的 subpath export。
- 包级可见新增功能需要通过 `pnpm changeset` 创建 changeset。

## 已查看但暂不采纳

| App | 原因 |
| --- | --- |
| Nuki | 找到过较老的官方风格 PDF URL scheme 参考，但没有找到当前主官网上的稳定公开文档页。 |
| Unread | 当前官方页面记录了 share extension 和 App 功能，但没有找到当前 URL scheme 参考页。 |
| Mimestream | 官方文档描述了 App 内复制出来的 HTTPS universal links，但没有公开、可构造的 scheme/helper surface。 |
| AnyList | 官网和帮助中心可验证 App 功能与下载入口，但没有公开 URL scheme / deeplink 语法；社区里只出现过非官方 `anylist://` 讨论。 |
| Gmail / Google Calendar / Google Drive iOS | 搜到大量社区 `googlegmail://`、`googlecalendar://`、`googledrive://` 资料，但未找到 Google 官方 App 文档公开可封装的 URL scheme 语法。 |
| Vivaldi / Firefox Focus / DuckDuckGo / Opera iOS | 本轮未找到这些浏览器官网明确公开的 open-url URL scheme 语法；Firefox/Brave 的官方仓库也不满足本轮官网正文标准。 |
| 1Password | 搜到社区和旧资料讨论 `onepassword://`，但当前官方支持页未能复核可维护的 URL scheme 语法。 |
| Bitwarden | 官方社区里存在 deep link 功能请求和限制说明，但当前官方文档没有公开 App URL scheme grammar。 |
| Dashlane | 官方支持页记录的是 linked websites / Autofill 使用方式，没有公开 App URL scheme 或 deep-link 参数语法。 |
| NordVPN | 官方支持页记录 App 内连接步骤；社区 URL scheme 自动化资料不是官网文档，不采纳。 |
| Rainbow Wallet / Rabby Wallet / SafePal / Exodus | 官方资料主要记录 WalletConnect、扫码、移动 linking 或 App 功能，没有找到像 Phantom/Tonkeeper/Keplr/Bitget 这种由官网公开的固定 deeplink URL 模板。 |
| OKX Wallet | 官方站有 WalletConnect 和 SDK 集成资料，但本轮没有找到官网明确公开 `okx://...` 或等价 deeplink URL 模板的稳定文档页。 |
| Microsoft Outlook / Microsoft To Do | Microsoft 官方文档未能检出面向 App 启动的稳定 URL scheme grammar；Teams 深链已由现有 `microsoft-teams` 包覆盖。 |
| Quantumult X | 官方 GitHub 仓库包含 `url-scheme.md`，但我没有找到与本清单已采纳项同等可信的当前厂商官网文档页。如果项目认可官方仓库作为文档源，可以回头补评。 |
| Proton Mail | 官方支持文档没有公开 App URL scheme 参考。 |
| Thunderbird | 官方开发者文档中没有找到面向用户的 App URL scheme 参考。 |
| Vimcal | 官方页面描述了 App 功能，但没有搜到 URL scheme/deep link 参考。 |
| Morgen | 官方开发者文档重点是 API，而不是 App URL scheme。 |
| Figma | 官方页面依赖普通 Web link 和桌面端路由，没有找到适合 typed helper 的公开 `figma://` URL scheme 参考。 |
| WireGuard | 官方文档和 App Store 页面记录了通过文件/QR 导入 tunnel，但没有找到官方 App 固定 URL scheme 参考。 |
| DBeaver | 官方文档覆盖数据库连接和 App 使用，但没有找到类似 TablePlus/Postico/Sequel Ace 的自定义 URL/deep-link handler 文档。 |
| Plex | 官方文档公开了 Plex Web 和 server URL commands，但不是适合 launcher helper 的 App URL scheme。 |
| DuckDuckGo Browser | 官方页面记录了浏览器产品，但没有公开 App URL-scheme 参考。 |
| Opera iOS | 官方帮助页记录了浏览器使用方式，但没有公开 iOS URL-scheme 参考。 |
| Zotero | 官方支持页面没有搜到清晰维护中的 `zotero://` 参考；具体格式多出现在论坛、社区或插件文档里。 |
| KeePassium | 官方文档提到用于 linked database 的 `kdbx://`，但它更像 KeePass 数据库约定，而不是 KeePassium 的 launcher surface。 |
| Timery | 官方页面重点介绍 Shortcuts 和 widgets，但没有找到公开 URL-scheme 配置参考。 |
| Streaks | 官方支持和 App Store 页面提到了 Shortcuts 与 URL action button，但没有公开 URL-scheme API。 |
| Linky | App Store 文案说明 App 内有 URL scheme 文档，但没有找到公开官方配置页记录 action 格式。 |
| Runestone | 官方文档覆盖编辑器框架和 App 功能，但没有记录 App URL scheme。 |
| Hazel | 官方手册覆盖自动化、AppleScript 和 Shortcuts，但没有找到自定义 URL scheme/deep-link 参考。 |
| GitKraken Desktop | 官方文档描述了从 UI 复制的 repo/commit/branch/tag deep link，但当前可抓取页面没有公开稳定、可构造的 URL 语法。若能拿到可验证的复制样例，可以回头补评。 |
| Signal | 官方支持页提到了 `signal.me`/`signal.link` 域名，但没有找到维护中的公开 URL action 参考。 |
| Logseq | 搜索到了论坛和社区中的 `logseq://` 引用，但没有找到当前官方文档中稳定的 protocol 语法页面。 |
| Goodnotes | 官方支持页记录了笔记内的内部/外部链接，但没有 App URL-scheme API。 |
| Notability | 官方支持页记录了分享和链接功能，但没有公开 URL-scheme/deep-link API。 |
| GitHub Mobile | 官方文档依赖普通 GitHub universal link 和 iOS universal-link 设置，不是独立可构造的 App scheme/helper surface。 |
| Jira Mobile | Atlassian 官方支持文档描述了如何通过设备设置让 Jira link 进入移动 App，但没有公开 URL scheme 语法。 |
| Discord | 官方开发者文档提到了移动端 deep link、游戏邀请 deep link 和 Application Directory store URL，但这些属于 Discord 开发者集成流程或 HTTPS 商店链接，不是稳定的 Discord App launcher scheme/helper surface。 |
| Vipps MobilePay | 官方开发者文档提到了支付 API 生成的 deeplink URL 和商户回调 URL scheme，但这些是带 token 的支付流程 URL，不适合做通用 URL generator surface。 |
| Secure ShellFish | 官方帮助页描述了共享 tmux session 和 SFTP 位置的 universal link，但没有找到适合复用 helper 的公开参数语法。 |
| Aloha Browser | 搜索到了不符合本清单官方文档标准的 scheme 引用，但没有找到当前 Aloha 官网公开 URL-scheme 配置页。 |
| Castro | 当前官方支持页没有搜到维护中的 URL-scheme 或 x-callback-url 参考页。 |
| Data Jar | 没有搜到公开官方 URL-scheme 语法页；目前可见的官方资料主要是 Shortcuts actions 和 App 使用说明。 |
| Jayson | App Store 文案提到了 URL schemes，但没有找到当前开发者网站公开记录精确 action 语法的页面。 |
| Toolbox Pro | 官方页面记录的是 Shortcuts actions，不是稳定公开的 URL scheme/helper 语法。 |
| MFC Deck | 官方文档和论坛帖子主要围绕 deck、card、custom actions 与 API，没有找到维护中的 URL-scheme 参考页。 |
| MixEffect | 官方文档重点是 Shortcuts、OSC 和 App 配置，没有搜到 custom URL-scheme 语法。 |
| PopClip | 官方文档覆盖 extension API 和从 PopClip 打开外部 URL，但不是适合封装 helper 的 PopClip App URL scheme。 |
| Gaia GPS | 官方帮助页覆盖 App 和 web map 使用方式，但没有找到维护中的公开 URL-scheme 语法页。 |
| CalTopo | 官方支持/社区帖讨论了 mobile link 和 URL 行为，但没有找到稳定公开、适合 typed helper 的 URL-scheme 配置文档。 |
| onX Hunt | 官方帮助文档记录了 App/web 使用方式和 share link，但没有公开 URL scheme 或参数语法。 |
| Bluebeam | 官方 Revu for iPad 页面主要是 App 使用和产品生命周期信息，没有找到当前移动 App 维护中的 URL-scheme/deep-link 参考页。 |
| TeamViewer | 官方社区帖和 API 页面提到了 URL/URI 行为，但没有找到维护中的官方 URL-scheme 语法页可用于直接封装 helper。 |
| FileBrowser | Stratospherix 官方文档提到了配置项和 x-callback launch 控制，但没有找到公开 URL action grammar 可用于复用 launcher helper。 |
| Blink Shell | 官方文档和 App Store notes 提到了 URL handler 行为，但没有找到稳定公开、带 action grammar 的 URL-scheme 配置页。 |
| CotEditor | 官方文档记录的是 `cot` command-line tool，不是 custom App URL scheme。 |
| Sublime Text | 官方文档记录的是 `subl` command 和内部 `subl:` minihtml link，不是用于从 App 外部启动文件的公开 App URL scheme。 |
| TomTom GO Navigation | TomTom 官方文档主要是 SDK 和产品帮助，没有找到当前公开的 TomTom GO App URL-scheme/deep-link 语法页。 |
| MAPS.ME | 官方页面记录了 App 功能和 app links，但不是适合 typed helper 的 URL-scheme 配置页。 |
| Pocket Earth | 官方帮助提到共享 PocketEarth links，但没有找到公开 scheme grammar 或参数参考。 |
| SongbookPro | 官方文档覆盖导入歌曲和 App 使用，但没有搜到维护中的 URL-scheme/deep-link 参考。 |
| Planning Center Music Stand | 官方帮助记录 Music Stand 用法和普通 Planning Center web links，不是公开 App URL scheme/helper grammar。 |
| Newzik | 官方页面记录产品功能和 web app 工作流，但没有搜到 URL-scheme 配置参考。 |
| MetaMask | 当前官方文档路径会跳转到 MetaMask Connect 页面，只说明 SDK 会在需要时 deeplink 到 mobile app，没有找到当前维护的 `https://link.metamask.io/...` 或 `metamask://...` URL 模板参考。 |
| Coinbase Wallet | 旧的 Coinbase Wallet deeplink 文档路径当前跳转到 Base Account 页面且返回 404，没有找到当前官方 deeplink URL 模板。 |
| Tumblr for iOS | 官方 TMTumblrSDK README 当前标注 URL schemes deprecated，且没有给出新的可封装 URL grammar。 |
| Byword / Begin / 多个旧 x-callback 索引 App | x-callback-url 官方索引里的多个旧链接当前 404、跳转到无关产品、或只剩空壳页；在找到当前 App 官方文档前不采纳。 |
| Foursquare / Swarm | 旧开发者 URL scheme 路径已迁移或不可抓取，当前官方 docs 页面没有检出 `foursquare://` / `swarm://` 可构造语法。 |
| Yelp | 当前 Yelp Fusion / developer 页面没有找到 App URL scheme 或 deeplink grammar。 |
| MapQuest | 旧 iOS SDK URL scheme 文档路径当前无法解析出 scheme 语法。 |
| Kandji Self Service / Addigy Self Service | Kandji 相关 deep-link 页面当前 404，Addigy 支持页需要权限或访问受限；不作为官方可验证来源。 |
| MobaXterm | 官方文档只说明可用 `-installprotohandler` 安装 URL protocol handler，用于从 HTML 页面执行 session，但没有公开 `mobaxterm://` 或标准 URI 参数 grammar。 |
| Miro | 官方帮助搜索结果提到 `miroapp://` app schema，但当前帮助页匿名抓取为 403，且没有可验证的 action/helper surface。 |
| Tableau Mobile | 官方帮助搜索结果提到 Tableau Mobile deep linking，但当前未能打开到记录具体 URL 结构的稳定页面；普通 Tableau view URL 暂不作为 App scheme 候选。 |
| ServiceNow Mobile | 官方文档提到 `MobileDeepLinkGenerator` 生成移动深链，但当前页面主要是动态渲染，未能在可抓取正文中复核 URL 格式。适合后续拿到具体文档后再评估透传 helper。 |
| Ivanti Secure Access Client | 搜索结果显示 `pulsesecureclient://connect`，但当前 help.ivanti.com 路径多次 404，未找到稳定官方正文。 |
| YouTube | Google 官方普通视频/频道 URL 和移动端 universal link 行为很明确，但没有找到维护中的 YouTube App URL-scheme/helper 语法页；暂不把普通 `youtube.com` URL 封成 App helper。 |
| Pinterest | 旧/当前开发者页面可能记录 Save Button 的 `pin/create/button` URL，但官方开发者页当前抓取超时，无法复核为 App deep link 候选。 |
| Element | 搜索到 `mobile.element.io` mobile provisioning 线索，但 `docs.element.io` 当前路径 404 或迁移，未能打开官方正文。 |
| Douyin / TikTok | 开放平台资料更多是 SDK 分享/授权流程，未找到可在本库中直接封装的、当前官方公开 URL scheme 语法页。 |
