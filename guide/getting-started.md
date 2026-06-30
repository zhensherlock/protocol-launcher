---
url: /protocol-launcher/guide/getting-started.md
---

# Getting Started

## Installation

Install `protocol-launcher` using your preferred package manager:

::: code-group

```sh [npm]
$ npm install protocol-launcher
```

```sh [pnpm]
$ pnpm add protocol-launcher
```

```sh [yarn]
$ yarn add protocol-launcher
```

```bash [bun]
$ bun add protocol-launcher
```

:::

## Usage

### Tree Shaking (Recommended)

To minimize bundle size, import specific modules directly:

::: code-group

```typescript [cherry studio]
// Only imports Cherry Studio related code
import { installMCP } from 'protocol-launcher/cherry-studio'
```

```typescript [codebuddy]
// Only imports CodeBuddy related code
import { openFile } from 'protocol-launcher/code-buddy'
```

```typescript [cursor]
// Only imports Cursor related code
import { installMCP } from 'protocol-launcher/cursor'
```

```typescript [github desktop]
// Only imports GitHub Desktop related code
import { openRepo } from 'protocol-launcher/github-desktop'
```

```typescript [goland]
// Only imports GoLand related code
import { openFile } from 'protocol-launcher/goland'
```

```typescript [idea]
// Only imports IntelliJ IDEA related code
import { openFile } from 'protocol-launcher/idea'
```

```typescript [phpstorm]
// Only imports PhpStorm related code
import { openFile } from 'protocol-launcher/phpstorm'
```

```typescript [pycharm]
// Only imports PyCharm related code
import { openFile } from 'protocol-launcher/pycharm'
```

```typescript [rustrover]
// Only imports RustRover related code
import { openFile } from 'protocol-launcher/rustrover'
```

```typescript [telegram]
// Only imports Telegram related code
import { open } from 'protocol-launcher/telegram'
```

```typescript [thunder]
// Only imports Thunder related code
import { downloadUrl } from 'protocol-launcher/thunder'
```

```typescript [vscode]
// Only imports VS Code related code
import { openFile } from 'protocol-launcher/vscode'
```

```typescript [webstorm]
// Only imports WebStorm related code
import { openFile } from 'protocol-launcher/webstorm'
```

```typescript [xcode]
// Only imports Xcode related code
import { cloneProject } from 'protocol-launcher/xcode'
```

:::

### Full Import

You can also import everything from the root package, but this will include all application modules and does not support tree-shaking:

```typescript
import { cherryStudio, cursor, githubDesktop } from 'protocol-launcher'
```

For detailed usage instructions for each application, please refer to their respective guides:

