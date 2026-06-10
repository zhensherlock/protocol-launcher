---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { launch, list, open, refresh, search } from 'protocol-launcher/truecontext';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/truecontext' : 'protocol-launcher');
</script>

# TrueContext

[TrueContext](https://www.truecontext.com/) 是一个移动表单和现场工作流平台。**Protocol Launcher** 可以生成它的官方 App-to-App URL。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

TrueContext 官方文档记录了 `truecontext://x-callback-url/action` 格式、可替代的 `tcxt://` scheme、继续支持的 `prontoforms://`，以及 HTTPS 替代格式 `https://prontofor.ms/x-callback-url/action`。此模块只暴露官方记录的 App-to-App 动作：`launch`、`refresh`、`list`、`open`、`send` 和 `search`。

使用 `answers` 对象传入派发值。对象 key 是 TrueContext 问题唯一 ID，Protocol Launcher 会同时 URL 编码 key 和 value。按照 TrueContext URL Encoding 页面，空格和特殊字符会被 percent-encoded，括号保持不编码。官方记录的 x-callback 参数对应 `xSuccess`、`xCancel` 和 `xError`。

## URL 方法

### Launch

生成官方记录的 `launch` 动作。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}launch()
```

<div class="flex justify-center">
  <VPLink :href="launch()" target="_self">
    启动 TrueContext
  </VPLink>
</div>

### Refresh

生成官方记录的 `refresh` 动作，用于启动应用并下载新的表单版本、数据源和派发记录。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}refresh()
```

<div class="flex justify-center">
  <VPLink :href="refresh()" target="_self">
    刷新 TrueContext
  </VPLink>
</div>

### List

显示指定应用区域，或按标签列出表单和资源。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'list' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}list({
  type: 'inbox',
})
```

<div class="flex justify-center">
  <VPLink :href="list({ type: 'inbox' })" target="_self">
    打开 TrueContext Inbox
  </VPLink>
</div>

### Open

打开表单、记录或资源。`answers` 对象会按照问题唯一 ID 将值派发到表单问题中。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}open({
  name: 'Universal Work Order',
  answers: {
    'Job - Type': 'Warranty',
    'Job - Work Order #': 1234567,
  },
  xSuccess: 'pftest://success',
  xCancel: 'pftest://cancel',
  xError: 'pftest://error',
})
```

<div class="flex justify-center">
  <VPLink :href="open({ name: 'asset list' })" target="_self">
    打开 TrueContext 表单
  </VPLink>
</div>

### Send

打开、填充并发送表单。TrueContext 官方文档说明此动作需要 `type` 和至少一个表单标识符。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'send' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}send({
  type: 'forms',
  formID: 99999999,
  answers: {
    ServiceType: 'Warranty',
  },
})
```

### Search

使用官方记录的文本、状态或日期筛选条件打开 TrueContext Mobile App Search 列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}search({
  stateFilter: 'AllIncomplete',
  dateSearchType: 'DatePeriod',
  datePeriod: 'ThisWeek',
})
```

<div class="flex justify-center">
  <VPLink :href="search({ searchText: 'asset list' })" target="_self">
    搜索 TrueContext 表单
  </VPLink>
</div>

## 生成的 URL

```ts
launch()
// => 'truecontext://x-callback-url/launch'

refresh()
// => 'truecontext://x-callback-url/refresh'

list({ type: 'inbox' })
// => 'truecontext://x-callback-url/list?type=inbox'

open({
  name: 'Universal Work Order',
  answers: { 'Job - Type': 'Warranty', 'Job - Work Order #': 1234567 },
})
// => 'truecontext://x-callback-url/open?name=Universal%20Work%20Order&Job%20-%20Type=Warranty&Job%20-%20Work%20Order%20%23=1234567'

send({ type: 'forms', formID: 99999999, answers: { ServiceType: 'Warranty' } })
// => 'truecontext://x-callback-url/send?type=forms&formID=99999999&ServiceType=Warranty'

search({ stateFilter: 'AllIncomplete', dateSearchType: 'DatePeriod', datePeriod: 'ThisWeek' })
// => 'truecontext://x-callback-url/search?stateFilter=AllIncomplete&dateSearchType=DatePeriod&datePeriod=ThisWeek'

launch({ scheme: 'tcxt' })
// => 'tcxt://x-callback-url/launch'

open({ format: 'web', name: 'asset list' })
// => 'https://prontofor.ms/x-callback-url/open?name=asset%20list'
```

## 官方文档

- [TrueContext App-to-App URL Scheme](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppURLScheme.htm)
- [App-to-App Actions](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActions.htm)
- [App-to-App Action Details](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm)
- [App-to-App x-callback parameters](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppXCallbackParams.htm)
- [Open a form and dispatch answers](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppCookbook/AppToApp_RecipeToOpenAndDispatch.htm)
