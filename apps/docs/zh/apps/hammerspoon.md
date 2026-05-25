---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { urlEvent } from 'protocol-launcher/hammerspoon';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { multiParamUrlEventParams, urlEventParams } from '../../.vitepress/constants/hammerspoon';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hammerspoon' : 'protocol-launcher');
</script>

# Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) 是一款 macOS 自动化工具。**Protocol Launcher** 会为 Hammerspoon 官方 `hs.urlevent` 扩展生成 `hammerspoon://` URL event。

官方 URL 格式将 URL host 作为 event name。URL 不包含 path，只由 host 和可选查询参数组成。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### URL Event

为通过 `hs.urlevent.bind` 注册的 callback 生成 Hammerspoon URL event。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'urlEvent' : 'hammerspoon' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'doThingA',
  params: {
    value: '1',
  },
})

const multiParamUrl = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'someEventToHandle',
  params: {
    someParam: 'things',
    otherParam: 'stuff',
  },
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="urlEvent(urlEventParams)" target="_self">
    发送 URL Event
  </VPLink>
  <VPLink :href="urlEvent(multiParamUrlEventParams)" target="_self">
    发送带参数的 URL Event
  </VPLink>
</div>

## 官方文档

- [Hammerspoon hs.urlevent](https://www.hammerspoon.org/docs/hs.urlevent.html)
