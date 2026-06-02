---
url: /protocol-launcher/apps/choosy.md
---

# Choosy

[Choosy](https://choosy.app/) is a browser chooser for macOS. **Protocol Launcher** allows you to generate URLs that open web links with Choosy.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module follows Choosy's official [API documentation](https://choosy.app/api), where a URL is shaped as `x-choosy://api-method/web-url`.

The built-in helpers only cover the official API methods documented by Choosy: `open`, `prompt.all`, `prompt.running`, `best.all`, and `best.running`. Choosy also documents user-defined custom API methods, so `customApiMethod` accepts the method name configured in your Choosy rules.

### Open

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}open({
  url: 'https://example.com',
})
```

### Prompt All

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'promptAll' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}promptAll({
  url: 'https://www.georgebrock.com',
})
```

### Prompt Running

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'promptRunning' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}promptRunning({
  url: 'https://example.com',
})
```

### Best All

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'bestAll' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}bestAll({
  url: 'https://example.com',
})
```

### Best Running

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'bestRunning' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}bestRunning({
  url: 'https://example.com',
})
```

### Custom API Method

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customApiMethod' : 'choosy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'choosy.'}}customApiMethod({
  method: 'edit',
  url: 'https://www.example.com',
})
```

## Official Documentation

* [Choosy API](https://choosy.app/api)
* [Choosy custom API methods](https://choosy.app/help/settings/rules/customapi)
