import { surgeXCallbackUrl } from './shared'

/**
 * Toggle Surge through its x-callback-url action.
 *
 * @returns Surge x-callback-url toggle URL.
 * @example
 * xCallbackToggle()
 * // => 'surge://x-callback-url/toggle'
 * @link https://manual.nssurge.com/others/url-scheme.html
 */
export function xCallbackToggle() {
  return surgeXCallbackUrl('toggle')
}
