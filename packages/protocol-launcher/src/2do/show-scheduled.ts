import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'
/**
 * Show 'Scheduled' focus list in 2Do.
 *
 * @param payload Optional callback parameters.
 * @returns 2Do show scheduled URL.
 * @example
 * showScheduled()
 * // => 'twodo://x-callback-url/showScheduled'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showScheduled(payload: TwoDoCallbacks = {}) {
  return twoDoXCallbackUrl('showScheduled', {}, payload)
}
