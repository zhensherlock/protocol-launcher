import { type CapacitiesXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Return the object that is currently opened in Capacities.
 *
 * @param payload Capacities x-callback-url payload.
 * @returns Capacities getCurrentObject x-callback-url.
 * @example
 * getCurrentObject({
 *   xSource: 'SourceApp',
 *   xSuccess: 'sourceapp://x-callback-url/response',
 *   xError: 'sourceapp://x-callback-url/error',
 * })
 * // => 'capacities://x-callback-url/getCurrentObject?x-source=SourceApp&x-success=sourceapp%3A%2F%2Fx-callback-url%2Fresponse&x-error=sourceapp%3A%2F%2Fx-callback-url%2Ferror'
 * @link https://docs.capacities.io/developer/x-callback-urls
 */
export function getCurrentObject(payload: CapacitiesXCallback = {}) {
  return xCallbackUrl('getCurrentObject', xCallbackParams(payload))
}
