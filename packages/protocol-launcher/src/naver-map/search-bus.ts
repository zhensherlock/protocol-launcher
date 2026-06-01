import { naverMapUrl } from './shared'
import type { NaverMapSearch } from './types'

/**
 * Search bus routes in NAVER Map.
 *
 * @param payload Bus search payload.
 * @returns NAVER Map bus search URL.
 * @example
 * searchBus({ query: 'M4101', appname: 'com.example.myapp' })
 * // => 'nmap://search/bus?query=M4101&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function searchBus(payload: NaverMapSearch) {
  const { query, appname } = payload

  return naverMapUrl('search/bus', {
    query,
    appname,
  })
}
