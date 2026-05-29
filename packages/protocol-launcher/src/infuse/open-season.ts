import { infuseLibraryUrl } from './shared'

export interface OpenSeason {
  /**
   * TMDB TV series ID number.
   */
  tmdbId: number
  /**
   * Season number.
   */
  seasonNumber: number
}

/**
 * Open an Infuse TV series season by TMDB ID and season number.
 *
 * @param payload Infuse TV season link payload.
 * @returns Infuse season deep link.
 * @example
 * openSeason({ tmdbId: 12345, seasonNumber: 1 })
 * // => 'infuse://series/12345-1'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function openSeason(payload: OpenSeason) {
  return infuseLibraryUrl('series', [payload.tmdbId, payload.seasonNumber])
}
