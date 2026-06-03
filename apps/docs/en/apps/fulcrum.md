---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  createWebRecord,
  editRecord,
  editRecordAction,
  editWebRecord,
  newRecord,
  newRecordAction,
  open,
  openWebForm,
  openWebRecord,
} from 'protocol-launcher/fulcrum';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  editRecordActionParams,
  editRecordParams,
  newRecordActionParams,
  newRecordParams,
  openParams,
  openWebFormParams,
  openWebRecordParams,
} from '../../.vitepress/constants/fulcrum';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/fulcrum' : 'protocol-launcher');
</script>

# Fulcrum

[Fulcrum](https://www.fulcrumapp.com/) is a field data collection app for mobile forms and records. **Protocol Launcher** allows you to generate Fulcrum URL action links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Scheme

Fulcrum documents the mobile custom scheme `fulcrumapp://` with the actions `open`, `new-record`, and `edit-record`. The documented mobile parameters are `form_id` for opening, `form_id`, `project_id`, `status`, `latitude`, `longitude`, and data-name attributes for new records, and `record_id`, `project_id`, `status`, `latitude`, `longitude`, and data-name attributes for edits.

Fulcrum also documents web links for forms and records: `https://web.fulcrumapp.com/dash/{form_id}`, `https://web.fulcrumapp.com/records/new`, `https://web.fulcrumapp.com/records/{record_id}`, and `https://web.fulcrumapp.com/records/{record_id}?mode=edit`. The documented Android/iOS compatibility redirect examples are `https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz` and `https://web.fulcrumapp.com/action/#edit-record?record_id=xyz-123`.

### Open

Launch Fulcrum mobile and optionally open a form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}open({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open Fulcrum
  </VPLink>
</div>

### New Record

Create a new mobile record. Custom field values are passed as Fulcrum data-name attributes.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}newRecord({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'My Awesome Building',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
})
```

<div class="flex justify-center">
  <VPLink :href="newRecord(newRecordParams)" target="_self">
    Create Mobile Record
  </VPLink>
</div>

### Edit Record

Edit an existing mobile record by record ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'SNI',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
})
```

<div class="flex justify-center">
  <VPLink :href="editRecord(editRecordParams)" target="_self">
    Edit Mobile Record
  </VPLink>
</div>

### Open Web Form

Open a form in the Fulcrum web app. The documented `mode` values are `map`, `split`, and `table`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebForm' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}openWebForm({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  mode: 'split',
})
```

<div class="flex justify-center">
  <VPLink :href="openWebForm(openWebFormParams)" target="_self">
    Open Web Form
  </VPLink>
</div>

### Create Web Record

Open the Fulcrum web app page for creating a record.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}createWebRecord()
```

<div class="flex justify-center">
  <VPLink :href="createWebRecord()" target="_self">
    Create Web Record
  </VPLink>
</div>

### Open Web Record

Open an existing record in the Fulcrum web app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}openWebRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
})
```

<div class="flex justify-center">
  <VPLink :href="openWebRecord(openWebRecordParams)" target="_self">
    Open Web Record
  </VPLink>
</div>

### Edit Web Record

Open an existing record in web edit mode.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editWebRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
})
```

<div class="flex justify-center">
  <VPLink :href="editWebRecord(openWebRecordParams)" target="_self">
    Edit Web Record
  </VPLink>
</div>

### New Record Action

Create Fulcrum's documented web action redirect URL for a new mobile record. The official redirect example only specifies `form_id`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newRecordAction' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}newRecordAction({
  formId: '123-xyz',
})
```

<div class="flex justify-center">
  <VPLink :href="newRecordAction(newRecordActionParams)" target="_self">
    Create Redirect Action
  </VPLink>
</div>

### Edit Record Action

Create Fulcrum's documented web action redirect URL for editing a mobile record. The official redirect example only specifies `record_id`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecordAction' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editRecordAction({
  recordId: 'xyz-123',
})
```

<div class="flex justify-center">
  <VPLink :href="editRecordAction(editRecordActionParams)" target="_self">
    Edit Redirect Action
  </VPLink>
</div>

## Generated URLs

```ts
open({ formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24' })
// => 'fulcrumapp://open?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24'

newRecord({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  attributes: { number_of_floors: 3, sq_footage: 2300 },
})
// => 'fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&number_of_floors=3&sq_footage=2300'

editWebRecord({ recordId: '11fb2a54-5158-4848-8695-c405c54525e4' })
// => 'https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4?mode=edit'

newRecordAction({ formId: '123-xyz' })
// => 'https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz'
```

## Official Documentation

- [Fulcrum URL Actions](https://docs.fulcrumapp.com/docs/url-actions)
