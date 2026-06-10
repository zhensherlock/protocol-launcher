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

[Salesforce Mobile](https://www.salesforce.com/mobile/) is Salesforce's mobile CRM app. **Protocol Launcher** allows you to generate Salesforce Mobile URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only wraps the Salesforce Mobile app URL scheme formats documented by Salesforce Help: `salesforce1://sObject/<id>/<action>` for record, file, and user actions, and `salesforce1://sObject/<ObjectName>/home` for object home pages.

It does not generate generic Salesforce HTTPS record URLs or older `com.salesforce.salesforce1://entity/...` variants. Salesforce documents 15- and 18-character record IDs, `download` for ContentDocument and ContentDocumentVersion objects, `follow` for User records, and optional query parameters named `s1oid`, `s1nid`, `s1uid`, and `iosoru`.

## URL Methods

### View Record

Open a Salesforce record detail page in the Salesforce mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}viewRecord({
  id: '001D000000Jwj9v',
})
```

<div class="flex justify-center">
  <VPLink :href="viewRecord(recordParams)" target="_self">
    Open Salesforce Record
  </VPLink>
</div>

### Edit Record

Open a Salesforce record edit page in the Salesforce mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}editRecord({
  id: '006R0000001r7Rq',
})
```

### Object Home

Open a Salesforce object home page in the Salesforce mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'objectHome' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}objectHome({
  objectName: 'Account',
})
```

<div class="flex justify-center">
  <VPLink :href="objectHome(objectHomeParams)" target="_self">
    Open Salesforce Object Home
  </VPLink>
</div>

### Download File

Use the documented file download URL scheme. Salesforce documents this action for ContentDocument and ContentDocumentVersion objects, and notes that on Android it opens the file but doesn't save it offline.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadFile' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}downloadFile({
  id: '069R00000000mr3',
})
```

### Follow User

Follow a user and navigate to the user's profile page in the Salesforce mobile app. The `userid` field is serialized as Salesforce's documented `userid` query parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'followUser' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}followUser({
  id: '005R0000000Df5W',
  userid: '005R0000000HfcF',
})
```

### Additional Query Parameters

Add the optional Salesforce redirect context when users can belong to multiple orgs or Experience Cloud sites.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewRecord' : 'salesforceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'salesforceMobile.'}}viewRecord({
  id: '001D000000Jwj9v',
  s1oid: '00DT00000000ABC',
})
```

## Generated URLs

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

## Official Documentation

- [Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&language=en_US&type=5)
- [Salesforce App URL Scheme Format](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5)
- [Additional Query Parameters](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_query_additional.htm&language=en_US&type=5)
