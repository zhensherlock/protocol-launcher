---
url: /protocol-launcher/apps/codehub.md
---

# CodeHub

[CodeHub](https://github.com/CodeHubApp/CodeHub) is the best way to browse and maintain your GitHub repositories on iPhone, iPod Touch, and iPad. **Protocol Launcher** allows you to generate deep links to open CodeHub and create GitHub Gists.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}open()
```

### Create Gist

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGist' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}createGist({
  description: 'Hello from Protocol Launcher',
  public: true,
  files: {
    'hello.txt': 'Hello, World!',
    'codehub.txt': 'CodeHub is awesome!',
  },
})
```
