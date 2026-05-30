---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { navigate } from 'protocol-launcher/home-assistant';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { navigateParams } from '../../.vitepress/constants/home-assistant';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/home-assistant' : 'protocol-launcher',
);
</script>

# Home Assistant

[Home Assistant](https://www.home-assistant.io/) 是一个开源家庭自动化平台。**Protocol Launcher** 可以生成官方 Home Assistant companion app URL Handler 链接和 tag universal link。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 导航

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}navigate({
  path: '/dashboard-mobile/my-subview',
})
```

<div class="flex justify-center">
  <VPLink :href="navigate(navigateParams)" target="_self">
    在 Home Assistant 中导航
  </VPLink>
</div>

使用官方文档中的 `server` 查询参数来选择已配置的服务器：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}navigate({
  path: '/webcams',
  server: 'My home',
})
```

### 调用服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'callService' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}callService({
  service: 'device_tracker.see',
  params: {
    entity_id: 'device_tracker.entity',
  },
})
```

### 触发事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fireEvent' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}fireEvent({
  eventType: 'custom_event',
  params: {
    entity_id: 'MY_CUSTOM_EVENT',
  },
})
```

### 发送位置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sendLocation' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}sendLocation()
```

### 打开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}openTag({
  tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D',
})
```

Home Assistant 官方文档将标签记录为 `https://www.home-assistant.io/tag/<tag id>` 格式的 universal link。

### NFC Universal Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nfcUniversalLink' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}nfcUniversalLink({
  url: 'homeassistant://navigate/dashboard-mobile/my-subview',
})
```

Home Assistant 官方文档将旧式 universal link 格式记录为 `https://www.home-assistant.io/ios/nfc/?url=<a URL you could use with the existing URL handler>`。

## 生成的 URL

```ts
navigate(navigateParams)
// => 'homeassistant://navigate/dashboard-mobile/my-subview?server=My%20home'

callService({
  service: 'device_tracker.see',
  params: { entity_id: 'device_tracker.entity' },
})
// => 'homeassistant://call_service/device_tracker.see?entity_id=device_tracker.entity'

fireEvent({
  eventType: 'custom_event',
  params: { entity_id: 'MY_CUSTOM_EVENT' },
})
// => 'homeassistant://fire_event/custom_event?entity_id=MY_CUSTOM_EVENT'

sendLocation()
// => 'homeassistant://send_location/'

openTag({ tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D' })
// => 'https://www.home-assistant.io/tag/50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D'

nfcUniversalLink({ url: 'homeassistant://navigate/dashboard-mobile/my-subview' })
// => 'https://www.home-assistant.io/ios/nfc/?url=homeassistant%3A%2F%2Fnavigate%2Fdashboard-mobile%2Fmy-subview'
```

## 参考资料

- [Home Assistant URL Handler](https://companion.home-assistant.io/docs/integrations/url-handler/)
- [Home Assistant Universal Links, NFC 与 QR Tags](https://companion.home-assistant.io/docs/integrations/universal-links/)
