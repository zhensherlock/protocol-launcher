import { okJsonActionUrl } from './shared'

/**
 * Show the OK JSON history window.
 *
 * @returns OK JSON history URL.
 * @example
 * history()
 * // => 'okjson://history'
 * @link https://docs.okjson.app/url-schemes
 */
export function history() {
  return okJsonActionUrl('history')
}
