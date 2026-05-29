---
url: /protocol-launcher/apps/momento.md
---

# Momento

[Momento](https://momentoapp.com/) is a diary and life-logging app. **Protocol Launcher** allows you to generate links for launching Momento and opening its official Add Moment shortcuts.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

The helpers below mirror Momento's official [URL Scheme](https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme) documentation. Only the documented launch, Add Moment, Add Photos, Add People, Add Places, Add Tags, Add Moment and Change Date, and Camera URLs are exposed. The official URL examples use `text` and repeated `tag` query parameters for Add Moment, Add Places, and Camera; Camera also documents `front=true`.

Momento also documents replacing `momento://` with `momento-3://` to target Momento 3 when Momento Classic is installed. Pass `scheme: 'momento-3'` to any helper to generate that form.

### Open

Launch Momento.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}open()
```

Launch Momento 3 explicitly.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}open({
  scheme: 'momento-3',
})
```

### Add Moment

Open Add Moment. You can include the `text` and repeated `tag` parameters shown in Momento's official examples.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newMoment' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newMoment({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

### Add Photos

Open Add Photos.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPhotos' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPhotos()
```

### Add People

Open Add People.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPeople' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPeople()
```

### Add Places

Open Add Places. Momento's official examples also show `text` and repeated `tag` parameters on this URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPlaces' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPlaces({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

### Add Tags

Open Add Tags.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTags' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newTags()
```

### Add Moment And Change Date

Open Add Moment and Change Date.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newDate' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newDate()
```

### Camera

Open Camera.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera()
```

Open the front camera with the documented `front=true` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera({
  front: true,
})
```

Momento's official examples also show `text` and repeated `tag` parameters on the Camera URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

## Official Documentation

* [Momento URL Scheme](https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme)
