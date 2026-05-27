---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { calculate, execute, hide, largeType, select } from 'protocol-launcher/launchbar';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  calculateCelsiusTemplateParams,
  calculateParams,
  calculateResultParams,
  calculateTemplateParams,
  calculateTitleParams,
  executeArgumentParams,
  executeArgumentsParams,
  largeTypeFontParams,
  largeTypeParams,
  largeTypeTitleParams,
  selectAbbreviationParams,
  selectFileParams,
  selectNamedUrlParams,
  selectStringParams,
  selectUrlParams,
} from '../../.vitepress/constants/launchbar';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/launchbar' : 'protocol-launcher');
</script>

# LaunchBar

[LaunchBar](https://www.obdev.at/products/launchbar/index.html) is a macOS launcher and productivity utility. **Protocol Launcher** allows you to generate deep links for LaunchBar.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror LaunchBar's official [URL Commands](https://www.obdev.at/resources/launchbar/help/URLCommands.html) and [Calculator](https://www.obdev.at/resources/launchbar/help/Calculator.html) documentation. The documented `execute` command only works in conjunction with LaunchBar Search Templates.

### Large Type

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'largeType' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  string: 'LaunchBar 4.3',
})

const titleUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  title: 'Large Type',
  string: 'Small Example',
})

const fontUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  fontName: 'Times-Bold',
  string: 'Hello World',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="largeType(largeTypeParams)" target="_self">
    Show Large Type
  </VPLink>
  <VPLink :href="largeType(largeTypeTitleParams)" target="_self">
    Show Large Type With Title
  </VPLink>
  <VPLink :href="largeType(largeTypeFontParams)" target="_self">
    Show Large Type With Font
  </VPLink>
</div>

### Select Item

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'select' : 'launchbar' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  file: '/Applications',
})

const urlItem = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  url: 'www.obdev.at',
})

const namedUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  url: 'www.obdev.at',
  name: 'Objective Development',
})

const stringUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  string: "Hello, I'm a text",
})

const abbreviationUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  abbreviation: 'SAFARI',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="select(selectFileParams)" target="_self">
    Select Applications Folder
  </VPLink>
  <VPLink :href="select(selectUrlParams)" target="_self">
    Select URL
  </VPLink>
  <VPLink :href="select(selectNamedUrlParams)" target="_self">
    Select Named URL
  </VPLink>
  <VPLink :href="select(selectStringParams)" target="_self">
    Select Text
  </VPLink>
  <VPLink :href="select(selectAbbreviationParams)" target="_self">
    Select Abbreviation
  </VPLink>
</div>

### Execute Search Template Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'execute' : 'launchbar' }} } from '{{ importPath }}'

const singleArgumentUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}execute({
  path: '/usr/local/bin/MyScript',
  argument: '*',
})

const argumentsUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}execute({
  path: '/usr/bin/open',
  arguments: '-a "*"',
})
```

### Calculate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calculate' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '2*sin(pi/4)^2',
})

const titleUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '(1+sqrt(5))/2',
  title: 'Golden Ratio',
})

const resultUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '(1+sqrt(5))/2',
  title: 'Golden Ratio',
  result: 'φ=@',
})

const templateUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  argument: '*',
  expression: '(@-32)/1.8',
  title: '@°F =',
  result: '@°C',
})

const celsiusTemplateUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  argument: '*',
  expression: '@*1.8+32',
  title: '@°C =',
  result: '@°F',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="calculate(calculateParams)" target="_self">
    Calculate Expression
  </VPLink>
  <VPLink :href="calculate(calculateTitleParams)" target="_self">
    Calculate With Title
  </VPLink>
  <VPLink :href="calculate(calculateResultParams)" target="_self">
    Calculate With Result Format
  </VPLink>
</div>

### Hide LaunchBar

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hide' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}hide()
```

<div class="flex justify-center">
  <VPLink :href="hide()" target="_self">
    Hide LaunchBar
  </VPLink>
</div>
