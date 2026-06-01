import { kakaoMapUrl } from './shared'
import type { KakaoMapSchemePayload } from './types'

/**
 * Open Kakao Map trend ranking.
 *
 * @param payload Optional scheme payload.
 * @returns Kakao Map trend ranking URL.
 * @example
 * trendRanking()
 * // => 'kakaomap://open?page=placerank&center=map'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function trendRanking(payload: KakaoMapSchemePayload = {}) {
  return kakaoMapUrl('open', { page: 'placerank', center: 'map' }, payload.scheme, 'https')
}
