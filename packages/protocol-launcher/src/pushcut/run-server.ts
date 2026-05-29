import { pushcutOpenUrl } from './shared'

/**
 * Open Pushcut's runServer view.
 *
 * @returns Pushcut runServer URL.
 * @example
 * runServer()
 * // => 'pushcut://open/runServer'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function runServer() {
  return pushcutOpenUrl('runServer')
}