* [AFFiNE](../apps/affine.md)
* [Agenda](../apps/agenda.md)
* [Airmail](../apps/airmail.md)
* [Alfred](../apps/alfred.md)
* [Antigravity](../apps/antigravity.md)
* [Anybox](../apps/anybox.md)
* [AnyDesk](../apps/anydesk.md)
* [App Store](../apps/app-store.md)
* [AppFlowy](../apps/appflowy.md)
* [Appigo Todo](../apps/appigo-todo.md)
* [Apple Maps](../apps/apple-map.md)
* [Apple Script Editor](../apps/apple-script.md)
* [ArcGIS QuickCapture](../apps/arcgis-quickcapture.md)
* [ArcGIS Survey123](../apps/arcgis-survey123.md)
* [Atom](../apps/atom.md)
* [1Writer](../apps/1writer.md)
* [BarCuts](../apps/barcuts.md)
* [BBEdit](../apps/bbedit.md)
* [Bear](../apps/bear.md)
* [Beorg](../apps/beorg.md)
* [BetterTouchTool](../apps/bettertouchtool.md)
* [Bike Outliner](../apps/bike-outliner.md)
* [Box](../apps/box.md)
* [Buchen](../apps/buchen.md)
* [Bunch](../apps/bunch.md)
* [BusyCal](../apps/busycal.md)
* [BusyContacts](../apps/busycontacts.md)
* [Cal2Todo](../apps/cal2todo.md)
* [Calca](../apps/calca.md)
* [Calendar 366](../apps/calendar-366.md)
* [Calendars by Readdle](../apps/calendars-readdle.md)
* [Capacities](../apps/capacities.md)
* [Cardhop](../apps/cardhop.md)
* [Charty](../apps/charty.md)
* [Cherry Studio](../apps/cherry-studio.md)
* [Choosy](../apps/choosy.md)
* [Chute](../apps/chute.md)
* [Citymapper](../apps/citymapper.md)
* [CleanShot X](../apps/cleanshot-x.md)
* [Cloze](../apps/cloze.md)
* [Coda](../apps/coda.md)
* [CodeBuddy](../apps/code-buddy.md)
* [CodeBuddy China](../apps/code-buddy-cn.md)
* [CodeLite](../apps/codelite.md)
* [CodeRunner](../apps/code-runner.md)
* [CodeHub](../apps/codehub.md)
* [Codex](../apps/codex.md)
* [Craft](../apps/craft.md)
* [Cubox](../apps/cubox.md)
* [Cursor](../apps/cursor.md)
* [Dash](../apps/dash.md)
* [2Do](../apps/2do.md)
* [Day One](../apps/day-one.md)
* [Downcast](../apps/downcast.md)
* [Debit & Credit](../apps/debit-credit.md)
* [DEVONthink](../apps/devonthink.md)
* [Diarly](../apps/diarly.md)
* [dict.cc](../apps/dict-cc.md)
* [Drafts](../apps/drafts.md)
* [Editorial](../apps/editorial.md)
* [Equipd Bible](../apps/equipd-bible.md)
* [Due](../apps/due.md)
* [Dynamics 365 Field Service Mobile](../apps/dynamics-365-field-service-mobile.md)
* [Evernote](../apps/evernote.md)
* [Fantastical](../apps/fantastical.md)
* [Claris FileMaker](../apps/filemaker.md)
* [Find Any File](../apps/find-any-file.md)
* [Focus](../apps/focus.md)
* [ForeFlight Mobile](../apps/foreflight-mobile.md)
* [forScore](../apps/forscore.md)
* [FSNotes](../apps/fsnotes.md)
* [Streets](../apps/ftstreets.md)
* [Fulcrum](../apps/fulcrum.md)
* [Gett](../apps/gett.md)
* [GitHub Desktop](../apps/github-desktop.md)
* [Gladys](../apps/gladys.md)
* [GoodLinks](../apps/goodlinks.md)
* [GoodReader](../apps/goodreader.md)
* [GoodTask](../apps/goodtask.md)
* [GoLand](../apps/goland.md)
* [Google Chrome iOS](../apps/google-chrome-ios.md)
* [Google Maps](../apps/google-maps.md)
* [Guru Maps](../apps/guru-maps.md)
* [GV Connect](../apps/gv-connect.md)
* [HapiGo](../apps/hapigo.md)
* [HBuilderX](../apps/hbuilderx.md)
* [Hammerspoon](../apps/hammerspoon.md)
* [Hiddify](../apps/hiddify.md)
* [Highlights](../apps/highlights.md)
* [Home Assistant](../apps/home-assistant.md)
* [Hookmark](../apps/hookmark.md)
* [Hot Tub](../apps/hot-tub.md)
* [HoudahSpot](../apps/houdahspot.md)
* [iA Writer](../apps/ia-writer.md)
* [iCab Mobile](../apps/icab-mobile.md)
* [IntelliJ IDEA](../apps/idea.md)
* [Infuse](../apps/infuse.md)
* [Instapaper](../apps/instapaper.md)
* [Interact Scratchpad](../apps/interact.md)
* [iPGMail](../apps/ipgmail.md)
* [iReal Pro](../apps/ireal-pro.md)
* [iThoughts](../apps/ithoughts.md)
* [Itsycal](../apps/itsycal.md)
* [Ivanti Web@Work](../apps/ivanti-web-work.md)
* [Ivory](../apps/ivory.md)
* [Joplin](../apps/joplin.md)
* [Jump Desktop](../apps/jump-desktop.md)
* [Just Timers](../apps/just-timers.md)
* [Kakao Map](../apps/kakao-map.md)
* [Keyboard Maestro](../apps/keyboard-maestro.md)
* [Kaleidoscope](../apps/kaleidoscope.md)
* [Keep It](../apps/keepit.md)
* [Kiro](../apps/kiro.md)
* [Launch Center Pro](../apps/launch-center-pro.md)
* [LaunchBar](../apps/launchbar.md)
* [Letterboxd](../apps/letterboxd.md)
* [LINE](../apps/line.md)
* [Lingma](../apps/lingma.md)
* [Locus Map](../apps/locus-map.md)
* [Longshot](../apps/longshot.md)
* [macOS](../apps/macos.md)
* [MacVim](../apps/macvim.md)
* [Mail Assistant](../apps/mail-assistant.md)
* [Marked](../apps/marked.md)
* [Mattermost](../apps/mattermost.md)
* [miCal](../apps/mical.md)
* [Microsoft Edge](../apps/microsoft-edge.md)
* [Microsoft Office](../apps/microsoft-office.md)
* [Microsoft OneNote](../apps/microsoft-onenote.md)
* [Microsoft Remote Desktop](../apps/microsoft-remote-desktop.md)
* [Microsoft Teams](../apps/microsoft-teams.md)
* [MindNode](../apps/mindnode.md)
* [Momento](../apps/momento.md)
* [MoneyWiz](../apps/moneywiz.md)
* [Moovit](../apps/moovit.md)
* [Motrix](../apps/motrix.md)
* [MultiTimer](../apps/multi-timer.md)
* [NAVER Map](../apps/naver-map.md)
* [Navicat](../apps/navicat.md)
* [NotePlan](../apps/noteplan.md)
* [Notebooks](../apps/notebooks.md)
* [Nozbe](../apps/nozbe.md)
* [Nova](../apps/nova.md)
* [Obsidian](../apps/obsidian.md)
* [OK JSON](../apps/ok-json.md)
* [OmniFocus](../apps/omnifocus.md)
* [OmniOutliner](../apps/omnioutliner.md)
* [OnSong](../apps/onsong.md)
* [OpenCode](../apps/opencode.md)
* [Opener](../apps/opener.md)
* [OpenVPN Connect](../apps/openvpn-connect.md)
* [Orchids](../apps/orchids.md)
* [Orion Browser](../apps/orion-browser.md)
* [Overcast](../apps/overcast.md)
* [Panorama X](../apps/panorama-x.md)
* [PCalc](../apps/pcalc.md)
* [PearAI](../apps/pearai.md)
* [PDF Expert](../apps/pdf-expert.md)
* [PDF Viewer](../apps/pdf-viewer.md)
* [Permute](../apps/permute.md)
* [Pika](../apps/pika.md)
* [Picsew](../apps/picsew.md)
* [Pincase](../apps/pincase.md)
* [Pleco](../apps/pleco.md)
* [Pocket Casts](../apps/pocket-casts.md)
* [Power Apps Mobile](../apps/power-apps-mobile.md)
* [Power BI Mobile](../apps/power-bi-mobile.md)
* [Postman](../apps/postman.md)
* [Prizmo](../apps/prizmo.md)
* [Pushcut](../apps/pushcut.md)
* [PhpStorm](../apps/phpstorm.md)
* [PyCharm](../apps/pycharm.md)
* [Pythonista](../apps/pythonista.md)
* [Pyto](../apps/pyto.md)
* [Qoder](../apps/qoder.md)
* [Quark](../apps/quark.md)
* [Raycast](../apps/raycast.md)
* [Remote Desktop Manager](../apps/remote-desktop-manager.md)
* [Reeder](../apps/reeder.md)
* [RingCentral](../apps/ringcentral.md)
* [Royal TS](../apps/royal-ts.md)
* [RustRover](../apps/rustrover.md)
* [Salesforce Mobile](../apps/salesforce-mobile.md)
* [Scannr](../apps/scannr.md)
* [Screens](../apps/screens.md)
* [Scriptable](../apps/scriptable.md)
* [Shopi](../apps/shopi.md)
* [Shortcuts](../apps/shortcuts.md)
* [Simple Scan](../apps/simple-scan.md)
* [Sketch](../apps/sketch.md)
* [Skype](../apps/skype.md)
* [Slack](../apps/slack.md)
* [Soulver](../apps/soulver.md)
* [Sorted³](../apps/sorted.md)
* [SourceTree](../apps/sourcetree.md)
* [Spark Mail](../apps/spark.md)
* [Splashtop Business](../apps/splashtop-business.md)
* [Spotify](../apps/spotify.md)
* [Steam](../apps/steam.md)
* [Stream Deck](../apps/stream-deck.md)
* [Story Planner](../apps/story-planner.md)
* [Surge](../apps/surge.md)
* [TablePro](../apps/tablepro.md)
* [Tadam](../apps/tadam.md)
* [Tally](../apps/tally.md)
* [Telegram](../apps/telegram.md)
* [Tembo](../apps/tembo.md)
* [Terminology](../apps/terminology.md)
* [Termius](../apps/termius.md)
* [Textastic](../apps/textastic.md)
* [Textwell](../apps/textwell.md)
* [TextMate](../apps/textmate.md)
* [Theia](../apps/theia.md)
* [Things](../apps/things.md)
* [Thunder](../apps/thunder.md)
* [Tim](../apps/tim.md)
* [Timing](../apps/timing.md)
* [Timer+](../apps/timer-plus.md)
* [Timepage](../apps/timepage.md)
* [Today Habit Tracker](../apps/today-habit-tracker.md)
* [Todoist](../apps/todoist.md)
* [Tower](../apps/tower.md)
* [Trae](../apps/trae.md)
* [Trae China](../apps/trae-cn.md)
* [Trello](../apps/trello.md)
* [TrueContext](../apps/truecontext.md)
* [Ulysses](../apps/ulysses.md)
* [uPic](../apps/upic.md)
* [UpNote](../apps/upnote.md)
* [Verdent](../apps/verdent.md)
* [Viber](../apps/viber.md)
* [VS Code](../apps/vscode.md)
* [VS Code Insiders](../apps/vscode-insiders.md)
* [VSCodium](../apps/vscodium.md)
* [Warp](../apps/warp.md)
* [WaterMinder](../apps/waterminder.md)
* [Waze](../apps/waze.md)
* [Webex](../apps/webex.md)
* [WebStorm](../apps/webstorm.md)
* [WeMeet](../apps/wemeet.md)
* [what3words](../apps/what3words.md)
* [Where To](../apps/whereto.md)
* [Windsurf](../apps/windsurf.md)
* [Working Copy](../apps/working-copy.md)
* [Written Down](../apps/written-down.md)
* [Xcode](../apps/xcode.md)
* [Yandex Maps](../apps/yandex-maps.md)
* [Yandex Navigator](../apps/yandex-navigator.md)
* [Yoink for iOS](../apps/yoink-ios.md)
* [Zed](../apps/zed.md)
* [Zoom](../apps/zoom.md)
