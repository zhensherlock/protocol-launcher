---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { bestAll, bestRunning, customApiMethod, open, promptAll, promptRunning } from 'protocol-launcher/choosy';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  bestAllParams,
  bestRunningParams,
  customApiMethodParams,
  openParams,
  promptAllParams,
  promptRunningParams,
} from '../../.vitepress/constants/choosy';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/choosy' : 'protocol-launcher');
</script>

# Choosy

[Choosy](https://choosy.app/) 是一款 macOS 浏览器选择工具。**Protocol Launcher** 允许你生成 URL，通过 Choosy 打开网页链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

此模块遵循 Choosy 官方 [API 文档](https://choosy.app/api)，其 URL 形状为 `x-choosy://api-method/web-url`。

内置 helper 只覆盖 Choosy 官方文档列出的 API method：`open`、`prompt.all`、`prompt.running`、`best.all` 和 `best.running`。Choosy 也记录了用户自定义 API method，因此 `customApiMethod` 接收你在 Choosy 规则里配置的 method 名称。

### 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}open({
  url: 'https://example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    按 Choosy 设置打开
  </VPLink>
</div>

### 提示所有浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'promptAll' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}promptAll({
  url: 'https://www.georgebrock.com',
})
```

<div class="flex justify-center">
  <VPLink :href="promptAll(promptAllParams)" target="_self">
    从所有浏览器中选择
  </VPLink>
</div>

### 提示正在运行的浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'promptRunning' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}promptRunning({
  url: 'https://example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="promptRunning(promptRunningParams)" target="_self">
    从正在运行的浏览器中选择
  </VPLink>
</div>

### 最喜欢的浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'bestAll' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}bestAll({
  url: 'https://example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="bestAll(bestAllParams)" target="_self">
    使用最喜欢的浏览器
  </VPLink>
</div>

### 最喜欢且正在运行的浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'bestRunning' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}bestRunning({
  url: 'https://example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="bestRunning(bestRunningParams)" target="_self">
    使用最喜欢且正在运行的浏览器
  </VPLink>
</div>

### 自定义 API Method

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customApiMethod' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}customApiMethod({
  method: 'edit',
  url: 'https://www.example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="customApiMethod(customApiMethodParams)" target="_self">
    使用自定义 API method
  </VPLink>
</div>

## 官方文档

- [Choosy API](https://choosy.app/api)
- [Choosy custom API methods](https://choosy.app/help/settings/rules/customapi)
