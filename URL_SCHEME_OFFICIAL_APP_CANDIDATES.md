# URL Scheme Official App Candidates

> Research date: 2026-05-30
> Scope: continued search after only part of the 2026-05-30 list was implemented.
> Repo snapshot refreshed: candidates already present under
> `packages/protocol-launcher/src` have been removed from this list.
> Additional research pass: 2026-05-31, after 10+ web-search rounds focused on
> official app/vendor documentation for schemes, URI APIs, app links, and
> deep-link parameter references.
> Additional official-doc pass: 2026-05-31, constrained to vendor-owned app
> sites and official developer docs with explicit URL scheme or deep-link
> syntax.
> Additional official-doc pass: 2026-06-01, rechecking official Microsoft,
> Esri, and app/project documentation for constructible mobile deep links and
> URL handlers.
> Additional official-doc pass: 2026-06-01, continued with app-vendor browser,
> automation, communications, screenshot, and enterprise mobile docs.
> Pending-list recheck: 2026-06-01, compared the earlier official pending list
> with current `packages/protocol-launcher/src` and package exports.

This document collects additional app candidates for `protocol-launcher`.
Candidates are included only when the app vendor or an official developer/help
site documents a URL scheme, x-callback-url endpoint, URI format, universal
link, or app deep-link pattern.

## Inclusion Rules

- The app is not currently present under `packages/protocol-launcher/src`.
- The source is official, vendor-controlled, or part of the app's official
  developer documentation.
- The source explicitly documents a usable URL scheme, URI scheme,
  x-callback-url endpoint, or app deep-link format.
- Prefer helpers that can be verified with exact URL-string tests.

## New Official Candidates

