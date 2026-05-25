---
url: /protocol-launcher/apps/tower.md
---

# Tower

[Tower](https://www.git-tower.com/mac/) is a Git client for Mac and Windows. **Protocol Launcher** allows you to generate Tower's documented custom URL scheme to open Tower and offer to clone a remote repository.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Repository

Tower documents this URL format as `gittower://openRepo/<remote-repository-URL>`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'tower' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tower.'}}openRepo({
  remoteRepositoryUrl: 'git@example.beanstalkapp.com:/project.git',
})
```
