---
url: /protocol-launcher/apps/gett.md
---

# Gett

[Gett](https://www.gett.com/) is a ride-hailing app. **Protocol Launcher** allows you to generate Gett's official deeplinks for opening the app and starting ride requests.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Gett documents the `gett://` scheme for checking whether the app can be opened, and `gett://order?` for ride requests. Gett says deeplinks are supported on Android and iOS clients.

`clientId` and `productId` map to `client_id` and `product_id`. Pickup fields map to `pickup`, `pickup_latitude`, `pickup_longitude`, and `pickup_poi_name`; dropoff fields map to `dropoff`, `dropoff_latitude`, and `dropoff_longitude`. POI names and notes are URL-encoded by the helper.

Only `pickupPoiName` is exposed for POI names because Gett's examples explicitly show `pickup_poi_name`. The dropoff POI row in Gett's table is not published as a copyable exact query parameter, so this module does not guess one.

Use `rideRequestWithCurrentPickup()` or `rideRequestWithCurrentDropoff()` when you want the official `my_location` value for one side of the ride.

### Open Gett

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}open()
```

### Ride Request

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequest' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequest({
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
  dropoffLatitude: 10.654321,
  dropoffLongitude: 20.654321,
  productId: '00000000-0000-4000-8000-000000000000',
})
```

### Current Pickup

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequestWithCurrentPickup' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequestWithCurrentPickup({
  dropoffLatitude: 10.654321,
  dropoffLongitude: 20.654321,
  productId: '00000000-0000-4000-8000-000000000000',
})
```

### Current Dropoff

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequestWithCurrentDropoff' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequestWithCurrentDropoff({
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
})
```

### Pickup POI and Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequest' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequest({
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
  pickupPoiName: 'Example Pickup',
  note: 'Meet by entrance B',
})
```

## Official Documentation

* [Gett Deeplink Overview](https://developer.gett.com/docs/overview-1)
* [Gett Ride Request Deeplink](https://developer.gett.com/docs/ride-request)
