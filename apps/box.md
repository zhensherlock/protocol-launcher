---
url: /protocol-launcher/apps/box.md
---

# Box

[Box](https://www.box.com/) is a cloud file sharing and content management app. **Protocol Launcher** allows you to generate mobile links to open Box folders, files, and shared links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

Box's official mobile deep linking documentation lists deep links for folder, file, and shared-link objects in Box and Box for EMM. This module exposes only those documented forms.

### Open Folder

Generate the documented URL that opens a folder object in the Box mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openFolder({
  id: '123456789',
})
```

### Open File

Generate the documented URL that opens a file object in the Box mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openFile({
  id: '987654321',
})
```

### Open Shared Link

Generate the documented URL that opens a shared link in the Box mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSharedLink' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openSharedLink({
  url: 'https://app.box.com/s/shared-link-id',
})
```

### Open EMM Folder

Generate the documented URL that opens a folder object in Box for EMM.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmFolder' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmFolder({
  id: '123456789',
})
```

### Open EMM File

Generate the documented URL that opens a file object in Box for EMM.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmFile' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmFile({
  id: '987654321',
})
```

### Open EMM Shared Link

Generate the documented URL that opens a shared link in Box for EMM.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmSharedLink' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmSharedLink({
  url: 'https://app.box.com/s/shared-link-id',
})
```

## Generated URLs

```ts
openFolder({ id: '123456789' })
// => 'boxapp://folder?id=123456789'

openFile({ id: '987654321' })
// => 'boxapp://file?id=987654321'

openSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
// => 'boxapp://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'

openEmmFolder({ id: '123456789' })
// => 'boxemm://folder?id=123456789'

openEmmFile({ id: '987654321' })
// => 'boxemm://file?id=987654321'

openEmmSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
// => 'boxemm://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'
```

## Official Documentation

* [Box mobile deep linking](https://developer.box.com/guides/mobile/mobile-deep-linking/)
