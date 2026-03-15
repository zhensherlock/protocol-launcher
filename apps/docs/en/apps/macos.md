---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { calendar, facetime, findMy, mail, sms, wallet } from 'protocol-launcher/macos';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  calendarParams,
  calendarWithLinkParams,
  facetimeParams,
  findMyParams,
  findMyDevicesParams,
  findMyItemsParams,
  findMyFriendsParams,
  mailParams,
  smsParams,
  smsWithPhoneParams,
  walletParams,
} from '../../.vitepress/constants/macos';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/macos' : 'protocol-launcher');
</script>

# macOS

[macOS](https://www.apple.com/macos/) is a graphical operating system developed by Apple Inc. As the first commercially successful graphical user interface system, it is designed specifically for the Macintosh series of computers, featuring an XNU hybrid kernel architecture and inheriting UNIX system characteristics. **Protocol Launcher** allows you to generate deep links to open and interact with built-in macOS apps like Calendar, FaceTime, Find My, Mail, SMS, and Wallet.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Calendar

Open the Calendar app, optionally with a webcal subscription link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calendar' : 'macos' }} } from '{{ importPath }}'

// Open Calendar app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar()

// Open Calendar with webcal subscription
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar({
  link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="calendar(calendarParams)" target="_self">
    Open Calendar
  </VPLink>
  <VPLink :href="calendar(calendarWithLinkParams)" target="_self">
    Open Calendar with Subscription
  </VPLink>
</div>

### Open FaceTime

Open the FaceTime app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}facetime({
  phone: '1234567890',
})
```

<div class="flex justify-center">
  <VPLink :href="facetime(facetimeParams)" target="_self">
    Open FaceTime
  </VPLink>
</div>

### Open Find My

Open the Find My app, optionally specifying a tab (devices, items, or friends).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findMy' : 'macos' }} } from '{{ importPath }}'

// Open Find My app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy()

// Open Devices tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'devices',
})

// Open Items tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'items',
})

// Open Friends tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'friends',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="findMy(findMyParams)" target="_self">
    Open Find My
  </VPLink>
  <VPLink :href="findMy(findMyDevicesParams)" target="_self">
    Open Devices Tab
  </VPLink>
  <VPLink :href="findMy(findMyItemsParams)" target="_self">
    Open Items Tab
  </VPLink>
  <VPLink :href="findMy(findMyFriendsParams)" target="_self">
    Open Friends Tab
  </VPLink>
</div>

### Open Mail

Open the Mail app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}mail()
```

<div class="flex justify-center">
  <VPLink :href="mail(mailParams)" target="_self">
    Open Mail
  </VPLink>
</div>

### Open SMS

Open the SMS app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms' : 'macos' }} } from '{{ importPath }}'

// Open SMS app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms()

// Open SMS with phone number
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms({
  phone: '1234567890',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="sms(smsParams)" target="_self">
    Open SMS
  </VPLink>
  <VPLink :href="sms(smsWithPhoneParams)" target="_self">
    Open SMS with Phone
  </VPLink>
</div>

### Open Wallet

Open the Wallet app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}wallet()
```

<div class="flex justify-center">
  <VPLink :href="wallet(walletParams)" target="_self">
    Open Wallet
  </VPLink>
</div>
