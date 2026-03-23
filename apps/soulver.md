---
url: /protocol-launcher/apps/soulver.md
---

# Soulver

[Soulver](https://soulver.app/) is a **natural language** notepad calculator app for the Mac, iPad & iPhone. **Protocol Launcher** allows you to generate deep links to create documents, evaluate expressions, and append lines in Soulver.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Soulver

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}open()
```

### Create Document

Create a new document and evaluate an expression in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}create({
  expression: '$3k earnings / 5 people',
})
```

### Calculate to Clipboard

Evaluate an expression and copy the result to clipboard.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calculate' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}calculate({
  expression: 'lunch was $55 + 25% tip',
  toClipboard: true,
})
```

### Append Line

Append an expression to a specific sheet in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendLine' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}appendLine({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
  expression: '$500 in EUR',
})
```

### Open Sheet

Open a specific sheet in Soulver.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSheet' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}openSheet({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
})
```
