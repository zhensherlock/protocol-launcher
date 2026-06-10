---
url: /protocol-launcher/apps/truecontext.md
---

# TrueContext

[TrueContext](https://www.truecontext.com/) is a mobile forms and field workflow platform. **Protocol Launcher** allows you to generate its official App-to-App URLs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

TrueContext documents the `truecontext://x-callback-url/action` format, the alternative `tcxt://` scheme, continued support for `prontoforms://`, and the HTTPS alternative `https://prontofor.ms/x-callback-url/action`. This module exposes only the documented App-to-App actions: `launch`, `refresh`, `list`, `open`, `send`, and `search`.

Use the `answers` object for dispatch values. Its keys are TrueContext question unique IDs, so Protocol Launcher URL-encodes both the key and the value. Following TrueContext's URL Encoding page, spaces and special characters are percent-encoded, while parentheses are left unencoded. The documented x-callback parameters are available as `xSuccess`, `xCancel`, and `xError`.

## URL Methods

### Launch

Generate the documented `launch` action.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}launch()
```

### Refresh

Generate the documented `refresh` action, which launches the app and downloads new form versions, data sources, and dispatches.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}refresh()
```

### List

Display a specific app area, or list forms and resources by tag.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'list' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}list({
  type: 'inbox',
})
```

### Open

Open a form, record, or resource. The `answers` object dispatches values into form questions by unique ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}open({
  name: 'Universal Work Order',
  answers: {
    'Job - Type': 'Warranty',
    'Job - Work Order #': 1234567,
  },
  xSuccess: 'pftest://success',
  xCancel: 'pftest://cancel',
  xError: 'pftest://error',
})
```

### Send

Open, populate, and send a form. TrueContext documents `type` and at least one form identifier as required for this action.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'send' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}send({
  type: 'forms',
  formID: 99999999,
  answers: {
    ServiceType: 'Warranty',
  },
})
```

### Search

Open the TrueContext Mobile App Search list with documented text, state, or date filters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'truecontext' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'truecontext.'}}search({
  stateFilter: 'AllIncomplete',
  dateSearchType: 'DatePeriod',
  datePeriod: 'ThisWeek',
})
```

## Generated URLs

```ts
launch()
// => 'truecontext://x-callback-url/launch'

refresh()
// => 'truecontext://x-callback-url/refresh'

list({ type: 'inbox' })
// => 'truecontext://x-callback-url/list?type=inbox'

open({
  name: 'Universal Work Order',
  answers: { 'Job - Type': 'Warranty', 'Job - Work Order #': 1234567 },
})
// => 'truecontext://x-callback-url/open?name=Universal%20Work%20Order&Job%20-%20Type=Warranty&Job%20-%20Work%20Order%20%23=1234567'

send({ type: 'forms', formID: 99999999, answers: { ServiceType: 'Warranty' } })
// => 'truecontext://x-callback-url/send?type=forms&formID=99999999&ServiceType=Warranty'

search({ stateFilter: 'AllIncomplete', dateSearchType: 'DatePeriod', datePeriod: 'ThisWeek' })
// => 'truecontext://x-callback-url/search?stateFilter=AllIncomplete&dateSearchType=DatePeriod&datePeriod=ThisWeek'

launch({ scheme: 'tcxt' })
// => 'tcxt://x-callback-url/launch'

open({ format: 'web', name: 'asset list' })
// => 'https://prontofor.ms/x-callback-url/open?name=asset%20list'
```

## Official Documentation

* [TrueContext App-to-App URL Scheme](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppURLScheme.htm)
* [App-to-App Actions](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActions.htm)
* [App-to-App Action Details](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm)
* [App-to-App x-callback parameters](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppXCallbackParams.htm)
* [Open a form and dispatch answers](https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppCookbook/AppToApp_RecipeToOpenAndDispatch.htm)
