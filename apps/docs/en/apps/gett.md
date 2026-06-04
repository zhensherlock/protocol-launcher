---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, rideRequest, rideRequestWithCurrentDropoff, rideRequestWithCurrentPickup } from 'protocol-launcher/gett';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  currentDropoffRideRequestParams,
  currentPickupRideRequestParams,
  pickupPoiRideRequestParams,
  rideRequestParams,
} from '../../.vitepress/constants/gett';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/gett' : 'protocol-launcher');
</script>

# Gett

[Gett](https://www.gett.com/) is a ride-hailing app. **Protocol Launcher** allows you to generate Gett's official deeplinks for opening the app and starting ride requests.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Gett
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="rideRequest(rideRequestParams)" target="_self">
    Start Gett Ride Request
  </VPLink>
</div>

### Current Pickup

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequestWithCurrentPickup' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequestWithCurrentPickup({
  dropoffLatitude: 10.654321,
  dropoffLongitude: 20.654321,
  productId: '00000000-0000-4000-8000-000000000000',
})
```

<div class="flex justify-center">
  <VPLink :href="rideRequestWithCurrentPickup(currentPickupRideRequestParams)" target="_self">
    Request From Current Location
  </VPLink>
</div>

### Current Dropoff

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequestWithCurrentDropoff' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequestWithCurrentDropoff({
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
})
```

<div class="flex justify-center">
  <VPLink :href="rideRequestWithCurrentDropoff(currentDropoffRideRequestParams)" target="_self">
    Request To Current Location
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="rideRequest(pickupPoiRideRequestParams)" target="_self">
    Request With Pickup POI
  </VPLink>
</div>

## Official Documentation

- [Gett Deeplink Overview](https://developer.gett.com/docs/overview-1)
- [Gett Ride Request Deeplink](https://developer.gett.com/docs/ride-request)
