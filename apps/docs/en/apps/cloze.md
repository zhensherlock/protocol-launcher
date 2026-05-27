---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openContact, openContactCallback, openWebContact } from 'protocol-launcher/cloze';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  callbackContactParams,
  emailContactParams,
  socialContactParams,
  webFullContactParams,
  webPathContactParams,
} from '../../.vitepress/constants/cloze';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cloze' : 'protocol-launcher');
</script>

# Cloze

[Cloze](https://www.cloze.com/) is a relationship management and CRM app. **Protocol Launcher** allows you to generate deep links for Cloze.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror Cloze's official URL scheme documentation for opening a person or company profile by identifier. Cloze documents email addresses, phone numbers, company domains, social handles such as `twitter:cloze`, and third-party app IDs such as `lead.salesforce.com:9425897598`.

### Open Contact

Open a contact profile with the simplified iOS URL form `cloze://contact/<identifier>`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContact' : 'cloze' }} } from '{{ importPath }}'

const emailUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContact({
  identifier: 'someone@company.com',
})

const socialUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContact({
  identifier: 'twitter:cloze',
})
```

<div class="flex justify-center">
  <VPLink :href="openContact(emailContactParams)" target="_self">
    Open Contact in Cloze
  </VPLink>
</div>

### Open Contact Callback

Open a contact profile with Cloze's x-callback-url form `cloze://x-callback-url/contact/<identifier>`. Cloze documents `x-success` as the optional callback URL; this helper accepts it as `xSuccess` and serializes it to `x-success`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContactCallback' : 'cloze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContactCallback({
  identifier: 'someone@company.com',
  xSuccess: 'myapp://back',
})
```

<div class="flex justify-center">
  <VPLink :href="openContactCallback(callbackContactParams)" target="_self">
    Open Contact with Callback
  </VPLink>
</div>

### Open Web Contact

Open a Cloze profile using the documented web URL forms. The hash form is the default. Cloze also documents `/in/contact/<identifier>` examples for email and phone lookups; use `syntax: 'path'` for that form. The `full` option maps to Cloze's `full` flag, and `back` maps to the documented back-button URL for a full-screen profile.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebContact' : 'cloze' }} } from '{{ importPath }}'

const webUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
  syntax: 'path',
})

const fullScreenUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
  full: true,
  back: 'http://www.evernote.com',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openWebContact(socialContactParams)" target="_self">
    Open Web Profile
  </VPLink>
  <VPLink :href="openWebContact(webPathContactParams)" target="_self">
    Open Web Path Profile
  </VPLink>
  <VPLink :href="openWebContact(webFullContactParams)" target="_self">
    Open Full Web Profile
  </VPLink>
</div>

## Official Documentation

- [Cloze URL Scheme and x-callback URLs](https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls)