| Priority | App | Official scheme / deep link | Suggested helpers | Why it fits | Official docs |
| --- | --- | --- | --- | --- | --- |
| P0 | Apple communication apps | `mailto:`, `tel:`, `sms:`, `facetime:`, `facetime-audio:` | `mail()`, `phone()`, `sms()`, `facetime()`, `facetimeAudio()` | Apple documents these system-app URL schemes directly. They are not third-party apps, but they are highly useful core launch targets beside the existing Apple-related helpers. | [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html), [Apple custom URL schemes](https://developer.apple.com/documentation/Xcode/defining-a-custom-url-scheme-for-your-app) |
| P1 | Uber | `https://m.uber.com/looking?...`, `https://m.uber.com/?client_id=...`, `uber://riderequest?...` | `rideRequest()`, `webRideRequest()`, `standardRideRequest()` | Uber official Ride Request docs define universal, m.uber.com, and standard native deep links for starting ride requests with pickup/dropoff/product parameters. Prefer `https://m.uber.com/looking` universal/web links for non-native contexts and keep `uber://riderequest` as the explicitly documented native option. | [Uber Ride Request Deep Links](https://developer.uber.com/docs/riders/ride-requests/tutorials/deep-links/introduction) |
| P1 | Linear | `https://linear.new?...`, `https://linear.app/new?...`, `https://linear.app/team/<team ID>/new?...` | `newIssue()`, `newTeamIssue()` | Linear official developer docs expose constructible pre-filled issue creation links with supported query parameters including title, description, status, priority, assignee, estimate, cycle, labels, project, milestone, links, and template. Use HTTPS links rather than undocumented `linear://` URLs; treat template as an optional issue-creation parameter, not a separate scheme. | [Create issues using linear.new](https://linear.app/developers/create-issues-using-linear-new), [Linear create issues](https://linear.app/docs/creating-issues) |
| P1 | TablePlus | Connection URL deeplinks such as `postgres://...` / `postgresql://...` with TablePlus query parameters | `openConnection()`, `openPostgres()`, `openWithFilter()`, `openWithRawQuery()` | TablePlus official docs do not present a `tableplus://` custom scheme reference. They do document CLI/deeplink usage via connection URLs, `Copy as URL`, `open -a TablePlus "url"`, and TablePlus-specific query parameters for schemas, tables, filters, and raw queries. | [TablePlus Connections & CLI](https://docs.tableplus.com/gui-tools/manage-connections) |
| P1 | Postico | `postgres:`, `postgresql:`, `redshift:`, `postico:`, `postgres+ssh:`, `postgresql+ssh:`, `postico+ssh:` | `openConnection()`, `openPostgres()`, `openRedshift()`, `openSshConnection()` | Postico 2's official documentation explicitly documents supported URL schemes for opening PostgreSQL/Redshift connections and adding or updating server entries, including the `postgresql+ssh:` SSH variant. | [Postico 2 Connection URLs](https://eggerapps.at/postico2/documentation/postico-url-scheme.html) |
| P1 | Sequel Ace | `mysql://[user[:password]@][host[:port]][/database]?...` | `openConnection()`, `openTcp()`, `openSocket()`, `openSsh()`, `openAwsIam()` | Sequel Ace official docs document programmatic MySQL/MariaDB connection URLs and supported query parameters, including SSH and AWS IAM options. | [Sequel Ace Open a Connection via URL](https://sequel-ace.com/get-started/connect-via-url.html), [Sequel Ace connection types](https://sequel-ace.com/get-started/connection-types.html) |
| P1 | Panic Prompt | `ssh://...`, `prompt-ssh://...`, `telnet://...`, `prompt-favorite://...` | `ssh()`, `promptSsh()`, `telnet()`, `promptTelnet()`, `favorite()` | Panic's official help documents URL formats for launching Prompt and pre-filling SSH/Telnet connection details. Strong fit beside Termius/Terminology-style tools. | [Prompt URL schema](https://help.panic.com/prompt/url-schema/) |
| P1 | Dash | `dash://?query=...`, `dash-plugin://keys=...&query=...`, `dash-feed://...`, `dash-install://...` | `search()`, `searchDocsets()`, `pluginSearch()`, `subscribeFeed()`, `installDocset()` | Kapeli officially documents Dash search, plugin integration, feed subscription, and docset install URL schemes. Very aligned with developer documentation workflows. | [Dash User Guide](https://kapeli.com/dash_guide), [Dash Plugins](https://newyork.kapeli.com/dash_plugins), [dash-install URL Format](https://kapeli.com/dash_install), [Dash Docset Guide](https://kapeli.com/docsets) |
| P2 | MailMate | extended `mailto:`, `mlmt:`, `message:`, `mid:`, `cid:` | `compose()`, `composeExtended()`, `openMessage()`, `openMessageId()`, `openContentId()` | Official manual documents MailMate's extended email URI support. It is macOS-only and niche, but strong for power-user email linking. | [MailMate URI Schemes](https://manual.mailmate-app.com/extended_url_scheme), [MailMate Preferences](https://manual.mailmate-app.com/preferences) |
| P1 | Rocket.Chat | `https://go.rocket.chat/...`, `rocketchat://...` | `addServer()`, `authenticate()`, `openRoom()`, `openInvite()`, `openConference()` | Official developer docs say the universal-link and custom-protocol prefixes are interchangeable for supported desktop/mobile clients. Good fit for self-hosted collaboration workflows. | [Rocket.Chat Deep Linking](https://developer.rocket.chat/docs/deep-linking) |
| P1 | WhatsApp | `https://wa.me/<number>?text=...` | `clickToChat()`, `message()`, `shareText()` | WhatsApp's official Help Center documents click-to-chat links. Prefer the official `wa.me` universal link over undocumented `whatsapp://` variants. | [WhatsApp click to chat](https://faq.whatsapp.com/5913398998672934/?locale=en_US) |
| P1 | Threema | `https://threema.id/<id>?text=...`, `https://threema.id/compose?text=...`, legacy `threema://` | `addOrOpenContact()`, `composeToContact()`, `compose()` | Official support docs expose privacy-preserving universal links and explicitly recommend them over legacy `threema://` actions when possible. | [Threema URL actions](https://threema.com/en/faq/url-actions) |
| P1 | Cyberduck | `ftp://...`, `sftp://...`, `webdav://...`, `s3://...` handled when Cyberduck is the default protocol handler | `openConnection()`, `ftp()`, `sftp()`, `webdav()`, `s3()` | Official Cyberduck docs describe opening fully qualified connection URLs and configuring Cyberduck as the default protocol handler. Useful, but helpers should be explicit that these are standard protocol URLs. | [Cyberduck Opening Connections](https://docs.cyberduck.io/cyberduck/connection/), [Cyberduck CLI URI rules](https://docs.cyberduck.io/cli/) |
| P2 | SAP Fiori Client | `<scheme>://x-callback-url/openFioriUrl?url=...`, default `com.sap.fiori.client.xcallbackurl` | `openFioriUrl()`, `openWithPackageScheme()` | SAP official docs document the default and custom-client scheme construction. Enterprise-focused, but credible and precise. | [SAP Fiori Client deep links](https://help.sap.com/docs/SAP_MOBILE_PLATFORM_SDK_31/e2ed9b4f3edb4391a7a89b1af84d9606/6e2698619acb462bbadd8f4e40fcfdd3.html) |
| P1 | iTerm2 | `iterm2:/command?c=...`, optional host/user and `d`, `silent` query params | `command()`, `remoteCommand()`, `silentCommand()` | Official iTerm2 docs document command URLs for rerunning local or remote shell commands and note that profiles can also handle arbitrary schemes such as `ssh`. | [iTerm2 Command URLs](https://iterm2.com/documentation-command-selection.html), [iTerm2 Preferences URL Schemes](https://iterm2.com/3.2/documentation-preferences.html) |
| P1 | ArcGIS Field Maps | `https://fieldmaps.arcgis.app?referenceContext=...&itemID=...` | `openMap()`, `centerMap()`, `searchMap()`, `showFeature()`, `addFeature()` | Esri official docs define Field Maps app links for opening maps, centering, searching, showing features, starting capture, and task-related add/update flows. | [Field Maps deploy links](https://doc.arcgis.com/en/field-maps/latest/prepare-maps/deploy-your-map.htm), [Field Maps tasks links](https://doc.arcgis.com/en/field-maps/latest/prepare-maps/configure-tasks.htm) |
| P1 | ArcGIS QuickCapture | `arcgis-quickcapture://?itemID=...`, `https://quickcapture.arcgis.app?itemID=...` | `openProject()`, `openPortal()`, `pressButton()`, `populateUserInput()` | Esri official docs document both QuickCapture links and custom URL scheme links with mobile app parameters for opening projects and prepopulating inputs. | [QuickCapture app integration](https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm) |
| P2 | ArcGIS Workforce | `https://workforce.arcgis.app?portalURL=...`, web assignment links under `/apps/workforce/projects/<project-id>` | `openMobile()`, `openPortal()`, `openAssignment()`, `newAssignment()` | Esri official docs document Workforce mobile and web app links for deployment, opening assignments, and prepopulating dispatcher assignment creation. | [Workforce deployment links](https://doc.arcgis.com/en/workforce/android-phone/help/deploy.htm) |
| P1 | ForeFlight Mobile | `foreflightmobile://maps/search?q=...`, `https://foreflight.com/content?downloadURL=...` | `mapSearch()`, `routeSearch()`, `contentPackDownload()` | ForeFlight official support docs provide a broad aviation route/search URL scheme and content-pack universal-link import format. | [ForeFlight Mobile URL Schemes](https://foreflight.com/support/app-urls/), [ForeFlight Content Packs](https://foreflight.com/support/content-packs) |
| P1 | RingCentral | `rcmobile://call?number=...`, `rcmobile://sms?number=...`, `rcmobile://glip/team?id=...`, `https://app.ringcentral.com/...` | `call()`, `sms()`, `conference()`, `meeting()`, `openTeam()`, `openChat()`, `openTask()`, `joinVideo()` | RingCentral's official developer docs provide a catalog of URI schemes and HTTPS deep links for calling, SMS, voicemail, team messaging, files, tasks, events, and meetings. | [RingCentral URI Scheme Reference](https://developers.ringcentral.com/guide/basics/uri-schemes) |
| P1 | Cisco Jabber | `xmpp:`, `im:`, `tel:`, `ciscotel:`, `sip:`, `clicktocall:` | `chatXmpp()`, `chatIm()`, `callTel()`, `callCiscoTel()`, `callSip()`, `clickToCall()` | Cisco official deployment docs list Jabber protocol handlers and supported parameters for click-to-call and click-to-IM integrations. Keep this separate from generic Apple `tel:` helpers. | [Cisco Jabber protocol handlers](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/jabber/11_5/CJAB_BK_D00D8CBD_00_deployment-installation-guide-cisco-jabber115/CJAB_BK_D00D8CBD_00_deployment-installation-guide-cisco-jabber115_chapter_010011.html), [Cisco Jabber parameters](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/jabber/11_5/CJAB_BK_J06BEF2D_00_jabber-parameters-reference-guide-115/CJAB_BK_J06BEF2D_00_jabber-parameters-reference-guide-115_chapter_0110.html) |
| P1 | Remote Desktop Manager | `rdm://<action>?DataSource=...&Session=...`, `rdm://open?Filter=...` | `open()`, `find()`, `edit()`, `viewPassword()`, `openWithMacro()`, `select()` | Devolutions official docs document the `rdm://` protocol handler, actions, parameters, and examples for launching sessions or templates from external systems. | [Remote Desktop Manager protocol handler](https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/) |
| P1 | Microsoft Remote Desktop | `ms-rd:subscribe?url=...`, `rdp://full%20address=s:...`, `ms-avd:connect?...` | `open()`, `subscribe()`, `legacyRdp()`, `avdConnect()` | Microsoft Learn documents URI schemes for invoking Remote Desktop clients, including `ms-rd`, legacy `rdp://` attributes, and Azure Virtual Desktop `ms-avd` commands. | [Remote Desktop URI scheme](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri), [Azure Virtual Desktop URI schemes](https://learn.microsoft.com/en-us/azure/virtual-desktop/uri-scheme) |
| P1 | Splashtop Business | `st-business://com.splashtop.business?account=...&mac=...`, `sos=...` | `connectByMac()`, `connectSos()`, `remoteCommand()`, `fileTransfer()` | Splashtop official support docs document URI launch formats for Business app shortcuts, RMM integrations, SOS session codes, remote command, and file transfer sessions. | [Splashtop desktop shortcuts](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001482866-How-to-create-a-desktop-shortcut-to-always-connect-to-a-specific-computer), [Splashtop RMM URI launch](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001642066-Other-RMMs) |
| P2 | OsmAnd | `https://osmand.net/map/?pin=...#zoom/lat/lon`, `https://osmand.net/map/?start=...&finish=...&profile=...` | `showPin()`, `showMap()`, `navigate()`, `geo()` | Official OsmAnd technical docs list Android geo intents and OsmAnd-specific app links for displaying pins, centering the map, and starting navigation. | [OsmAnd intents and app links](https://www.osmand.net/docs/technical/algorithms/osmand-intents/) |
| P1 | AMap / Gaode Map | `iosamap://myLocation?...`, `iosamap://path?...`, `androidamap://navi?...`, `amapuri://route/plan?...`, `https://uri.amap.com/...` | `myLocation()`, `route()`, `navigate()`, `marker()`, `search()`, `webMarker()`, `webNavigation()` | AMap official mobile and URI API docs define iOS, Android, HarmonyOS, and HTTPS launch formats for opening the app, showing the current location, route planning, navigation, POI markers, and search. Strong Chinese-map counterpart to the existing map helpers. | [AMap mobile getting started](https://lbs.amap.com/api/amap-mobile/gettingstarted), [AMap iOS route planning](https://lbs.amap.com/api/amap-mobile/guide/ios/route), [AMap URI API overview](https://lbs.amap.com/api/uri-api) |
| P1 | Baidu Maps | `baidumap://map`, `baidumap://map/marker?...`, `baidumap://map/direction?...`, `https://api.map.baidu.com/...` | `openMap()`, `marker()`, `direction()`, `navigation()`, `search()`, `webDirection()` | Baidu Maps official URI API documents direct launch of Baidu Web Maps and the Baidu Maps mobile client for map display, search, route planning, and navigation. The HarmonyOS docs also show `baidumap://map` style native app links. | [Baidu Maps URI API overview](https://api.map.baidu.com/lbsapi/cloud/uri.htm), [Baidu Maps URI API guide](https://api.map.baidu.com/lbsapi/cloud/uri-developer.htm), [Baidu Maps Harmony app launch](https://lbs.baidu.com/docs/harmony?title=harmonynextsdk%2Fguide%2Ftool%2Fbaiduapi) |
| P1 | Tencent Map | `https://apis.map.qq.com/uri/v1/search?...`, `https://apis.map.qq.com/uri/v1/routeplan?...`, `marker`, `geocoder`, mobile `qqmap://map/...` routes | `search()`, `routePlan()`, `marker()`, `geocoder()`, `nearby()`, `webUri()` | Tencent Location Service official URI API documents map launch methods and parameters for search, route planning, reverse geocoding, street view, and markers. Prefer HTTPS URI API helpers for browser-safe launch, with explicit mobile-scheme helpers only where the Android/iOS section documents them. | [Tencent Map URI API overview](https://lbs.qq.com/webApi/uriV1/uriGuide/uriWebGuide), [Tencent Map marker/geocoder URI API](https://lbs.qq.com/webApi/uriV1/uriGuide/uriWebMarker) |
| P1 | Yandex Navigator | `yandexnavi://build_route_on_map?...`, `yandexnavi://show_point_on_map?...`, `yandexnavi://search?...` | `buildRoute()`, `showPoint()`, `search()`, `open()` | Yandex official Navigator docs document the `yandexnavi` scheme and a detailed URL grammar for building routes, showing placemarks, and search. Treat the required access-key or app-identifying params as first-class optional fields. | [Launch Yandex.Navigator](https://yandex.com/dev/yandex-apps-launch/navigator/), [Yandex Navigator URL format](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params) |
| P1 | Feishu / Lark AppLink | `https://applink.feishu.cn/client/web_url/open?...`, `lark://msgcard/unsupported_action` | `openWebUrl()`, `openWebUrlInSidebar()`, `unsupportedAction()` | Feishu Open Platform official AppLink docs document client AppLink URLs for opening a specified web URL inside Feishu/Lark containers, and message-card URL elements document per-platform URL behavior and the `lark://msgcard/unsupported_action` sentinel. Use HTTPS AppLink helpers rather than inventing undocumented `feishu://` routes. | [Feishu open web-view AppLink](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-the-web-view-in-feishu-to-access-the-specified-url), [Feishu Android AppLink capability](https://open.feishu.cn/document/native-integration/open-capability/capability-components/applink-capability/android/android), [Feishu URL element](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements) |
| P1 | WeChat Mini Programs | `weixin://dl/business/?t=...`, generated URL Link / Short Link formats | `openGeneratedScheme()`, `openGeneratedUrlLink()`, `openGeneratedShortLink()` | WeChat official Mini Program backend APIs generate URL Scheme and URL Link entries for opening published Mini Programs from outside WeChat. Implement this as pass-through helpers for already-generated official links rather than trying to fabricate tickets client-side. | [WeChat URL Scheme generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html), [WeChat URL Link generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-link/urllink.generate.html), [WeChat Short Link generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/short-link/shortlink.generate.html) |
| P1 | Box | `boxapp://folder?id=...`, `boxapp://file?id=...`, `boxapp://sharedlink?url=...`, EMM variants under `boxemm://` | `openFolder()`, `openFile()`, `openSharedLink()`, `openEmmFolder()`, `openEmmFile()`, `openEmmSharedLink()` | Box official developer documentation lists mobile deep links for opening file, folder, and shared-link objects in Box and Box for EMM. This is a clean enterprise file-link candidate with exact string tests. | [Box mobile deep linking](https://developer.box.com/guides/mobile/mobile-deep-linking/) |
| P1 | what3words | `w3w://show?currentlocation`, `w3w://show?threewords=word.word.word` | `showCurrentLocation()`, `showThreeWords()` | what3words official developer docs document Android and iOS mobile linking into the what3words app, including current-location launch and direct navigation to a three-word address. | [what3words mobile linking](https://developer.what3words.com/tutorial/mobile-linking-to-the-what3words-app) |
| P2 | OmniPlan | `omniplan:///task/<task-id>`, `omniplan://localhost/omnijs-run?script=...` | `openTask()`, `runScript()` | Omni Automation's official OmniPlan docs show task links and Omni Automation script URLs for app-to-app workflows. This fits best as a focused task-link/script-runner helper mirroring the existing Omni app family. | [OmniPlan App-to-App](https://www.omni-automation.com/omniplan/app-to-app.html), [OmniPlan scenarios](https://www.omni-automation.com/omniplan/scenarios.html) |
| P2 | OmniGraffle | `omnigraffle://localhost/omnijs-run?script=...`, `omnigraffle:///omnijs-run?script=...` | `runScript()`, `runFunction()` | Omni Automation's official OmniGraffle docs show script URLs and app-to-app automation examples. It rounds out the currently missing Omni app target beside OmniFocus, OmniOutliner, and OmniPlan. | [Omni Automation App-to-App](https://omni-automation.com/actions/action-02.html), [OmniGraffle layers automation](https://omni-automation.com/omnigraffle/layers.html) |
| P1 | TrueContext | `truecontext://x-callback-url/open?...`, `tcxt://x-callback-url/open?...`, legacy `prontoforms://...` and `https://prontofor.ms/...` | `openForm()`, `openFormWithAnswers()`, `openFormWithCallbacks()` | TrueContext's official docs document App-to-App communication for opening a mobile form, dispatching prefilled answers, and returning with x-callback parameters. The URL grammar is explicit and enterprise-workflow friendly. | [TrueContext App-to-App request](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppCookbook/AppToApp_RecipeToOpenAndDispatch.htm), [TrueContext supported platforms](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/Introduction/AppToAppSupportedPlatforms.htm) |
| P2 | Panorama X | `panoramax://x-callback-url/run/<database>/<procedure>/<label>`, `panoramax://x-callback-url/wizard/<wizard-name>` | `runProcedure()`, `openWizard()` | ProVUE's official Panorama X documentation records the `panoramax://` x-callback-url support and two supported actions for procedure runs and wizards. Good fit for a narrow macOS automation helper. | [Panorama X 10.2 x-callback-url notes](https://www.provue.com/panoramax/help/Release_10_2.html) |
| P1 | Salesforce Mobile | `salesforce1://sObject/<id>/<action>`, `salesforce1://sObject/<ObjectName>/home` | `viewRecord()`, `editRecord()`, `objectHome()`, `downloadFile()`, `followUser()` | Salesforce official Help documents the Salesforce Mobile app URL scheme format, supported actions (`view`, `edit`, `home`, `download`, `follow`), and optional org/site/user redirect query parameters. This is a strong enterprise CRM candidate with exact string tests. | [Salesforce app URL scheme format](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5), [Salesforce additional query parameters](https://help.salesforce.com/s/articleView?id=sf.sapp_url_schemes_query_additional.htm&language=en_US&type=5) |
| P1 | Power Apps Mobile | `ms-apps://<org-url>_<app-id>?...`, `ms-apps:///providers/Microsoft.PowerApps/apps/<appID>?...`, `ms-mobile-apps:///providers/Microsoft.PowerApps/apps/<appID>?...` | `openModelDrivenApp()`, `openCanvasApp()`, `openWrappedApp()`, `openEntityRecord()`, `openEntityList()` | Microsoft Learn documents deep links for Power Apps mobile model-driven apps, canvas apps, and wrapped native mobile apps, including entity record/list parameters and required tenant/environment/app identifiers. | [Power Apps mobile deep links](https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links) |
| P1 | Dynamics 365 Field Service Mobile | `ms-apps-fs://<org-url>_<app-id>?...` | `openApp()`, `openEntityRecord()`, `createEntityRecord()`, `openEntityList()` | Microsoft Learn documents Field Service mobile deep links for opening entity records, create forms, and entity list views in the mobile experience. Keep this separate from generic Power Apps helpers because it uses the Field Service app handler. | [Field Service mobile deep links](https://learn.microsoft.com/en-gb/dynamics365/field-service/mobile/deeplink-mobile) |
| P1 | ArcGIS Navigator | `https://navigator.arcgis.app?itemID=...`, `routeItemID=...`, repeatable `stop=...`, `navigate=true`, `callback=...` | `openMap()`, `openRoute()`, `routeToStop()`, `routeToStops()`, `startNavigation()`, `withCallback()` | Esri official Navigator deployment docs provide a full Navigator links section with supported parameters for downloading/opening maps, opening shared routes, routing to stops, optimizing, selecting travel modes, starting navigation, and returning to a callback URL. | [ArcGIS Navigator deploy links](https://doc.arcgis.com/en/navigator/android-phone/help/deploy.htm) |
| P2 | ArcGIS Explorer | `https://explorer.arcgis.app?itemID=...`, `portalURL=...`, `center=...`, `scale=...`, `bookmark=...`, `search=...` | `openMap()`, `openPortalMap()`, `centerMap()`, `openBookmark()`, `searchMap()` | Esri official Explorer deployment docs document Explorer links for opening web maps or MMPKs, connecting to a portal, centering and scaling the map, opening bookmarks, entering markup mode, and searching. | [ArcGIS Explorer deploy links](https://doc.arcgis.com/en/explorer/android-phone/help/deploy.htm) |
| P2 | Emacs Org Protocol | `org-protocol://capture?...`, `org-protocol://store-link?...`, `org-protocol://open-source?...` | `capture()`, `storeLink()`, `openSource()` | The official Org Mode Worg documentation describes `org-protocol.el` as a custom URL scheme for triggering Emacs/Org actions from external applications. It is not a mobile app, but it fits developer/automation URL generation well and has exact URL forms. | [Org Protocol documentation](https://orgmode.org/worg/org-contrib/org-protocol.html) |

## Currently Not Verifiable

These candidates were found in earlier official-looking sources, but their
official documentation link does not currently resolve to the expected vendor
documentation. Do not implement them until the vendor page is available again or
an equivalent official source is found.

| Priority | App | Claimed scheme / deep link | Suggested helpers | Previous docs |
| --- | --- | --- | --- | --- |
| P2 | LaunchCuts | `launchcuts:open-folder?result=<UUID>` | `openFolder()` | `https://launchcuts.com/docs/1/` currently redirects away from LaunchCuts documentation |
| P2 | Avenza Maps | `avenzamaps://www.example.com/maps/file.pdf` | `importMap()`, `importMapUrl()` | `https://support.avenzamaps.com/hc/en-us/articles/5051442605460-Importing-maps-from-custom-locations` currently requires sign-in or bot verification for anonymous access |
| P0 | Outlinely | `outlinely://x-callback-url/open?...`, `new?...`, `insert?...` | `open()`, `newOutline()`, `insert()` | `https://glamdevelopment.com/outlinely/learn/x-callback-url` currently times out from anonymous checks |

## Pending From Earlier Official Lists

These candidates are still not present under `packages/protocol-launcher/src`
in the current workspace snapshot.

| Priority | App | Official scheme / deep link | Suggested helpers | Official docs |
| --- | --- | --- | --- | --- |
| P0 | AnkiMobile | `anki://`, `anki://x-callback-url/addnote?...`, `infoForAdding`, `search`, `sync` | `open()`, `addNote()`, `infoForAdding()`, `search()`, `sync()` | [AnkiMobile URL Schemes](https://docs.ankimobile.net/url-schemes.html) |
| P0 | TickTick | `ticktick://x-callback-url/v1/add_task?...`, `ticktick://v1/show?...`, `ticktick://v1/search?...` | `addTask()`, `show()`, `showSmartList()`, `search()` | [TickTick iOS URL Scheme](https://blog.ticktick.com/2018/07/16/ticktick-ios-url-scheme/) |
| P1 | Firefox iOS | `firefox://open-url?url=...` | `openUrl()` | [Firefox iOS Open In Client](https://github.com/mozilla-mobile/firefox-ios-open-in-client) |
| P1 | Brave iOS | `brave://open-url?url=...` | `openUrl()` | [Brave iOS Open Third-Party Browser](https://github.com/brave/ios-open-thirdparty-browser) |

### Pending-list Recheck (2026-06-01)

Implemented entries have been removed from the active candidate tables and
build order. Treat this table as the current status overlay before implementing
from the earlier pending list.

| Status | Apps | Check |
| --- | --- | --- |
| Still not implemented; official docs still reachable | AnkiMobile, TickTick, Firefox iOS, Brave iOS | No matching `packages/protocol-launcher/src/<slug>` directory or package export was found. Keep these as valid pending candidates. |

## Suggested Build Order

1. `anki-mobile`
2. `ticktick`
3. `uber`
4. `apple-communications`
5. `linear`
6. `tableplus`
7. `postico`
8. `sequel-ace`
9. `panic-prompt`
10. `dash`
11. `firefox-ios`
12. `brave-ios`
13. `rocket-chat`
14. `whatsapp`
15. `threema`
16. `cyberduck`
17. `sap-fiori-client`
18. `iterm2`
19. `arcgis-field-maps`
20. `arcgis-quickcapture`
21. `foreflight-mobile`
22. `ringcentral`
23. `arcgis-workforce`
24. `cisco-jabber`
25. `remote-desktop-manager`
26. `microsoft-remote-desktop`
27. `splashtop-business`
28. `osmand`
29. `amap`
30. `baidu-map`
31. `tencent-map`
32. `yandex-navigator`
33. `feishu-lark`
34. `wechat-mini-programs`
35. `box`
36. `what3words`
37. `omniplan`
38. `omnigraffle`
39. `truecontext`
40. `panorama-x`
41. `salesforce-mobile`
42. `power-apps-mobile`
43. `dynamics-365-field-service-mobile`
44. `arcgis-navigator`
45. `arcgis-explorer`
46. `emacs-org-protocol`

## Implementation Notes

- Use `qs()` from `@protocol-launcher/shared` for query-string based URLs.
- Preserve official nonstandard URI shapes in tests. Important examples:
  `PDFE...`, `pdfefile:///...`, `gropen://...`, `ghttp://...`,
  `ghttps://...`,
  `reed://feed-url.com`, and `mlmt:`.
- For file-oriented apps, avoid examples that expose local private paths or
  credentials. Use synthetic file names and paths in tests.
- For database client packages such as TablePlus, Postico, and Sequel Ace, keep
  credentials out of examples and tests. Prefer username-only localhost URLs or
  synthetic hosts, and separately test percent-encoding of reserved characters.
- Apple communication schemes are generic system schemes. If implemented, keep
  package naming explicit so they do not get confused with third-party default
  app handlers on macOS.
- For remote access apps such as Prompt, never include real passwords or private
  hostnames in docs/tests. Prefer `example.com`, `server.local`, or
  RFC-reserved example IP ranges.
- Dash uses compact but opinionated URL schemes. Keep helper names close to the
  official actions and test omitted optional params.
- For Rocket.Chat and SAP Fiori Client, never include real hosts, tokens, or
  credentials in examples or tests.
- Prefer official HTTPS universal links over undocumented custom schemes when
  the vendor recommends them. Current examples: WhatsApp, Threema,
  Rocket.Chat, Linear, and Uber.
- For Linear, implement only the documented issue-creation URLs. Do not add a
  `linear://` helper unless Linear publishes an official custom-scheme grammar.
- For Uber, keep `client_id`, pickup/dropoff coordinates, product IDs, and
  payment method IDs synthetic in examples and tests.
- For Cyberduck, document clearly that helpers generate standard protocol URLs
  and only open in Cyberduck when it is configured as the default handler.
- For iTerm2, keep helper names close to official action names and use
  synthetic shell commands, hosts, users, and paths. Avoid real local paths or
  commands that mutate user state in examples/tests.
- For ArcGIS apps, use Esri-style placeholder item IDs, portal URLs, feature
  service URLs, and field names. Do not include real organization portals,
  project IDs, assignment IDs, or feature service URLs in docs/tests.
- For ForeFlight, use synthetic route strings, tail numbers, and content-pack
  URLs. Do not include real aircraft profiles, pilot data, subscription-only
  content, or private hosted URLs.
- For RingCentral, use reserved phone numbers and synthetic IDs for teams,
  posts, files, tasks, events, and meetings. Keep `tel:`/`sms:` helpers separate
  from RingCentral-specific `rcmobile:` helpers if Apple communication helpers
  are implemented first.
- For Cisco Jabber, Microsoft Remote Desktop, Remote Desktop Manager, and
  Splashtop, never include real hosts, account emails, session IDs, MAC
  addresses, credentials, or license keys. Use reserved hosts, synthetic GUIDs,
  and clearly fake IDs.
- For OsmAnd, use placeholder coordinates and map item names. Avoid real tracks,
  private map sources, personal markers, or hosted files that could expose
  location history.
- For AMap, Baidu Maps, Tencent Map, and Yandex Navigator, preserve each
  vendor's coordinate order exactly. AMap URI links often use `lon,lat`, and
  Yandex `ll` uses `lon,lat`. Use synthetic coordinates and app names or
  referers only.
- For Feishu/Lark AppLink and WeChat Mini Programs, prefer pass-through helpers
  for already-generated or platform-hosted links. Do not invent real tenant IDs,
  app IDs, Mini Program tickets, short links, or production callback targets in
  examples and tests.
- For Box, use synthetic file IDs, folder IDs, and shared-link URLs. Keep Box
  and Box for EMM helpers separate because the official schemes differ.
- For what3words, validate or document the three-word-address shape without
  calling the API. Use vendor example words or clearly synthetic addresses only.
- For OmniPlan, use fake task IDs and short placeholder scripts in tests. Avoid
  examples that alter real project schedules, tasks, resources, or dependencies.
- For OmniGraffle, use tiny no-op or logging OmniJS examples in tests. Avoid
  examples that create, reorder, delete, or restyle real canvases, layers,
  graphics, or stencils.
- For TrueContext, use synthetic form names, question unique IDs, answers, and
  callback URLs. Keep the modern `truecontext`/`tcxt` schemes separate from
  legacy `prontoforms` compatibility aliases.
- For Panorama X, use placeholder database, procedure, label, and wizard names.
  Treat generated URLs as automation triggers and avoid examples that modify
  real databases or run user-local procedures.
- For Salesforce Mobile, use fake 15- or 18-character record IDs, synthetic
  org/network/user IDs, and placeholder Experience Cloud context. Keep
  Salesforce-specific `salesforce1:` helpers separate from generic HTTPS
  Salesforce record URLs.
- For Power Apps Mobile, use fake org URLs without `https://`, synthetic app
  IDs, tenant IDs, environment IDs, app logical names, table names, record IDs,
  view IDs, and optional sign-in UPNs. Preserve Microsoft parameter casing,
  including `Viewtype`, exactly.
- For Dynamics 365 Field Service Mobile, keep the Field Service-specific
  `ms-apps-fs:` handler separate from the broader Power Apps handlers. Use fake
  work order, booking, view, table, and form IDs in examples and tests.
- For ArcGIS Navigator, use fake item IDs, route IDs, stops, travel modes, and
  callback URLs. Preserve Esri's repeatable `stop` and `stopname` parameter
  behavior, and test coordinate strings without leaking real job locations.
- For ArcGIS Explorer, use placeholder web map/MMPK item IDs, portal URLs,
  coordinates, scale values, bookmarks, and search terms. Preserve the documented
  `center` coordinate order and the `itemID` dependency for viewpoint helpers.
- For Emacs Org Protocol, examples should use synthetic URLs, titles, bodies,
  and file paths. Treat `org-protocol://` links as local automation triggers and
  avoid examples that capture private browsing or source-file context.
- Add three registrations for each protocol package:
  `packages/protocol-launcher/src/<name>/index.ts`,
  the namespace export in `packages/protocol-launcher/src/index.ts`, and the
  subpath export in `packages/protocol-launcher/package.json`.
- For package-visible additions, create a changeset with `pnpm changeset`.

## Looked At But Not Accepted Yet

| App | Reason |
| --- | --- |
| Nuki | I found an older official-looking PDF URL scheme reference, but not a current, stable page on the main official site documenting the scheme. |
| Unread | Current official pages document share extensions and app features, but I did not find a current official URL-scheme reference page. |
| Mimestream | Official docs describe HTTPS universal links copied from the app, but not a constructible public scheme/helper surface suitable for URL generation. |
| Quantumult X | The official GitHub repository contains `url-scheme.md`, but I did not find a current vendor website page equivalent to the accepted official docs. Revisit if the repo is considered acceptable as the app's official documentation source. |
| Loon | Search surfaced URL scheme pages on Loon-related domains, but I did not find a clear current page on the primary official docs host that meets the same confidence bar. |
| Proton Mail | Official support docs do not expose a public app URL-scheme reference. |
| Thunderbird | Official developer docs did not surface a user-facing app URL-scheme reference. |
| Vimcal | Official pages describe app features, but no URL-scheme/deep-link reference surfaced. |
| Morgen | Official developer docs focus on the API, not app URL schemes. |
| Figma | Official pages rely on normal web links and desktop routing, but I did not find a public `figma://` URL-scheme reference suitable for typed helpers. |
| Postman | Official docs mention app flows, but I did not find a clean public URL generator surface comparable to the accepted candidates. |
| WireGuard | Official docs and App Store page document importing tunnels by file/QR, but I did not find a public fixed URL scheme reference for the official app. |
| DBeaver | Official docs cover database connections and app usage, but I did not find a documented custom URL/deep-link handler comparable to TablePlus/Postico/Sequel Ace. |
| VLC | Search surfaced community examples for `vlc://`/`vlc-x-callback://`, but I did not find a current official VLC URL-scheme reference page. |
| Plex | Official docs expose Plex Web and server URL commands, but not a clean public app URL scheme suitable for launcher helpers. |
| DuckDuckGo Browser | Official pages document the browser product, but not a public app URL-scheme reference. |
| Opera iOS | Official help pages document browser usage, but not a public iOS URL-scheme reference. |
| Zotero | Official support pages did not surface a clear maintained `zotero://` reference; most concrete references are forum/community/plugin discussions. |
| Strongbox | I did not find a current official Strongbox URL-scheme configuration page. |
| KeePassium | Official docs mention `kdbx://` for linked KeePass databases, but that is more a KeePass database convention than a KeePassium launcher surface. |
| Timery | Official pages emphasize Shortcuts and widgets, but I did not find a public URL-scheme configuration reference. |
| Streaks | Official support and App Store pages describe Shortcuts and URL action buttons, but not a public URL-scheme API. |
| Linky | App Store text says in-app URL scheme docs exist, but I did not find a public official configuration page with the action format. |
| Runestone | Official docs cover the editor framework and app features, but not app URL schemes. |
| Hazel | Official manual covers automation features, AppleScript, and Shortcuts, but no custom URL-scheme/deep-link reference surfaced. |
| GitKraken Desktop | Official docs describe repository/commit/branch/tag deep links copied from the UI, but the crawled page does not expose a stable, constructible URL grammar. Revisit if copied samples can be verified. |
| Spark Mail | Official docs document creator-only `readdle-spark://bl=...` copied email links, but not a constructible public compose/open URL surface. |
| Signal | Official support pages mention `signal.me`/`signal.link` domains, but I did not find a maintained public URL-action reference. |
| Logseq | Search found forum and community references to `logseq://`, but not a current official docs page with a stable protocol grammar. |
| Goodnotes | Official support pages document internal/external links in notes, but not an app URL-scheme API. |
| Notability | Official support pages document sharing and links, but no public URL-scheme/deep-link API surfaced. |
| GitHub Mobile | Official docs rely on ordinary GitHub universal links and iOS universal-link settings, not a separate constructible app scheme/helper surface. |
| Jira Mobile | Official Atlassian support docs describe opening Jira links in the mobile app via device settings, not a public URL scheme grammar. |
| Discord | Official developer docs mention mobile deep links, game invite deep links, and Application Directory store URLs, but these are Discord developer integration flows or HTTPS store links rather than a stable Discord app launcher scheme/helper surface. |
| Vipps MobilePay | Official developer docs mention payment deeplink URLs generated by payment APIs and merchant callback URL schemes, but they are tokenized payment-flow URLs rather than a general URL generator surface. |
| Secure ShellFish | Official help pages describe universal links for shared tmux sessions and SFTP locations, but I did not find a public parameter grammar suitable for reusable helper functions. |
| Letterboxd | I found official-project references outside the app website, but not a current public Letterboxd website page documenting a URL-scheme configuration format. |
| Aloha Browser | Search surfaced scheme references outside the accepted official documentation pattern, but I did not find a current public Aloha website URL-scheme configuration page. |
| Castro | Current official support pages did not surface a maintained URL-scheme or x-callback-url reference page. |
| Data Jar | Search did not surface a public official URL-scheme grammar page; available official material focuses on Shortcuts actions and app usage. |
| Jayson | App Store text mentions URL schemes, but I did not find a current public developer-site page documenting the exact action grammar. |
| Toolbox Pro | Official pages document Shortcuts actions, not a stable public URL scheme/helper grammar. |
| MFC Deck | Official docs and forum posts focus on decks, cards, custom actions, and APIs; I did not find a maintained URL-scheme reference page. |
| MixEffect | Official docs focus on Shortcuts, OSC, and app configuration; no custom URL-scheme grammar surfaced. |
| PopClip | Official docs cover extension APIs and opening external URLs from PopClip, but not a PopClip app URL scheme suitable for helpers. |
| ArcGIS Navigator | Esri docs mention Navigator as an app that can be opened from other ArcGIS apps, but I did not find a current dedicated Navigator URL-parameter page comparable to Field Maps, Survey123, QuickCapture, or Workforce. |
| Gaia GPS | Official help pages cover app and web-map usage, but I did not find a maintained public URL-scheme grammar page. |
| CalTopo | Official support/community posts discuss mobile links and URL behavior, but I did not find a stable public URL-scheme configuration doc suitable for typed helpers. |
| onX Hunt | Official help documents app/web usage and share links, but not a public URL scheme or parameter grammar for launcher helpers. |
| Bluebeam | Official Revu for iPad pages focus on app usage and product lifecycle, and I did not find a maintained URL-scheme/deep-link reference page for the current mobile app. |
| VMware Horizon Client | Search surfaced detailed `vmware-view://` manuals on third-party mirror sites, but I did not find the same current URI grammar on an official VMware/Broadcom/Omnissa docs page. |
| TeamViewer | Official community threads and API pages mention URL/URI behavior, but I did not find a maintained official URL-scheme grammar page for direct helper construction. |
| FileBrowser | Official Stratospherix docs mention configuration and x-callback launch controls, but I did not find a public URL action grammar for reusable launcher helpers. |
| Blink Shell | Official docs and App Store notes mention URL handler behavior, but I did not find a stable public URL-scheme configuration page with action grammar. |
| CotEditor | Official docs document the `cot` command-line tool, not a custom app URL scheme. |
| Sublime Text | Official docs document the `subl` command and internal `subl:` minihtml links, but not a public app URL scheme for launching files from outside the app. |
| Sygic | Search surfaced legacy `com.sygic.aura://` examples and universal-link support notes, but I did not find a current official app URL-scheme grammar page on Sygic's developer/help site. |
| TomTom GO Navigation | Official TomTom docs focus on SDKs and product help; I did not find a current public TomTom GO app URL-scheme/deep-link grammar page. |
| Organic Maps | Official website and repositories describe app usage and imports, but no current public URL-scheme grammar page surfaced. |
| MAPS.ME | Official pages document app features and app links, but not a URL-scheme configuration page suitable for typed helpers. |
| Pocket Earth | Official help describes shared PocketEarth links, but I did not find a public scheme grammar or parameter reference. |
| SongbookPro | Official docs cover importing songs and app usage, but no maintained URL-scheme/deep-link reference surfaced. |
| Planning Center Music Stand | Official help documents Music Stand usage and normal Planning Center web links, not a public app URL scheme/helper grammar. |
| Newzik | Official pages describe product features and web app workflows, but no URL-scheme configuration reference surfaced. |
