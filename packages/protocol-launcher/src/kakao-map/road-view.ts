import { kakaoMapUrl } from './shared'
import type { KakaoMapRoadView } from './types'

/**
 * Open Kakao Map Road View at a specific coordinate.
 *
 * @param payload Road View payload.
 * @returns Kakao Map Road View URL.
 * @example
 * roadView({ p: '37.39529,127.11044' })
 * // => 'kakaomap://roadView?p=37.39529%2C127.11044'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function roadView(payload: KakaoMapRoadView) {
  const { scheme, p } = payload

  return kakaoMapUrl('roadView', { p }, scheme)
}
