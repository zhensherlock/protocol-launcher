import { type TemboSearchGroupPayload, temboSearchUrl } from './shared'

/**
 * Tembo group search payload definition.
 */
export type SearchGroup = TemboSearchGroupPayload

/**
 * Start a Tembo file search in one of the official search groups.
 *
 * @param payload Tembo group search payload.
 * @returns Tembo search URL.
 * @example
 * searchGroup({
 *   query: 'Houdah Software',
 *   group: 'PDF',
 * })
 * // => 'tembo2://search?query=Houdah%20Software&group=PDF'
 * @link https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/
 */
export function searchGroup(payload: SearchGroup) {
  return temboSearchUrl(payload)
}
