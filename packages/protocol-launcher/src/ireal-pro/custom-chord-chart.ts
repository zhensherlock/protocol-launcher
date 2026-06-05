import { iRealProCustomChordChartUrl } from './shared'
import type { IRealProCustomChordChartPayload } from './types'

/**
 * Build an iReal Pro custom chord chart import URL.
 *
 * @param payload iReal Pro custom chord chart payload.
 * @returns iReal Pro custom chord chart URL.
 * @example
 * customChordChart({
 *   title: 'Song Title',
 *   composer: 'LastName FirstName',
 *   style: 'Style',
 *   key: 'Ab',
 *   chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
 * })
 * // => 'irealbook://Song%20Title%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D'
 * @link https://www.irealpro.com/ireal-pro-custom-chord-chart-protocol
 */
export function customChordChart(payload: IRealProCustomChordChartPayload) {
  return iRealProCustomChordChartUrl(payload)
}
