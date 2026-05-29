---
url: /protocol-launcher/zh/apps/zoom.md
---

# Zoom

[Zoom](https://www.zoom.com/) 是一款视频会议和通信应用。**Protocol Launcher** 可以生成 Zoom URL scheme 链接，用于启动 Zoom，以及打开 Zoom Phone 通话或短信流程。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

Zoom 的 Meeting SDK iOS 文档明确用 `zoomus://` 启动 Zoom 应用。Zoom Phone 文档明确了 `callto:{phoneNumberToCall}`、`tel:{phoneNumberToCall}` 和 `zoomphonecall://{phoneNumbertoCall}` 用于拨出电话。Zoom 的 outbound SMS 文档明确了 `zoomphonesms://{recipient_nr}?callerid={from_nr}`。

`callerId` 选项会序列化为 Zoom 官方的 `callerid` 查询键。本模块不提供会议加入或开始 helper，因为这里引用的当前官方页面没有文档化 `zoommtg://` 会议 URL。

### 打开 Zoom

启动 Zoom 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}open()
```

### Zoom Phone 通话

启动 Zoom Phone 并拨出电话。Zoom 文档说明成功执行 `zoomphonecall://...` 后会自动拨号，所以本页只展示生成示例，不提供实时预览链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'phoneCall' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}phoneCall({
  phoneNumber: '+15551234567',
  callerId: '+15557654321',
})
```

### `callto` URI Scheme

使用 `callto` URI scheme 启动 Zoom Phone。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'callto' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}callto({
  phoneNumber: '+123456789',
})
```

### `tel` URI Scheme

使用 `tel` URI scheme 启动 Zoom Phone。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tel' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}tel({
  phoneNumber: '+123456789',
})
```

### Zoom Phone 短信

使用官方 `zoomphonesms://{recipient_nr}?callerid={from_nr}` scheme 启动 Zoom Phone 短信。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'phoneSms' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}phoneSms({
  phoneNumber: '+123456789',
  callerId: '+16692520210',
})
```

## 官方文档

* [Launch Zoom from your app](https://developers.zoom.us/docs/meeting-sdk/ios/resource/launch-zoom-client-from-your-app/)
* [Initiate an outbound call](https://developers.zoom.us/docs/phone/outbound-call/)
* [Initiate an outbound SMS](https://developers.zoom.us/docs/phone/outbound-sms/)
