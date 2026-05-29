import { type OpenViewPayload, pushcutOpenUrl } from './shared'

/**
 * Open one of Pushcut's documented views.
 *
 * @param payload Pushcut view payload.
 * @returns Pushcut open view URL.
 * @example
 * openView({ view: 'notifications' })
 * // => 'pushcut://open/notifications'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openView(payload: OpenViewPayload) {
  return pushcutOpenUrl(payload.view)
}
