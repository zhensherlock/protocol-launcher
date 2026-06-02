---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/barcuts' : 'protocol-launcher');
</script>

# BarCuts

[BarCuts](https://docs.actions.work/barcuts/) is a macOS menu bar app for running Shortcuts workflows. **Protocol Launcher** allows you to generate BarCuts URL scheme links for querying available workflows and running local workflows.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

BarCuts documents `barcuts://workflows` for querying active and global workflows. The request can include `x-success` and `x-error`; on success, BarCuts calls the success URL with a `data` parameter containing the workflow list.

BarCuts also documents `barcuts://run-workflow` with either an `id` parameter or a `title` parameter. The optional `input` parameter passes text to the workflow. Protocol Launcher exposes only those documented URL shapes and parameters.

### Workflows

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workflows' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}workflows({
  xSuccess: 'my-app://success',
  xError: 'my-app://failure',
})
```

### Run Workflow By ID

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runWorkflowById' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
})
```

### Run Workflow By Title

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runWorkflowByTitle' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}runWorkflowByTitle({
  title: 'Workflow 1',
  input: 'My input text!',
})
```

## Generated URLs

```ts
workflows()
// => 'barcuts://workflows'

workflows({
  xSuccess: 'my-app://success',
  xError: 'my-app://failure',
})
// => 'barcuts://workflows?x-success=my-app%3A%2F%2Fsuccess&x-error=my-app%3A%2F%2Ffailure'

runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
})
// => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428'

runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
  input: 'My input text!',
})
// => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428&input=My%20input%20text%21'

runWorkflowByTitle({
  title: 'Workflow 1',
  input: 'My input text!',
})
// => 'barcuts://run-workflow?title=Workflow%201&input=My%20input%20text%21'
```

## Official Documentation

- [BarCuts URL Scheme: Active Workflows](https://docs.actions.work/barcuts/url-scheme/)
- [BarCuts URL Scheme: Run Workflow](https://docs.actions.work/barcuts/url-scheme-run-workflow/)
