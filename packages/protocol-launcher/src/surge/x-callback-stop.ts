import { surgeXCallbackUrl } from './shared'

/**
 * Stop Surge through its x-callback-url action.
 *
 * @returns Surge x-callback-url stop URL.
 * @example
 * xCallbackStop()
 * // => 'surge://x-callback-url/stop'
 * @link https://manual.nssurge.com/tools/url-scheme.html
 */
export function xCallbackStop() {
  return surgeXCallbackUrl('stop')
}
