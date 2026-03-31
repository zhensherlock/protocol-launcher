---
url: /protocol-launcher/apps/shopi.md
---

# Shopi

[Shopi](http://sapient-pair.com/shopi/) is a clever shopping list app for iPhone that's focused on helping you capture and shop for the items you want to buy. **Protocol Launcher** allows you to generate deep links to add items, create lists, and manage your shopping lists in Shopi.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Show Lists

Show all shopping lists in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLists' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showLists()
```

### Show List

Show a specific shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showList({
  name: 'groceries',
})
```

### Create List

Create a new shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}createList({
  name: 'weekly shopping',
})
```

### Add Item

Add an item to a shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addItem' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}addItem({
  list: 'groceries',
  name: 'milk',
  amount: '2',
})
```

### Clear List

Clear items from a shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clearList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}clearList({
  name: 'groceries',
  crossedOnly: 'yes',
})
```
