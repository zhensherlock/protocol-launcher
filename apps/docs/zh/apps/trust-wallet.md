---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addAsset,
  connectWalletConnect,
  openBuyCrypto,
  openCoin,
  openDappBrowser,
  openHotTokens,
  openLaunchpool,
  openMarketInfo,
  openNfts,
  openNotificationSettings,
  openNotifications,
  openPriceAlerts,
  openQuest,
  openSellCrypto,
  openSwap,
  sendPayment,
  stake,
  stakeClaimRewards,
  stakeDelegate,
  stakeUndelegate,
} from 'protocol-launcher/trust-wallet';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/trust-wallet' : 'protocol-launcher');

const daiAsset = 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F';
</script>

# Trust Wallet

[Trust Wallet](https://trustwallet.com/) 是一款加密钱包应用。**Protocol Launcher** 允许你生成 Trust Wallet deep link，用来打开 DApp、asset、payment、staking、exchange flow、WalletConnect 以及其他官方记录的页面。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

Trust Wallet 官方文档说明，每个 deeplink route 都可以使用 `https://link.trustwallet.com` 或 `trust://`。本模块默认生成 HTTPS app link；需要直接打开 app 时，可传入 `format: 'scheme'` 生成 `trust://` URL。

### 打开 DApp Browser

使用指定网站 URL 和 SLIP-44 网络打开 DApp browser。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDappBrowser' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openDappBrowser({
  coinId: 60,
  url: 'https://compound.finance',
})
```

<div class="flex justify-center">
  <VPLink :href="openDappBrowser({ coinId: 60, url: 'https://compound.finance' })" target="_self">
    打开 Trust Wallet DApp Browser
  </VPLink>
</div>

### 打开 Coin

通过 UAI asset identifier 打开一个 coin。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCoin' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openCoin({
  asset: 'c60',
})
```

<div class="flex justify-center">
  <VPLink :href="openCoin({ asset: 'c60' })" target="_self">
    打开 Trust Wallet Coin
  </VPLink>
</div>

### 添加 Asset

将 asset 添加到本地存储，使它显示在 wallet 页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addAsset' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}addAsset({
  asset: 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca',
})
```

### 发送 Payment

生成 payment URL，并支持官方记录的可选 `amount`、`memo`、`data` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sendPayment' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}sendPayment({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
  address: '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
  amount: 1,
  memo: 'test',
})
```

### Stake

通过 SLIP-44 coin index 打开 staking details。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stake' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stake({
  coin: 118,
})
```

<div class="flex justify-center">
  <VPLink :href="stake({ coin: 118 })" target="_self">
    打开 Trust Wallet Staking
  </VPLink>
</div>

### Stake Delegate

打开 stake/delegate flow，可选择指定 validator 或 delegator。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeDelegate' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeDelegate({
  coin: 118,
  id: 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf',
})
```

### Stake Undelegate

打开 unstake/undelegate flow。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeUndelegate' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeUndelegate({
  coin: 118,
})
```

### Stake Claim Rewards

打开 claim rewards flow。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeClaimRewards' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeClaimRewards({
  coin: 118,
})
```

### 打开 Swap

用 UAI 格式的来源和目标 asset 打开 Swap。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSwap' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openSwap({
  from: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
  to: 'c60',
})
```

### 打开 Buy Crypto

使用官方记录的可选 fiat ramp 参数打开 Buy Crypto。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBuyCrypto' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openBuyCrypto({
  asset: 'c60',
  provider: 'moonpay',
  paymentMethod: 'digital_wallet',
  subPaymentMethod: 'paypal',
  fiatCurrency: 'USD',
  fiatQuantity: 300,
})
```

### 打开 Sell Crypto

通过 UAI 格式的 asset 打开 Sell Crypto。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSellCrypto' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openSellCrypto({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
})
```

### 打开 Market Info

通过 UAI 格式的 asset 打开 market information。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMarketInfo' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openMarketInfo({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
})
```

<div class="flex justify-center">
  <VPLink :href="openMarketInfo({ asset: daiAsset })" target="_self">
    打开 Trust Wallet Market Info
  </VPLink>
</div>

### 打开 Hot Tokens

打开 Hot Tokens tab，可选 category 和 network。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHotTokens' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openHotTokens({
  categoryId: 'hot',
  network: 'c0',
})
```

<div class="flex justify-center">
  <VPLink :href="openHotTokens({ categoryId: 'hot', network: 'c0' })" target="_self">
    打开 Trust Wallet Hot Tokens
  </VPLink>
</div>

### 连接 WalletConnect

生成 WalletConnect route。Trust Wallet 官方文档记录的是已经 URL-encoded 的 WalletConnect v2 URI，并放在 `uri` query 参数中。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectWalletConnect' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}connectWalletConnect({
  uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...',
})
```

