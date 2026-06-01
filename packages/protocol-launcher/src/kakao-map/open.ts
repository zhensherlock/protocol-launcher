import { kakaoMapUrl } from './shared'
import type { KakaoMapOpen } from './types'

/**
 * Open Kakao Map, a documented page, or a documented map layer.
 *
 * @param payload Open payload.
 * @returns Kakao Map open URL.
 * @example
 * open()
 * // => 'kakaomap://open'
 * @example
 * open({ page: 'placeSearch' })
 * // => 'kakaomap://open?page=placeSearch'
 * @example
 * open({ layer: 'skyview' })
 * // => 'kakaomap://open?layer=skyview'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function open(payload: KakaoMapOpen = {}) {
  const { scheme, page, layer } = payload

  return kakaoMapUrl('open', { page, layer }, scheme)
}
