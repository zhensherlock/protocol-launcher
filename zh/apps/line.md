---
url: /protocol-launcher/zh/apps/line.md
---

# LINE

[LINE](https://line.me/) 是 LY Corporation 的即时通讯应用。**Protocol Launcher** 可以生成用于打开 LINE 应用界面、LIFF 应用和 LINE MINI App 的官方 LINE URL scheme 链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

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

## 官方文档

* [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)
* [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)
* [Creating permanent links](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)
