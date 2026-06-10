---
url: /protocol-launcher/zh/apps/ringcentral.md
---

# RingCentral

[RingCentral](https://www.ringcentral.com/) 是一款用于通话、消息、会议和团队协作的通信应用。**Protocol Launcher** 可以生成 RingCentral URL scheme 链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

本模块遵循 RingCentral 官方 URI Scheme Reference。它只暴露文档中列出的 `rcmobile://` 移动端链接、`rcapp://r/signin`、`tel:` 与 `sms:` 系统 URI 形式、`https://app.ringcentral.com` 下的 RingCentral web app 链接、desktop `/r/...` 路径，以及 `https://v.ringcentral.com` 下的 RingCentral Video 加入链接。

`desktopSms()` 只会在官方文档列出的 `number + content` 形式中序列化 `content`，不会生成未文档化的 content-only URL。

### 移动端通话和短信

生成官方文档中的 RingCentral mobile call 和 SMS draft URI。这些链接可能会启动通信流程，因此本页只展示生成示例，不提供实时预览链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call, sms' : 'ringcentral' }} } from '{{ importPath }}'

const callUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}call({
  phoneNumber: '15551234567',
})

const smsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}sms({
  phoneNumber: '15551234567',
})
```

### 移动端页面

打开 `rcmobile://` 目录中记录的 RingCentral mobile 页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'conference, meeting, contacts, voicemail, history' : 'ringcentral' }} } from '{{ importPath }}'

const conferenceUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}conference()
const meetingUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}meeting()
const contactsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}contacts()
const voicemailUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}voicemail()
const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}history()
```

### 移动端 Team Messaging

使用文档化的 `rcmobile://glip/...` URI 打开 RingCentral mobile Team Messaging 资源。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeam, openChat, openPost, openFile, openTask, openEvent' : 'ringcentral' }} } from '{{ importPath }}'

const teamUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openTeam({
  teamId: 'team-123',
})

const directMessageUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openChat({
  userId: 'user-123',
})

const postUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openPost({
  postId: 'post-123',
})

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openFile({
  fileId: 'file-123',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openTask({
  taskId: 'task-123',
})

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openEvent({
  eventId: 'event-123',
})
```

### 登录

启动 RingCentral app 登录页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'signIn' : 'ringcentral' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}signIn()
```

### 系统 URI 形式

生成 RingCentral 参考文档中列出的 `tel:` 和 `sms:` URI 形式。它们会使用默认电话或短信应用，而不是 `rcmobile://` scheme。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tel, systemSms' : 'ringcentral' }} } from '{{ importPath }}'

const telUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}tel({
  phoneNumber: '15551234567',
})

const defaultSmsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}systemSms({
  phoneNumber: '15551234567',
})
```

### Web App 链接

生成文档化 production base URL 下的 RingCentral web app deep links。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebTeamChat, openWebInvitation, openWebGroup, openWebMessageThread, openWebChat, openWebTeamMessage, openWebTask, openWebFile, openWebEvent' : 'ringcentral' }} } from '{{ importPath }}'

const teamChatUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebTeamChat({
  groupId: 'group-123',
})

const invitationUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebInvitation({
  groupId: 'group-123',
  email: 'member@example.com',
})

const groupUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebGroup({
  groupId: 'group-123',
})

const messageThreadUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebMessageThread({
  messageId: 'message-123',
})

const chatUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebChat({
  chatId: 'chat-123',
})

const teamMessageUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebTeamMessage({
  teamId: 'team-123',
  messageId: 'message-123',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebTask({
  taskId: 'task-123',
})

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebFile({
  fileId: 'file-123',
})

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}openWebEvent({
  eventId: 'event-123',
})
```

### Desktop 路径

生成官方文档中的 `/r/...` RingCentral desktop 路径。RingCentral 将 production base URL `https://app.ringcentral.com/` 单独列在 Environment Base URLs 中，但这些 helper 返回 catalog 中展示的精确 path 形式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'desktopCall, desktopDialer, desktopSms, desktopFax' : 'ringcentral' }} } from '{{ importPath }}'

const desktopCallUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopCall({
  phoneNumber: '15551234567',
})

const dialerUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopDialer()

const prefilledDialerUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopDialer({
  phoneNumber: '15551234567',
})

const smsComposerUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopSms()

const prefilledSmsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopSms({
  phoneNumber: '15551234567',
  content: 'Hello from Protocol Launcher',
})

const faxComposerUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}desktopFax()
```

### RingCentral Video

打开 RingCentral Video 会议，可选预填会议密码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinVideo' : 'ringcentral' }} } from '{{ importPath }}'

const meetingUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}joinVideo({
  meetingId: '123456789',
})

const meetingWithPasswordUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}joinVideo({
  meetingId: '123456789',
  password: 'passcode',
})
```

## 官方文档

* [RingCentral URI Scheme Reference](https://developers.ringcentral.com/guide/basics/uri-schemes)
