import { qs } from '@protocol-launcher/shared'

/**
 * Open Ulysses item (sheet or group) payload definition.
 */
type OpenItem = {
  /**
   * Specifies the item (sheet or group) that should be opened.
   * This can be:
   * - A group name (e.g. 'My Group') that will match the first group having the same name
   * - A path to a particular group (e.g. '/My Group/My Subgroup'). Any path must begin with a slash
   * - A unique identifier of a sheet or group that should be opened
   *
   * @example 'DCj45UWKr_g15y2vBPwJdQ'
   * @example '/Books/Huckleberry Finn'
   * @example 'My Group'
   */
  id: string
  /**
   * URL that should be opened when the action has been successfully completed.
   * If not provided, the user stays in Ulysses.
   * The URL will retrieve at least the following arguments:
   * - targetId: The ID of the sheet or group that was revealed by the action
   * - targetURL: A URL that can be used to open the sheet or group
   *
   * @example 'myapp://x-callback-url/success'
   */
  xSuccess?: string
  /**
   * URL to be opened if an error occurred.
   * It will retrieve the arguments errorCode and errorMessage providing further details on the error.
   * If not provided, the user stays in Ulysses if an error occurred.
   *
   * @example 'myapp://x-callback-url/error'
   */
  xError?: string
  /**
   * By default, when an item is affected by an action, Ulysses reveals it to the user.
   * To prevent this, set to true.
   *
   * @default false
   * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#api-versions
   */
  silentMode?: boolean
}

/**
 * Open Ulysses app.
 *
 * @returns Ulysses open URL.
 * @example
 * open()
 * // => 'ulysses://'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html
 */
export function open() {
  return 'ulysses://'
}

/**
 * Open an item (sheet or group) with a particular identifier in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload Open item definition.
 * @returns Ulysses open URL.
 * @example
 * openItem({
 *   id: 'DCj45UWKr_g15y2vBPwJdQ',
 * })
 * // => 'ulysses://x-callback-url/open?id=DCj45UWKr_g15y2vBPwJdQ'
 * @example
 * openItem({
 *   id: '/Books/Huckleberry Finn',
 * })
 * // => 'ulysses://x-callback-url/open?id=%2FBooks%2FHuckleberry%20Finn'
 * @example
 * openItem({
 *   id: 'My Group',
 *   xSuccess: 'myapp://x-callback-url/success',
 * })
 * // => 'ulysses://x-callback-url/open?id=My%20Group&x-success=myapp%3A%2F%2Fx-callback-url%2Fsuccess'
 * @example
 * openItem({
 *   id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
 *   silentMode: true,
 * })
 * // => 'ulysses://x-callback-url/open?id=hZ7IX2jqKbVmPGlYUXkZjQ&silent-mode=YES'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#open
 */
export function openItem(payload: OpenItem) {
  const { id, xSuccess, xError, silentMode } = payload
  const params = qs({
    id,
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
    ...(silentMode ? { 'silent-mode': 'YES' } : {}),
  })

  return `ulysses://x-callback-url/open${params}`
}
