import { type TemboSearchInLocationPayload, temboSearchUrl } from './shared'

/**
 * Tembo location search payload definition.
 */
export type SearchInLocation = TemboSearchInLocationPayload

/**
 * Start a Tembo file search with one or more search locations.
 *
 * @param payload Tembo location search payload.
 * @returns Tembo search URL.
 * @example
 * searchInLocation({
 *   query: 'Houdah Software',
 *   location: '~/Documents',
 * })
 * // => 'tembo2://search?query=Houdah%20Software&location=~/Documents'
 * @link https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/
 */
export function searchInLocation(payload: SearchInLocation) {
  return temboSearchUrl(payload)
}
