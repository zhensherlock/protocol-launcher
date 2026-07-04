import { describe, expect, test } from 'vitest'
import { trustWallet } from '../src'

const dai = 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'

describe('trustWallet', () => {
  test('should expose only the documented Trust Wallet deeplink helpers', () => {
    expect(Object.keys(trustWallet).sort()).toEqual([
      'addAsset',
      'connectWalletConnect',
      'openBuyCrypto',
      'openCoin',
      'openDappBrowser',
      'openHotTokens',
      'openLaunchpool',
      'openMarketInfo',
      'openNfts',
      'openNotificationSettings',
      'openNotifications',
      'openPriceAlerts',
      'openQuest',
      'openSellCrypto',
      'openSwap',
      'sendPayment',
      'stake',
      'stakeClaimRewards',
      'stakeDelegate',
      'stakeUndelegate',
    ])
  })

  test('openDappBrowser should return the documented DApp browser URL', () => {
    const url = trustWallet.openDappBrowser({ coinId: 60, url: 'https://compound.finance' })

    expect(url).toBe('https://link.trustwallet.com/open_url?coin_id=60&url=https://compound.finance')
  })

  test('openDappBrowser should support the documented trust URL scheme', () => {
    const url = trustWallet.openDappBrowser({
      coinId: 60,
      url: 'https://compound.finance',
      format: 'scheme',
    })

    expect(url).toBe('trust://open_url?coin_id=60&url=https://compound.finance')
  })

  test('openCoin should return the documented open coin URL', () => {
    const url = trustWallet.openCoin({ asset: 'c60' })

    expect(url).toBe('https://link.trustwallet.com/open_coin?asset=c60')
  })

  test('addAsset should return the documented add asset URL', () => {
    const url = trustWallet.addAsset({ asset: 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca' })

    expect(url).toBe('https://link.trustwallet.com/add_asset?asset=c60_t0x514910771af9ca656af840dff83e8264ecf986ca')
  })

  test('sendPayment should return the documented send payment URL', () => {
    const url = trustWallet.sendPayment({
      asset: dai,
      address: '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
      amount: 1,
      memo: 'test',
    })

    expect(url).toBe(
      'https://link.trustwallet.com/send?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&address=0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb&amount=1&memo=test',
    )
  })

  test('sendPayment should omit optional payment fields when absent', () => {
    const url = trustWallet.sendPayment({
      asset: dai,
      address: '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
    })

    expect(url).toBe(
      'https://link.trustwallet.com/send?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&address=0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
    )
  })

  test('stake should return the documented stake details URL', () => {
    const url = trustWallet.stake({ coin: 118 })

    expect(url).toBe('https://link.trustwallet.com/stake?coin=118')
  })

  test('stakeDelegate should return the documented stake delegate URL', () => {
    const url = trustWallet.stakeDelegate({
      coin: 118,
      id: 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf',
    })

    expect(url).toBe(
      'https://link.trustwallet.com/stake_delegate?coin=118&id=cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf',
    )
  })

  test('stakeDelegate should omit optional id when absent', () => {
    const url = trustWallet.stakeDelegate({ coin: 118 })

    expect(url).toBe('https://link.trustwallet.com/stake_delegate?coin=118')
  })

  test('stakeUndelegate should return the documented unstake URL', () => {
    const url = trustWallet.stakeUndelegate({ coin: 118 })

    expect(url).toBe('https://link.trustwallet.com/stake_undelegate?coin=118')
  })

  test('stakeClaimRewards should return the documented claim rewards URL', () => {
    const url = trustWallet.stakeClaimRewards({ coin: 118 })

    expect(url).toBe('https://link.trustwallet.com/stake_claim_rewards?coin=118')
  })

  test('openSwap should return the documented swap URL', () => {
    const url = trustWallet.openSwap({ from: dai, to: 'c60' })

    expect(url).toBe('https://link.trustwallet.com/swap?from=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&to=c60')
  })

  test('openBuyCrypto should return the documented buy URL', () => {
    const url = trustWallet.openBuyCrypto({
      asset: 'c60',
      provider: 'moonpay',
      paymentMethod: 'digital_wallet',
      subPaymentMethod: 'paypal',
      fiatCurrency: 'USD',
      fiatQuantity: 300,
    })

    expect(url).toBe(
      'https://link.trustwallet.com/buy?asset=c60&provider=moonpay&payment_method=digital_wallet&sub_payment_method=paypal&fiat_currency=USD&fiat_quantity=300',
    )
  })

  test('openBuyCrypto should omit optional buy parameters when absent', () => {
    const url = trustWallet.openBuyCrypto({ asset: 'c60' })

    expect(url).toBe('https://link.trustwallet.com/buy?asset=c60')
  })

  test('openSellCrypto should return the documented sell URL', () => {
    const url = trustWallet.openSellCrypto({ asset: dai })

    expect(url).toBe('https://link.trustwallet.com/sell?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F')
  })

  test('openMarketInfo should return the documented market URL', () => {
    const url = trustWallet.openMarketInfo({ asset: dai })

    expect(url).toBe('https://link.trustwallet.com/market?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F')
  })

  test('openHotTokens should open the Hot Tokens tab without options', () => {
    const url = trustWallet.openHotTokens()

    expect(url).toBe('https://link.trustwallet.com/hot_tokens')
  })

  test('openHotTokens should open the documented category URL', () => {
    const url = trustWallet.openHotTokens({ categoryId: 'hot' })

    expect(url).toBe('https://link.trustwallet.com/hot_tokens?category_id=hot')
  })

  test('openHotTokens should open the documented category and network URL', () => {
    const url = trustWallet.openHotTokens({ categoryId: 'hot', network: 'c0' })

    expect(url).toBe('https://link.trustwallet.com/hot_tokens?category_id=hot&network=c0')
  })

  test('connectWalletConnect should preserve the documented URL-encoded WalletConnect URI', () => {
    const url = trustWallet.connectWalletConnect({
      uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...',
    })

    expect(url).toBe('https://link.trustwallet.com/wc?uri=wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...')
  })

  test('connectWalletConnect should support the documented trust URL scheme', () => {
    const url = trustWallet.connectWalletConnect({
      uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...',
      format: 'scheme',
    })

    expect(url).toBe('trust://wc?uri=wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...')
  })

  test('simple page helpers should return their documented URLs', () => {
    expect(trustWallet.openNfts()).toBe('https://link.trustwallet.com/nfts')
    expect(trustWallet.openQuest()).toBe('https://link.trustwallet.com/quest')
    expect(trustWallet.openLaunchpool()).toBe('https://link.trustwallet.com/launchpool')
    expect(trustWallet.openNotificationSettings()).toBe('https://link.trustwallet.com/notification_settings')
    expect(trustWallet.openNotifications()).toBe('https://link.trustwallet.com/notifications')
    expect(trustWallet.openPriceAlerts()).toBe('https://link.trustwallet.com/alerts')
  })
})
