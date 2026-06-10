---
url: /protocol-launcher/apps/spark.md
---

# Spark Mail

[Spark Mail](https://sparkmailapp.com/) is an email client. **Protocol Launcher** allows you to open official Spark Desktop Deep Links copied from Spark.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

Spark's official Deep Links documentation only publishes creator-only copied email links in the `readdle-spark://bl=` format. This module exposes only that documented format, and it accepts the full copied Deep Link without trying to rebuild or reinterpret Spark's private link payload.

### Open Deep Link

Open a Spark Desktop Deep Link copied from Spark with **Copy Deep Link**.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDeepLink' : 'spark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spark.'}}openDeepLink({
  url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
})
```

## Generated URLs

```ts
openDeepLink({
  url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
})
// => 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE'
```

## Official Documentation

* [Streamline your workflow with Deep Links on desktop](https://sparkmailapp.com/help/tips-tricks/streamline-your-workflow-with-deep-links)
