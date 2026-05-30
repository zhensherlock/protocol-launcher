---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openChannel, openDirectMessage, openPost, openTeam } from 'protocol-launcher/mattermost';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openChannelParams,
  openDirectMessageParams,
  openPostParams,
  openTeamParams,
} from '../../.vitepress/constants/mattermost';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/mattermost' : 'protocol-launcher');
</script>

# Mattermost

[Mattermost](https://mattermost.com/) is a self-hostable team collaboration platform. **Protocol Launcher** allows you to generate Mattermost deep links using the official `mattermost://` formats.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Mattermost documents `mattermost://` deep links for teams, channels, channel messages or threads, and direct messages. The `serverUrl` value is the value placed in the official `<your-Mattermost-server-URL>` segment. Use the team name, channel name, post ID, and user name exactly as they exist in your Mattermost workspace.

### Open Team

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeam' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openTeam({
  serverUrl: '{{ openTeamParams.serverUrl }}',
  teamName: '{{ openTeamParams.teamName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openTeam(openTeamParams)" target="_self">
    Open Mattermost Team
  </VPLink>
</div>

### Open Channel

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannel' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openChannel({
  serverUrl: '{{ openChannelParams.serverUrl }}',
  teamName: '{{ openChannelParams.teamName }}',
  channelName: '{{ openChannelParams.channelName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openChannel(openChannelParams)" target="_self">
    Open Mattermost Channel
  </VPLink>
</div>

### Open Channel Message Or Thread

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPost' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openPost({
  serverUrl: '{{ openPostParams.serverUrl }}',
  teamName: '{{ openPostParams.teamName }}',
  postId: '{{ openPostParams.postId }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openPost(openPostParams)" target="_self">
    Open Mattermost Message
  </VPLink>
</div>

### Open Direct Message

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDirectMessage' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openDirectMessage({
  serverUrl: '{{ openDirectMessageParams.serverUrl }}',
  teamName: '{{ openDirectMessageParams.teamName }}',
  userName: '{{ openDirectMessageParams.userName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openDirectMessage(openDirectMessageParams)" target="_self">
    Open Mattermost Direct Message
  </VPLink>
</div>

## Official Documentation

- [Mattermost Deep Links](https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links)
