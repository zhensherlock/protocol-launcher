---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/capacities' : 'protocol-launcher');
</script>

# Capacities

[Capacities](https://capacities.io/) is a knowledge management app for organizing notes and objects. **Protocol Launcher** allows you to generate Capacities x-callback-url links for the officially documented actions.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Capacities x-callback-url links use `capacities://x-callback-url/<action>`. The API fields `xSource`, `xSuccess`, and `xError` generate the official `x-source`, `x-success`, and `x-error` query parameters. To receive an action result, provide both `xSuccess` and `xError`.

The official Capacities page lists `title` in the `createNewObject` parameter table and shows `name` in the testing and `createNewObject` examples. This package exposes only those documented query parameters.

### Create New Object

Open Capacities and create a new object.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewObject' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}createNewObject({
  name: 'My new object',
})

const objectWithOptionsUrl = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}createNewObject({
  spaceId: 'REPLACE_WITH_SPACE_ID',
  type: 'REPLACE_WITH_OBJECT_TYPE',
  title: 'Research note',
  content: '# Hello Capacities',
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

### Append To Daily Note

Open Capacities and append markdown content to today's daily note.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToDailyNote' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}appendToDailyNote({
  content: 'My content',
})

const appendWithCallbacksUrl = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}appendToDailyNote({
  spaceId: 'REPLACE_WITH_SPACE_ID',
  content: '- Captured from Shortcuts',
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

### Get Current Object

Return the object that is currently opened in Capacities through the callback URLs.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentObject' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}getCurrentObject({
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

## Official Documentation

- [Capacities X-Callback-URLs](https://docs.capacities.io/developer/x-callback-urls)
