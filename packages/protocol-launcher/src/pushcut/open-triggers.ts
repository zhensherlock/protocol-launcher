import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut triggers view.
 *
 * @returns Pushcut triggers URL.
 * @example
 * openTriggers()
 * // => 'pushcut://open/triggers'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openTriggers() {
  return pushcutOpenUrl('triggers')
}
