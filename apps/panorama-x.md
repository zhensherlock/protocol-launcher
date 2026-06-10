---
url: /protocol-launcher/apps/panorama-x.md
---

# Panorama X

[Panorama X](https://www.provue.com/panoramax/) is a macOS database app from ProVUE Development. **Protocol Launcher** allows you to generate Panorama X URLs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

ProVUE documents exactly two `panoramax://x-callback-url` actions: `run/database/procedure/label` and `wizard/wizard+name` (or `wizard%20name`). ProVUE also documents a separate `panoramax://writepreference?name=value` URL in the `writepreference` statement reference. These helpers do not add any other Panorama X actions.

### Run Procedure

Generate the documented x-callback-url `run` action. Panorama X uses the path segments as the database, procedure, and label names. Optional `params` become query-string data passed with the callback URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runProcedure' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
})

const urlWithData = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
  params: {
    buildnumber: 50353,
    apiVersion: 2,
  },
})
```

### Open Wizard

Generate the documented x-callback-url `wizard` action. ProVUE's release notes show spaces in the wizard name encoded as either `+` or `%20`; Protocol Launcher emits standard `%20` encoding.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWizard' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}openWizard({
  wizardName: 'wizard name',
})
```

### Write Preference

Generate the documented `writepreference` URL. Panorama X receives the preference name as the query key and the preference value as text.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'writePreference' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}writePreference({
  name: 'newwindowwidth',
  value: 800,
})
```

## Generated URLs

```ts
runProcedure({ database: 'database', procedure: 'procedure', label: 'xCallbackURLSuccess' })
// => 'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess'

runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
  params: { buildnumber: 50353, apiVersion: 2 },
})
// => 'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess?buildnumber=50353&apiVersion=2'

openWizard({ wizardName: 'wizard name' })
// => 'panoramax://x-callback-url/wizard/wizard%20name'

writePreference({ name: 'newwindowwidth', value: 800 })
// => 'panoramax://writepreference?newwindowwidth=800'
```

## Official Documentation

* [Panorama X 10.2 release notes](https://www.provue.com/panoramax/help/Release_10_2.html)
* [xcallbackurl statement](https://www.provue.com/panoramax/help/statement_xcallbackurl.html)
* [writepreference statement](https://www.provue.com/panoramax/help/statement_writepreference.html)
