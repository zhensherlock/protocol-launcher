---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { contacts, openWebTeamChat, signIn } from 'protocol-launcher/ringcentral';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ringcentral' : 'protocol-launcher');
</script>

# RingCentral

[RingCentral](https://www.ringcentral.com/) is a communications app for calling, messaging, meetings, and team collaboration. **Protocol Launcher** allows you to generate RingCentral URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module follows RingCentral's official URI Scheme Reference. It exposes the documented `rcmobile://` mobile links, `rcapp://r/signin`, `tel:` and `sms:` system URI forms, RingCentral web app links under `https://app.ringcentral.com`, the documented desktop `/r/...` paths, and RingCentral Video join links under `https://v.ringcentral.com`.

The `desktopSms()` helper only serializes `content` for the official `number + content` form. It does not create an undocumented `content`-only URL.

### Mobile Call and SMS

Generate the documented RingCentral mobile call and SMS draft URIs. These can start communication flows, so the docs show generated examples without live preview links.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call, sms' : 'ringcentral' }} } from '{{ importPath }}'

const callUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}call({
  phoneNumber: '15551234567',
})

const smsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}sms({
  phoneNumber: '15551234567',
})
```

### Mobile Screens

Open RingCentral mobile screens documented by the `rcmobile://` catalog.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'conference, meeting, contacts, voicemail, history' : 'ringcentral' }} } from '{{ importPath }}'

const conferenceUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}conference()
const meetingUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}meeting()
const contactsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}contacts()
const voicemailUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}voicemail()
const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}history()
```

<div class="flex justify-center">
  <VPLink :href="contacts()" target="_self">
    Open RingCentral Contacts
  </VPLink>
</div>

### Mobile Team Messaging

Open RingCentral mobile Team Messaging resources using the documented `rcmobile://glip/...` URIs.

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

### Sign In

Launch the RingCentral app sign-in screen.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'signIn' : 'ringcentral' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}signIn()
```

<div class="flex justify-center">
  <VPLink :href="signIn()" target="_self">
    Open RingCentral Sign-In
  </VPLink>
</div>

### System URI Forms

Generate the `tel:` and `sms:` URI forms listed in RingCentral's reference. These use the default phone or SMS app rather than the `rcmobile://` scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tel, systemSms' : 'ringcentral' }} } from '{{ importPath }}'

const telUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}tel({
  phoneNumber: '15551234567',
})

const defaultSmsUrl = {{currentMethod === 'On-Demand' ? '' : 'ringcentral.'}}systemSms({
  phoneNumber: '15551234567',
})
```

### Web App Links

Generate RingCentral web app deep links under the documented production base URL.

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

<div class="flex justify-center">
  <VPLink :href="openWebTeamChat({ groupId: 'group-123' })" target="_self">
    Open RingCentral Web Team Chat
  </VPLink>
</div>

### Desktop Paths

Generate the documented `/r/...` RingCentral desktop paths. RingCentral documents the production base URL separately as `https://app.ringcentral.com/`, but these helpers return the exact path forms shown in the catalog.

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

Open a RingCentral Video meeting, optionally with a prefilled password.

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

## Official Documentation

- [RingCentral URI Scheme Reference](https://developers.ringcentral.com/guide/basics/uri-schemes)
