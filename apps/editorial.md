---
url: /protocol-launcher/apps/editorial.md
---

# Editorial

[Editorial](https://omz-software.com/editorial/) is a powerful text editor and automation app for iOS and iPadOS. It features a Python-based scripting environment and workflow automation capabilities. **Protocol Launcher** allows you to generate deep links to open files, create new documents, run workflows, and open web pages in Editorial.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Editorial

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'back' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}back()
```

### Open Existing File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
})
```

### Open File from Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  root: 'dropbox',
})
```

### Open File with Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  selection: '0-10',
})
```

### Open File with Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  command: 'My Workflow',
})
```

### Create New File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
})
```

### Create New File in Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  root: 'dropbox',
})
```

### Create New File with Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  selection: '0-10',
})
```

### Create New File with Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  command: 'My Workflow',
})
```

### Open Web Page (HTTP)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'http://apple.com',
})
```

### Open Web Page (HTTPS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'https://google.com',
})
```

### Run Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
})
```

### Run Workflow with Input

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  input: 'some input',
})
```

### Run Workflow with Success Callback

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  xSuccess: 'myapp://success',
})
```
