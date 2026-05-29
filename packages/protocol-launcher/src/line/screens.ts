import { lineR } from './shared'

/**
 * Open the Chats tab.
 *
 * @returns LINE Chats tab URL.
 * @example
 * openChats()
 * // => 'https://line.me/R/nv/chat'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openChats() {
  return lineR('/nv/chat')
}

/**
 * Open the Shopping tab.
 *
 * @returns LINE Shopping tab URL.
 * @example
 * openShopping()
 * // => 'https://line.me/R/nv/commerce'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openShopping() {
  return lineR('/nv/commerce')
}

/**
 * Open the Wallet tab.
 *
 * @returns LINE Wallet tab URL.
 * @example
 * openWallet()
 * // => 'https://line.me/R/nv/wallet'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openWallet() {
  return lineR('/nv/wallet')
}

/**
 * Open the Add friends screen.
 *
 * @returns LINE Add friends URL.
 * @example
 * openAddFriends()
 * // => 'https://line.me/R/nv/addFriends'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openAddFriends() {
  return lineR('/nv/addFriends')
}

/**
 * Open the LINE Official Accounts screen.
 *
 * @returns LINE Official Accounts screen URL.
 * @example
 * openOfficialAccounts()
 * // => 'https://line.me/R/nv/officialAccounts'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openOfficialAccounts() {
  return lineR('/nv/officialAccounts')
}

/**
 * Open the LINE VOOM Following screen.
 *
 * @returns LINE VOOM Following URL.
 * @example
 * openVoomFollowing()
 * // => 'https://line.me/R/nv/timeline'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-common-line-app-screens
 */
export function openVoomFollowing() {
  return lineR('/nv/timeline')
}
