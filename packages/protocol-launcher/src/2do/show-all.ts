import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'
/**
 * Show 'All' focus list in 2Do.
 *
 * @param payload Optional callback parameters.
 * @returns 2Do show all URL.
 * @example
 * showAll()
 * // => 'twodo://x-callback-url/showAll'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showAll(payload: TwoDoCallbacks = {}) {
  return twoDoXCallbackUrl('showAll', {}, payload)
}
