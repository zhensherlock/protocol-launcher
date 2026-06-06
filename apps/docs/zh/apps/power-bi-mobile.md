---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openApp, openDashboard, openReport, openTile } from 'protocol-launcher/power-bi-mobile';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  dashboardWithWorkspaceParams,
  reportContextParams,
  reportPageParams,
  reportParams,
  tileParams,
} from '../../.vitepress/constants/power-bi-mobile';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/power-bi-mobile' : 'protocol-launcher');
</script>

# Power BI Mobile

[Power BI Mobile](https://powerbi.microsoft.com/mobile/) 是 Microsoft 的移动端应用，用于在手机和平板上查看 Power BI 内容。**Protocol Launcher** 允许你生成 Power BI Mobile URL scheme 链接。

## 使用

有两种方式使用这个库：

- 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
- 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

本模块只封装 Microsoft 文档中用于已安装 Power BI Mobile 设备的 `mspbi://app/` 移动端 deep-link 格式。Microsoft 还记录了单独的 redirect 和 report URL 格式；这些不属于这里的 `mspbi://` helpers。

对于不在 My Workspace 中的内容，传入 `groupObjectId`，生成的 URL 会包含 Microsoft 的 `GroupObjectId` 参数。Report bookmark 只记录支持标准 36 位 GUID 值；不支持 `BookmarkXXXXXXXXXXXXXXXXXXX` 形式。

### 打开 App

打开 Power BI Mobile。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openApp' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openApp()
```

<div class="flex justify-center">
  <VPLink :href="openApp()" target="_self">
    打开 Power BI Mobile
  </VPLink>
</div>

### 打开 Dashboard

通过 dashboard object ID 打开指定 dashboard。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDashboard' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openDashboard({
  dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

<div class="flex justify-center">
  <VPLink :href="openDashboard(dashboardWithWorkspaceParams)" target="_self">
    打开 Power BI Dashboard
  </VPLink>
</div>

### 打开 Tile

以 focus mode 打开 dashboard tile。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTile' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openTile({
  dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',
  tileObjectId: 'cccccccc-2222-3333-4444-dddddddddddd',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

<div class="flex justify-center">
  <VPLink :href="openTile(tileParams)" target="_self">
    打开 Power BI Tile
  </VPLink>
</div>

### 打开 Report

打开指定 report。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

<div class="flex justify-center">
  <VPLink :href="openReport(reportParams)" target="_self">
    打开 Power BI Report
  </VPLink>
</div>

### 打开 Report Page

打开指定 report page。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  reportPage: 'ReportSection11',
})
```

<div class="flex justify-center">
  <VPLink :href="openReport(reportPageParams)" target="_self">
    打开 Power BI Report Page
  </VPLink>
</div>

### 使用 Context 打开 Report

给 report deep link 添加 context 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  groupObjectId: 'eeeeeeee-4444-5555-6666-ffffffffffff',
  context: 'SlackDeepLink',
})
```

<div class="flex justify-center">
  <VPLink :href="openReport(reportContextParams)" target="_self">
    使用 Context 打开 Power BI Report
  </VPLink>
</div>

## 官方文档

- [Create a link to a specific location in the Power BI mobile apps](https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location)
