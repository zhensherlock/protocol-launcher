import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut server view.
 *
 * @returns Pushcut server URL.
 * @example
 * openServer()
 * // => 'pushcut://open/server'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openServer() {
  return pushcutOpenUrl('server')
}
