import { naverMapUrl } from './shared'
import type { NaverMapSearch } from './types'

/**
 * Search places in NAVER Map.
 *
 * @param payload Search payload.
 * @returns NAVER Map search URL.
 * @example
 * search({ query: 'Coffee', appname: 'com.example.myapp' })
 * // => 'nmap://search?query=Coffee&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function search(payload: NaverMapSearch) {
  const { query, appname } = payload

  return naverMapUrl('search', {
    query,
    appname,
  })
}
