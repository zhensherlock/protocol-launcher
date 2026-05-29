---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import * as line from 'protocol-launcher/line';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  officialAccountParams,
  officialAccountVoomParams,
  officialAccountPostParams,
  officialAccountChatParams,
  shareTextParams,
  openStickerParams,
  openStickerCategoryRankingParams,
  openStickerAuthorParams,
  openThemeParams,
  openLiffParams,
  openMiniAppParams,
  openExternalBrowserParams,
  openAndroidChromeCustomTabParams,
} from '../../.vitepress/constants/line';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/line' : 'protocol-launcher');
</script>

# LINE

[LINE](https://line.me/) is a messaging app from LY Corporation. **Protocol Launcher** allows you to generate official LINE URL scheme links for opening LINE app screens, LIFF apps, and LINE MINI Apps.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openCamera()" target="_self">Open Camera</VPLink>
  <VPLink :href="line.openCameraRollSingle()" target="_self">Open Camera Roll Single</VPLink>
  <VPLink :href="line.openCameraRollMulti()" target="_self">Open Camera Roll Multi</VPLink>
  <VPLink :href="line.openLocation()" target="_self">Open Location</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openOfficialAccountProfile(officialAccountParams)" target="_self">Open OA Profile</VPLink>
  <VPLink :href="line.recommendOfficialAccount(officialAccountParams)" target="_self">Recommend OA</VPLink>
  <VPLink :href="line.openOfficialAccountVoom(officialAccountVoomParams)" target="_self">Open OA VOOM</VPLink>
  <VPLink :href="line.openOfficialAccountBusinessProfile(officialAccountVoomParams)" target="_self">Open Business Profile</VPLink>
  <VPLink :href="line.openOfficialAccountVoomPost(officialAccountPostParams)" target="_self">Open VOOM Post</VPLink>
  <VPLink :href="line.openOfficialAccountChat(officialAccountChatParams)" target="_self">Open OA Chat</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.shareText(shareTextParams)" target="_self">Share Text</VPLink>
  <VPLink :href="line.openMyProfile()" target="_self">Open My Profile</VPLink>
  <VPLink :href="line.openProfileSetId()" target="_self">Open LINE ID</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openChats()" target="_self">Open Chats</VPLink>
  <VPLink :href="line.openShopping()" target="_self">Open Shopping</VPLink>
  <VPLink :href="line.openWallet()" target="_self">Open Wallet</VPLink>
  <VPLink :href="line.openAddFriends()" target="_self">Open Add Friends</VPLink>
  <VPLink :href="line.openOfficialAccounts()" target="_self">Open Official Accounts</VPLink>
  <VPLink :href="line.openVoomFollowing()" target="_self">Open VOOM Following</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openSettings()" target="_self">Settings</VPLink>
  <VPLink :href="line.openAccountSettings()" target="_self">Account</VPLink>
  <VPLink :href="line.openAuthorizedApps()" target="_self">Authorized Apps</VPLink>
  <VPLink :href="line.openConnectedDevices()" target="_self">Connected Devices</VPLink>
  <VPLink :href="line.openPrivacySettings()" target="_self">Privacy</VPLink>
  <VPLink :href="line.openStickerSettings()" target="_self">Stickers</VPLink>
  <VPLink :href="line.openMyStickers()" target="_self">My Stickers</VPLink>
  <VPLink :href="line.openThemeSettingsIos()" target="_self">Themes iOS</VPLink>
  <VPLink :href="line.openThemeSettingsAndroid()" target="_self">Themes Android</VPLink>
  <VPLink :href="line.openMyThemes()" target="_self">My Themes</VPLink>
  <VPLink :href="line.openNotificationAuthorizedApps()" target="_self">Notification Apps</VPLink>
  <VPLink :href="line.openChatSettings()" target="_self">Chats</VPLink>
  <VPLink :href="line.openDisplaySuggestions()" target="_self">Suggestions</VPLink>
  <VPLink :href="line.openCallSettings()" target="_self">Calls</VPLink>
  <VPLink :href="line.openFriendsSettings()" target="_self">Friends</VPLink>
  <VPLink :href="line.openVoomSettings()" target="_self">VOOM</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openSticker(openStickerParams)" target="_self">Open Sticker</VPLink>
  <VPLink :href="line.openStickerCategoryRanking(openStickerCategoryRankingParams)" target="_self">Sticker Category</VPLink>
  <VPLink :href="line.openStickerAuthor(openStickerAuthorParams)" target="_self">Sticker Author</VPLink>
  <VPLink :href="line.openStickerShop()" target="_self">Sticker Shop</VPLink>
  <VPLink :href="line.openStickerShopRank()" target="_self">Rank</VPLink>
  <VPLink :href="line.openStickerShopNew()" target="_self">New</VPLink>
  <VPLink :href="line.openStickerShopFree()" target="_self">Free</VPLink>
  <VPLink :href="line.openStickerShopCategories()" target="_self">Categories</VPLink>
  <VPLink :href="line.openTheme(openThemeParams)" target="_self">Open Theme</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openLiff(openLiffParams)" target="_self">Open LIFF App</VPLink>
  <VPLink :href="line.openMiniApp(openMiniAppParams)" target="_self">Open MINI App</VPLink>
</div>

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
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openExternalBrowser(openExternalBrowserParams)" target="_self">Open External Browser</VPLink>
  <VPLink :href="line.openAndroidChromeCustomTab(openAndroidChromeCustomTabParams)" target="_self">Open Chrome Custom Tab</VPLink>
</div>

## Official Documentation

- [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)
- [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)
- [Creating permanent links](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)
