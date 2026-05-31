---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { find, findInLocation, findJson, findWithTemplate } from 'protocol-launcher/find-any-file';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { findInLocationParams, findJsonParams, findParams, findWithTemplateParams } from '../../.vitepress/constants/find-any-file';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/find-any-file' : 'protocol-launcher');
</script>

# Find Any File

[Find Any File](https://findanyfile.app/) 是一款 macOS 文件搜索应用。**Protocol Launcher** 可以生成 Find Any File URL scheme 链接。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Find Any File 官方 URL scheme 文档定义了用于查询参数搜索的 `fafapp://find?...`，以及用于 JSON 搜索规则的 `fafapp://findjson/jsondata` 或 `fafapp://findjson/jsondata/wmode`。此模块只暴露这些已文档化的形式。

在 `find()`、`findInLocation()` 和 `findWithTemplate()` 中，payload 使用 FAF 官方文档里的参数名：`inp`、`loc`、`win`、`root`、`run`、`norun` 和 `tpl`。字符串 `inp` 会序列化为 `inp`；数组会序列化为 `inp1`、`inp2` 等。字符串 `loc` 会序列化为 `loc`；数组会序列化为 `loc1`、`loc2` 等。

### 查找

打开 Find Any File，并填入第一个输入框进行搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}find({
  inp: 'invoice',
})
```

<div class="flex justify-center">
  <VPLink :href="find(findParams)" target="_self">
    查找
  </VPLink>
</div>

### 在指定位置查找

在指定 Find Any File 位置中搜索，例如 `~`、POSIX 路径、file URL、HFS 路径，或 FAF 文档列出的特殊 `#` 位置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findInLocation' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findInLocation({
  loc: '~',
  inp: 'invoice',
})
```

<div class="flex justify-center">
  <VPLink :href="findInLocation(findInLocationParams)" target="_self">
    在指定位置查找
  </VPLink>
</div>

### 使用模板查找

使用保存的 Search Template 名称，不包含 `.faf` 扩展名。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findWithTemplate' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findWithTemplate({
  tpl: 'LastWeek',
  inp: 'invoice',
})
```

<div class="flex justify-center">
  <VPLink :href="findWithTemplate(findWithTemplateParams)" target="_self">
    使用模板查找
  </VPLink>
</div>

### JSON 查找

使用从 Find Any File 已保存搜索中复制出的 JSON 搜索规则。当 `jsondata` 是对象时，字符串值会进行百分号编码，JSON 标点会保留为 FAF 官方示例中的形式。当 `jsondata` 是字符串时，会原样使用。`wmode` 会追加官方文档中的可选窗口模式 path 片段。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findJson' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findJson({
  jsondata: {
    specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
    title: 'Name contains report 2021',
    autoStart: true,
    sources: ['/'],
  },
})
```

<div class="flex justify-center">
  <VPLink :href="findJson(findJsonParams)" target="_self">
    JSON 查找
  </VPLink>
</div>

## 生成的 URL

```ts
find({ inp: 'invoice' })
// => 'fafapp://find?inp=invoice'

findInLocation({
  loc: '~',
  inp: 'invoice',
})
// => 'fafapp://find?inp=invoice&loc=~'

findWithTemplate({
  tpl: 'LastWeek',
  inp: 'invoice',
})
// => 'fafapp://find?inp=invoice&tpl=LastWeek'

findJson({
  jsondata: {
    specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
    title: 'Name contains report 2021',
    autoStart: true,
    sources: ['/'],
  },
})
// => 'fafapp://findjson/{"specs":[{"verb":9,"val":"report%202021","subj":0}],"title":"Name%20contains%20report%202021","autoStart":true,"sources":["%2F"]}'
```

## 官方文档

- [Find Any File URL scheme](https://findanyfile.app/url-scheme.html)
