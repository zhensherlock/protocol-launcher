import { kakaoMapUrl } from './shared'
import type { KakaoMapSearch } from './types'

/**
 * Search around a specific coordinate in Kakao Map.
 *
 * @param payload Search payload.
 * @returns Kakao Map search URL.
 * @example
 * search({ q: '맛집', p: '37.3952,127.11044' })
 * // => 'kakaomap://search?q=%EB%A7%9B%EC%A7%91&p=37.3952%2C127.11044'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function search(payload: KakaoMapSearch) {
  const { scheme, q, p } = payload

  return kakaoMapUrl('search', { q, p }, scheme)
}
