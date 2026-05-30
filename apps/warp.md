---
url: /protocol-launcher/apps/warp.md
---

# Warp

[Warp](https://www.warp.dev/) is a modern terminal for developers. **Protocol Launcher** allows you to generate deep links to open new Warp windows, tabs, Launch Configurations, and Tab Configs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open New Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newWindow' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newWindow({
  path: 'path_to_folder',
})
```

### Open New Tab

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
})
```

### Open Launch Configuration

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchConfiguration' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}launchConfiguration({
  path: 'launch_configuration_path',
})
```

### Open Tab Config

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tabConfig' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}tabConfig({
  name: 'my_tab',
  newWindow: true,
})
```

### Warp Preview

Warp's official URI scheme documentation says Warp Preview uses the `warppreview://` scheme. Pass `scheme: 'warppreview'` to target Warp Preview with the same helpers.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
  scheme: 'warppreview',
})
```

[Official Warp URI Scheme documentation](https://docs.warp.dev/terminal/more-features/uri-scheme)
