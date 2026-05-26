---
url: /protocol-launcher/apps/pythonista.md
---

# Pythonista

[Pythonista](https://omz-software.com/pythonista/) is a Python development environment for iOS. **Protocol Launcher** allows you to generate deep links to open Pythonista, edit or run scripts, pass command-line arguments, select the Python interpreter version, and execute embedded code.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open()
```

### Open Pythonista 3

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista3',
})
```

### Open Pythonista 2

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista2',
})
```

### Open Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
})
```

### Open iCloud Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

### Open iCloud Script by Path

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'iCloud/MyScript.py',
})
```

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
})
```

### Run iCloud Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

### Run Script with args

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  args: 'foo bar',
})
```

### Run Script with argv

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  argv: ['foo', 'bar'],
})
```

### Run Script with version

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  version: 3,
})
```

### Run Script with py

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  py: 3,
})
```

### Execute Code

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exec' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}exec({
  code: 'print("Hello from Pythonista")',
})
```
