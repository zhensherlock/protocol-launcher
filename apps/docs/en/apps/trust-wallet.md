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

[Trust Wallet](https://trustwallet.com/) is a crypto wallet app. **Protocol Launcher** allows you to generate Trust Wallet deep links for DApps, assets, payments, staking, exchange flows, WalletConnect, and other documented pages.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

Trust Wallet documents that every deeplink route can use either `https://link.trustwallet.com` or `trust://`. This module defaults to the HTTPS app link and supports `format: 'scheme'` when you need the direct `trust://` URL.

### Open DApp Browser

Open the DApp browser with a specific website URL and SLIP-44 network.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDappBrowser' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openDappBrowser({
  coinId: 60,
  url: 'https://compound.finance',
})
```

<div class="flex justify-center">
  <VPLink :href="openDappBrowser({ coinId: 60, url: 'https://compound.finance' })" target="_self">
    Open Trust Wallet DApp Browser
  </VPLink>
</div>

### Open Coin

Open a coin by its UAI asset identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCoin' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openCoin({
  asset: 'c60',
})
```

<div class="flex justify-center">
  <VPLink :href="openCoin({ asset: 'c60' })" target="_self">
    Open Trust Wallet Coin
  </VPLink>
</div>

### Add Asset

Add an asset to local storage so it shows on the wallet screen.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addAsset' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}addAsset({
  asset: 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca',
})
```

### Send Payment

Generate a payment URL with the documented optional `amount`, `memo`, and `data` parameters.

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

Open staking details for a SLIP-44 coin index.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stake' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stake({
  coin: 118,
})
```

<div class="flex justify-center">
  <VPLink :href="stake({ coin: 118 })" target="_self">
    Open Trust Wallet Staking
  </VPLink>
</div>

### Stake Delegate

Open the stake/delegate flow, optionally selecting a validator or delegator.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeDelegate' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeDelegate({
  coin: 118,
  id: 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf',
})
```

### Stake Undelegate

Open the unstake/undelegate flow.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeUndelegate' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeUndelegate({
  coin: 118,
})
```

### Stake Claim Rewards

Open the claim rewards flow.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stakeClaimRewards' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}stakeClaimRewards({
  coin: 118,
})
```

### Open Swap

Open Swap with source and destination assets in UAI format.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSwap' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openSwap({
  from: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
  to: 'c60',
})
```

### Open Buy Crypto

Open Buy Crypto with the documented optional fiat ramp parameters.

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

### Open Sell Crypto

Open Sell Crypto for an asset in UAI format.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSellCrypto' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openSellCrypto({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
})
```

### Open Market Info

Open market information for an asset in UAI format.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMarketInfo' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openMarketInfo({
  asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
})
```

<div class="flex justify-center">
  <VPLink :href="openMarketInfo({ asset: daiAsset })" target="_self">
    Open Trust Wallet Market Info
  </VPLink>
</div>

### Open Hot Tokens

Open the Hot Tokens tab, optionally with a category and network.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHotTokens' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}openHotTokens({
  categoryId: 'hot',
  network: 'c0',
})
```

<div class="flex justify-center">
  <VPLink :href="openHotTokens({ categoryId: 'hot', network: 'c0' })" target="_self">
    Open Trust Wallet Hot Tokens
  </VPLink>
</div>

### Connect WalletConnect

Generate the WalletConnect route. Trust Wallet documents this route with a URL-encoded WalletConnect v2 URI in the `uri` query parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectWalletConnect' : 'trustWallet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trustWallet.'}}connectWalletConnect({
  uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...',
})
```

### Open Simple Pages

Open NFTs, quest, Launchpool, notification settings, notifications, and price alerts.

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
  <VPLink :href="openNfts()" target="_self">Open NFTs</VPLink>
  <VPLink :href="openQuest()" target="_self">Open Quest</VPLink>
  <VPLink :href="openLaunchpool()" target="_self">Open Launchpool</VPLink>
  <VPLink :href="openNotificationSettings()" target="_self">Open Notification Settings</VPLink>
  <VPLink :href="openNotifications()" target="_self">Open Notifications</VPLink>
  <VPLink :href="openPriceAlerts()" target="_self">Open Price Alerts</VPLink>
</div>

## Generated URLs

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

## Official Documentation

- [Trust Wallet Deep Linking](https://developer.trustwallet.com/developer/develop-for-trust/deeplinking)
- [Trust Wallet Universal Asset ID format](https://developer.trustwallet.com/developer/new-asset/universal_asset_id)
