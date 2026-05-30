import type { CitymapperDirectionsPayload } from './shared'
import { citymapperDirectionsParams, citymapperUrl } from './shared'

/**
 * Launch Citymapper native directions.
 *
 * @param payload Citymapper directions payload.
 * @returns Citymapper native directions URL.
 * @example
 * directions({
 *   endcoord: '51.537060,-0.079179',
 *   endname: 'The Proud Archivist',
 *   endaddress: '2-10 Hertford Road, London, N1 5ET',
 * })
 * // => 'citymapper://directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET'
 *
 * @link https://citymapper.com/tools/1053/automatically-generating-citymapper-directions-links
 */
export function directions(payload: CitymapperDirectionsPayload) {
  return citymapperUrl('citymapper://directions', citymapperDirectionsParams(payload))
}
