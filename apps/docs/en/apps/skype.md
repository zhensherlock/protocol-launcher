---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, implicitCall, call, videoCall, chat } from 'protocol-launcher/skype';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  implicitCallParams,
  callParams,
  videoCallParams,
  chatParams,
} from '../../.vitepress/constants/skype';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/skype' : 'protocol-launcher');
</script>

# Skype

[Skype](https://www.skype.com/) is a calling and messaging app. **Protocol Launcher** allows you to generate Skype URI links for opening Skype, starting calls, and opening chats.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Microsoft documents Skype URIs with the `skype:` scheme. Multiple call or chat participants are separated with semicolons. Audio call participants can be Skype Names or phone numbers; video calls and chats use Skype Names.

The optional `topic` argument is documented for conference calls and multi chats, and is URL-encoded by these helpers.

### Open Skype

Start Skype or switch focus to the Skype client.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Skype
  </VPLink>
</div>

### Implicit Audio Call

Start an audio call using the implicit Skype URI form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'implicitCall' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}implicitCall({
  participants: 'skype.test.user.1',
})
```

<div class="flex justify-center">
  <VPLink :href="implicitCall(implicitCallParams)" target="_self">
    Start Implicit Audio Call
  </VPLink>
</div>

### Audio Call

Start an explicit audio call. The official `topic` argument applies to conference calls only.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}call({
  participants: ['skype.test.user.1', 'skype.test.user.2', '+16505550123'],
  topic: 'Geek Conspiracy',
})
```

<div class="flex justify-center">
  <VPLink :href="call(callParams)" target="_self">
    Start Audio Call
  </VPLink>
</div>

### Video Call

Start a Skype call and turn on video.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videoCall' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}videoCall({
  participants: 'skype.test.user.1',
})
```

<div class="flex justify-center">
  <VPLink :href="videoCall(videoCallParams)" target="_self">
    Start Video Call
  </VPLink>
</div>

### Chat

Open or create a Skype chat. The official `topic` argument applies to multi chats only.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chat' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}chat({
  participants: ['skype.test.user.1', 'skype.test.user.2'],
  topic: 'Quantum Mechanics 101',
})
```

<div class="flex justify-center">
  <VPLink :href="chat(chatParams)" target="_self">
    Open Chat in Skype
  </VPLink>
</div>

## Official Documentation

- [Skype URI API reference](https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference)
