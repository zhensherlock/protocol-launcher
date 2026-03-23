---
url: /protocol-launcher/zh/apps/macos.md
---

# macOS

[macOS](https://www.apple.com/macos/) 是由苹果公司开发的图形化操作系统，作为首个在商用领域成功的图形用户界面系统，专为 Macintosh 系列电脑设计，采用 XNU 混合内核架构并继承 UNIX 系统特性。**Protocol Launcher** 允许你生成深度链接，用于打开并与 macOS 内置应用程序（如日历、FaceTime、查找、邮件、短信和钱包）进行交互。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

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

### 打开 FaceTime

打开 FaceTime 应用程序，可选择带电话号码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}facetime({
  phone: '1234567890',
})
```

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

### 打开邮件

打开邮件应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}mail()
```

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

### 打开钱包

打开钱包应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}wallet()
```

### 打开通讯录

打开通讯录应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addressbook' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}addressbook()
```

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

### 打开备忘录

打开备忘录应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notes' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}notes()
```

### 打开提醒事项

打开提醒事项应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reminders' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}reminders()
```

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

### 打开视频

打开视频应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}videos()
```

### 打开天气

打开天气应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'weather' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}weather()
```

### 打开图书

打开图书应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'books' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}books()
```

### 打开音乐

打开音乐应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'music' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}music()
```

### 打开照片

打开照片应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}photos()
```

### 打开播客

打开播客应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'podcasts' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}podcasts()
```

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

### 打开 Airport 实用工具

打开 Airport 实用工具应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'airport' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}airport()
```

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

### 打开无边记

打开无边记应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'freeform' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}freeform()
```

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

### 打开 Apple 密码 (OTP Auth)

打开 Apple 密码 (OTP Auth) 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appleOtpauth' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}appleOtpauth()
```

### 打开字体册

打开字体册应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fontbook' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}fontbook()
```

### 打开 Keynote

打开 Keynote 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'keynote' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}keynote()
```

### 打开 Numbers

打开 Numbers 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'numbers' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}numbers()
```

### 打开 Pages

打开 Pages 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pages' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}pages()
```
