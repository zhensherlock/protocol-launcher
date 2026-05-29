import { infuseLibraryUrl } from './shared'

export interface OpenEpisode {
  /**
   * TMDB TV series ID number.
   */
  tmdbId: number
  /**
   * Season number.
   */
  seasonNumber: number
  /**
   * Episode number.
   */
  episodeNumber: number
}

/**
 * Open an Infuse TV series episode by TMDB ID, season number, and episode number.
 *
 * @param payload Infuse TV episode link payload.
 * @returns Infuse episode deep link.
 * @example
 * openEpisode({ tmdbId: 12345, seasonNumber: 1, episodeNumber: 2 })
 * // => 'infuse://series/12345-1-2'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function openEpisode(payload: OpenEpisode) {
  return infuseLibraryUrl('series', [payload.tmdbId, payload.seasonNumber, payload.episodeNumber])
}
