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

[LaunchBar](https://www.obdev.at/products/launchbar/index.html) 是一款 macOS 启动器与效率工具。**Protocol Launcher** 可以为 LaunchBar 生成深度链接。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

以下 helper 对应 LaunchBar 官方 [URL Commands](https://www.obdev.at/resources/launchbar/help/URLCommands.html) 与 [Calculator](https://www.obdev.at/resources/launchbar/help/Calculator.html) 文档。官方说明 `execute` 命令只能配合 LaunchBar 搜索模板（Search Templates）使用。

### 大字显示

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
    显示大字文本
  </VPLink>
  <VPLink :href="largeType(largeTypeTitleParams)" target="_self">
    显示带标题的大字文本
  </VPLink>
  <VPLink :href="largeType(largeTypeFontParams)" target="_self">
    使用指定字体显示大字文本
  </VPLink>
</div>

### 选中项目

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
    选中 Applications 文件夹
  </VPLink>
  <VPLink :href="select(selectUrlParams)" target="_self">
    选中 URL
  </VPLink>
  <VPLink :href="select(selectNamedUrlParams)" target="_self">
    选中带名称的 URL
  </VPLink>
  <VPLink :href="select(selectStringParams)" target="_self">
    选中文本
  </VPLink>
  <VPLink :href="select(selectAbbreviationParams)" target="_self">
    选中缩写
  </VPLink>
</div>

### 执行搜索模板命令

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

### 计算

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
    计算表达式
  </VPLink>
  <VPLink :href="calculate(calculateTitleParams)" target="_self">
    计算并显示标题
  </VPLink>
  <VPLink :href="calculate(calculateResultParams)" target="_self">
    计算并套用结果格式
  </VPLink>
</div>

### 隐藏 LaunchBar

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hide' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}hide()
```

<div class="flex justify-center">
  <VPLink :href="hide()" target="_self">
    隐藏 LaunchBar
  </VPLink>
</div>
