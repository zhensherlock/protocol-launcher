---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  brightness,
  clipboard,
  define,
  dropbox,
  dropboxAddPhoto,
  dropboxAppend,
  dropboxClipboard,
  dropboxCopyDirectLink,
  dropboxNew,
  dropboxPrepend,
  email,
  messaging,
  open,
  qr,
  schedule,
  shareSheet,
  speak,
} from 'protocol-launcher/launch-center-pro';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  clipboardPhotoParams,
  clipboardTextParams,
  dropboxAddPhotoParams,
  dropboxAppendParams,
  dropboxClipboardParams,
  dropboxNewParams,
  dropboxPrependParams,
  emailParams,
  messagingDropboxParams,
  messagingGifParams,
  messagingParams,
  scheduleActionParams,
  scheduleUrlParams,
  shareSheetParams,
  speakParams,
} from '../../.vitepress/constants/launch-center-pro';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/launch-center-pro' : 'protocol-launcher');
</script>

# Launch Center Pro

[Launch Center Pro](https://contrast.co/launch-center-pro/) 是一款用于运行动作和快捷操作的 iOS 启动器。**Protocol Launcher** 允许您为 Contrast 官方文档中记录的 Launch Center Pro 动作生成深度链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

这些 helper 按照 Contrast 官方的 [x-callback-url Support](https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support)、[Dropbox Actions](https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions)、[Scheduling Action Notifications](https://help.contrast.co/hc/en-us/articles/360024275852-Scheduling-Action-Notifications) 和发布说明示例实现。未在官方文档中给出语法或已经停止支持的 Launch Center Pro 动作不会包装。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Launch Center Pro
  </VPLink>
</div>

### 亮度

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'brightness' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness()

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness({
  xSuccess: 'tweetbot://',
})
```

<div class="flex justify-center">
  <VPLink :href="brightness()" target="_self">
    打开亮度动作
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="clipboard(clipboardTextParams)" target="_self">
    用 Launch Center Pro 复制文本
  </VPLink>
  <VPLink :href="clipboard(clipboardPhotoParams)" target="_self">
    用 Launch Center Pro 复制最近照片
  </VPLink>
</div>

### 定义

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'define' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}define()
```

<div class="flex justify-center">
  <VPLink :href="define()" target="_self">
    打开定义动作
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="speak(speakParams)" target="_self">
    用 Launch Center Pro 朗读文本
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="email(emailParams)" target="_self">
    启动邮件动作
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="messaging(messagingParams)" target="_self">
    用最近照片启动短信动作
  </VPLink>
  <VPLink :href="messaging(messagingDropboxParams)" target="_self">
    用 Dropbox 照片启动短信动作
  </VPLink>
  <VPLink :href="messaging(messagingGifParams)" target="_self">
    用 Giphy 照片启动短信动作
  </VPLink>
</div>

### Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropbox' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropbox()
```

<div class="flex justify-center">
  <VPLink :href="dropbox()" target="_self">
    打开 Dropbox 动作
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="dropboxAddPhoto(dropboxAddPhotoParams)" target="_self">
    添加照片到 Dropbox
  </VPLink>
</div>

### Dropbox 复制直接链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxCopyDirectLink' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxCopyDirectLink()
```

<div class="flex justify-center">
  <VPLink :href="dropboxCopyDirectLink()" target="_self">
    复制 Dropbox 直接链接
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="schedule(scheduleActionParams)" target="_self">
    计划动作通知
  </VPLink>
  <VPLink :href="schedule(scheduleUrlParams)" target="_self">
    计划 URL 通知
  </VPLink>
</div>

### 分享表单

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareSheet' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}shareSheet({
  attach: 'photo:last',
  text: '[prompt-fleksy:Notes]',
  url: '[clipboard]',
})
```

<div class="flex justify-center">
  <VPLink :href="shareSheet(shareSheetParams)" target="_self">
    打开分享表单
  </VPLink>
</div>

### QR 动作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'qr' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}qr()
```

<div class="flex justify-center">
  <VPLink :href="qr()" target="_self">
    打开 QR 动作
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="dropboxNew(dropboxNewParams)" target="_self">
    新建 Dropbox 文本文件
  </VPLink>
</div>

### Dropbox 追加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAppend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAppend({
  text: 'Next line',
  name: 'MyFile.markdown',
  linebreak: 'NO',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxAppend(dropboxAppendParams)" target="_self">
    追加 Dropbox 文本
  </VPLink>
</div>

### Dropbox 前置文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxPrepend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxPrepend({
  text: 'First line\nBody',
  name: 'note_[firstline].text',
  leavefirstline: 'NO',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxPrepend(dropboxPrependParams)" target="_self">
    前置 Dropbox 文本
  </VPLink>
</div>

### Dropbox 剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxClipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const browserUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard()

const linkUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard({
  path: '/photos/',
  linkonly: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxClipboard(dropboxClipboardParams)" target="_self">
    复制 Dropbox 链接
  </VPLink>
</div>
