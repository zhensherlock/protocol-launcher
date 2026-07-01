import { organicMapsUrl } from './shared'
import type { OrganicMapsSearch } from './types'

export type SearchPayload = OrganicMapsSearch

/**
 * Search in Organic Maps.
 *
 * @param payload Search payload.
 * @returns Organic Maps search URL.
 * @example
 * search({ cll: '47.3813,8.5889', locale: 'de', query: 'Mame' })
 * // => 'om://search?cll=47.3813,8.5889&locale=de&query=Mame'
 * @link https://omaps.app/api
 */
export function search(payload: SearchPayload) {
  const { cll, locale, query, map, linkType = 'scheme' } = payload

  return organicMapsUrl(
    'search',
    [
      ['cll', cll],
      ['locale', locale],
      ['query', query],
      ['map', map],
    ],
    linkType,
  )
}
