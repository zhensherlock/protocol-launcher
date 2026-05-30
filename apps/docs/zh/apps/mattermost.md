---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openChannel, openDirectMessage, openPost, openTeam } from 'protocol-launcher/mattermost';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openChannelParams,
  openDirectMessageParams,
  openPostParams,
  openTeamParams,
} from '../../.vitepress/constants/mattermost';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/mattermost' : 'protocol-launcher');
</script>

# Mattermost

[Mattermost](https://mattermost.com/) 是一款可自托管的团队协作平台。**Protocol Launcher** 允许你按照官方 `mattermost://` 格式生成 Mattermost 深度链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

Mattermost 官方文档列出了用于团队、频道、频道消息或讨论串、私信的 `mattermost://` 深度链接。`serverUrl` 对应官方格式中的 `<your-Mattermost-server-URL>` 片段。请使用你的 Mattermost 工作区中实际存在的团队名称、频道名称、帖子 ID 和用户名。

### 打开团队

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeam' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openTeam({
  serverUrl: '{{ openTeamParams.serverUrl }}',
  teamName: '{{ openTeamParams.teamName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openTeam(openTeamParams)" target="_self">
    打开 Mattermost 团队
  </VPLink>
</div>

### 打开频道

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannel' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openChannel({
  serverUrl: '{{ openChannelParams.serverUrl }}',
  teamName: '{{ openChannelParams.teamName }}',
  channelName: '{{ openChannelParams.channelName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openChannel(openChannelParams)" target="_self">
    打开 Mattermost 频道
  </VPLink>
</div>

### 打开频道消息或讨论串

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPost' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openPost({
  serverUrl: '{{ openPostParams.serverUrl }}',
  teamName: '{{ openPostParams.teamName }}',
  postId: '{{ openPostParams.postId }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openPost(openPostParams)" target="_self">
    打开 Mattermost 消息
  </VPLink>
</div>

### 打开私信

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDirectMessage' : 'mattermost' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mattermost.'}}openDirectMessage({
  serverUrl: '{{ openDirectMessageParams.serverUrl }}',
  teamName: '{{ openDirectMessageParams.teamName }}',
  userName: '{{ openDirectMessageParams.userName }}',
})
```

<div class="flex justify-center">
  <VPLink :href="openDirectMessage(openDirectMessageParams)" target="_self">
    打开 Mattermost 私信
  </VPLink>
</div>

## 官方文档

- [Mattermost Deep Links](https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links)
