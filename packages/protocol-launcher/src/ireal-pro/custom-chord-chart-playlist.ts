import { iRealProCustomChordChartPlaylistUrl } from './shared'
import type { IRealProCustomChordChartPlaylistPayload } from './types'

/**
 * Build an iReal Pro custom chord chart playlist import URL.
 *
 * @param payload iReal Pro custom chord chart playlist payload.
 * @returns iReal Pro custom chord chart playlist URL.
 * @example
 * customChordChartPlaylist({
 *   songs: [
 *     {
 *       title: 'Song 1',
 *       composer: 'LastName FirstName',
 *       style: 'Style',
 *       key: 'Ab',
 *       chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
 *     },
 *     {
 *       title: 'Song 2',
 *       composer: 'LastName FirstName',
 *       style: 'Style',
 *       key: 'Ab',
 *       chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
 *     },
 *     {
 *       title: 'Song 3',
 *       composer: 'LastName FirstName',
 *       style: 'Style',
 *       key: 'Ab',
 *       chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
 *     },
 *   ],
 * })
 * // => 'irealbook://Song%201%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D%3DSong%202%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D%3DSong%203%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D'
 * @link https://www.irealpro.com/ireal-pro-custom-chord-chart-protocol
 */
export function customChordChartPlaylist(payload: IRealProCustomChordChartPlaylistPayload) {
  return iRealProCustomChordChartPlaylistUrl(payload)
}