### 打开简单页面

打开 NFTs、quest、Launchpool、notification settings、notifications 和 price alerts。

```ts-vue [{{currentMethod}}]
import {
  {{ currentMethod === 'On-Demand' ? 'openNfts, openQuest, openLaunchpool, openNotificationSettings, openNotifications, openPriceAlerts' : 'trustWallet' }}
} from '{{ importPath }}'

const nftsUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openNfts()
const questUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openQuest()
const launchpoolUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openLaunchpool()
const notificationSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openNotificationSettings()
const notificationsUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openNotifications()
const priceAlertsUrl = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openPriceAlerts()
```

<div class="flex justify-center gap-4 flex-wrap">
  <VPLink :href="openNfts()" target="_self">打开 NFTs</VPLink>
  <VPLink :href="openQuest()" target="_self">打开 Quest</VPLink>
  <VPLink :href="openLaunchpool()" target="_self">打开 Launchpool</VPLink>
  <VPLink :href="openNotificationSettings()" target="_self">打开 Notification Settings</VPLink>
  <VPLink :href="openNotifications()" target="_self">打开 Notifications</VPLink>
  <VPLink :href="openPriceAlerts()" target="_self">打开 Price Alerts</VPLink>
</div>

## 生成的 URL

```ts
openDappBrowser({ coinId: 60, url: 'https://compound.finance' })
// => 'https://link.trustwallet.com/open_url?coin_id=60&url=https://compound.finance'

openDappBrowser({ coinId: 60, url: 'https://compound.finance', format: 'scheme' })
// => 'trust://open_url?coin_id=60&url=https://compound.finance'

openCoin({ asset: 'c60' })
// => 'https://link.trustwallet.com/open_coin?asset=c60'

addAsset({ asset: 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca' })
// => 'https://link.trustwallet.com/add_asset?asset=c60_t0x514910771af9ca656af840dff83e8264ecf986ca'

sendPayment({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
  address: '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
  amount: 1,
  memo: 'test',
})
// => 'https://link.trustwallet.com/send?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&address=0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb&amount=1&memo=test'

stake({ coin: 118 })
// => 'https://link.trustwallet.com/stake?coin=118'

stakeDelegate({ coin: 118, id: 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf' })
// => 'https://link.trustwallet.com/stake_delegate?coin=118&id=cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf'

stakeUndelegate({ coin: 118 })
// => 'https://link.trustwallet.com/stake_undelegate?coin=118'

stakeClaimRewards({ coin: 118 })
// => 'https://link.trustwallet.com/stake_claim_rewards?coin=118'

openSwap({ from: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F', to: 'c60' })
// => 'https://link.trustwallet.com/swap?from=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&to=c60'

openBuyCrypto({
  asset: 'c60',
  provider: 'moonpay',
  paymentMethod: 'digital_wallet',
  subPaymentMethod: 'paypal',
  fiatCurrency: 'USD',
  fiatQuantity: 300,
})
// => 'https://link.trustwallet.com/buy?asset=c60&provider=moonpay&payment_method=digital_wallet&sub_payment_method=paypal&fiat_currency=USD&fiat_quantity=300'

openSellCrypto({ asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F' })
// => 'https://link.trustwallet.com/sell?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'

openMarketInfo({ asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F' })
// => 'https://link.trustwallet.com/market?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'

openHotTokens()
// => 'https://link.trustwallet.com/hot_tokens'

openHotTokens({ categoryId: 'hot', network: 'c0' })
// => 'https://link.trustwallet.com/hot_tokens?category_id=hot&network=c0'

connectWalletConnect({ uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...' })
// => 'https://link.trustwallet.com/wc?uri=wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...'

openNfts()
// => 'https://link.trustwallet.com/nfts'

openQuest()
// => 'https://link.trustwallet.com/quest'

openLaunchpool()
// => 'https://link.trustwallet.com/launchpool'

openNotificationSettings()
// => 'https://link.trustwallet.com/notification_settings'

openNotifications()
// => 'https://link.trustwallet.com/notifications'

openPriceAlerts()
// => 'https://link.trustwallet.com/alerts'
```

## 官方文档

- [Trust Wallet Deep Linking](https://developer.trustwallet.com/developer/develop-for-trust/deeplinking)
- [Trust Wallet Universal Asset ID format](https://developer.trustwallet.com/developer/new-asset/universal_asset_id)
