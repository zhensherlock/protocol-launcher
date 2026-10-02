import { surgeXCallbackUrl } from './shared'

/**
 * Start Surge through its x-callback-url action.
 *
 * @returns Surge x-callback-url start URL.
 * @example
 * xCallbackStart()
 * // => 'surge://x-callback-url/start'
 * @link https://manual.nssurge.com/tools/url-scheme.html
 */
export function xCallbackStart() {
  return surgeXCallbackUrl('start')
}
