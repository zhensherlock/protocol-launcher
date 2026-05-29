---
url: /protocol-launcher/zh/apps/webex.md
---

# Webex

[Webex](https://www.webex.com/) 是一款用于消息、会议和通话的协作应用。**Protocol Launcher** 可以生成 Webex URL scheme 链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

Webex 文档明确了 `webexteams://im?email=...` 用于创建或打开单人空间，`webexteams://im?space=...` 用于打开已有空间。Webex 开发者博客明确了 `webexteams://meet?sip=...` 和 `webextel:` click-to-call 示例。Webex 的 cross-launch 文档明确了 `webextel://login?...`、`webexauth://login?...`、`webexauth://logout` 和 `https://cisco.webex.com/logout?...`，以及下面展示的参数。

Webex 也列出了 `CLICKTOCALL:`、`SIP:`、`TEL:`（iOS 不支持）和 `WEBEXTEL:` 这些协议处理器；当 Webex App 是默认呼叫应用时，它们可以发起通话。本模块只为 Webex 官方文档给出完整 URL 格式、参数或示例的内容添加 helper。

### 打开聊天

通过邮箱地址创建或打开一个 Webex 单人聊天/空间。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChat' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}openChat({
  email: 'barbara@example.com',
})
```

### 打开空间

通过空间 ID 打开已有的 Webex 空间。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}openSpace({
  space: '0000aa-a0a0',
})
```

### 通过 SIP 发起会议/通话

使用 `webexteams://meet?sip=...` 对 SIP 地址发起 Webex App 会议/通话。这个链接可能会启动通话，所以文档只展示生成示例，不提供实时预览链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'meet' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}meet({
  sip: 'user@example.com',
})
```

### Webex Click-to-Call

使用 `webextel:` 协议处理器通过 Webex App 发起基于 URI 的通话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}call({
  destination: '+1234567890',
})
```

### Cross-Launch 通话

使用官方文档中的 `webextel://login` URL 跨应用启动 Webex App 并拨出电话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crossLaunchCall' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}crossLaunchCall({
  telephone: '123456789',
  xSource: 'App B',
  xSuccess: 'appb://success_flow',
  xCancel: 'appb://cancel_flow',
})
```

### Cross-Launch 登录

使用官方文档中的 `webexauth://login` URL 通过邮箱地址跨应用启动 Webex App 并登录。Webex 文档说明 `telephone`、`x-source`、`x-success` 和 `x-cancel` 是仅 iOS 支持的参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crossLaunchSignIn' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}crossLaunchSignIn({
  email: 'user1@example.com',
  telephone: '123456789',
  xSource: 'App B',
  xSuccess: 'appb://success_flow',
  xCancel: 'appb://cancel_flow',
})
```

### 退出登录

使用官方文档中的 `webexauth://logout` URL 退出 Webex App。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logout' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}logout()
```

### Universal Link 退出登录

在受管理的 iOS/iPadOS 设备上，使用官方文档中的 Universal Link Callback URL 退出 Webex App。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'universalLinkLogout' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}universalLinkLogout({
  ulcSuccess: 'https://sampledomain.com/success',
  ulcError: 'https://sampledomain.com/error',
})
```

## 官方文档

* [Webex App: Add links for meetings or spaces with webexteams protocol](https://help.webex.com/en-us/article/n5yzg8y/Webex-Add-Links)
* [Build a Click-to-Call Shortcut Using Adaptive Cards in Webex](https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex)
* [Webex App: Cross launch URL for sign-in and calling](https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling)
