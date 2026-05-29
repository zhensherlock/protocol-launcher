import { describe, expect, test } from 'vitest'
import { line } from '../src'

describe('line', () => {
  test('camera helpers should return the official chat-only camera URLs', () => {
    expect(line.openCamera()).toBe('https://line.me/R/nv/camera/')
    expect(line.openCameraRollSingle()).toBe('https://line.me/R/nv/cameraRoll/single')
    expect(line.openCameraRollMulti()).toBe('https://line.me/R/nv/cameraRoll/multi')
  })

  test('openLocation should return the official location URL', () => {
    expect(line.openLocation()).toBe('https://line.me/R/nv/location/')
  })

  test('official account profile and recommendation helpers should percent-encode the LINE ID', () => {
    expect(line.openOfficialAccountProfile({ lineId: '@linedevelopers' })).toBe(
      'https://line.me/R/ti/p/%40linedevelopers',
    )
    expect(line.recommendOfficialAccount({ lineId: '@linedevelopers' })).toBe(
      'https://line.me/R/nv/recommendOA/%40linedevelopers',
    )
  })

  test('official account VOOM helpers should use the ID without at-sign', () => {
    expect(line.openOfficialAccountVoom({ lineId: 'linedevelopers' })).toBe(
      'https://line.me/R/home/public/main?id=linedevelopers',
    )
    expect(line.openOfficialAccountBusinessProfile({ lineId: 'linedevelopers' })).toBe(
      'https://line.me/R/home/public/profile?id=linedevelopers',
    )
    expect(line.openOfficialAccountVoomPost({ lineId: 'linedevelopers', postId: '1234567890' })).toBe(
      'https://line.me/R/home/public/post?id=linedevelopers&postId=1234567890',
    )
  })

  test('official account VOOM helpers should throw when the at-sign is included', () => {
    expect(() => line.openOfficialAccountVoom({ lineId: '@linedevelopers' })).toThrow(
      'LINE Official Account ID for this URL must exclude the at-sign (@).',
    )
  })

  test('openOfficialAccountChat should support an optional percent-encoded text message', () => {
    expect(line.openOfficialAccountChat({ lineId: '@linedevelopers' })).toBe(
      'https://line.me/R/oaMessage/%40linedevelopers',
    )
    expect(line.openOfficialAccountChat({ lineId: '@linedevelopers', text: 'Hi there!' })).toBe(
      'https://line.me/R/oaMessage/%40linedevelopers/?Hi%20there%21',
    )
  })

  test('shareText should return the official share URL with percent-encoded text', () => {
    expect(line.shareText({ text: 'Hi there!' })).toBe('https://line.me/R/share?text=Hi%20there%21')
  })

  test('profile helpers should return the official profile URLs', () => {
    expect(line.openMyProfile()).toBe('https://line.me/R/nv/profile')
    expect(line.openProfileSetId()).toBe('https://line.me/R/nv/profileSetId')
  })

  test('common screen helpers should return the official LINE screen URLs', () => {
    expect(line.openChats()).toBe('https://line.me/R/nv/chat')
    expect(line.openShopping()).toBe('https://line.me/R/nv/commerce')
    expect(line.openWallet()).toBe('https://line.me/R/nv/wallet')
    expect(line.openAddFriends()).toBe('https://line.me/R/nv/addFriends')
    expect(line.openOfficialAccounts()).toBe('https://line.me/R/nv/officialAccounts')
    expect(line.openVoomFollowing()).toBe('https://line.me/R/nv/timeline')
  })

  test('settings helpers should return the official LINE settings URLs', () => {
    expect(line.openSettings()).toBe('https://line.me/R/nv/settings')
    expect(line.openAccountSettings()).toBe('https://line.me/R/nv/settings/account')
    expect(line.openAuthorizedApps()).toBe('https://line.me/R/nv/connectedApps')
    expect(line.openConnectedDevices()).toBe('https://line.me/R/nv/connectedDevices')
    expect(line.openPrivacySettings()).toBe('https://line.me/R/nv/settings/privacy')
    expect(line.openStickerSettings()).toBe('https://line.me/R/nv/settings/sticker')
    expect(line.openMyStickers()).toBe('https://line.me/R/nv/stickerShop/mySticker')
    expect(line.openThemeSettingsIos()).toBe('https://line.me/R/nv/settings/themeSettingsMenu')
    expect(line.openThemeSettingsAndroid()).toBe('https://line.me/R/nv/settings/theme')
    expect(line.openMyThemes()).toBe('https://line.me/R/nv/themeSettings')
    expect(line.openNotificationAuthorizedApps()).toBe('https://line.me/R/nv/notificationServiceDetail')
    expect(line.openChatSettings()).toBe('https://line.me/R/nv/settings/chatSettings')
    expect(line.openDisplaySuggestions()).toBe('https://line.me/R/nv/suggestSettings')
    expect(line.openCallSettings()).toBe('https://line.me/R/nv/settings/callSettings')
    expect(line.openFriendsSettings()).toBe('https://line.me/R/nv/settings/addressBookSync')
    expect(line.openVoomSettings()).toBe('https://line.me/R/nv/settings/timelineSettings')
  })

  test('sticker shop helpers should return the official Sticker Shop URLs', () => {
    expect(line.openSticker({ packageId: 11537 })).toBe('https://line.me/R/shop/sticker/detail/11537')
    expect(line.openStickerCategoryRanking({ categoryId: 21 })).toBe('https://line.me/R/shop/category/21')
    expect(line.openStickerAuthor({ authorId: 12345 })).toBe('https://line.me/R/shop/sticker/author/12345')
    expect(line.openStickerShop()).toBe('https://line.me/R/nv/stickerShop')
    expect(line.openStickerShopRank()).toBe('https://line.me/R/shop/sticker/hot')
    expect(line.openStickerShopNew()).toBe('https://line.me/R/shop/sticker/new')
    expect(line.openStickerShopFree()).toBe('https://line.me/R/shop/sticker/event')
    expect(line.openStickerShopCategories()).toBe('https://line.me/R/shop/sticker/category')
  })

  test('openTheme should return the official Theme Shop URL', () => {
    expect(line.openTheme({ productId: '0bac8fed-4c75-40c5-9982-e9ecc3b9d191' })).toBe(
      'https://line.me/R/shop/theme/detail?id=0bac8fed-4c75-40c5-9982-e9ecc3b9d191',
    )
  })

  test('openLiff should return the official LIFF URL with optional additional information', () => {
    expect(line.openLiff({ liffId: '1234567890-AbcdEfgh' })).toBe('https://liff.line.me/1234567890-AbcdEfgh')
    expect(
      line.openLiff({
        liffId: '1234567890-AbcdEfgh',
        path: '/path_A/path_B/',
        query: { key1: 'value1', key2: 'value2' },
        hash: 'URL-fragment',
      }),
    ).toBe('https://liff.line.me/1234567890-AbcdEfgh/path_A/path_B/?key1=value1&key2=value2#URL-fragment')
  })

  test('openMiniApp should return the official LINE MINI App permanent link', () => {
    expect(
      line.openMiniApp({
        liffId: '123456-abcedfg',
        path: '/shop',
        query: { search: 'shoes' },
        hash: 'item10',
      }),
    ).toBe('https://miniapp.line.me/123456-abcedfg/shop?search=shoes#item10')
  })

  test('external browser helpers should add the official LINE browser query parameters', () => {
    expect(line.openExternalBrowser({ url: 'https://example.com/' })).toBe('https://example.com/?openExternalBrowser=1')
    expect(line.openAndroidChromeCustomTab({ url: 'https://example.com/path?foo=bar#section' })).toBe(
      'https://example.com/path?foo=bar&openInAppBrowser=0#section',
    )
  })

  test('external browser helpers should throw for LIFF apps because LINE does not support these parameters there', () => {
    expect(() => line.openExternalBrowser({ url: 'https://liff.line.me/1234567890-AbcdEfgh' })).toThrow(
      "LINE external browser query parameters aren't supported on LIFF app URLs.",
    )
    expect(() => line.openExternalBrowser({ url: 'https://miniapp.line.me/123456-abcedfg' })).toThrow(
      "LINE external browser query parameters aren't supported on LIFF app URLs.",
    )
  })
})
