---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import {
  open,
  branches,
  chain,
  checkout,
  clone,
  commit,
  deleteBranch,
  fetch,
  importLog,
  init,
  log,
  merge,
  move,
  openScreen,
  pull,
  push,
  read,
  repos,
  show,
  sshCommand,
  status,
  webdav,
  write,
  zip,
} from 'protocol-launcher/working-copy'
import { SelectInstallationMethod } from '../../.vitepress/components'
import * as constants from '../../.vitepress/constants/working-copy'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/working-copy' : 'protocol-launcher',
)
</script>

# Working Copy

[Working Copy](https://workingcopyapp.com/) is a powerful Git client for iOS that clones, edits, commits, pushes and more. **Protocol Launcher** allows you to generate deep links to perform Git operations in Working Copy.

## Usage

There are two ways to use this library:

- **On-Demand** import from subpaths enables tree-shaking and keeps bundles small.
- **Full Import** from the root package is convenient but includes all app modules.

Pick **On-Demand** for production builds; **Full Import** is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Simple Commands

### Open

Open Working Copy app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Working Copy
  </VPLink>
</div>

### Clone

Ask Working Copy to open the clone dialog with a specific URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clone' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}clone({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

<div class="flex justify-center">
  <VPLink :href="clone(constants.cloneParams)" target="_self">
    Clone Repository
  </VPLink>
</div>

### Show

Show a remote repository inside Working Copy, cloning as needed.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}show({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

<div class="flex justify-center">
  <VPLink :href="show(constants.showParams)" target="_self">
    Show Repository
  </VPLink>
</div>

### Open Screen

Open Working Copy at a specific screen.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScreen' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}openScreen({
  repo: 'my project',
  path: 'README.md',
  mode: 'content',
})
```

<div class="flex justify-center">
  <VPLink :href="openScreen(constants.openScreenParams)" target="_self">
    Open Screen
  </VPLink>
</div>

### Import Log

Import and show log files in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importLog' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}importLog({
  lines: 'first line\nsecond line',
})
```

<div class="flex justify-center">
  <VPLink :href="importLog(constants.importLogParams)" target="_self">
    Import Log
  </VPLink>
</div>

## X-Callback-URL Commands

### Checkout

Checkout (switch) branch in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'checkout' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}checkout({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

<div class="flex justify-center">
  <VPLink :href="checkout(constants.checkoutParams)" target="_self">
    Checkout Branch
  </VPLink>
</div>

### Commit

Commit changes in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commit' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}commit({
  key: '123ABC',
  repo: 'my repo',
  path: '',
  limit: 999,
  message: 'fix',
})
```

<div class="flex justify-center">
  <VPLink :href="commit(constants.commitParams)" target="_self">
    Commit Changes
  </VPLink>
</div>

### Push

Push commits to remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'push' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}push({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="push(constants.pushParams)" target="_self">
    Push Commits
  </VPLink>
</div>

### Pull

Pull (fetch and merge) from remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pull' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}pull({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="pull(constants.pullParams)" target="_self">
    Pull Changes
  </VPLink>
</div>

### Fetch

Fetch from remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fetch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}fetch({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="fetch(constants.fetchParams)" target="_self">
    Fetch Remote
  </VPLink>
</div>

### Status

List file status in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'status' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}status({
  key: '123ABC',
  repo: 'my repo',
  unchanged: true,
})
```

<div class="flex justify-center">
  <VPLink :href="status(constants.statusParams)" target="_self">
    Check Status
  </VPLink>
</div>

### Log

Get commit log from Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}log({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="log(constants.logParams)" target="_self">
    View Commit Log
  </VPLink>
</div>

### Branches

List all local and remote branches in a repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'branches' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}branches({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="branches(constants.branchesParams)" target="_self">
    List Branches
  </VPLink>
</div>

### Merge

Merge branches in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'merge' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}merge({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

<div class="flex justify-center">
  <VPLink :href="merge(constants.mergeParams)" target="_self">
    Merge Branch
  </VPLink>
</div>

### Delete Branch

Delete a branch in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteBranch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}deleteBranch({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

<div class="flex justify-center">
  <VPLink :href="deleteBranch(constants.deleteBranchParams)" target="_self">
    Delete Branch
  </VPLink>
</div>

### Init

Initialize a new empty repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'init' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}init({
  key: '123ABC',
  name: 'new repository',
})
```

<div class="flex justify-center">
  <VPLink :href="init(constants.initParams)" target="_self">
    Init Repository
  </VPLink>
</div>

### Repos

List all repositories in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'repos' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}repos({
  key: '123ABC',
})
```

<div class="flex justify-center">
  <VPLink :href="repos(constants.reposParams)" target="_self">
    List Repositories
  </VPLink>
</div>

### Move

Move or rename files within a repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'move' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}move({
  key: '123ABC',
  repo: 'my repo',
  source: 'from.txt',
  destination: 'to.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="move(constants.moveParams)" target="_self">
    Move File
  </VPLink>
</div>

### Read

Read contents of text files from Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}read({
  key: '123ABC',
  xSuccess: 'app://x-callback-url/read?text=',
  repo: 'my repo',
  path: 'README.md',
})
```

<div class="flex justify-center">
  <VPLink :href="read(constants.readParams)" target="_self">
    Read File
  </VPLink>
</div>

### Write

Write to existing or new files in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'write' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}write({
  key: '123ABC',
  repo: 'my repo',
  path: 'README.md',
  text: 'hello there',
})
```

<div class="flex justify-center">
  <VPLink :href="write(constants.writeParams)" target="_self">
    Write File
  </VPLink>
</div>

### Zip

Archive multiple files as a base64-coded zip.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'zip' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}zip({
  key: '123ABC',
  xSuccess: 'my-app://x-callback-url/read?path=/',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="zip(constants.zipParams)" target="_self">
    Create Zip Archive
  </VPLink>
</div>

### SSH Command

Run secure shell command on remote server.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sshCommand' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}sshCommand({
  key: '123ABC',
  server: 'remote.server.net',
  cmd: 'run tests',
})
```

<div class="flex justify-center">
  <VPLink :href="sshCommand(constants.sshCommandParams)" target="_self">
    Run SSH Command
  </VPLink>
</div>

### WebDAV

Start or stop the internal WebDAV server.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webdav' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}webdav({
  key: '123ABC',
  cmd: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="webdav(constants.webdavParams)" target="_self">
    Toggle WebDAV
  </VPLink>
</div>

### Chain

Chain multiple x-callback-url commands together.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chain' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}chain({
  key: '123ABC',
  repo: 'my repo',
  commands: [
    { command: 'commit', params: { message: 'fix' } },
    { command: 'push' },
  ],
})
```

<div class="flex justify-center">
  <VPLink :href="chain(constants.chainParams)" target="_self">
    Chain Commands
  </VPLink>
</div>
