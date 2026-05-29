import { pushcutOpenUrl } from './shared'

/**
 * Open Pushcut's monitorServer view.
 *
 * @returns Pushcut monitorServer URL.
 * @example
 * monitorServer()
 * // => 'pushcut://open/monitorServer'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function monitorServer() {
  return pushcutOpenUrl('monitorServer')
}
