---
url: /protocol-launcher/zh/apps/microsoft-teams.md
---

# Microsoft Teams

[Microsoft Teams](https://www.microsoft.com/microsoft-teams/) 是 Microsoft 推出的团队协作应用，用于团队聊天、会议、通话和频道协作。**Protocol Launcher** 允许您生成 Microsoft Teams 深度链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Microsoft 默认推荐使用 `https://teams.microsoft.com/l/...` 深度链接。`msteams` 协议处理器会直接打开 Teams 桌面端，但 Microsoft 明确提醒不要把 `msteams:` 拼到 `https://` Teams URL 前面。本模块只在 Microsoft 官方文档明确给出 `msteams:/l/meeting-share` 的会议舞台分享场景中暴露 native 形式。

### 打开应用安装对话框

通过应用 ID 打开 Teams 应用安装对话框。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAppInstallDialog' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openAppInstallDialog({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
})
```

### 打开应用选项卡

打开 Teams 应用选项卡中的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAppTab' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openAppTab({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  entityId: 'tasklist123',
  webUrl: 'https://tasklist.example.com/123/456',
  label: 'Task 456',
  context: {
    subEntityId: 'task456',
    channelId: '19:cbe3683f25094106b826c9cada3afbe0@thread.skype',
  },
  openInMeeting: false,
})
```

### 打开应用聊天

打开与 Teams 应用的个人聊天。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAppChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openAppChat({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: 'abcdef12-3456-7890-abcd-ef1234567890',
})
```

### 打开对话框

使用 `TaskInfo.url` 打开 Teams 对话框。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDialog' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openDialog({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  url: 'https://example.com/task',
  height: 600,
  width: 800,
  title: 'Example Task',
  completionBotId: 'abcdef12-3456-7890-abcd-ef1234567890',
})
```

### 打开新聊天

打开或创建与用户的私聊，并可预填草稿消息。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNewChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openNewChat({
  users: ['joe@contoso.com', 'bob@contoso.com'],
  topicName: 'Prep For Meeting Tomorrow',
  message: 'Hi folks, kicking off a chat about our meeting tomorrow',
})
```

### 打开聊天

跳转到指定 Teams 聊天会话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChat({
  chatId: '19:c6d70e392a384916c3262b15406d763e@thread.v2',
})
```

### 打开频道会话

跳转到频道会话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannelConversation' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChannelConversation({
  channelId: '19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2',
  messageId: '1648741500652',
  tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
  groupId: '3606f714-ec2e-41b3-9ad1-6afb331bd35d',
  parentMessageId: '1648741500652',
  teamName: 'Example Team',
  channelName: 'General',
  createdTime: '1648741500652',
})
```

### 打开聊天消息

跳转到个人聊天或群聊中的消息。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChatMessage' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChatMessage({
  chatId: '19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces',
  messageId: '1563480968434',
})
```

### 打开团队

跳转到团队。该 helper 会编码路径中的频道 ID。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeam' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openTeam({
  channelId: '19:TWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41@thread.tacv2',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
})
```

### 打开频道

跳转到 Teams 标准频道、专用频道或共享频道。按照 Microsoft 文档，专用频道设置 `ngc: true`，共享频道同时设置 `ngc: true` 和 `allowXTenantAccess: true`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannel' : 'microsoftTeams' }} } from '{{ importPath }}'

const standardUrl = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChannel({
  channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
  channelName: 'My example channel',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
})

const sharedUrl = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChannel({
  channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
  channelName: 'My example channel',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  ngc: true,
  allowXTenantAccess: true,
})
```

### 打开文件

跳转到 Teams 频道中的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openFile({
  fileId: '5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80',
  tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
  fileType: 'pptx',
  objectUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform/Shared Documents/deck.pptx',
  baseUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform',
  serviceName: 'teams',
  threadId: '19:f8fbfc4d89e24ef5b3b8692538cebeb7@thread.skype',
  groupId: 'ae063b79-5315-4ddb-ba70-27328ba6c31e',
})
```

### 打开会议日程对话框

打开 Teams 会议日程安排对话框。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMeetingSchedulingDialog' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openMeetingSchedulingDialog({
  subject: 'test subject',
  attendees: ['joe@contoso.com', 'bob@contoso.com'],
  startTime: '2018-10-24T10:00:00-07:00',
  endTime: '2018-10-24T10:30:00-07:00',
  content: 'test:content',
})
```

### 发起通话

发起音频或音视频通话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startCall' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}startCall({
  users: ['joe@contoso.com', '4:9876543210'],
  withVideo: true,
  source: 'demoApp',
})
```

### 分享到会议舞台

将应用内容分享到 Teams 会议舞台。Microsoft 要求最终 URL 中的 `appContext` 进行双重编码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareToMeetingStage' : 'microsoftTeams' }} } from '{{ importPath }}'

const webUrl = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}shareToMeetingStage({
  deepLinkId: 'sampleid',
  fqdn: 'teams.microsoft.com',
  appContext: {
    appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
    appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
    useMeetNow: true,
  },
})

const nativeUrl = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}shareToMeetingStage({
  deepLinkId: 'sampleid',
  fqdn: 'teams.microsoft.com',
  protocol: 'msteams',
  appContext: {
    appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
    appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
    useMeetNow: true,
  },
})
```

## 官方文档

* [Configure deep links](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-links)
* [Deep link to an application](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application)
* [Deep link to Teams chat](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams)
* [Deep link to a workflow in Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow)
