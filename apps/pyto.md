---
url: /protocol-launcher/apps/pyto.md
---

# Pyto

[Pyto](https://pyto.readthedocs.io/) is an open source app to code and run Python code locally on an iPad or iPhone. **Protocol Launcher** allows you to generate deep links to run Python code in Pyto using x-callback URLs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}open()
```

### Run Code

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
})
```

### Run Code with Callback

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
  xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
})
```
