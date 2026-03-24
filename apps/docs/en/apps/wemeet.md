---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, joinMeeting } from 'protocol-launcher/wemeet';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { joinMeetingParams } from '../../.vitepress/constants/wemeet';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/wemeet' : 'protocol-launcher');
</script>

# WeMeet

[WeMeet](https://meeting.tencent.com/) is a cloud video conferencing service provided by Tencent. **Protocol Launcher** allows you to generate deep links to open WeMeet and join meetings.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open WeMeet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open WeMeet
  </VPLink>
</div>

### Join Meeting

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinMeeting' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}joinMeeting({
  meetingCode: '123456789',
})
```

<div class="flex justify-center">
  <VPLink :href="joinMeeting(joinMeetingParams)" target="_self">
    Join Meeting
  </VPLink>
</div>
