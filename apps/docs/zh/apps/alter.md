---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/alter' : 'protocol-launcher');
</script>

# Alter

[Alter](https://alterhq.com/) 是一款 macOS AI 自动化应用。**Protocol Launcher** 允许你生成用于从其他应用触发 Alter actions 的 URL。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

Alter 官方 URL Callbacks 文档说明，可以从 Action Editor 的 **URL Callback** 区域复制 `alter://...` URL。文档还展示了 `alter://action/...` action callback 示例，以及可选的 `input` query 数据。此模块只保持这个边界：使用 Alter 生成的 URL，并且只在需要时添加官方文档中的 `input` 参数。

### 打开 Callback URL

原样返回从 Alter 复制的 callback URL。适用于 Alter 已经为 action 生成完整 URL 的场景。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCallbackUrl' : 'alter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}openCallbackUrl({
  url: 'alter://action/business-strategist-gpt',
})
```

### 运行已生成的 Action

返回 Alter 生成的 action callback URL，并可选择添加官方记录的 `input` query 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runGeneratedAction' : 'alter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/ask-web',
  input: 'What is Alter MacOS',
})

const urlWithoutInput = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
})

const businessStrategistUrl = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
  input: 'Explain Red Ocean Strategy',
})
```

## 生成的 URL

```ts
openCallbackUrl({ url: 'alter://action/business-strategist-gpt' })
// => 'alter://action/business-strategist-gpt'

runGeneratedAction({ url: 'alter://action/ask-web', input: 'What is Alter MacOS' })
// => 'alter://action/ask-web?input=What+is+Alter+MacOS'

runGeneratedAction({ url: 'alter://action/business-strategist-gpt' })
// => 'alter://action/business-strategist-gpt'

runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
  input: 'Explain Red Ocean Strategy',
})
// => 'alter://action/business-strategist-gpt?input=Explain+Red+Ocean+Strategy'
```

## 官方文档

- [Alter URL Callbacks](https://docs.alterhq.com/workflows/url-callbacks)
