import type { IvoryAccountPayload } from './shared'
import { ivoryTabUrl } from './shared'

/**
 * Open the Ivory Home tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Home tab URL.
 * @example
 * openHome()
 * // => 'ivory:///home'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openHome(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('home', payload)
}

/**
 * Open the Ivory timeline tab using Tapbots' documented `timeline` alias.
 *
 * @param payload Ivory account payload.
 * @returns Ivory timeline tab URL.
 * @example
 * openTimeline({ acct: '@alice' })
 * // => 'ivory://@alice/timeline'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openTimeline(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('timeline', payload)
}

/**
 * Open the Ivory Mentions tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Mentions tab URL.
 * @example
 * openMentions({ acct: '@alice' })
 * // => 'ivory://@alice/mentions'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openMentions(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('mentions', payload)
}

/**
 * Open the Ivory Lists tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Lists tab URL.
 * @example
 * openLists()
 * // => 'ivory:///lists'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openLists(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('lists', payload)
}

/**
 * Open the Ivory Favorites tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Favorites tab URL.
 * @example
 * openFavorites()
 * // => 'ivory:///favorites'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openFavorites(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('favorites', payload)
}

/**
 * Open the Ivory Bookmarks tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Bookmarks tab URL.
 * @example
 * openBookmarks()
 * // => 'ivory:///bookmarks'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openBookmarks(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('bookmarks', payload)
}

/**
 * Open the Ivory Statistics tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Statistics tab URL.
 * @example
 * openStatistics()
 * // => 'ivory:///statistics'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openStatistics(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('statistics', payload)
}

/**
 * Open the selected Ivory account's profile tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory profile tab URL.
 * @example
 * openProfileTab({ acct: '@alice@mastodon.social' })
 * // => 'ivory://@alice@mastodon.social/profile'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openProfileTab(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('profile', payload)
}

/**
 * Open the Ivory Search tab.
 *
 * @param payload Ivory account payload.
 * @returns Ivory Search tab URL.
 * @example
 * openSearch()
 * // => 'ivory:///search'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openSearch(payload: IvoryAccountPayload = {}) {
  return ivoryTabUrl('search', payload)
}
