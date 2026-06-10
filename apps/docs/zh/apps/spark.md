---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/spark' : 'protocol-launcher');
</script>

# Spark Mail

[Spark Mail](https://sparkmailapp.com/) 是一款邮件客户端。**Protocol Launcher** 允许你打开从 Spark 复制出来的官方 Spark Desktop Deep Link。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

Spark 官方 Deep Links 文档只公开了 `readdle-spark://bl=` 格式的、仅创建者可访问的已复制邮件链接。本模块只暴露这个官方记录的格式，并接收完整的已复制 Deep Link，不尝试重建或解释 Spark 的私有链接载荷。

### 打开 Deep Link

打开从 Spark 中通过 **Copy Deep Link** 复制出来的 Spark Desktop Deep Link。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDeepLink' : 'spark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spark.'}}openDeepLink({
  url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
})
```

## 生成的 URL

```ts
openDeepLink({
  url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
})
// => 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE'
```

## 官方文档

- [Streamline your workflow with Deep Links on desktop](https://sparkmailapp.com/help/tips-tricks/streamline-your-workflow-with-deep-links)
