---
url: /protocol-launcher/zh/apps/launch-center-pro.md
---

# Launch Center Pro

[Launch Center Pro](https://contrast.co/launch-center-pro/) 是一款用于运行动作和快捷操作的 iOS 启动器。**Protocol Launcher** 允许您为 Contrast 官方文档中记录的 Launch Center Pro 动作生成深度链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## URL 方法

这些 helper 按照 Contrast 官方的 [x-callback-url Support](https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support)、[Dropbox Actions](https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions)、[Scheduling Action Notifications](https://help.contrast.co/hc/en-us/articles/360024275852-Scheduling-Action-Notifications) 和发布说明示例实现。未在官方文档中给出语法或已经停止支持的 Launch Center Pro 动作不会包装。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}open()
```

### 亮度

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'brightness' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness()

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness({
  xSuccess: 'tweetbot://',
})
```

### 剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}clipboard({
  text: 'mytext',
})

const photoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}clipboard({
  attach: 'photo:last',
})
```

### 定义

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'define' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}define()
```

### 朗读

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'speak' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}speak({
  text: 'Hello master!',
})

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}speak({
  text: 'Hello master!',
  xSuccess: '[action:15]',
})
```

### 邮件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'email' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}email({
  to: 'sample@contrast.co',
  subject: 'Last Photo',
  body: '',
  cc: '',
  bcc: '',
  attach: 'photo:last',
})
```

### 短信

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'messaging' : 'launchCenterPro' }} } from '{{ importPath }}'

const photoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  to: '555-555-5555',
  attach: 'photo:last',
})

const dropboxPhotoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  to: '555-555-5555',
  body: '[prompt:Body]',
  attach: 'photo:dropbox',
  path: 'reactions',
})

const gifUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  attach: 'photo:gif',
  'gif-search': 'excited',
})
```

### Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropbox' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropbox()
```

### Dropbox 添加照片

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAddPhoto' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAddPhoto({
  attach: 'photo:frontcamera',
  path: '/selfies/',
})

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAddPhoto({
  attach: 'photo:last',
  path: '/snaps/',
  getlink: 'yes',
  xSuccess: 'launch://tweet?text=[clipboard]',
})
```

### Dropbox 复制直接链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxCopyDirectLink' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxCopyDirectLink()
```

### 计划动作通知

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'schedule' : 'launchCenterPro' }} } from '{{ importPath }}'

const actionUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}schedule({
  action: 179,
  in: '1h',
  repeat: 'specificdays',
  days: 'm,tu,w,th,f',
})

const urlNotification = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}schedule({
  url: '[url:https://apple.com]',
  in: '10min',
})
```

### 分享表单

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareSheet' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}shareSheet({
  attach: 'photo:last',
  text: '[prompt-fleksy:Notes]',
  url: '[clipboard]',
})
```

### QR 动作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'qr' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}qr()
```

### Dropbox 新建文本文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxNew' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxNew({
  text: '[prompt-return:My Note]',
  path: '/Notes/',
  name: 'MyFile.markdown',
  overwrite: 'NO',
})
```

### Dropbox 追加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAppend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAppend({
  text: 'Next line',
  name: 'MyFile.markdown',
  linebreak: 'NO',
})
```

### Dropbox 前置文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxPrepend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxPrepend({
  text: 'First line\nBody',
  name: 'note_[firstline].text',
  leavefirstline: 'NO',
})
```

### Dropbox 剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxClipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const browserUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard()

const linkUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard({
  path: '/photos/',
  linkonly: 'yes',
})
```
