import { lineR } from './shared'

/**
 * Open Settings.
 *
 * @returns LINE Settings URL.
 * @example
 * openSettings()
 * // => 'https://line.me/R/nv/settings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openSettings() {
  return lineR('/nv/settings')
}

/**
 * Open Account settings.
 *
 * @returns LINE Account settings URL.
 * @example
 * openAccountSettings()
 * // => 'https://line.me/R/nv/settings/account'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openAccountSettings() {
  return lineR('/nv/settings/account')
}

/**
 * Open Account > Authorized apps.
 *
 * @returns LINE Authorized apps URL.
 * @example
 * openAuthorizedApps()
 * // => 'https://line.me/R/nv/connectedApps'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openAuthorizedApps() {
  return lineR('/nv/connectedApps')
}

/**
 * Open Account > Connected devices.
 *
 * @returns LINE Connected devices URL.
 * @example
 * openConnectedDevices()
 * // => 'https://line.me/R/nv/connectedDevices'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openConnectedDevices() {
  return lineR('/nv/connectedDevices')
}

/**
 * Open Privacy settings.
 *
 * @returns LINE Privacy settings URL.
 * @example
 * openPrivacySettings()
 * // => 'https://line.me/R/nv/settings/privacy'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openPrivacySettings() {
  return lineR('/nv/settings/privacy')
}

/**
 * Open Stickers settings.
 *
 * @returns LINE Stickers settings URL.
 * @example
 * openStickerSettings()
 * // => 'https://line.me/R/nv/settings/sticker'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openStickerSettings() {
  return lineR('/nv/settings/sticker')
}

/**
 * Open Stickers > My Stickers.
 *
 * @returns LINE My Stickers URL.
 * @example
 * openMyStickers()
 * // => 'https://line.me/R/nv/stickerShop/mySticker'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openMyStickers() {
  return lineR('/nv/stickerShop/mySticker')
}

/**
 * Open Themes settings on iOS.
 *
 * @returns LINE iOS Themes settings URL.
 * @example
 * openThemeSettingsIos()
 * // => 'https://line.me/R/nv/settings/themeSettingsMenu'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openThemeSettingsIos() {
  return lineR('/nv/settings/themeSettingsMenu')
}

/**
 * Open Themes settings on Android.
 *
 * @returns LINE Android Themes settings URL.
 * @example
 * openThemeSettingsAndroid()
 * // => 'https://line.me/R/nv/settings/theme'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openThemeSettingsAndroid() {
  return lineR('/nv/settings/theme')
}

/**
 * Open Themes > My Themes.
 *
 * @returns LINE My Themes URL.
 * @example
 * openMyThemes()
 * // => 'https://line.me/R/nv/themeSettings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openMyThemes() {
  return lineR('/nv/themeSettings')
}

/**
 * Open Notification > Authorized apps.
 *
 * @returns LINE notification authorized apps URL.
 * @example
 * openNotificationAuthorizedApps()
 * // => 'https://line.me/R/nv/notificationServiceDetail'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openNotificationAuthorizedApps() {
  return lineR('/nv/notificationServiceDetail')
}

/**
 * Open Chats settings.
 *
 * @returns LINE Chats settings URL.
 * @example
 * openChatSettings()
 * // => 'https://line.me/R/nv/settings/chatSettings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openChatSettings() {
  return lineR('/nv/settings/chatSettings')
}

/**
 * Open Chats > Display suggestions.
 *
 * @returns LINE Display suggestions URL.
 * @example
 * openDisplaySuggestions()
 * // => 'https://line.me/R/nv/suggestSettings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openDisplaySuggestions() {
  return lineR('/nv/suggestSettings')
}

/**
 * Open Calls settings.
 *
 * @returns LINE Calls settings URL.
 * @example
 * openCallSettings()
 * // => 'https://line.me/R/nv/settings/callSettings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openCallSettings() {
  return lineR('/nv/settings/callSettings')
}

/**
 * Open Friends settings.
 *
 * @returns LINE Friends settings URL.
 * @example
 * openFriendsSettings()
 * // => 'https://line.me/R/nv/settings/addressBookSync'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openFriendsSettings() {
  return lineR('/nv/settings/addressBookSync')
}

/**
 * Open LINE VOOM settings.
 *
 * @returns LINE VOOM settings URL.
 * @example
 * openVoomSettings()
 * // => 'https://line.me/R/nv/settings/timelineSettings'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-app-settings-screens
 */
export function openVoomSettings() {
  return lineR('/nv/settings/timelineSettings')
}
