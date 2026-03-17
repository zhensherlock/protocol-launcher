---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addressbook, airport, books, calendar, dictionary, facetime, feedback, findMy, freeform, helpViewer, mail, music, notes, photos, podcasts, printer, reminders, sms, stocks, systemPreferences, videos, wallet, weather } from 'protocol-launcher/macos';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  addressBookParams,
  airportParams,
  booksParams,
  calendarParams,
  calendarWithLinkParams,
  dictionaryParams,
  dictionaryWithTermParams,
  facetimeParams,
  feedbackParams,
  feedbackWithNewParams,
  findMyParams,
  findMyDevicesParams,
  findMyItemsParams,
  findMyFriendsParams,
  freeformParams,
  helpViewerParams,
  helpViewerWithCollectionParams,
  mailParams,
  musicParams,
  notesParams,
  photosParams,
  podcastsParams,
  printerParams,
  printerWithHostParams,
  remindersParams,
  smsParams,
  smsWithPhoneParams,
  stocksParams,
  stocksWithSymbolParams,
  systemPreferencesParams,
  systemPreferencesWithSecurityPaneParams,
  systemPreferencesWithSoftwareUpdatePaneParams,
  videosParams,
  walletParams,
  weatherParams,
} from '../../.vitepress/constants/macos';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/macos' : 'protocol-launcher');
</script>

# macOS

[macOS](https://www.apple.com/macos/) 是由苹果公司开发的图形化操作系统，作为首个在商用领域成功的图形用户界面系统，专为 Macintosh 系列电脑设计，采用 XNU 混合内核架构并继承 UNIX 系统特性。**Protocol Launcher** 允许你生成深度链接，用于打开并与 macOS 内置应用程序（如日历、FaceTime、查找、邮件、短信和钱包）进行交互。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开日历

打开日历应用程序，可选择带 webcal 订阅链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calendar' : 'macos' }} } from '{{ importPath }}'

// 打开日历应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar()

// 打开带 webcal 订阅的日历
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar({
  link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="calendar(calendarParams)" target="_self">
    打开日历
  </VPLink>
  <VPLink :href="calendar(calendarWithLinkParams)" target="_self">
    打开带订阅的日历
  </VPLink>
</div>

### 打开 FaceTime

打开 FaceTime 应用程序，可选择带电话号码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}facetime({
  phone: '1234567890',
})
```

<div class="flex justify-center">
  <VPLink :href="facetime(facetimeParams)" target="_self">
    打开 FaceTime
  </VPLink>
</div>

### 打开查找

打开查找应用程序，可选择指定标签页（设备、物品或联系人）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findMy' : 'macos' }} } from '{{ importPath }}'

// 打开查找应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy()

// 打开设备标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'devices',
})

// 打开物品标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'items',
})

// 打开联系人标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'friends',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="findMy(findMyParams)" target="_self">
    打开查找
  </VPLink>
  <VPLink :href="findMy(findMyDevicesParams)" target="_self">
    打开设备标签页
  </VPLink>
  <VPLink :href="findMy(findMyItemsParams)" target="_self">
    打开物品标签页
  </VPLink>
  <VPLink :href="findMy(findMyFriendsParams)" target="_self">
    打开联系人标签页
  </VPLink>
</div>

### 打开邮件

打开邮件应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}mail()
```

<div class="flex justify-center">
  <VPLink :href="mail(mailParams)" target="_self">
    打开邮件
  </VPLink>
</div>

### 打开短信

打开短信应用程序，可选择带电话号码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms' : 'macos' }} } from '{{ importPath }}'

// 打开短信应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms()

// 打开带电话号码的短信
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms({
  phone: '1234567890',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="sms(smsParams)" target="_self">
    打开短信
  </VPLink>
  <VPLink :href="sms(smsWithPhoneParams)" target="_self">
    打开带电话号码的短信
  </VPLink>
</div>

### 打开钱包

打开钱包应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}wallet()
```

<div class="flex justify-center">
  <VPLink :href="wallet(walletParams)" target="_self">
    打开钱包
  </VPLink>
</div>

### 打开通讯录

打开通讯录应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addressbook' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}addressbook()
```

<div class="flex justify-center">
  <VPLink :href="addressbook(addressBookParams)" target="_self">
    打开通讯录
  </VPLink>
</div>

### 打开反馈

打开反馈助手应用程序，可选择提交新反馈。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'feedback' : 'macos' }} } from '{{ importPath }}'

// 打开反馈助手
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}feedback()

