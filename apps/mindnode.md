---
url: /protocol-launcher/apps/mindnode.md
---

# MindNode

[MindNode](https://www.mindnode.com/) is a mind-mapping app. **Protocol Launcher** allows you to generate MindNode URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

MindNode's official URL scheme documentation lists `mindnode://open?name=YourDocument` for opening files in the MindNode iCloud container. This module only implements that documented URL format.

### Open Document

Open a document by name from the MindNode iCloud container.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'mindnode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mindnode.'}}openDocument({
  name: 'YourDocument',
})
```

## Generated URLs

```ts
openDocument({ name: 'YourDocument' })
// => 'mindnode://open?name=YourDocument'
```

## Official Documentation

* [Improving Integrations with Things and Sharing Providers](https://www.mindnode.com/blog/improving-integrations)
