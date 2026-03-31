---
url: /protocol-launcher/apps/working-copy.md
---

# Working Copy

[Working Copy](https://workingcopyapp.com/) is a powerful Git client for iOS that clones, edits, commits, pushes and more. **Protocol Launcher** allows you to generate deep links to perform Git operations in Working Copy.

## Usage

There are two ways to use this library:

* **On-Demand** import from subpaths enables tree-shaking and keeps bundles small.
* **Full Import** from the root package is convenient but includes all app modules.

Pick **On-Demand** for production builds; **Full Import** is fine for quick scripts or demos.

## Simple Commands

### Open

Open Working Copy app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}open()
```

### Clone

Ask Working Copy to open the clone dialog with a specific URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clone' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}clone({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

### Show

Show a remote repository inside Working Copy, cloning as needed.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}show({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

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

### Import Log

Import and show log files in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importLog' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}importLog({
  lines: 'first line\nsecond line',
})
```

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

### Push

Push commits to remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'push' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}push({
  key: '123ABC',
  repo: 'my repo',
})
```

### Pull

Pull (fetch and merge) from remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pull' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}pull({
  key: '123ABC',
  repo: 'my repo',
})
```

### Fetch

Fetch from remote repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fetch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}fetch({
  key: '123ABC',
  repo: 'my repo',
})
```

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

### Log

Get commit log from Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}log({
  key: '123ABC',
  repo: 'my repo',
})
```

### Branches

List all local and remote branches in a repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'branches' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}branches({
  key: '123ABC',
  repo: 'my repo',
})
```

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

### Init

Initialize a new empty repository.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'init' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}init({
  key: '123ABC',
  name: 'new repository',
})
```

### Repos

List all repositories in Working Copy.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'repos' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}repos({
  key: '123ABC',
})
```

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

### WebDAV

Start or stop the internal WebDAV server.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webdav' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}webdav({
  key: '123ABC',
  cmd: 'start',
})
```

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
