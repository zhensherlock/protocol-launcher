---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openUrl } from 'protocol-launcher/google-chrome-ios';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams } from '../../.vitepress/constants/google-chrome-ios';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/google-chrome-ios' : 'protocol-launcher');
</script>

# Google Chrome iOS

[Google Chrome](https://www.google.com/chrome/) is a web browser developed by Google. **Protocol Launcher** allows you to generate deep links to open HTTP and HTTPS URLs in Chrome for iOS.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module follows Chrome for iOS's official [URL scheme documentation](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/ios/opening_links.md): replace the URL scheme before the first `:`, so `http` becomes `googlechrome` and `https` becomes `googlechromes`.

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'googleChromeIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleChromeIos.'}}openUrl({
  url: 'https://www.google.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    Open URL in Google Chrome iOS
  </VPLink>
</div>
