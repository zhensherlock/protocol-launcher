import type { CitymapperXCallbackDirectionsPayload } from './shared'
import { citymapperDirectionsParams, citymapperUrl } from './shared'

/**
 * Launch Citymapper native directions with x-callback-url return parameters.
 *
 * @param payload Citymapper x-callback-url directions payload.
 * @returns Citymapper x-callback-url directions URL.
 * @example
 * xCallbackDirections({
 *   endcoord: '51.537060,-0.079179',
 *   endname: 'The Proud Archivist',
 *   endaddress: '2-10 Hertford Road, London, N1 5ET',
 *   xSource: 'My App Name',
 *   xSuccess: 'myappscheme://',
 * })
 * // => 'citymapper://x-callback-url/directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET&x-source=My%20App%20Name&x-success=myappscheme%3A%2F%2F'
 *
 * @link https://citymapper.com/tools/1053/automatically-generating-citymapper-directions-links
 */
export function xCallbackDirections(payload: CitymapperXCallbackDirectionsPayload) {
  const { xSource, xSuccess } = payload

  return citymapperUrl('citymapper://x-callback-url/directions', {
    ...citymapperDirectionsParams(payload),
    'x-source': xSource,
    'x-success': xSuccess,
  })
}
