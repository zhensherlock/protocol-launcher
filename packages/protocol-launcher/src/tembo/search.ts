import { type TemboSearchPayload, temboSearchUrl } from './shared'

/**
 * Tembo search payload definition.
 */
export type Search = TemboSearchPayload

/**
 * Start a Tembo file search.
 *
 * @param payload Tembo search payload.
 * @returns Tembo search URL.
 * @example
 * search({
 *   query: 'Houdah Software',
 *   location: '~/Documents',
 *   group: 'PDF',
 * })
 * // => 'tembo2://search?query=Houdah%20Software&location=~/Documents&group=PDF'
 * @link https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/
 */
export function search(payload: Search) {
  return temboSearchUrl(payload)
}
