---
url: /protocol-launcher/apps/alter.md
---

# Alter

[Alter](https://alterhq.com/) is a macOS AI automation app. **Protocol Launcher** allows you to generate URLs for triggering Alter actions from other apps.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

Alter's official URL Callbacks guide documents `alter://...` URLs copied from the Action Editor's **URL Callback** section. It also shows action callback examples under `alter://action/...` with optional `input` query data. This module keeps that boundary: use Alter-generated URLs and only add the documented `input` parameter when needed.

### Open Callback URL

Return an Alter callback URL exactly as copied from Alter. Use this when Alter already generated the full URL for the action.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCallbackUrl' : 'alter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}openCallbackUrl({
  url: 'alter://action/business-strategist-gpt',
})
```

### Run Generated Action

Return an Alter-generated action callback URL and optionally add the documented `input` query parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runGeneratedAction' : 'alter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/ask-web',
  input: 'What is Alter MacOS',
})

const urlWithoutInput = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
})

const businessStrategistUrl = {{currentMethod === 'On-Demand' ? '' : 'alter.'}}runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
  input: 'Explain Red Ocean Strategy',
})
```

## Generated URLs

```ts
openCallbackUrl({ url: 'alter://action/business-strategist-gpt' })
// => 'alter://action/business-strategist-gpt'

runGeneratedAction({ url: 'alter://action/ask-web', input: 'What is Alter MacOS' })
// => 'alter://action/ask-web?input=What+is+Alter+MacOS'

runGeneratedAction({ url: 'alter://action/business-strategist-gpt' })
// => 'alter://action/business-strategist-gpt'

runGeneratedAction({
  url: 'alter://action/business-strategist-gpt',
  input: 'Explain Red Ocean Strategy',
})
// => 'alter://action/business-strategist-gpt?input=Explain+Red+Ocean+Strategy'
```

## Official Documentation

* [Alter URL Callbacks](https://docs.alterhq.com/workflows/url-callbacks)
