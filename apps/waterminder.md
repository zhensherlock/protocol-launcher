---
url: /protocol-launcher/apps/waterminder.md
---

# WaterMinder

[WaterMinder](https://waterminder.com) is the leading hydration tracking app trusted by millions worldwide. **Protocol Launcher** allows you to generate deep links to log water intake, caffeine, and other beverages in WaterMinder.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}open()
```

### Add Water

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
})
```

### Add Water with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
  time: '22/01/2026T13:17',
})
```

### Add Caffeine

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
})
```

### Add Caffeine with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
  time: '09/04/2026T13:17',
})
```

### Add Other Drink

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 250,
  type: 'carbonated_water',
})
```

### Add Other Drink with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 200,
  type: 'coffee',
  time: '09/04/2026T13:17',
})
```

### Log Cup

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 250,
  cupName: 'my mug',
})
```

### Log Cup with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 300,
  cupName: 'Morning Glass',
  time: '22/01/2026T08:00',
})
```
