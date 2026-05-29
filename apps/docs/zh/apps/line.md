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

[LINE](https://line.me/) 是 LY Corporation 的即时通讯应用。**Protocol Launcher** 可以生成用于打开 LINE 应用界面、LIFF 应用和 LINE MINI App 的官方 LINE URL scheme 链接。

## 用法

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

LINE 当前官方 URL scheme 文档支持以 `https://line.me/R/`、`https://liff.line.me/` 和 `https://miniapp.line.me/` 开头的 URL。它支持 LINE for iOS 和 LINE for Android，不支持 LINE for PC（macOS、Windows）。已废弃的 `line://` 和 LIFF v1 URL 形式不会暴露为 helper。

### 相机与位置

打开相机、相册或位置界面。LINE 官方文档将相机和相册链接限定为只能从 LINE 聊天中使用，位置链接限定为用户与 LINE Official Account 的一对一聊天。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCamera, openCameraRollSingle, openCameraRollMulti, openLocation' : 'line' }} } from '{{ importPath }}'

const cameraUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCamera()
const singleImageUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCameraRollSingle()
const multiImageUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openCameraRollMulti()
const locationUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openLocation()
```
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.openCamera()" target="_self">打开相机</VPLink>
  <VPLink :href="line.openCameraRollSingle()" target="_self">打开单选相册</VPLink>
  <VPLink :href="line.openCameraRollMulti()" target="_self">打开多选相册</VPLink>
  <VPLink :href="line.openLocation()" target="_self">打开位置界面</VPLink>
</div>

### Official Account

打开或分享 LINE Official Account 的资料页、LINE VOOM、业务资料页、LINE VOOM 帖子或聊天界面。路径中的 Official Account ID 会按官方要求 percent-encode；LINE VOOM 和业务资料页 URL 使用不带 at-sign（`@`）前缀的 ID。LINE 官方说明，percent-encoded 的 `recommendOA` 形式在早于 13.8.0 的 LINE for Android 版本上不可用。

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
  <VPLink :href="line.openOfficialAccountProfile(officialAccountParams)" target="_self">打开 OA 资料页</VPLink>
  <VPLink :href="line.recommendOfficialAccount(officialAccountParams)" target="_self">分享 OA</VPLink>
  <VPLink :href="line.openOfficialAccountVoom(officialAccountVoomParams)" target="_self">打开 OA VOOM</VPLink>
  <VPLink :href="line.openOfficialAccountBusinessProfile(officialAccountVoomParams)" target="_self">打开业务资料页</VPLink>
  <VPLink :href="line.openOfficialAccountVoomPost(officialAccountPostParams)" target="_self">打开 VOOM 帖子</VPLink>
  <VPLink :href="line.openOfficialAccountChat(officialAccountChatParams)" target="_self">打开 OA 聊天</VPLink>
</div>

### 分享与个人资料

打开带文本的「Share with」界面、用户的「My profile」界面，或用户的「LINE ID」界面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareText, openMyProfile, openProfileSetId' : 'line' }} } from '{{ importPath }}'

const shareUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}shareText({
  text: 'Hi there!',
})

const myProfileUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openMyProfile()
const lineIdUrl = {{currentMethod === 'On-Demand' ? '' : 'line.'}}openProfileSetId()
```
<div class="flex flex-wrap justify-center gap-2">
  <VPLink :href="line.shareText(shareTextParams)" target="_self">分享文本</VPLink>
  <VPLink :href="line.openMyProfile()" target="_self">打开 My profile</VPLink>
  <VPLink :href="line.openProfileSetId()" target="_self">打开 LINE ID</VPLink>
</div>

### 常用界面

打开 LINE 的 Chats、Shopping、Wallet、Add friends、LINE Official Accounts 和 LINE VOOM Following 界面。

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
  <VPLink :href="line.openChats()" target="_self">打开 Chats</VPLink>
  <VPLink :href="line.openShopping()" target="_self">打开 Shopping</VPLink>
  <VPLink :href="line.openWallet()" target="_self">打开 Wallet</VPLink>
  <VPLink :href="line.openAddFriends()" target="_self">打开 Add friends</VPLink>
  <VPLink :href="line.openOfficialAccounts()" target="_self">打开 Official Accounts</VPLink>
  <VPLink :href="line.openVoomFollowing()" target="_self">打开 VOOM Following</VPLink>
</div>

### 设置

打开 LINE 的各类设置界面。LINE 官方文档分别列出了 iOS 与 Android 的主题设置 URL，因此 helper 也拆成两个平台函数。

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

### Sticker 与 Theme 商店

打开 Sticker Shop 页面、贴图排行榜标签、贴图作者页，以及 Theme Shop 商品页。

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
  <VPLink :href="line.openSticker(openStickerParams)" target="_self">打开贴图</VPLink>
  <VPLink :href="line.openStickerCategoryRanking(openStickerCategoryRankingParams)" target="_self">贴图分类</VPLink>
  <VPLink :href="line.openStickerAuthor(openStickerAuthorParams)" target="_self">贴图作者</VPLink>
  <VPLink :href="line.openStickerShop()" target="_self">Sticker Shop</VPLink>
  <VPLink :href="line.openStickerShopRank()" target="_self">Rank</VPLink>
  <VPLink :href="line.openStickerShopNew()" target="_self">New</VPLink>
  <VPLink :href="line.openStickerShopFree()" target="_self">Free</VPLink>
  <VPLink :href="line.openStickerShopCategories()" target="_self">Categories</VPLink>
  <VPLink :href="line.openTheme(openThemeParams)" target="_self">打开 Theme</VPLink>
</div>

### LIFF 与 MINI App

打开 LIFF 应用或生成 LINE MINI App permanent link。两个 helper 都支持 LINE 官方文档中的附加 path、query 和 hash 信息。

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
  <VPLink :href="line.openLiff(openLiffParams)" target="_self">打开 LIFF App</VPLink>
  <VPLink :href="line.openMiniApp(openMiniAppParams)" target="_self">打开 MINI App</VPLink>
</div>

### 外部浏览器

添加 LINE 官方 query 参数，让目标 URL 在外部浏览器中打开，或在 Android 上用 Chrome custom tab 打开。LINE 官方文档说明这些参数不支持 LIFF 应用，因此 helper 会拒绝 `https://liff.line.me/...` 等 LIFF app URL 和 `https://miniapp.line.me/...` 等 LINE MINI App URL。

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
  <VPLink :href="line.openExternalBrowser(openExternalBrowserParams)" target="_self">打开外部浏览器</VPLink>
  <VPLink :href="line.openAndroidChromeCustomTab(openAndroidChromeCustomTabParams)" target="_self">打开 Chrome Custom Tab</VPLink>
</div>

## 官方文档

- [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)
- [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)
- [Creating permanent links](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)
