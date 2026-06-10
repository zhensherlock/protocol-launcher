---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { downloadFile, editRecord, followUser, objectHome, viewRecord } from 'protocol-launcher/salesforce-mobile';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  editRecordParams,
  fileParams,
  followUserParams,
  objectHomeParams,
  recordParams,
  recordWithContextParams,
} from '../../.vitepress/constants/salesforce-mobile';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/salesforce-mobile' : 'protocol-launcher');
</script>

# Salesforce Mobile

[Salesforce Mobile](https://www.salesforce.com/mobile/) 是 Salesforce 的移动端 CRM 应用。**Protocol Launcher** 允许你生成 Salesforce Mobile URL scheme 链接。

## 使用

有两种方式使用这个库：

- 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
- 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

本模块只封装 Salesforce Help 官方文档记录的 Salesforce Mobile app URL scheme 格式：用于记录、文件和用户操作的 `salesforce1://sObject/<id>/<action>`，以及用于对象首页的 `salesforce1://sObject/<ObjectName>/home`。

本模块不会生成通用 Salesforce HTTPS 记录 URL，也不会生成旧的 `com.salesforce.salesforce1://entity/...` 变体。Salesforce 文档记录了 15 或 18 位记录 ID、用于 ContentDocument 和 ContentDocumentVersion 对象的 `download`、用于 User 记录的 `follow`，以及名为 `s1oid`、`s1nid`、`s1uid` 和 `iosoru` 的可选查询参数。

## URL 方法

### 查看记录

在 Salesforce mobile app 中打开 Salesforce 记录详情页。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}viewRecord({
  id: '001D000000Jwj9v',
})
```

<div class="flex justify-center">
  <VPLink :href="viewRecord(recordParams)" target="_self">
    打开 Salesforce 记录
  </VPLink>
</div>

### 编辑记录

在 Salesforce mobile app 中打开 Salesforce 记录编辑页。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}editRecord({
  id: '006R0000001r7Rq',
})
```

### 对象首页

在 Salesforce mobile app 中打开 Salesforce 对象首页。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'objectHome' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}objectHome({
  objectName: 'Account',
})
```

<div class="flex justify-center">
  <VPLink :href="objectHome(objectHomeParams)" target="_self">
    打开 Salesforce 对象首页
  </VPLink>
</div>

### 下载文件

生成官方记录的文件下载 URL scheme。Salesforce 文档将此动作限定在 ContentDocument 和 ContentDocumentVersion 对象上，并说明 Android 只会打开文件，不会离线保存。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadFile' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}downloadFile({
  id: '069R00000000mr3',
})
```

### 关注用户

关注用户并导航到该用户的个人资料页。`userid` 字段会序列化为 Salesforce 官方记录的 `userid` 查询参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'followUser' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}followUser({
  id: '005R0000000Df5W',
  userid: '005R0000000HfcF',
})
```

### 附加查询参数

当用户可能属于多个组织或 Experience Cloud 站点时，可以添加 Salesforce 官方记录的可选跳转上下文。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}viewRecord({
  id: '001D000000Jwj9v',
  s1oid: '00DT00000000ABC',
})
```

## 生成的 URL

```ts
viewRecord(recordParams)
// => 'salesforce1://sObject/001D000000Jwj9v/view'

editRecord(editRecordParams)
// => 'salesforce1://sObject/006R0000001r7Rq/edit'

objectHome(objectHomeParams)
// => 'salesforce1://sObject/Account/home'

downloadFile(fileParams)
// => 'salesforce1://sObject/069R00000000mr3/download'

followUser(followUserParams)
// => 'salesforce1://sObject/005R0000000Df5W/follow?userid=005R0000000HfcF'

viewRecord(recordWithContextParams)
// => 'salesforce1://sObject/001D000000Jwj9v/view?s1oid=00DT00000000ABC'
```

## 官方文档

- [Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&language=en_US&type=5)
- [Salesforce App URL Scheme Format](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5)
- [Additional Query Parameters](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_query_additional.htm&language=en_US&type=5)
