---
url: /protocol-launcher/guide/getting-started.md
---

# Getting Started

## Installation

Install `protocol-launcher` using your preferred package manager:

::: code-group

```sh [npm]
$ npm install protocol-launcher
```

```sh [pnpm]
$ pnpm add protocol-launcher
```

```sh [yarn]
$ yarn add protocol-launcher
```

```bash [bun]
$ bun add protocol-launcher
```

:::

## Usage

### Tree Shaking (Recommended)

To minimize bundle size, import specific modules directly:

::: code-group

```typescript [cherry studio]
// Only imports Cherry Studio related code
import { installMCP, installProvider } from 'protocol-launcher/cherry-studio'
```

```typescript [cursor]
// Only imports Cursor related code
import { installMCP } from 'protocol-launcher/cursor'
```

:::

### Full Import

You can also import everything from the root package, but this will include all application modules and does not support tree-shaking:

```typescript
import { cherryStudio, cursor } from 'protocol-launcher'
```

For detailed usage instructions for each application, please refer to their respective guides:

* [Cherry Studio](../apps/cherry-studio.md)
* [Cursor](../apps/cursor.md)
* [Thunder](../apps/thunder.md)
