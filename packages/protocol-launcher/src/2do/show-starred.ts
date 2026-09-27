import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'
/**
 * Show 'Starred' focus list in 2Do.
 *
 * @param payload Optional callback parameters.
 * @returns 2Do show starred URL.
 * @example
 * showStarred()
 * // => 'twodo://x-callback-url/showStarred'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showStarred(payload: TwoDoCallbacks = {}) {
  return twoDoXCallbackUrl('showStarred', {}, payload)
}
