---
url: /protocol-launcher/apps/apple-script.md
---

# Apple Script Editor

AppleScript is a scripting language created by Apple that allows you to control scriptable macOS applications and parts of the operating system itself. You can write scripts to automate repetitive tasks, combine features from different applications, and build complex workflows. **Protocol Launcher** provides utilities to generate and execute AppleScripts.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Apple Script Editor

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}open()
```

### Add Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}addScript({
  script: 'display dialog "Hello, World!"'
})
```
