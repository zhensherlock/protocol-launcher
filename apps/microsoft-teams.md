---
url: /protocol-launcher/apps/microsoft-teams.md
---

# Microsoft Teams

[Microsoft Teams](https://www.microsoft.com/microsoft-teams/) is a collaboration app from Microsoft for team chat, meetings, calls, and channels. **Protocol Launcher** allows you to generate deep links for Microsoft Teams.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Microsoft recommends `https://teams.microsoft.com/l/...` deep links by default. The `msteams` protocol handler opens Teams desktop directly, but Microsoft warns not to prepend `msteams:` to an `https://` Teams URL. This module only exposes the native `msteams:/l/meeting-share` form for the meeting-stage share link where Microsoft documents that exact format.

### Open App Install Dialog

Open a Teams app install dialog by app ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAppInstallDialog' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openAppInstallDialog({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
})
```

### Open App Tab

Open content inside a Teams app tab.

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

### Open App Chat

Open a personal chat with a Teams app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAppChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openAppChat({
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: 'abcdef12-3456-7890-abcd-ef1234567890',
})
```

### Open Dialog

Open a Teams dialog with a `TaskInfo.url`.

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

### Open New Chat

Open or create a private chat with users and optional draft text.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNewChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openNewChat({
  users: ['joe@contoso.com', 'bob@contoso.com'],
  topicName: 'Prep For Meeting Tomorrow',
  message: 'Hi folks, kicking off a chat about our meeting tomorrow',
})
```

### Open Chat

Navigate to a specific Teams chat conversation.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChat' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChat({
  chatId: '19:c6d70e392a384916c3262b15406d763e@thread.v2',
})
```

### Open Channel Conversation

Navigate to a channel conversation.

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

### Open Chat Message

Navigate to a message in a personal or group chat.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChatMessage' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openChatMessage({
  chatId: '19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces',
  messageId: '1563480968434',
})
```

### Open Team

Navigate to a team. The channel ID path segment is encoded by the helper.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeam' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}openTeam({
  channelId: '19:TWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41@thread.tacv2',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
})
```

### Open Channel

Navigate to a standard, private, or shared Teams channel. Set `ngc: true` for private channels and both `ngc: true` plus `allowXTenantAccess: true` for shared channels, matching Microsoft's documented parameters.

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

### Open File

Navigate to a file in a Teams channel.

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

### Open Meeting Scheduling Dialog

Open the Teams meeting scheduling dialog.

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

### Start Call

Start an audio or audio-video call.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startCall' : 'microsoftTeams' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftTeams.'}}startCall({
  users: ['joe@contoso.com', '4:9876543210'],
  withVideo: true,
  source: 'demoApp',
})
```

### Share To Meeting Stage

Share app content to a Teams meeting stage. Microsoft requires the `appContext` value to be double-encoded in the final URL.

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

## Official Documentation

* [Configure deep links](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-links)
* [Deep link to an application](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application)
* [Deep link to Teams chat](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams)
* [Deep link to a workflow in Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow)
