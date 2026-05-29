import { infuseLibraryUrl } from './shared'

export interface OpenSeries {
  /**
   * TMDB TV series ID number.
   */
  tmdbId: number
}

/**
 * Open an Infuse TV series library item by TMDB ID.
 *
 * @param payload Infuse TV series link payload.
 * @returns Infuse series deep link.
 * @example
 * openSeries({ tmdbId: 12345 })
 * // => 'infuse://series/12345'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function openSeries(payload: OpenSeries) {
  return infuseLibraryUrl('series', [payload.tmdbId])
}
