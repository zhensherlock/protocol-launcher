/**
 * Open command payload definition.
 */
type Open = {
  /**
   * The path to open in App Store.
   * @default ''
   */
  path?: string
}

/**
 * Open App Store.
 *
 * @param payload Open command payload.
 * @returns App Store open URL.
 * @example
 * open()
 * // => 'itms-apps://'
 * @example
 * open({ path: 'account/subscriptions' })
 * // => 'itms-apps://itunes.apple.com/account/subscriptions'
 * @example
 * open({ path: 'discover' })
 * // => 'itms-apps://itunes.apple.com/discover'
 * @example
 * open({ path: 'arcade' })
 * // => 'itms-apps://itunes.apple.com/arcade'
 * @example
 * open({ path: 'updates' })
 * // => 'itms-apps://itunes.apple.com/updates'
 */
export function open(payload: Open = {}) {
  const { path = '' } = payload
  return path ? `itms-apps://itunes.apple.com/${path}` : 'itms-apps://'
}
