---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { history, newJson, paste, scriptsPanel } from 'protocol-launcher/ok-json';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { newJsonParams } from '../../.vitepress/constants/ok-json';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ok-json' : 'protocol-launcher');
</script>

# OK JSON

[OK JSON](https://okjson.app/) 是一款 JSON 查看工具。**Protocol Launcher** 允许您生成 OK JSON URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

OK JSON 官方 URL Schemes 页面只记录了五个动作：`okjson://paste`、`okjson://new?content=...`、`okjson://history`、`okjson://scripts-panel` 和 `okjson://script/...`。此模块只暴露这些官方记录的动作。

`newJson()` 接收原始 JSON 字符串，并将其序列化为官方的 URL 编码 `content` 查询参数。`runScript()` 接收不带 `.js` 扩展名的自定义脚本文件名，与官方脚本 URL 格式保持一致。

### 从剪贴板查看 JSON 字符串

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}paste()
```

<div class="flex justify-center">
  <VPLink :href="paste()" target="_self">
    在 OK JSON 中查看剪贴板 JSON
  </VPLink>
</div>

### 查看 JSON 字符串

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newJson' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}newJson({
  content: '{"hello":"world"}',
})
```

<div class="flex justify-center">
  <VPLink :href="newJson(newJsonParams)" target="_self">
    在 OK JSON 中查看 JSON 字符串
  </VPLink>
</div>

### 显示历史窗口

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}history()
```

<div class="flex justify-center">
  <VPLink :href="history()" target="_self">
    显示 OK JSON 历史
  </VPLink>
</div>

### 显示脚本面板窗口

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scriptsPanel' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}scriptsPanel()
```

<div class="flex justify-center">
  <VPLink :href="scriptsPanel()" target="_self">
    显示 OK JSON 脚本面板
  </VPLink>
</div>

### 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
```

## 生成的 URL

```ts
paste()
// => 'okjson://paste'

newJson({
  content: '{"hello":"world"}',
})
// => 'okjson://new?content=%7B%22hello%22%3A%22world%22%7D'

history()
// => 'okjson://history'

scriptsPanel()
// => 'okjson://scripts-panel'

runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
// => 'okjson://script/copy-minified-json'
```

## 官方文档

- [OK JSON URL Schemes](https://docs.okjson.app/url-schemes)
