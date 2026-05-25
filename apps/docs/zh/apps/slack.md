---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  appRedirect,
  channelRedirect,
  open,
  openApp,
  openChannel,
  openFile,
  openUser,
  shareFile,
} from 'protocol-launcher/slack';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  appRedirectParams,
  channelRedirectParams,
  openAppParams,
  openChannelParams,
  openFileParams,
  openParams,
  openUserParams,
  shareFileParams,
} from '../../.vitepress/constants/slack';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/slack' : 'protocol-launcher');
</script>

# Slack

[Slack](https://slack.com/) 是一款面向团队沟通、频道、消息、文件和应用的协作平台。**Protocol Launcher** 允许您生成深度链接，用于打开 Slack 工作区、频道、用户、应用和文件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

Slack 的 `slack://` URI 模板使用工作区、频道、用户、应用和文件的 Slack ID。它们不支持工作区子域名、频道名称、用户名或文件名。如果需要使用官方支持的频道名称跳转形式，请使用 Slack 的 `app_redirect` URL。

### 打开 Slack

打开 Slack 原生客户端。传入 `team` 时会切换到指定工作区。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}open({
  team: '{{ openParams.team }}',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    打开 Slack
  </VPLink>
</div>

### 应用重定向

生成 Slack `app_redirect` URL，用于打开与应用或机器人的私信。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appRedirect' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}appRedirect({
  app: '{{ appRedirectParams.app }}',
  team: '{{ appRedirectParams.team }}',
})
```

<div class="flex justify-center">
  <VPLink :href="appRedirect(appRedirectParams)" target="_self">
    打开 Slack 应用重定向
  </VPLink>
</div>

### 频道重定向

生成 Slack `app_redirect` URL，用于通过频道 ID 或频道名称打开频道。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'channelRedirect' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}channelRedirect({
  channel: '{{ channelRedirectParams.channel }}',
  team: '{{ channelRedirectParams.team }}',
})
```

<div class="flex justify-center">
  <VPLink :href="channelRedirect(channelRedirectParams)" target="_self">
    打开 Slack 频道重定向
  </VPLink>
</div>

### 打开 App Home

通过工作区 ID 和应用 ID 打开 Slack App Home。可选的 `tab` 值为 `home`、`about` 或 `messages`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openApp' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openApp({
  team: '{{ openAppParams.team }}',
  id: '{{ openAppParams.id }}',
  tab: '{{ openAppParams.tab }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openApp(openAppParams)" target="_self">
    打开 Slack App Home
  </VPLink>
</div>

### 打开频道

通过工作区 ID 和频道 ID 打开 Slack 频道。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannel' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openChannel({
  team: '{{ openChannelParams.team }}',
  id: '{{ openChannelParams.id }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openChannel(openChannelParams)" target="_self">
    打开 Slack 频道
  </VPLink>
</div>

### 打开私信

通过工作区 ID 和用户 ID 打开与 Slack 用户的私信。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUser' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openUser({
  team: '{{ openUserParams.team }}',
  id: '{{ openUserParams.id }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openUser(openUserParams)" target="_self">
    打开 Slack 私信
  </VPLink>
</div>

### 打开文件

通过工作区 ID 和文件 ID 打开 Slack 文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openFile({
  team: '{{ openFileParams.team }}',
  id: '{{ openFileParams.id }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    打开 Slack 文件
  </VPLink>
</div>

### 分享文件

通过工作区 ID 和文件 ID 打开 Slack 文件分享对话框。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareFile' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}shareFile({
  team: '{{ shareFileParams.team }}',
  id: '{{ shareFileParams.id }}',
})
```

<div class="flex justify-center">
  <VPLink :href="shareFile(shareFileParams)" target="_self">
    分享 Slack 文件
  </VPLink>
</div>

## 官方文档

- [Slack Deep Linking](https://docs.slack.dev/interactivity/deep-linking/)
