---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { appendLine, calculate, create, open, openSheet } from 'protocol-launcher/soulver';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { appendLineParams, calculateParams, calculateToClipboardParams, createParams, openSheetParams } from '../../.vitepress/constants/soulver';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/soulver' : 'protocol-launcher');
</script>

# Soulver

[Soulver](https://soulver.app/) is a **natural language** notepad calculator app for the Mac, iPad & iPhone. **Protocol Launcher** allows you to generate deep links to create documents, evaluate expressions, and append lines in Soulver.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Soulver

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Soulver
  </VPLink>
</div>

### Create Document

Create a new document and evaluate an expression in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}create({
  expression: '$3k earnings / 5 people',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    Create Document in Soulver
  </VPLink>
</div>

### Calculate to Clipboard

Evaluate an expression and copy the result to clipboard.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calculate' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}calculate({
  expression: 'lunch was $55 + 25% tip',
  toClipboard: true,
})
```

<div class="flex justify-center">
  <VPLink :href="calculate(calculateToClipboardParams)" target="_self">
    Calculate to Clipboard in Soulver
  </VPLink>
</div>

### Append Line

Append an expression to a specific sheet in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendLine' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}appendLine({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
  expression: '$500 in EUR',
})
```

<div class="flex justify-center">
  <VPLink :href="appendLine(appendLineParams)" target="_self">
    Append Line in Soulver
  </VPLink>
</div>

### Open Sheet

Open a specific sheet in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSheet' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}openSheet({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
})
```

<div class="flex justify-center">
  <VPLink :href="openSheet(openSheetParams)" target="_self">
    Open Sheet in Soulver
  </VPLink>
</div>