// 打开反馈助手提交新反馈
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}feedback({
  type: 'new',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="feedback(feedbackParams)" target="_self">
    打开反馈助手
  </VPLink>
  <VPLink :href="feedback(feedbackWithNewParams)" target="_self">
    提交新反馈
  </VPLink>
</div>

### 打开备忘录

打开备忘录应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notes' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}notes()
```

<div class="flex justify-center">
  <VPLink :href="notes(notesParams)" target="_self">
    打开备忘录
  </VPLink>
</div>

### 打开提醒事项

打开提醒事项应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reminders' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}reminders()
```

<div class="flex justify-center">
  <VPLink :href="reminders(remindersParams)" target="_self">
    打开提醒事项
  </VPLink>
</div>

### 打开股票

打开股票应用程序，可选择带股票代码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stocks' : 'macos' }} } from '{{ importPath }}'

// 打开股票应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}stocks()

// 打开带股票代码的股票
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}stocks({
  symbol: 'GE',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="stocks(stocksParams)" target="_self">
    打开股票
  </VPLink>
  <VPLink :href="stocks(stocksWithSymbolParams)" target="_self">
    打开带股票代码的股票
  </VPLink>
</div>

### 打开视频

打开视频应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}videos()
```

<div class="flex justify-center">
  <VPLink :href="videos(videosParams)" target="_self">
    打开视频
  </VPLink>
</div>

### 打开天气

打开天气应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'weather' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}weather()
```

<div class="flex justify-center">
  <VPLink :href="weather(weatherParams)" target="_self">
    打开天气
  </VPLink>
</div>

### 打开图书

打开图书应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'books' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}books()
```

<div class="flex justify-center">
  <VPLink :href="books(booksParams)" target="_self">
    打开图书
  </VPLink>
</div>

### 打开音乐

打开音乐应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'music' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}music()
```

<div class="flex justify-center">
  <VPLink :href="music(musicParams)" target="_self">
    打开音乐
  </VPLink>
</div>

### 打开照片

打开照片应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}photos()
```

<div class="flex justify-center">
  <VPLink :href="photos(photosParams)" target="_self">
    打开照片
  </VPLink>
</div>

### 打开播客

打开播客应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'podcasts' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}podcasts()
```

<div class="flex justify-center">
  <VPLink :href="podcasts(podcastsParams)" target="_self">
    打开播客
  </VPLink>
</div>

### 打开系统设置

打开系统设置应用程序，可选择指定偏好设置面板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemPreferences' : 'macos' }} } from '{{ importPath }}'

// 打开系统设置
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences()

// 打开安全性与隐私面板
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences({
  pane: 'com.apple.preference.security',
})

// 打开软件更新面板
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences({
  pane: 'com.apple.preferences.softwareupdate',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="systemPreferences(systemPreferencesParams)" target="_self">
    打开系统设置
  </VPLink>
  <VPLink :href="systemPreferences(systemPreferencesWithSecurityPaneParams)" target="_self">
    打开安全性与隐私
  </VPLink>
  <VPLink :href="systemPreferences(systemPreferencesWithSoftwareUpdatePaneParams)" target="_self">
    打开软件更新
  </VPLink>
</div>

### 打开 Airport 实用工具

打开 Airport 实用工具应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'airport' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}airport()
```

<div class="flex justify-center">
  <VPLink :href="airport(airportParams)" target="_self">
    打开 Airport 实用工具
  </VPLink>
</div>

### 打开词典

搜索词典查找术语。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictionary' : 'macos' }} } from '{{ importPath }}'

// 搜索词典
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}dictionary()

// 搜索带术语的词典
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}dictionary({
  term: 'hello',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="dictionary(dictionaryParams)" target="_self">
    搜索词典
  </VPLink>
  <VPLink :href="dictionary(dictionaryWithTermParams)" target="_self">
    搜索术语
  </VPLink>
</div>

### 打开无边记

打开无边记应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'freeform' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}freeform()
```

<div class="flex justify-center">
  <VPLink :href="freeform(freeformParams)" target="_self">
    打开无边记
  </VPLink>
</div>

### 打开帮助查看器

打开帮助查看器应用程序，可选择指定合集。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'helpViewer' : 'macos' }} } from '{{ importPath }}'

// 打开帮助查看器
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}helpViewer()

// 打开带合集的帮助查看器
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}helpViewer({
  collection: 'WelcomeToMac',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="helpViewer(helpViewerParams)" target="_self">
    打开帮助查看器
  </VPLink>
  <VPLink :href="helpViewer(helpViewerWithCollectionParams)" target="_self">
    打开特定合集
  </VPLink>
</div>

### 添加打印机

添加打印机，可选择带主机名或 IP 地址。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'printer' : 'macos' }} } from '{{ importPath }}'

// 添加打印机
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}printer()

// 添加带主机的打印机
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}printer({
  host: '192.168.1.100',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="printer(printerParams)" target="_self">
    添加打印机
  </VPLink>
  <VPLink :href="printer(printerWithHostParams)" target="_self">
    添加带主机的打印机
  </VPLink>
</div>
