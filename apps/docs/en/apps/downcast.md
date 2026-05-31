---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, subscribe, subscribeFeedUrl } from 'protocol-launcher/downcast';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { subscribeParams } from '../../.vitepress/constants/downcast';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/downcast' : 'protocol-launcher');
</script>

# Downcast

[Downcast](https://www.downcastapp.com/) is a podcast app for iOS, Mac, Apple Watch, and CarPlay. **Protocol Launcher** allows you to generate official URL scheme links to import podcast feed subscriptions in Downcast.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Downcast's official knowledge base documents `itpc://`, `podcast://`, `feed://`, and `downcast://` as supported podcast feed URL schemes. When one of those URLs is opened, Downcast attempts to import a subscription for the podcast at that URL.

The `subscribe()` helper expects a complete URL that already uses one of those documented schemes. The `subscribeFeedUrl()` helper returns the exact documented Chrome RSS Subscription Extension template: `downcast://feed-url=%s`.

### Downcast Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open downcast://
  </VPLink>
</div>

### Subscribe with a Feed Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribe({
  url: 'itpc://example.com/podcast/rss',
})
```

<div class="flex justify-center">
  <VPLink :href="subscribe(subscribeParams)" target="_self">
    Subscribe with Feed Scheme
  </VPLink>
</div>

### Chrome RSS Extension Template

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribeFeedUrl' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribeFeedUrl()
```

```ts
subscribeFeedUrl()
// => 'downcast://feed-url=%s'
```

## Official Documentation

- [Downcast URL Schemes & Opening Feed URLs](https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac)
