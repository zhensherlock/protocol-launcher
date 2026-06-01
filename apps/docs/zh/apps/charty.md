---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addTheme } from 'protocol-launcher/charty';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addThemeParams } from '../../.vitepress/constants/charty';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/charty' : 'protocol-launcher');
</script>

# Charty

[Charty](https://chartyios.app/) 是一款可以通过 Apple Shortcuts 创建图表的 iOS 应用。**Protocol Launcher** 可以生成 Charty URL scheme 链接。

## 使用方式

这个库有两种使用方式：

- On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
- Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## URL Scheme

Charty 官方文档定义了一个用于添加自定义配色主题的 URL scheme 端点：`charty://add-theme?name=...&baseColors=...&colors=...`。此模块只暴露这个已文档化的端点。

`colors` 值是以逗号分隔的十六进制颜色代码列表。Charty 官方文档说明颜色代码可以是 3、6 或 8 个字符。官方文档列出的 `baseColors` 值为 `0`、`3` 和 `4`。

### Add Theme

添加一个 Charty 自定义配色主题。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTheme' : 'charty' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'charty.'}}addTheme({
  name: 'BlGrYeOrRe',
  baseColors: 0,
  colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
})
```

<div class="flex justify-center">
  <VPLink :href="addTheme(addThemeParams)" target="_self">
    Add Charty Theme
  </VPLink>
</div>

::: details 输出示例

```ts
import { addTheme } from 'protocol-launcher/charty'

addTheme({
  name: 'BlGrYeOrRe',
  baseColors: 0,
  colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
})
// => 'charty://add-theme?name=BlGrYeOrRe&baseColors=0&colors=1a76e8,28d475,ffd416,ff6f1d,eb2d40'
```

:::

## 参考资料

- [Charty 1.1 Iris](https://chartyios.app/blog/charty11iris.html)
- [Charty Themes](https://chartyios.app/themes.html)
