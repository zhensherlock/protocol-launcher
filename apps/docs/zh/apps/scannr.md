---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { scanId } from 'protocol-launcher/scannr';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { scanIdWithCallbackParams } from '../../.vitepress/constants/scannr';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/scannr' : 'protocol-launcher');
</script>

# Scannr

[Scannr](https://scannrapp.com/) 是一款用于 ID 扫描并获取驾驶证数据的应用。**Protocol Launcher** 允许您生成 Scannr 官方文档中的 URL scheme 链接：`scannr://` 和 `scannr://?callbackScheme=<foo>`。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 扫描 ID

使用官方文档中的 Android URL scheme `scannr://` 启动 Scannr。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId()
```

<div class="flex justify-center">
  <VPLink :href="scanId()" target="_self">
    使用 Scannr 扫描 ID
  </VPLink>
</div>

### 带 iOS 回调的 ID 扫描

使用官方文档中的 iOS URL scheme `scannr://?callbackScheme=<foo>` 启动 Scannr。调用方应用需要定义 `foo` URL scheme，并按 Scannr 官方说明配置 `LSApplicationQueriesSchemes`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId({
  callbackScheme: 'foo',
})
```

<div class="flex justify-center">
  <VPLink :href="scanId(scanIdWithCallbackParams)" target="_self">
    使用 iOS 回调扫描 ID
  </VPLink>
</div>

## 官方文档

- [Scannr URL scheme 集成文档](https://scannrapp.com/scannr_url_scheme.pdf)
