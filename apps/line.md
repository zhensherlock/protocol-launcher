---
url: /protocol-launcher/apps/line.md
---

# LINE

[LINE](https://line.me/) is a messaging app from LY Corporation. **Protocol Launcher** allows you to generate official LINE URL scheme links for opening LINE app screens, LIFF apps, and LINE MINI Apps.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

LINE's current official URL scheme documentation supports URLs beginning with `https://line.me/R/`, `https://liff.line.me/`, and `https://miniapp.line.me/`. It is supported in LINE for iOS and LINE for Android, and isn't supported in LINE for PC (macOS, Windows). The deprecated `line://` and LIFF v1 URL forms are intentionally not exposed.

### Camera and Location

Open the camera, camera roll, or location screen. LINE documents camera and camera roll links as chat-only, and the location link as only for one-on-one chats with a LINE Official Account.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCamera, openCameraRollSingle, openCameraRollMulti, openLocation' : 'line' }} } from '{{ importPath }}'

const cameraUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCamera()
const singleImageUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCameraRollSingle()
const multiImageUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCameraRollMulti()
const locationUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openLocation()
```

### Official Accounts

Open or share a LINE Official Account profile, LINE VOOM, business profile, LINE VOOM post, or chat screen. Official Account IDs in path segments are percent-encoded; LINE VOOM and business profile URLs use the ID without the at-sign (`@`) prefix. LINE notes that the percent-encoded `recommendOA` form doesn't work on LINE versions earlier than 13.8.0 for Android.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOfficialAccountProfile, recommendOfficialAccount, openOfficialAccountVoom, openOfficialAccountBusinessProfile, openOfficialAccountVoomPost, openOfficialAccountChat' : 'line' }} } from '{{ importPath }}'

const profileUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccountProfile({
  lineId: '@linedevelopers',
})

const recommendUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}recommendOfficialAccount({
  lineId: '@linedevelopers',
})

const voomUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccountVoom({
  lineId: 'linedevelopers',
})

const businessProfileUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccountBusinessProfile({
  lineId: 'linedevelopers',
})

const voomPostUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccountVoomPost({
  lineId: 'linedevelopers',
  postId: '1234567890',
})

const chatUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccountChat({
  lineId: '@linedevelopers',
  text: 'Hi there!',
})
```

### Share and Profile

Open LINE's Share with screen with text, the user's My profile screen, or the user's LINE ID screen.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareText, openMyProfile, openProfileSetId' : 'line' }} } from '{{ importPath }}'

const shareUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}shareText({
  text: 'Hi there!',
})

const myProfileUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openMyProfile()
const lineIdUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openProfileSetId()
```

### Common Screens

Open LINE's Chats, Shopping, Wallet, Add friends, LINE Official Accounts, and LINE VOOM Following screens.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChats, openShopping, openWallet, openAddFriends, openOfficialAccounts, openVoomFollowing' : 'line' }} } from '{{ importPath }}'

const chatsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openChats()
const shoppingUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openShopping()
const walletUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openWallet()
const addFriendsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openAddFriends()
const officialAccountsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openOfficialAccounts()
const voomFollowingUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openVoomFollowing()
```

### Settings

Open LINE settings screens. LINE documents different theme settings URLs for iOS and Android, so the helpers expose separate functions for each platform.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings, openAccountSettings, openAuthorizedApps, openConnectedDevices, openPrivacySettings, openStickerSettings, openMyStickers, openThemeSettingsIos, openThemeSettingsAndroid, openMyThemes, openNotificationAuthorizedApps, openChatSettings, openDisplaySuggestions, openCallSettings, openFriendsSettings, openVoomSettings' : 'line' }} } from '{{ importPath }}'

const settingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openSettings()
const accountUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openAccountSettings()
const authorizedAppsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openAuthorizedApps()
const connectedDevicesUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openConnectedDevices()
const privacyUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openPrivacySettings()
const stickerSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerSettings()
const myStickersUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openMyStickers()
const themeSettingsIosUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openThemeSettingsIos()
const themeSettingsAndroidUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openThemeSettingsAndroid()
const myThemesUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openMyThemes()
const notificationsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openNotificationAuthorizedApps()
const chatSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openChatSettings()
const suggestionsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openDisplaySuggestions()
const callSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCallSettings()
const friendsSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openFriendsSettings()
const voomSettingsUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openVoomSettings()
```

### Sticker and Theme Shops

Open Sticker Shop pages, sticker ranking tabs, sticker authors, and Theme Shop product pages.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSticker, openStickerCategoryRanking, openStickerAuthor, openStickerShop, openStickerShopRank, openStickerShopNew, openStickerShopFree, openStickerShopCategories, openTheme' : 'line' }} } from '{{ importPath }}'

const stickerUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openSticker({
  packageId: 11537,
})

const categoryRankingUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerCategoryRanking({
  categoryId: 21,
})

const authorUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerAuthor({
  authorId: 12345,
})

const stickerShopUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerShop()
const rankUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerShopRank()
const newUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerShopNew()
const freeUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerShopFree()
const categoriesUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openStickerShopCategories()

const themeUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openTheme({
  productId: '0bac8fed-4c75-40c5-9982-e9ecc3b9d191',
})
```

### LIFF and MINI Apps

Open a LIFF app or create a LINE MINI App permanent link. Both helpers support additional path, query, and hash information documented by LINE.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLiff, openMiniApp' : 'line' }} } from '{{ importPath }}'

const liffUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openLiff({
  liffId: '1234567890-AbcdEfgh',
  path: '/path_A/path_B/',
  query: {
    key1: 'value1',
    key2: 'value2',
  },
  hash: 'URL-fragment',
})

const miniAppUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openMiniApp({
  liffId: '123456-abcedfg',
  path: '/shop',
  query: {
    search: 'shoes',
  },
  hash: 'item10',
})
```

### External Browser

Add LINE's official query parameters for opening a target URL in an external browser or, on Android, a Chrome custom tab. LINE documents that these parameters are not supported on LIFF apps, so the helpers reject LIFF app URLs such as `https://liff.line.me/...` and LINE MINI App URLs such as `https://miniapp.line.me/...`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExternalBrowser, openAndroidChromeCustomTab' : 'line' }} } from '{{ importPath }}'

const externalBrowserUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openExternalBrowser({
  url: 'https://example.com/',
})

const chromeCustomTabUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openAndroidChromeCustomTab({
  url: 'https://example.com/path?foo=bar#section',
})
```

## Official Documentation

* [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)
* [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)
* [Creating permanent links](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)
