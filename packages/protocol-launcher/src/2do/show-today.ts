import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'
/**
 * Show 'Today' focus list in 2Do.
 *
 * @param payload Optional callback parameters.
 * @returns 2Do show today URL.
 * @example
 * showToday()
 * // => 'twodo://x-callback-url/showToday'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showToday(payload: TwoDoCallbacks = {}) {
  return twoDoXCallbackUrl('showToday', {}, payload)
}
