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

[Gett](https://www.gett.com/) 是一款网约车应用。**Protocol Launcher** 可以生成 Gett 官方 deeplink，用于打开 App 和发起行程请求。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

Gett 文档说明 `gett://` scheme 可用于检测或打开 App，`gett://order?` 用于行程请求。Gett 说明 deeplink 支持 Android 和 iOS 客户端。

`clientId` 和 `productId` 会映射到 `client_id` 与 `product_id`。上车点字段会映射到 `pickup`、`pickup_latitude`、`pickup_longitude` 和 `pickup_poi_name`；下车点字段会映射到 `dropoff`、`dropoff_latitude` 和 `dropoff_longitude`。POI 名称和司机备注会由 helper 进行 URL 编码。

POI 名称只暴露 `pickupPoiName`，因为 Gett 示例明确给出了 `pickup_poi_name`。Gett 表格里的下车点 POI 行没有发布为可直接复制核对的精确查询参数，因此此模块不猜测对应字段。

当需要把行程某一端设置为官方 `my_location` 值时，使用 `rideRequestWithCurrentPickup()` 或 `rideRequestWithCurrentDropoff()`。

### 打开 Gett

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Gett
  </VPLink>
</div>

### 行程请求

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
    发起 Gett 行程请求
  </VPLink>
</div>

### 当前上车点

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
    从当前位置发起请求
  </VPLink>
</div>

### 当前下车点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rideRequestWithCurrentDropoff' : 'gett' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gett.'}}rideRequestWithCurrentDropoff({
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
})
```

<div class="flex justify-center">
  <VPLink :href="rideRequestWithCurrentDropoff(currentDropoffRideRequestParams)" target="_self">
    请求前往当前位置
  </VPLink>
</div>

### 上车点 POI 与备注

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
    使用上车点 POI 发起请求
  </VPLink>
</div>

## 官方文档

- [Gett Deeplink Overview](https://developer.gett.com/docs/overview-1)
- [Gett Ride Request Deeplink](https://developer.gett.com/docs/ride-request)
