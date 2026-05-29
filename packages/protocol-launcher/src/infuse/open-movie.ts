import { infuseLibraryUrl } from './shared'

export interface OpenMovie {
  /**
   * TMDB movie ID number.
   */
  tmdbId: number
}

/**
 * Open an Infuse movie library item by TMDB ID.
 *
 * @param payload Infuse movie link payload.
 * @returns Infuse movie deep link.
 * @example
 * openMovie({ tmdbId: 12345 })
 * // => 'infuse://movie/12345'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function openMovie(payload: OpenMovie) {
  return infuseLibraryUrl('movie', [payload.tmdbId])
}
