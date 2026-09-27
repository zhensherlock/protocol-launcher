import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

/**
 * Bring 2Do for Mac to the front using the public launch action.
 *
 * @param payload Optional x-callback-url parameters.
 * @returns 2Do launch URL.
 * @example
 * launch()
 * // => 'twodo://x-callback-url/launch'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function launch(payload: TwoDoCallbacks = {}) {
  return twoDoXCallbackUrl('launch', {}, payload)
}
